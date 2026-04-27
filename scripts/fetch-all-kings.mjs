/**
 * 조선 27대 왕 핵심 실록 기사 일괄 수집
 *
 * 사용법:
 *   node scripts/fetch-all-kings.mjs              # 전체 수집
 *   node scripts/fetch-all-kings.mjs sejong        # 특정 왕만
 *   node scripts/fetch-all-kings.mjs sejong yeongjo # 복수 왕
 *
 * 결과: data/raw/{왕id}.json 에 저장
 * 이미 파일이 있으면 건너뜀 (--force 로 덮어쓰기)
 */

import { chromium } from 'playwright';
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://sillok.history.go.kr';
const OUT_DIR = join(__dir, '../data/raw');

// URL year = reign_year + 100 (전 왕 공통 추정, 세종 확인됨)
const YEAR_OFFSET = 100;

// 왕별 핵심 탐색 월 목록 (reign_year, month, 키워드)
// 목록 페이지에서 키워드 매칭 기사를 우선 저장
const KING_TARGETS = {
  taejo: {
    code: 'kaa',
    months: [
      { year: 1, month: 7, keywords: ['즉위', '개국', '조선'] },
      { year: 3, month: 9, keywords: ['천도', '한양', '신도'] },
      { year: 4, month: 9, keywords: ['경복궁', '궁궐'] },
    ],
  },
  jeongjong: {
    code: 'kba',
    months: [
      { year: 1, month: 1, keywords: ['즉위'] },
      { year: 2, month: 1, keywords: ['왕자의 난', '이방원', '태종'] },
    ],
  },
  taejong: {
    code: 'kca',
    months: [
      { year: 1, month: 1, keywords: ['즉위'] },
      { year: 13, month: 5, keywords: ['호패'] },
      { year: 18, month: 8, keywords: ['세종', '충녕', '전위'] },
    ],
  },
  sejong: {
    code: 'wda',
    months: [
      { year: 1, month: 8, keywords: ['즉위', '충녕'] },
      { year: 1, month: 6, keywords: ['왜', '이종무', '쓰시마', '기해'] },
      { year: 2, month: 3, keywords: ['집현전'] },
      { year: 16, month: 7, keywords: ['자격루', '장영실'] },
      { year: 23, month: 5, keywords: ['측우기', '우량'] },
      { year: 25, month: 12, keywords: ['훈민정음', '언문', '二十八字'] },
      { year: 28, month: 9, keywords: ['훈민정음', '언문', '반포'] },
    ],
  },
  munjong: {
    code: 'wea',
    months: [
      { year: 1, month: 3, keywords: ['즉위'] },
      { year: 2, month: 5, keywords: ['붕어', '승하'] },
    ],
  },
  danjong: {
    code: 'wfa',
    months: [
      { year: 1, month: 7, keywords: ['즉위'] },
      { year: 1, month: 10, keywords: ['계유정난', '수양', '황보인', '김종서'] },
      { year: 3, month: 6, keywords: ['선위', '세조'] },
    ],
  },
  sejo: {
    code: 'wga',
    months: [
      { year: 1, month: 7, keywords: ['즉위'] },
      { year: 2, month: 6, keywords: ['사육신', '성삼문', '박팽년'] },
      { year: 4, month: 9, keywords: ['단종', '사사'] },
      { year: 9, month: 7, keywords: ['경국대전'] },
    ],
  },
  yejong: {
    code: 'wha',
    months: [
      { year: 1, month: 9, keywords: ['즉위'] },
      { year: 1, month: 11, keywords: ['남이', '역모'] },
    ],
  },
  seongjong: {
    code: 'wia',
    months: [
      { year: 1, month: 11, keywords: ['즉위'] },
      { year: 16, month: 1, keywords: ['경국대전', '반포'] },
      { year: 25, month: 1, keywords: ['동국여지승람'] },
    ],
  },
  yeonsangun: {
    code: 'wja',
    months: [
      { year: 4, month: 7, keywords: ['무오사화', '사초', '훈구'] },
      { year: 10, month: 9, keywords: ['갑자사화'] },
      { year: 12, month: 9, keywords: ['중종반정', '폐위'] },
    ],
  },
  jungjong: {
    code: 'wka',
    months: [
      { year: 1, month: 9, keywords: ['즉위', '반정'] },
      { year: 10, month: 4, keywords: ['기묘사화', '조광조'] },
      { year: 32, month: 11, keywords: ['을사사화'] },
    ],
  },
  injong: {
    code: 'wla',
    months: [
      { year: 1, month: 1, keywords: ['즉위'] },
      { year: 1, month: 7, keywords: ['붕어', '승하'] },
    ],
  },
  myeongjong: {
    code: 'wma',
    months: [
      { year: 1, month: 7, keywords: ['즉위'] },
      { year: 1, month: 8, keywords: ['을사사화', '윤원형'] },
      { year: 19, month: 1, keywords: ['임꺽정'] },
    ],
  },
  seonjo: {
    code: 'wna',
    months: [
      { year: 25, month: 4, keywords: ['임진왜란', '왜군', '부산'] },
      { year: 25, month: 7, keywords: ['이순신', '한산도'] },
      { year: 26, month: 1, keywords: ['평양', '수복', '명'] },
    ],
  },
  gwanghaegun: {
    code: 'woa',
    months: [
      { year: 2, month: 4, keywords: ['허준', '동의보감'] },
      { year: 15, month: 3, keywords: ['인조반정', '폐위'] },
    ],
  },
  injo: {
    code: 'qaa',
    months: [
      { year: 2, month: 1, keywords: ['이괄의 난'] },
      { year: 5, month: 1, keywords: ['정묘호란', '후금'] },
      { year: 14, month: 12, keywords: ['병자호란', '남한산성', '삼전도'] },
    ],
  },
  hyojong: {
    code: 'qba',
    months: [
      { year: 1, month: 5, keywords: ['즉위', '북벌'] },
      { year: 7, month: 2, keywords: ['나선정벌', '러시아'] },
    ],
  },
  hyeonjong: {
    code: 'qca',
    months: [
      { year: 1, month: 5, keywords: ['즉위'] },
      { year: 3, month: 1, keywords: ['예송논쟁', '복상', '자의대비'] },
    ],
  },
  sukjong: {
    code: 'qda',
    months: [
      { year: 15, month: 5, keywords: ['장희빈', '기사환국', '인현왕후'] },
      { year: 20, month: 10, keywords: ['갑술환국', '장희빈'] },
    ],
  },
  gyeongjong: {
    code: 'qea',
    months: [
      { year: 1, month: 6, keywords: ['즉위'] },
      { year: 1, month: 8, keywords: ['신임사화', '노론'] },
    ],
  },
  yeongjo: {
    code: 'qfa',
    months: [
      { year: 4, month: 2, keywords: ['탕평비', '탕평책'] },
      { year: 26, month: 1, keywords: ['균역법'] },
      { year: 38, month: 5, keywords: ['사도세자', '뒤주', '폐세자'] },
    ],
  },
  jeongjo: {
    code: 'qga',
    months: [
      { year: 1, month: 3, keywords: ['즉위', '규장각'] },
      { year: 13, month: 1, keywords: ['장용영'] },
      { year: 18, month: 9, keywords: ['화성', '수원'] },
    ],
  },
  sunjo: {
    code: 'qha',
    months: [
      { year: 1, month: 7, keywords: ['즉위'] },
      { year: 11, month: 10, keywords: ['홍경래', '난'] },
    ],
  },
  heonjong: {
    code: 'qia',
    months: [
      { year: 1, month: 12, keywords: ['즉위'] },
      { year: 5, month: 3, keywords: ['기해박해', '천주교'] },
    ],
  },
  cheoljong: {
    code: 'qja',
    months: [
      { year: 1, month: 6, keywords: ['즉위'] },
      { year: 12, month: 2, keywords: ['임술농민봉기'] },
    ],
  },
  gojong: {
    code: 'qka',
    months: [
      { year: 1, month: 12, keywords: ['즉위', '흥선대원군'] },
      { year: 32, month: 8, keywords: ['명성황후', '을미사변'] },
      { year: 34, month: 10, keywords: ['대한제국', '황제'] },
    ],
  },
  sunjong: {
    code: 'qla',
    months: [
      { year: 1, month: 7, keywords: ['즉위'] },
      { year: 4, month: 8, keywords: ['한일병합', '경술국치'] },
    ],
  },
};

