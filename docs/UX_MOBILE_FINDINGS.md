# UX Mobile Findings — Joseon-silrok
**좌석**: Mobile UX Specialist (§1.4)
**평가일**: 2026-04-28
**평가 기준 문서**: DESIGN_BRIEF.md §5.4, UX_ADVISORY_PANEL.md §2.3
**1차 페르소나**: 역사 좋아하는 30대 직장인 — 출퇴근 지하철, 한 손 엄지 운용

---

## § 1. 요약

**결함 총계**: 28개 (치명 4 / 심각 11 / 보통 9 / 정보 4)

핵심 진단: 이 앱은 PC 데스크탑 환경에서 설계되어 모바일에서 **세 가지 치명 구조 문제**를 가진다.

1. **핀치 줌 완전 차단** — `handleTouchMove`에서 `e.preventDefault()`를 무조건 호출해 iOS Safari와 Android Chrome의 시스템 핀치 줌이 막힌다. 사용자가 글씨가 작아 확대하려 할 때 반응 없음.
2. **상단 Nav에 핵심 조작 버튼 집중** — ZoomIn/ZoomOut/검색 등 핵심 인터랙션이 모두 화면 상단 고정 nav에 몰려 있다. 한 손 엄지로 320~414px 환경에서 상단은 사실상 도달 불가 영역.
3. **TimelineBar 36px 높이에 27개 왕 타겟** — 역대 왕 중 짧은 재위왕(단종 3년, 예종 1년 등)은 모바일 touch target이 4~8px 수준으로 Fitts' Law 기준 선택 불가.

1차 페르소나(지하철 한 손)가 앱에 진입해 L3 사건 상세까지 가는 여정에서 **반복 좌절 포인트가 7개** 이상 존재한다.

---

## § 2. 화면 크기별 결함

### 320px (iPhone SE 1세대, 소형 Android)

| ID | 심각도 | 위치 | 현상 | 영향 | 권고 | 수정비용 |
|----|--------|------|------|------|------|---------|
| M-001 | 4 (치명) | L1 Nav / 320px | `flex items-center justify-between` 구조에서 왼쪽 breadcrumb("조선 (Joseon)") + 오른쪽 버튼 그룹(Share/Search/ZoomOut/LV/ZoomIn 5개)이 320px에서 겹침. breadcrumb 영역과 버튼 그룹이 overflow 발생하거나 찌그러짐. | L1 진입 즉시 UI 붕괴. 30초 이내 이탈 우려. | Nav 버튼 그룹을 `gap-1`로 줄이거나, 320px에서 breadcrumb를 한 줄 아래로 내리는 2-row nav 적용. LV 표시는 icon+숫자로 축소. | M (1-3일) |
| M-002 | 3 (심각) | L1 시대 카드 / 320px | `max-w-5xl mx-auto px-6`에서 320px는 실질 콘텐츠 폭 308px. `h1.text-5xl`(48px)이 좌우 여백 없이 거의 전폭 점유. 다음에 오는 `p.text-xl`이 줄바꿈 폭발로 5-6줄 이상. | 헤딩 아래 설명 텍스트가 화면 전체를 차지해 시대 카드가 첫 화면에 보이지 않음. | L1 헤딩 `text-3xl` 이하로 조정 (sm: breakpoint 이하). 부제(`The 500 Years...`) 모바일 히든 처리. | S (수시간) |
| M-003 | 3 (심각) | L1 왕 카드 / 320px | `p-6 rounded-2xl` 카드에서 `text-[32px]` 왕 이름이 320px 콘텐츠 폭(308px)에서 왼쪽 인덴트(`pl-20`)까지 더하면 실질 텍스트 영역 196px. 세종(2글자)은 괜찮으나 인조/영조(2글자) 외 `text-sm.opacity-60`의 재위 기간 텍스트가 세 줄로 깨짐. | 카드가 지나치게 커져 스크롤 거리 대폭 증가. | 왕 카드 내 이름 `text-2xl`, 부제 `text-xs` 축소 at `< sm`. | S |
| M-004 | 2 (보통) | L1 타임라인 세로선 / 320px | `absolute left-[29px]` 세로선 기준으로 카드가 `pl-20`(80px) 인덴트. 320px에서 카드 우측 여백이 극히 좁아 touch target이 오른쪽 경계에 닿아버림. | 오른쪽 끝 텍스트 잘림 가능성. | `pl-14` 또는 `pl-12`로 인덴트 축소 at mobile. | S |

