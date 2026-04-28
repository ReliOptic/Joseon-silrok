import type { KingData } from '../types/king.types';

export const TAEJO_DATA: KingData = {
  id: "taejo",
  events: [
    {
      year: 1392,
      title: "조선 건국",
      desc: "고려를 무너뜨리고 새 왕조 조선을 개창하여 초대 왕으로 즉위하다.",
      unofficialHistorySourceLevel: 'sillok',
      storyEntry: {
        title: "하늘의 명으로 왕위에 오르다",
        scenes: [
          {
            imagePrompt: "A Korean general in full ceremonial armor kneeling before a wooden throne in a grand hall, surrounded by rows of ministers in formal court robes bowing deeply, ink wash painting style, Joseon dynasty, dramatic lighting from above",
            narration: "1392년 7월, 개경의 수창궁에 무릎 꿇은 신하들의 숨소리만이 가득했다. 이성계는 떨리는 두 손을 모아 쥐며 자신이 이 자리에 설 수밖에 없었던 이유를 되새겼다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "A king reading a royal proclamation scroll in a great hall, officials standing in rows on both sides, sunlight streaming through paper screen doors, traditional East Asian ink painting, Joseon court atmosphere",
            narration: "즉위 교서가 낭독되었다. '하늘이 많은 백성을 낳아서 군장을 세워, 이를 길러 서로 살게 하고, 이를 다스려 서로 편안하게 한다.' 새 왕의 목소리는 크고 낮았으나, 그 안에는 오백 년을 버텨야 할 무게가 담겨 있었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Crowds of common people outside a palace gate looking up at proclamation banners, some kneeling, some weeping, misty mountains in the background, traditional Korean ink wash painting with subtle color wash",
            narration: "중외의 대소 신료와 군민들에게 교지가 전해졌다. 고려의 이름은 사라지고, 조선이라는 두 글자가 동쪽 하늘 아래 처음으로 울려 퍼졌다.",
            durationMs: 4500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_A0_A01_07A_28A_00030_2005_001_XML",
      },
      sillokEntry: {
        articleId: 'ITKC_JT_A0_A01_07A_28A_00030_2005_001_XML',
        sourceUrl: '',
        date: '태조 1년 임신(1392) 7월 28일',
        title: '태조의 즉위 교서',
        original: '',
        translation: '중외(中外)의 대소 신료(大小臣僚)와 한량(閑良)ㆍ기로(耆老)ㆍ군민(軍民)들에게 교지를 내리었다. "왕은 이르노라. 하늘이 많은 백성을 낳아서 군장(君長)을 세워, 이를 길러 서로 살게 하고, 이를 다스려 서로 편안하게 한다. 그러므로, 군도(君道)가 득실(得失)이 있게 되어, 인심(人心)이 복종과 배반함이 있게 되고, 천명(天命)의 떠나가고 머물러 있음이 매였으니, 이것은 이치의 떳떳함이다."',
        commentary: '',
      },
    },
    {
      year: 1394,
      title: "한양 천도",
      desc: "개경에서 한양으로 수도를 옮겨 새 왕조의 터전을 마련하다.",
      unofficialHistorySourceLevel: 'sillok',
      storyEntry: {
        title: "오백 년 도읍지를 옮기다",
        scenes: [
          {
            imagePrompt: "A long procession of court officials and royal guards marching through autumn mountains on a narrow road, carrying banners and palanquins, viewed from a high hillside, traditional Korean ink wash painting with golden autumn foliage",
            narration: "1394년 10월, 태조의 행렬이 개경을 등지고 남쪽으로 내려갔다. 신하들은 짐을 꾸려 뒤를 따랐고, 수백 년 고려의 기억이 그 뒷모습을 바라보고 있었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Royal court officials arriving at a wide river plain below mountains, surveying an empty valley where a new capital will be built, scrolls and maps spread on a table under a tent, ink wash painting style",
            narration: "한강 북쪽의 너른 땅에 도착하자, 신하들은 지도를 펼쳤다. 북악을 등에 업고 한강을 앞에 둔 이 자리에, 새 왕조의 뿌리가 내려질 터였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Officials in formal robes divided into two groups, one group staying behind in the old capital, one group moving forward, with an ink brush administrative document in the foreground, traditional East Asian painting style",
            narration: "각 관청의 관원 2명씩은 송경에 남아 행정의 실을 이어 갔고, 최영지와 우인열이 분도평의사사를 맡았다. 두 도읍 사이에 나라의 뼈대가 세워지고 있었다.",
            durationMs: 4500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_A0_A03_10A_25A_00010_2005_002_XML",
      },
      sillokEntry: {
        articleId: 'ITKC_JT_A0_A03_10A_25A_00010_2005_002_XML',
        sourceUrl: '',
        date: '태조 3년 갑술(1394) 10월 25일',
        title: '한양으로 서울을 옮기다',
        original: '',
        translation: '한양으로 서울을 옮기었다. 각 관청의 관원 2명씩은 송경에 머물러 있게 하고, 문하 시랑찬성사 최영지(崔永沚)와 상의문하부사 우인열(禹仁烈) 등으로 분도평의사사(分都評議使司)를 삼았다.',
        commentary: '',
      },
    },
    {
      year: 1395,
      title: "경복궁 창건",
      desc: "정도전이 이름 붙인 경복궁을 완공하여 조선 왕실의 법궁으로 삼다.",
      unofficialHistorySourceLevel: 'sillok',
      storyEntry: {
        title: "이름 하나에 왕조의 뜻을 담다",
        scenes: [
          {
            imagePrompt: "A Joseon dynasty scholar-official unrolling a long scroll on a wooden desk, writing calligraphy with a large brush by candlelight, ink stone and brushes arranged neatly, traditional Korean ink wash painting",
            narration: "1395년 10월, 판삼사사 정도전은 새 궁궐의 이름을 지으라는 명을 받들었다. 그는 붓을 들기 전 오랫동안 창 너머 궁궐의 윤곽을 바라보았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "A grand Korean palace complex viewed from above, with multiple tiled-roof halls arranged in a formal grid, mountains in the background, morning mist rising, traditional ink wash panoramic painting",
            narration: "경복궁(景福宮)이라 이름 붙인 뒤, 정도전은 그 의의를 글로 올렸다. 근정전에서 정치를 부지런히 하고, 사정전에서 생각을 깊이 하며, 강녕전에서 몸을 편안히 하라는 뜻이었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "The king receiving a formal document from a kneeling official in a new palace throne hall, other officials witnessing in two rows, fresh wooden pillars still gleaming, ink wash painting with delicate architectural detail",
            narration: "태조는 정도전이 올린 이름들을 차례로 읽었다. 경복궁, 근정전, 사정전, 강녕전… 각각의 이름에는 새 왕조가 무엇을 향해 서야 하는지가 새겨져 있었다.",
            durationMs: 4500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_A0_A04_10A_07A_00020_2005_002_XML",
      },
      sillokEntry: {
        articleId: 'ITKC_JT_A0_A04_10A_07A_00020_2005_002_XML',
        sourceUrl: '',
        date: '태조 4년 을해(1395) 10월 7일',
        title: '판삼사사 정도전에게 새 궁궐 전각의 이름을 짓게 하다',
        original: '',
        translation: '판삼사사 정도전(鄭道傳)에게 분부하여 새 궁궐의 여러 전각의 이름을 짓게 하니, 정도전이 이름을 짓고 아울러 이름 지은 의의를 써서 올렸다. 새 궁궐을 경복궁(景福宮)이라 하고, 연침(燕寢)을 강녕전(康寧殿)이라 하고, 동쪽에 있는 소침(小寢)을 연생전(延生殿)이라 하고, 서쪽에 있는 소침(小寢)을 경성전(慶成殿)이라 하고, 연침(燕寢)의 남쪽을 사정전(思政殿)이라 하고, 또 그 남쪽을 근정전(勤政殿)이라 하였다.',
        commentary: '',
      },
    },
    {
      year: 1396,
      title: "한양 도성 축조",
      desc: "백악·낙산·목멱·인왕을 잇는 도성을 쌓아 수도의 방어 체계를 갖추다.",
    },
    {
      year: 1397,
      title: "《경제육전》 반포",
      desc: "정도전의 주도 아래 조선 최초의 법전 《경제육전》을 편찬하여 반포하다.",
    },
    {
      year: 1398,
      title: "제1차 왕자의 난",
      desc: "정안군 이방원이 정도전 일파를 제거하고 세자 방석을 폐위하니, 태조께서 깊은 실의에 빠져 왕위를 내놓으시다.",
    },
  ],
  detail: {
    date: "태조 3년 9월 9일",
    hanjaChar: "國",
    title: "한양 천도와 새 왕조의 기틀",
    desc: "새 왕조를 세우고 나라의 이름을 조선이라 하다. 태조께서 풍수의 길지를 살피시고 한강 북쪽 한양으로 수도를 옮기시니, 오백 년 왕업의 터전이 이로부터 비롯되었다. 북악을 뒤에 두고 한강을 앞에 바라보는 도읍에 궁궐과 종묘, 사직을 세워 새 왕조의 법도를 갖추어 나가셨다.",
    unofficialHistory: "전하께서 천도를 앞두고 무학대사와 함께 몸소 산세를 살피러 다니셨는데, 신하들은 추위에 발이 얼어도 불평 한마디 없이 뒤를 따랐다고 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    figures: [
      { name: "정도전", role: "개국 공신, 조선의 설계자. 경복궁 명명과 《경제육전》 편찬을 주도하다." },
      { name: "무학대사", role: "왕사. 한양 천도 시 풍수지리를 살펴 도읍 입지를 결정하는 데 조언하다." },
      { name: "이방원", role: "태조의 다섯째 아들. 제1차 왕자의 난을 일으켜 실권을 장악하다." },
    ],
  },
  sillokEntry: {
    date: "태조 3년 갑술 9월 병술",
    title: "왕이 새 도읍 한양으로 거둥하다",
    original: "上率百官移御漢陽新都，定鼎之基自此始焉。命鄭道傳等議定宮闕宗廟社稷之位。",
    translation: "임금께서 백관을 거느리고 한양 신도로 거둥하시니, 나라의 도읍이 정해지는 기틀이 이로부터 시작되었다. 정도전 등에게 명하여 궁궐과 종묘, 사직의 위치를 의논하여 정하게 하셨다.",
    commentary: "사신은 논한다. 태조께서 개경의 고려 구신들과 결별하고 한양에 새 왕조의 뿌리를 내리셨으니, 이는 단순한 거처의 이동이 아니라 오백 년 역성혁명의 의지를 땅에 새긴 것이었다. 정도전을 앞세워 법과 제도를 세우셨으나, 말년에 왕자들의 골육상쟁을 막지 못하신 채 왕위를 내놓으셨으니, 창업의 빛과 인륜의 비통함이 한 몸에 어린 임금이셨다.",
  },
};
