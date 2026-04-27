// CLI: tsx server/import/verify.ts <path-to-dump.jsonl>
//
// Compares the seeded DB against an external dump WITHOUT writing. For every
// matching record, we strip HTML and normalise whitespace + Hanja punctuation
// then diff. Reports drift counts and prints a few samples. Exit code is
// non-zero when drift > 0 so this can gate CI.
import path from 'node:path';
import { openDb } from '../db.js';
import { readJsonl } from './jsonl.js';
import type { ImportedRecord } from './types.js';

function normalise(s: string | null | undefined): string {
  if (!s) return '';
  return s
    .replace(/<[^>]+>/g, '')              // strip tags
    .replace(/[　\s]+/g, ' ')         // collapse whitespace incl. ideographic space
    .replace(/[、。，．·•]/g, ',')         // unify punctuation
    .replace(/\s+([,.;:])/g, '$1')        // tighten before punct
    .trim();
}

interface Drift {
  source_id: string;
  field: 'original' | 'translation' | 'commentary';
  db: string;
  dump: string;
}

async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('usage: db:verify <path-to-dump.jsonl>');
    process.exit(2);
  }

  const db = openDb();
  const lookup = db.prepare(`
    SELECT source_id, original_html, translation_html, commentary_html
      FROM sillok WHERE source_id = ?
  `);

  let matched = 0, missing = 0;
  const drifts: Drift[] = [];

  for await (const rec of readJsonl(path.resolve(file)) as AsyncIterable<ImportedRecord>) {
    const row = lookup.get(rec.id) as
      | { source_id: string; original_html: string; translation_html: string; commentary_html: string | null }
      | undefined;
    if (!row) { missing++; continue; }
    matched++;

    const checks: Array<{ field: Drift['field']; db: string; dump: string | undefined }> = [
      { field: 'original',    db: row.original_html,           dump: rec.original_html ?? rec.original },
      { field: 'translation', db: row.translation_html,        dump: rec.translation_html ?? rec.translation },
      { field: 'commentary',  db: row.commentary_html ?? '',   dump: rec.commentary_html ?? rec.commentary },
    ];
    for (const c of checks) {
      if (c.dump == null) continue;
      const a = normalise(c.db);
      const b = normalise(c.dump);
      if (a !== b) drifts.push({ source_id: row.source_id, field: c.field, db: a, dump: b });
    }
  }

  console.log(`[verify] matched=${matched} missing=${missing} drift=${drifts.length}`);
  for (const d of drifts.slice(0, 5)) {
    console.log(`\n  ${d.source_id} · ${d.field}`);
    console.log(`    db   : ${d.db.slice(0, 120)}${d.db.length > 120 ? '…' : ''}`);
    console.log(`    dump : ${d.dump.slice(0, 120)}${d.dump.length > 120 ? '…' : ''}`);
  }
  if (drifts.length > 5) console.log(`\n  …and ${drifts.length - 5} more.`);

  db.close();
  process.exit(drifts.length === 0 ? 0 : 1);
}

main().catch(e => {
  console.error(e);
  process.exit(2);
});
