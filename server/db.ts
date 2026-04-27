import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

export const DB_PATH = path.resolve(
  repoRoot,
  process.env.DB_PATH || 'db/sillok.sqlite',
);

export function openDb() {
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  return db;
}

export function applySchema(db: Database.Database) {
  const ddl = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  db.exec(ddl);
}
