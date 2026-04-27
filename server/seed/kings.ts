import type { SeedKing } from './types.js';

// Reign dates and ordinals cross-checked against
// 국사편찬위원회 조선왕조실록 (sillok.history.go.kr) and 한국민족문화대백과사전.
export const KINGS: SeedKing[] = [
  // Era 1 — 건국과 기틀 마련
  { id: 'taejo',     era_ordinal: 1, ordinal: 1,  name_ko: '태조',    name_hanja: '太祖',
    reign_start: 1392, reign_end: 1398, summary: '조선 건국, 한양 천도' },
  { id: 'jeongjong', era_ordinal: 1, ordinal: 2,  name_ko: '정종',    name_hanja: '定宗',
    reign_start: 1398, reign_end: 1400, summary: '개경 환도, 왕자의 난 수습' },
  { id: 'taejong',   era_ordinal: 1, ordinal: 3,  name_ko: '태종',    name_hanja: '太宗',
    reign_start: 1400, reign_end: 1418, summary: '왕권 강화, 6조 직계제' },
  { id: 'sejong',    era_ordinal: 1, ordinal: 4,  name_ko: '세종',    name_hanja: '世宗',
    reign_start: 1418, reign_end: 1450, summary: '훈민정음 창제, 과학 기술 발전' },
  { id: 'munjong',   era_ordinal: 1, ordinal: 5,  name_ko: '문종',    name_hanja: '文宗',
    reign_start: 1450, reign_end: 1452, summary: '고려사·고려사절요 편찬' },
  { id: 'danjong',   era_ordinal: 1, ordinal: 6,  name_ko: '단종',    name_hanja: '端宗',
    reign_start: 1452, reign_end: 1455, summary: '계유정난으로 숙부에게 왕위 찬탈' },
  { id: 'sejo',      era_ordinal: 1, ordinal: 7,  name_ko: '세조',    name_hanja: '世祖',
    reign_start: 1455, reign_end: 1468, summary: '왕권 강화, 진관 체제, 경국대전 편찬 시작' },

  // Era 2 — 문화의 황금기와 사림의 등장
  { id: 'yejong',    era_ordinal: 2, ordinal: 8,  name_ko: '예종',    name_hanja: '睿宗',
    reign_start: 1468, reign_end: 1469, summary: '직전수조법 제정' },
  { id: 'seongjong', era_ordinal: 2, ordinal: 9,  name_ko: '성종',    name_hanja: '成宗',
    reign_start: 1469, reign_end: 1494, summary: '경국대전 완성, 사림 등용' },
  { id: 'yeonsangun',era_ordinal: 2, ordinal: 10, name_ko: '연산군',  name_hanja: '燕山君',
    reign_start: 1494, reign_end: 1506, summary: '무오사화, 갑자사화' },
  { id: 'jungjong',  era_ordinal: 2, ordinal: 11, name_ko: '중종',    name_hanja: '中宗',
    reign_start: 1506, reign_end: 1544, summary: '중종반정, 기묘사화' },
  { id: 'injong',    era_ordinal: 2, ordinal: 12, name_ko: '인종',    name_hanja: '仁宗',
    reign_start: 1544, reign_end: 1545, summary: '최단기 재위' },
  { id: 'myeongjong',era_ordinal: 2, ordinal: 13, name_ko: '명종',    name_hanja: '明宗',
    reign_start: 1545, reign_end: 1567, summary: '을사사화, 임꺽정의 난' },

  // Era 3 — 전란의 상흔과 재건의 시대
  { id: 'seonjo',    era_ordinal: 3, ordinal: 14, name_ko: '선조',    name_hanja: '宣祖',
    reign_start: 1567, reign_end: 1608, summary: '임진왜란, 붕당 정치 시작' },
  { id: 'gwanghaegun',era_ordinal: 3,ordinal: 15, name_ko: '광해군',  name_hanja: '光海君',
    reign_start: 1608, reign_end: 1623, summary: '중립 외교, 대동법 실시' },
  { id: 'injo',      era_ordinal: 3, ordinal: 16, name_ko: '인조',    name_hanja: '仁祖',
    reign_start: 1623, reign_end: 1649, summary: '인조반정, 병자호란' },
  { id: 'hyojong',   era_ordinal: 3, ordinal: 17, name_ko: '효종',    name_hanja: '孝宗',
    reign_start: 1649, reign_end: 1659, summary: '북벌 정책' },
  { id: 'hyeonjong', era_ordinal: 3, ordinal: 18, name_ko: '현종',    name_hanja: '顯宗',
    reign_start: 1659, reign_end: 1674, summary: '예송 논쟁' },
  { id: 'sukjong',   era_ordinal: 3, ordinal: 19, name_ko: '숙종',    name_hanja: '肅宗',
    reign_start: 1674, reign_end: 1720, summary: '환국 정치, 상평통보 발행' },
  { id: 'gyeongjong',era_ordinal: 3, ordinal: 20, name_ko: '경종',    name_hanja: '景宗',
    reign_start: 1720, reign_end: 1724, summary: '신임사화' },
  { id: 'yeongjo',   era_ordinal: 3, ordinal: 21, name_ko: '영조',    name_hanja: '英祖',
    reign_start: 1724, reign_end: 1776, summary: '탕평책, 균역법, 최장기 재위' },
  { id: 'jeongjo',   era_ordinal: 3, ordinal: 22, name_ko: '정조',    name_hanja: '正祖',
    reign_start: 1776, reign_end: 1800, summary: '규장각, 수원 화성 건설' },

  // Era 4 — 변혁의 물결과 근대의 태동
  { id: 'sunjo',     era_ordinal: 4, ordinal: 23, name_ko: '순조',    name_hanja: '純祖',
    reign_start: 1800, reign_end: 1834, summary: '세도 정치 시작, 홍경래의 난' },
  { id: 'heonjong',  era_ordinal: 4, ordinal: 24, name_ko: '헌종',    name_hanja: '憲宗',
    reign_start: 1834, reign_end: 1849, summary: '기해박해' },
  { id: 'cheoljong', era_ordinal: 4, ordinal: 25, name_ko: '철종',    name_hanja: '哲宗',
    reign_start: 1849, reign_end: 1863, summary: '임술농민봉기' },
  { id: 'gojong',    era_ordinal: 4, ordinal: 26, name_ko: '고종',    name_hanja: '高宗',
    reign_start: 1863, reign_end: 1907, summary: '흥선대원군 집권, 대한제국 선포' },
  { id: 'sunjong',   era_ordinal: 4, ordinal: 27, name_ko: '순종',    name_hanja: '純宗',
    reign_start: 1907, reign_end: 1910, summary: '조선 왕조의 마지막, 한일강제병합' },
];
