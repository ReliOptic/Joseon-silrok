import type { SeedEvent } from '../types.js';

// Era 2 (예종 ~ 명종, 1468~1567). 헤드라인 이벤트 — 사화·반정 본문은 다음 배치에서 보강.
export const ERA2_EVENTS: SeedEvent[] = [
  // 예종
  { king_id: 'yejong', year: 1469, reign_year: 1, title_ko: '직전수조법 정비',
    summary_html: '<p>직전(職田)에서 거두는 조세를 관(官)이 거두어 관리에게 분급하는 <strong>관수관급제</strong>의 단초가 되는 조정을 시행하였다.</p>',
    tags: ['토지제도'] },
  // 성종
  { king_id: 'seongjong', year: 1485, reign_year: 16, lunar_date: '1월 1일',
    title_ko: '《경국대전》 시행', title_hanja: '經國大典頒行',
    summary_html: '<p>세조 대 시작된 법전이 마침내 시행되었다. 이전(吏典)·호전·예전·병전·형전·공전의 6전 체제로, 조선 500년 통치의 헌법으로 기능한다.</p>',
    tags: ['경국대전', '법전'] },
  { king_id: 'seongjong', year: 1478, reign_year: 9, title_ko: '홍문관 설치',
    summary_html: '<p>경연(經筵)과 경적의 관리를 맡는 <strong>홍문관</strong>을 두어 사간원·사헌부와 함께 삼사(三司)를 이루었다.</p>',
    tags: ['홍문관', '삼사'] },
  // 연산군
  { king_id: 'yeonsangun', year: 1498, reign_year: 4, lunar_date: '7월',
    title_ko: '무오사화', title_hanja: '戊午士禍',
    summary_html: '<p>김종직의 <em>조의제문(弔義帝文)</em>을 사초에 실은 김일손이 능지처참되고, 이미 죽은 김종직은 부관참시되었다. 사림이 처음으로 큰 화를 입었다.</p>',
    tags: ['무오사화', '김종직', '김일손'] },
  { king_id: 'yeonsangun', year: 1504, reign_year: 10, title_ko: '갑자사화', title_hanja: '甲子士禍',
    summary_html: '<p>생모 폐비 윤씨의 사사 사건을 빌미로 훈구·사림을 가리지 않고 수많은 신하를 처형하였다. 이미 죽은 한명회·정창손도 부관참시되었다.</p>',
    tags: ['갑자사화', '폐비 윤씨'] },
  { king_id: 'yeonsangun', year: 1506, reign_year: 12, lunar_date: '9월 2일',
    title_ko: '중종반정', title_hanja: '中宗反正',
    summary_html: '<p>박원종·성희안 등이 군사를 일으켜 연산군을 폐하고 진성대군을 새 임금으로 추대하였다. 연산군은 강화 교동에 유배되어 그해에 죽었다.</p>',
    tags: ['반정', '연산군 폐위'] },
  // 중종
  { king_id: 'jungjong', year: 1519, reign_year: 14, lunar_date: '11월 15일',
    title_ko: '기묘사화', title_hanja: '己卯士禍',
    summary_html: '<p>현량과·소격서 폐지·위훈 삭제 등 급진 개혁을 추진하던 <strong>조광조</strong>와 사림이 훈구의 반격으로 일거에 화를 입었다. “주초위왕(走肖爲王)” 나뭇잎의 일은 그 상징이다.</p>',
    tags: ['기묘사화', '조광조', '현량과'] },
  // 인종
  { king_id: 'injong', year: 1545, reign_year: 1, title_ko: '인종 승하',
    summary_html: '<p>재위 8개월 만에 승하하니 조선 27왕 가운데 최단 재위였다. 짧았으나 사림 등용에 적극이었다.</p>' },
  // 명종
  { king_id: 'myeongjong', year: 1545, reign_year: 0, lunar_date: '8월',
    title_ko: '을사사화', title_hanja: '乙巳士禍',
    summary_html: '<p>대윤(尹任)과 소윤(尹元衡)의 외척 다툼이 폭발하여 윤임·유관·유인숙 등이 처형되고 사림이 또 한 차례 큰 화를 입었다.</p>',
    tags: ['을사사화', '대윤·소윤'] },
  { king_id: 'myeongjong', year: 1559, reign_year: 14, title_ko: '임꺽정의 난',
    summary_html: '<p>황해도 일대를 무대로 활동한 의적 집단의 봉기가 본격화되었다. 1562년에야 토포되었으며, 명종 말 사회 모순의 단면을 보여준다.</p>',
    tags: ['임꺽정', '도적'] },
];
