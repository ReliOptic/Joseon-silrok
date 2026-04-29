# A11Y Audit Report — Joseon-silrok Interactive Viewer

**Scope**: `index.html`, `src/App.tsx`, `src/components/*` (13 component files)
**Target**: WCAG 2.1 Level AA
**Date**: 2026-04-29

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 4 |
| Major    | 9 |
| Minor    | 7 |
| **Total** | **20** |

**Estimated Lighthouse a11y score: 55–65 / 100** — blocked primarily by missing landmarks, contrast failures, and lack of reduced-motion support.

---

## 1. Semantic HTML — Critical: 1, Major: 2

### [Critical] C-SEM-1 — No `<main>` landmark
- **File**: `src/App.tsx:335`
- **Current**: `<div className="relative w-full h-screen ...">` as root container. Only `<nav>` is a landmark.
- **WCAG**: 1.3.1 Info and Relationships, 4.1.2 Name Role Value
- **Fix**: Wrap level views in `<main aria-label="실록 콘텐츠">` (e.g., on the `containerRef` div).

### [Major] M-SEM-1 — Event list items in Level2 are clickable `<div>`
- **File**: `src/components/Level2EventView.tsx:58`
- **Current**: `<div onClick={() => onSelectEvent(i)}>` — not focusable.
- **Fix**: Change to `<button>` or add `role="button" tabIndex={0} onKeyDown` + `aria-label`.

### [Major] M-SEM-2 — Detail card in Level3 is clickable `<div>`
- **File**: `src/components/Level3DetailView.tsx:51-53`
- **Fix**: Same pattern as M-SEM-1.

---

## 2. aria-label / role — Critical: 1, Major: 2

### [Critical] C-ARIA-1 — Breadcrumb navigation uses `<span onClick>`
- **File**: `src/App.tsx:346-365`
- **Current**: Four `<span className="cursor-pointer" onClick>` — no role, no tabIndex, no keyboard handler.
- **WCAG**: 2.1.1, 4.1.2, 1.3.1
- **Fix**: Replace with `<button>` inside `<nav aria-label="탐색 경로"><ol role="list">`.

### [Major] M-ARIA-1 — SearchModal no `role="dialog"` / focus trap
- **File**: `src/components/SearchModal.tsx:70-73`
- **Fix**: `role="dialog" aria-modal="true" aria-label="사건 검색"` + focus trap (focus-trap-react).

### [Major] M-ARIA-2 — Level2 decorative SVG missing `aria-hidden`
- **File**: `src/components/Level2EventView.tsx:62`
- **Fix**: Add `aria-hidden="true"`.

---

## 3. Keyboard Navigation — Critical: 1, Major: 1

### [Critical] C-KB-1 — Multiple interactive elements unreachable by keyboard
- Breadcrumbs (`App.tsx:346-365`)
- Event cards (`Level2EventView.tsx:58`)
- Detail card (`Level3DetailView.tsx:51-53`)
- TransitionCard (`TransitionCard.tsx:43`) — click-to-dismiss without keyboard equivalent
- No `onKeyDown` handlers anywhere in the component tree.
- **WCAG**: 2.1.1 Keyboard

### [Major] M-KB-1 — TimelineBar `focus:outline-none` without replacement
- **File**: `src/components/TimelineBar.tsx:138`
- **Fix**: `focus-visible:ring-2 focus-visible:ring-[#1F3A69] focus-visible:ring-offset-1`.

---

## 4. Focus Visibility — Major: 1

### [Major] M-FOC-1 — No global focus-visible styles
- **File**: `src/index.css` (no `:focus`/`:focus-visible` rules)
- **Fix**:
  ```css
  :focus-visible {
    outline: 2px solid #1F3A69;
    outline-offset: 2px;
    border-radius: 4px;
  }
  ```

---

## 5. Contrast Ratio — Critical: 1, Major: 2