const DELAY_BETWEEN_ARTICLES = 3000; // 3초
const DELAY_BETWEEN_KINGS = 10000;   // 10초

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function buildListUrl(code, year, month) {
  const urlYear = year + YEAR_OFFSET;
  return `${BASE}/search/inspectionDayList.do?id=${code}_${String(urlYear).padStart(3,'0')}${String(month).padStart(2,'0')}&lang=ko`;
}

async function fetchArticleIds(page, code, year, month) {
  const url = buildListUrl(code, year, month);
  console.error(`  목록: ${url}`);
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 40000 });
    const html = await page.content();
    return [...new Set([...html.matchAll(/([a-z]+_\d{8}_\d{3})/g)].map(m => m[1]))];
  } catch (e) {
    console.error(`  ✗ 목록 실패: ${e.message.split('\n')[0]}`);
    return [];
  }
}

function parseLines(lines) {
  const headerIdx = lines.findIndex(l => l.includes('기사') && l.includes('실록'));
  const title = headerIdx >= 0 ? lines[headerIdx + 1] : '';

  const krIdx = lines.indexOf('국역');
  const metaIdx = lines.findIndex((l, i) => i > krIdx && l.startsWith('【'));
  const translation = krIdx >= 0 && metaIdx > krIdx
    ? lines.slice(krIdx + 1, metaIdx).filter(l => l.length > 5 && !l.startsWith('ⓒ')).join(' ')
    : '';

  const origIdx = lines.indexOf('원문');
  const original = origIdx >= 0
    ? lines.slice(origIdx + 1)
        .find(l => /[一-鿿]/.test(l) && !l.includes('實錄卷') && !l.startsWith('【'))
        ?.replace(/^[○\s]+/, '').trim() ?? ''
    : '';

  const classLine = lines.find(l => l.startsWith('【분류】'));
  const classification = classLine?.replace('【분류】', '').trim() ?? '';
  const sourceLine = lines.find(l => l.startsWith('【태백산사고본】'));

  return { title, translation, original, classification, archiveRef: sourceLine ?? '' };
}

