import type { KingData } from '../types/king.types';

export const SUNJONG_DATA: KingData = {
  id: "sunjong",
  transitionFromPrev: "고종이 강제 양위되었다. 마지막 왕이 옥좌에 올랐다.",
  events: [
    {
      year: 1907,
      title: "즉위",
      desc: "고종의 양위를 받아 대한제국 제2대 황제, 조선 제27대 왕으로 즉위하다.",
      storyEntry: {
        title: "빼앗긴 양위, 강요된 즉위",
        scenes: [
          {
            imagePrompt: "Emperor Gojong being forced to sign abdication documents by Japanese Resident-General officials in a tense palace chamber, his hands shaking, court ministers watching helplessly, the imperial seal placed on the document under duress, ink wash painting style with the suffocating atmosphere of coerced capitulation",
            narration: "정미년 7월, 고종이 퇴위하였다. 헤이그 밀사 사건을 빌미로 일제가 강제로 양위를 압박하였다. 황태자 이척이 뒤를 이어 순종으로 즉위하였다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Emperor Sunjong in full imperial regalia at his enthronement ceremony, the ceremony formally correct but surrounded by Japanese officials and military presence, the hollow grandeur of a sovereignty already stripped, ink wash painting style with the tragic irony of imperial ceremony without imperial power",
            narration: "즉위식은 치러졌다. 황제의 예복이 입혀졌고 백관이 절을 올렸다. 그러나 나라의 외교권은 이미 없었다. 황제의 자리는 있었으나 황제의 권한은 없었다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Emperor Sunjong alone in a quiet palace room after the enthronement, the ceremonial robes heavy on his frame, his gaze distant and inward, the weight of being the last emperor visible in every line of his face, ink wash painting with profound stillness and historical gravity",
            narration: "사신은 논한다. 순종의 즉위는 즉위가 아니었다. 기울어진 나라의 마지막 형식을 유지하기 위해 한 사람이 황제의 이름을 달고 세워진 것이었다. 그 외로움을 누가 헤아릴 수 있겠는가.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1907,
      title: "군대 해산",
      desc: "일제의 강요로 대한제국 군대가 해산되고, 이에 분노한 전국 의병들이 정미의병을 일으켜 무장 항쟁에 나서다.",
      storyEntry: {
        title: "무기를 내려놓을 수 없었다",
        scenes: [
          {
            imagePrompt: "Korean imperial army soldiers being ordered to disband at a military parade ground, Japanese officers overseeing the disarmament, some Korean soldiers weeping as they lay down their weapons, others standing rigid with suppressed fury, ink wash painting style with the humiliation and grief of a military dissolution",
            narration: "정미년 8월, 대한제국 군대가 해산 명령을 받았다. 황제의 조칙이었으나 일제가 강요한 것이었다. 수천 명의 병사들에게 무기를 내려놓으라는 명이 떨어졌다.",
            durationMs: 5000,
          },
          {
            imagePrompt: "Former Korean soldiers refusing to disarm, firing on Japanese troops in Seoul and then fleeing into the mountains to join the righteous army uprising, the spark of Jeongmi Uibyeong visible in their desperate resistance, ink wash painting with dramatic tension and the outbreak of armed resistance",
            narration: "시위대 참령 박승환이 스스로 목숨을 끊었다. '군인으로서 나라를 지키지 못하고 명령에 굴복할 수 없다.' 그 총성이 신호였다. 병사들이 무기를 들고 일어섰다. 정미의병이었다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Righteous army fighters — former soldiers now mixed with farmers and village men — moving through mountain forests with rifles and traditional weapons, determined faces in the predawn darkness, ink wash painting style with the guerrilla energy of popular resistance spreading across the country",
            narration: "사신은 논한다. 조정이 군대를 내줄 때 백성이 들고 일어났다. 정미의병은 전국으로 번졌다. 나라를 잃어가는 과정에서도, 그것을 막으려는 자들이 있었음을 역사는 기록한다.",
            durationMs: 5000,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
    {
      year: 1909,
      title: "안중근 의거",
      desc: "독립 운동가 안중근이 하얼빈 역에서 초대 조선 통감 이토 히로부미를 저격하여 조선 침략의 원흉을 응징하다.",
      sillokEntry: {
        date: "순종 2년 기유(1909) 10월 26일",
        title: "안중근이 하얼빈에서 이토 히로부미를 저격하다",
        translation: "의병장 안중근이 하얼빈 역에서 전 통감 이토 히로부미를 권총으로 저격하여 즉사시켰다. 안중근은 현장에서 체포되었으며, 뤼순 감옥에서 재판을 받게 되었다. 그는 법정에서 이토를 처단한 까닭으로 조선 침략의 죄목 열다섯 가지를 열거하였다.",
      },
      storyEntry: {
        title: "하얼빈 — 총성 하나",
        scenes: [
          {
            imagePrompt: "An Junggeun standing composed on the platform of Harbin station in a dark overcoat, the crowd parting slightly, his gaze fixed and determined, morning light on the station's iron framework above him, ink wash painting style with the taut stillness before a decisive moment",
            narration: "기유년 10월 26일 아침, 하얼빈 역. 안중근은 플랫폼에 섰다. 조선 침략의 원흉 이토 히로부미의 열차가 역으로 들어오고 있었다. 손 안의 권총이 차가웠다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "The moment after the shots are fired at Harbin station, chaos erupting on the platform, Ito Hirobumi falling, Russian soldiers rushing forward, An Junggeun standing still with arms raised in surrender, shouting 'Daehan Dongrib!' in the chaos, ink wash painting style with explosive kinetic energy and frozen moment",
            narration: "세 발의 총성이 울렸다. 이토가 쓰러졌다. 안중근은 두 팔을 들고 외쳤다. '대한 독립 만세.' 러시아 헌병이 달려들었다. 그는 도망치지 않았다.",
            durationMs: 6000,
          },
          {
            imagePrompt: "An Junggeun in prison uniform writing at a desk in Lushun prison, his handwritten calligraphy visible — '為國獻身軍人本分' (To sacrifice for the nation is a soldier's duty), calm and dignified expression, ink wash painting style with the quiet power of a man who has made his peace with history",
            narration: "뤼순 감옥에서 안중근은 마지막 저술을 완성하고 일흔두 점의 유묵을 남겼다. 1910년 3월 26일 순국하였다. 조선이 망하기 다섯 달 전이었다.",
            durationMs: 5500,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
      },
    },
    {
      year: 1910,
      title: "경술국치",
      desc: "일제의 강압 아래 한일병합조약이 체결되어 518년 조선 왕조가 막을 내리고, 순종은 마지막 군주가 되다.",
      sillokEntry: {
        articleId: "ITKC_JT_AA0_A04_08A_29A_00010_2005_001_XML",
        sourceUrl: "https://sillok.history.go.kr/id/ITKC_JT_AA0_A04_08A_29A_00010_2005_001_XML",
        date: "순종 3년 경술(1910) 8월 29일",
        title: "한일병합의 조칙을 반포하다",
        translation: "짐이 덕이 없어 어려운 대업을 이어받아 즉위 이래 오늘에 이르도록 유신 정령에 힘썼으나 원기가 쇠약하고 적폐가 날로 뻗어나 날을 이어 다스림을 기약할 길이 없다. 이에 짐이 대국을 깊이 살피고 단연히 이 거사를 결정하여 한국의 통치를 종전부터 짐이 지극히 신임하는 이웃 나라 대일본 황제 폐하께 양여하여 밖으로 동양의 평화를 굳건히 하고 안으로 팔역 민생을 보전케 하노니, 경들 대소 신민은 국세와 시의를 헤아려 소란을 일으키지 말고 각자 그 업에 편안히 하여 일본제국의 문명한 신정에 복종하여 행복을 함께 누리라.",
      },
      storyEntry: {
        title: "마지막 황제",
        scenes: [
          {
            imagePrompt: "Emperor Sunjong seated alone at his desk in Changdeokgung palace, tears visible on his face, the annexation treaty document before him, the imperial seal lying beside it, court officials standing at a distance in silence, ink wash painting style with profound grief and finality",
            narration: "경술년 8월 29일, 순종은 눈물을 흘렸다. '짐이 부덕하여 종묘사직을 보전하지 못하였으니 선왕들께 면목이 없다.' 그러나 그 손을 움직인 것은 그의 뜻이 아니었다. 조칙의 글자 하나하나는 칼끝으로 새긴 것이었다.",
            durationMs: 6000,
          },
          {
            imagePrompt: "The gates of Gyeongbokgung palace being closed for the last time as Japanese officials walk through, Korean court attendants watching from the sides with bowed heads, the royal banners being taken down, ink wash painting style with the visual weight of historical ending",
            narration: "태조 이성계가 1392년 첫 불꽃을 피운 이래, 스물일곱 임금이 518년을 이어온 조선의 사직이 이날 아침 소리도 없이 꺼졌다. 종묘의 신위들은 응답이 없었다.",
            durationMs: 6000,
          },
          {
            imagePrompt: "Korean people across the country weeping and mourning in the streets on the day of the annexation, an elderly man bowing to the ground, a mother clutching her children, the ordinary faces of grief and loss, ink wash painting style with muted sorrowful tones",
            narration: "나라는 빼앗겼으나 역사는 빼앗기지 않았다. 경복궁의 돌들은 말이 없었으나, 백성의 울음소리는 산하를 뒤흔들었다. 오백 년 왕조의 마지막은 이렇듯 비루하고 장엄하였다.",
            durationMs: 6000,
          },
        ],
        generatedAt: "2026-04-28T00:00:00Z",
        sourceArticleId: "ITKC_JT_AA0_A04_08A_29A_00010_2005_001_XML",
      },
    },
    {
      year: 1926,
      title: "승하와 6·10만세운동",
      desc: "순종이 창덕궁에서 승하하자 민중은 국장일을 기하여 6·10만세운동을 일으켜 나라 잃은 슬픔과 독립의 의지를 다시금 세상에 알리다.",
      storyEntry: {
        title: "마지막 황제의 국장일, 백성의 외침",
        scenes: [
          {
            imagePrompt: "Emperor Sunjong lying peacefully in death in Changdeokgung palace, court attendants in mourning white bowing around him, the palace silent and still, the last light of a dynasty finally extinguished after sixteen years of Japanese colonial rule, ink wash painting style with profound quietude and finality",
            narration: "병인년 4월, 순종이 창덕궁에서 승하하였다. 나라를 잃은 지 16년이 지나 있었다. 조선 제27대 왕이자 대한제국 마지막 황제의 삶이 조용히 닫혔다.",
            durationMs: 5500,
          },
          {
            imagePrompt: "Massive crowds lining the funeral procession route through the streets of Gyeongseong on June 10, Japanese police on alert, young Korean students and activists among the crowd suddenly unfurling independence banners and shouting Manse, the spontaneous eruption of suppressed grief and defiance, ink wash painting style with kinetic crowd energy",
            narration: "6월 10일 국장일, 거리에 백성이 모였다. 장례 행렬이 지나는 순간 곳곳에서 태극기가 펼쳐지고 만세 소리가 터졌다. 슬픔이 저항이 되었다. 6·10만세운동이었다.",
            durationMs: 6000,
          },
          {
            imagePrompt: "Korean students and independence activists being arrested by Japanese police amid the funeral crowds, some still shouting as they are dragged away, the funeral procession continuing in the background, ink wash painting with the defiant dignity of resistance at the moment of mourning",
            narration: "사신은 논한다. 순종의 국장일에 백성이 외친 것은 단순한 애도가 아니었다. 나라를 잃었으나 뜻을 잃지 않았다는 선언이었다. 마지막 왕의 죽음이 독립의 불씨를 되살렸다.",
            durationMs: 5500,
          },
        ],
        generatedAt: '2026-04-29',
      },
    },
  ],
  detail: {
    date: "1907–1910",
    hanjaChar: "終",
    title: "순종 — 518년 왕조의 마지막을 지키다",
    desc: "순종(純宗, 1874–1926)은 조선 제27대 왕이자 대한제국 제2대 황제로, 고종의 강제 퇴위 이후 1907년 즉위하였다. 재위 3년은 조선 역사상 가장 어두운 시간이었다. 일제는 군대를 해산하고 외교권을 박탈하였으며, 끝내 1910년 한일강제병합으로 518년 조선 왕조를 소멸시켰다. 순종은 진정한 통치권을 단 한 번도 행사하지 못한 채 일제의 손에 이끌린 군주였으나, 나라의 마지막 숨결을 온몸으로 품고 역사 앞에 섰다. 그의 생은 비극이었고, 그 비극은 한 왕조의 최후이자 한 민족의 수난의 시작이었다.",
    hookLine: "518년 왕조의 마지막, 빼앗긴 조칙",
    unofficialHistory:
      "경술국치 직후, 순종은 눈물을 흘리며 '짐이 부덕하여 종묘사직을 보전하지 못하였으니 선왕들께 면목이 없다'고 탄식하였다 전해진다. 창덕궁 깊은 곳에 유폐된 순종은 때때로 혼자 선원전에 들러 역대 어진 앞에 오래도록 고개를 숙였으며, 시종들은 감히 그 곁에 다가서지 못하였다고 전해진다.",
    figures: [
      { name: "고종", role: "부황, 일제의 강압으로 강제 퇴위한 대한제국 초대 황제" },
      { name: "이완용", role: "내각총리대신, 한일병합조약 체결의 주도자" },
      { name: "안중근", role: "독립운동가, 이토 히로부미 저격 의거" },
      { name: "데라우치 마사타케", role: "초대 조선 총독, 병합 강행의 집행자" },
    ],
  },
  sillokEntry: {
    date: "순종 3년 경술(1910) 8월 29일",
    title: "한일병합의 조칙을 반포하다",
    original:
      "朕이 不德하야 艱難한 大業을 承하야 臨御以來로 今日에 至하도록 維新政令에 勤勞하얏스나 元氣가 衰耗하고 積弊가 滋蔓하야 時日을 隨하야 治를 期홈이 末由라. 此를 憂悶하야 中夜에 彷徨하거니와 任을 强하야 擧홈이 또한 不能이라. 此에 朕이 大局을 深察하고 斷然히 此擧를 決定하야 韓國의 統治를 從前으로부터 朕이 至重히 信任하는 隣國 大日本皇帝陛下에 讓與하야 外로 東洋의 平和를 鞏固히 하고 內로 八域의 民生을 保全케 하노니 卿等 大小臣民은 國勢와 時宜를 體察하야 煩擾를 生치 말고 各其業에 安하야 日本帝國의 文明한 新政에 服從하야 幸福을 共受하라.",
    translation:
      "짐이 덕이 없어 어려운 대업을 이어받아 즉위 이래 오늘에 이르도록 유신 정령에 힘썼으나 원기가 쇠약하고 적폐가 날로 뻗어나 날을 이어 다스림을 기약할 길이 없다. 이를 근심하고 민망하여 밤중에 방황하거니와 억지로 맡아 일으킴 또한 불능이다. 이에 짐이 대국을 깊이 살피고 단연히 이 거사를 결정하여 한국의 통치를 종전부터 짐이 지극히 신임하는 이웃 나라 대일본 황제 폐하께 양여하여 밖으로 동양의 평화를 굳건히 하고 안으로 팔역 민생을 보전케 하노니, 경들 대소 신민은 국세와 시의를 헤아려 소란을 일으키지 말고 각자 그 업에 편안히 하여 일본제국의 문명한 신정에 복종하여 행복을 함께 누리라.",
    commentary:
      "사신은 논한다. 천하에 스스로 나라를 내준 군주가 있었던가. 그 조칙의 글자 하나하나는 붓으로 쓴 것이 아니라 칼끝으로 새긴 것이니, 순종의 손이 아닌 적의 손이 그것을 움직였음을 후세는 마땅히 알아야 한다. 태조 이성계가 1392년 개경에서 첫 불꽃을 피운 이래, 스물일곱 임금이 오백열여덟 해를 이어온 조선의 사직이 이날 아침 소리도 없이 꺼졌다. 종묘의 신위들은 응답이 없었고, 경복궁의 돌들은 말이 없었으나, 백성의 울음소리는 산하를 뒤흔들었다. 나라는 빼앗겼으나 역사는 빼앗기지 않았으니, 이 치욕의 날을 기록함은 다시는 이 땅의 군주와 백성이 그러한 아침을 맞지 않게 하기 위함이다. 오백 년 왕조의 마지막은 이렇듯 비루하고 장엄하였다.",
  },
};