### [Critical] C-CON-1 — Pervasive `opacity-20`–`opacity-40` on informational text (40+ instances)
- `TimelineBar.tsx:169,181`: `text-[9px] opacity-25` "1392"/"1910" → ~1.8:1 (need 4.5:1)
- `Level4SillokView.tsx:131`: `opacity-20` "국사편찬위원회 제공" → ~1.5:1
- `Level4SillokView.tsx:43`: `opacity-40` king/year header → ~2.8:1
- `Level35StoryView.tsx:117`: `opacity-20` imagePrompt on dark bg → ~1.4:1
- **WCAG**: 1.4.3 Contrast (Minimum)
- **Fix**: Replace text `opacity-*` with explicit colors meeting 4.5:1. For decorative-only, add `aria-hidden="true"`.

### [Major] M-CON-1 — L3.5 white text on dark gradient — variable contrast
- **File**: `src/components/Level35StoryView.tsx:82,110,117`
- **Fix**: Scene counter `opacity-70` minimum; imagePrompt `opacity-50` or `aria-hidden`.

### [Major] M-CON-2 — `disabled:opacity-30` below readable contrast
- **Files**: `App.tsx:387,391`, `MobileBottomNav.tsx:26,36`
- **Fix**: Use `disabled:opacity-50`.

---

## 6. Screen Reader — Major: 1, Minor: 3

### [Major] M-SR-1 — No `aria-live` for dynamic content changes
- **Files**: `App.tsx:74-137` (slideAnimate, zoomIn, zoomOut)
- **Fix**: Visually-hidden `<div aria-live="polite" aria-atomic="true">` announcing level/king/event.

### [Minor] m-SR-1 — Heading hierarchy inconsistency
- `Level2EventView.tsx`: h1 → h3 (skips h2)
- **Fix**: Change event titles to `<h2>`.

### [Minor] m-SR-2 — TransitionCard ephemeral, no announcement
- **Fix**: Add `role="status"` or `aria-live="polite"`.

### [Minor] m-SR-3 — OnboardingHint no `role`
- **Fix**: Add `role="status"`.

---

## 7. Motion Sensitivity — Minor: 2

### [Minor] m-MOT-1 — No `prefers-reduced-motion` support
- 34 GSAP animation calls in codebase, zero `prefers-reduced-motion` references.
- **Fix**:
  ```ts
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) gsap.globalTimeline.timeScale(100);
  ```

### [Minor] m-MOT-2 — KingTransitionEffect / EraTransitionEffect no skip
- **Fix**: Add click/keydown handler to kill timeline early (like TransitionCard).

---

## 8. Language Marking — Minor: 1

### [Minor] m-LANG-1 — Hanja text lacks inline `lang`
- **File**: `src/components/Level4SillokView.tsx:85-87` (vertical-rl original text)
- **Fix**: `lang="ko-Hani"` (or `lang="zh-Hant"`) on the original text container.

---

## 9. Touch Target Size — Minor: 1

### [Minor] m-TCH-1 — L3.5 dot indicators 6×6px
- **File**: `src/components/Level35StoryView.tsx:127`
- **WCAG**: 2.5.8 Target Size (Minimum) — 24×24px
- **Fix**: Keep dot small, add `min-w-[44px] min-h-[44px]` padding area.

---

## Top 5 Priority Fixes (Highest Impact)

1. **[C-KB-1] Keyboard accessibility** — Convert `<span onClick>` breadcrumbs and clickable `<div>` to `<button>`. (~30 min)
2. **[C-SEM-1] Add `<main>` landmark** — Single-line change at `App.tsx:396`. (~5 min)
3. **[C-CON-1] Fix contrast on opacity-based text** — Replace `opacity-*` with explicit colors meeting 4.5:1. (~1 hr)
4. **[M-ARIA-1] SearchModal `role="dialog"` + focus trap** — Core interaction path. (~20 min)
5. **[m-MOT-1] Respect `prefers-reduced-motion`** — 3-line global GSAP guard. (~10 min)

---

## Positive Observations

- `<html lang="ko">` correctly set.
- `KingTransitionEffect` and `EraTransitionEffect` use `aria-hidden="true"`.
- All top-nav / mobile-bottom-nav icon buttons have Korean `aria-label`.
- Level1 king buttons use `<button>` with `aria-label={king.name + " 선택"}`.
- TimelineBar buttons have descriptive `aria-label` (king + years + story count).
- L3.5 scene navigation buttons have Korean `aria-label`.

---

**Findings: 4 Critical · 9 Major · 7 Minor (20 total)**
