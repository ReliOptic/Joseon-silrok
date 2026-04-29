# Data Audit — src/data + scripts

**Date:** 2026-04-29
**Scope:** `src/data/*.ts` (30 files), `scripts/*.mjs` (5 files)

---

## Violations Found & Fixed

### FIXED — `src/data/hooklines.ts:1`
**Violation:** `Record<string, string>` — mutable type on a static constant.
**Fix:** Changed to `Readonly<Record<string, string>>`.

---

## Clean (No Violations)

| Check | Result |
|-------|--------|
| Default exports | 0 — all named exports |
| `any` usage | 0 |
| Export naming (`{KING}_DATA`) | All 27 king files consistent |
| `readonly` on KingData fields | All fields readonly in `king.types.ts` |
| `readonly` on `STORY_MANIFEST` | `readonly StoryManifestEntry[]` — correct |
| Import order (external → internal → types) | All king files: single `import type { KingData }` — correct |
| `story-manifest.ts` | No imports needed (standalone) — correct |
| `index.ts` exports | `loadKingData` named export — correct |

---

## Scripts Assessment

| File | Lines | Issues |
|------|-------|--------|
| `build-story-manifest.mjs` | 109 | None — functions under 50 lines |
| `audit-coverage.mjs` | 61 | None |
| `fetch-sillok.mjs` | 192 | None — CLI tool, console I/O appropriate |
| `fetch-all-kings.mjs` | 382 | None — CLI tool, console.error for progress appropriate |
| `fetch-itkc.mjs` | 388 | None — CLI tool |

Note: `console.log`/`console.error` in scripts is intentional CLI output, not error-handling misuse.
The structured-logging rule applies to application services (`src/services/`), not node CLI scripts.

---

## Pre-existing Build Error (Out of Scope)

`src/components/TimelineBar.tsx:31,67,104` — `TS2503: Cannot find namespace 'JSX'`.
Pre-dates this audit. Not in scope (`src/components/` is read-only for this task).

---

## Script Verification

```
node scripts/build-story-manifest.mjs
→ Wrote 158 story entries across 27 kings  ✓

node scripts/audit-coverage.mjs
→ All 27 kings have storyEntry coverage  ✓
  (hooklines.ts and story-manifest.ts flagged as false positives —
   audit-coverage scans all .ts files in data/, not just king files)
```