### 375px (iPhone 6/7/8/SE2, 대다수 사용자 기준선)

| ID | 심각도 | 위치 | 현상 | 영향 | 권고 | 수정비용 |
|----|--------|------|------|------|------|---------|
| M-005 | 4 (치명) | App.tsx Nav 전체 / 375px | Nav 우측 버튼 그룹: `Share2(14px) + 검색 + ZoomOut(20px) + LV 텍스트 + ZoomIn(20px)`. 총 5개 컨트롤이 우측에 집중. `p-2`(8px 패딩 + 20px 아이콘 = 36px) touch target. **상단 고정** nav라 375px 엄지 최대 도달 경계(화면 상단 ~65px)에 걸쳐 있음. 한 손 세로 파지 기준 상단 nav는 사실상 양손 필요 영역. | ZoomIn/Out이 핵심 UX인데 한 손으로 조작 불가. 1차 페르소나 지하철 한 손 사용에서 앱 핵심 동작 자체가 막힘. | ZoomIn/Out을 화면 하단 FAB(Floating Action Button)으로 이동. 또는 좌우 스와이프 제스처 레벨 이동으로 대체. Nav는 뒤로가기+브레드크럼만 남김. | L (3-7일) |
| M-006 | 4 (치명) | App.tsx handleTouchMove / 전체 모바일 | `e.preventDefault()` 무조건 호출 (L233-253). `{passive: false}` 리스너이므로 2핑거 터치 전체에서 브라우저 기본 핀치 줌 차단. **의도적** 구현이나 부작용: L4 한문 원문, L3 야사 박스 소글씨 등 읽기 어려운 텍스트에서 사용자가 핀치 확대를 시도하면 반응 없음. | 고령층, 시력 민감 사용자에게 접근성 장벽. "이 앱 고장났다" 인식 유발. | 핀치 줌 이벤트를 앱 레벨 zoom 트리거와 **분리**. `touchmove`에서 핀치 여부를 판별 후 앱 zoom 목적이면 `preventDefault()`, 아니면 pass-through. 또는 명시적 확대 버튼 제공 후 핀치는 시스템에 위임. | M |
| M-007 | 3 (심각) | L2 이벤트 카드 / 375px | `text-[32px] font-serif font-bold` 이벤트 제목이 375px 콘텐츠 폭(~363px, `px-6` 양쪽 24px)에서 한국어 긴 제목(예: "훈민정음 창제와 반포")은 2줄. 그 위에 `text-xl font-bold opacity-60` 연도(1443 등)와 badge. 카드 간격 `mb-16`(64px). | 사건 5개만 보여도 스크롤 거리 650px+. 지하철 5분 내 전체 파악 불가. | 제목 `text-2xl`, 간격 `mb-10` 축소. 모바일에서 `line-clamp-2` 트런케이션 + 탭 시 확장 패턴. | M |
| M-008 | 3 (심각) | L3 야사 박스 / 375px | `bg-[#F5EFE6] p-6 rounded-2xl` 야사 박스 내 `text-sm leading-[1.6]` 텍스트. `max-w-2xl`이 375px에서 전폭 차지. 야사 내용이 길면 5-8줄. 박스 아래 `figures` 아바타 섹션까지 합산하면 전체 L3 카드가 모바일 화면 3-4개 분량. | 핵심 정보(사건 제목+설명)가 야사 박스 아래로 밀림. 사용자가 내용 파악 전 scroll-out. | 야사 박스 모바일에서 접기(accordion) 기본 상태. `text-xs` 크기 유지하되 3줄 + 더보기 패턴. | M |
| M-009 | 3 (심각) | L3 인물 hover tooltip / 375px | `hoveredFigure` 상태로 `absolute bottom-full` tooltip 표시. **터치 환경에서 hover 없음.** `onMouseEnter`/`onMouseLeave` 이벤트만 등록. 관련 인물 이름을 터치해도 소개가 뜨지 않음. | 인물 정보 완전 불접근. 모바일 사용자는 인물 설명을 볼 방법이 없음. | `onClick` 토글로 교체 또는 터치 이벤트 병행 등록. tooltip 위치도 `bottom-full`에서 뷰포트 내부로 보정. | M |
| M-010 | 2 (보통) | L3.5 씬 카드 / 375px | `aspect-video`(16:9) 씬 카드. 375px 폭 → 높이 211px. 중앙 나레이션 `font-serif text-lg text-white leading-relaxed`가 `px-14`(좌우 56px) 인덴트 적용 후 실질 폭 263px. 씬 나레이션이 길면 박스 내 텍스트가 위아래 overflow 또는 작아짐. | 스토리 핵심 콘텐츠 가독성 저하. | `aspect-[4/5]` 또는 `aspect-[9/16]`으로 모바일 비율 전환. `px-8`로 인덴트 축소. 나레이션 `text-base`로 조정. | M |
| M-011 | 2 (보통) | L4 한문 원문 / 375px | `.vertical-rl.font-gungsuh.text-[16px]`으로 세로쓰기 한문 렌더. `max-h-[320px]` 스크롤. 375px에서 `md:flex-row`가 적용 안 되어(Tailwind v4 기본 `md=768px`) **한문 원문이 국역 위에 세로로 배치**됨. 세로쓰기 텍스트 블록이 화면 한가운데 가로로 긴 덩어리로 나타남. | 한문 모르는 사용자에게 첫 화면이 한문 세로쓰기 덩어리 → 극히 낯설고 당황스러운 첫인상. | 모바일에서 원문 섹션 접기(기본 숨김) + "원문 보기" 토글. 또는 탭 전환(원문/국역). | M |

