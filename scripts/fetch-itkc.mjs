/**
 * 한국고전종합DB (db.itkc.or.kr) 조선왕조실록 번역 수집기
 *
 * sillok.history.go.kr IP 차단 대안.
 * 모든 번역은 세종대왕기념사업회 제공 (itkc 라이선스 준수).
 *
 * 사용법:
 *   node scripts/fetch-itkc.mjs sejong
 *   node scripts/fetch-itkc.mjs sejong --force
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://db.itkc.or.kr';
const OUT_DIR = join(__dir, '../data/raw');
mkdirSync(OUT_DIR, { recursive: true });

const DELAY_MS = 2000;
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// 왕별 itkc 코드 + 탐색 대상 (재위년 0-based, 예: 즉위=A00, 1년=A01, 25년=A25)
// itkc DCI 포맷: ITKC_JT_{왕코드}_{재위년코드}_{월코드}_{일코드}_{순번}_{연도}_{권호}_XML
// 왕코드: A0=태조, B0=정종, C0=태종, D0=세종, E0=문종, F0=단종,
//         G0=세조, H0=예종, I0=성종, J0=연산군, K0=중종, L0=인종,
//         M0=명종, N0=선조, O0=광해군, P0=인조, Q0=효종, R0=현종,
//         S0=숙종, T0=경종, U0=영조, V0=정조, W0=순조, X0=헌종,
//         Y0=철종, Z0=고종, AA0=순종
const KING_TARGETS = {
  taejo: {
    code: 'A0', name: '태조실록',
    events: [
      { label: '즉위', reignYear: 1, months: [7, 8], keywords: ['즉위', '개국', '조선'] },
      { label: '한양천도', reignYear: 3, months: [9, 10], keywords: ['천도', '한양', '신도'] },
      { label: '경복궁', reignYear: 4, months: [9, 10], keywords: ['경복궁', '궁궐'] },
    ],
  },
  jeongjong: {
    code: 'B0', name: '정종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [1, 2], keywords: ['즉위'] },
      { label: '왕자의난', reignYear: 2, months: [1, 2], keywords: ['왕자', '이방원', '난'] },
    ],
  },
  taejong: {
    code: 'C0', name: '태종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [1, 2], keywords: ['즉위'] },
      { label: '호패법', reignYear: 13, months: [5, 6], keywords: ['호패'] },
      { label: '세종전위', reignYear: 18, months: [8, 9], keywords: ['세종', '충녕', '전위'] },
    ],
  },
  sejong: {
    code: 'D0',
    name: '세종실록',
    events: [
      { label: '즉위', reignYear: 0, months: [8, 9], keywords: ['즉위', '전위', '충녕'] },
      { label: '기해동정', reignYear: 1, months: [5, 6, 7], keywords: ['이종무', '쓰시마', '대마도', '왜구'] },
      { label: '집현전', reignYear: 2, months: [3, 4], keywords: ['집현전', '학사', '경연'] },
      { label: '자격루', reignYear: 16, months: [6, 7, 8], keywords: ['자격루', '장영실', '물시계'] },
      { label: '측우기', reignYear: 23, months: [4, 5], keywords: ['측우', '우량', '강우'] },
      { label: '훈민정음창제', reignYear: 25, months: [12], keywords: ['언문', '훈민정음', '28자'] },
      { label: '훈민정음반포', reignYear: 28, months: [9, 10], keywords: ['훈민정음', '해례', '반포'] },
      { label: '의방유취', reignYear: 27, months: [10, 11], keywords: ['의방유취', '의학', '의서'] },
    ],
  },
  munjong: {
    code: 'E0', name: '문종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [3, 4], keywords: ['즉위'] },
      { label: '승하', reignYear: 2, months: [5, 6], keywords: ['붕어', '승하'] },
    ],
  },
  danjong: {
    code: 'F0', name: '단종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [7, 8], keywords: ['즉위'] },
      { label: '계유정난', reignYear: 1, months: [10, 11], keywords: ['계유정난', '수양', '김종서'] },
      { label: '선위', reignYear: 3, months: [6, 7], keywords: ['선위', '세조'] },
    ],
  },
  sejo: {
    code: 'G0', name: '세조실록',
    events: [
      { label: '즉위', reignYear: 1, months: [7, 8], keywords: ['즉위'] },
      { label: '사육신', reignYear: 2, months: [6, 7], keywords: ['사육신', '성삼문', '박팽년'] },
      { label: '경국대전', reignYear: 9, months: [7, 8], keywords: ['경국대전'] },
    ],
  },
  yejong: {
    code: 'H0', name: '예종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [9, 10], keywords: ['즉위'] },
      { label: '남이역모', reignYear: 1, months: [11, 12], keywords: ['남이', '역모'] },
    ],
  },
  seongjong: {
    code: 'I0', name: '성종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [11, 12], keywords: ['즉위'] },
      { label: '경국대전반포', reignYear: 16, months: [1, 2], keywords: ['경국대전', '반포'] },
      { label: '동국여지승람', reignYear: 25, months: [1, 2], keywords: ['동국여지승람'] },
    ],
  },
  yeonsangun: {
    // 연산군일기 (실록 아님)
    code: 'J0', name: '연산군일기',
    events: [
      { label: '무오사화', reignYear: 4, months: [7, 8], keywords: ['무오사화', '사초'] },
      { label: '갑자사화', reignYear: 10, months: [9, 10], keywords: ['갑자사화'] },
      { label: '중종반정', reignYear: 12, months: [9, 10], keywords: ['반정', '폐위'] },
    ],
  },
  jungjong: {
    code: 'K0', name: '중종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [9, 10], keywords: ['즉위', '반정'] },
      { label: '기묘사화', reignYear: 14, months: [11, 12], keywords: ['기묘사화', '조광조'] },
    ],
  },
  injong: {
    code: 'L0', name: '인종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [1, 2], keywords: ['즉위'] },
      { label: '승하', reignYear: 1, months: [7, 8], keywords: ['붕어', '승하'] },
    ],
  },
  myeongjong: {
    code: 'M0', name: '명종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [7, 8], keywords: ['즉위'] },
      { label: '을사사화', reignYear: 1, months: [8, 9], keywords: ['을사사화', '윤원형'] },
      { label: '임꺽정', reignYear: 14, months: [1, 2], keywords: ['임꺽정'] },
    ],
  },
  seonjo: {
    code: 'N0', name: '선조실록',
    events: [
      { label: '임진왜란', reignYear: 25, months: [4, 5], keywords: ['임진왜란', '왜군', '부산'] },
      { label: '이순신한산도', reignYear: 25, months: [7, 8], keywords: ['이순신', '한산도'] },
      { label: '평양수복', reignYear: 26, months: [1, 2], keywords: ['평양', '수복', '명'] },
    ],
  },
  gwanghaegun: {
    // 광해군일기 (실록 아님)
    code: 'O0', name: '광해군일기',
    events: [
      { label: '동의보감', reignYear: 2, months: [4, 5], keywords: ['허준', '동의보감'] },
      { label: '인조반정', reignYear: 15, months: [3, 4], keywords: ['반정', '폐위'] },
    ],
  },
  injo: {
    code: 'P0', name: '인조실록',
    events: [
      { label: '이괄의난', reignYear: 2, months: [1, 2], keywords: ['이괄'] },
      { label: '정묘호란', reignYear: 5, months: [1, 2], keywords: ['정묘호란', '후금'] },
      { label: '병자호란', reignYear: 14, months: [12], keywords: ['병자호란', '남한산성', '삼전도'] },
    ],
  },
  hyojong: {
    code: 'Q0', name: '효종실록',
    events: [
      { label: '즉위북벌', reignYear: 1, months: [5, 6], keywords: ['즉위', '북벌'] },
      { label: '나선정벌', reignYear: 7, months: [2, 3], keywords: ['나선정벌', '러시아'] },
    ],
  },
  hyeonjong: {
    code: 'R0', name: '현종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [5, 6], keywords: ['즉위'] },
      { label: '예송논쟁', reignYear: 1, months: [1, 2], keywords: ['예송', '복상', '자의대비'] },
    ],
  },
  sukjong: {
    code: 'S0', name: '숙종실록',
    events: [
      { label: '기사환국', reignYear: 15, months: [5, 6], keywords: ['장희빈', '기사환국', '인현왕후'] },
      { label: '갑술환국', reignYear: 20, months: [10, 11], keywords: ['갑술환국', '장희빈'] },
    ],
  },
  gyeongjong: {
    code: 'T0', name: '경종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [6, 7], keywords: ['즉위'] },
      { label: '신임사화', reignYear: 1, months: [8, 9], keywords: ['신임사화', '노론'] },
    ],
  },
  yeongjo: {
    code: 'U0', name: '영조실록',
    events: [
      { label: '탕평비', reignYear: 4, months: [2, 3], keywords: ['탕평', '탕평비'] },
      { label: '균역법', reignYear: 26, months: [1, 2], keywords: ['균역법'] },
      { label: '사도세자', reignYear: 38, months: [5, 6], keywords: ['사도세자', '뒤주', '폐세자'] },
    ],
  },
  jeongjo: {
    code: 'V0', name: '정조실록',
    events: [
      { label: '즉위규장각', reignYear: 1, months: [3, 4], keywords: ['즉위', '규장각'] },
      { label: '장용영', reignYear: 13, months: [1, 2], keywords: ['장용영'] },
      { label: '화성', reignYear: 18, months: [9, 10], keywords: ['화성', '수원'] },
    ],
  },
  sunjo: {
    code: 'W0', name: '순조실록',
    events: [
      { label: '즉위', reignYear: 1, months: [7, 8], keywords: ['즉위'] },
      { label: '홍경래난', reignYear: 11, months: [12], keywords: ['홍경래'] },
    ],
  },
  heonjong: {
    code: 'X0', name: '헌종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [12], keywords: ['즉위'] },
      { label: '기해박해', reignYear: 5, months: [3, 4], keywords: ['기해박해', '천주교'] },
    ],
  },
  cheoljong: {
    code: 'Y0', name: '철종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [6, 7], keywords: ['즉위'] },
      { label: '임술농민봉기', reignYear: 12, months: [2, 3], keywords: ['임술', '농민'] },
    ],
  },
  gojong: {
    code: 'Z0', name: '고종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [12], keywords: ['즉위', '흥선대원군'] },
      { label: '을미사변', reignYear: 32, months: [8, 9], keywords: ['명성황후', '을미사변'] },
      { label: '대한제국', reignYear: 34, months: [10, 11], keywords: ['대한제국', '황제'] },
    ],
  },
  sunjong: {
    // 코드 미검증 — 실행 전 확인 필요
    code: 'AA0', name: '순종실록',
    events: [
      { label: '즉위', reignYear: 1, months: [7, 8], keywords: ['즉위'] },
      { label: '한일병합', reignYear: 4, months: [8, 9], keywords: ['한일병합', '경술국치'] },
    ],
  },
};

let _session = null;

async function getSession() {
  if (_session) return _session;
  const res = await fetch(`${BASE}/dir/item?itemId=JT&gubun=book`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept-Language': 'ko-KR,ko;q=0.9',
    },
    redirect: 'follow',
  });
  const cookie = res.headers.get('set-cookie') ?? '';
  const match = cookie.match(/JSESSIONID=([^;]+)/);
  _session = match?.[1] ?? '';
  return _session;
}

function headers(referer = `${BASE}/dir/item?itemId=JT&gubun=book`) {
  return {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Referer': referer,
    'X-Requested-With': 'XMLHttpRequest',
    'Cookie': `JSESSIONID=${_session}`,
  };
}

async function treeAjax(params) {
  const qs = new URLSearchParams({ grpId: '', itemId: 'JT', gubun: 'book', cate1: '', cate2: '', ...params });
  const url = `${BASE}/dir/treeAjax?${qs}`;
  const res = await fetch(url, { headers: headers() });
  return res.text();
}

function parseTreeIds(html) {
  return [...html.matchAll(/data-dataId='([^']+)'/g)].map(m => m[1]);
}

async function fetchArticleContent(dataId) {
  const qs = new URLSearchParams({
    grpId: '', itemId: 'JT', gubun: 'book', depth: '5',
    cate1: '', cate2: '', dataGubun: '최종정보', dataId,
  });
  const url = `${BASE}/dir/node?${qs}`;
  const res = await fetch(url, { headers: headers() });
  const html = await res.text();
  return parseArticle(html, dataId);
}

function parseArticle(html, dataId) {
  const clean = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  // 날짜 패턴: {왕호} {재위년|즉위년} {간지}({서기}) {월}월 {일}일
  const dateMatch = clean.match(/[가-힣]+\s+(?:\d+년|즉위년)\s+[가-힣]+\(\d+\)\s+\d+월\s+\d+일/);
  const date = dateMatch?.[0]?.trim() ?? '';

  // 제목
  const titleMatch = clean.match(/\d+-\d+-\d+\[\d+\]\s+(.+?)\s+(?:\[DCI\]|이달에|(?:\S+이\s))/);
  const title = titleMatch?.[1]?.trim() ?? '';

  // DCI
  const dciMatch = clean.match(/\[DCI\](\S+)/);
  const dci = dciMatch?.[1] ?? dataId;

  // 번역 본문: DCI 이후 ~ 【원전】 이전
  const bodyMatch = clean.match(/\[DCI\]\S+\s+(?:DCI복사\s+URL복사\s+)?(.+?)(?:【원전】|ⓒ|$)/);
  const translation = bodyMatch?.[1]?.trim() ?? '';

  // 원전/분류 정보
  const sourceMatch = clean.match(/【원전】\s*(.+?)(?:【분류】|ⓒ|$)/);
  const source = sourceMatch?.[1]?.trim() ?? '';

  return { dataId, dci, date, title, translation, source };
}

async function collectKing(kingId) {
  const target = KING_TARGETS[kingId];
  if (!target) { console.error(`알 수 없는 왕: ${kingId}`); return; }

  const force = process.argv.includes('--force');
  const outFile = join(OUT_DIR, `${kingId}-itkc.json`);
  if (!force && existsSync(outFile)) {
    console.error(`건너뜀: ${outFile}`);
    return;
  }

  await getSession();
  console.error(`\n=== ${kingId} (${target.name}) ===`);
  const results = [];

  for (const event of target.events) {
    const yearCode = `A${String(event.reignYear).padStart(2, '0')}`;
    const parentId = `ITKC_JT_${target.code}_${yearCode}`;
    console.error(`\n  [${event.label}] 재위 ${event.reignYear}년 (${yearCode})`);

    // 월 목록
    await delay(DELAY_MS);
    const monthHtml = await treeAjax({ depth: '2', dataGubun: '재위년', dataId: parentId });
    const monthIds = parseTreeIds(monthHtml);

    for (const month of event.months) {
      const monthSuffix = `${String(month).padStart(2, '0')}A`;
      const monthId = monthIds.find(id => id.endsWith(`_${monthSuffix}`));
      if (!monthId) { console.error(`    ${month}월: 없음`); continue; }

      // 일 목록
      await delay(DELAY_MS);
      const dayHtml = await treeAjax({ depth: '3', dataGubun: '재위년', dataId: monthId });
      const dayIds = parseTreeIds(dayHtml);
      console.error(`    ${month}월: ${dayIds.length}일 수집`);

      for (const dayId of dayIds) {
        // 기사 목록
        await delay(1000);
        const artHtml = await treeAjax({ depth: '4', dataGubun: '일', dataId: dayId });
        const artIds = parseTreeIds(artHtml);

        for (const artId of artIds) {
          await delay(DELAY_MS);
          const article = await fetchArticleContent(artId);
          if (!article.translation) continue;

          const matched = event.keywords.some(kw => article.translation.includes(kw) || article.title.includes(kw));
          if (!matched) continue;

          console.error(`    ✓ [${event.label}] ${article.date} — ${article.title}`);
          results.push({ event: event.label, ...article });
        }
      }
    }
  }

  writeFileSync(outFile, JSON.stringify(results, null, 2), 'utf-8');
  console.error(`\n저장: ${outFile} (${results.length}개 기사)`);
}

// 실행
const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
const kings = args.length > 0 ? args : Object.keys(KING_TARGETS);
console.error(`수집 대상: ${kings.join(', ')}`);

for (const king of kings) {
  await collectKing(king);
}
console.error('\n완료.');
