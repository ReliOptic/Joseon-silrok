import type { Era } from './types/king.types';

export const ERAS: Era[] = [
  {
    id: 1,
    name: "제1기: 건국과 기틀 마련",
    kings: "태조 ~ 세조",
    period: "1392 - 1468",
    keyword: "개국과 기틀, 무인적 기상",
    description: "고려의 멸망과 조선의 건국이라는 거대한 전환기. 강력한 왕권을 바탕으로 국가의 기틀을 다지는 과정.",
    color: { primary: "#A5CCBF", secondary: "#90A4AE" },
    kingsList: [
      { id: "taejo", name: "1대 태조", reign: "1392-1398", years: 6, desc: "조선 건국, 한양 천도", succession: "enthronement" },
      { id: "jeongjong", name: "2대 정종", reign: "1398-1400", years: 2, desc: "개경 환도, 왕자의 난 수습", succession: "forced_abdication" },
      { id: "taejong", name: "3대 태종", reign: "1400-1418", years: 18, desc: "왕권 강화, 6조 직계제", succession: "abdication" },
      { id: "sejong", name: "4대 세종", reign: "1418-1450", years: 32, desc: "훈민정음 창제, 과학 기술 발전", succession: "abdication" },
      { id: "munjong", name: "5대 문종", reign: "1450-1452", years: 2, desc: "고려사, 고려사절요 편찬", succession: "normal" },
      { id: "danjong", name: "6대 단종", reign: "1452-1455", years: 3, desc: "계유정난으로 숙부에게 왕위 찬탈", succession: "normal" },
      { id: "sejo", name: "7대 세조", reign: "1455-1468", years: 13, desc: "왕권 강화, 진관 체제, 경국대전 편찬 시작", succession: "usurpation" },
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
      { id: "yejong", name: "8대 예종", reign: "1468-1469", years: 1, desc: "직전수조법 제정", succession: "short_lived" },
      { id: "seongjong", name: "9대 성종", reign: "1469-1494", years: 25, desc: "경국대전 완성, 사림 등용", succession: "normal" },
      { id: "yeonsangun", name: "10대 연산군", reign: "1494-1506", years: 12, desc: "무오사화, 갑자사화", succession: "normal" },
      { id: "jungjong", name: "11대 중종", reign: "1506-1544", years: 38, desc: "중종반정, 기묘사화", succession: "coup" },
      { id: "injong", name: "12대 인종", reign: "1544-1545", years: 1, desc: "최단기 재위", succession: "short_lived" },
      { id: "myeongjong", name: "13대 명종", reign: "1545-1567", years: 22, desc: "을사사화, 임꺽정의 난", succession: "normal" },
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
      { id: "seonjo", name: "14대 선조", reign: "1567-1608", years: 41, desc: "임진왜란, 붕당 정치 시작", succession: "normal" },
      { id: "gwanghaegun", name: "15대 광해군", reign: "1608-1623", years: 15, desc: "중립 외교, 대동법 실시", succession: "normal" },
      { id: "injo", name: "16대 인조", reign: "1623-1649", years: 26, desc: "인조반정, 병자호란", succession: "coup" },
      { id: "hyojong", name: "17대 효종", reign: "1649-1659", years: 10, desc: "북벌 정책", succession: "normal" },
      { id: "hyeonjong", name: "18대 현종", reign: "1659-1674", years: 15, desc: "예송 논쟁", succession: "normal" },
      { id: "sukjong", name: "19대 숙종", reign: "1674-1720", years: 46, desc: "환국 정치, 상평통보 발행", succession: "normal" },
      { id: "gyeongjong", name: "20대 경종", reign: "1720-1724", years: 4, desc: "신임사화", succession: "normal" },
      { id: "yeongjo", name: "21대 영조", reign: "1724-1776", years: 52, desc: "탕평책, 균역법, 최장기 재위", succession: "normal" },
      { id: "jeongjo", name: "22대 정조", reign: "1776-1800", years: 24, desc: "규장각, 수원 화성 건설", succession: "normal" },
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
      { id: "sunjo", name: "23대 순조", reign: "1800-1834", years: 34, desc: "세도 정치 시작, 홍경래의 난", succession: "normal" },
      { id: "heonjong", name: "24대 헌종", reign: "1834-1849", years: 15, desc: "기해박해", succession: "normal" },
      { id: "cheoljong", name: "25대 철종", reign: "1849-1863", years: 14, desc: "임술농민봉기", succession: "normal" },
      { id: "gojong", name: "26대 고종", reign: "1863-1907", years: 44, desc: "흥선대원군 집권, 대한제국 선포", succession: "normal" },
      { id: "sunjong", name: "27대 순종", reign: "1907-1910", years: 3, desc: "조선 왕조의 마지막, 한일강제병합", succession: "forced_abdication" },
    ]
  }
];
