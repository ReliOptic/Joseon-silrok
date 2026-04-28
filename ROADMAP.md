# 조선왕조실록 — 완성 로드맵

> 마지막 업데이트: 2026-04-29
> 베이스: commit `44c1bd8` (main)

---

## 1. 비전

500년 27왕의 역사를 **드릴다운 줌 UX**로 보여주는 인터랙티브 사관(史官).
사용자는 한 화면에서 시대 → 왕 → 사건 → AI 재현 스토리 → 실록 원문까지 점진적으로 파고든다.

학습용 자료가 아니다. 한 사람이 앉은 자리에서 30분 빠져들 수 있는 **콘텐츠 경험**이 목표다.

---

## 2. 현재 상태 (As-Is)

### 2.1 기술 스택

| 영역 | 채택 |
|---|---|
| Framework | React 19 + TypeScript 5.8 strict |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | GSAP 3 + ScrollTrigger |
| Icons | lucide-react |
| Data fetch | Node script (`scripts/fetch-itkc.mjs`) — itkc.or.kr |
| 빌드 결과 | `index.js` 602 kB / gzip 205 kB (단일 청크) |

### 2.2 UX 5단계 (구현 완료)

```
L1 (Macro)    시대별 왕 목록 + 시대 카드
   ↓ zoom in
L2 (Events)   특정 왕의 사건 타임라인
   ↓
L3 (Detail)   사건 상세 + 야사 + 관련 인물
   ↓ (storyEntry 있을 때만)
L3.5 (Story)  AI 내레이션 씬 (3씬 carousel, 단일 씬 표시)
   ↓
L4 (Sillok)   실록 원문 + 번역 + 사신 평
```

부가 기능: URL 상태 동기화 (`?level=3&king=sejong&event=2`), 검색 모달 (`/` 또는 `⌘K`), 공유 버튼, GSAP 줌 애니메이션, 핀치/휠 줌 제스처, TimelineBar 항상 표시.

### 2.3 데이터 커버리지

총 **27 왕 / 약 158 이벤트**.

| 항목 | 적용 수 | 비율 |
|---|---|---|
| `sillokEntry` (이벤트 단위) | ~70개 | 약 44% |
| `storyEntry` (이벤트 단위) | ~50개 | 약 32% |
| `original` 한문 원문 | 일부만 | 미측정 |

가장 풍부: 세종 (story 7, sillok 8). 가장 빈약: 인종, 헌종, 사은종 등 단명 왕.

### 2.4 데이터 인프라

- `scripts/fetch-itkc.mjs` — itkc.or.kr DCI 기반 fetch (sillok.history.go.kr는 IP 차단)
- 출력: `data/raw/{king}-itkc.json` (현재 8개 왕만 raw 캐시 보유)
- 본 컬렉션은 `src/data/{king}.ts`에 직접 인라인 (정적 import)

### 2.5 알려진 한계

1. **단일 청크 602 kB** — 27 왕 데이터 전체가 초기 번들에 포함.
2. **왕 ↔ 왕 전환이 단조로움** — `slideAnimate` 0.4초 fade만 있음. 역사적 연속성 0.
3. **storyEntry 누락 이벤트가 다수** — 특히 단명 왕은 1개만 있는 경우가 흔함.
4. **L3.5 이미지 미구현** — `imagePrompt`만 있고 실제 이미지 없음 (의도적 보류).
5. **윤달 미수집** — fetch 스크립트가 윤5월 등 처리 못 함 (사도세자 articleId 수동 보충됨).

---

## 3. "완성"의 정의

다음 5가지가 모두 만족되면 **v1.0 출시 가능**으로 간주한다.

- [ ] 모든 사건에 사용자가 읽을 거리가 있음 (`desc` + 최소한 `sillokEntry` 또는 `storyEntry` 중 하나)
- [ ] 왕 전환 / 사건 전환에 **연결의 드라마**가 있음 (단순 swap이 아님)
- [ ] 초기 로드 < 200 kB (gzip), 왕 전환 시 lazy fetch < 50 kB
- [ ] 모바일에서 한 손으로 끝까지 탐색 가능 (320 px 이상)
- [ ] 공유 링크가 OG 이미지/텍스트와 함께 정상 미리보기

