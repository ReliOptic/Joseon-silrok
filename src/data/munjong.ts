import type { KingData } from '../types/king.types';

export const MUNJONG_DATA: KingData = {
  id: "munjong",
  transitionFromPrev: "세종이 승하했다. 32년의 성군 시대가 닫히고, 세자로서 20년을 기다려온 아들이 왕이 되었다.",
  events: [
    {
      year: 1450,
      title: "즉위",
      desc: "세종의 양위를 받아 조선 제5대 왕으로 즉위하다.",
      storyEntry: {
        title: "20년 기다림 끝의 왕좌",
        scenes: [
          {
            imagePrompt: "King Munjong ascending the throne in full royal regalia, his expression one of solemn readiness after decades of preparation, court officials bowing in ceremony, ink wash painting with a sense of long-deferred fulfillment and quiet determination",
            narration: "문종은 스물두 살부터 세자였다. 세종 곁에서 20년을 기다렸다. 그리고 마침내 왕이 되었을 때, 그의 나이는 이미 서른여섯이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "New King Munjong in the royal lecture hall on his first day of reign, immediately engaging scholars in the royal lecture session, books and documents open, the court sensing a new scholarly energy, ink wash painting style",
            narration: "즉위하던 날부터 경연을 열었다. 세종이 닦아놓은 학문의 나라를 이어받아 더 깊이 뿌리내리게 하겠다는 뜻이었다. 신하들은 이 새 왕에게 기대를 품었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Munjong at his desk late at night, surrounded by administrative documents and historical texts, his expression focused yet shadowed by the first signs of illness, candlelight flickering, ink wash painting with the poignancy of a scholar-king racing against time",
            narration: "그러나 세자 시절 얻은 병이 그를 놓아주지 않았다. 왕좌는 얻었으나 몸이 뜻을 받쳐주지 못하였다. 재위의 봄은 이미 짧다는 것을 몸은 알고 있었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1451,
      title: "고려사 편찬 완성",
      desc: "정인지 등에게 명하여 편찬케 한 『고려사』 139권을 완성하고 반포하다.",
      sillokEntry: {
        date: "문종 1년 신미(1451) 8월 25일",
        title: "『고려사』 139권을 완성하여 올리다",
        translation: "정인지 등이 『고려사』 139권을 완성하여 올리니, 임금이 이르기를, '역사란 후세의 거울이라. 전대의 흥망을 밝게 기록함이 곧 오늘을 다스리는 법이 되거늘, 경들이 이를 완성하였으니 나라의 큰 공업이로다' 하고, 두루 반포하여 관리들로 하여금 읽게 하였다.",
      },
      storyEntry: {
        title: "역사를 완성하다",
        scenes: [
          {
            imagePrompt: "Scholars Jeong In-ji and Kim Jong-seo presenting the completed 139-volume Goryeosa to King Munjong in the royal audience hall, the stacked volumes arranged on ceremonial tables, the king leaning forward with evident satisfaction, ink wash painting style with warm scholarly atmosphere and golden morning light",
            narration: "문종 1년 8월, 정인지가 139권의 책을 올렸다. 『고려사』였다. 500년 고려의 흥망을 낱낱이 기록한 왕조의 거울이었다. 왕은 기뻐하며 말했다. '역사란 후세의 거울이라.'",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon scholars and officials in candlelit study rooms across the kingdom reading freshly distributed copies of the Goryeosa, their faces attentive as they absorb the rise and fall of the previous dynasty, ink wash painting style with intimate scholarly atmosphere",
            narration: "『고려사』는 전국에 배포되었다. 고려가 왜 망했는가. 무엇이 나라를 살리고 무엇이 나라를 죽이는가. 문종은 역사로 신하들을 가르쳤다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Munjong alone in his study at night surrounded by historical texts and the newly completed Goryeosa volumes, making annotations by candlelight, his expression intent and purposeful despite visible signs of illness and fatigue, ink wash painting style with the poignant image of a scholar-king racing against time",
            narration: "그러나 왕의 몸은 이미 병들어 있었다. 역사를 완성하였으나 자신의 역사를 다 쓰기에 시간이 모자랐다. 이듬해 문종은 서른아홉의 나이로 눈을 감았다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
      },
    },
    {
      year: 1452,
      title: "고려사절요 편찬",
      desc: "김종서 등이 『고려사절요』 35권을 편찬하여 올리니 이를 인준하다.",
      storyEntry: {
        title: "역사를 요약하는 것도 역사다",
        scenes: [
          {
            imagePrompt: "Kim Jong-seo and scholars presenting the 35-volume Goryeosajeolyao to King Munjong, the compact abridgement of Goryeo history arranged alongside the larger Goryeosa, ink wash painting with scholarly pride and royal appreciation",
            narration: "문종 2년, 김종서 등이 『고려사절요』 35권을 완성하여 올렸다. 이미 완성된 139권 『고려사』의 핵심을 추려 관리들이 실무에서 쓸 수 있도록 편찬한 것이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Officials in provincial government offices reading the Goryeosajeolyao, using it as a practical historical reference for governance decisions, ink wash painting showing the practical utility of condensed historical knowledge",
            narration: "방대한 역사를 요약하는 것은 단순한 축약이 아니었다. 무엇이 중요한가를 판단하는 일이었다. 문종은 역사의 교훈이 현장의 관리들에게 닿기를 원하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Munjong reviewing both the Goryeosa and Goryeosajeolyao side by side, marking passages, his scholarly nature evident in his focused engagement, ink wash painting with academic atmosphere",
            narration: "『고려사』와 『고려사절요』. 두 역사책이 함께 완성된 것은 문종의 짧은 치세가 남긴 귀한 유산이었다. 역사를 알아야 나라를 다스릴 수 있다는 믿음의 결실이었다.",
            durationMs: 4500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1451,
      title: "화차 개량",
      desc: "병기도감에 명하여 화차(火車)와 신기전(神機箭) 등 화기를 개량·증산하여 북방 방어를 강화하다.",
      storyEntry: {
        title: "문의 왕이 무를 갖추다",
        scenes: [
          {
            imagePrompt: "Joseon weapons craftsmen working in a royal armory, constructing improved fire carts loaded with Singijeon rocket arrows, technical diagrams on the wall, smoke and sparks from metalworking, ink wash painting with industrial energy",
            narration: "문종은 학문의 왕이었으나, 나라의 방비를 소홀히 하지 않았다. 병기도감에 명하여 화차와 신기전을 개량하고 늘렸다. 북방의 여진족 위협이 그 배경이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Demonstration of the improved Hwajeo fire cart launching Singijeon rockets in formation on a testing ground, officials observing the range and accuracy, smoke trails arcing across the sky, ink wash painting with dramatic military technology",
            narration: "화차 한 대에 수십 발의 신기전이 실렸다. 일제히 발사되면 적 기병이 접근할 수 없었다. 문종이 직접 설계에 관여했다는 기록도 남아 있다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Northern border fortress with improved weapons deployed, soldiers training with the new Singijeon rocket launchers, mountains and sparse frontier landscape in background, ink wash painting showing military preparedness",
            narration: "학문으로 나라를 빛내고 병기로 나라를 지키려 했던 문종. 그러나 무기를 완성하고 역사를 완성하고도 자신의 이야기를 완성할 시간은 주어지지 않았다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1452,
      title: "승하와 단종 즉위",
      desc: "병환이 깊어진 끝에 경복궁 강녕전에서 승하하니, 세자 홍위가 뒤를 이어 단종으로 즉위하다.",
      sillokEntry: {
        articleId: "ITKC_JT_E0_A02_05A_14A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_E0_A02_05A_14A_00010_2005_001_XML",
        date: "문종 2년 임신(1452) 5월 14일",
        title: "상(上)이 경복궁 강녕전에서 승하하다",
        translation: "임금이 경복궁 강녕전에서 승하하셨다. 임금은 천성이 어질고 두터우시어 동궁(세자)으로 계실 때부터 손에서 책을 놓지 않으셨고, 경연의 강론을 밤이 깊도록 그치지 않으셨다. 즉위하신 후에는 『고려사』의 완성을 명하여 전대의 득실을 밝히셨고, 화차와 신기전을 제조케 하여 변방의 근심에 대비하셨다. 그러나 성체가 본래 허약하시어 약과 음식이 효험을 보지 못하시다가 마침내 위독하게 되시니, 세자 홍위에게 왕위를 잇도록 유명하시고 영의정 황보인과 좌의정 김종서에게 고아를 부탁하셨다. 향년 39세, 재위 2년여였다.",
      },
      storyEntry: {
        title: "현군의 짧은 봄",
        scenes: [
          {
            imagePrompt: "Ailing King Munjong lying on a royal sickbed in Gangneyongjeon hall of Gyeongbokgung palace, court physicians attending around him, a young crown prince Danjong kneeling beside him, late afternoon light filtering through paper screens, ink wash painting style with somber muted tones",
            narration: "문종은 세종이 남긴 나라를 온 마음으로 받들었다. 경연을 게을리하지 않았고, 역사를 완성하고 병기를 갖추었다. 그러나 몸은 뜻을 따르지 못하였다. 재위 2년, 왕은 병석에서 어린 세자의 손을 꼭 쥐었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Munjong whispering final instructions to ministers Hwangbo-in and Kim Jong-seo kneeling beside his deathbed, the young crown prince visible in the background, candlelight casting long shadows, ink wash painting style with heavy atmosphere of grief and responsibility",
            narration: "황보인과 김종서 — 왕은 이 두 사람에게 어린 세자를 맡겼다. '단종을 잘 보필하라.' 그것이 서른아홉 살 군주의 마지막 말이었다. 하지만 역사는 그 부탁을 지키지 못하게 만들었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "The young Danjong in crown prince robes walking alone through the empty corridors of Gyeongbokgung palace after his father's death, a single court lady following at a distance, cherry blossoms falling in the courtyard, ink wash painting style with atmosphere of melancholy and foreboding",
            narration: "문종이 남긴 봄은 너무 짧았다. 어진 왕의 죽음이 열두 살 세자를 권력 다툼의 한가운데 세워놓았고, 조선은 이내 피바람의 계절을 맞이하였다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_E0_A02_05A_14A_00010_2005_001_XML",
      },
    },
  ],
  detail: {
    date: "1450–1452",
    hanjaChar: "史",
    title: "문종(文宗) — 학문으로 나라를 지키려 한 왕",
    desc: "문종은 세종의 학문과 제도를 충실히 계승한 군주였다. 즉위 전부터 세자로서 20여 년간 국정을 보필하며 경연(經筵)을 게을리하지 않았고, 왕위에 오른 뒤에는 『고려사』와 『고려사절요』를 완성하여 역사 기록의 중요성을 온 나라에 천명하였다. 아울러 화차와 신기전의 개량을 독려하며 국방을 다졌으나, 타고난 병약한 몸은 끝내 그의 뜻을 완수하지 못하게 하였다. 재위 2년 3개월, 조선 역사상 가장 짧은 치세 중 하나를 남기고 승하하니 향년 39세였다.",
    unofficialHistory: "문종이 한창 경연에서 신하들과 토론을 나누던 어느 날, 밤이 깊도록 촛불을 밝히고 『자치통감』을 읽다 가래를 심하게 토하였다. 이를 곁에서 본 내시가 어의를 청하려 하자 왕은 손을 저으며 \"역사의 교훈을 다 읽기 전에 어찌 자리를 뜨겠는가\" 하고 끝내 책을 덮지 않았다 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "세종의 아들, 2년을 채우지 못한 현군",
    figures: [
      { name: "정인지(鄭麟趾)", role: "『고려사』 편찬 총재관, 문종의 학문 사업을 주도한 문신" },
      { name: "김종서(金宗瑞)", role: "『고려사절요』 편찬 책임자이자 북방 개척을 이끈 무신·문신" },
      { name: "황보인(皇甫仁)", role: "영의정으로 문종의 고명(顧命)을 받아 단종을 보필한 대신" },
      { name: "현덕왕후(顯德王后)", role: "문종의 왕비이자 단종의 생모, 세자빈 시절 산후병으로 요절" },
    ],
  },
  sillokEntry: {
    date: "문종 2년(1452) 5월 14일 경자",
    title: "상(上)이 경복궁 강녕전에서 승하하다",
    original:
      "上薨于景福宮康寧殿。上天性仁厚，自在東宮，手不釋卷，經筵講討，每至夜深不輟。即位之後，命完成高麗史，以昭前代得失，又命製火車神機箭，以備邊患。然聖體素弱，藥餌不效，竟至大漸，遺命世子弘暐嗣位，託孤於領議政皇甫仁·左議政金宗瑞。享年三十九，在位二年有餘。",
    translation:
      "임금이 경복궁 강녕전에서 승하하셨다. 임금은 천성이 어질고 두터우시어 동궁(세자)으로 계실 때부터 손에서 책을 놓지 않으셨고, 경연의 강론을 밤이 깊도록 그치지 않으셨다. 즉위하신 후에는 『고려사』의 완성을 명하여 전대의 득실을 밝히셨고, 화차와 신기전을 제조케 하여 변방의 근심에 대비하셨다. 그러나 성체(聖體)가 본래 허약하시어 약과 음식이 효험을 보지 못하시다가 마침내 위독하게 되시니, 세자 홍위에게 왕위를 잇도록 유명하시고 영의정 황보인과 좌의정 김종서에게 고아를 부탁하셨다. 향년 39세, 재위 2년여였다.",
    commentary:
      "사신은 논한다. 문종께서는 세종의 성덕(聖德)을 몸소 잇고 학문과 예악으로 나라를 다스리려 하셨으니, 그 뜻은 진실로 훌륭하였다. 그러나 하늘은 어이하여 이토록 인색하셨는가. 재위 2년 만에 승하하시고 어린 세자를 남기시니, 이는 곧 훗날 단종의 비극이 싹트는 서막이었다. 고명을 받은 신하들이 제 명대로 왕실을 보필하였다면 조선의 운명이 달랐을 것이거늘, 문종의 단명(短命)이 결국 피바람의 문을 열었음을 후세의 사가는 길이 애통해하는 것이다.",
  },
};
