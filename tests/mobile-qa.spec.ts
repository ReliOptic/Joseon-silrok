/**
 * Mobile QA — Joseon-silrok
 * Validates: KingTransitionEffect, L3.5 story sequence, viewport overflow
 * Viewports: 320×568, 375×667, 414×896
 */
import { test, expect, Page, BrowserContext } from 'playwright/test';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE = 'http://localhost:3000';
const SS_DIR = path.resolve(__dirname, '../docs/mobile-screenshots');

const VIEWPORTS = [
  { name: '320x568', width: 320, height: 568 },
  { name: '375x667', width: 375, height: 667 },
  { name: '414x896', width: 414, height: 896 },
];

// ── helpers ─────────────────────────────────────────────────────────────────

async function ss(page: Page, label: string) {
  await page.screenshot({
    path: path.join(SS_DIR, `${label}.png`),
    fullPage: false,
  });
}

/** Wait until the KingTransitionEffect overlay becomes visible (opacity > 0). */
async function waitForTransitionOverlay(page: Page, timeout = 3000): Promise<boolean> {
  try {
    // The overlay starts with display:none, GSAP sets it to flex then animates opacity
    await page.waitForFunction(
      () => {
        const el = document.querySelector('[aria-hidden="true"].fixed.inset-0.z-\\[100\\]') as HTMLElement | null;
        if (!el) return false;
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && parseFloat(style.opacity) > 0.1;
      },
      { timeout }
    );
    return true;
  } catch {
    return false;
  }
}

/** Check that no element overflows the viewport width. */
async function checkNoHorizontalOverflow(page: Page): Promise<boolean> {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    const overflow = Array.from(document.querySelectorAll('*')).some(el => {
      const r = el.getBoundingClientRect();
      return r.right > vw + 2; // 2px tolerance for subpixel
    });
    return !overflow;
  });
}

// ── per-viewport test suite ──────────────────────────────────────────────────

