import { openDb, applySchema, DB_PATH } from '../db.js';
import { ERAS } from './eras.js';
import { KINGS } from './kings.js';
import { ALL_EVENTS } from './events/index.js';
import type { SeedEvent } from './types.js';

function validate(events: SeedEvent[]) {
  const kingIds = new Set(KINGS.map(k => k.id));
  const errors: string[] = [];

  for (const k of KINGS) {
    if (!ERAS.find(e => e.ordinal === k.era_ordinal)) {
      errors.push(`king ${k.id} references missing era ordinal ${k.era_ordinal}`);
    }
    if (k.reign_end < k.reign_start) {
      errors.push(`king ${k.id} reign_end < reign_start`);
    }
  }

  for (const e of events) {
    if (!kingIds.has(e.king_id)) {
      errors.push(`event "${e.title_ko}" references unknown king ${e.king_id}`);
    }
    const k = KINGS.find(k => k.id === e.king_id);
    if (k && (e.year < k.reign_start || e.year > k.reign_end + 1)) {
      // +1 tolerance for end-of-reign 양위/즉위 events recorded under both kings
      errors.push(
        `event "${e.title_ko}" year ${e.year} outside ${k.id} reign ${k.reign_start}-${k.reign_end}`,
      );
    }
    for (const s of e.sillok ?? []) {
      if (!s.source_url.startsWith('https://sillok.history.go.kr/')) {
        errors.push(`sillok "${s.title_ko}" has non-canonical source_url`);
      }
    }
  }

  if (errors.length) {
    console.error('[seed] consistency check failed:');
    for (const e of errors) console.error('  - ' + e);
    process.exit(1);
  }
  console.log(`[seed] consistency check passed (${KINGS.length} kings, ${events.length} events)`);
}

function main() {
  validate(ALL_EVENTS);

  const db = openDb();
  applySchema(db);

  db.exec('DELETE FROM sillok; DELETE FROM events; DELETE FROM kings; DELETE FROM eras;');

  const insertEra = db.prepare(`
    INSERT INTO eras (ordinal, name_ko, kings_range, period, keyword, description, color_primary, color_secondary)
    VALUES (@ordinal, @name_ko, @kings_range, @period, @keyword, @description, @color_primary, @color_secondary)
  `);
  const eraOrdinalToId = new Map<number, number>();
  for (const e of ERAS) {
    const info = insertEra.run({
      ordinal: e.ordinal,
      name_ko: e.name_ko,
      kings_range: e.kings_range,
      period: e.period,
      keyword: e.keyword,
      description: e.description,
      color_primary: e.color.primary,
      color_secondary: e.color.secondary,
    });
    eraOrdinalToId.set(e.ordinal, Number(info.lastInsertRowid));
  }

  const insertKing = db.prepare(`
    INSERT INTO kings (id, era_id, ordinal, name_ko, name_hanja, reign_start, reign_end, years, summary)
    VALUES (@id, @era_id, @ordinal, @name_ko, @name_hanja, @reign_start, @reign_end, @years, @summary)
  `);
  for (const k of KINGS) {
    insertKing.run({
      id: k.id,
      era_id: eraOrdinalToId.get(k.era_ordinal)!,
      ordinal: k.ordinal,
      name_ko: k.name_ko,
      name_hanja: k.name_hanja,
      reign_start: k.reign_start,
      reign_end: k.reign_end,
      years: Math.max(1, k.reign_end - k.reign_start),
      summary: k.summary,
    });
  }

  const insertEvent = db.prepare(`
    INSERT INTO events (king_id, year, reign_year, lunar_date, title_ko, title_hanja, summary_html, tags)
    VALUES (@king_id, @year, @reign_year, @lunar_date, @title_ko, @title_hanja, @summary_html, @tags)
  `);
  const insertSillok = db.prepare(`
    INSERT INTO sillok (event_id, volume, date_lunar, date_solar, title_ko, original_html, translation_html, commentary_html, source_url, is_hero)
    VALUES (@event_id, @volume, @date_lunar, @date_solar, @title_ko, @original_html, @translation_html, @commentary_html, @source_url, @is_hero)
  `);

  let sillokCount = 0;
  for (const ev of ALL_EVENTS) {
    const info = insertEvent.run({
      king_id: ev.king_id,
      year: ev.year,
      reign_year: ev.reign_year ?? null,
      lunar_date: ev.lunar_date ?? null,
      title_ko: ev.title_ko,
      title_hanja: ev.title_hanja ?? null,
      summary_html: ev.summary_html,
      tags: JSON.stringify(ev.tags ?? []),
    });
    const eventId = Number(info.lastInsertRowid);
    for (const s of ev.sillok ?? []) {
      insertSillok.run({
        event_id: eventId,
        volume: s.volume ?? null,
        date_lunar: s.date_lunar ?? null,
        date_solar: s.date_solar ?? null,
        title_ko: s.title_ko,
        original_html: s.original_html,
        translation_html: s.translation_html,
        commentary_html: s.commentary_html ?? null,
        source_url: s.source_url,
        is_hero: s.is_hero ? 1 : 0,
      });
      sillokCount++;
    }
  }

  console.log(`[seed] db built at ${DB_PATH}`);
  console.log(`[seed]   eras=${ERAS.length}  kings=${KINGS.length}  events=${ALL_EVENTS.length}  sillok=${sillokCount}`);
  db.close();
}

main();
