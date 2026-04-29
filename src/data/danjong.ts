import type { KingData } from '../types/king.types';

export const DANJONG_DATA: KingData = {
  id: "danjong",
  transitionFromPrev: "문종이 갑자기 승하했다. 열두 살 세자가 왕이 되었고, 숙부 수양대군의 야망이 이미 궁궐 안에서 불타고 있었다.",
  events: [
    {
      year: 1452,
      title: "즉위",
      desc: "문종의 뒤를 이어 조선 제6대 왕으로 즉위하다. 나이 열두 살에 홀로 용상에 오르다.",
      storyEntry: {
        title: "열두 살의 왕",
        scenes: [
          {
            imagePrompt: "A child king in oversized royal robes ascending the Joseon throne, the throne hall vast and imposing around his small figure, court officials bowing in rows, their faces a mixture of grief for the previous king and veiled calculation, ink wash painting with somber atmosphere",
            narration: "임진년 5월, 아버지 문종이 승하하자 열두 살의 세자 홍위가 왕위에 올랐다. 용상은 너무 크고 조정은 너무 복잡하였다. 어린 왕은 그것을 알지 못하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Young King Danjong receiving formal reports from ministers Hwangbo-in and Kim Jong-seo who kneel before him, the ministers' expressions showing protective but worried care, the king's face showing trust in the adults around him, ink wash painting",
            narration: "황보인과 김종서가 양 옆에서 보필하였다. 선왕의 고명을 받은 충신들이었다. 어린 왕은 그들을 믿었다. 그러나 궁궐 안의 어른 중에는 다른 꿈을 품은 이도 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Young Danjong alone in his private chambers at night, candlelight small against the darkness of a vast palace, his young face confused by the weight of power and the whispers of court politics he cannot yet understand, ink wash painting",
            narration: "임금은 나라를 물려받았으나 나라를 다스릴 준비가 되어 있지 않았다. 그것은 열두 살의 탓이 아니었다. 다만 역사는 어린 왕에게 시간을 주지 않았다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1453,
      title: "계유정난",
      desc: "수양대군이 황보인·김종서 등 고명대신을 살해하고 조정의 실권을 장악하다.",
      sillokEntry: {
        articleId: "ITKC_JT_F0_A01_10A_10A_00010",
        date: "단종 1년(1453) 10월 10일",
        title: "수양대군이 김종서를 죽이고 궁궐을 장악하다",
        translation: "수양대군이 사저를 나서 김종서의 집에 이르러 철퇴로 쳐 죽인 뒤, 곧바로 궁궐로 들어와 황보인·이양·조극관 등을 차례로 살해하니 조정이 크게 흔들렸다. 임금께서 나이 어리고 홀로 외로우시매, 능히 이를 제어할 자가 없었다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_F0_A01_10A_10A_00010",
      },
      storyEntry: {
        title: "계유년의 밤",
        scenes: [
          {
            imagePrompt: "Young King Danjong alone in a dark palace chamber, surrounded by the sounds of soldiers outside, candlelight flickering, ink wash painting with oppressive shadows, atmosphere of isolation and fear, a child-king trapped by adult power struggles",
            narration: "계유년 10월, 수양대군의 군사가 밤을 틈타 궁을 장악하였다. 김종서는 대문 앞에서 쓰러졌다. 열두 살의 왕은 홀로 편전에 남겨졌다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Suyang Grand Prince in dark armor striding through palace gates with armed soldiers, torchlight casting harsh shadows on stone walls, ink wash painting, sense of unstoppable force and political coup, night sky heavy with clouds",
            narration: "수양대군은 거침없이 대궐 안으로 들어섰다. 황보인이 쓰러지고, 조극관이 쓰러졌다. 선왕이 어린 왕을 부탁했던 신하들이 하나씩 사라졌다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Child king sitting motionless on his throne in the silent palace, distant torches and sounds of soldiers, court ministers bowing to the new power, ink wash painting with cold blue tones, the loneliness of a king who cannot rule",
            narration: "동이 텄을 때, 조정의 실권은 이미 수양대군의 손에 있었다. 임금은 용상에 앉아 있었으나, 왕이 아니었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_F0_A01_10A_10A_00010",
      },
    },
    {
      year: 1455,
      title: "강제 양위",
      desc: "수양대군의 압박에 굴복하여 왕위를 양위하고 상왕으로 물러나다.",
      storyEntry: {
        title: "빼앗긴 왕좌",
        scenes: [
          {
            imagePrompt: "Young King Danjong alone in the throne hall facing Suyang Grand Prince who stands before him with barely veiled coercive authority, surrounding ministers all aligned with Suyang, the young king isolated and powerless, ink wash painting with oppressive power imbalance",
            narration: "을해년 윤6월, 수양대군이 왕위를 넘기라는 압박을 노골적으로 가해왔다. 조정의 신하들은 이미 수양의 편이었다. 열다섯의 왕 곁에는 아무도 없었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Danjong formally handing over the royal seal to Suyang Grand Prince in an abdication ceremony devoid of joy, the young king's eyes downcast, the scene formally correct but spiritually coerced, ink wash painting with cold ceremonial atmosphere",
            narration: "단종은 옥새를 내주었다. 선위(禪位)라는 형식이었으나 강요된 것이었다. 열다섯 살의 왕은 스스로 고른 길이 아닌 길 위에 서야 했다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Danjong as retired king sitting in a smaller palace building as Suyang takes the throne, the boy watching from a distance as the court ceremonies of the new king unfold without him, ink wash painting with quiet desolation",
            narration: "상왕으로 물러난 단종은 아직 궁 안에 있었다. 그러나 그것도 오래 가지 않았다. 살아 있는 전왕은 새 왕에게 언제나 위험이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1456,
      title: "사육신의 복위 시도",
      desc: "성삼문·박팽년 등 집현전 학사들이 단종 복위를 도모하다 발각되어 처형되다.",
      sillokEntry: {
        articleId: "ITKC_JT_G0_A02_06A_08A_00010",
        date: "세조 2년(1456) 6월 8일",
        title: "성삼문·박팽년 등을 역모죄로 국문하여 처형하다",
        translation: "성삼문·박팽년·하위지·이개·유성원·유응부 등이 상왕을 복위시키려 모의하다 발각되었다. 임금이 친히 국문하니 성삼문이 굽히지 않고 '나는 세조의 신하가 아니라 상왕의 신하'라 하였다. 모두 능지처참에 처하고 삼족을 멸하였다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_G0_A02_06A_08A_00010",
      },
      storyEntry: {
        title: "사육신 — 죽음으로 지킨 절개",
        scenes: [
          {
            imagePrompt: "Six Joseon scholars being interrogated in a harsh court setting, bound but unbowed, torchlight on their faces, ink wash painting with stark contrast between the prisoners' dignity and the surrounding soldiers, atmosphere of defiant loyalty",
            narration: "병자년 6월, 성삼문과 박팽년은 끌려 나왔다. 세조가 친히 국문하였다. '누구의 신하냐?' 성삼문은 고개를 들고 답하였다. '상왕의 신하이옵니다.'",
            durationMs: 5500,
          },
          {
            imagePrompt: "Park Paeng-nyeon and Seong Sam-mun kneeling with hands bound but faces calm and resolute, refusing to bow to the usurper king, ink wash painting with cold blue and white tones, the dignity of men who have chosen death over betrayal",
            narration: "고문이 이어졌으나 그들은 뜻을 굽히지 않았다. 박팽년은 세조를 '전하'가 아닌 '나리'로 불렀다. 죽음을 이미 각오한 자의 말이었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Execution ground outside Joseon palace, six scholars facing their deaths with serenity, crowd watching in silence, ink wash painting with muted grey tones, a moment that will be remembered for centuries, the weight of historical judgment",
            narration: "여섯 사람이 형장의 이슬로 사라졌다. 삼족이 멸해졌다. 그러나 그 이름은 지워지지 않았다. 사육신 — 죽음으로 절개를 지킨 이들의 이야기는 조선이 다하도록 전해졌다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_G0_A02_06A_08A_00010",
      },
    },
    {
      year: 1457,
      title: "노산군 강등 및 영월 유배",
      desc: "노산군으로 강등되어 강원도 영월 청령포에 유배되다.",
      storyEntry: {
        title: "청령포로 가는 길",
        scenes: [
          {
            imagePrompt: "The deposed king being stripped of royal robes and redressed in commoner's clothes, guards watching impassively, the humiliation rendered quietly in the small gestures of attendants, ink wash painting with cold bureaucratic precision and human tragedy",
            narration: "병자년, 사육신의 복위 운동이 실패로 끝나자 세조는 단종을 노산군으로 강등하였다. 임금이라는 이름이 지워졌다. 이제 그는 노산군이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Danjong's small exile procession traveling through mountain roads toward Yeongwol in early summer, a few guards and servants, the landscape growing wilder as they leave civilization behind, ink wash painting with the solitude of a journey without return",
            narration: "강원도 영월 청령포로 향하는 길은 멀고 외로웠다. 삼면이 물로 막힌 작은 땅, 청령포. 그곳이 열여섯 소년의 유배지가 되었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Danjong arriving at Cheongnyeongpo, a strip of land surrounded by the rushing Donggang river on three sides, looking at the swift cold water that forms his prison, ink wash painting with the isolation of the place rendered in cold blue river tones",
            narration: "동강이 사방을 에워싼 그 땅에서 단종은 두견새 소리를 들으며 밤을 보냈다. 한양 쪽 하늘을 바라보며 자규사를 지었다. 가장 외로운 시인이 된 왕이었다.",
            durationMs: 5500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1457,
      title: "사사",
      desc: "세조의 명으로 영월에서 사약을 받아 열일곱 나이에 생을 마치다.",
      sillokEntry: {
        articleId: "ITKC_JT_G0_A03_10A_21A_00010",
        date: "세조 3년(1457) 10월 21일",
        title: "노산군이 영월에서 졸하다",
        translation: "노산군이 영월에서 졸하였다. 나이 열일곱이었다. 처음에 금부도사가 내려가니 노산군이 스스로 목매어 죽었다고 전하기도 하고, 사약을 내렸다고도 전하나 실록에 자세히 기록되지 않았다. 이후 240여 년이 지나 숙종이 복위를 명하고 단종이라 추상하였다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_G0_A03_10A_21A_00010",
      },
      storyEntry: {
        title: "영월의 마지막 밤",
        scenes: [
          {
            imagePrompt: "Young deposed king alone in a small exile dwelling in Yeongwol, sitting by a window overlooking a rushing river at night, candlelight almost extinguished, ink wash painting with deep shadows and cold moonlight, absolute solitude and resignation",
            narration: "영월 청령포, 강물이 사방을 에워싼 섬 같은 땅에서 열일곱의 노산군은 밤을 보냈다. 두견새 소리만이 그를 찾아왔다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Royal messenger arriving at the exile dwelling at night with a sealed decree, the young king receiving it with closed eyes and composed expression, ink wash painting, the moment of accepting a fate that cannot be changed",
            narration: "금부도사가 내려왔다. 어린 임금은 더 이상 임금이 아니었고, 살아 있어서도 안 되는 존재가 되어 있었다. 그는 오래 울지 않았다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Eom Heung-do secretly carrying the young king's body for burial at night, alone on a dark hillside, ink wash painting with moonlight, one loyal man against the weight of an entire kingdom's silence, the act of conscience in a time of fear",
            narration: "죽음 뒤에도 아무도 시신을 거두려 하지 않았다. 영월 호장 엄흥도만이 홀로 밤에 나서 임금을 땅에 묻었다. 목숨을 건 마지막 충성이었다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_G0_A03_10A_21A_00010",
      },
    },
  ],
  detail: {
    date: "1452–1455",
    hanjaChar: "難",
    title: "단종 — 어린 임금의 비극",
    desc: "조선 제6대 왕 단종(端宗, 1441–1457)은 문종의 외아들로, 열두 살에 즉위하였다. 재위 불과 삼 년 만에 숙부 수양대군에게 왕위를 빼앗기고, 이후 사육신의 복위 운동이 실패로 끝나자 노산군으로 강등되어 영월에 유배되었다. 조선 역사상 가장 어린 나이에 권력의 제물이 된 비운의 군주로, 그의 짧은 생애는 권력과 충절 사이의 처절한 갈등을 상징한다.",
    unofficialHistory: "영월 청령포 유배 시절, 단종은 홀로 강가에 앉아 한양을 향해 통곡하였다 한다. 밤마다 두견새 울음소리에 잠을 이루지 못하였으며, 자규루(子規樓)에 올라 '자규사(子規詞)'를 지어 자신의 처지를 두견새에 빗대었다고 전해진다. 처형 후에는 아무도 시신을 거두지 않으려 하였으나, 영월 호장 엄흥도가 목숨을 무릅쓰고 홀로 시신을 수습하여 장사 지냈다고 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "열일곱 살에 영월에서 사사된 어린 왕",
    figures: [
      { name: "수양대군(세조)", role: "단종의 숙부. 계유정난을 일으켜 왕위를 찬탈하다." },
      { name: "김종서", role: "좌의정. 단종을 보필하던 고명대신으로 계유정난 때 피살되다." },
      { name: "성삼문", role: "집현전 학사. 사육신의 한 명으로 단종 복위를 꾀하다 처형되다." },
      { name: "박팽년", role: "집현전 학사. 성삼문과 함께 복위 운동에 가담하여 순절하다." },
      { name: "엄흥도", role: "영월 호장. 유일하게 단종의 시신을 수습하여 장례를 치르다." },
    ],
  },
  sillokEntry: {
    date: "단종 1년(1453) 10월 10일",
    title: "계유정난 — 수양대군, 김종서를 죽이고 정권을 장악하다",
    original: "수양대군이 집에서 나와 김종서의 집에 이르러, 철퇴로 쳐서 죽이고, 드디어 궁궐에 들어와 황보인·이양·조극관 등을 죽이니, 조정이 크게 진동하였다. 임금이 어리고 외로우매, 능히 제어할 자가 없었다.",
    translation: "수양대군이 사저를 나서 김종서의 집에 이르러 철퇴로 쳐 죽인 뒤, 곧바로 궁궐로 들어와 황보인·이양·조극관 등을 차례로 살해하니 조정이 크게 흔들렸다. 임금께서 나이 어리고 홀로 외로우시매, 능히 이를 제어할 자가 없었다.",
    commentary: "사신은 논한다. 계유년의 변란은 신하된 자가 차마 입에 담기조차 어려운 일이다. 선왕께서 고명을 의탁하신 충신들이 하루아침에 역적의 이름을 쓰고 죽임을 당하니, 종사의 운명이 한 사람의 야망 앞에 허망히 꺾이었다. 어린 임금은 울부짖을 힘조차 없었으며, 조정의 백관은 두려움에 입을 닫았다. 그러나 성삼문·박팽년 등 사육신이 목숨으로써 절개를 지키니, 권력은 빼앗길지언정 역사의 심판은 끝내 바꿀 수 없음을 후세에 보였다. 슬프도다, 단종이여. 임금의 자리는 빼앗겼으나 충신의 피가 그 이름을 길이 지켰으니, 이것이 곧 하늘이 역적에게 내린 응보가 아니겠는가.",
  },
};
