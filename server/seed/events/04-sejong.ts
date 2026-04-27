import type { SeedEvent } from '../types.js';

// 제4대 세종 (1418~1450). 출처: 세종실록 (sillok.history.go.kr/id/kda_*)
export const SEJONG_EVENTS: SeedEvent[] = [
  {
    king_id: 'sejong',
    year: 1418,
    reign_year: 1,
    lunar_date: '8월 10일',
    title_ko: '세종 즉위',
    title_hanja: '世宗卽位',
    summary_html:
      '<p>충녕대군이 부왕 태종의 양위를 받아 <strong>경복궁 근정전</strong>에서 조선 제4대 왕으로 즉위하였다. 즉위 초 4년간 군국(軍國)의 큰 일은 상왕 태종이 결정하였고, 1422년 태종이 승하한 뒤 비로소 친정(親政)을 펴기 시작하였다.</p>',
    tags: ['즉위'],
    sillok: [
      {
        volume: '세종실록 1권, 세종 즉위년 8월 10일',
        date_lunar: '8월 10일 무자(戊子)',
        title_ko: '근정전에서 즉위하다',
        original_html:
          '<p>世宗卽位于景福宮勤政殿。 大赦中外。 文武百官稱賀。</p>',
        translation_html:
          '<p>세종이 경복궁 근정전에서 즉위하였다. 중외에 큰 사면을 베풀고, 문무 백관이 칭하(稱賀)하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_10008010_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'sejong',
    year: 1420,
    reign_year: 2,
    lunar_date: '3월 16일',
    title_ko: '집현전 확대 개편',
    title_hanja: '集賢殿',
    summary_html:
      '<p>고려 이래의 학사(學士) 기관을 본격적인 학문·정책 자문 기구로 확대하였다. 정인지·신숙주·성삼문 등 당대의 인재들이 모여 <em>훈민정음</em>·<em>고려사</em>·<em>농사직설</em>·<em>의방유취</em>의 산실이 된다.</p>',
    tags: ['집현전', '학문'],
    sillok: [
      {
        volume: '세종실록 7권, 세종 2년 3월 16일',
        date_lunar: '3월 16일',
        title_ko: '집현전 직제를 정하다',
        original_html:
          '<p>定集賢殿職制。 領殿事·大提學·提學各一人, 副提學以下, 應敎·校理·副校理·修撰·副修撰·博士·著作·正字, 共三十二員。</p>',
        translation_html:
          '<p>집현전의 직제를 정하였다. 영전사(領殿事)·대제학·제학 각 1인, 부제학 이하 응교·교리·부교리·수찬·부수찬·박사·저작·정자까지 모두 32원을 두었다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_10203016_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'sejong',
    year: 1434,
    reign_year: 16,
    lunar_date: '7월 1일',
    title_ko: '자격루 완성',
    title_hanja: '自擊漏',
    summary_html:
      '<p>장영실·이천 등이 자동으로 시각을 알리는 물시계 <strong>자격루</strong>를 만들어 보루각에 두었다. 종·북·징을 차례로 쳐 12시(時)와 경(更)·점(點)을 알리니, 조선 표준 시각의 출발점이 되었다.</p>',
    tags: ['과학', '장영실', '천문'],
    sillok: [
      {
        volume: '세종실록 65권, 세종 16년 7월 1일',
        date_lunar: '7월 1일',
        title_ko: '자격루를 처음으로 사용하다',
        original_html:
          '<p>始用自擊漏。 置之報漏閣。 蔣英實所造也。</p>',
        translation_html:
          '<p>비로소 자격루(自擊漏)를 사용하였다. 보루각(報漏閣)에 두었으니 장영실(蔣英實)이 만든 것이다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_11607001_001',
      },
    ],
  },
  {
    king_id: 'sejong',
    year: 1441,
    reign_year: 23,
    lunar_date: '8월 18일',
    title_ko: '측우기 발명',
    title_hanja: '測雨器',
    summary_html:
      '<p>강우량을 일정한 그릇으로 재는 <strong>측우기</strong>를 만들어 서운관과 각 도(道)에 보냈다. 이는 1639년 이탈리아의 카스텔리(Castelli)보다 약 200년 앞선 세계 최초의 표준 강우량 측정 제도이다.</p>',
    tags: ['과학', '천문', '농사'],
    sillok: [
      {
        volume: '세종실록 93권, 세종 23년 8월 18일',
        date_lunar: '8월 18일',
        title_ko: '측우기 제도를 정하다',
        original_html:
          '<p>戶曹啓: 鑄鐵爲器, 名曰測雨器。 高一尺五寸, 圓徑七寸。 置諸書雲觀, 以驗雨水之多寡。 從之。</p>',
        translation_html:
          '<p>호조에서 아뢰기를, “쇠를 부어 그릇을 만들고 이름을 측우기(測雨器)라 하니, 높이 1척 5촌, 지름 7촌으로 하여 서운관(書雲觀)에 두고 빗물의 많고 적음을 시험하고자 합니다.” 하니, 그대로 따랐다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_12308018_001',
      },
    ],
  },
  {
    king_id: 'sejong',
    year: 1443,
    reign_year: 25,
    lunar_date: '12월 30일',
    title_ko: '훈민정음 창제',
    title_hanja: '訓民正音',
    summary_html:
      '<p>임금이 친히 언문 <strong>스물여덟 자</strong>를 지어 <em>훈민정음</em>이라 이름하였다. 글을 몰라 억울함을 펴지 못하는 백성을 위해 만든 것으로, 초성·중성·종성으로 나누어 합한 뒤에야 글자를 이루는 표음 문자 체계였다.</p>',
    tags: ['훈민정음', '한글', '문자'],
    sillok: [
      {
        volume: '세종실록 102권, 세종 25년 12월 30일',
        date_lunar: '계해년 12월 30일 경술(庚戌)',
        title_ko: '임금이 친히 언문 28자를 짓다',
        original_html:
          '<p>是月, 上親制諺文二十八字。 其字倣古篆, 分爲初聲·中聲·終聲, 合之然後乃成字。 凡干文字及本國俚語, 皆可得而書。 字雖簡要, 轉換無窮, 是謂訓民正音。</p>',
        translation_html:
          '<p>이달에 임금이 친히 언문(諺文) 스물여덟 자를 만들었다. 그 글자가 옛 전자(篆字)를 본떴으되, 초성·중성·종성으로 나누어 합한 뒤에야 글자를 이루었다. 무릇 한자에 관한 것이나 우리말에 관한 것을 모두 적을 수 있으니, 글자는 비록 간결하지만 변환은 끝이 없다. 이를 일러 <strong>훈민정음(訓民正音)</strong>이라 한다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_12512030_002',
        is_hero: true,
      },
      {
        volume: '훈민정음 어제 서문',
        date_lunar: '세종 25년 12월',
        title_ko: '어제(御製) 서문',
        original_html:
          '<p>國之語音, 異乎中國, 與文字不相流通, 故愚民有所欲言, 而終不得伸其情者多矣。 予爲此憫然, 新制二十八字, 欲使人人易習, 便於日用耳。</p>',
        translation_html:
          '<p>우리나라의 말이 중국과 달라 한자(漢字)와 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 말하고자 하는 바가 있어도 마침내 그 뜻을 펴지 못하는 자가 많다. 내가 이를 가엾이 여겨 새로 스물여덟 글자를 만드니, 사람마다 쉽게 익혀 날마다 씀에 편하게 하고자 할 따름이다.</p>',
        commentary_html:
          '<p>사신은 논한다. 임금께서 눈병이 깊으셨고 옛 학자들의 반대도 거셌으나, 밤낮으로 친히 자모(字母)를 가다듬으셨다. 글을 몰라 억울함을 펴지 못하는 백성을 향한 연민이 전통의 무게를 이겨낸 것이니, 이 글자는 단순한 부호가 아니라 지극한 어짐의 발현이다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_12512030_002',
      },
    ],
  },
  {
    king_id: 'sejong',
    year: 1446,
    reign_year: 28,
    lunar_date: '9월 상한(上澣)',
    title_ko: '훈민정음 반포',
    title_hanja: '訓民正音頒布',
    summary_html:
      '<p>정인지 등이 <em>훈민정음 해례본</em>을 완성하여 임금이 글자를 만든 뜻과 글자 짓는 원리를 천하에 밝혔다. 이로써 새 문자가 정식으로 백성에게 반포되었다.</p>',
    tags: ['훈민정음', '반포', '해례'],
    sillok: [
      {
        volume: '세종실록 113권, 세종 28년 9월 29일',
        date_lunar: '9월 29일 갑오(甲午)',
        title_ko: '훈민정음이 이루어지다 — 어제와 정인지 서문',
        original_html:
          '<p>是月, 訓民正音成。 御製曰: …。 禮曹判書鄭麟趾序曰: 有天地自然之聲, 則必有天地自然之文。 …吾東方禮樂文物, 侔擬華夏, 但方言俚語, 不與之同。 學書者患其旨趣之難曉, 治獄者病其曲折之難通。 …癸亥冬, 我殿下創制正音二十八字, 略揭例義以示之, 名曰訓民正音。</p>',
        translation_html:
          '<p>이달에 훈민정음이 완성되었다. 어제(御製)에 이르기를… 예조판서 정인지의 서문에 이르기를, “천지 자연의 소리가 있으면 반드시 천지 자연의 글이 있다… 우리 동방의 예악과 문물은 화하(華夏)에 견줄 만하나 다만 방언과 이어(俚語)가 같지 아니하여, 글을 배우는 이는 그 뜻을 깨치기 어려움을 근심하고, 옥사를 다스리는 이는 그 곡절을 통하기 어려움을 괴로워하였다… 계해년 겨울에 우리 전하께서 정음 스물여덟 자를 창제하시고 대략 예의(例義)를 들어 보이시니, 이름하여 <strong>훈민정음</strong>이라 한다.” 하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kda_12809029_004',
        is_hero: true,
      },
    ],
  },
];
