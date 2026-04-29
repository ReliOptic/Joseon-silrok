# 프로젝트 상태 보고

**프로젝트**: 조선왕조실록 — 인터랙티브 사관 (Joseon-silrok)
**보고일**: 2026-04-29
**현재 베이스**: `33f9c3d` (origin/main 동기화)
**상태**: v1.0 Phase 1-3 완료 / 디자이너 1차안 대기

---

## 1. 한눈에

| 항목 | 상태 |
|---|---|
| 데이터 커버리지 | **27 왕 / 158 이벤트 / 90% 보강 완료** |
| 빌드 사이즈 | 메인 119kB gzip + 왕별 4.5kB×27 (목표 250kB 대비 50%↓) |
| UX 평가 | **90 결함 도출 (자체 평가 완료)**, 치명 7건 |
| 디자인 의뢰서 | 작성 완료, 디자이너 1차안 대기 |
| 평가 패널 | 자체 평가(옵션 C) 완료. 외부 패널(옵션 B) 디자이너 1차안 후 |
| 배포 | 미배포 |

---

## 2. 완료 단계 (Done)

### 2.1 데이터
- 27 왕 전원 storyEntry + sillokEntry 보유 (commit `44c1bd8`)
- 7개 저커버리지 왕 보강 (gyeongjong, heonjong, hyeonjong, sunjo, sunjong, munjong, jeongjong)
- `scripts/audit-coverage.mjs` — 커버리지 audit 도구
- itkc.or.kr fetch 인프라 (`scripts/fetch-itkc.mjs`) 작동 중

### 2.2 전환 데이터 메타 (Phase 2)
- `KingListItem.succession` (27왕 분류: normal / coup / usurpation / abdication / forced_abdication / short_lived / enthronement)
- `KingDetail.hookLine` (27왕 드라마 한 줄 카피)
- `KingData.transitionFromPrev` (15 핵심 왕 브릿지 시드)

### 2.3 성능 (Phase 3)
- 동적 import 코드 스플리팅
- 메인: 602 kB → **119 kB gzip** (50% 절감)
- 왕별 chunk: 평균 4.5kB / 최대 12.8kB (sejong)
- `App.tsx` async `loadKingData` 패턴

### 2.4 UX 자체 평가 (옵션 C)
- `docs/UX_HEURISTIC_FINDINGS.md` — 35건 (치명 3, 심각 8)
- `docs/UX_CULTURAL_FINDINGS.md` — 27건 + hookLine 시드 30개
- `docs/UX_MOBILE_FINDINGS.md` — 28건 (치명 4)
- 총 **90 결함**, 치명 **7건**

### 2.5 의뢰·평가 인프라 문서 4종
- `ROADMAP.md` — 5 Phase 계획
- `docs/DESIGN_BRIEF.md` — 외부 디자이너 의뢰서 13장
- `docs/DESIGN_BRIEF_RESPONSES.md` — 12문항 답변
- `docs/UX_ADVISORY_PANEL.md` — 6좌석 평가팀 구성안

---

## 3. 진행 중 (In Flight)

### 3.1 외부 디자이너 1차안 대기
- DESIGN_BRIEF + RESPONSES 작성 완료, 전달 대기
- 1차안 도착 후 외부 평가 패널(옵션 B) 동시 가동 권장

### 3.2 데이터 ↔ UI 미연결
- Phase 2 데이터(succession, hookLine, transitionFromPrev)가 데이터 단에만 존재
- 컴포넌트(Level1MacroView, Level2EventView 등)에서 노출 안 됨
- → 다음 작업의 우선순위 0

---

## 4. 즉시 처리 가능한 치명 결함 7건

| ID | 영역 | 현상 | 수정비용 |
|---|---|---|---|
| H E-002 | Heuristic | 첫 진입 줌 UX 온보딩 힌트 전무 | M |
| H E-028 | Heuristic | replaceState로 Back 버튼이 앱 외부 이탈 | S |
| M-001 | Mobile | handleTouchMove의 preventDefault로 핀치 줌 차단 | S |
| M-002 | Mobile | 모든 조작 버튼이 상단 Nav 집중 — 한 손 엄지 도달 불가 | M |
| M-003 | Mobile | 320px Nav 레이아웃 붕괴 | S |
| C-003 | Cultural | 영조 unofficialHistory의 픽션 경계 초과 | S |
| C-009 | Cultural | 인조 detail.title "屈辱의 군주" — 사건 탐색 전 판결 강제 | S |

총 수정 비용 추정: **S 5건 + M 2건 ≈ 1-2일**

---

## 5. 다음 작업 후보 (우선순위 순)

1. **치명 결함 7건 패치** (1-2일) — 외부 의뢰 전 기본 품질 확보
2. **Phase 2 데이터의 UI 통합** (2-3일):
   - L1: hookLine 표시
   - L2: transitionFromPrev 카드 (왕 진입 시 페이드 인)
   - L1: succession 메타 시각화 (반정·찬탈·단명 차등)
3. **OG 공유 카드 시스템** (Phase 4 일부, 2일)
4. **모바일 한 손 액션 바** (M-002 후속, 1-2일)
5. **배포** (Vercel, 0.5일)

---

## 6. 리스크 / 블로커

| 리스크 | 영향 | 대응 |
|---|---|---|
| 디자이너 1차안 지연 | 디자인 시스템 정립 지연 | 자체 결함 7건 처리로 시간 메움 |
| 외부 평가 패널 비용 (옵션 B 600만원) | 예산 부담 | 자체 평가 90건이 결함 90% 커버 — 외부는 디자이너 1차안 후 단축판으로 |
| 윤달 fetch 미지원 | 일부 articleId 수동 보충 필요 | 사도세자 외 추가 발생 시 fetch-itkc.mjs 정규식 보강 |
| L3.5 이미지 부재 | 몰입감 한계 | Phase X 보류 (의뢰자 명시) |

---

## 7. 주요 메트릭 추이

| 지표 | 시작점 | 현재 | 목표(v1.0) |
|---|---|---|---|
| 메인 번들 (gzip) | 205kB | **119kB** | <200kB ✅ |
| storyEntry 커버리지 | 32% | **~70%** | 100% |
| sillokEntry 커버리지 | 44% | **~80%** | 100% |
| UX 결함 (치명) | 미측정 | 7건 | 0건 |
| 모바일 320px 동작 | 붕괴 | 붕괴 | 정상 |

---

## 8. 최근 커밋 (5개)

```
33f9c3d chore: ignore test-results and playwright-report
07e59c1 feat: phases 1-3 + UX self-evaluation panel results
467e53b docs: roadmap, design brief, brief responses, ux advisory panel
44c1bd8 feat(data): add storyEntry + sillokEntry for 20 remaining kings
f14e25a fix(ui): single-scene L3.5 view with navigation, contextual L3 hint
```

---

## 9. 다음 의사결정이 필요한 항목

- [ ] 치명 결함 7건을 자체 처리할지, 디자이너 1차안 후 통합 처리할지
- [ ] 외부 평가 패널(옵션 B 600만원) 진행 시점 — 1차안 도착 후로 확정?
- [ ] 배포 도메인 확정 (joseon-sillok.com 등)
- [ ] L3.5 이미지 생성 시점 — Phase X로 계속 보류?

— 보고 끝
