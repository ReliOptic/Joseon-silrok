import type { KingData } from '../types/king.types';

export const GOJONG_DATA: KingData = {
  id: "gojong",
  transitionFromPrev: "철종이 후사 없이 승하했다. 흥선군의 둘째 아들이 옥좌에 올랐다.",
  events: [
    {
      year: 1863,
      title: "즉위",
      desc: "흥선군 이하응의 아들로 열두 살의 나이에 철종의 뒤를 이어 조선 제26대 왕으로 즉위하다.",
      storyEntry: {
        title: "흥선군의 아들, 조선의 왕",
        scenes: [
          {
            imagePrompt: "Twelve-year-old King Gojong in royal ceremonial robes ascending to the throne, his father Heungseon Daewongun standing prominently in the foreground among the court officials, the real power dynamics visible even in the ceremony's arrangement, ink wash painting style with formal grandeur and political subtext",
            narration: "계해년 12월, 열두 살 고종이 즉위하였다. 아버지 흥선대원군이 섭정을 맡았다. 안동 김씨 세도는 하룻밤 사이에 무너졌다. 조선 조정에 오랜만에 왕실의 힘이 돌아왔다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Heungseon Daewongun in regent's robes reviewing petitions and conducting court business with decisive authority, while young Gojong sits at the throne as a symbolic presence, ink wash painting with the father's energy and ambition dominating the composition",
            narration: "흥선대원군은 기다렸던 사람이었다. 세도 가문의 눈을 피해 파락호 행세를 하며 때를 기다렸다. 이제 나라를 바꿀 기회가 왔다. 쇄국, 서원 철폐, 경복궁 중건 — 그의 구상은 이미 준비되어 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Young Gojong studying in the royal study with tutors, gradually becoming aware of his own position and the political world around him, a growing seriousness in his expression, ink wash painting with the quiet development of a young king finding his identity",
            narration: "사신은 논한다. 고종의 즉위는 아버지의 기획이었다. 그러나 열두 살 소년은 언젠가 그 기획에서 벗어나 자신의 길을 찾으려 할 것이었다. 부자 간의 갈등은 이미 씨앗으로 심어져 있었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1865,
      title: "경복궁 중건",
      desc: "흥선대원군이 섭정을 맡아 왕실 권위 회복을 위해 임진왜란 이후 폐허로 남아 있던 경복궁의 중건을 명하다.",
      storyEntry: {
        title: "폐허 위에 다시 세운 궁궐",
        scenes: [
          {
            imagePrompt: "Tens of thousands of laborers working on the massive reconstruction of Gyeongbokgung palace, scaffolding covering half-built walls and towers, the scale of the project enormous against the Seoul mountains, Heungseon Daewongun surveying the construction site, ink wash painting style with the epic ambition of architectural restoration",
            narration: "을축년, 흥선대원군이 경복궁 중건을 명하였다. 임진왜란 때 불탄 뒤 270여 년간 폐허로 남아 있던 조선의 법궁이었다. 왕실 권위를 세우겠다는 선언이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon peasants being forced into corvée labor for the palace construction, their exhausted faces showing the burden of the project, while officials collect the hated Danpochien coins from merchants in the marketplace to fund the work, ink wash painting with the human cost of monumental ambition",
            narration: "원납전이 강제 징수되었고 백성이 부역에 동원되었다. 당백전이 남발되어 물가가 치솟았다. 왕실의 위엄은 백성의 고통 위에 쌓였다. 경복궁은 웅장하게 올라갔다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The completed Gyeongbokgung palace in its restored glory, Gwanghwamun gate magnificent in the foreground, the mountains of Bugaksan behind, but the palace grounds almost too grand and empty for the diminished power it now housed, ink wash painting with the grandeur and the irony of restoration",
            narration: "사신은 논한다. 경복궁은 완성되었다. 그러나 그 위용이 절정에 달하던 시절, 바깥 세계는 이미 조선을 향해 문을 두드리고 있었다. 돌로 쌓은 권위가 대포 앞에 얼마나 버틸 수 있을 것인가.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1876,
      title: "강화도 조약 체결",
      desc: "일본의 무력 시위에 굴복하여 조선 최초의 근대적 불평등 조약인 강화도 조약을 체결하고 문호를 개방하다.",
      storyEntry: {
        title: "포함외교, 열린 문호",
        scenes: [
          {
            imagePrompt: "Japanese warship Unyo anchored menacingly off the coast of Ganghwa Island, its guns trained toward the shore, Joseon coastal battery officers watching helplessly, the asymmetry of military power stark and undeniable, ink wash painting style with the cold drama of gunboat diplomacy",
            narration: "병자년 1월, 일본 군함 운요호가 강화도 앞바다에 닻을 내렸다. 대포를 앞세운 협상이었다. 270년 전 병자호란 이후 조선이 강대국의 무력 앞에 다시 무릎을 꿇는 순간이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon and Japanese officials signing the Ganghwa Treaty at a formal table inside a government building, the Japanese delegation composed and demanding, the Joseon delegation grim and aware of the inequality being codified, ink wash painting with the weight of a historic capitulation",
            narration: "강화도 조약이 체결되었다. 부산·원산·인천 세 항구가 열렸다. 조선은 자주국임을 명시하였으나, 그것은 청나라의 종주권을 부정하는 일본의 계산이 담긴 문구였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Ships from multiple foreign nations — Japan, China, Western powers — beginning to arrive at newly opened Korean ports, the Joseon coastline transforming, officials watching the foreign vessels with a mixture of apprehension and forced acceptance, ink wash painting with the irreversible opening of a closed world",
            narration: "사신은 논한다. 강화도 조약은 조선이 근대 세계에 편입되는 첫 관문이었다. 그러나 그 문은 조선이 스스로 연 것이 아니었다. 포구의 냄새가 바뀌었고, 나라의 운명도 바뀌기 시작하였다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1894,
      title: "갑오개혁",
      desc: "동학 농민 운동과 청일 전쟁을 계기로 일본의 압력 하에 신분제 폐지·과거제 혁파 등 대규모 근대적 제도 개혁을 단행하다.",
      storyEntry: {
        title: "칼 위에 선 개혁",
        scenes: [
          {
            imagePrompt: "Joseon reformers in both traditional and early modern dress working in the Gungukgimucheong reform bureau, drafting sweeping changes to the legal and social system, Japanese advisors visible in the background suggesting the external pressure behind the reforms, ink wash painting with the complex atmosphere of coerced modernization",
            narration: "갑오년, 군국기무처가 설치되고 개혁안이 쏟아졌다. 신분제가 폐지되고 과거제가 혁파되었다. 조혼이 금지되고 과부 재가가 허용되었다. 오백 년 조선의 틀이 무너지고 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "A former slave and his former master standing as legal equals in a new Joseon government office, the clerk recording them both simply as citizens, the disbelief and adjustment on their faces visible, ink wash painting with the radical human reality of social transformation",
            narration: "노비 문서가 불태워졌다. 태어날 때부터 정해진 신분이 법으로 사라졌다. 그러나 일본 군대가 경복궁 안에 주둔한 채 내려진 개혁이었다. 누구를 위한 변화인가, 묻지 않을 수 없었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gojong watching the reform process from a position of diminished authority, Japanese military officers and pro-reform Korean officials dominating the decision-making in the foreground, his expression showing both the hope for modernization and the humiliation of foreign leverage, ink wash painting",
            narration: "사신은 논한다. 갑오개혁의 내용은 진보적이었으나 그 맥락은 굴욕적이었다. 일본의 압력이 없었다면 이 개혁이 이 속도로 이루어졌겠는가. 외세의 도구가 된 변화를 개혁이라 부를 수 있는가. 역사는 이 질문에 아직 답하지 않는다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1895,
      title: "을미사변",
      desc: "일본 공사 미우라 고로의 지휘 아래 일본 낭인들이 경복궁에 난입하여 명성황후를 시해하는 전대미문의 만행을 저지르다.",
      sillokEntry: {
        articleId: "ITKC_JT_Z0_A32_08A_20A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_Z0_A32_08A_20A_00010_2005_001_XML",
        date: "고종 32년 을미(1895) 8월 20일",
        title: "일본 낭인들이 경복궁에 난입하여 왕비를 시해하다",
        translation: "새벽에 일본 공사 미우라 고로의 지휘 하에 일본 군대와 낭인 무리가 경복궁 건청궁에 난입하였다. 이들이 왕비 민씨를 시해하고 시신을 불태우니, 천하에 이런 만행이 없었다. 국왕은 옥호루에서 이 참상을 목격하였으나 막을 수 없었다. 세상이 이 소식을 듣고 통곡하지 않는 자가 없었다.",
      },
      storyEntry: {
        title: "건청궁의 새벽",
        scenes: [
          {
            imagePrompt: "Japanese ronin soldiers breaking through the gates of Gyeongbokgung palace in the early pre-dawn darkness, torches and drawn swords, court guards unable to stop the advance, the massive palace walls overwhelmed by the sudden violent intrusion, ink wash painting style with chaos and darkness",
            narration: "1895년 8월 20일 새벽, 일본 공사 미우라 고로의 지시를 받은 낭인들이 경복궁 문을 부수고 들이닥쳤다. 건청궁으로 향하는 발걸음은 멈추지 않았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Gojong in the Okhornu pavilion looking in horror at the burning courtyard of Geoncheonggung, unable to intervene, surrounded by helpless court officials, the firelight reflected in his eyes, ink wash painting style with anguish and helplessness",
            narration: "고종은 옥호루에서 그 참상을 지켜보았다. 막을 수 없었다. 명성황후는 건청궁 곤녕합에서 시해되었고 시신은 불태워졌다. 역사에 이런 만행이 없었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "King Gojong alone in a dark palace chamber after the assassination, candle burning low, his face showing profound grief and fear, the empty royal seal on the desk beside him, ink wash painting style with desolate atmosphere and deep shadows",
            narration: "왕비를 잃은 왕은 공포 속에 덕수궁에 갇혔다. 이듬해 봄 아관파천으로 러시아 공사관으로 피신하였다. 나라의 주권은 이미 기울기 시작하고 있었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_Z0_A32_08A_20A_00010_2005_001_XML",
      },
    },
    {
      year: 1897,
      title: "대한제국 선포",
      desc: "아관파천 이후 러시아 공사관에서 환궁하여 원구단을 쌓고 황제로 등극함으로써 자주 독립국 대한제국의 수립을 천명하다.",
      sillokEntry: {
        articleId: "ITKC_JT_Z0_A34_10A_12A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_Z0_A34_10A_12A_00010_2005_001_XML",
        date: "광무 원년(1897) 10월 12일",
        title: "황제 즉위식과 대한제국 수립 반포",
        translation: "임금께서 원구단에 나아가 즉위 의식을 거행하셨다. 백관이 자리를 함께하는 가운데 하늘에 고하여 이르시기를, '짐이 생각건대 우리 나라가 개국 이래로 하늘의 명을 받아 열성조가 서로 이어오다가 오늘에 이르러 짐이 대통을 이어 만기를 주재하니, 국호를 바로잡아 일대의 치적을 빛내지 않을 수 없다. 이에 국호를 대한으로 고치고 연호를 광무로 세우노니, 천하에 널리 알려 모두 알게 하라.' 하셨다.",
      },
      storyEntry: {
        title: "황제의 나라",
        scenes: [
          {
            imagePrompt: "Emperor Gojong in Western-style imperial regalia standing before Hwangudan altar in Seoul, surrounded by officials in modern uniform and traditional dress mixed, ink wash painting with golden ceremonial atmosphere, a nation declaring its sovereignty at twilight",
            narration: "광무 원년 10월, 고종은 원구단에서 하늘에 고하고 황제로 즉위하였다. 조선은 대한제국이 되었다. 그것은 자주의 선언이었으나, 동시에 기울어진 나라의 마지막 몸부림이기도 하였다.",
            durationMs: 6000,
          },
          {
            imagePrompt: "The Hwangudan altar complex in Seoul illuminated by ceremonial lanterns at night, officials in a mix of traditional and Western-style uniforms arranged in formal rows, the imperial yellow canopy above the throne, ink wash painting style with gold and deep blue tones",
            narration: "대한제국. 500년 조선이 황제의 나라로 거듭났다. 청나라의 연호 대신 광무(光武)를 세웠다. 하늘 아래 오직 하나의 황제만 있는 것이 아님을 세상에 선포한 것이었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Emperor Gojong reviewing modernization projects — telegraph lines, new roads, military reforms — spread on a table before him, advisors presenting documents, yet through the window the silhouettes of foreign warships visible in the harbor, ink wash painting with symbolic tension between aspiration and threat",
            narration: "광무개혁이 시작되었다. 전화선이 가설되고 근대적 제도가 도입되었다. 그러나 러시아도, 일본도, 미국도 제 이익을 위해 움직이고 있었다. 황제의 꿈과 현실 사이의 거리는 너무나 멀었다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_Z0_A34_10A_12A_00010_2005_001_XML",
      },
    },
  ],
  detail: {
    date: "1852년 9월 8일 ~ 1919년 1월 21일",
    hanjaChar: "帝",
    title: "고종 광무황제 — 대한제국의 꿈",
    desc: "조선 제26대 국왕이자 대한제국 초대 황제. 열강의 각축 속에서 자주 근대화를 위해 분투하였으나, 끝내 나라를 지켜내지 못한 비운의 군주. 갑오개혁·광무개혁 등 근대화 정책을 추진하였고, 1897년 대한제국 선포로 황제의 자리에 올라 국권 수호의 마지막 불꽃을 피워 올렸다.",
    unofficialHistory: "고종이 아관파천을 결행하던 날 밤, 덕수궁 깊숙한 곳에서 홀로 촛불을 밝히고 무릎을 꿇어 하늘에 기도를 올렸다는 이야기가 궁녀들 사이에 오래도록 전해 내려온다. 그 기도의 내용은 누구도 듣지 못하였으나, 이튿날 새벽 황제의 눈이 붉게 부어 있었다고 하니, 그것이 나라를 잃어가는 군주의 통곡이었음을 모르는 이가 없었다고 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "황제의 꿈, 기울어진 나라의 마지막 불꽃",
    figures: [
      { name: "흥선대원군 이하응", role: "생부이자 섭정. 쇄국 정책을 고수하며 왕실 권위 재건에 힘썼으나, 아들 고종과 며느리 명성황후와의 정치적 갈등으로 권좌에서 물러났다." },
      { name: "명성황후 민씨", role: "고종의 왕비. 탁월한 정치 감각으로 조정을 주도하였으나, 친러 정책에 위협을 느낀 일본에 의해 1895년 을미사변으로 시해되었다." },
      { name: "김옥균", role: "급진 개화파의 영수. 1884년 갑신정변을 주도하여 단기간의 개혁을 꾀하였으나 삼일 만에 실패하고 망명하였다." },
      { name: "이토 히로부미", role: "일본 초대 내각총리대신. 을사늑약 체결을 주도하고 초대 조선 통감으로 부임하여 대한제국의 주권을 잠식하였다." },
    ],
  },
  sillokEntry: {
    date: "광무 원년(1897) 10월 12일",
    title: "황제 즉위식과 대한제국 수립 반포",
    original: "上御圜丘壇, 行卽阼禮. 百官陪位, 告天曰: 朕이 惟我邦이 自開國以來로 受命于天하야 列聖相承하시되 迄于今日하야 朕이 承大統하야 主宰萬幾하니 不可不釐正國號하야 以光一代之治라하야 玆改國號曰大韓하고 建元光武하노니 布告天下하야 咸使知之하라.",
    translation: "임금께서 원구단에 나아가 즉위 의식을 거행하셨다. 백관이 자리를 함께하는 가운데 하늘에 고하여 이르시기를: '짐이 생각건대 우리 나라가 개국 이래로 하늘의 명을 받아 열성조가 서로 이어오다가 오늘에 이르러 짐이 대통을 이어 만기를 주재하니, 국호를 바로잡아 일대의 치적을 빛내지 않을 수 없다. 이에 국호를 대한으로 고치고 연호를 광무로 세우노니, 천하에 널리 알려 모두 알게 하라.' 하셨다.",
    commentary: "사신은 논한다. 원구단에 제천하고 황제의 자리에 오름은 실로 수백 년 만에 되찾으려 한 자주의 명분이요, 잃어가는 사직을 붙들려 한 군주의 안간힘이었다. 그러나 사세를 살피건대, 대한제국의 선포는 열강이 한반도를 저마다의 이해에 따라 나누어 가지려 하던 바로 그 시각에 이루어진 것이니, 허울뿐인 황제의 옥새가 어찌 총포 앞에서 나라를 지킬 수 있었겠는가. 고종은 어질었으나 시세를 운용하는 기략이 부족하였고, 뜻은 높았으나 그 뜻을 뒷받침할 군사와 재력이 없었다. 외세를 외세로써 막으려 하였으나 러시아도, 미국도, 청도 결국은 제 이익을 위해 돌아섰으니, 고종의 외교는 모래 위에 쌓은 성곽과 같았다. 역사는 무능한 군주를 쉬이 단죄하거니와, 기울어진 나라를 홀로 떠받치려 한 한 사람의 고독과 무력감 또한 기록하지 않는다면, 그 기록은 온전하다 할 수 없을 것이다.",
  },
};
