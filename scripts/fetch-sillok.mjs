/**
 * 조선왕조실록 실데이터 fetcher (Playwright 기반)
 * 출처: sillok.history.go.kr (국사편찬위원회, public domain)
 *
 * 사용법:
 *   node scripts/fetch-sillok.mjs wda_12512030_002
 *   node scripts/fetch-sillok.mjs sejong 25 12 30
 *   node scripts/fetch-sillok.mjs list sejong 25 12
 *   node scripts/fetch-sillok.mjs list sejong 25 12 > data/sejong-25-12.json
 *
 * 왕 코드:
 *   태조 kaa  정종 kba  태종 kca  세종 wda  문종 wea
 *   단종 wfa  세조 wga  예종 wha  성종 wia  연산군 wja
 *   중종 wka  인종 wla  명종 wma  선조 wna  광해군 woa
 *   인조 qaa  효종 qba  현종 qca  숙종 qda  경종 qea
 *   영조 qfa  정조 qga  순조 qha  헌종 qia  철종 qja
 *   고종 qka  순종 qla
 */

import { chromium } from 'playwright';

const BASE = 'https://sillok.history.go.kr';

const KING_CODES = {
  taejo: 'kaa', jeongjong: 'kba', taejong: 'kca', sejong: 'wda',
  munjong: 'wea', danjong: 'wfa', sejo: 'wga', yejong: 'wha',
  seongjong: 'wia', yeonsangun: 'wja', jungjong: 'wka', injong: 'wla',
  myeongjong: 'wma', seonjo: 'wna', gwanghaegun: 'woa', injo: 'qaa',
  hyojong: 'qba', hyeonjong: 'qca', sukjong: 'qda', gyeongjong: 'qea',
  yeongjo: 'qfa', jeongjo: 'qga', sunjo: 'qha', heonjong: 'qia',
  cheoljong: 'qja', gojong: 'qka', sunjong: 'qla',
};

// sillok.history.go.kr URL year = reign_year + 100 (모든 왕 공통 추정)
// 확인: 세종(wda) 25년 → URL year 125 ✓
// 예외 왕은 아래에 추가
const YEAR_OFFSET = {};

function buildId(kingCode, year, month, day, seq = 1) {
  const urlYear = year + (YEAR_OFFSET[kingCode] ?? 100);
  return `${kingCode}_${String(urlYear).padStart(3,'0')}${String(month).padStart(2,'0')}${String(day).padStart(3,'0')}_${String(seq).padStart(3,'0')}`;
}

function parseLines(lines) {
  // 헤더: 권, 날짜, 연호 포함 라인
  const headerIdx = lines.findIndex(l => l.includes('기사') && l.includes('실록'));
  const header = headerIdx >= 0 ? lines[headerIdx] : '';
  const title = headerIdx >= 0 ? lines[headerIdx + 1] : '';

  // 날짜 파싱 (세종 25년 12월 30일)
  const dateMatch = header.match(/세종[^\d]*(\d+년[^/]+)/);
  const date = dateMatch ? `세종 ${dateMatch[1].trim()}` : header.split('/')[0].trim();

  // 국역 — '국역' 이후 ~ '【태백산사고본】' 이전
  const krIdx = lines.indexOf('국역');
  const metaIdx = lines.findIndex((l, i) => i > krIdx && l.startsWith('【'));
  const translation = krIdx >= 0 && metaIdx > krIdx
    ? lines.slice(krIdx + 1, metaIdx).filter(l => l.length > 5 && !l.startsWith('ⓒ')).join(' ')
    : '';

  // 원문 — '원문' 이후 첫 한자 라인 (○ 제거, 권말 문구 제외)
  const origIdx = lines.indexOf('원문');
  const original = origIdx >= 0
    ? lines.slice(origIdx + 1)
        .find(l => /[一-鿿]/.test(l) && !l.includes('實錄卷') && !l.startsWith('【'))
        ?.replace(/^[○\s]+/, '').trim() ?? ''
    : '';

  // 분류
  const classLine = lines.find(l => l.startsWith('【분류】'));
  const classification = classLine?.replace('【분류】', '').trim() ?? '';

  // 출처 (사고본)
  const sourceLine = lines.find(l => l.startsWith('【태백산사고본】'));

  return { header, date, title, translation, original, classification, archiveRef: sourceLine ?? '' };
}

