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
