import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '../src/data');

const kingFiles = readdirSync(dataDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts')
  .sort();

const rows = [];

for (const file of kingFiles) {
  const content = readFileSync(join(dataDir, file), 'utf-8');
  const kingId = file.replace('.ts', '');

  // count event blocks by counting year: occurrences inside events array
  const eventYearMatches = content.match(/year:\s*\d+/g) ?? [];
  const eventCount = eventYearMatches.length;

  // count storyEntry and sillokEntry occurrences (each declaration = 1 entry)
  const storyMatches = content.match(/storyEntry\s*:/g) ?? [];
  const sillokMatches = content.match(/sillokEntry\s*:/g) ?? [];

  // subtract 1 from sillokEntry count if root-level sillokEntry exists (it always does)
  // root sillokEntry is outside events array — detect by checking if count > event-level ones
  // simpler: just report raw counts, root sillokEntry is 1 extra
  const storyCount = storyMatches.length;
  const sillokCount = sillokMatches.length;

  rows.push({ kingId, eventCount, storyCount, sillokCount });
}

// table header
const header = ['King', 'Events', 'storyEntry', 'sillokEntry'].map(h => h.padEnd(18)).join('| ');
const separator = '-'.repeat(header.length);

console.log('\n=== Joseon Sillok — Coverage Audit ===\n');
console.log(header);
console.log(separator);

for (const row of rows) {
  const storyFlag = row.storyCount === 0 ? '0  !!MISSING!!' : String(row.storyCount);
  const cols = [
    row.kingId.padEnd(18),
    String(row.eventCount).padEnd(18),
    storyFlag.padEnd(18),
    String(row.sillokCount).padEnd(18),
  ];
  console.log(cols.join('| '));
}

console.log(separator);
console.log(`\nTotal kings: ${rows.length}`);
const missingStory = rows.filter(r => r.storyCount === 0);
if (missingStory.length > 0) {
  console.log(`\n!! Kings with NO storyEntry: ${missingStory.map(r => r.kingId).join(', ')}`);
} else {
  console.log('\nAll kings have at least one storyEntry.');
}