async function fetchArticle(browser, articleId, retries = 2) {
  const url = `${BASE}/id/${articleId}`;
  console.error(`→ ${url}`);

  for (let attempt = 0; attempt <= retries; attempt++) {
    if (attempt > 0) {
      const wait = attempt * 3000;
      console.error(`  ↺ retry ${attempt} (${wait}ms 대기)`);
      await new Promise(r => setTimeout(r, wait));
    }
    const page = await browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 40000 });
      const bodyText = await page.evaluate(() => document.body.innerText);
      const lines = bodyText.split('\n').map(l => l.trim()).filter(Boolean);

      const parsed = parseLines(lines);
      if (!parsed.title || !parsed.translation) {
        console.error('  ✗ 기사 없음');
        return null;
      }

      console.error(`  ✓ ${parsed.title}`);
      return {
        articleId,
        sourceUrl: url,
        date: parsed.date,
        title: parsed.title,
        original: parsed.original,
        translation: parsed.translation,
        commentary: '',
        classification: parsed.classification,
        archiveRef: parsed.archiveRef,
      };
    } catch (e) {
      console.error(`  ✗ ${e.message.split('\n')[0]}`);
      if (attempt === retries) return null;
    } finally {
      await page.close();
    }
  }
  return null;
}

async function listDayArticles(browser, kingCode, year, month, day) {
  const results = [];
  for (let seq = 1; seq <= 15; seq++) {
    const entry = await fetchArticle(browser, buildId(kingCode, year, month, day, seq));
    if (!entry) break;
    results.push(entry);
  }
  return results;
}

async function listMonthArticles(browser, kingCode, year, month) {
  const urlYear = year + (YEAR_OFFSET[kingCode] ?? 100);
  const listUrl = `${BASE}/search/inspectionDayList.do?id=${kingCode}_${String(urlYear).padStart(3,'0')}${String(month).padStart(2,'0')}&lang=ko`;
  console.error(`→ 목록: ${listUrl}`);

  const page = await browser.newPage();
  await page.goto(listUrl, { waitUntil: 'load', timeout: 40000 });
  const html = await page.content();
  const ids = [...html.matchAll(/([a-z]+_\d{8}_\d{3})/g)].map(m => m[1]);
  await page.close();

  // 정적 HTML에서 ID 추출 (fallback: curl 방식)
  const uniqueIds = [...new Set(ids)];
  console.error(`  ${uniqueIds.length}개 기사 ID 수집`);

  const results = [];
  for (const id of uniqueIds.slice(0, 30)) {
    const entry = await fetchArticle(browser, id);
    if (entry) results.push(entry);
    await new Promise(r => setTimeout(r, 1500));
  }
  return results;
}

// ── CLI ────────────────────────────────────────────────────────────────────

const [,, ...args] = process.argv;

if (!args.length) {
  console.log(`사용법:
  node scripts/fetch-sillok.mjs <article-id>
  node scripts/fetch-sillok.mjs <king> <year> <month> <day> [seq]
  node scripts/fetch-sillok.mjs list <king> <year> <month>

예시:
  node scripts/fetch-sillok.mjs wda_12512030_002
  node scripts/fetch-sillok.mjs sejong 25 12 30
  node scripts/fetch-sillok.mjs list sejong 25 12 > out.json`);
  process.exit(0);
}

const browser = await chromium.launch({ headless: true });
let result;

try {
  if (args[0] === 'list') {
    const code = KING_CODES[args[1]] ?? args[1];
    result = await listMonthArticles(browser, code, Number(args[2]), Number(args[3]));
  } else if (args.length === 1 && args[0].includes('_')) {
    result = await fetchArticle(browser, args[0]);
  } else {
    const code = KING_CODES[args[0]] ?? args[0];
    const id = buildId(code, Number(args[1]), Number(args[2]), Number(args[3]), Number(args[4] ?? 1));
    result = await fetchArticle(browser, id);
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(result, null, 2));
