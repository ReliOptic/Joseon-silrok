import type { KingData } from '../types/king.types';

export const YEONSANGUN_DATA: KingData = {
  id: "yeonsangun",
  transitionFromPrev: "성종이 승하했다. 폐비 윤씨의 아들이 왕이 되었다. 그 어머니의 운명을 아직 알지 못한 채.",
  events: [
    {
      year: 1494,
      title: "즉위",
      desc: "성종의 뒤를 이어 조선 제10대 왕으로 즉위하다. 생모 폐비 윤씨는 이미 사사된 뒤였으며, 왕은 그 사실을 알지 못한 채 왕위에 올랐다.",
      storyEntry: {
        title: "모르는 채로 왕이 된 자",
        scenes: [
          {
            imagePrompt: "Young King Yeonsangun ascending the throne in coronation ceremony, outwardly composed and dignified, court officials bowing, the palace atmosphere calm and ceremonial, with no outward sign of the tragedy coiled beneath the new reign, ink wash painting",
            narration: "갑인년 12월, 성종이 승하하고 세자 융이 왕위에 올랐다. 연산군이었다. 겉으로는 평범한 즉위였다. 그의 어머니가 어떻게 죽었는지, 왕은 아직 알지 못하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The new king in the royal lecture hall, scholars presenting him with classical texts on governance, the young king appearing to engage earnestly, the early promise of a potentially competent ruler, ink wash painting with scholarly atmosphere",
            narration: "즉위 초 연산군은 경연에 나아가고 정사를 살폈다. 훈구와 사림 사이의 갈등이 조정을 긴장시키고 있었으나, 새 왕은 아직 그 사이에서 중심을 잡고 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "A court lady whispering something to the king in a private moment, the king's expression subtly shifting as a shadow of knowledge begins to fall, the weight of a secret that will eventually destroy everything, ink wash painting with psychological tension",
            narration: "그러나 왕의 귀에 소문이 닿기 시작하였다. 어머니의 이름. 폐비. 사약. 성종. 그 조각들이 모이기 시작하면서, 연산군 안에서 무언가가 천천히 불타기 시작하였다.",
            durationMs: 5500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1498,
      title: "무오사화",
      desc: "김종직이 쓴 조의제문이 세조를 비방한다는 죄목으로 김일손 등 신진 사림파 다수를 처형하고 유배 보내다. 훈구파의 사림 숙청이 본격화되다.",
      storyEntry: {
        title: "붓으로 쓴 죄, 피로 받은 벌",
        scenes: [
          {
            imagePrompt: "Court official Yu Ja-gwang presenting Kim Il-son's historical records containing Kim Jong-jik's Joeuijeomun essay to King Yeonsangun, pointing out the passage attacking Sejo's legitimacy, ink wash painting with the moment of a political trap being sprung",
            narration: "무오년, 이극돈이 실록 편찬 중 김일손의 사초에서 스승 김종직의 조의제문을 발견하였다. 세조의 왕위 찬탈을 비방하는 내용이라는 고변이 왕에게 올라갔다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Kim Il-son and other Sarim scholars being interrogated in the palace, their scholarly robes in contrast with the brutal interrogation setting, books and scrolls used as evidence against them, ink wash painting with the persecution of the literary class",
            narration: "이미 죽은 김종직은 부관참시에 처해졌다. 살아 있는 김일손·정여창 등 사림의 인물들이 처형되거나 귀양길에 올랐다. 훈구파가 사림을 꺾기 위해 왕을 이용한 것이었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Sarim scholars in exile trudging through mountain passes away from the capital, their books bundled under their arms, the scholarly idealism of the Seongjong era now scattered, ink wash painting with the melancholy of intellectual persecution",
            narration: "무오사화로 사림은 조정에서 쓸려나갔다. 연산군은 훈구의 칼을 쥐어주었다. 그것이 단순한 권력 다툼임을 왕은 미처 헤아리지 못하였거나, 혹은 개의치 않았다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1504,
      title: "갑자사화",
      desc: "생모 폐비 윤씨의 죽음에 관여한 자들을 색출하여 대규모 숙청을 단행하다. 이미 죽은 윤필상·한치형 등은 부관참시에 처하고, 수십 명의 대신이 처형되거나 유배되다.",
      sillokEntry: {
        articleId: "ITKC_JT_J0_A10_03A_08A_00010_2005_001_XML",
        date: "연산군 10년 갑자(1504) 3월 20일",
        title: "왕이 폐비의 원통함을 말하며 여러 신하에게 엄히 국문하도록 명하다",
        translation: "왕이 이르기를, '선비(先妣)의 원통함을 이제야 비로소 알았으니, 당시 약을 올린 신하들을 모두 용서할 수 없다' 하고, 의금부에 명하여 엄히 국문하여 놓아 보내지 말라 하였다. 대신들은 황공하여 감히 입을 열지 못하였고, 조정 안에서 모두 흐느껴 울었다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_J0_A10_03A_08A_00010_2005_001_XML",
      },
      storyEntry: {
        title: "갑자년의 피바람",
        scenes: [
          {
            imagePrompt: "King Yeonsangun alone in the palace night chamber holding his mother's memorial portrait, tears on his face turning to cold fury, candle flames casting harsh shadows on stone walls, ink wash painting with deep crimson and black tones, atmosphere of grief transforming into tyranny",
            narration: "갑자년, 연산군은 어머니 폐비 윤씨의 죽음을 빌미로 조정을 피로 물들였다. 사림과 훈구를 가리지 않았다. 궁 안에 두려움이 번졌다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Joseon court officials being dragged away by royal guards in the palace courtyard at dawn, some in official robes prostrating themselves, others being bound with rope, ink wash painting with cold blue morning light, chaos and terror of mass purge",
            narration: "이미 죽은 자들도 무덤에서 꺼내어 목을 쳤다. 부관참시의 칼날 앞에서 산 자와 죽은 자의 구분은 무의미했다. 수십 명의 신하가 하루아침에 사라졌다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Empty Joseon throne hall at night, a single terrified official kneeling alone before the vacant throne, memorial tablets and court documents scattered on the floor, ink wash painting with oppressive darkness pressing in from all sides, atmosphere of absolute silence and fear",
            narration: "사간원과 홍문관이 입을 닫았다. 간쟁은 죽음을 뜻했다. 왕의 분노는 식지 않았고, 조정은 침묵 속에 숨을 죽였다. 광기의 정치가 시작되었다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_J0_A10_03A_08A_00010_2005_001_XML",
      },
    },
    {
      year: 1504,
      title: "언론 탄압과 한글 금지",
      desc: "자신을 비방하는 한글 투서가 잇따르자 한글 교육과 사용을 금지하고, 사간원·홍문관의 간쟁 기능을 사실상 폐지하다. 신하들의 입을 막아 독단적 통치의 길을 열다.",
      storyEntry: {
        title: "간쟁의 입을 막다",
        scenes: [
          {
            imagePrompt: "King Yeonsangun issuing the decree banning Hangul writing, royal messengers carrying the order to government offices and printing houses, books with Korean script being confiscated, ink wash painting with the atmosphere of cultural suppression",
            narration: "갑자년, 한글로 쓰인 비방 투서가 연달아 발견되었다. 연산군은 한글 교육과 사용을 금지하는 명을 내렸다. 세종이 백성을 위해 만든 문자가 왕을 거스르는 도구가 된 것이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Sagan-won and Hongmungwan officials being barred from presenting remonstrances to the king, their traditional role as critical voices being abolished, the palace halls now echo with only agreement, ink wash painting with oppressive silence",
            narration: "사간원과 홍문관의 간쟁 기능이 사실상 폐지되었다. 왕에게 잘못을 아뢰는 것이 죽음을 뜻하게 되었다. 직언의 문이 닫히면서 조정은 왕의 거울이 아닌 메아리가 되었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Court officials in silent rows during an audience, none daring to speak critically, the king's gaze sweeping across their bowed heads with suspicious intensity, ink wash painting with the suffocating atmosphere of a court where truth cannot be spoken",
            narration: "나라가 병들 때 첫 번째로 죽는 것은 말이다. 연산군의 조정에서 진실을 말하는 입은 하나씩 닫혔다. 그 침묵 속에서 왕의 광기는 아무런 제지 없이 자랐다.",
            durationMs: 5500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1505,
      title: "성균관 유흥지 전용",
      desc: "성균관을 유흥을 위한 장소로 변용하고, 전국에서 미녀를 뽑아 흥청을 설치하다. 국가 교육·예학의 중심이 방탕의 무대로 전락하다.",
      storyEntry: {
        title: "학당이 유흥장으로",
        scenes: [
          {
            imagePrompt: "Joseon students and scholars being expelled from Sungkyunkwan, their books and belongings in hand, as royal servants arrive to transform the educational institution into a pleasure venue, ink wash painting with the desecration of a sacred scholarly space",
            narration: "연산군 11년, 성균관에서 유생들이 쫓겨났다. 조선 최고의 교육 기관이 왕의 유흥을 위한 공간으로 탈바꿈하였다. 공자의 위패를 모신 그 마당에 흥청이 들어섰다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Heungcheong entertainers recruited from across the country performing at the transformed Sungkyunkwan grounds, the scholarly atmosphere completely erased, ink wash painting contrasting the former dignity of the space with its current degradation",
            narration: "전국에서 뽑아 올린 흥청들이 그곳에 모였다. 왕은 밤마다 잔치를 열었다. '흥청망청'이라는 말이 이때 백성들 입에 오르내리기 시작하였다고 전해진다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Displaced Joseon scholars gathered in private homes continuing their studies by candlelight, the institutional collapse forcing learning underground, ink wash painting with the resilience of scholarship in the face of tyrannical suppression",
            narration: "나라의 학문이 멈추었다. 그러나 유생들은 사가에서 글을 놓지 않았다. 왕의 광기가 조선의 학문 정신까지 지울 수는 없었다. 이듬해 반정이 일어났다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1506,
      title: "중종반정",
      desc: "박원종·성희안 등 훈구 대신들이 반정을 일으켜 연산군을 폐위하다. 왕은 강화도 교동으로 유배되어 같은 해 세상을 떠났으며, 묘호조차 받지 못하였다.",
      sillokEntry: {
        articleId: "ITKC_JT_J0_A12_09A_02A_00010_2005_001_XML",
        date: "연산군 12년 병인(1506) 9월 2일",
        title: "박원종 등이 군사를 일으켜 왕을 폐위하고 진성대군을 추대하다",
        translation: "박원종·성희안·유순정 등이 군사를 이끌고 궁궐을 포위하였다. 여러 신하들이 연산군의 폭정을 열거하며 폐위를 청하니, 왕은 항거하지 못하고 교동으로 쫓겨났다. 진성대군이 왕위에 오르니 이가 곧 중종이다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_J0_A12_09A_02A_00010_2005_001_XML",
      },
      storyEntry: {
        title: "중종반정 — 왕이 쫓겨나다",
        scenes: [
          {
            imagePrompt: "Armed Joseon soldiers surrounding the palace walls at night by torchlight, generals in full armor leading troops through the palace gate, ink wash painting with dramatic chiaroscuro of fire and darkness, the moment of coup beginning",
            narration: "병인년 9월 새벽, 박원종과 성희안이 군사를 이끌고 궁궐을 에워쌌다. 왕의 폭정에 지친 신하들이 마침내 칼을 들었다. 반정의 북소리가 한양을 울렸다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "King Yeonsangun in disheveled royal robes being escorted out of the palace by guards, his expression broken and defeated, court officials watching in silence as he passes, ink wash painting with cold dawn light, a king stripped of all dignity",
            narration: "왕은 항거하지 못했다. 열두 해의 치세가 하룻밤에 무너졌다. 묘호도 받지 못할 왕이 궁문을 등졌다. 아무도 그의 이름을 불러주지 않았다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Solitary figure of the deposed king sitting alone in a small island exile cottage, looking out at grey sea mist, ink wash painting with desolate atmosphere, vast empty sky above and cold water below, the loneliness of a fallen tyrant",
            narration: "강화도 교동에 유배된 연산군은 그해를 넘기지 못하고 세상을 떠났다. 그의 이름 앞에 '군(君)'이 붙었다. 왕이 아니라 군으로 역사에 남은 자, 그것이 그의 마지막 호칭이었다.",
            durationMs: 6000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_J0_A12_09A_02A_00010_2005_001_XML",
      },
    },
  ],
  detail: {
    date: "1494–1506",
    hanjaChar: "禍",
    title: "갑자사화 — 어머니의 한을 풀다",
    desc: "연산군은 조선 제10대 왕으로, 성종의 장남이다. 어머니 폐비 윤씨가 성종에게 사약을 받아 죽었다는 사실을 뒤늦게 알게 된 후 극단적 복수심에 사로잡혀 갑자사화를 일으켰다. 무오사화로 사림파를 대거 숙청하고, 언론을 탄압하며, 성균관마저 유흥의 장으로 삼았다. 결국 중종반정으로 폐위되어 강화도 유배지에서 생을 마쳤다. 단순한 폭군이 아닌, 어머니의 비극이 낳은 복잡한 인간으로 역사에 기록된다.",
    unofficialHistory: "연산군이 갑자사화를 단행하던 날 밤, 궁인들 사이에서는 왕이 어머니 폐비 윤씨의 화상 앞에 홀로 무릎을 꿇고 밤새 통곡하였다는 이야기가 오래도록 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "광기와 시인 사이, 폐위된 왕",
    figures: [
      { name: "폐비 윤씨", role: "연산군의 생모. 성종에게 사약을 받아 죽었으며, 그 비극이 갑자사화의 근원이 되었다." },
      { name: "김종직", role: "사림파의 태두. 사후에 조의제문으로 인해 무오사화의 빌미를 제공하였다." },
      { name: "김일손", role: "김종직의 제자. 사초에 조의제문을 수록하였다는 이유로 무오사화 때 처형되었다." },
      { name: "임사홍", role: "훈구 대신. 폐비 윤씨의 죽음을 연산군에게 알려 갑자사화를 촉발시킨 인물로 알려져 있다." },
      { name: "박원종", role: "중종반정을 주도한 훈구 무신. 연산군의 폭정에 맞서 반정을 일으켰다." },
    ],
  },
  sillokEntry: {
    date: "연산군일기 10년(1504) 3월 20일",
    title: "왕이 폐비의 원통함을 말하며 여러 신하에게 엄히 국문하도록 명하다",
    original: "上曰 先妣之冤 今乃始知 當時進藥之臣 皆不可宥 命義禁府嚴鞫勿釋 大臣惶恐莫敢發言 廷中皆哭泣",
    translation: "왕이 이르기를, '선비(先妣)의 원통함을 이제야 비로소 알았으니, 당시 약을 올린 신하들을 모두 용서할 수 없다' 하고, 의금부에 명하여 엄히 국문하여 놓아 보내지 말라 하였다. 대신들은 황공하여 감히 입을 열지 못하였고, 조정 안에서 모두 흐느껴 울었다.",
    commentary: "사신은 논한다. 어미의 죽음을 슬퍼하는 것은 인지상정이라 하겠으나, 왕은 그 슬픔을 다스리지 못하고 칼날로 돌렸다. 분노는 죄 없는 자를 삼키고, 복수는 나라의 기강을 무너뜨렸다. 폐비 윤씨의 비극은 진실로 애달프나, 그 한을 풀고자 수십 명의 목숨을 거둔 것이 어찌 효(孝)라 할 수 있겠는가. 권력을 쥔 자의 상처는 공기 중에 혼자 사그라들지 않고 반드시 백성과 신하의 피를 대가로 요구한다. 연산군의 치세는 그 냉혹한 이치를 역사 앞에 낱낱이 드러낸 증거로 길이 남을 것이다.",
  },
};