### 414px (iPhone Plus 계열, 대형 Android)

| ID | 심각도 | 위치 | 현상 | 영향 | 권고 | 수정비용 |
|----|--------|------|------|------|------|---------|
| M-012 | 2 (보통) | L1 시대 h2 / 414px | `text-[48px]` 시대 제목. 414px에서는 수용되나 여백 감이 타이트. `mb-32`(128px) 하단 여백이 모바일에서 과도한 dead space. | 시대 카드 진입 전 빈 공간이 커 사용자가 "스크롤해야 하나?" 혼란. | `mb-32` → `mb-16` at mobile. | S |
| M-013 | 2 (보통) | TimelineBar / 414px | `mx-8`(32px 양쪽) TimelineBar 실질 폭 350px. 27개 왕 중 단종(3년), 예종(1년), 인종(8개월)의 width가 전체 500년 대비 `0.5%~1.6%`로 1.75px~5.6px. **터치 타겟 44px 기준 (HIG/Material)에서 10배 이상 미달**. | 짧은 재위왕은 TimelineBar에서 사실상 선택 불가. 해당 왕 탐색 경로가 타임라인 단독 시 막힘. | 최소 touch target `min-width: 20px` 보장 + 주변 보이지 않는 hit area 확장(CSS transform/padding). 혹은 TimelineBar 대신 슬라이더 컴포넌트 검토. | M |
| M-014 | 1 (정보) | L2 다음 왕 CTA / 414px | `p-8`(32px) CTA 버튼이 414px에서도 충분한 touch target이나, `text-[36px]` 왕 이름과 `text-sm opacity-50` 재위 텍스트 위계는 모바일에서도 잘 작동함. 단, `line-clamp-2` 설명 텍스트가 잘릴 경우 맥락 부족. | 낮음 — 보완 수준. | 설명 텍스트 `line-clamp-1`로 조정, 공간 절약 후 왕 이름 크기 유지. | S |

