// CLI: tsx server/import/run.ts <path-to-dump.jsonl>
//
// Applies an external Sillok dump on top of the seeded DB. For every record
// whose `id` matches a sillok.source_id, the imported text replaces our
// authored copy and the row is marked provenance='imported'. Records whose
// id has no match are reported but skipped — the dump may be a superset.
import path from 'node:path';
import { openDb, applySchema } from '../db.js';
import { readJsonl, paragraphize } from './jsonl.js';
import type { ImportedRecord } from './types.js';

async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('usage: db:import <path-to-dump.jsonl>');
    process.exit(1);
  }

  const db = openDb();
  applySchema(db);

  const lookup = db.prepare('SELECT id FROM sillok WHERE source_id = ?');
  const update = db.prepare(`
    UPDATE sillok
       SET volume           = COALESCE(@volume,           volume),
           date_lunar       = COALESCE(@date_lunar,       date_lunar),
           date_solar       = COALESCE(@date_solar,       date_solar),
           title_ko         = COALESCE(@title_ko,         title_ko),
           original_html    = COALESCE(@original_html,    original_html),
           translation_html = COALESCE(@translation_html, translation_html),
           commentary_html  = COALESCE(@commentary_html,  commentary_html),
           provenance       = 'imported',
           imported_at      = @ts
     WHERE id = @id
  `);

  const records: ImportedRecord[] = [];
  for await (const rec of readJsonl(path.resolve(file))) records.push(rec);

  const ts = new Date().toISOString();
  let matched = 0;
  let missing = 0;

  const tx = db.transaction((batch: ImportedRecord[]) => {
    for (const rec of batch) {
      const row = lookup.get(rec.id) as { id: number } | undefined;
      if (!row) { missing++; continue; }
      const original_html =
        rec.original_html ?? (rec.original ? paragraphize(rec.original) : null);
      const translation_html =
        rec.translation_html ?? (rec.translation ? paragraphize(rec.translation) : null);
      const commentary_html =
        rec.commentary_html ?? (rec.commentary ? paragraphize(rec.commentary) : null);
      update.run({
        id: row.id,
        volume: rec.volume ?? null,
        date_lunar: rec.date_lunar ?? null,
        date_solar: rec.date_solar ?? null,
        title_ko: rec.title_ko ?? null,
        original_html,
        translation_html,
        commentary_html,
        ts,
      });
      matched++;
    }
  });
  tx(records);

  console.log(`[import] ${matched}/${records.length} records matched, ${missing} unmatched`);
  db.close();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
