import express from 'express';
import { openDb } from './db.js';
import type { Era, King, EventRow, SillokEntry } from './types.js';

const db = openDb();
const app = express();

interface EraRow {
  id: number; ordinal: number; name_ko: string; kings_range: string;
  period: string; keyword: string; description: string;
  color_primary: string; color_secondary: string;
}

function eraFromRow(r: EraRow): Era {
  return {
    id: r.id, ordinal: r.ordinal, name_ko: r.name_ko,
    kings_range: r.kings_range, period: r.period, keyword: r.keyword,
    description: r.description,
    color: { primary: r.color_primary, secondary: r.color_secondary },
  };
}

app.get('/api/eras', (_req, res) => {
  const rows = db.prepare('SELECT * FROM eras ORDER BY ordinal').all() as EraRow[];
  res.json(rows.map(eraFromRow));
});

app.get('/api/kings', (_req, res) => {
  const kings = db.prepare('SELECT * FROM kings ORDER BY ordinal').all() as King[];
  res.json(kings);
});

app.get('/api/kings/:id', (req, res) => {
  const k = db.prepare('SELECT * FROM kings WHERE id = ?').get(req.params.id) as King | undefined;
  if (!k) return res.status(404).json({ error: 'king not found' });
  res.json(k);
});

app.get('/api/kings/:id/events', (req, res) => {
  const rows = db.prepare(
    'SELECT * FROM events WHERE king_id = ? ORDER BY year, id'
  ).all(req.params.id) as Array<Omit<EventRow, 'tags'> & { tags: string | null }>;
  res.json(rows.map(r => ({ ...r, tags: r.tags ? JSON.parse(r.tags) : [] })));
});

app.get('/api/events/:id', (req, res) => {
  const r = db.prepare('SELECT * FROM events WHERE id = ?').get(req.params.id) as
    (Omit<EventRow, 'tags'> & { tags: string | null }) | undefined;
  if (!r) return res.status(404).json({ error: 'event not found' });
  res.json({ ...r, tags: r.tags ? JSON.parse(r.tags) : [] });
});

app.get('/api/events/:id/sillok', (req, res) => {
  const rows = db.prepare(
    'SELECT * FROM sillok WHERE event_id = ? ORDER BY is_hero DESC, id'
  ).all(req.params.id) as Array<Omit<SillokEntry, 'is_hero'> & { is_hero: number }>;
  res.json(rows.map(r => ({ ...r, is_hero: r.is_hero === 1 })));
});

app.get('/api/sillok/:id', (req, res) => {
  const r = db.prepare('SELECT * FROM sillok WHERE id = ?').get(req.params.id) as
    (Omit<SillokEntry, 'is_hero'> & { is_hero: number }) | undefined;
  if (!r) return res.status(404).json({ error: 'sillok not found' });
  res.json({ ...r, is_hero: r.is_hero === 1 });
});

const port = Number(process.env.API_PORT || 3001);
app.listen(port, () => {
  console.log(`[api] sillok api listening on :${port}`);
});
