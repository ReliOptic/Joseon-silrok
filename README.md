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

## Install

**Prerequisites**

| | Version | Notes |
|---|---|---|
| Node.js | 20 LTS or newer | `node -v` |
| npm | bundled with Node | `npm -v` |
| Build tools | platform default | `better-sqlite3` compiles a native addon — macOS needs Xcode CLT, Linux needs `build-essential` + `python3`, Windows needs the Visual Studio C++ build tools. |

**Steps**

```bash
git clone https://github.com/ReliOptic/Joseon-silrok.git
cd Joseon-silrok
npm install                  # installs deps and compiles better-sqlite3
npm run db:seed              # builds db/sillok.sqlite from server/seed/*
```

The SQLite file lives at `db/sillok.sqlite` and is git-ignored — re-run
`npm run db:seed` any time the seed sources change.

## Use

### Start the app (development)

```bash
npm run dev
```

This launches two processes via `concurrently`:

- **Web** — Vite at <http://localhost:3000>
- **API** — Express at <http://localhost:3001>, proxied through Vite as `/api/*`

Open <http://localhost:3000> and you'll see the dynasty timeline. Browser
controls:

| Action | Result |
|---|---|
| Click an era's king card | Zoom into Level 2 (events for that king) |
| Click an event | Zoom into Level 3 (sillok index) |
| Click a sillok card | Zoom into Level 4 (full original + translation + commentary) |
| Top-left back arrow / breadcrumb | Pop one level, or jump to any prior frame |
| Top-right clock icon | Open the **history panel** — every zoom you've made, click any entry to teleport |
| `Ctrl` + scroll wheel | Zoom out one level |
| Permalink at the bottom of a sillok view | Open the canonical entry on `sillok.history.go.kr` |

### Production build

```bash
npm run build      # re-seeds the DB, then bundles to ./dist
npm run preview    # serves ./dist (front-end only)
```

For full production deployment you also need to run the API
(`npm run dev:api`, or run `tsx server/index.ts` under your process
manager of choice) so the Vite preview can reach `/api/*`. In AI Studio
on Cloud Run, both the static bundle and the express server ship in a
single container — `db/sillok.sqlite` is built during `npm run build`
and read at request time by the API.

### Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Web + API together (recommended for local work) |
| `npm run dev:web` | Vite only (port 3000) |
| `npm run dev:api` | Express only (port 3001) |
| `npm run db:seed` | Rebuilds `db/sillok.sqlite` from `server/seed/*` and runs the consistency check |
| `npm run db:import <jsonl>` | Overwrites matching rows from an external dump (see *Data integrity* below) |
| `npm run db:verify <jsonl>` | Read-only diff between the dump and the seeded DB (exit 1 on drift, suitable for CI) |
| `npm run build` | `db:seed` + `vite build` |
| `npm run preview` | Serves `./dist` |
| `npm run lint` | `tsc --noEmit` |
| `npm run clean` | Removes `dist/` and `db/sillok.sqlite` |

### Adding or editing entries by hand

All authored content lives under `server/seed/`:

- `eras.ts` — the four periodisation blocks
- `kings.ts` — 27 monarchs with reign metadata
- `events/<NN>-<king>.ts` — chronological events for a single king
- `events/era<N>.ts` — headline events for eras 2–4
- `events/index.ts` — aggregator (don't forget to add new files here)

After editing, run `npm run db:seed` once and refresh the browser.
The seeder will refuse to write the DB if any king↔era, year↔reign, or
`source_url` invariant fails the consistency check.

### Troubleshooting

| Symptom | Fix |
|---|---|
| `better-sqlite3` install fails | Install the platform build tools listed above, then `rm -rf node_modules && npm install` |
| `npm run db:seed` complains about missing columns | The DB was built against an older schema — `npm run clean && npm run db:seed` |
| Browser shows empty grid / no kings | API isn't running; check that port 3001 is up (`curl http://localhost:3001/api/kings | jq length`) |
| Port 3000 or 3001 is busy | `API_PORT=4001 npm run dev:api` and update `vite.config.ts`'s proxy target, or `vite --port=3010` for the web side |

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