async function fetchArticle(browser, articleId) {
  const url = `${BASE}/id/${articleId}`;
  for (let attempt = 0; attempt <= 2; attempt++) {
    if (attempt > 0) await delay(attempt * 4000);
    const page = await browser.newPage();
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 40000 });
      const bodyText = await page.evaluate(() => document.body.innerText);
      const lines = bodyText.split('\n').map(l => l.trim()).filter(Boolean);
      const parsed = parseLines(lines);
      if (!parsed.title || !parsed.translation) return null;
      return {
        articleId,
        sourceUrl: url,
        title: parsed.title,
        original: parsed.original,
        translation: parsed.translation,
        commentary: '',
        classification: parsed.classification,
        archiveRef: parsed.archiveRef,
      };
    } catch {
      if (attempt === 2) return null;
    } finally {
      await page.close();
    }
  }
  return null;
}

async function collectKing(browser, kingId) {
  const target = KING_TARGETS[kingId];
  if (!target) { console.error(`알 수 없는 왕: ${kingId}`); return; }

  const outFile = join(OUT_DIR, `${kingId}.json`);
  const force = process.argv.includes('--force');
  if (!force && existsSync(outFile)) {
    console.error(`건너뜀 (이미 존재): ${outFile}`);
    return;
  }

  console.error(`\n=== ${kingId} (${target.code}) ===`);
  const results = [];

  const listPage = await browser.newPage();
  for (const { year, month, keywords } of target.months) {
    const ids = await fetchArticleIds(listPage, target.code, year, month);
    console.error(`  ${year}년 ${month}월: ${ids.length}개 ID 수집`);

    for (const id of ids.slice(0, 20)) {
      await delay(DELAY_BETWEEN_ARTICLES);
      const article = await fetchArticle(browser, id);
      if (!article) continue;

      const matched = keywords.some(kw => article.title.includes(kw) || article.translation.includes(kw));
      const entry = { ...article, matched, keywords, reignYear: year, month };
      results.push(entry);
      console.error(`  ${matched ? '★' : '·'} ${article.title}`);
    }
  }
  await listPage.close();

  writeFileSync(outFile, JSON.stringify(results, null, 2));
  console.error(`  → 저장: ${outFile} (${results.length}건)`);
}

// ── CLI ────────────────────────────────────────────────────────────────────

mkdirSync(OUT_DIR, { recursive: true });

const [,, ...args] = process.argv;
const targetKings = args.filter(a => !a.startsWith('--'));
const kings = targetKings.length
  ? targetKings
  : Object.keys(KING_TARGETS);

console.error(`수집 대상: ${kings.join(', ')}`);

const browser = await chromium.launch({ headless: true });

try {
  for (let i = 0; i < kings.length; i++) {
    if (i > 0) await delay(DELAY_BETWEEN_KINGS);
    await collectKing(browser, kings[i]);
  }
} finally {
  await browser.close();
}

console.error('\n완료.');
