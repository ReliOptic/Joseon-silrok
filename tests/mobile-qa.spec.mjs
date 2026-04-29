/**
 * Mobile QA — Joseon-silrok
 * Validates: KingTransitionEffect, L3.5 story sequence, viewport overflow
 * Viewports: 320×568, 375×667, 414×896
 */
import { test, expect } from 'playwright/test';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = 'http://localhost:3000';
const SS_DIR = path.resolve(__dirname, '../docs/mobile-screenshots');
fs.mkdirSync(SS_DIR, { recursive: true });

const VIEWPORTS = [
  { name: '320x568', width: 320, height: 568 },
  { name: '375x667', width: 375, height: 667 },
  { name: '414x896', width: 414, height: 896 },
];

// ── helpers ─────────────────────────────────────────────────────────────────

async function ss(page, label) {
  await page.screenshot({ path: path.join(SS_DIR, `${label}.png`), fullPage: false });
}

/**
 * Returns true if the KingTransitionEffect dark overlay becomes briefly visible.
 * The overlay is div[aria-hidden="true"] z-[100] that GSAP animates
 * display:none → flex, opacity 0 → 1 → 0, total ~950ms.
 */
async function waitForTransitionOverlay(page, timeout = 3000) {
  try {
    await page.waitForFunction(
      () => {
        const candidates = Array.from(document.querySelectorAll('div[aria-hidden="true"]'));
        return candidates.some(el => {
          const s = window.getComputedStyle(el);
          return s.display === 'flex' && parseFloat(s.opacity) > 0.05;
        });
      },
      { timeout }
    );
    return true;
  } catch {
    return false;
  }
}

/** Returns true if no element's right edge meaningfully exceeds viewport width. */
async function checkNoHorizontalOverflow(page) {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    return !Array.from(document.querySelectorAll('*')).some(el => {
      const r = el.getBoundingClientRect();
      return r.right > vw + 3;
    });
  });
}

// ── per-viewport suites ──────────────────────────────────────────────────────

