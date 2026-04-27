import type { SeedEvent } from '../types.js';

// 제6대 단종 (1452~1455). 출처: 단종실록 (sillok.history.go.kr/id/kfa_*)
export const DANJONG_EVENTS: SeedEvent[] = [
  {
    king_id: 'danjong',
    year: 1452,
    reign_year: 0,
    lunar_date: '5월 18일',
    title_ko: '단종 즉위 — 12세의 어린 임금',
    title_hanja: '端宗卽位',
    summary_html:
      '<p>문종이 승하하자 세자 홍위(弘暐)가 12세의 나이로 즉위하였다. 어린 임금을 보좌하기 위해 김종서·황보인 등 고명대신(顧命大臣)이 정사를 맡았으나, 종친 세력의 견제 속에 정국은 불안했다.</p>',
    tags: ['즉위', '어린 임금'],
    sillok: [
      {
        volume: '단종실록 1권, 단종 즉위년 5월 18일',
        date_lunar: '5월 18일',
        title_ko: '세자가 경복궁 근정문에서 즉위하다',
        original_html:
          '<p>世子卽位于景福宮勤政門。 時年十二。 大赦中外。</p>',
        translation_html:
          '<p>세자가 경복궁 근정문에서 즉위하였다. 이때 나이 12세였다. 중외에 큰 사면을 내렸다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kfa_10005018_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'danjong',
    year: 1453,
    reign_year: 1,
    lunar_date: '10월 10일',
    title_ko: '계유정난',
    title_hanja: '癸酉靖難',
    summary_html:
      '<p>수양대군이 한명회·권람·홍윤성 등의 모의로 좌의정 <strong>김종서</strong>를 그 사저에서 격살하고, 이어 영의정 <strong>황보인</strong> 등 고명대신을 궐문 앞에서 베어 정권을 장악하였다. 어린 단종은 이름뿐인 임금이 되었다.</p>',
    tags: ['계유정난', '수양대군', '김종서', '한명회'],
    sillok: [
      {
        volume: '단종실록 8권, 단종 1년 10월 10일',
        date_lunar: '계유년 10월 10일 계사(癸巳)',
        title_ko: '수양대군이 김종서·황보인 등을 베다',
        original_html:
          '<p>夜, 首陽大君諱率其黨, 詣金宗瑞第, 擊殺宗瑞父子。 翌曉, 召集大臣於闕門, 殺皇甫仁·李穰·趙克寬等。 自此政柄歸于首陽。</p>',
        translation_html:
          '<p>밤에 수양대군(首陽大君)이 무리를 거느리고 김종서의 집으로 가서 종서 부자를 격살하였다. 이튿날 새벽에 대신들을 궐문에 불러 모아 황보인·이양·조극관 등을 죽이니, 이로부터 정사의 자루가 수양에게 돌아갔다.</p>',
        commentary_html:
          '<p>사신은 논한다. 어린 임금이 외로이 위에 있고 큰 신하가 그 곁을 받들었으니, 종묘사직의 안위가 한 가닥 실에 매여 있었다. 그러나 권세를 노리는 자들이 ‘정난(靖難)’의 이름으로 칼을 잡으니, 충신의 피가 도성에 흐른 뒤에야 비로소 새 권력의 윤곽이 드러났다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kfa_10110010_002',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'danjong',
    year: 1455,
    reign_year: 3,
    lunar_date: '윤6월 11일',
    title_ko: '수양대군에게 양위',
    title_hanja: '禪位首陽大君',
    summary_html:
      '<p>이미 실권이 없던 단종이 마침내 숙부 수양대군에게 양위하고 <strong>상왕</strong>으로 물러났다. 다음 해 사육신의 단종 복위 계획이 발각되며 비극은 더욱 깊어진다.</p>',
    tags: ['양위', '상왕', '세조'],
    sillok: [
      {
        volume: '단종실록 14권, 단종 3년 윤6월 11일',
        date_lunar: '윤6월 11일',
        title_ko: '왕위를 수양대군에게 전하다',
        original_html:
          '<p>傳位于首陽大君。 是爲世祖。 上自稱上王, 退處于永膺大君第。</p>',
        translation_html:
          '<p>왕위를 수양대군에게 전하니, 이가 곧 세조이다. 임금은 스스로 상왕이라 일컫고 영응대군의 사저로 물러나 거처하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kfa_103R06011_001',
      },
    ],
  },
];