---

## § 3. 인터랙션 / 제스처 결함

| ID | 심각도 | 위치 | 현상 | 영향 | 권고 | 수정비용 |
|----|--------|------|------|------|------|---------|
| M-015 | 4 (치명) | App.tsx L232-260 | **핀치 줌 vs 앱 줌 충돌**. `handleTouchMove`에서 2핑거 감지 시 `e.preventDefault()` 호출 후 앱 레벨 zoom 실행. 문제: 사용자가 앱 수준 줌(L1→L2) 의도가 없고 단순히 텍스트 확대를 원하는 경우도 막힘. iOS Safari `viewport meta`에 `user-scalable=no`가 없더라도 JS `preventDefault`로 차단 가능. `{passive: false}` 리스너가 이를 보장. | 모바일 표준 행동(핀치 확대) 차단. 고령 사용자, 저시력 사용자에게 사용 불가 수준. | 해결 방안 3가지 중 택1: (A) 핀치 동작을 감지하되 `0.8배 미만 / 1.2배 초과` 임계치 도달 시에만 앱 zoom 트리거하고 그 미만은 pass-through. (B) 앱 zoom을 핀치가 아닌 별도 제스처(더블탭 등)로 연결하고 핀치는 시스템에 완전 위임. (C) 핀치 제스처 도움말 overlay 제공("두 손가락으로 레벨 이동"). | M |
| M-016 | 3 (심각) | App.tsx 스와이프 없음 | 좌우 스와이프로 왕 간 이동하는 제스처가 없음. `navigateToKing`이 버튼 전용. 모바일 사용자는 카드 UI에서 좌우 스와이프를 직관적으로 기대함. | 1차 페르소나(지하철 한 손)는 상단 버튼보다 스와이프가 훨씬 자연스러운데 해당 경로 없음. | L2에서 좌우 `touchstart`/`touchend` delta 감지 후 왕 이동 연결. 단, 세로 스크롤과 충돌하지 않도록 수평 delta 임계치(`> 50px + 수직 < 30px`) 조건 처리. | M |
| M-017 | 3 (심각) | L35 씬 카드 좌우 버튼 | 씬 이전/다음 버튼(`left-3 top-1/2`)이 `p-2 rounded-full bg-white/10` = 터치 타겟 약 34px. `w-1.5 h-1.5` dot indicator는 6px 타겟으로 **HIG 44px 기준 대비 대폭 미달**. | 씬 이동이 어려워 스토리 콘텐츠 중도 이탈. | 씬 이동 버튼 최소 44px, dot indicator `w-4 h-4`(16px) + hit area 확장. 또는 씬을 swipe로 이동하게 변경. | S |
| M-018 | 3 (심각) | L3 / L3.5 / L4 이벤트 이전/다음 버튼 | `text-sm opacity-50 hover:opacity-100` 버튼. `flex items-center gap-1.5` — 텍스트+아이콘 조합으로 실질 터치 영역이 텍스트 폭에만 한정. "이전 사건" 4글자+아이콘 ≈ 60~70px 폭, **높이는 line-height 수준(~21px)**. | 상단 위치 + 좁은 hit area 조합으로 반복 실패 터치 발생. | 최소 height `44px`, padding 확장으로 hit area 보장. `py-3` 추가로 해결 가능. | S |
| M-019 | 2 (보통) | SearchModal 키보드 활성 | 모바일에서 검색 모달 열면 `inputRef.current?.focus()` 자동 포커스 → 소프트 키보드 활성화 → 뷰포트 높이 약 40% 축소. `pt-[15vh]` 상단 여백 기반 레이아웃에서 키보드 활성 시 모달이 키보드 위로 올라오는 처리 없음. iOS Safari에서 `window.innerHeight` 기준 변경으로 모달 일부가 키보드 아래로 가려질 수 있음. | 검색 결과 목록이 키보드에 가려짐. | `max-h-[50vh]` 결과 목록을 `env(keyboard-inset-height)` CSS variable 또는 `visualViewport` API 기반 동적 높이 보정. | M |
| M-020 | 2 (보통) | SearchModal / 전체 모바일 | `fixed inset-0` 전체 화면 overlay + `items-start pt-[15vh]`. 모바일 전체 화면 점유는 긍정적이나, 모달 닫기가 배경 tap 또는 ESC만 가능. 모바일에서 ESC 키보드 없음, 배경 tap은 콘텐츠 영역 외부를 정확히 눌러야 함. `X` 버튼 없음(query 있을 때만 clear 버튼 노출, 닫기와 다름). | 모달 닫기 경로 모호. "뒤로 가기" 제스처(iOS 스와이프, Android back)도 미등록. | `onClose` 연결된 명시적 X 버튼을 검색 입력 우측 상단에 항상 노출. Android `popstate` 이벤트 처리로 뒤로가기 지원. | S |
| M-021 | 2 (보통) | L3 figures hover / 375px | 이미 M-009에서 언급. 추가: 터치 tap 시 tooltip이 `bottom-full`로 위로 열리는데, 아바타가 카드 하단에 있을 경우 tooltip이 카드 상단 밖으로 나가 overflow hidden에 의해 잘릴 수 있음. | 정보 접근 불가 + 잘린 UI로 신뢰도 저하. | Tooltip 위치를 뷰포트 기준 `getBoundingClientRect()`로 동적 결정. | M |
| M-022 | 1 (정보) | 전체 / iOS Safari | `window.addEventListener('wheel', handleWheel, {passive: false})` — iOS Safari에서 wheel 이벤트는 트랙패드/마우스 연결 시만 발생. 모바일 순수 터치에서는 무관하나, iPad + 외부 키보드 조합에서 예기치 않은 동작 가능. | 낮음. 엣지케이스. | 메모 수준. iPad 지원 확대 시 검토. | S |

