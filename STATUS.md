# 프로젝트 상태 보고

**프로젝트**: 조선왕조실록 — 인터랙티브 사관 (Joseon-silrok)
**보고일**: 2026-04-29
**현재 베이스**: `4aac4cd` 이후 진행 중 (커밋 직전)
**상태**: v1.0 Phase 1-3 + 치명 결함 패치 + Phase 2 UI 통합 + OG 카드 완료

---

## 1. 한눈에

| 항목 | 상태 |
|---|---|
| 데이터 커버리지 | **27 왕 / 158 이벤트 / 90% 보강 완료** |
| 빌드 사이즈 | 메인 120 kB gzip + 왕별 4.5 kB×27 |
| UX 평가 | 90 결함 도출, **치명 7건 모두 패치 완료** |
| 디자인 의뢰서 | 작성 완료, 디자이너 1차안 대기 |
| 평가 패널 | 자체 평가(옵션 C) 완료 |
| 배포 | 미배포 |

---

## 2. 완료 단계 (Done)

### 2.1 데이터
- 27 왕 전원 storyEntry + sillokEntry 보유
- 7 저커버리지 왕 보강
- `scripts/audit-coverage.mjs` — 커버리지 audit 도구
- itkc.or.kr fetch 인프라 작동 중

### 2.2 전환 데이터 메타 (Phase 2)
- `KingListItem.succession` (27왕 분류)
- `KingDetail.hookLine` (27왕 드라마 한 줄)
- `KingData.transitionFromPrev` (15 핵심 왕 브릿지 시드)

### 2.3 성능 (Phase 3)
- 동적 import 코드 스플리팅 — 메인 120 kB gzip + 27 왕별 lazy chunk

### 2.4 UX 자체 평가 (옵션 C)
- `docs/UX_HEURISTIC_FINDINGS.md` — 35건
- `docs/UX_CULTURAL_FINDINGS.md` — 27건 + hookLine 시드 30개
- `docs/UX_MOBILE_FINDINGS.md` — 28건

### 2.5 의뢰·평가 인프라 문서 4종
- `ROADMAP.md`, `docs/DESIGN_BRIEF.md`, `docs/DESIGN_BRIEF_RESPONSES.md`, `docs/UX_ADVISORY_PANEL.md`

### 2.6 치명 결함 7건 패치
- **H E-002** OnboardingHint 컴포넌트 — L1 첫 진입 줌 UX 안내, localStorage dismiss
- **H E-028** Back 버튼 정상화 — pushState + popstate 리스너 (앱 내 이전 레벨로 복귀)
- **M-001** preventDefault 제거 — 페이지 핀치 줌 회복 (한문 확대 가능)
- **M-002** MobileBottomNav 컴포넌트 — sm:hidden 하단 액션 바 (zoomOut/zoomIn/search/share)
- **M-003** 320px Nav 단축 — breadcrumb 모바일 분기 (왕 이름만)
- **C-003** 영조 unofficialHistory 픽션 톤 정정
- **C-009** 인조 detail.title — "屈辱의 군주" → "인조 — 명분과 현실이 충돌하다"

### 2.7 Phase 2 UI 통합
- L1: `KING_HOOKLINES` light meta + 27왕 hookLine 카드 표시
- L1: succession 시각 차별화 (coup⚔/short_lived 옅음/usurpation dashed/abdication↓/forced_abdication⊗/enthronement★)
- L2: TransitionCard 컴포넌트 — fade-in 0.6s + 1.5s 유지 + fade-out, sessionStorage 왕당 1회

### 2.8 OG 공유 카드
- `public/og-default.svg` 1200×630 한지 톤 + 朝鮮 워터마크
- `index.html` og:* + twitter:* 메타 태그

---

## 3. 진행 중 (In Flight)

### 3.1 외부 디자이너 1차안 대기
- DESIGN_BRIEF + RESPONSES 작성 완료, 전달 대기
- 1차안 도착 후 외부 평가 패널(옵션 B) 동시 가동 권장

---

## 4. 다음 작업 후보 (우선순위 순)

1. **배포 (Vercel)** — Phase 5. 도메인 결정 + 1차 공개. 0.5일.
2. **OG 동적 생성 인프라** — Vercel Edge Function으로 사건별/왕별 카드 자동 생성. 1-2일.
3. **L3.5 다크 모드 이론적 근거 정립** — 디자이너 1차안에서 의미 축 결정 (예: 공식 기록 vs 야사). 디자인 의존.
4. **모바일 실기기 검증** — 320px / 375px / 414px iOS Safari + Android Chrome 실 테스트. 0.5일.
5. **추가 콘텐츠 보강** — 단명 왕(인종, 예종) 외 storyEntry 1건 미보유 사건의 사신 commentary 보강. 1일.

---

## 5. 리스크 / 블로커

| 리스크 | 영향 | 대응 |
|---|---|---|
| 디자이너 1차안 지연 | 디자인 시스템 정립 지연 | 자체 패치는 모두 완료. 디자이너 도착 시 즉시 통합 가능 |
| OG 카드 SVG의 Twitter 미지원 | 트위터 공유 시 카드 미표시 | 정적 PNG 변환 또는 동적 OG 함수 필요 (Phase 5에서) |
| 윤달 fetch 미지원 | 사도세자 외 추가 발생 시 | fetch-itkc.mjs 정규식 보강 |

---

## 6. 주요 메트릭 추이

| 지표 | 시작점 | 현재 | 목표(v1.0) |
|---|---|---|---|
| 메인 번들 (gzip) | 205 kB | **120 kB** | <200 kB ✅ |
| storyEntry 커버리지 | 32% | **~70%** | 100% |
| sillokEntry 커버리지 | 44% | **~80%** | 100% |
| UX 결함 (치명) | 미측정 | **0건 (패치 완료)** | 0건 ✅ |
| 모바일 320px 동작 | 붕괴 | **정상화 (검증 대기)** | 정상 |

---

## 7. 최근 커밋 (5개)

```
4aac4cd docs: add STATUS.md as living project status report
33f9c3d chore: ignore test-results and playwright-report
07e59c1 feat: phases 1-3 + UX self-evaluation panel results
467e53b docs: roadmap, design brief, brief responses, ux advisory panel
44c1bd8 feat(data): add storyEntry + sillokEntry for 20 remaining kings
```

---

## 8. 다음 의사결정이 필요한 항목

- [ ] 배포 도메인 확정 (joseon-sillok.com 등)
- [ ] 외부 평가 패널(옵션 B 600만원) 진행 시점 — 디자이너 1차안 후로 확정?
- [ ] L3.5 이미지 생성 시점 — Phase X로 계속 보류?
- [ ] OG 동적 생성 시점 — Vercel 함수 + 배포 동시 / 분리?

— 보고 끝