for (const vp of VIEWPORTS) {
  test.describe(`Viewport ${vp.name}`, () => {
    let page: Page;
    let context: BrowserContext;

    test.beforeEach(async ({ browser }) => {
      context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: true,
        hasTouch: true,
      });
      page = await context.newPage();
    });

    test.afterEach(async () => {
      await context.close();
    });

    // TC-A: L1 loads, king card click → transition overlay fires
    test('TC-A: L1 king card click triggers KingTransitionEffect', async () => {
      await page.goto(BASE, { waitUntil: 'networkidle' });
      await ss(page, `${vp.name}-A1-l1-loaded`);

      // Era sections exist
      const eraHeadings = page.locator('h2, h3').first();
      await expect(eraHeadings).toBeVisible({ timeout: 8000 });

      // Find and click first king card button
      // King cards are rendered by Level1MacroView
      const kingBtn = page.locator('button[data-king-id]').first();
      const fallbackBtn = page.locator('button').filter({ hasText: /태조|세종|태종/ }).first();

      const btn = (await kingBtn.count()) > 0 ? kingBtn : fallbackBtn;
      await expect(btn).toBeVisible({ timeout: 5000 });
      await ss(page, `${vp.name}-A2-before-click`);
      await btn.click();

      const overlayFired = await waitForTransitionOverlay(page, 3000);
      await ss(page, `${vp.name}-A3-transition-overlay`);

      expect(overlayFired, 'KingTransitionEffect overlay must appear on king selection').toBe(true);

      // Wait for L2 to load
      await page.waitForURL(/level=2/, { timeout: 5000 }).catch(() => {});
      await ss(page, `${vp.name}-A4-l2-loaded`);
    });

    // TC-B: L2 "next king" button → transition overlay + new king shown
    test('TC-B: L2 next-king navigation triggers transition', async () => {
      // Go directly to taejo L2
      await page.goto(`${BASE}?level=2&king=taejo&event=0`, { waitUntil: 'networkidle' });
      await ss(page, `${vp.name}-B1-l2-taejo`);

      // Next king button — Level2EventView renders prev/next king controls
      const nextKingBtn = page.locator('button').filter({ hasText: /다음 왕/ }).first();
      await expect(nextKingBtn).toBeVisible({ timeout: 5000 });
      await nextKingBtn.click();

      const overlayFired = await waitForTransitionOverlay(page, 3000);
      await ss(page, `${vp.name}-B2-next-king-transition`);
      expect(overlayFired, 'KingTransitionEffect must fire on L2 next-king').toBe(true);

      // King name in breadcrumb should have changed from 태조
      await page.waitForTimeout(1000);
      await ss(page, `${vp.name}-B3-new-king-l2`);
      const breadcrumb = await page.textContent('nav');
      expect(breadcrumb).not.toContain('태조');
    });

    // TC-C: L3.5 story sequence — 5× next, auto-advance across kings, transition each time
    test('TC-C: L3.5 story sequence 5x next, cross-king transitions', async () => {
      // Start at first story entry: taejo eventIndex=0
      await page.goto(`${BASE}?level=3.5&king=taejo&event=0`, { waitUntil: 'networkidle' });
      await ss(page, `${vp.name}-C1-l35-start`);

      const nextStoryBtn = page.locator('button').filter({ hasText: /다음 스토리/ }).first();
      await expect(nextStoryBtn).toBeVisible({ timeout: 6000 });

      let crossKingTransitions = 0;

      for (let i = 1; i <= 5; i++) {
        const kingBefore = await page.textContent('nav');
        const isDisabled = await nextStoryBtn.getAttribute('disabled');
        if (isDisabled !== null) break;

        await nextStoryBtn.click();
        await page.waitForTimeout(600); // allow slide animation

        const kingAfter = await page.textContent('nav');
        if (kingBefore !== kingAfter) {
          const fired = await waitForTransitionOverlay(page, 1500);
          if (fired) crossKingTransitions++;
        }

        await ss(page, `${vp.name}-C${i + 1}-next-story-${i}`);
      }

      // After 5 clicks from taejo, we should have crossed into at least 1 different king
      expect(crossKingTransitions).toBeGreaterThanOrEqual(1);

      // Counter format "N / total" should be visible
      const counter = page.locator('span').filter({ hasText: /\d+ \/ \d+/ }).first();
      await expect(counter).toBeVisible();
    });

    // TC-D: L3.5 first entry — prev button disabled
    test('TC-D: L3.5 first entry prev button is disabled', async () => {
      await page.goto(`${BASE}?level=3.5&king=taejo&event=0`, { waitUntil: 'networkidle' });
      await ss(page, `${vp.name}-D1-l35-first`);

      const prevBtn = page.locator('button').filter({ hasText: /이전 스토리/ }).first();
      await expect(prevBtn).toBeVisible({ timeout: 6000 });
      await expect(prevBtn).toBeDisabled();
      await ss(page, `${vp.name}-D2-prev-disabled`);
    });

    // TC-E: L3.5 last entry — next button disabled
    test('TC-E: L3.5 last entry next button is disabled', async () => {
      // Navigate to last story: sunjong is the last dynasty king with story
      // Use jeongjo's last entry as a proxy — then hammer next until disabled
      await page.goto(`${BASE}?level=3.5&king=taejo&event=0`, { waitUntil: 'networkidle' });

      const nextBtn = page.locator('button').filter({ hasText: /다음 스토리/ }).first();
      await expect(nextBtn).toBeVisible({ timeout: 6000 });

      // Click next until disabled (max 80 clicks — manifest has ~60 entries)
      let iterations = 0;
      while (iterations < 80) {
        const disabled = await nextBtn.getAttribute('disabled');
        if (disabled !== null) break;
        await nextBtn.click();
        await page.waitForTimeout(350);
        iterations++;
      }

      await ss(page, `${vp.name}-E1-l35-last`);
      await expect(nextBtn).toBeDisabled();

      // Verify counter shows "N / N" (current == total)
      const counterText = await page.locator('span').filter({ hasText: /\d+ \/ \d+/ }).first().textContent();
      if (counterText) {
        const parts = counterText.trim().split('/').map(s => s.trim());
        expect(parts[0]).toBe(parts[1]);
      }
    });

    // TC-F: L4 event next → auto-advances to next king
    test('TC-F: L4 event next auto-advances to next king', async () => {
      // Load taejo L4 last event so next pushes to jeongjong
      // taejo has events; we navigate to last event then press next
      // injong has only 1 event; next from it goes to myeongjong
      await page.goto(`${BASE}?level=4&king=injong&event=0`, { waitUntil: 'networkidle' });
      await ss(page, `${vp.name}-F1-l4-injong`);

      await page.waitForTimeout(800);

      const nextEventBtn = page.locator('button[aria-label="다음 사건"], button').filter({ hasText: /다음|next/i }).first();
      await expect(nextEventBtn).toBeVisible({ timeout: 5000 });
      await nextEventBtn.click();
      await page.waitForTimeout(700);

      await ss(page, `${vp.name}-F2-l4-after-next`);

      // Should now show myeongjong (next king after injong)
      const breadcrumb = await page.textContent('nav');
      expect(breadcrumb).toContain('명종');
    });

    // TC-G: No horizontal overflow on L1, L2, L3.5
    test('TC-G: No horizontal viewport overflow on key levels', async () => {
      const results: Record<string, boolean> = {};

      // L1
      await page.goto(BASE, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      results['L1'] = await checkNoHorizontalOverflow(page);
      await ss(page, `${vp.name}-G1-overflow-l1`);

      // L2
      await page.goto(`${BASE}?level=2&king=sejong&event=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      results['L2'] = await checkNoHorizontalOverflow(page);
      await ss(page, `${vp.name}-G2-overflow-l2`);

      // L3.5
      await page.goto(`${BASE}?level=3.5&king=sejong&event=5`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      results['L3.5'] = await checkNoHorizontalOverflow(page);
      await ss(page, `${vp.name}-G3-overflow-l35`);

      for (const [lvl, ok] of Object.entries(results)) {
        expect(ok, `Horizontal overflow detected on ${lvl}`).toBe(true);
      }
    });

  });
}