---

## § 4. 도달성 히트맵 (엄지 도달 영역 묘사)

375px iPhone 세로 파지 기준, 오른손 한 손 엄지 운용 상황:

```
┌─────────────────────────────┐  ← 화면 상단
│  ████████████████████████  │  ← 도달 불가 (0~100px)
│  [← Back] [조선/왕/연도...]  │     Nav bar (52px 고정)
│  [Share] [검색] [ZoomOut] [LV] [ZoomIn]  │     ← 치명 위험: 핵심 버튼 전부 여기
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░  │  ← 불편 영역 (100~250px)
│                             │     시대 헤딩, 왕 카드 상단 1/3
│                             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  ← 편안한 영역 (250~480px)
│  [왕 카드 본문 영역]          │     카드 본문, 야사 박스, 스크롤 콘텐츠
│  [야사 텍스트 영역]           │
│  [인물 아바타 열]             │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│  ████████████████████████  │  ← 가장 편한 영역 (480~667px)
│  [하단 CTA 버튼들]            │     L35 하단 버튼, L4 이전/다음
│  [TimelineBar 36px]         │     TimelineBar — 여기는 좋으나
│                             │     27개 작은 타겟이 문제
└─────────────────────────────┘  ← 화면 하단 (667px at 375px 기기)
```

**결론**:
- ZoomIn/Out: 상단 도달 불가 영역 → 즉시 이동 필요
- TimelineBar: 위치 자체는 최적(하단) → 타겟 크기가 문제
- 검색 버튼: 상단 → 하단 FAB 또는 하단 바로 이동 검토
- L3 이전/다음 사건 버튼: 상단에 가까운 위치 → hit area 확장 필수
- 씬 카드 좌우 이동: 중앙 양쪽에 위치 → 화면 좌우 엣지 전체를 탭 영역으로 확장 검토

---

## § 5. iOS Safari vs Android Chrome 위험 추정

