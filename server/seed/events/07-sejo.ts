import type { SeedEvent } from '../types.js';

// 제7대 세조 (1455~1468). 출처: 세조실록 (sillok.history.go.kr/id/kga_*)
export const SEJO_EVENTS: SeedEvent[] = [
  {
    king_id: 'sejo',
    year: 1456,
    reign_year: 2,
    lunar_date: '6월 2일',
    title_ko: '사육신 단종 복위 사건',
    title_hanja: '死六臣',
    summary_html:
      '<p>성삼문·박팽년·하위지·이개·유응부·유성원 등이 명 사신 환영 연회를 틈타 세조를 제거하고 단종을 복위시키려 하였으나, 김질의 밀고로 발각되었다. 이른바 <strong>사육신(死六臣)</strong>은 모진 친국 끝에 거열형(車裂刑)에 처해졌다.</p>',
    tags: ['사육신', '단종 복위', '성삼문', '박팽년'],
    sillok: [
      {
        volume: '세조실록 4권, 세조 2년 6월 2일',
        date_lunar: '6월 2일',
        title_ko: '성삼문 등이 거사를 도모하다 발각되다',
        original_html:
          '<p>成三問·朴彭年·河緯地·李塏·兪應孚·柳誠源等謀復立上王。 金礩告變, 事覺。 上親鞫之, 皆誅。</p>',
        translation_html:
          '<p>성삼문·박팽년·하위지·이개·유응부·유성원 등이 상왕(단종)을 다시 세우려 모의하였다. 김질이 변고를 고하여 일이 발각되니, 임금이 친히 국문하여 모두 베었다.</p>',
        commentary_html:
          '<p>사신은 논한다. 임금을 두 번 섬기지 않는 것은 신하의 떳떳함이라, 형틀 위에서도 굽히지 않은 그 말과 그 빛은 천년 뒤에도 사람의 가슴을 친다. 권세는 한때이고 절의는 영원하니, 옳고 그름이 어찌 칼끝에서 결판나겠는가.</p>',
        source_url: 'https://sillok.history.go.kr/id/kga_10206002_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'sejo',
    year: 1457,
    reign_year: 3,
    lunar_date: '10월 21일',
    title_ko: '단종 사사(賜死)',
    title_hanja: '魯山君賜死',
    summary_html:
      '<p>금성대군의 또 한 차례 복위 모의가 발각된 뒤, 노산군(단종)은 영월 청령포에 유배되었다가 끝내 사사되었다. 17세였다. 1698년(숙종 24) 단종의 묘호가 회복된다.</p>',
    tags: ['단종', '영월', '사사'],
    sillok: [
      {
        volume: '세조실록 9권, 세조 3년 10월 21일',
        date_lunar: '10월 21일',
        title_ko: '노산군이 영월에서 졸하다',
        original_html:
          '<p>魯山君薨于寧越。 自縊。 時年十七。</p>',
        translation_html:
          '<p>노산군(魯山君)이 영월(寧越)에서 졸(薨)하였다. 스스로 목매어 죽으니, 나이 17세였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kga_10310021_002',
      },
    ],
  },
  {
    king_id: 'sejo',
    year: 1466,
    reign_year: 12,
    lunar_date: '8월 25일',
    title_ko: '직전법 시행',
    title_hanja: '職田法',
    summary_html:
      '<p>현직 관리에게만 수조권(收租權)을 주는 <strong>직전법</strong>을 시행하였다. 세종 때까지의 과전법은 퇴직·세습으로 토지가 줄어들어 새 관리에게 줄 땅이 모자랐는데, 이를 정비한 조치였다.</p>',
    tags: ['직전법', '토지제도'],
    sillok: [
      {
        volume: '세조실록 39권, 세조 12년 8월 25일',
        date_lunar: '8월 25일',
        title_ko: '직전의 법을 정하다',
        original_html:
          '<p>始定職田之法。 罷科田, 唯給見任官員。</p>',
        translation_html:
          '<p>비로소 직전(職田)의 법을 정하였다. 과전(科田)을 파하고 오직 현임(現任) 관원에게만 주도록 하였다.</p>',
        source_url: 'https://sillok.history.go.kr/id/kga_11208025_001',
        is_hero: true,
      },
    ],
  },
  {
    king_id: 'sejo',
    year: 1467,
    reign_year: 13,
    lunar_date: '5월 16일',
    title_ko: '이시애의 난',
    title_hanja: '李施愛之亂',
    summary_html:
      '<p>함길도 회령부사 출신 <strong>이시애</strong>가 중앙에서 파견된 수령들의 학정에 반발하여 봉기하였다. 4개월간 함길도 일대를 휩쓸었으나 구성군 이준·남이 등이 토벌하였다. 난 이후 함길도는 함경도로 개칭되고 유향소가 폐지되었다.</p>',
    tags: ['이시애', '함길도', '반란'],
  },
  {
    king_id: 'sejo',
    year: 1466,
    reign_year: 12,
    lunar_date: '1월',
    title_ko: '《경국대전》 편찬 시작',
    title_hanja: '經國大典',
    summary_html:
      '<p>세조가 최항·노사신·강희맹 등에게 명하여 조선의 통치 규범을 한 권에 집대성하는 <strong>《경국대전》</strong> 편찬을 시작하였다. 호전(戶典)·형전(刑典)부터 차례로 마무리되었으며, 본격적인 완성과 시행은 손자 성종 대(1485)에 이르러서야 이루어진다.</p>',
    tags: ['경국대전', '법전'],
  },
];
