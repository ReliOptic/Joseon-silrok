import type { SeedEvent } from '../types.js';

// 제5대 문종 (1450~1452). 출처: 문종실록 (sillok.history.go.kr/id/kea_*)
export const MUNJONG_EVENTS: SeedEvent[] = [
  {
    king_id: 'munjong',
    year: 1450,
    reign_year: 0,
    lunar_date: '2월 22일',
    title_ko: '문종 즉위',
    title_hanja: '文宗卽位',
    summary_html:
      '<p>세종의 맏아들 향(珦)이 부왕의 승하 후 빈전(殯殿) 앞에서 즉위하였다. 세자 시절부터 28년간 정사를 익히고 문무에 두루 밝았으나, 본래 병약하여 재위 2년 3개월 만에 승하하였다.</p>',
    tags: ['즉위'],
    sillok: [
      {
        volume: '문종실록 1권, 문종 즉위년 2월 22일',
        date_lunar: '2월 22일',
        title_ko: '빈전 앞에서 즉위하다',
        original_html:
          '<p>世子卽位于殯殿之東階。 是爲文宗。 大赦中外。</p>',
        translation_html:
          '<p>세자가 빈전(殯殿)의 동쪽 섬돌에서 즉위하니, 이가 곧 문종이다. 중외에 큰 사면을 내렸다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kea_10002022_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'munjong',
    year: 1451,
    reign_year: 1,
    lunar_date: '8월 25일',
    title_ko: '《고려사》 완성',
    title_hanja: '高麗史撰進',
    summary_html:
      '<p>김종서·정인지 등이 기전체(紀傳體)로 다시 엮은 <strong>《고려사》 139권</strong>을 임금께 올렸다. 세종 때 시작된 편찬이 두 임금에 걸쳐 마무리되었다.</p>',
    tags: ['고려사', '편찬'],
    sillok: [
      {
        volume: '문종실록 9권, 문종 1년 8월 25일',
        date_lunar: '8월 25일',
        title_ko: '김종서 등이 《고려사》를 올리다',
        original_html:
          '<p>金宗瑞·鄭麟趾等, 撰進高麗史一百三十九卷。 上嘉之, 賜鞍馬·彩段。</p>',
        translation_html:
          '<p>김종서·정인지 등이 《고려사(高麗史)》 1백 39권을 찬진(撰進)하니, 임금이 이를 가상히 여겨 안마(鞍馬)와 채단(彩段)을 내렸다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kea_10108025_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'munjong',
    year: 1452,
    reign_year: 2,
    lunar_date: '2월 20일',
    title_ko: '《고려사절요》 편찬',
    title_hanja: '高麗史節要',
    summary_html:
      '<p>김종서 등이 편년체로 다시 엮은 <strong>《고려사절요》 35권</strong>을 올렸다. 기전체의 《고려사》가 인물과 제도를 통람하는 책이라면, 《절요》는 사건의 흐름을 한눈에 좇을 수 있는 정사(正史)였다.</p>',
    tags: ['고려사절요', '편년체'],
  },
];
