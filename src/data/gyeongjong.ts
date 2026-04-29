import type { KingData } from '../types/king.types';

export const GYEONGJONG_DATA: KingData = {
  id: "gyeongjong",
  events: [
    {
      year: 1720,
      title: "즉위",
      desc: "숙종의 승하를 받아 조선 제20대 왕으로 즉위하다.",
      storyEntry: {
        title: "비운의 즉위",
        scenes: [
          {
            imagePrompt: "King Gyeongjong ascending the throne in poor health, his face gaunt and pale, Noron officials watching with barely concealed skepticism about his ability to reign, Soron officials showing guarded hope, ink wash painting with the tense political atmosphere of a king whose legitimacy is already being questioned before his reign begins",
            narration: "경자년, 경종이 즉위하였다. 어머니 장희빈이 사약을 받아 죽는 것을 어린 나이에 목격하였던 왕세자가 마침내 보위에 올랐다. 그러나 몸은 이미 쇠약하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gyeongjong in the palace study surrounded by competing faction memorials he struggles to process due to his illness, a physician discreetly observing his condition from the side, ink wash painting with the atmosphere of a reign that is contested before it can establish itself",
            narration: "노론은 경종의 건강을 우려한다며 세제 책봉을 서둘렀다. 소론은 그것을 왕권 침탈이라 맞섰다. 즉위 첫 해부터 조정은 흔들렸다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gyeongjong alone by a palace window at dusk, looking out at the empty courtyard with an expression of quiet resignation, the factions warring beyond the walls, ink wash painting with melancholy solitude and the sense of a man who never had the strength to truly reign",
            narration: "사신은 논한다. 경종은 왕이었으나 통치하지 못하였다. 병약한 몸과 거센 당쟁 사이에서 그의 4년 재위는 처음부터 끝까지 폭풍 속의 촛불이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1721,
      title: "세제 책봉 및 대리청정 논의",
      desc: "노론의 주청으로 연잉군(훗날 영조)을 세제로 책봉하고 대리청정을 논의하다.",
      storyEntry: {
        title: "세제 책봉 — 이미 다음을 준비하다",
        scenes: [
          {
            imagePrompt: "Noron faction officials presenting a memorial urging appointment of Prince Yeoninggun as Crown Prince to the ailing King Gyeongjong, the king on the throne visibly weakened, the political calculation behind the request nakedly visible, ink wash painting with the cold pragmatism of a faction planning beyond the current king",
            narration: "신축년, 노론은 연잉군의 세제 책봉을 청하였다. 경종에게 후사가 없다는 이유였지만, 소론의 눈에 그것은 왕의 통치 기간을 단축하려는 시도로 보였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Prince Yeoninggun receiving his appointment as Crown Prince in a formal ceremony, his expression carefully neutral between the competing factions, aware of the political storm his appointment has caused, ink wash painting with the charged ceremonial atmosphere of an appointment that divides more than it unifies",
            narration: "연잉군이 세제로 책봉되었다. 그러나 노론이 더 나아가 대리청정을 청하자, 소론이 들고 일어났다. 이것이 신임사화의 도화선이 되었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gyeongjong caught between the two factions' irreconcilable demands over the regency question, his expression showing exhaustion and the tragic position of a king who has become a prize fought over rather than a ruler in command, ink wash painting with the visual weight of a man trapped between political forces",
            narration: "사신은 논한다. 세제 책봉과 대리청정 논의는 경종의 왕권이 얼마나 허약한지를 만천하에 드러냈다. 살아있는 왕 앞에서 다음 왕을 준비하는 것 — 이것이 신임사화의 씨앗이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1721,
      title: "신임사화 시작",
      desc: "소론이 노론의 대리청정 청원을 역모로 규정하고 김창집 등 노론 사대신을 탄핵하다.",
      sillokEntry: {
        articleId: "ITKC_JT_T0_A01_08A_20A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_T0_A01_08A_20A_00010_2005_001_XML",
        date: "경종 1년 신축(1721) 8월 20일",
        title: "소론이 노론의 대리청정 청원을 역모로 규정하여 논핵하다",
        translation: "사헌부와 사간원이 합계하기를, '노론 신료들이 세제의 대리청정을 청원한 것은 종사를 위태롭게 하고 군부를 협박한 역모의 단초이니, 그 죄를 마땅히 율에 따라 다스려야 합니다'라고 하였다. 이로부터 소론이 조정을 장악하고 노론을 탄핵하는 신임사화가 시작되었다.",
      },
      storyEntry: {
        title: "신임사화 — 소론의 칼날",
        scenes: [
          {
            imagePrompt: "Joseon court in tumult, Soron faction officials in formal robes presenting an impeachment memorial before King Gyeongjong seated on his throne, Noron officials kneeling in defense, tension crackling in the air of Injeongjeon hall, ink wash painting style with sharp contrasts",
            narration: "경종 1년, 소론은 노론의 대리청정 요청을 역모로 규정하였다. 붓 한 자루가 칼이 되는 순간이었다. 노론 사대신 — 김창집, 이이명, 이건명, 조태채의 이름 위로 죽음의 그림자가 드리웠다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Four Noron ministers being led away by royal guards through the palace gates into exile, their formal robes disheveled, other officials watching in silence, early morning mist obscuring the palace walls, ink wash painting style with atmosphere of dread and inevitability",
            narration: "사대신은 먼저 귀양을 갔다가, 이듬해 사사 명령이 내려졌다. 수십 년을 쌓아온 노론의 권세가 단 한 번의 붕당 역전으로 무너졌다. 조정은 피와 귀양길로 가득 찼다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gyeongjong alone in his palace chamber, visibly ill and exhausted, gazing out at the empty courtyard while faction struggles rage beyond the walls, a physician waiting at a respectful distance, ink wash painting style with isolated and melancholy composition",
            narration: "병약한 왕은 당쟁의 소용돌이 한가운데서 실권 없이 군림하였다. 신임사화는 조선 붕당 정치가 낳은 가장 참혹한 학살의 하나였다. 그리고 왕은 4년 뒤, 의문 속에 세상을 떠났다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_T0_A01_08A_20A_00010_2005_001_XML",
      },
    },
    {
      year: 1722,
      title: "노론 사대신 처형",
      desc: "김창집·이이명·이건명·조태채 노론 사대신이 사사되고 소론이 조정을 장악하다.",
      sillokEntry: {
        articleId: "ITKC_JT_T0_A02_03A_27A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_T0_A02_03A_27A_00010_2005_001_XML",
        date: "경종 2년 임인(1722) 3월 27일",
        title: "노론 사대신 김창집·이이명·이건명·조태채에게 사사를 명하다",
        translation: "전교하기를, '김창집·이이명·이건명·조태채를 모두 사사하고 그 나머지 종범들은 법률에 의거하여 처단하라' 하였다. 붕당의 화가 여기에 이르러 극에 달하였다.",
      },
      storyEntry: {
        title: "사대신 사사 — 붕당이 낳은 학살",
        scenes: [
          {
            imagePrompt: "Four elderly Noron ministers in exile, receiving royal messengers with poison cups in remote locations across Joseon, their dignified but resigned expressions, ink wash painting style, sparse composition, each figure isolated in their final moment, cold winter light",
            narration: "임인년 3월, 사약이 네 방향으로 떠났다. 김창집·이이명·이건명·조태채 — 각기 다른 귀양지에서 같은 날 같은 잔을 받았다. 수십 년 노론의 권세가 한 줄의 전교로 끝났다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Soron officials celebrating in the court hall as news of the Noron executions arrives, some showing relief some unease, the throne visible but empty in the background, ink wash painting style with uneasy triumphant atmosphere, warm candles against dark recesses",
            narration: "소론은 승리했다. 그러나 이 승리 뒤에 남은 것은 무엇이었는가. 조정은 피냄새가 가시지 않았고, 노론의 씨를 거두었으되 노론의 원한은 씨를 뿌렸다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gyeongjong sitting alone in his dimly lit palace chamber, visibly weakened and hollow-eyed, surrounded by faction memorials stacked on his desk, the weight of four executions visible in his haunted expression, ink wash painting style, deep shadows pressing in from all sides",
            narration: "경종은 병상에서 이 모든 것을 명하였다. 실권은 소론에게 있었고, 왕의 손은 붓을 들기도 힘들었다. 2년 뒤 그도 조용히 사라졌다. 독살설은 지금도 역사 속에 물음표로 남아 있다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_T0_A02_03A_27A_00010_2005_001_XML",
      },
    },
    {
      year: 1724,
      title: "승하",
      desc: "재위 4년 만에 갑작스럽게 승하하고, 이후 독살설이 파다하게 퍼지다.",
      storyEntry: {
        title: "의문의 죽음",
        scenes: [
          {
            imagePrompt: "King Gyeongjong suddenly collapsing in his palace chamber after eating food brought by a retainer connected to the Crown Prince's household, royal physicians rushing in, the political implications of the moment hanging in the air unspoken, ink wash painting with the sudden shock of a royal death and the shadow of suspicion",
            narration: "갑진년 8월, 경종이 갑자기 위독해졌다. 게장과 생감을 드신 뒤였다. 이틀 만에 승하하였다. 독살설이 즉시 퍼졌다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Soron officials filing angry memorials accusing the Crown Prince's side of poisoning the king, Noron officials denying vehemently, the dead king's chamber still visible in the background as the living argue over his death, ink wash painting with the unseemly haste of factional politics resuming over an unburied king",
            narration: "소론은 세제 측 인물이 올린 음식이 죽음을 불렀다고 주장하였다. 노론은 극력 부인하였다. 세제 연잉군이 뒤를 이어 영조로 즉위하였다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "The ancestral tablet of Gyeongjong being placed in Jongmyo shrine, a somber ceremony attended by the new King Yeongjo who carries the cloud of suspicion over the previous king's death, ink wash painting with the heavy silence of a memorial that closes nothing and resolves nothing",
            narration: "사신은 논한다. 경종의 죽음은 영조 치세 내내 그의 발목을 잡았다. 독살설의 진위는 지금도 밝혀지지 않았다. 역사는 그 물음표를 거두지 않는다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
  ],
  detail: {
    date: "1688–1724",
    hanjaChar: "黨",
    title: "경종 — 붕당 정쟁의 소용돌이 속 비운의 왕",
    desc: "경종은 희빈 장씨의 소생으로, 어머니 장씨가 사사되는 참화를 어린 나이에 목격하였다. 즉위 후에는 병약한 몸으로 노론과 소론의 극심한 당쟁 속에 휘말려 실권을 제대로 행사하지 못하였다. 재위 기간 내내 붕당 간의 생사를 건 권력 투쟁이 조정을 뒤흔들었으며, 신임사화로 수많은 신료가 목숨을 잃었다. 재위 4년 만에 의문스럽게 승하하여 조선 역사상 가장 비극적인 군주 중 한 명으로 기록된다.",
    unofficialHistory: "경종이 승하하기 수일 전 게장과 생감을 드셨는데, 이를 올린 자가 세제 측 인물이었다는 소문이 궐 안팎에 떠돌았다. 어의들은 극구 부인하였으나, 소론 신료들은 독이 든 음식을 올려 왕을 해쳤다고 주장하였고 이 의혹은 영조 대에 이르러서도 씻기지 않아 두고두고 역사의 그늘로 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "어머니를 잃고 당쟁에 삼켜진 비운의 왕",
    figures: [
      { name: "희빈 장씨", role: "경종의 생모, 숙종의 후궁으로 중전에 올랐다가 사사됨" },
      { name: "김창집", role: "노론 영수, 신임사화로 사사된 사대신 중 한 명" },
      { name: "조태구", role: "소론 영수, 신임사화를 주도하여 정권을 장악함" },
      { name: "연잉군 (영조)", role: "경종의 이복동생, 세제로 책봉되어 대리청정 논의의 중심에 섬" },
    ],
  },
  sillokEntry: {
    date: "경종 2년 임인(1722) 3월 27일",
    title: "노론 사대신 처형을 명하다",
    original: "傳曰 金昌集 李頤命 李健命 趙泰采 竝賜死 其餘從犯 依律處斷 朋黨之禍 至此極矣",
    translation: "전교하기를, 김창집·이이명·이건명·조태채를 모두 사사하고 그 나머지 종범들은 법률에 의거하여 처단하라 하였다. 붕당의 화가 여기에 이르러 극에 달하였다.",
    commentary: "사신은 논한다. 당론(黨論)이란 본래 사류(士類)가 의를 다투는 데서 비롯하나, 권세와 결탁하면 곧 천하의 독이 된다. 노론과 소론이 수십 년에 걸쳐 서로를 역적으로 모니, 조정은 학살의 마당이 되고 백성은 갈 곳을 잃었다. 왕은 병약하여 친정(親政)을 펼 힘이 없었고, 신하들은 나라를 위함이 아니라 저마다의 당을 위하여 목숨을 걸었으니, 이 어찌 신자(臣子)의 도리라 하겠는가. 경종조의 참화는 붕당이 사화(士禍)로 귀결되는 조선 정치의 숙명적 비극이었음을 후세는 마땅히 깊이 새겨야 할 것이다.",
  },
};
