import type { KingData } from '../types/king.types';

export const SEJO_DATA: KingData = {
  id: "sejo",
  transitionFromPrev: "단종이 영월로 떠났다. 숙부가 옥좌에 앉았다.",
  events: [
    {
      year: 1455,
      title: "왕위 찬탈",
      desc: "조카 단종으로부터 선위(禪位)의 형식을 빌어 왕위를 빼앗고 조선 제7대 왕으로 즉위하다.",
      storyEntry: {
        title: "찬탈자의 즉위, 그 화려한 침묵",
        scenes: [
          {
            imagePrompt: "A Joseon king in full royal regalia performing a solemn ancestral rite at the grand Jongmyo Shrine, early morning mist rising around the red-pillared hall, ink wash painting style with muted gold and gray tones, tension beneath ceremony",
            narration: "1455년 7월 4일, 세조는 종묘에 나아가 즉위를 고하였다. 조카의 왕좌를 빼앗은 손으로 향을 피우는 그 순간, 사당의 고요는 무거운 침묵으로 가득 찼다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon king seated on the throne at Geunjeongjeon Hall, hundreds of officials in black and blue robes kneeling in rows across the wide stone courtyard, traditional East Asian ink painting, wide panoramic composition, cold ceremonial atmosphere",
            narration: "근정전 앞 돌마당에 백관이 줄지어 엎드려 하례를 올렸다. 새 임금의 이름 아래 나라는 숨을 죽였고, 축하의 함성은 어딘지 공허하게 울렸다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Imperial decree scroll being unfurled before assembled court officials in a Joseon palace hall, a lone figure on the throne reading the royal edict, ink brush painting, dramatic diagonal composition, early light streaming through latticed windows",
            narration: "교서는 관대한 사면을 선포했으나, 모반과 대역만은 용서의 밖이었다. 법도와 은혜를 동시에 내린 그 교서 한 장에, 새 왕조의 서늘한 질서가 새겨졌다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_G0_A01_07A_04A_00010_2005_001_XML",
      },
      sillokEntry: {
        articleId: 'ITKC_JT_G0_A01_07A_04A_00010_2005_001_XML',
        date: '세조 1년 을해(1455) 7월 4일',
        title: '종묘에 즉위를 고하고, 근정전에 나아가 즉위 교서를 발표하다',
        translation: '임금이 친히 종묘(宗廟)에 제사하여 그 즉위(卽位)를 고하고 환궁(還宮)하였다. 근정전(勤政殿)에 나아가서 백관의 하례(賀禮)를 받고 반사(頒赦)하니, 그 교서(敎書)에 이르기를, "나는 덕이 박한 사람으로서 상왕(上王)께서 부여해 주신 중책을 받고 조종(祖宗)의 큰 사업을 계승하고는 이에 옛 법도에 따라 친히 태묘(太廟)에 강신(降神)하니, 욕례(縟禮)를 이미 이루었으므로 마땅히 관대한 법을 포시(布施)하여 이 큰 경사를 만민과 더불어 같이 해야 할 것이니, 경태(景泰) 6년 7월 초4일 새벽 이전에 있었던 모반(謀反)·대역(大逆)·모반(謀叛) 등을 제외하고는 이미 사실이 발각되었거나 발각되지 않았거나 모두 용서하여 죄를 면제하며, 감히 유지(宥旨) 이전의 일을 가지고 서로 고하여 말하는 자는 그 죄로써 죄 줄 것이다." 하였다.',
        sourceUrl: 'https://sillok.history.go.kr/id/ITKC_JT_G0_A01_07A_04A_00010_2005_001_XML',
      },
    },
    {
      year: 1456,
      title: "사육신 처형",
      desc: "성삼문·박팽년 등 여섯 충신이 단종 복위를 도모하다 발각되어 능지처참에 처해지고, 절의(節義)의 이름이 후세에 전해지다.",
      storyEntry: {
        title: "여섯 충신, 저잣거리의 피",
        scenes: [
          {
            imagePrompt: "Joseon palace interrogation room, a court official being flogged while surrounded by royal guards and ministers, intense lighting from paper lanterns, traditional East Asian ink wash painting, high contrast black and white with red accents, anguish and defiance on the prisoner's face",
            narration: "1456년 6월, 사정전에 끌려온 성삼문은 장(杖)을 맞으면서도 입을 다물지 않았다. 신문하는 자도, 당하는 자도, 이것이 끝이 아님을 알고 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon king on throne issuing a grim decree to assembled officials, scroll being written by a scribe, atmosphere of cold authority, traditional ink brush painting style, palace interior with dark wooden pillars, figures cast in shadow",
            narration: "의금부의 보고가 올라오자 임금은 망설임 없이 명하였다. 능지처사, 그리고 가족 모두를 변방 노비로 — 충절의 대가는 씨줄까지 끊기는 것이었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Public execution ground in front of Joseon government armory, crowds of officials forced to witness, six condemned men being executed by dismemberment, severed heads displayed on poles, somber ink wash painting, overcast sky, silent and horrified onlookers",
            narration: "군기감 앞 길에 백관이 집결한 가운데, 이개·성삼문·하위지 등 여섯 명이 환열(轘裂)되어 사흘 동안 저자에 효수되었다. 그날 이후 그들의 이름은 사육신(死六臣)으로 불려, 죽음보다 오래 살아남았다.",
            durationMs: 6000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_G0_A02_06A_08A_00020_2005_002_XML",
      },
      sillokEntry: {
        articleId: 'ITKC_JT_G0_A02_06A_08A_00020_2005_002_XML',
        date: '세조 2년 병자(1456) 6월 8일',
        title: '의금부에서 성삼문 등의 반역죄를 고하니 연루된 자들의 처벌을 명하다',
        translation: '사정전(思政殿)에 나아가서 명하여 의금부 제조(義禁府提調) 신숙주(申叔舟) 등과 승지·대간 등을 불러서 입시(入侍)하게 한 다음, 성삼문(成三問)·이개(李塏)·하위지(河緯地)·박중림(朴仲林)·김문기(金文起)·성승(成勝)·유응부(兪應孚) 등을 끌어 와서 장(杖)을 때리면서 당여(黨與)를 신문하였다. 의금부에서 아뢰기를, "이개·하위지·성삼문·박중림·김문기·유응부 등이 결당하여 어린 임금을 끼고 나라의 정사를 마음대로 할 것을 꾀하여 6월 초1일에 거사하려 하였으니, 그 죄는 능지 처사(凌遲處死)에 해당합니다." 하니, 임금이 명하기를, "나머지 사람들은 친자식들을 모조리 교형(絞刑)에 처하고, 어미와 딸·처첩(妻妾)·조손(祖孫)·형제(兄弟)·자매(姉妹)와 아들의 처첩은 변방 고을의 노비로 영속시키라." 하고, 드디어 백관(百官)들을 군기감(軍器監) 앞 길에 모아서 이개 등을 환열(轘裂)하여 3일 동안 저자에 효수(梟首)하였다.',
        sourceUrl: 'https://sillok.history.go.kr/id/ITKC_JT_G0_A02_06A_08A_00020_2005_002_XML',
      },
    },
    {
      year: 1456,
      title: "집현전 폐지",
      desc: "사육신 사건의 여파로 학문 기관 집현전을 혁파하고, 왕권에 도전할 수 있는 학문적 결사의 싹을 잘라내다.",
      storyEntry: {
        title: "집현전의 문이 닫히다",
        scenes: [
          {
            imagePrompt: "Joseon officials removing books and scrolls from Jiphyeonjeon hall by royal order, the shelves being emptied, scholars watching from outside the palace gates in stunned silence, ink wash painting with the atmosphere of an institution being erased",
            narration: "사육신의 피가 채 마르기도 전에, 세조는 집현전을 혁파하였다. 학문과 간쟁의 요람이었던 그곳에서 왕권에 도전할 지식인 집단이 자라났다고 판단한 것이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The Jiphyeonjeon building standing empty and silent, its doors locked, books piled in storage, the spirit of Sejong's scholarly vision departed, ink wash painting with desolate institutional atmosphere",
            narration: "세종이 꿈꾼 지식의 전당이 문을 닫았다. 성삼문과 박팽년을 길러낸 그 공간이 이제 역사가 되었다. 권력은 때로 자신이 낳은 것을 두려워한다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Sejo signing the decree abolishing Jiphyeonjeon with firm brushstroke, his expression showing no hesitation, the single-minded calculation of a ruler who will not allow another challenge to his authority, ink wash painting",
            narration: "세조는 후회하지 않았다. 그것이 그의 강함이었고, 그것이 그의 한계였다. 집현전의 폐지는 30년 뒤 성종이 홍문관을 세울 때까지 조선 학문에 긴 그늘을 드리웠다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1460,
      title: "경국대전 편찬 착수",
      desc: "육전(六典)의 체계 아래 조선의 통치 규범을 집대성할 법전 편찬을 명하여, 법치 국가의 기틀을 다지기 시작하다.",
      storyEntry: {
        title: "찬탈자가 법전을 만들다",
        scenes: [
          {
            imagePrompt: "King Sejo summoning scholars Choe Hang and No Sa-shin to the throne room to receive the command to compile the Gyeongguk Daejeon law code, an expansive vision of legal order being set in motion, ink wash painting with formal authority",
            narration: "세조 6년, 임금은 최항과 노사신 등에게 명하여 육전을 찬집하게 하였다. 이(吏)·호(戶)·예(禮)·병(兵)·형(刑)·공(工) 여섯 분야에 걸쳐 조선의 모든 법도를 하나의 책에 담겠다는 선언이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Scholars and officials compiling legal texts from scattered previous codes, organizing them by category at long desks, reference books and earlier law codes spread around them, ink wash painting with scholarly industry",
            narration: "'법령은 국가의 큰 근본이니 삼가지 않을 수 없다.' 세조의 말이었다. 피로써 얻은 왕좌를 법으로써 굳히려는 의지가 이 편찬 사업의 뿌리였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The first draft sections of the Gyeongguk Daejeon being presented to King Sejo for review, the king reading carefully, the long road to the law code's completion stretching ahead through future reigns, ink wash painting",
            narration: "법전은 세조의 대에 완성되지 않았다. 예종을 거쳐 성종 16년에야 반포되었다. 그러나 그 씨앗은 세조가 뿌렸다. 찬탈자의 손이 조선 오백 년의 법을 시작하였다는 역설이 역사에 남았다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1466,
      title: "직전법 실시",
      desc: "과전법(科田法)을 폐지하고 현직 관료에게만 수조권을 부여하는 직전법을 시행하여 국가 재정을 강화하고 토지 지배 질서를 재편하다.",
      storyEntry: {
        title: "현직에게만 땅을 허하라",
        scenes: [
          {
            imagePrompt: "Joseon government officials reviewing land allocation registries, crossing out entries for retired officials and deceased merit subjects, reassigning the tax collection rights to current officeholders, ink wash painting with bureaucratic precision",
            narration: "세조 12년, 과전법이 폐지되고 직전법이 시행되었다. 현직 관료에게만 수조권을 부여하고 퇴직하면 반환하게 하였다. 토지의 흐름이 나라의 통제 아래 들어왔다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Retired former officials and widows of merit subjects losing their land stipends under the new law, contrasted with active officials receiving their allocations, ink wash painting showing the social impact of the legal reform",
            narration: "공신과 그 후손들이 대대로 토지의 수익을 누리던 관행이 끊겼다. 재정은 강화되었으나, 노신들의 불만도 함께 쌓였다. 세조의 개혁은 늘 이 두 얼굴을 함께 지니고 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Sejo examining national treasury accounts showing improved fiscal balance after the Jikjeonbeop reform, financial officials presenting positive reports, ink wash painting with the satisfaction of successful economic policy",
            narration: "직전법은 국가 재정을 안정시켰다. 강력한 왕권 위에서만 가능한 개혁이었다. 세조는 불의한 방법으로 오른 자리에서 의로운 제도를 만들었다. 역사가 그를 쉬이 판단하지 못하는 이유다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1467,
      title: "원각사지 십층석탑 건립·진관 체제 정비",
      desc: "한양 원각사에 십층석탑을 세워 불교적 권위를 과시하는 한편, 전국의 군사 방어 체계를 진관(鎭管) 단위로 재편하여 국방을 일신하다.",
      storyEntry: {
        title: "탑을 세우고 군제를 바꾸다",
        scenes: [
          {
            imagePrompt: "The ten-story marble pagoda of Wongaksa temple rising above the rooftops of Hanyang, craftsmen completing the upper stories, Buddhist monks and court officials watching, ink wash painting with the grandeur of religious architecture against urban skyline",
            narration: "세조 13년, 한양 원각사에 대리석 십층석탑이 완성되었다. 숭유억불의 나라에서 왕이 손수 탑을 세운 것은 이례적인 일이었다. 세조는 불교에서 자신의 업장을 씻고자 하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Military officials and King Sejo reviewing the new Jingwan defense system map, the kingdom divided into strategic defense zones with clear command structures, ink wash painting with military planning atmosphere",
            narration: "같은 해, 전국의 군사 방어 체계를 진관 단위로 재편하였다. 각 지역의 방어를 체계적으로 조직하여 외침에 빠르게 대응할 수 있도록 하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Dual image of the pagoda's spiritual significance and soldiers training in the new defense system, showing King Sejo's simultaneous pursuit of religious expiation and practical military governance, ink wash painting",
            narration: "탑은 죄를 씻으려는 마음이요, 진관은 나라를 지키려는 손이었다. 세조는 자신이 행한 일의 무게를 알면서도 왕의 일을 멈추지 않았다. 그것이 그의 방식이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
  ],
  detail: {
    date: "1455년 윤6월 ~ 1468년 9월",
    hanjaChar: "典",
    title: "典法의 군주, 세조",
    desc: "세조는 피로써 왕좌를 얻고, 법으로써 왕조를 굳힌 군주였다. 조카의 왕위를 빼앗고 충신들의 목을 베는 과정에서 그 이름은 찬탈자의 낙인을 피할 수 없었다. 그러나 강력한 왕권을 배경으로 경국대전 편찬을 명하고, 직전법으로 재정을 바로잡으며, 진관 체제로 국방을 다진 업적은 조선 오백 년 법치의 토대가 되었다. 불의한 시작과 빛나는 결과 사이에서, 세조는 역사가 쉬이 판결을 내리지 못하는 군주로 남아 있다.",
    unofficialHistory: "세조가 단종을 영월로 유배 보낸 뒤 어느 밤, 꿈속에 단종의 어머니 현덕왕후가 나타나 세조의 얼굴에 침을 뱉었고, 그 자리에 종기가 돋아 평생 피부병을 앓았다는 이야기가 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "조카의 왕위를 빼앗고 법전을 완성한 왕",
    figures: [
      { name: "성삼문(成三問)", role: "집현전 학사 출신으로 단종 복위를 주도하다 처형된 사육신의 수장" },
      { name: "한명회(韓明澮)", role: "계유정난부터 세조를 보좌한 최측근 책사로 정권의 실세" },
      { name: "신숙주(申叔舟)", role: "집현전 출신이나 세조에게 귀부하여 경국대전 편찬에 핵심 역할을 한 문신" },
      { name: "단종(端宗)", role: "세조에게 왕위를 빼앗기고 노산군으로 강봉된 뒤 영월에서 생을 마감한 조카" },
    ],
  },
  sillokEntry: {
    date: "世祖 六年 庚辰 正月",
    title: "경국대전 편찬을 명하여 법치의 기강을 세우다",
    original: "命崔恒·盧思愼等 撰輯六典 以爲萬世之法 上曰 法令者 國家之大本 不可不慎 宜廣採衆議 折衷允當 以垂永久",
    translation: "최항·노사신 등에게 명하여 육전을 찬집하게 하고 만세의 법으로 삼고자 하였다. 임금이 이르셨다. '법령은 국가의 큰 근본이니 삼가지 않을 수 없다. 마땅히 여러 의견을 널리 모아 공정하게 절충하여 영구히 전하도록 하라.'",
    commentary: "사신은 논한다. 세조께서 왕위를 얻은 방도는 의(義)에 어긋남이 있어, 사림(士林)이 오랫동안 탄식하는 바이다. 그러나 경국대전의 편찬을 명하여 육전의 기강을 세운 일은 실로 조선 법치의 연원이 되었으니, 한 사람의 도덕적 결함이 한 왕조의 제도적 유산을 지우지는 못함을 역사는 냉정히 증언하고 있다. 찬탈자의 손으로 법전을 완성하였다는 이 역설이야말로, 세조를 두고 역사가 쉬이 붓을 놓지 못하는 까닭이다.",
  },
};
