import fs from 'node:fs';
import readline from 'node:readline';
import type { ImportedRecord } from './types.js';

export async function* readJsonl(path: string): AsyncGenerator<ImportedRecord> {
  const stream = fs.createReadStream(path, { encoding: 'utf8' });
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });
  let lineNum = 0;
  for await (const raw of rl) {
    lineNum++;
    const line = raw.trim();
    if (!line || line.startsWith('//')) continue;
    let rec: ImportedRecord;
    try {
      rec = JSON.parse(line);
    } catch (e) {
      throw new Error(`${path}:${lineNum} — invalid JSON (${(e as Error).message})`);
    }
    if (!rec.id) {
      throw new Error(`${path}:${lineNum} — missing required field "id"`);
    }
    yield rec;
  }
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function paragraphize(s: string): string {
  return s
    .split(/\n{2,}/)
    .map(p => `<p>${escapeHtml(p.trim())}</p>`)
    .join('');
}
