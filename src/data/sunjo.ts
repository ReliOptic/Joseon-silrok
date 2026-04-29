import type { KingData } from '../types/king.types';

export const SUNJO_DATA: KingData = {
  id: "sunjo",
  transitionFromPrev: "정조의 개혁이 막을 내렸다. 열한 살 왕은 외척의 시대를 열었다.",
  events: [
    {
      year: 1800,
      title: "즉위",
      desc: "정조의 뒤를 이어 열한 살의 나이로 조선 제23대 왕으로 즉위하니, 대왕대비 정순왕후가 수렴청정을 시작하다.",
      storyEntry: {
        title: "열한 살의 왕",
        scenes: [
          {
            imagePrompt: "The eleven-year-old King Sunjo on the throne, his small frame dwarfed by the imposing royal seat, Queen Dowager Jeongsun seated behind a screen conducting the actual governance, court officials bowing to both figures, ink wash painting with the visual disproportion of a child king and the real power seated behind him",
            narration: "경신년 6월, 정조가 갑자기 승하하였다. 열한 살 순조가 왕위에 올랐다. 대왕대비 정순왕후가 수렴청정을 시작하였다. 정조의 개혁이 하룻밤 사이에 멈추었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Queen Dowager Jeongsun issuing royal orders from behind the screen while young Sunjo watches silently, Byeokpa faction officials replacing Sipha reformers in court positions, the political reversal of Jeongjo's reign visible in the changing faces at court, ink wash painting with the cold efficiency of a regency government",
            narration: "정순왕후는 벽파를 중용하였다. 정조가 키운 시파 신료들이 밀려났다. 규장각의 불빛이 어두워졌다. 개혁의 시대는 그렇게 닫혔다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Young King Sunjo studying state documents alone in his royal study, growing up under a regency that has already shaped the court around him, his expression showing a child learning to be king in a world that has already been decided without him, ink wash painting with the quiet loneliness of a royal childhood constrained by politics",
            narration: "사신은 논한다. 순조의 즉위는 조선 세도 정치의 서막이었다. 어린 왕 뒤에서 권력을 쥔 것이 먼저는 대비였고, 다음은 외척이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1801,
      title: "신유박해",
      desc: "정순왕후의 명으로 천주교 신자들을 대거 처형하니, 이승훈·정약종이 순교하고 정약용은 유배되었으며 청나라 신부 주문모도 처형되다.",
      sillokEntry: {
        date: "순조 1년 신유(1801) 1월 10일",
        title: "대왕대비가 척사윤음을 반포하고 사학을 엄금하다",
        translation: "대왕대비가 전교하기를, '사학이 오랫동안 금령을 어기고 기승을 부리니 강상이 무너지고 인심이 흉흉하다. 이제 일체 사학죄인을 포박하여 법으로 다스리고 다시는 이 땅에 발붙이지 못하게 하라' 하였다. 이로부터 이승훈·정약종 등이 처형되고, 청나라 신부 주문모가 자수하여 처형되었으며, 정약용은 강진으로 유배되었다.",
      },
      storyEntry: {
        title: "신유년의 칼바람",
        scenes: [
          {
            imagePrompt: "Regent Queen Dowager Jeongsun reading a proclamation in the royal court, court officials standing rigidly at attention, the young King Sunjo seated on the throne as a child king, atmosphere of political power wielded through the throne by proxy, ink wash painting style with cold formal authority",
            narration: "신유년 정월, 열두 살 순조 대신 정순왕후가 전교를 내렸다. 사학을 일체 엄금한다. 포도청의 포졸들이 사방으로 흩어졌다. 조선 천주교의 뿌리를 뽑는 대학살이 시작되었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Jeong Yak-jeon and Jeong Yak-yong brothers being separated at a crossroads, one led toward execution the other toward exile with only a small bundle of belongings, family members weeping at a distance, ink wash painting style with the raw grief of a family torn apart by ideology and power",
            narration: "정약종은 처형장으로 갔다. 정약용은 유배지 강진으로 향했다. 형제는 그 갈림길에서 다시 만나지 못했다. 그러나 유배지의 고독 속에서 정약용은 목민심서를 썼다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Chinese priest Ju Mun-mo walking calmly toward government officials to surrender himself in the streets of Hanyang, Korean Catholic converts watching with anguish from alleyways, ink wash painting style with spare composition and the tragic dignity of a voluntary sacrifice",
            narration: "청나라 신부 주문모는 도망칠 수 있었다. 그러나 신자들이 자신을 숨겨주다 죽어가는 것을 보고 스스로 자수하였다. 박해는 진압하였으되, 믿음을 지운 것은 아니었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
      },
    },
    {
      year: 1804,
      title: "안동 김씨 세도 시작",
      desc: "순원왕후의 아버지 김조순이 국왕의 장인으로 조정을 장악하니, 안동 김씨 일문이 요직을 독점하고 세도 정치의 시대가 열리다.",
      storyEntry: {
        title: "세도 — 권력의 새 주인",
        scenes: [
          {
            imagePrompt: "Kim Jo-sun and Andong Kim clan officials occupying the key positions of the Joseon court, presenting themselves as loyal ministers while effectively controlling all appointments and decisions, the young king visible but marginalized in his own throne room, ink wash painting with the subtle visual displacement of royal authority by factional power",
            narration: "순원왕후의 아버지 김조순이 조정을 장악하였다. 안동 김씨 일문이 삼정승을 비롯한 요직을 독점하였다. 왕은 있었으나 왕권은 없었다. 세도의 시대가 열렸다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon officials from outside the Andong Kim clan being turned away from government appointments by gatekeepers of the seodoin system, capable men excluded regardless of merit, ink wash painting with the closed doors and blocked paths of a patronage system replacing meritocracy",
            narration: "능력이 아닌 혈연과 당색이 벼슬을 결정하였다. 안동 김씨의 문전을 드나들지 않으면 조정에 발을 붙일 수 없었다. 인재의 길이 막혔다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Kim Jo-sun at the center of a private gathering of Andong Kim clan members discussing court appointments and policy in a mansion study, the actual governance of Joseon happening outside the palace walls, ink wash painting with the private but powerful atmosphere of clan politics replacing royal governance",
            narration: "사신은 논한다. 세도 정치는 왕조의 뼈대를 속으로 갉아먹는 진드기와 같았다. 겉으로 나라의 형식은 유지되었으나, 그 안에 백성을 위한 정치는 없었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1811,
      title: "홍경래의 난",
      desc: "평안도 출신의 홍경래가 서북인 차별과 삼정의 문란에 분개하여 봉기하니, 관서 일대를 석 달 넘게 장악하다가 정주성에서 진압되다.",
      sillokEntry: {
        articleId: "ITKC_JT_W0_A11_12A_18A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_W0_A11_12A_18A_00010_2005_001_XML",
        date: "순조 11년 신미(1811) 12월 18일",
        title: "홍경래가 관서 지방에서 봉기하다",
        translation: "평안도 가산에서 홍경래가 무리를 모아 난을 일으켰다. 격문을 돌리기를, '조정이 서북인을 오랑캐처럼 멸시하여 수백 년간 과거와 벼슬길을 막았으니 이 어찌 나라의 도리라 하겠는가. 이제 창의하여 이 억울함을 씻고자 한다'고 하였다. 청천강 이북의 여러 읍이 호응하여 순식간에 관서 일대가 흔들리다.",
      },
      storyEntry: {
        title: "홍경래의 봉기",
        scenes: [
          {
            imagePrompt: "Hong Gyeongnae standing before a crowd of armed peasants and soldiers at night in Gasan, holding a torch aloft, reading a proclamation denouncing the court's discrimination against the northwest region, faces lit by firelight showing determination and desperation, ink wash painting style with dramatic shadows",
            narration: "순조 11년 12월, 평안도 가산에서 홍경래가 창의 격문을 읽었다. 수백 년간 서북인을 차별한 조정을 향한 분노였다. 굶주린 농민들이 그 뒤를 따랐다. 청천강 이북이 흔들리기 시작했다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Rebel forces holding the walls of Jeongjuseong fortress under siege, defenders and attackers exchanging fire, smoke rising from cannon blasts, the fortress silhouetted against a winter sky, ink wash painting style with the cold urgency of a final stand",
            narration: "홍경래의 군세는 순식간에 관서 일대를 장악하였다. 그러나 정주성에서 관군의 포위를 받아 석 달을 버텼다. 성벽 안에서 병사들은 굶주리고 있었고, 봄은 오지 않았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The ruins of Jeongjuseong fortress after the battle, government soldiers standing amid smoke and rubble, a sense of grim finality, distant mountains visible through the haze, ink wash painting style with ash-grey tones conveying the extinguished flame of rebellion",
            narration: "정주성이 함락되고 홍경래는 전사했다. 반란은 진압되었으나 세도 정치의 균열은 봉합되지 않았다. 민심의 이탈은 왕조 말기의 긴 내리막을 예고하고 있었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_W0_A11_12A_18A_00010_2005_001_XML",
      },
    },
    {
      year: 1834,
      title: "삼정의 문란 심화",
      desc: "전정·군정·환곡 등 삼정의 폐단이 극에 달하니, 탐관오리가 횡행하고 백성의 유망이 잇따르며 왕조 말기의 징후가 뚜렷해지다.",
      storyEntry: {
        title: "삼정의 문란 — 썩은 기둥",
        scenes: [
          {
            imagePrompt: "Corrupt local officials extorting excessive grain taxes from Joseon farmers at harvest time, demanding far beyond the legal amount, farmers' faces showing exhaustion and despair, ink wash painting with the dark tones of institutionalized exploitation and the powerlessness of the taxed against the taxer",
            narration: "전정(田政)은 토지세인데, 관리가 장부를 속여 없는 땅에도 세금을 매겼다. 군정(軍政)은 군포인데, 죽은 사람과 갓난아이에게도 부과하였다. 환곡(還穀)은 빌려주는 곡식인데, 빌리지도 않은 이에게 이자를 뜯었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Joseon farm families abandoning their villages and fields with only small bundles of belongings, becoming wandering refugees on the roads, the countryside emptying as the tax burden becomes impossible to bear, ink wash painting with the desolate landscape of a kingdom hemorrhaging its population",
            narration: "견딜 수 없어진 백성이 고향을 버리고 떠났다. 유민이 도처에 넘쳤다. 비어가는 마을이 늘었다. 왕조는 백성 없이 세금만 걷으려 하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "A court official filing yet another report about the Three Administrative Abuses to an indifferent government in Seoul, the report joining countless others already ignored, ink wash painting with the bureaucratic futility of reports about structural problems that the ruling class has no incentive to fix",
            narration: "사신은 논한다. 삼정의 문란은 세도 정치가 만들어낸 구조적 부패였다. 고치려는 자가 없었으니 고쳐질 리도 없었다. 왕조의 황혼이 들판에서 먼저 보였다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1834,
      title: "순조 승하",
      desc: "순조께서 재위 34년 만에 승하하시니, 세도 정치의 기틀 위에서 왕권은 끝내 회복되지 못한 채 아들 헌종에게 왕위를 넘기다.",
      storyEntry: {
        title: "왕권 없이 닫힌 치세",
        scenes: [
          {
            imagePrompt: "King Sunjo on his deathbed in the palace, surrounded by Andong Kim clan officials who control even the atmosphere of the royal chamber, the king's face showing the exhaustion of a reign spent without real power, ink wash painting with the quiet tragedy of a king who reigned but did not rule",
            narration: "갑오년, 순조가 재위 34년 만에 승하하였다. 세도 정치의 기틀 위에서 왕권은 끝내 회복되지 못하였다. 왕이 있었으나 나라를 다스린 것은 왕이 아니었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "The young Crown Prince Hyomyeong who had briefly conducted royal duties dying young, leaving his own young son to inherit the throne as Heonjong, the dynastic succession passing to another child king, ink wash painting with the melancholy of generational weakness compounding in the royal line",
            narration: "아들 효명세자는 대리청정 중 갑자기 세상을 떠났다. 왕위는 손자 헌종에게로 이어졌다. 세도의 시대는 어린 왕을 필요로 하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The Andong Kim clan officials seamlessly transitioning their power from Sunjo's reign to Heonjong's, the machinery of seodoin politics continuing without interruption as one king replaces another, ink wash painting with the institutional inertia of a power structure that outlasts any individual monarch",
            narration: "사신은 논한다. 순조의 치세는 세도 정치가 왕조를 어떻게 비워내는지를 보여주는 34년이었다. 왕의 이름만 남고 왕의 뜻은 사라진 나라였다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
  ],
  detail: {
    date: "순조 11년 12월 18일",
    hanjaChar: "勢",
    title: "세도의 그늘과 홍경래의 불꽃",
    desc: "순조의 치세는 왕권이 아닌 외척의 손에서 운영되었다. 안동 김씨가 조정의 요직을 독점하고 삼정의 폐단이 백성의 삶을 짓눌렀다. 그 억압이 임계점을 넘은 것이 홍경래의 난이었다. 평안도의 한 무사는 서북인을 천대하는 조정에 칼을 겨누었고, 굶주린 농민들이 그 뒤를 따랐다. 반란은 진압되었으나 세도 정치의 균열은 봉합되지 않았고, 민심의 이탈은 왕조 말기의 긴 내리막을 예고하였다.",
    unofficialHistory: "홍경래가 정주성에서 최후를 맞기 전날 밤, '우리가 진다 해도 세상은 이미 흔들렸다'는 말을 남겼다고 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "세도의 시대, 왕권이 사라진 왕조",
    figures: [
      { name: "김조순", role: "영안부원군. 순원왕후의 부친으로 안동 김씨 세도의 기반을 닦아 조정을 사실상 지배하다." },
      { name: "홍경래", role: "반란 지도자. 서북인 차별과 삼정의 문란에 맞서 봉기하여 관서 일대를 뒤흔들다." },
      { name: "정약용", role: "실학자. 신유박해로 강진에 유배되어 18년간 목민심서·경세유표 등 방대한 저술을 남기다." },
      { name: "정순왕후", role: "수렴청정. 순조 즉위 초 대왕대비로서 신유박해를 주도하고 벽파를 중용하다." },
    ],
  },
  sillokEntry: {
    date: "순조 11년 신미 12월 무진",
    title: "홍경래가 정주성에서 패하여 반란이 진압되다",
    original: "賊魁洪景來死於定州城中，亂遂平。自起兵至此，凡百餘日，西關騷然，民心大搖。",
    translation: "반란의 괴수 홍경래가 정주성 안에서 죽으니, 난이 마침내 평정되었다. 군사를 일으킨 때로부터 이때까지 무릇 백여 일이었고, 관서 일대가 소란하여 민심이 크게 동요하였다.",
    commentary: "사신은 논한다. 홍경래의 난은 한 무사의 야심이 아니라 썩은 조정이 스스로 불러들인 재앙이었다. 안동 김씨가 요직을 독차지하고 탐관오리가 삼정을 농락하는 동안, 서북의 백성은 세금과 차별의 이중 멍에를 짊어져야 했다. 왕은 군림하되 다스리지 못하였고, 세도가는 다스리되 책임지지 않았다. 정주성의 불꽃은 꺼졌으나 그 불씨는 백성의 가슴 속에 남아, 훗날 더 큰 민란의 씨앗이 되었으니, 세도가 나라를 갉아먹는 데는 외적의 칼보다 더 긴 시간이 걸리지 않음을 역사는 증언하고 있다.",
  },
};
