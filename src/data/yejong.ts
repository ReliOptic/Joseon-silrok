import type { KingData } from '../types/king.types';

export const YEJONG_DATA: KingData = {
  id: "yejong",
  transitionFromPrev: "세조가 승하했다. 짧은 치세가 시작되었다.",
  events: [
    {
      year: 1468,
      title: "즉위",
      desc: "세조의 양위를 받아 조선 제8대 왕으로 즉위하다.",
      storyEntry: {
        title: "아버지의 유산 위에 서다",
        scenes: [
          {
            imagePrompt: "Young King Yejong ascending the throne after his father Sejo's death, the court in formal mourning attire mixed with coronation ceremony, powerful meritorious subjects filling the hall around the young king, ink wash painting with atmosphere of constrained royal authority",
            narration: "세조가 승하하자 둘째 아들 이황이 왕위에 올랐다. 예종이었다. 스물의 나이로 받아든 왕좌는 아버지 세조가 닦아놓은 강력한 왕권의 자리였으나, 그것을 유지하는 것은 또 다른 일이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Yejong in early reign receiving reports from powerful meritorious subject officials led by Han Myeong-hoe, the young king's authority circumscribed by the dominance of the senior nobles, ink wash painting showing the political reality of a young ruler among powerful elders",
            narration: "한명회를 비롯한 훈구 공신들이 조정을 장악하고 있었다. 예종은 왕이었으나 그 무게를 온전히 행사하기 어려웠다. 젊음은 때로 권력의 적이 된다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Yejong studying state documents late at night with determined expression, trying to assert his own vision of governance despite the short time he has, ink wash painting with the urgency of a king aware of his own fragile health",
            narration: "예종은 주어진 시간을 알고 있었는지 모른다. 짧은 치세였으나 법과 제도를 다잡으려 힘썼다. 직전수조법을 정비하고 경국대전 편찬을 이어받았다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1468,
      title: "남이 장군 옥사",
      desc: "훈구 공신 유자광이 남이를 역모죄로 고변하여 남이·강순 등이 처형되니, 신진 무신 세력이 일거에 숙청되다.",
      sillokEntry: {
        articleId: "ITKC_JT_H0_A01_10A_00010",
        date: "예종 1년(1468) 10월",
        title: "유자광이 남이·강순의 역모를 고변하여 처형하다",
        translation: "유자광이 남이와 강순이 역모를 꾀한다고 고발하니 국문하여 복주(伏誅)하였다. 임금께서 효수하여 뭇사람에게 보이게 하고 가산을 몰수하도록 명하시어 백관에게 경계를 삼으셨다. 남이는 나이 스물여덟에 처형되었다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_H0_A01_10A_00010",
      },
      storyEntry: {
        title: "남이 장군의 죽음",
        scenes: [
          {
            imagePrompt: "Young general Nam Yi in military uniform being seized by royal guards in a night courtyard, Yu Ja-gwang watching from the shadows, ink wash painting with dramatic torchlight, the moment a decorated war hero becomes an accused traitor",
            narration: "이시애의 난을 진압한 조선 최고의 장수, 스물여덟의 남이가 포박되었다. 유자광의 고변이었다. 역모라 하였으나 그것이 사실인지는 아무도 묻지 않았다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Nam Yi standing before the royal court during interrogation, surrounded by powerful meritorious subjects who want him removed, ink wash painting, the young general's proud bearing against the machinery of political elimination",
            narration: "국문 자리에서 남이는 끝내 역모를 인정하지 않았다. 그러나 훈구 공신들이 원하는 답은 이미 정해져 있었다. 예종은 그 칼날을 막지 못하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Execution scene of Nam Yi outside the palace walls, crowds watching in silence, ink wash painting with grey dawn light, the sense of waste — a brilliant young general cut down by political intrigue rather than battle",
            narration: "스물여덟의 장군은 형장에서 사라졌다. 나라를 지킨 칼이 나라 안의 권력 다툼에 꺾인 날이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_H0_A01_10A_00010",
      },
    },
    {
      year: 1469,
      title: "직전수조법 개정",
      desc: "현직 관료에게만 수조권을 지급하는 직전법의 수취 질서를 정비하여 국가 재정의 기강을 바로잡고자 하다.",
      storyEntry: {
        title: "세조의 제도를 다듬다",
        scenes: [
          {
            imagePrompt: "Joseon finance officials presenting land tenure reform proposals to King Yejong, reviewing the problems with how the Jikjeonbeop was being implemented, officials with land records and census documents, ink wash painting with administrative focus",
            narration: "예종은 선왕 세조가 만든 직전법의 수취 질서가 흐트러지고 있음을 파악하였다. 현직 관료가 수조권을 행사하는 방식을 정비하여 국가 재정의 기강을 다시 세우고자 하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Government clerks updating the official land and tax registers under the revised Jikjeon regulations, careful documentation of who holds what rights and for how long, ink wash painting with bureaucratic precision",
            narration: "수취 절차를 명문화하고 관행적 탈루를 막는 규정을 보완하였다. 짧은 치세였으나 제도의 빈틈을 메우는 작업을 게을리하지 않았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Yejong reviewing completed tax reform documents with a sense of focused purposefulness, aware of limited time, ink wash painting with the quiet efficiency of a ruler making the most of a brief reign",
            narration: "직전수조법 정비는 화려하지 않았다. 그러나 나라의 살림을 버티게 하는 것은 언제나 이런 조용한 일들이었다. 예종은 그것을 알고 하였다.",
            durationMs: 4500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1469,
      title: "《경국대전》 편찬 계속",
      desc: "세조 대부터 착수된 《경국대전》 편찬을 이어받아 완성을 향한 작업을 계속 독려하다.",
      storyEntry: {
        title: "법전을 향한 바통",
        scenes: [
          {
            imagePrompt: "King Yejong meeting with scholars compiling the Gyeongguk Daejeon, reviewing drafts of completed sections, the accumulated volumes showing progress toward the comprehensive law code, ink wash painting with scholarly continuity across reigns",
            narration: "세조가 시작한 경국대전 편찬은 예종에게 이어졌다. 왕은 그 작업을 멈추지 않도록 독려하였다. 한 왕조의 법전은 한 왕의 치세를 넘어 완성되는 것이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The law code compilation work continuing in candlelit palace offices, scholars cross-referencing previous codes and new regulations, the methodical work of legal systematization in progress, ink wash painting",
            narration: "이(吏)·호(戶)·예(禮)·병(兵)·형(刑)·공(工) 여섯 분야의 법규가 하나씩 정리되어갔다. 예종은 그 완성을 보지 못하였으나, 그 바통을 성종에게 넘겼다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The partially completed law code volumes being carefully stored and protected as King Yejong's reign ends, passed on for continuation, ink wash painting suggesting historical continuity and the collective nature of institutional building",
            narration: "예종은 재위 1년 3개월 만에 세상을 떠났다. 그러나 경국대전은 살아남아 성종 16년에 완성되었다. 짧은 왕의 몫이 긴 역사 안에 녹아들었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1469,
      title: "승하",
      desc: "즉위한 지 1년 3개월 만에 창덕궁에서 승하하시니, 재위 기간이 짧아 대업을 이루지 못하고 세상을 떠나다.",
      storyEntry: {
        title: "단명한 군주",
        scenes: [
          {
            imagePrompt: "King Yejong lying ill in the royal bedchamber, court physicians attending helplessly, meritorious subjects waiting outside in the corridor, ink wash painting with dim candlelight, the sense of a reign too short to leave its mark",
            narration: "즉위한 지 1년 3개월. 예종은 뜻을 펼치기도 전에 병석에 들었다. 조정은 여전히 훈구 공신들의 것이었고, 임금이 바꿀 수 있는 것은 아직 많지 않았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Empty throne room in Changdeok Palace at dawn, a single candle burned out, court ministers kneeling in mourning outside the palace gates, ink wash painting with pale morning light, the weight of a reign that ended before it began",
            narration: "스물의 나이로 세상을 떠났다. 너무 짧아 판단하기도 어려운 치세였다. 남이 장군의 죽음만이 그의 이름 곁에 남았다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
      },
    },
  ],
  detail: {
    date: "1468년 9월 ~ 1469년 11월",
    hanjaChar: "獄",
    title: "남이 옥사와 단명한 군주, 예종",
    desc: "예종은 세조의 뒤를 이어 즉위하였으나 재위가 1년 3개월에 지나지 않았다. 즉위 초부터 훈구 공신 세력이 조정을 장악한 가운데, 남이 옥사를 통해 왕실을 위협할 수 있는 무신 세력을 제거하였다. 짧은 치세 동안 직전수조법 정비와 《경국대전》 편찬 지속 등 제도 정비에 힘썼으나, 뜻을 펼치기에는 시간이 너무 짧았다. 요절한 까닭에 역사적 평가는 미약하나, 재위 기간에 드러난 공신 세력의 권력 집중은 이후 조선 정치사에 깊은 그림자를 드리웠다.",
    unofficialHistory: "예종이 남이 장군의 처형 소식을 들은 날 밤, 침전에서 홀로 술잔을 기울이며 '무인은 나라의 팔다리인데 내가 공신들의 말만 듣고 베었으니, 훗날 반드시 후회할 것이다'라고 탄식하였다는 이야기가 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "1년 3개월, 남이 장군을 죽인 단명한 왕",
    figures: [
      { name: "유자광(柳子光)", role: "훈구 공신. 남이를 역모로 고변하여 옥사를 일으킨 핵심 인물" },
      { name: "남이(南怡)", role: "젊은 무신 장군. 이시애의 난 진압으로 이름을 떨쳤으나 역모죄로 처형되다" },
      { name: "강순(康純)", role: "남이 옥사에 연루되어 함께 처형된 무신" },
      { name: "한명회(韓明澮)", role: "세조 대부터 권세를 누린 훈구 공신의 좌장. 예종 치세에도 실권을 행사하다" },
    ],
  },
  sillokEntry: {
    date: "睿宗 元年 戊子 十月",
    title: "남이와 강순을 역모죄로 처형하다",
    original: "柳子光告南怡·康純謀逆，鞫之伏誅。上命梟首示衆，籍沒家産，以警百官。",
    translation: "유자광이 남이와 강순이 역모를 꾀한다고 고발하니 국문하여 복주(伏誅)하였다. 임금께서 효수하여 뭇사람에게 보이게 하고 가산을 몰수하도록 명하시어 백관에게 경계를 삼으셨다.",
    commentary: "사신은 논한다. 남이는 나이 스물여덟에 이시애의 난을 진압한 조선 최고의 장수였거늘, 공신들의 시기와 모함에 억울하게 목숨을 잃었다. 유자광의 고변은 사실을 왜곡한 것이었으나, 예종은 공신 세력의 의지를 거스르지 못하고 그 칼날을 막지 않으셨다. 한 나라의 동량을 이리도 허망하게 잃으셨으니, 이는 임금의 과실이 아니라 공신이 왕권을 잠식한 시대의 비극이었다.",
  },
};
