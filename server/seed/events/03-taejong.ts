import type { SeedEvent } from '../types.js';

// 제3대 태종 (1400~1418). 출처: 태종실록 (sillok.history.go.kr/id/kca_*)
export const TAEJONG_EVENTS: SeedEvent[] = [
  {
    king_id: 'taejong',
    year: 1402,
    reign_year: 2,
    lunar_date: '8월',
    title_ko: '신문고 설치',
    title_hanja: '申聞鼓設置',
    summary_html:
      '<p>억울한 백성이 직접 임금에게 호소할 수 있도록 대궐 문 앞에 큰 북, <strong>신문고</strong>를 두었다. 오늘날의 청원·민원 제도의 원형으로 평가되며, 사사로이 친 자와 거짓 호소한 자에게는 엄히 죄를 물었다.</p>',
    tags: ['신문고', '민원', '왕권 강화'],
    sillok: [
      {
        volume: '태종실록 4권, 태종 2년 8월 1일',
        date_lunar: '8월 1일',
        title_ko: '대궐 문 앞에 신문고를 달다',
        original_html:
          '<p>置申聞鼓于闕門。 凡有冤抑而不得伸者, 皆許擊鼓以聞。</p>',
        translation_html:
          '<p>대궐 문 앞에 신문고(申聞鼓)를 두었다. 무릇 억울한 일이 있어도 펴지 못한 자는 모두 북을 쳐서 임금께 아뢰도록 허락하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kca_10208001_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'taejong',
    year: 1413,
    reign_year: 13,
    lunar_date: '9월 1일',
    title_ko: '호패법 시행',
    title_hanja: '號牌法',
    summary_html:
      '<p>16세 이상 모든 남정(男丁)에게 신분과 거주지를 새긴 <strong>호패</strong>를 차게 하였다. 인구를 파악해 군역·요역의 기반을 다지고, 유민을 단속하려는 강력한 행정 개혁이었다.</p>',
    tags: ['호패법', '행정', '신분제'],
    sillok: [
      {
        volume: '태종실록 26권, 태종 13년 9월 1일',
        date_lunar: '9월 1일',
        title_ko: '호패법을 시행하다',
        original_html:
          '<p>始行號牌之法。 凡男丁年十六以上者, 皆佩號牌, 書其姓名·年甲·本貫·所居。</p>',
        translation_html:
          '<p>처음으로 호패의 법을 시행하였다. 남정(男丁)으로 나이 16세 이상인 자는 모두 호패를 차되, 성명·연갑(年甲)·본관·거주지를 쓰게 하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kca_11309001_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'taejong',
    year: 1413,
    reign_year: 13,
    lunar_date: '10월 15일',
    title_ko: '8도제 정비',
    title_hanja: '八道體制',
    summary_html:
      '<p>전국을 경기·충청·전라·경상·강원·황해·평안·함경의 <strong>8도</strong>로 나누고 도 아래에 부·목·군·현을 두었다. 이때 정해진 행정 구획은 이후 500년 조선의 골격이 된다.</p>',
    tags: ['8도', '행정구역'],
  },
  {
    king_id: 'taejong',
    year: 1418,
    reign_year: 18,
    lunar_date: '8월 8일',
    title_ko: '세자(충녕대군)에게 양위',
    title_hanja: '禪位忠寧大君',
    summary_html:
      '<p>맏아들 양녕대군이 폐세자된 뒤, 셋째 <strong>충녕대군</strong>이 세자로 책봉되었고 두 달 만에 왕위가 그에게 넘어갔다. 태종은 상왕으로 물러나 군권(병권)만은 4년 더 친히 잡았다.</p>',
    tags: ['양위', '세종'],
    sillok: [
      {
        volume: '태종실록 36권, 태종 18년 8월 10일',
        date_lunar: '8월 10일 무자(戊子)',
        title_ko: '왕위를 충녕대군에게 전하다',
        original_html:
          '<p>傳位于世子。 世子卽位于景福宮勤政殿, 是爲世宗。 上王退御于壽康宮。</p>',
        translation_html:
          '<p>세자에게 왕위를 전하였다. 세자가 경복궁 근정전에서 즉위하니 이가 세종이다. 상왕은 수강궁(壽康宮)으로 물러나 거처하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kca_11808010_001',
        is_hero: true,
      },
    ],
  },
];
