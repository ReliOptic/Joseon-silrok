import type { KingData } from '../types/king.types';

export const TAEJONG_DATA: KingData = {
  id: "taejong",
  transitionFromPrev: "정종이 둘째 아우에게 양위했다. 형제의 칼이 옥좌가 되었다.",
  events: [
    {
      year: 1400,
      title: "즉위",
      desc: "정종의 양위를 받아 조선 제3대 왕으로 즉위하다.",
      storyEntry: {
        title: "칼로 얻은 왕좌",
        scenes: [
          {
            imagePrompt: "Yi Bang-won in full royal regalia ascending the throne of Joseon for the first time, the court assembled in deep reverence mixed with cautious awe, the new king's gaze sharp and commanding, ink wash painting with powerful presence and formal ceremony",
            narration: "경진년 11월, 이방원이 왕위에 올랐다. 두 차례 왕자의 난에서 형제들과 공신들의 피를 딛고 선 자리였다. 그는 이것이 단순한 즉위가 아님을 누구보다 잘 알았다.",
          },
          {
            imagePrompt: "King Taejong issuing his first royal decree in the throne hall, officials recording every word, the decree calling for capable men to be recommended for office, ink wash painting with decisive atmosphere and institutional authority",
            narration: "즉위 교서에서 태종은 인재 등용과 기강 확립을 선포하였다. 칼의 시대를 거쳐 이제 법과 제도로 나라를 세울 차례였다. 그것이 그가 그 모든 피 값으로 하겠다고 다짐한 일이었다.",
          },
          {
            imagePrompt: "King Taejong alone in the palace late at night, candlelight casting his shadow large against stone walls, the weight of two fratricides visible in his posture yet his eyes still burning with iron resolve, ink wash painting",
            narration: "왕의 밤은 편안하지 않았다. 형제의 얼굴이 어둠 속에 떠올랐다. 그러나 태종은 후회를 뒤로 밀었다. 나라를 단단히 세우는 것만이 그 대가를 치르는 길이었다.",
          },
        ],
        generatedAt: '2026-04-29',
      },
      sillokEntry: {
        articleId: "ITKC_JT_C0_A01_01A_14A_00020_2005_001_XML",
        date: "태종 1년 신사(1401) 1월 14일",
        title: "문하부 건의로 인재 등용·변정 도감 폐지·둔전 폐지 방안 등을 채택",
        translation: "문하부(門下府) 낭사(郞舍)가 상소하였다. '전월 26일에 특별히 교서를 내리시어, 중외의 신료는 각각 소견을 개진하여 조목조목 올리라 하셨으므로, 신 등이 삼가 어리석은 충곡을 가지고 천총을 우러러 더럽힙니다. 사대부들이 모여 쓸데없는 말을 하여 시비를 변란하는 자가 있으니 헌사로 하여금 엄중히 규리를 행하게 하여 붕비의 폐단을 막을 것. 지난번에 전하께서 양부 백사로 하여금 각각 아는 사람을 천거토록 하셨으니 이는 인재를 빠뜨리지 않게 하려 한 것입니다. 지금 그 천거된 사람들이 모두 쓰이지 않고 있습니다.' 임금이 이를 받아들여 채택하였다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_C0_A01_01A_14A_00020_2005_001_XML",
      },
    },
    {
      year: 1401,
      title: "신문고 설치",
      desc: "억울한 백성이 직접 임금에게 호소할 수 있도록 대궐 문루에 신문고를 설치하다.",
      storyEntry: {
        title: "억울한 자, 북을 쳐라",
        scenes: [
          {
            imagePrompt: "A large ceremonial drum installed at the Joseon palace gate tower, a royal decree being read aloud to gathered citizens below announcing its purpose, morning light, ink wash painting style with sense of accessibility between king and commoner",
            narration: "태종 1년, 대궐 문루에 신문고가 내걸렸다. 억울한 일이 있는 백성은 누구든 이 북을 쳐서 임금에게 직접 호소할 수 있다는 명이 함께 내려졌다.",
          },
          {
            imagePrompt: "A commoner farmer approaching the palace gate drum with trepidation, guards watching neutrally, other citizens gathered to witness, ink wash painting with composition emphasizing the symbolic distance between ordinary people and royal justice",
            narration: "북소리는 관청을 건너뛰어 왕에게 직접 닿는 통로였다. 수령에게 억울함을 당한 자, 형벌이 부당하다고 여긴 자가 이 북 앞에 섰다.",
          },
          {
            imagePrompt: "King Taejong receiving a petition from a commoner brought before the throne by court officials, the king listening with intent expression, ink wash painting suggesting the ideal of royal accessibility to the grievances of ordinary people",
            narration: "신문고는 태종이 왕권 강화와 동시에 백성과 직접 소통하고자 한 뜻의 표현이었다. 강한 왕은 두렵기만 해서는 안 된다는, 그 나름의 통치 철학이 담겨 있었다.",
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1413,
      title: "호패법 실시",
      desc: "16세 이상 남성에게 호패 패용을 의무화하여 인구를 파악하고 요역 및 군역 기반을 확립하다.",
      storyEntry: {
        title: "나무 패 하나에 새긴 나라",
        scenes: [
          {
            imagePrompt: "Joseon king seated on throne in an intimate audience hall issuing a royal decree to assembled ministers, a wooden name tag being passed between officials, traditional ink wash painting, candlelight atmosphere, determined royal gaze",
            narration: "태종 13년, 임금은 전국 16세 이상 남성 모두에게 이름과 본관이 새겨진 나무 패를 차도록 명하였다. 호패 하나로 조선의 모든 남정네를 국가의 장부 위에 올린다는 뜻이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon government clerks distributing carved wooden identification tags to lines of common men at a county office courtyard, officials recording names in large ledgers, traditional ink wash painting with warm earth tones, orderly but tense atmosphere",
            narration: "관아 마당에 줄지어 선 백성들이 하나씩 호패를 받아 들었다. 이름 석 자와 신분이 새겨진 그 작은 나무 조각은, 이제 이 사람이 국가에 속한다는 증표였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon man wearing a small wooden name tag at his waist walking through a busy market street, government soldiers checking identification at a checkpoint, ink wash painting with detailed street life, symbolic tension between state control and daily life",
            narration: "호패는 군역과 요역의 기초였고, 도망과 은신을 막는 눈이었다. 저잣거리를 걷는 사람의 허리에는 이제 나라의 시선이 매달려 있었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
      },
    },
    {
      year: 1414,
      title: "6조 직계제 시행",
      desc: "의정부를 우회하여 6조가 왕에게 직접 보고하는 6조 직계제를 시행함으로써 강력한 왕권을 확립하다.",
      storyEntry: {
        title: "모든 길은 왕으로 통한다",
        scenes: [
          {
            imagePrompt: "King Taejong issuing a decisive decree abolishing the Uijeongbu's deliberative power, the three senior ministers looking on with suppressed displeasure as the six ministry heads step forward to report directly to the king, ink wash painting with sharp power dynamics",
            narration: "태종 14년, 왕은 의정부가 국사를 중간에서 결재하는 관행을 혁파하였다. 이(吏)·호(戶)·예(禮)·병(兵)·형(刑)·공(工) 여섯 판서가 모든 사안을 왕에게 직접 아뢰도록 하였다.",
          },
          {
            imagePrompt: "Six ministry officials presenting reports directly to King Taejong on his throne, bypassing the council chamber, the king personally reviewing each document, ink wash painting emphasizing the concentration of all administrative power at the throne",
            narration: "이것이 6조 직계제였다. 재상의 권한이 왕 한 사람의 손으로 집중되었다. 개국 공신들의 위세가 왕권을 위협하던 시대를 끝내는 제도적 선언이었다.",
          },
          {
            imagePrompt: "Joseon administrative officials working late into the night preparing reports for the king's direct review, stacks of documents organized by the six ministries, ink wash painting with the sense of a rigorous centralized state apparatus",
            narration: "단점도 있었다. 모든 결재가 한 곳에 쏠리면 명군일 때는 약이 되나 혼군이면 독이 된다. 태종은 그것도 알고 있었다. 그래서 아들 세종에게 이 제도를 물려주며 스스로 판단케 하였다.",
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1415,
      title: "사병 혁파 및 외척 숙청",
      desc: "공신과 종친의 사병을 혁파하고 왕비 민씨의 형제들을 처형하여 왕권에 위협이 될 모든 세력을 제거하다.",
      storyEntry: {
        title: "왕의 칼, 마지막 적들을 제거하다",
        scenes: [
          {
            imagePrompt: "Joseon royal decree being issued ordering the dissolution of all private armies of nobles and merit subjects, soldiers in private livery laying down their weapons before government officials, ink wash painting style with formal authority and tension",
            narration: "태종은 공신과 종친이 거느린 사병을 모두 혁파하였다. 조선에 왕의 군대 외에 다른 군대는 존재할 수 없다는 선언이었다. 왕권에 대한 마지막 잠재적 위협을 제거하는 작업이었다.",
          },
          {
            imagePrompt: "Queen Min's brothers being arrested and led away from the palace by royal guards, court officials watching in silence, the queen's grief implied but not shown, ink wash painting with cold determined atmosphere of political necessity overriding personal feeling",
            narration: "왕비 민씨의 형제들도 제거되었다. 외척이 왕권을 흔들 싹을 미리 자르는 것이었다. 태종에게는 왕비도, 공신도, 형제도 왕권보다 클 수 없었다.",
          },
          {
            imagePrompt: "King Taejong reviewing military rosters showing all soldiers now under direct royal command, the faces of senior officials showing resigned acceptance, ink wash painting with the quiet authority of a ruler who has completed his consolidation of power",
            narration: "이로써 조선의 모든 군사력은 오직 왕의 손에 집중되었다. 냉혹하고 철저하였으나, 그 위에서 세종의 태평이 가능해졌다. 역사는 두 사람을 함께 보아야 공평하다.",
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1418,
      title: "양녕대군 폐위 및 세종 책봉",
      desc: "세자 양녕대군을 폐하고 충녕대군을 세자로 책봉한 뒤 왕위를 물려주어 조선 제4대 왕 세종의 치세를 열다.",
      storyEntry: {
        title: "아버지가 고른 왕",
        scenes: [
          {
            imagePrompt: "Joseon king summoning senior ministers to announce the deposition of the crown prince, a solemn audience hall with ministers kneeling in rows, ink wash painting with high contrast, the weight of the decision pressing down on every figure",
            narration: "태종 18년 여름, 임금은 대신들을 불러 세자 양녕을 폐한다고 선언하였다. 장자 계승의 법도를 스스로 깨는 결단이었다. 편전에는 오랜 침묵이 흘렀다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Young Chungnyeong prince kneeling to receive the crown prince investiture scroll from the king, court officials witnessing the ceremony, traditional Joseon palace interior with sunlight streaming through latticed windows, ink wash painting with golden tones",
            narration: "충녕대군은 조용히 무릎을 꿇었다. 형들이 아닌 셋째가 세자의 자리에 오르는 순간, 조선의 역사는 방향을 바꾸었다. 훗날 그 이름은 세종이 된다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "King Taejong passing the royal throne scroll to young King Sejong in an abdication ceremony, the elder king stepping back into shadow while the young king faces forward into bright light, dramatic ink wash painting, passing of generations",
            narration: "얼마 뒤 태종은 왕위를 넘겼다. 강한 손으로 조선을 빚어 온 아버지가, 이제 뒤로 물러서며 아들의 시대를 열었다. 그것이 태종이 역사에 바친 마지막 선물이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_C0_A18_08A_08A_00020_2005_008_XML",
      },
      sillokEntry: {
        articleId: "ITKC_JT_C0_A18_08A_08A_00020_2005_008_XML",
        date: "태종 18년 무술(1418) 8월 8일",
        title: "임금이 세자에게 국보를 주다",
        translation: "임금이 세자에게 국보(國寶)를 주고, 연화방의 옛 세자궁으로 이어하였다. 이보다 앞서 임금이 내선의 거조를 행하고자 하여 지신사 이명덕 등을 불러 말하였다. '내가 재위한 지 지금 이미 18년이다. 비록 덕망은 없으나 불의한 일을 행하지는 않았는데, 능히 위로 천의에 보답하지 못하여 여러 번 수재·한재와 충황의 재앙에 이르고, 또 묵은 병이 있어 근래 더욱 심하니, 이에 세자에게 전위하려고 한다. 아비가 아들에게 전위하는 것은 천하 고금의 떳떳한 일이요, 신하들이 의논하여 간쟁할 수가 없는 것이다. 나의 상과 모양은 임금의 상이 아니다. 위의와 동정이 모두 임금에 적합하지 않다.' 마침내 국보를 세자에게 내려 주었다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_C0_A18_08A_08A_00020_2005_008_XML",
      },
    }
  ],
  detail: {
    date: "1400년 11월 ~ 1418년 8월",
    hanjaChar: "制",
    title: "태종 — 왕권을 벼리다",
    desc: "태종 이방원은 조선의 건국을 피로써 도왔으되, 왕위에 오른 뒤에는 다시 피로써 왕권을 단련하였다. 의정부의 권한을 꺾고 6조로 하여금 왕에게 직접 아뢰게 하였으니, 모든 국정의 실마리가 오직 한 사람의 손에서 풀리고 맺혔다. 냉철한 결단과 냉혹한 칼날 위에 세워진 그의 치세는, 훗날 성군 세종이 펼쳐낼 태평의 든든한 토대가 되었다.",
    unofficialHistory: "전하께서 왕세자 시절 두 차례 왕자의 난을 겪으시며 골육을 베셨을 때, 밤마다 처소 밖을 서성이며 홀로 통곡하셨다는 말이 내관들 사이에 조용히 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "형제를 베고 왕이 된 자, 세종의 아버지",
    figures: [
      { name: "원경왕후 민씨", role: "왕비, 태종의 거사를 지원하였으나 이후 형제들이 숙청됨" },
      { name: "하륜", role: "태종의 책사, 6조 직계제 입안을 주도한 개혁 관료" },
      { name: "양녕대군", role: "세자에서 폐위된 장남, 이후 방외인으로 일생을 보냄" },
      { name: "충녕대군(세종)", role: "셋째 왕자, 태종의 선택으로 세자에 책봉되어 왕위를 이음" }
    ]
  },
  sillokEntry: {
    date: "태종 14년 갑오(1414) 4월 병인",
    title: "6조로 하여금 서무를 직접 아뢰게 하는 제도를 정하다",
    original: "命六曹庶務直啓。上曰：「議政府雖有裁決之權，然事多稽滯，六曹各司其職，直啓可也。」遂罷議政府署事之制。",
    translation: "6조로 하여금 서무를 직접 아뢰도록 명하였다. 임금이 말하기를, '의정부가 비록 재결하는 권한을 가지고 있으나, 일이 많이 지체되는 까닭에 6조가 각각 그 직임을 맡아 직접 아뢰는 것이 옳다' 하고, 마침내 의정부가 서사를 관장하는 제도를 혁파하였다.",
    commentary: "사신은 논한다. 태종께서 의정부의 권한을 꺾음은 단순히 행정의 편의를 구한 것이 아니었으니, 개국 공신의 위세가 왕실을 압도하던 시절의 폐단을 끊으려 하심이었다. 그러나 모든 결재가 오직 한 곳에 집중되는 것은 명군이 있을 때는 약이 되나 혼군이 있을 때는 독이 되는 법이다. 다행히 태종의 뒤를 이은 세종께서 그 기틀을 슬기롭게 운용하시어 의정부 서사제를 복구하셨으니, 아버지가 벼린 칼을 아들이 칼집에 거두어 더 큰 태평을 이룬 것이라 하겠다."
  }
};
