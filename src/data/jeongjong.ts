import type { KingData } from '../types/king.types';

export const JEONGJONG_DATA: KingData = {
  id: "jeongjong",
  transitionFromPrev: "태조가 왕자의 난에 흔들렸다. 이방원의 칼날이 형제들을 쓸어낸 뒤, 둘째 아들이 옥좌에 앉았다.",
  events: [
    {
      year: 1398,
      title: "즉위",
      desc: "제1차 왕자의 난 직후 태조의 양위를 받아 조선 제2대 왕으로 즉위하다.",
    },
    {
      year: 1399,
      title: "개경 환도",
      desc: "한양에서 고려의 구도(舊都) 개경으로 도읍을 옮겨 민심을 안정시키고자 하다.",
      sillokEntry: {
        date: "정종 1년 기묘(1399) 2월 26일",
        title: "도읍을 개경으로 옮기다",
        translation: "임금이 도읍을 개경으로 옮기었다. 이에 앞서 임금이 의논하기를, '한양은 새로 정한 도읍이요 개경은 고려의 구도이니, 민심이 아직 한양에 안정되지 않았고 왕자의 난으로 인심이 흉흉하다. 잠시 개경으로 돌아가 민심을 가라앉힌 뒤 다시 도모함이 옳다' 하니, 신하들이 이를 따랐다.",
      },
      storyEntry: {
        title: "도읍을 버리다",
        scenes: [
          {
            imagePrompt: "Long procession of the Joseon royal court moving out of Hanyang city gates in early morning, banners and palanquins visible, common people watching silently from roadsides, the half-built palace walls of Hanyang visible behind them, ink wash painting style with the subdued atmosphere of retreat and uncertainty",
            narration: "정종 1년 봄, 조정이 한양을 떠났다. 태조가 피와 꿈으로 세운 새 도읍이었으나, 왕자의 난이 할퀴고 간 땅을 그대로 밟고 있기에는 상처가 너무 깊었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Jeongjong's procession entering the familiar gates of Gaeju (Gaeseong), crowds of people lining the streets with mixed expressions of relief and uncertainty, the old Goryeo palace structures visible in the background, ink wash painting style with a sense of returning to something known but no longer whole",
            narration: "개경은 낯설지 않았다. 고려 오백 년의 흔적이 남아 있는 땅이었다. 그러나 돌아온 것이 나아감인지 물러남인지, 왕은 알 수 없었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Jeongjong seated in the Gaeju palace audience hall, the faces of his ministers before him, Prince Bangwon's imposing figure visible among them, the king's expression composed but quietly resigned, ink wash painting style with muted tones conveying a reign held together by restraint rather than power",
            narration: "개경 환도는 민심을 달랬으나 실권을 돌려오지는 못했다. 왕좌는 있었고 방원은 옆에 있었다. 정종은 그것을 받아들였다. 그것이 그의 지혜였고, 그의 왕조였다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
      },
    },
    {
      year: 1400,
      title: "도평의사사 폐지·의정부 설치",
      desc: "고려의 유제인 도평의사사를 혁파하고 의정부를 설치하여 재상 중심의 행정 체계를 정비하다.",
    },
    {
      year: 1400,
      title: "제2차 왕자의 난",
      desc: "방간(芳幹)과 방원(芳遠) 형제 사이에 유혈 충돌이 벌어지고, 방원이 최후의 승자로 떠오르다.",
      storyEntry: {
        title: "형제의 칼날",
        scenes: [
          {
            imagePrompt: "Two Joseon princes facing each other at the gates of Gaeju palace at dawn, armed retainers with torches and spears filling the courtyard, tension frozen in the air before bloodshed, ink wash painting style with cold blue-grey tones",
            narration: "정종 2년 정월, 넷째 왕자 방간이 군사를 일으켰다. 조정을 장악한 정안공 방원을 제거하겠다는 것이었다. 왕의 형제들이 다시 칼을 겨누었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Prince Bangwon in armor on horseback commanding his troops in a narrow street of Gaeju, defeated soldiers of Banggan throwing down their weapons, smoke rising from distant buildings, ink wash painting style",
            narration: "싸움은 짧고 결정적이었다. 방간의 군사는 무너졌고, 방간은 사로잡혀 토산으로 유배되었다. 이방원의 위세는 이제 누구도 거스를 수 없었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Jeongjong seated alone on the throne in a dim audience hall, court officials bowing before him, the shadow of Prince Bangwon looming large on the wall behind, ink wash painting style with muted gold and grey",
            narration: "정종은 왕좌에 앉아 있었으나, 실권은 이미 방원의 손에 있었다. 왕은 이 사실을 모르지 않았다. 그리고 그것이 어쩌면 더 나은 길임을 알고 있었다.",
            durationMs: 4500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_B0_A02_01A_28A_00030_2005_001_XML",
      },
      sillokEntry: {
        articleId: "ITKC_JT_B0_A02_01A_28A_00030_2005_001_XML",
        date: "정종 2년 경진(1400) 1월 28일",
        title: "제2차 왕자의 난. 이방간을 토산에 추방하다",
        translation: "회안공(懷安公) 이방간(李芳幹)을 토산(兎山)에 추방하였다. 이방의(李芳毅)·이방간(李芳幹)과 정안공(靖安公)은 모두 임금의 동복 아우였다. 임금이 적사(嫡嗣)가 없으니, 동복 아우가 마땅히 후사(後嗣)가 될 터인데, 방간은 자기가 차례로써 마땅히 후사가 되어야 한다고 생각하였으나 배우지 못하여 광망하고 어리석었으며, 정안공은 영예(英睿)하고 숙성(夙成)하며 경서와 이치에 통달하여 개국(開國)과 정사(定社)가 모두 그의 공이었으므로 나라 사람들이 모두 마음으로 귀부(歸附)하였다. 방간이 깊이 꺼리어 마침내 군사를 일으켰으나, 정안공에게 패하여 토산으로 유배되었다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_B0_A02_01A_28A_00030_2005_001_XML",
      },
    },
    {
      year: 1400,
      title: "태종에게 양위",
      desc: "실권을 장악한 방원에게 왕위를 양위하고 상왕(上王)으로 물러나, 조선 왕실의 권력 이양을 평화롭게 마무리하다.",
    },
  ],
  detail: {
    date: "1398년 9월 ~ 1400년 11월",
    hanjaChar: "讓",
    title: "讓位의 군주, 정종",
    desc: "정종은 피바람 속에 세워진 왕좌를 묵묵히 지킨 군주였다. 왕자들의 칼날이 궁궐 문 앞까지 미치는 혼란 속에서도 그는 권세에 집착하기보다 종사(宗社)의 안녕을 먼저 헤아렸다. 마침내 두 해가 채 되기도 전에 스스로 왕위를 내어줌으로써, 권력보다 평화를 택한 임금으로 역사에 남게 되었다.",
    unofficialHistory: "정종이 즉위한 날 밤, 내시 하나가 침전 앞에서 떨리는 손으로 촛불을 밝혔는데, 임금이 조용히 손을 저어 불을 끄고는 '어둠이 오히려 편하다'고 중얼거렸다는 이야기가 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "왕좌를 버림으로써 살아남은 왕",
    figures: [
      { name: "이방원(李芳遠)", role: "실권자·후일 태종, 정종의 결정에 결정적 영향을 미친 강력한 동생" },
      { name: "이방간(李芳幹)", role: "제2차 왕자의 난을 일으킨 넷째 왕자" },
      { name: "박포(朴苞)", role: "이방간을 부추겨 난을 사주한 인물" },
      { name: "하륜(河崙)", role: "이방원을 보좌하며 의정부 설치 등 제도 정비를 주도한 문신" },
    ],
  },
  sillokEntry: {
    date: "定宗 二年 庚辰 十一月",
    title: "상왕께서 왕위를 정안공에게 전하다",
    original: "上王傳位于定安公 曰 予以否德 叨承大統 夙夜祗懼 恐墜先業 定安公芳遠 天姿英武 克紹丕基 宜正大位 以安宗社",
    translation: "상왕께서 정안공에게 왕위를 전하며 이르셨다. '과인은 덕이 부족한 몸으로 외람되이 대통을 이었으나, 조석으로 두려워하며 선업(先業)을 떨어뜨릴까 걱정하였다. 정안공 방원은 천품이 영특하고 무략이 있어 능히 큰 왕업을 이을 만하니, 마땅히 대위에 오르게 하여 종사를 편안케 하라.'",
    commentary: "사신은 논한다. 정종께서는 왕위를 탐하지 아니하고 스스로 몸을 낮추어 대의를 세웠으니, 이는 예로부터 양위의 미덕 중에서도 드문 일이라 할 것이다. 난세에 피를 흘리지 않고 권력을 이양한 그 처사를 가벼이 볼 수 없으며, 후세는 마땅히 그 뜻을 깊이 헤아려야 할 것이다.",
  },
};
