<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 조선왕조실록 (Joseon Sillok)

A zoomable visual reader for 500 years of Joseon dynasty history, backed by a
local SQLite mirror of curated entries from the *Annals of the Joseon Dynasty*
(조선왕조실록, sillok.history.go.kr — 국사편찬위원회).

View your app in AI Studio: https://ai.studio/apps/b18cb7eb-a6f3-4a22-b570-27f2af5b1976

## Architecture

- **Client**: React + Vite, GSAP zoom transitions, four zoom levels
  (Era → King → Year → Sillok entry).
- **API**: Express + better-sqlite3, served at `/api/*` (Vite proxies in dev).
- **Data**: HTML-fragment columns (`original_html`, `translation_html`,
  `commentary_html`) so vertical Hanja typesetting and inline annotations are
  preserved. Seeded from sources at build time via `npm run db:seed`.

## Run locally

**Prereqs:** Node.js 20+

1. `npm install`
2. `npm run db:seed` — builds `db/sillok.sqlite` from `server/seed/*`
3. `npm run dev` — runs Vite (3000) and the API (3001) concurrently

## Data integrity & external dataset

Every `sillok` row carries:

- `source_url` — canonical permalink at `sillok.history.go.kr/id/<id>`
- `source_id` — the parsed permalink id (e.g. `kda_12512030_002`)
- `provenance` — `authored` (curated in `server/seed/events/*`) or
  `imported` (overwritten by an external dump)

To replace authored text with the official corpus, obtain a dump from the
[공공데이터포털 조선왕조실록 데이터셋](https://www.data.go.kr/data/15053647/fileData.do)
(국사편찬위원회), convert it to **JSONL** with one record per line, then run:

```bash
npm run db:import path/to/sillok.jsonl   # overwrite matching rows
npm run db:verify path/to/sillok.jsonl   # compare without writing; non-zero exit on drift
```

### JSONL record schema

```jsonc
{
  "id":           "kda_12512030_002",            // required, matches sillok.source_id
  "volume":       "세종실록 102권, 세종 25년 12월 30일",
  "date_lunar":   "계해년 12월 30일 경술",
  "title_ko":     "임금이 친히 언문 28자를 짓다",
  "original":     "是月, 上親制諺文二十八字…",     // raw text → wrapped in <p>
  "translation":  "이달에 임금이 친히 언문 …",      // raw text → wrapped in <p>
  "commentary":   "사신은 논한다. …",
  // …or supply preformatted *_html fields to skip wrapping.
}
```

Records whose `id` has no matching `source_id` in the DB are reported and
skipped — the dump may legitimately be a superset of what we render.