| 항목 | iOS Safari 위험 | Android Chrome 위험 | 심각도 |
|------|----------------|--------------------|----|
| `e.preventDefault()` on touchmove | 핀치 줌 완전 차단 (iOS WKWebView 포함) | 동일하나 일부 Android에서 overscroll 연동 이슈 추가 | 4 |
| `position: fixed` nav + 소프트 키보드 | iOS 15 이전에서 `100vh` = 브라우저 UI 포함, fixed 요소 위치 틀어짐 | 키보드 오픈 시 `window.innerHeight` 즉시 변경으로 레이아웃 jump | 3 |
| `overflow: hidden` on body | iOS Safari에서 `body` overflow hidden + 내부 스크롤 구조가 관성 스크롤 끊김 발생 가능 | 비교적 안정 | 3 |
| `backdrop-blur-md` 성능 | A12 이전 기기에서 프레임 드롭. `bg-white/10 backdrop-blur-md` 레이어가 nav + 여러 카드에 적층 | Android 구형 기기(Snapdragon 665 이하)에서 심각한 성능 저하 | 2 |
| `font-gungsuh` (Gungsuh/Batang) | iOS에서 Gungsuh/Batang 미탑재. `Noto Serif KR` fallback 발동. 세로쓰기(`writing-mode: vertical-rl`)에서 Noto Serif KR의 세로 렌더 품질 저하 | Android 기본 폰트에 Batang 없음, Noto Serif KR fallback 동일 | 2 |
| `gsap.to('body', {backgroundColor})` 애니메이션 | iOS Safari에서 body background animation이 repaint 과다 발생 가능 | 비교적 안정 | 2 |
| `window.history.replaceState` 빈도 | level/king/event 변경마다 URL 업데이트. iOS에서 빠른 스크롤 시 `replaceState` throttle 없으면 "Too many state changes" 오류 가능성 | Chrome은 더 관대 | 2 |
| `.no-scrollbar` 숨김 스크롤 + 내부 컨테이너 | `h-screen overflow-hidden` body + `h-full overflow-y-auto` 자식 구조. iOS에서 모멘텀 스크롤(`-webkit-overflow-scrolling: touch`)이 자동 적용되나 사용자 스크롤 위치 표시 없어 "스크롤 가능한지 모름" 문제 | 비교적 안정 | 1 |
| `hanji-noise` SVG filter z-index 9999 | iOS에서 high z-index fixed element가 터치 이벤트를 가로챌 수 있음. `pointer-events: none` 설정되어 있어 이론상 안전하나, 일부 WKWebView 버전에서 버그 보고된 패턴 | 낮음 | 1 |

---

## § 6. 우선순위 매트릭스

```
                   수정비용 낮음(S)      수정비용 중간(M)      수정비용 높음(L)
심각도 높음(3-4)   M-002, M-003,        M-006, M-015,        M-005
                   M-004, M-017,        M-008, M-009,        (ZoomIn/Out 이동)
                   M-018, M-020         M-007, M-010,
                   [즉시 수정]           M-011, M-016
                                        [Phase 단위 계획]

심각도 보통(2)     M-012, M-014         M-013, M-019,        —
                   [배치 정리 시]         M-021
                                        [배치 정리 시]

심각도 낮음(1)     M-022               —                    —
                   [수정 안 함 명시]
```

**즉시 수정 권고 Top 5**:

1. **M-006 / M-015** (치명): `e.preventDefault()` 핀치 줌 차단 — 모바일 접근성 근본 위배. 1-2일 내 수정.
2. **M-001** (치명): 320px Nav overflow — 첫 화면 UI 붕괴. 반나절.
3. **M-018** (심각): 이전/다음 사건 버튼 hit area — `py-3` 추가로 즉시 해결. 1시간.
4. **M-017** (심각): 씬 카드 이동 버튼 및 dot indicator 크기 — `w-4 h-4`로 즉시 개선. 1시간.
5. **M-020** (보통): SearchModal 닫기 버튼 명시 — 닫기 경로 불명확. 반나달.

**Phase 단위 계획 Top 3**:

