export const ERAS = [
  {
    id: 1,
    name: "제1기: 건국과 기틀 마련",
    kings: "태조 ~ 세조",
    period: "1392 - 1468",
    keyword: "개국과 기틀, 무인적 기상",
    description: "고려의 멸망과 조선의 건국이라는 거대한 전환기. 강력한 왕권을 바탕으로 국가의 기틀을 다지는 과정.",
    color: { primary: "#A5CCBF", secondary: "#90A4AE" },
    kingsList: [
      { id: "taejo", name: "1대 태조", reign: "1392-1398", years: 6, desc: "조선 건국, 한양 천도" },
      { id: "jeongjong", name: "2대 정종", reign: "1398-1400", years: 2, desc: "개경 환도, 왕자의 난 수습" },
      { id: "taejong", name: "3대 태종", reign: "1400-1418", years: 18, desc: "왕권 강화, 6조 직계제" },
      { id: "sejong", name: "4대 세종", reign: "1418-1450", years: 32, desc: "훈민정음 창제, 과학 기술 발전" },
      { id: "munjong", name: "5대 문종", reign: "1450-1452", years: 2, desc: "고려사, 고려사절요 편찬" },
      { id: "danjong", name: "6대 단종", reign: "1452-1455", years: 3, desc: "계유정난으로 숙부에게 왕위 찬탈" },
      { id: "sejo", name: "7대 세조", reign: "1455-1468", years: 13, desc: "왕권 강화, 진관 체제, 경국대전 편찬 시작" },
    ]
  },
  {
    id: 2,
    name: "제2기: 문화의 황금기와 사림의 등장",
    kings: "예종 ~ 명종",
    period: "1468 - 1567",
    keyword: "문화의 황금기, 유교 법치",
    description: "경국대전 완성을 통해 조선의 통치 이념인 유교 문화가 만개하고 사림이 정치 무대에 등장한 시기.",
    color: { primary: "#E2E7E4", secondary: "#D8D8D8" },
    kingsList: [
      { id: "yejong", name: "8대 예종", reign: "1468-1469", years: 1, desc: "직전수조법 제정" },
      { id: "seongjong", name: "9대 성종", reign: "1469-1494", years: 25, desc: "경국대전 완성, 사림 등용" },
      { id: "yeonsangun", name: "10대 연산군", reign: "1494-1506", years: 12, desc: "무오사화, 갑자사화" },
      { id: "jungjong", name: "11대 중종", reign: "1506-1544", years: 38, desc: "중종반정, 기묘사화" },
      { id: "injong", name: "12대 인종", reign: "1544-1545", years: 1, desc: "최단기 재위" },
      { id: "myeongjong", name: "13대 명종", reign: "1545-1567", years: 22, desc: "을사사화, 임꺽정의 난" },
    ]
  },
  {
    id: 3,
    name: "제3기: 전란의 상흔과 재건의 시대",
    kings: "선조 ~ 정조",
    period: "1567 - 1800",
    keyword: "전란과 재건, 실학의 태동",
    description: "임진왜란과 병자호란이라는 두 차례의 국난을 겪은 후 탕평책과 실학을 통해 사회 전반의 재건에 힘쓴 시기.",
    color: { primary: "#E0E4E8", secondary: "#1F3A69" },
    kingsList: [
      { id: "seonjo", name: "14대 선조", reign: "1567-1608", years: 41, desc: "임진왜란, 붕당 정치 시작" },
      { id: "gwanghaegun", name: "15대 광해군", reign: "1608-1623", years: 15, desc: "중립 외교, 대동법 실시" },
      { id: "injo", name: "16대 인조", reign: "1623-1649", years: 26, desc: "인조반정, 병자호란" },
      { id: "hyojong", name: "17대 효종", reign: "1649-1659", years: 10, desc: "북벌 정책" },
      { id: "hyeonjong", name: "18대 현종", reign: "1659-1674", years: 15, desc: "예송 논쟁" },
      { id: "sukjong", name: "19대 숙종", reign: "1674-1720", years: 46, desc: "환국 정치, 상평통보 발행" },
      { id: "gyeongjong", name: "20대 경종", reign: "1720-1724", years: 4, desc: "신임사화" },
      { id: "yeongjo", name: "21대 영조", reign: "1724-1776", years: 52, desc: "탕평책, 균역법, 최장기 재위" },
      { id: "jeongjo", name: "22대 정조", reign: "1776-1800", years: 24, desc: "규장각, 수원 화성 건설" },
    ]
  },
  {
    id: 4,
    name: "제4기: 변혁의 물결과 근대의 태동",
    kings: "순조 ~ 순종",
    period: "1800 - 1910",
    keyword: "변혁과 갈등, 근대화의 시도",
    description: "세도 정치의 부작용과 외세의 압력 속에서도 민중 문화가 꽃피우고 근대 국가로의 전환을 시도한 시기.",
    color: { primary: "#F5EFE6", secondary: "#F7B500" },
    kingsList: [
      { id: "sunjo", name: "23대 순조", reign: "1800-1834", years: 34, desc: "세도 정치 시작, 홍경래의 난" },
      { id: "heonjong", name: "24대 헌종", reign: "1834-1849", years: 15, desc: "기해박해" },
      { id: "cheoljong", name: "25대 철종", reign: "1849-1863", years: 14, desc: "임술농민봉기" },
      { id: "gojong", name: "26대 고종", reign: "1863-1907", years: 44, desc: "흥선대원군 집권, 대한제국 선포" },
      { id: "sunjong", name: "27대 순종", reign: "1907-1910", years: 3, desc: "조선 왕조의 마지막, 한일강제병합" },
    ]
  }
];

export const SEJONG_EVENTS = [
  { year: 1418, title: "세종 즉위", desc: "태종의 양위를 받아 조선 제4대 왕으로 즉위하다." },
  { year: 1420, title: "집현전 확대 개편", desc: "학문 연구와 정책 자문을 위해 집현전을 설치하다." },
  { year: 1434, title: "자격루 제작", desc: "장영실 등이 스스로 치는 물시계인 자격루를 완성하다." },
  { year: 1441, title: "측우기 발명", desc: "강우량을 측정하는 측우기를 세계 최초로 발명하다." },
  { year: 1443, title: "훈민정음 창제", desc: "백성을 가르치는 바른 소리, 훈민정음을 창제하다." },
  { year: 1446, title: "훈민정음 반포", desc: "훈민정음을 세상에 널리 반포하다." },
];

export const SILLOK_ENTRY = {
  date: "세종 25년 12월 30일",
  title: "훈민정음 창제",
  original: "國之語音 異乎中國 與文字不相流通 故愚民有所欲言 而終不得伸其情者多矣 予為此憫然 新制二十八字 欲使人人易習 便於日用耳",
  translation: "우리나라의 말이 중국과 달라 한자와는 서로 통하지 아니하므로, 이런 까닭에 어리석은 백성이 이르고자 하는 바가 있어도 마침내 그 뜻을 능히 펴지 못하는 사람이 많다. 내가 이를 불쌍히 여겨 새로 스물여덟 글자를 만드니, 사람마다 하여금 쉽게 익혀 날마다 씀에 편안하게 하고자 할 따름이다.",
  commentary: "사신은 논한다. 임금께서 눈병이 나시고 기존 학자들의 반대에도 불구하고 밤낮으로 연구하셨다. 글을 몰라 억울함을 호소하지 못하는 백성을 향한 연민이 전통의 무게를 이겨낸 것이다. 이 발명은 단순한 문자가 아니라 지극한 어짐의 발현이다."
};