---

## 4. 단계별 로드맵

### Phase 1 — 콘텐츠 격차 메우기 (`feat/content-gap-fill`)

> **목표**: 모든 이벤트가 최소 `sillokEntry` 또는 `storyEntry` 중 하나는 보유.

#### 작업 단위

1. **현황 audit 스크립트 작성** (`scripts/audit-coverage.mjs`)
   - 각 왕별 이벤트 → sillokEntry/storyEntry 보유 여부 표로 출력
   - 누락 사건 우선순위 산출 (재위 기간 / 역사적 중요도)
2. **공백 사건 보강 (37 그룹)**
   - 각 사건에 storyEntry 3씬 + sillokEntry 1건 추가
   - 단명 왕(인종, 예종, 정종)은 신중히 — 너무 짧으면 묶거나 생략 정당화
3. **윤달 fetch 보강** (`scripts/fetch-itkc.mjs`)
   - DCI 패턴에 윤달 코드(`05B`) 추가
   - 사도세자 윤5월 articleId 자동 매칭 검증
4. **한문 `original` 보강**
   - 출처 표시가 가능한 경우 한문 본문 함께 저장
   - L4에서 한문/번역 토글 UI 검토 (Phase 5에서 구현 가능)

**완료 기준**: audit 스크립트가 전 사건 ✅ 출력. 빌드 통과.

---

### Phase 2 — 왕 전환 UX (`feat/king-transitions`)

> **목표**: 왕 ↔ 왕 이동이 "교체"가 아닌 "이야기의 다음 장"으로 느껴지게.

#### 작업 단위

1. **왕 진입 훅 카피** — `KingDetail.title`을 사전적 표현에서 **드라마 한 줄**로 재작성
   - 예: 정조 "조선의 22대 국왕" → "아버지를 뒤주에 가둔 왕의 아들"
   - 27개 왕 모두 재작성 (1-2문장 이내)
2. **왕위 교체 방식 메타데이터**
   - `KingListItem`에 `succession?: 'normal' | 'coup' | 'abdication' | 'short_lived' | 'enthronement'` 추가
   - 27 왕 분류
3. **왕 ↔ 왕 브릿지 텍스트**
   - `KingData`에 `transitionFromPrev?: string` 필드 신설
   - 전환 시 fade-in 1-2초 카드 (예: "세종이 승하했다. 32년의 성군 시대가 닫혔다.")
   - L1→L2 진입 시, L2 내 prev/next 이동 시 모두 적용
4. **L2 끝에서 다음 왕 프리뷰 카드**
   - 마지막 사건 다음에 "다음 이야기 →" 카드
   - 클릭 시 다음 왕 L2로 진입
5. **연속 사건 (왕을 가로지르는 이벤트) 표기**
   - 임진왜란(선조→광해군), 병자호란(인조), 한일강제병합(고종→순종) 등
   - `KingEvent.crossReign?: { kingId: string; eventIndex: number }` 추가 가능

**완료 기준**: 27 왕 훅 카피 검수 완료. L1→L2 진입에 브릿지 카드 표시. 사건 끝에서 다음 왕 카드 작동.

---

### Phase 3 — 성능 (`perf/code-splitting`)

> **목표**: 초기 번들 200 kB gzip 이하. 왕 전환 시 자연스러운 로딩 모션.

#### 작업 단위

1. **왕 데이터 dynamic import**
   - `KINGS_DATA` 객체 → `loadKingData(id): Promise<KingData>` 함수로 변환
   - `import.meta.glob('./data/*.ts', { import: 'default' })` 활용
2. **React.lazy + Suspense 도입**
   - 각 Level 컴포넌트를 lazy chunk로 분리