for (const vp of VIEWPORTS) {
  test.describe(`Viewport ${vp.name}`, () => {

    test.use({
      viewport: { width: vp.width, height: vp.height },
      isMobile: true,
      hasTouch: true,
    });

    // TC-A: L1 king card click triggers KingTransitionEffect overlay
    test('TC-A: L1 king card click triggers KingTransitionEffect', async ({ page }) => {
      await page.goto(BASE, { waitUntil: 'networkidle' });
      await ss(page, `${vp.name}-A1-l1-loaded`);

      // King buttons have aria-label ending in "선택" (e.g. "태조 선택")
      const kingBtn = page.locator('button[aria-label$="선택"]').first();
      await expect(kingBtn).toBeVisible({ timeout: 8000 });
      await ss(page, `${vp.name}-A2-before-click`);

      await kingBtn.click();
      const overlayFired = await waitForTransitionOverlay(page, 3000);
      await ss(page, `${vp.name}-A3-transition-overlay`);

      expect(overlayFired, 'KingTransitionEffect overlay must appear on king selection from L1').toBe(true);

      await page.waitForTimeout(1200);
      await ss(page, `${vp.name}-A4-l2-settled`);
    });

    // TC-B: L2 "다음 왕" button triggers KingTransitionEffect + changes king
    test('TC-B: L2 next-king navigation triggers KingTransitionEffect', async ({ page }) => {
      await page.goto(`${BASE}?level=2&king=taejo&event=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      await ss(page, `${vp.name}-B1-l2-taejo`);

      const nextKingBtn = page.locator('button').filter({ hasText: /다음 왕/ }).first();
      await expect(nextKingBtn).toBeVisible({ timeout: 6000 });
      await nextKingBtn.click();

      const overlayFired = await waitForTransitionOverlay(page, 3000);
      await ss(page, `${vp.name}-B2-next-king-transition`);
      expect(overlayFired, 'KingTransitionEffect must fire on L2 next-king').toBe(true);

      await page.waitForTimeout(1200);
      await ss(page, `${vp.name}-B3-new-king-l2`);

      const breadcrumb = await page.textContent('nav');
      expect(breadcrumb, 'King must change from 태조 after next-king click').not.toContain('태조');
    });

    // TC-C: L3.5 — 5x next story, counter advances, king changes cross-dynasty
    test('TC-C: L3.5 story 5x next, counter advances, cross-king verified', async ({ page }) => {
      // Start at taejo's first story (manifest index 0)
      await page.goto(`${BASE}?level=3.5&king=taejo&event=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(800);
      await ss(page, `${vp.name}-C1-l35-start`);

      // Story navigation buttons — specifically the story-sequence nav (not scene nav)
      // They are in a flex row: [이전 스토리] [N / total] [다음 스토리]
      const nextBtn = page.locator('button').filter({ hasText: /다음 스토리/ }).first();
      await expect(nextBtn).toBeVisible({ timeout: 6000 });

      // Confirm counter starts at "1 / N"
      const counterSpan = page.locator('span').filter({ hasText: /\d+ \/ \d+/ }).first();
      await expect(counterSpan).toBeVisible({ timeout: 3000 });
      const startText = await counterSpan.textContent();
      const startNum = parseInt((startText ?? '0').trim().split('/')[0]);

      let kingChanges = 0;
      let prevKingText = await page.textContent('nav');

      for (let i = 1; i <= 5; i++) {
        const isDisabled = await nextBtn.evaluate(el => el.disabled);
        if (isDisabled) break;

        await nextBtn.click({ force: true });
        // Wait for slide animation: 280ms out + 400ms in + buffer
        await page.waitForTimeout(900);

        const curKingText = await page.textContent('nav');
        if (curKingText !== prevKingText) {
          kingChanges++;
          prevKingText = curKingText;
        }
        await ss(page, `${vp.name}-C${i + 1}-story-step-${i}`);
      }

      // Counter must have advanced from start
      const endText = await counterSpan.textContent();
      const endNum = parseInt((endText ?? '0').trim().split('/')[0]);
      expect(endNum, 'Story counter must advance after 5 next clicks').toBeGreaterThan(startNum);

      // taejo has 3 story entries; after 4 clicks we cross into jeongjong
      expect(kingChanges, 'King must change at least once in 5 story advances from taejo').toBeGreaterThanOrEqual(1);
    });

    // TC-D: L3.5 first entry — "이전 스토리" button is disabled
    test('TC-D: L3.5 first entry prev button is disabled', async ({ page }) => {
      await page.goto(`${BASE}?level=3.5&king=taejo&event=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      await ss(page, `${vp.name}-D1-l35-first`);

      const prevBtn = page.locator('button').filter({ hasText: /이전 스토리/ }).first();
      await expect(prevBtn).toBeVisible({ timeout: 6000 });
      await expect(prevBtn).toBeDisabled();
      await ss(page, `${vp.name}-D2-prev-disabled`);
    });

    // TC-E: L3.5 last entry — "다음 스토리" button is disabled at manifest end
    // Navigate directly to the last story entry (sunjong eventIndex=4) instead of clicking through all 160
    test('TC-E: L3.5 last entry next button is disabled', async ({ page }) => {
      // Last entry in STORY_MANIFEST: sunjong eventIndex=4 (경술국치+승하운동)
      await page.goto(`${BASE}?level=3.5&king=sunjong&event=4`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(600);
      await ss(page, `${vp.name}-E1-l35-last`);

      const nextBtn = page.locator('button').filter({ hasText: /다음 스토리/ }).first();
      await expect(nextBtn).toBeVisible({ timeout: 6000 });

      // At the last manifest entry the next button must be disabled immediately
      await expect(nextBtn).toBeDisabled();

      // Counter must read "N / N" — both sides of slash are equal
      const counterSpan = page.locator('span').filter({ hasText: /\d+ \/ \d+/ }).first();
      await expect(counterSpan).toBeVisible({ timeout: 3000 });
      const finalText = await counterSpan.textContent();
      if (finalText) {
        const parts = finalText.trim().split('/').map(s => s.trim());
        expect(parts[0], 'Counter current must equal total at last entry').toBe(parts[1]);
      }
      await ss(page, `${vp.name}-E2-next-disabled`);
    });

    // TC-F: L4 "다음" at last event of injong auto-advances to 명종
    test('TC-F: L4 next at last event auto-advances to next king', async ({ page }) => {
      // injong (인종) has 5 events (index 0-4); last is index 4; next king is myeongjong (명종)
      await page.goto(`${BASE}?level=4&king=injong&event=4`, { waitUntil: 'networkidle' });

      // Wait for L4 content to be fully loaded (king data fetch is async)
      // The L4 view renders king name in a span — wait for it
      await page.waitForSelector('text=인종', { timeout: 8000 });
      await page.waitForTimeout(500);
      await ss(page, `${vp.name}-F1-l4-injong`);

      // Level4SillokView top nav "다음" button — text is "다음" followed by SVG
      // Use a broad match to avoid SVG text interference
      const nextBtn = page.locator('button').filter({ hasText: /다음/ }).nth(0);
      await expect(nextBtn).toBeVisible({ timeout: 6000 });

      // Verify we're actually on injong before clicking
      const navBefore = await page.textContent('nav');
      expect(navBefore).toContain('인종');

      await nextBtn.click();
      // Wait for slide animation (280ms out + 400ms in) + kingData reload
      // Poll for nav to change rather than fixed sleep
      await page.waitForFunction(
        () => {
          const nav = document.querySelector('nav');
          return nav && nav.textContent && nav.textContent.includes('명종');
        },
        { timeout: 5000 }
      );
      await ss(page, `${vp.name}-F2-l4-after-next`);

      const navAfter = await page.textContent('nav');
      expect(navAfter, 'After last event of injong, king must advance to myeongjong (명종)').toContain('명종');
    });

    // TC-G: No horizontal viewport overflow on L1, L2, L3.5
    test('TC-G: No horizontal overflow on L1, L2, L3.5', async ({ page }) => {
      const results = {};

      await page.goto(BASE, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      results['L1'] = await checkNoHorizontalOverflow(page);
      await ss(page, `${vp.name}-G1-overflow-l1`);

      await page.goto(`${BASE}?level=2&king=sejong&event=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      results['L2'] = await checkNoHorizontalOverflow(page);
      await ss(page, `${vp.name}-G2-overflow-l2`);

      await page.goto(`${BASE}?level=3.5&king=sejong&event=5`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      results['L3.5'] = await checkNoHorizontalOverflow(page);
      await ss(page, `${vp.name}-G3-overflow-l35`);

      for (const [lvl, ok] of Object.entries(results)) {
        expect(ok, `Horizontal overflow detected at ${vp.name} on ${lvl}`).toBe(true);
      }
    });

  });
}