1. **M-005** (치명): ZoomIn/Out → 하단 FAB 이동. 1차 페르소나 핵심 경로. 3-5일.
2. **M-016** (심각): 좌우 스와이프 왕 이동. 모바일 내비게이션 패러다임 전환. 3-5일.
3. **M-011** (심각): L4 한문 원문 모바일 레이아웃 재설계. 콘텐츠 아키텍처 변경. 2-3일.

---

## § 7. 종합 권고

### 7.1 구조적 전환이 필요한 항목

**Nav 재설계**: 현재 앱의 핵심 조작(ZoomIn/Out)이 모바일 최악의 위치(상단 고정 바)에 있다. 지하철 한 손 사용자가 이 앱을 처음 켰을 때 "어떻게 들어가지?"를 해결할 수 없다. ZoomIn을 하단 우측 FAB으로, ZoomOut을 화면 하단 좌측 또는 뒤로가기 제스처로 연결하는 것이 Fitts' Law 관점에서 필수다.

**핀치 줌 패러다임 선택**: "핀치 = 앱 레벨 줌"으로 쓸 것인지, "핀치 = 텍스트 확대"로 시스템에 위임할 것인지 명시적 결정이 필요하다. 현재는 전자를 선택했으나 후자의 사용자 기대를 완전히 차단했다. 더블 탭으로 앱 레벨 줌을 연결하고 핀치는 시스템에 위임하는 방안을 강력히 권고한다.

**TimelineBar hit area**: 바의 위치(하단)는 최적이다. 단 27개 왕의 touch target을 `min-w-[20px]` + 보이지 않는 padding 확장으로 44px hit area 보장이 필요하다. 단종·예종·인종 같은 단명왕을 TimelineBar에서 선택하지 못하면 이 사용자 흐름이 데드엔드가 된다.

### 7.2 빠른 승리 (Quick Wins)

다음 변경은 코드 수정 1-2시간 내에 1차 페르소나 경험을 즉각 개선한다:

- `py-3` 추가: L3/L35/L4 이전/다음 사건 버튼 모두 (M-018)
- `w-4 h-4` → L3.5 씬 dot indicator (M-017)
- SearchModal 닫기 X 버튼 항상 노출 (M-020)
- L1 헤딩 `sm:text-5xl text-3xl` 반응형 적용 (M-002)
- L1 `mb-32 → sm:mb-32 mb-16` (M-012)

### 7.3 모바일 지하철 시나리오 재평가

§2.2 시나리오 #6("모바일 지하철 시나리오") 기준 현재 상태:

- L1 진입: **가능** (하지만 텍스트 크기/간격 불편)
- L1 → L2 (왕 클릭): **가능** (카드 자체는 touch target 충분)
- L2 → L3 (사건 클릭): **가능** (카드 충분)
- L3 인물 정보: **불가** (hover-only)
- L3 → L4 줌인: **어려움** (ZoomIn 버튼 상단)
- L4 한문 확대 읽기: **불가** (핀치 차단)
- 검색 → 결과 탭: **가능하나 불편** (키보드 가림)

5분 지하철 체류를 위한 최소 조건: M-006, M-005, M-018 세 항목 수정이 선행되어야 한다.

### 7.4 평가자 소견

이 앱의 콘텐츠 깊이와 시각 언어는 모바일에서도 충분히 통할 수 있다. 문제는 "PC에서 잘 작동하는 구조를 모바일에 올렸을 때 발생하는 구조적 마찰"이다. 치명 결함 4개 중 3개(M-001, M-005, M-006)가 이 범주다. 이 세 가지를 해결하면 나머지 결함들은 순차적으로 다듬기 가능한 수준이다. 1차 페르소나인 지하철 30대 직장인이 "한 손으로 세종 → 임진왜란 → 광해군까지 끊김 없이 이동"하는 경험을 만드는 것, 그것이 이 앱이 SNS에서 퍼지기 위한 전제조건이다.

---

*평가자: Mobile UX Specialist (좌석 4, UX_ADVISORY_PANEL.md §1.4)*
*기록 양식: UX_ADVISORY_PANEL.md §2.3 준수*