3. **로딩 연출과 결합**
   - 왕 전환 시 chunk fetch ↔ Phase 2의 브릿지 카드를 같은 시간축에 배치
   - "성능 개선이 곧 연출"이 되는 구간
4. **벤치마크**
   - 초기 로드: `dist/index.js` < 200 kB gzip 확인
   - 왕별 chunk: 평균 < 50 kB gzip
   - Lighthouse Performance ≥ 90

**완료 기준**: `npm run build` 결과의 청크 분포가 위 기준 충족. Lighthouse 보고서 첨부.

---

### Phase 4 — 폴리시 & 공유 (`feat/share-and-polish`)

> **목표**: SNS에서 한 장의 카드로 공유될 수 있는 상태.

#### 작업 단위

1. **OG 이미지 동적 생성**
   - URL 파라미터 기반으로 SVG → PNG 변환
   - "사도세자 — 뒤주의 8일" 같은 카드 1장
   - Vercel OG 또는 Cloudflare Workers
2. **메타 태그**
   - 사건별 `og:title`, `og:description`, `og:image`
3. **검색 개선**
   - 한문/한글 동시 검색
   - 인물 이름 검색 (figures 인덱싱)
4. **모바일 다듬기**
   - 320 px 너비 대응 검증
   - 핀치 줌과 페이지 줌 충돌 방지
5. **L4 한문 토글**
   - `original` 있을 때 토글 버튼

**완료 기준**: 슬랙/카톡/트위터에 임의 사건 URL 붙여넣기 → 카드 미리보기 정상.

---

### Phase 5 — 배포 (`chore/deploy`)

#### 작업 단위

1. **호스팅 선택** — Vercel (OG 함수 포함) 권장
2. **도메인 연결** — joseon-sillok.com (예시)
3. **분석** — Plausible/PostHog (개인정보 부담 적음)
4. **에러 추적** — Sentry (free tier)

**완료 기준**: 도메인 접속 → 모든 Phase 1-4 기능 동작. 첫 사용자 5명 피드백 수집.

---

### Phase X — 향후 보류 (현재 의도적 미실행)

#### X.1 — L3.5 이미지 실체화

- 현재 `imagePrompt`만 저장, 실제 이미지 없음
- 후보: Replicate(Flux), fal.ai, Recraft (수묵화 스타일)
- 비용/저작권 정리 후 진행
- **사용자 지시: 절대 아직 만들지 말 것**

#### X.2 — 음성 내레이션

- L3.5 씬에 TTS 음성 (한국어 historical voice)
- ElevenLabs Korean 또는 Naver Clova
- 자동 재생 / 자막 동기화

#### X.3 — 다국어

- 영어 (해외 한국사 관심층)
- 일본어 (조선통신사 등 공유 역사)

---

## 5. 다음 1 액션

**Phase 1.1 — audit 스크립트** 부터 시작하는 것을 권장.
이유:
- 격차의 정확한 윤곽이 잡혀야 Phase 1.2 작업 분배가 가능
- 30분 이내 작성 가능
- 결과가 곧 진행 상황 트래킹 도구가 됨 (앞으로 Phase 1 동안 매번 실행)

```bash
# 실행 예시
node scripts/audit-coverage.mjs

# 출력 예시
✅ sejong          8/8 sillok  7/8 story  (1 missing: 1419 쓰시마)
⚠️  injong          1/5 sillok  1/5 story  (4 missing)
❌ ...
```

---

## 6. 진행 추적

| Phase | 상태 | 시작일 | 완료일 |
|---|---|---|---|
| Phase 1 — 콘텐츠 | ⬜ Not Started | — | — |
| Phase 2 — 전환 UX | ⬜ Not Started | — | — |
| Phase 3 — 성능 | ⬜ Not Started | — | — |
| Phase 4 — 공유 | ⬜ Not Started | — | — |
| Phase 5 — 배포 | ⬜ Not Started | — | — |

각 Phase 완료 시 이 표 갱신 + 해당 PR/커밋 hash 기록.
