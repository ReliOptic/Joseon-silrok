import type { SeedEvent } from '../types.js';

// 제2대 정종 (1398~1400). 출처: 정종실록 (sillok.history.go.kr/id/kba_*)
export const JEONGJONG_EVENTS: SeedEvent[] = [
  {
    king_id: 'jeongjong',
    year: 1399,
    reign_year: 1,
    lunar_date: '3월 7일',
    title_ko: '개경 환도',
    title_hanja: '還都開京',
    summary_html:
      '<p>한양 천도 5년 만에 도성을 다시 <strong>개경</strong>으로 옮겼다. 천재(天災)와 흉흉한 민심을 명분으로 삼았으나, 즉위 직후의 불안한 정국과 종친 세력의 향배가 짙게 깔린 결정이었다.</p>',
    tags: ['천도', '개경'],
    sillok: [
      {
        volume: '정종실록 1권, 정종 1년 3월 7일',
        date_lunar: '3월 7일 신유(辛酉)',
        title_ko: '도읍을 다시 개경으로 옮기다',
        original_html:
          '<p>還都于開京。 以漢陽屢有災異, 群臣請還舊都。 上從之。</p>',
        translation_html:
          '<p>도읍을 개경으로 다시 옮겼다. 한양에 재이(災異)가 자주 있다 하여 여러 신하가 옛 도읍으로 돌아가기를 청하니, 임금이 이를 따랐다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kba_10103007_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'jeongjong',
    year: 1400,
    reign_year: 2,
    lunar_date: '1월 28일',
    title_ko: '제2차 왕자의 난',
    title_hanja: '第二次王子之亂',
    summary_html:
      '<p>회안대군 <strong>방간</strong>이 박포(朴苞)의 부추김을 받아 정안공 <strong>방원</strong>을 치려 하였으나, 개경 한복판의 시가전에서 패하였다. 방간은 토산(兎山)으로 유배되고 박포는 처형되었으며, 방원의 위치는 사실상 후계자로 굳어졌다.</p>',
    tags: ['왕자의 난', '방간', '박포'],
    sillok: [
      {
        volume: '정종실록 3권, 정종 2년 1월 28일',
        date_lunar: '1월 28일 갑신(甲申)',
        title_ko: '회안군 방간이 거병하니, 정안공이 이를 평정하다',
        original_html:
          '<p>懷安公芳幹擧兵, 與靖安公戰于開京街中。 芳幹敗, 流于兎山。 朴苞伏誅。</p>',
        translation_html:
          '<p>회안공 방간이 거병하여 정안공과 개경 시가에서 싸웠다. 방간이 패하여 토산으로 귀양 보내지고, 박포는 처형되었다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kba_10201028_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'jeongjong',
    year: 1400,
    reign_year: 2,
    lunar_date: '11월 13일',
    title_ko: '정안공에게 양위',
    title_hanja: '禪位靖安公',
    summary_html:
      '<p>정종이 동복아우 <strong>정안공 방원</strong>에게 왕위를 물려주고 상왕(上王)으로 물러났다. 즉위 2년 2개월 만의 양위로, 조선 초의 권력 정리는 마침내 한 사람에게 수렴되었다.</p>',
    tags: ['양위', '태종'],
    sillok: [
      {
        volume: '정종실록 6권, 정종 2년 11월 13일',
        date_lunar: '11월 13일 임자(壬子)',
        title_ko: '왕위를 정안공에게 전하다',
        original_html:
          '<p>傳位于靖安公, 是爲太宗。 上自稱上王, 退處仁德宮。</p>',
        translation_html:
          '<p>왕위를 정안공에게 전하니, 이가 곧 태종이다. 임금은 스스로 상왕(上王)이라 일컫고 인덕궁(仁德宮)에 물러나 거처하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kba_10211013_001',
      },
    ],
  },
];
