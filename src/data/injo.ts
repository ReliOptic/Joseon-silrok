import type { KingData } from '../types/king.types';

export const INJO_DATA: KingData = {
  id: "injo",
  transitionFromPrev: "광해군이 폐위되었다. 새 왕은 명에 사대를 약속했다.",
  events: [
    {
      year: 1623,
      title: "인조반정",
      desc: "서인 세력이 광해군의 패륜과 중립 외교를 명분으로 반정을 일으켜 광해군을 폐위하고, 능양군을 조선 제16대 왕으로 추대하다.",
      storyEntry: {
        title: "반정 — 명분의 칼",
        scenes: [
          {
            imagePrompt: "Western faction officials in secret night meeting planning the coup against Gwanghaegun, maps and candles on the table, faces intense with resolve and conspiracy, ink wash painting with deep shadows and the charged atmosphere of treason against tyranny",
            narration: "계해년 봄, 이귀·김류·이괄이 창의문을 넘어 반정을 일으켰다. 명분은 폐모살제와 중립 외교였다. 훈련대장 이흥립이 문을 열었고, 하룻밤 만에 왕이 바뀌었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Neungyanggun being greeted by rebel commanders at the palace gates at dawn, formal robes being draped over his shoulders, the atmosphere of a hastily arranged enthronement, ink wash painting with ambiguous atmosphere mixing liberation and opportunism",
            narration: "능양군은 반정 세력이 선택한 왕이었다. 광해군의 패악을 바로잡는다는 의로운 이름 아래, 정권을 잃었던 서인이 다시 조정을 잡았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The new King Injo issuing his first royal proclamation in Injeongjeon Hall, pledging loyalty to Ming China and restoration of Confucian principles, officials in rows before him, ink wash painting with formal ceremonial light but the subtle weight of a new political order imposed",
            narration: "사신은 논한다. 인조반정은 의로운 칼이었으나, 그 칼이 조선을 향해 돌아오는 데는 오래 걸리지 않았다. 친명의 명분이 병자호란의 씨앗이 되었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1624,
      title: "이괄의 난",
      desc: "반정 공신 이괄이 논공행상에 불만을 품고 거병하여 한양을 점령하자, 인조는 공주로 몽진하는 치욕을 겪고 이괄이 평정된 뒤에야 환도하다.",
      storyEntry: {
        title: "공신의 칼날이 돌아오다",
        scenes: [
          {
            imagePrompt: "General Yi Gwal in military armor raising his banner of revolt in the northern frontier, his troops falling into formation around him, faces grim with grievance over the inequitable rewards after the coup, ink wash painting with martial tension and northern winter landscape",
            narration: "갑자년, 반정의 일등 공신 이괄이 칼을 들었다. 논공행상에서 홀대받았다는 분노였다. 반정으로 세운 나라가 반정의 공신에게 칼을 맞았다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Injo in travel robes fleeing south toward Gongju through snow, a small royal retinue hurrying along the road, the capital Hanyang abandoned behind them, ink wash painting with the bitter cold and humiliation of a king's second flight within two years of taking the throne",
            narration: "이괄의 군세가 한양을 점령하였다. 즉위한 지 두 해도 되지 않아 인조는 또다시 몽진길에 올랐다. 공주로 피란하는 임금의 발걸음이 무거웠다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "The aftermath of the suppression of Yi Gwal's rebellion — scattered rebel forces, a restored but sobered court returning to Hanyang, King Injo's expression showing relief mixed with deep unease about the fragility of his rule, ink wash painting with subdued return-to-order atmosphere",
            narration: "사신은 논한다. 이괄의 난은 반정이 낳은 내상이었다. 공신들의 불만이 처음부터 조정 안에 쌓여 있었으니, 명분으로 세운 왕권이 명분 없는 혼란을 부른 것이었다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1627,
      title: "정묘호란",
      desc: "후금의 3만 대군이 압록강을 건너 침공하자 인조는 강화도로 피난하고, 후금과 형제의 맹약을 맺는 굴욕적인 강화 조약을 체결하다.",
      storyEntry: {
        title: "형제의 맹약",
        scenes: [
          {
            imagePrompt: "Jurchen cavalry of the Later Jin crossing the frozen Yalu River in winter, banners flying in the cold air, the scale of thirty thousand troops overwhelming the border defenses, ink wash painting with cold blue-white palette of invasion and unstoppable force",
            narration: "정묘년 1월, 후금의 3만 대군이 압록강을 건넜다. 조선 조정은 친명 외교를 고수하면서도 군비를 게을리 하였다. 방어선은 순식간에 무너졌다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "King Injo's court embarking on boats to cross to Ganghwa Island in winter, the urgent and undignified scene of a royal flight by sea, officials carrying documents and treasures, ink wash painting with grey winter sea and the chaos of emergency evacuation",
            narration: "인조는 강화도로 피난하였다. 강 건너편에서 후금군이 진격을 멈추고 협상을 요구하였다. 형제의 나라가 되라는 조건이었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Joseon and Jurchen officials conducting the peace negotiation ceremony, exchanging the sworn document, Joseon officials visibly pained by the inferior position being imposed, ink wash painting with formal but humiliating diplomatic atmosphere",
            narration: "사신은 논한다. 형제의 맹약은 굴욕이었으나 병자호란의 예고편이기도 하였다. 조정이 이때 현실을 직시하였다면, 9년 뒤의 참화를 막을 수 있었을지 모른다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1636,
      title: "병자호란",
      desc: "국호를 청으로 고친 홍타이지가 군신 관계를 요구하며 12만 대군을 이끌고 재침하자, 인조는 남한산성으로 들어가 45일간의 항전을 이어가다.",
      storyEntry: {
        title: "청군이 온다",
        scenes: [
          {
            imagePrompt: "Massive Qing army crossing the frozen Yalu River in winter, hundreds of cavalry and infantry stretching to the horizon, banners in the grey sky, ink wash painting with overwhelming scale, cold blue and white palette of invasion",
            narration: "병자년 12월, 청 태종 홍타이지의 12만 대군이 압록강을 건넜다. 군신의 예를 요구하는 국서를 조선이 거부한 지 열흘도 되지 않아서였다. 그 속도에 조정은 대비조차 하지 못하였다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "King Injo and court officials fleeing through Seoul streets at night in urgent procession toward Namhansanseong fortress, torchlight in the darkness, snow falling, ink wash painting with desperate urgency and bitter cold atmosphere",
            narration: "인조는 강화도로 가는 길이 이미 막혔다는 소식을 들었다. 남은 선택지는 하나였다. 임금의 수레가 남한산성을 향해 눈보라 속으로 달렸다. 백성은 길 위에 남겨졌다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Joseon king and generals on the walls of Namhansanseong fortress looking down at the vast Qing encampment surrounding the mountain, fires glowing in the valley below, ink wash painting with siege atmosphere, the isolation of the besieged garrison palpable",
            narration: "남한산성에 들어선 순간, 포위가 완성되었다. 성 안에는 50일을 버티기에도 부족한 군량이 있었다. 척화의 함성은 성벽 안에서 점점 작아지고, 굶주림은 점점 커졌다.",
            durationMs: 5000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_P0_A14_12A_01A_00010",
      },
    },
    {
      year: 1637,
      title: "삼전도의 굴욕",
      desc: "남한산성이 한계에 달하자 인조는 삼전도에 나아가 청 태종 홍타이지 앞에 삼배구고두례(三拜九叩頭禮)를 행하고 항복하며, 소현세자와 봉림대군을 볼모로 심양에 보내다.",
      sillokEntry: {
        articleId: "ITKC_JT_P0_A15_01A_30A_00010",
        date: "인조 15년 정축(1637) 1월 30일",
        title: "삼전도에서 청 태종에게 삼배구고두례를 행하고 항복하다",
        translation: "임금께서 남한산성을 나와 삼전도에 나아가 청 황제 앞에서 삼배구고두례를 행하였다. 임금께서 눈물을 흘리며 절하시니 좌우의 신하들이 모두 얼굴을 가리지 않을 수 없었다. 세자와 여러 군이 볼모로 함께 떠나게 되었고, 청 황제는 항복을 받은 뒤에야 임금의 환도를 허락하였다.",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_P0_A15_01A_30A_00010",
      },
      storyEntry: {
        title: "삼배구고두",
        scenes: [
          {
            imagePrompt: "King Injo in ceremonial robes walking out from Namhansanseong fortress gate into the snow-covered plain, ministers following in silence, the Qing army waiting in formation in the distance, ink wash painting with devastating stillness, white snow and grey sky",
            narration: "정축년 정월, 인조는 성문을 열었다. 45일간의 항전이 끝났다. 임금의 발이 눈 위에 닿는 순간, 조선이 2백 년간 지켜온 것들이 함께 무너지기 시작하였다.",
            durationMs: 6000,
          },
          {
            imagePrompt: "King Injo kneeling three times and prostrating nine times before Emperor Hongtaiji seated on a high platform at Samjeondo, Joseon ministers watching with faces hidden in their sleeves, snow and mud on the ground, ink wash painting with maximum humiliation and historical gravity",
            narration: "삼전도의 수항단 앞에서 인조는 세 번 절하고 아홉 번 이마를 땅에 찧었다. 삼배구고두. 신하가 황제에게 바치는 최고의 굴복이었다. 좌우의 신하들이 얼굴을 가렸다.",
            durationMs: 6500,
          },
          {
            imagePrompt: "Young Crown Prince Sohyeon and Prince Bongrim being led away into the Qing camp as hostages, looking back at their father the king who stands motionless watching, ink wash painting with heartbreak of separation, cold winter light, the two figures diminishing in the distance",
            narration: "소현세자와 봉림대군이 심양으로 끌려갔다. 인조는 그 뒷모습을 바라보았다. 명분을 지키려다 아들을 잃었고, 의리를 지키려다 백성을 잃었다. 역사는 그 침묵을 오래 기억한다.",
            durationMs: 6000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_P0_A15_01A_30A_00010",
      },
    },
    {
      year: 1645,
      title: "소현세자 급서",
      desc: "청에서 8년의 볼모 생활을 마치고 귀국한 소현세자가 귀국 두 달 만에 갑자기 사망하자, 인조는 왕세자 자리를 봉림대군에게 넘기고 세자빈 강씨를 사사하다.",
      storyEntry: {
        title: "돌아온 세자, 사라진 희망",
        scenes: [
          {
            imagePrompt: "Crown Prince Sohyeon returning to Joseon after eight years as a hostage in Shenyang, walking through the palace gates with a changed bearing — more worldly, carrying Western scientific instruments and books — court officials watching with unease, ink wash painting with the charged atmosphere of a changed man returning to an unchanged court",
            narration: "을유년 봄, 소현세자가 심양에서 돌아왔다. 8년의 볼모 생활이 그를 바꾸어 놓았다. 서양 천문기기와 천주교 서적을 품에 안고 온 세자를, 인조는 반갑게 맞이하지 않았다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Crown Prince Sohyeon suddenly gravely ill in his palace chambers just two months after his return, royal physicians in attendance, King Injo standing at the doorway with an unreadable expression, ink wash painting with ominous tension and the clinical coldness of a suspicious death",
            narration: "귀국한 지 두 달 만에 소현세자가 급서하였다. 사인은 학질이라 하였으나, 온몸이 검게 변하고 이목구비에서 피가 흘렀다는 기록이 남아 있다. 실록도 그 이상을 말하지 않는다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Crown Princess Gang being led to execution after being wrongly accused, her children being expelled from the palace, the empty quarters of the late Crown Prince Sohyeon silent and dark, ink wash painting with the atmosphere of a court tragedy where suspicion has devoured the innocent",
            narration: "사신은 논한다. 세자빈 강씨마저 사사되고 그 자식들은 제주도로 쫓겨났다. 청에서 새 세상을 품고 돌아온 세자는 두 달 만에 사라졌다. 조선이 놓친 또 하나의 가능성이었다.",
            durationMs: 5500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
  ],
  detail: {
    date: "1623년 3월 ~ 1649년 5월",
    hanjaChar: "屈",
    title: "인조 — 명분과 현실이 충돌하다",
    desc: "인조는 명분의 칼로 왕위에 올랐으나, 그 명분이 결국 왕조 최대의 재앙을 불렀다. 반정의 정당성은 친명 의리 위에 세워졌고, 인조는 그 의리를 끝까지 붙들었다. 후금이 청으로 강성해지는 동안 조선 조정은 척화와 주화 사이에서 갈팡질팡하였고, 두 차례의 호란은 백성의 삶을 초토화하였다. 삼전도의 눈 덮인 벌판에서 황제 앞에 이마를 조아린 순간, 조선이 2백 년간 섬겨 온 대명 의리는 한낱 종이 위의 글자로 전락하였다. 인조의 재위는 이념과 현실이 충돌할 때 이념을 앞세운 지도자가 어떤 대가를 백성에게 치르게 하는지를 역사에 새긴 가장 뼈아픈 증거다.",
    unofficialHistory: "삼전도에서 항복을 마치고 환궁한 인조가 밤마다 악몽에 시달렸는데, 꿈속에 갑옷 차림의 광해군이 나타나 '네가 나를 몰아낸 명분이 무엇이었느냐'고 물었고, 인조는 한마디도 대답하지 못한 채 잠에서 깨어났다는 이야기가 전해진다.",
    unofficialHistorySourceLevel: 'tradition',
    hookLine: "삼배구고두례, 무릎 꿇은 군주",
    figures: [
      { name: "최명길(崔鳴吉)", role: "현실을 직시하여 청과의 강화를 주장한 주화론의 중심 인물로, 삼전도 항복 문서를 직접 작성하다" },
      { name: "김상헌(金尙憲)", role: "죽음을 무릅쓰고 척화를 고집한 척화파의 수장으로, 최명길이 쓴 항복 문서를 찢어 버린 것으로 유명하다" },
      { name: "소현세자(昭顯世子)", role: "심양에서 볼모로 지내며 청의 문물을 익혔으나 귀국 후 의문의 죽음을 맞이한 인조의 장남" },
      { name: "홍타이지(洪太極)", role: "후금을 청으로 개명하고 조선에 군신 관계를 요구하며 병자호란을 일으킨 청 태종" },
    ],
  },
  sillokEntry: {
    date: "仁祖 十五年 丁丑 正月",
    title: "삼전도에서 청 태종에게 삼배구고두례를 행하고 항복하다",
    original: "上出南漢山城 詣三田渡 行三拜九叩頭之禮於淸帝前 上涕泣而拜 左右莫不掩面 世子及君等 以質子從行 淸帝受降訖 乃許上還都",
    translation: "임금께서 남한산성을 나와 삼전도에 나아가 청 황제 앞에서 삼배구고두례를 행하였다. 임금께서 눈물을 흘리며 절하시니 좌우의 신하들이 모두 얼굴을 가리지 않을 수 없었다. 세자와 여러 군이 볼모로 함께 떠나게 되었고, 청 황제는 항복을 받은 뒤에야 임금의 환도를 허락하였다.",
    commentary: "사신은 논한다. 삼전도의 치욕은 한 임금의 무능함에서 비롯된 것이 아니라, 한 왕조가 현실을 외면한 채 이념의 깃발만을 높이 든 결과였다. 인조반정 이래 조정은 대명 의리를 국시(國是)로 삼아 청의 성장하는 힘을 눈 감고 외면하였으며, 백성의 안위보다 명분의 순결을 더 귀히 여겼다. 최명길이 홀로 현실의 목소리를 내었으나, 조정의 공론은 척화의 함성 속에 묻혀 버렸다. 임금이 눈밭 위에 이마를 조아리는 동안, 성리학의 의리는 그 무게를 이미 잃은 지 오래였다. 이념이 현실을 이길 수 없음을 역사는 이토록 잔혹하게 증명하였으니, 위정자가 명분을 내세워 백성을 전장으로 내모는 일이 얼마나 무거운 죄인지를 이 날의 기록은 영원히 묻고 있다.",
  },
};
