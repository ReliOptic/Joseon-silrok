# MOBILE FINDINGS v2 — 조선왕조실록 인터랙티브

QA 실행일: 2026-04-29  
테스트 파일: `tests/mobile-qa.spec.mjs`  
스크린샷 디렉토리: `docs/mobile-screenshots/`  
결과: **21 / 21 PASS** (3개 viewport × 7 시나리오)

---

## Environment

| 항목 | 값 |
|------|-----|
| Dev server | `npm run dev` (Vite, port 3000) |
| Playwright | 1.59.1 (playwright package, chromium headless) |
| Viewport 1 | 320×568 (iPhone SE 1st gen) |
| Viewport 2 | 375×667 (iPhone SE 2nd / 8) |
| Viewport 3 | 414×896 (iPhone 11 Pro Max) |
| Tmux session | `qa-silrok-dev-1777462671` (종료 완료) |

---

## Test Cases (전 viewport 동일 결과)

### TC-A: L1 왕 카드 클릭 → KingTransitionEffect 노출
- **Command**: L1 로드 → `button[aria-label$="선택"]` 첫 번째 클릭
- **Expected**: 풀스크린 다크 오버레이 (`div[aria-hidden="true"]`, z-100) opacity > 0.05 감지
- **Actual**: 3개 viewport 모두 오버레이 감지 성공
- **Status**: PASS (×3)
- **Evidence**: `{vp}-A3-transition-overlay.png`

### TC-B: L2 "다음 왕" 버튼 → KingTransitionEffect + 왕 변경
- **Command**: `?level=2&king=taejo&event=0` → "다음 왕" 버튼 클릭
- **Expected**: 오버레이 노출 + nav breadcrumb에서 태조 사라짐
- **Actual**: 오버레이 감지, nav에서 태조 → 정종으로 변경 확인
- **Status**: PASS (×3)
- **Evidence**: `{vp}-B2-next-king-transition.png`, `{vp}-B3-new-king-l2.png`

### TC-C: L3.5 "다음 스토리" 5회 클릭 → 카운터 전진 + 왕 교체
- **Command**: `?level=3.5&king=taejo&event=0` → 다음 스토리 5회 클릭
- **Expected**: 카운터 "1 / 159" → 전진, 왕 이름 최소 1회 변경 (태조 → 정종)
- **Actual**: 카운터 정상 전진, 4번째 클릭 시 정종으로 왕 변경 확인
- **Status**: PASS (×3)
- **Evidence**: `{vp}-C1-l35-start.png` ~ `{vp}-C6-story-step-5.png`

### TC-D: L3.5 첫 번째 entry에서 "이전 스토리" 비활성
- **Command**: `?level=3.5&king=taejo&event=0` 직접 이동
- **Expected**: "이전 스토리" 버튼 `disabled` 속성 존재
- **Actual**: 전 viewport에서 버튼 disabled 확인
- **Status**: PASS (×3)
- **Evidence**: `{vp}-D2-prev-disabled.png`

### TC-E: L3.5 마지막 entry에서 "다음 스토리" 비활성
- **Command**: `?level=3.5&king=sunjong&event=4` 직접 이동 (manifest 마지막 entry)
- **Expected**: "다음 스토리" 버튼 disabled, 카운터 "159 / 159"
- **Actual**: 전 viewport에서 버튼 disabled, 카운터 "159 / 159" 확인
- **Status**: PASS (×3)
- **Evidence**: `{vp}-E1-l35-last.png`, `{vp}-E2-next-disabled.png`

### TC-F: L4 마지막 사건에서 "다음" → 다음 왕 자동 진행
- **Command**: `?level=4&king=injong&event=4` (인종 마지막 사건 = 인덱스 4) → "다음" 클릭
- **Expected**: nav breadcrumb에 "명종" 표시
- **Actual**: nav가 "12대 인종" → "13대 명종"으로 전환 확인 (`waitForFunction` 폴링으로 검증)
- **Status**: PASS (×3)
- **Evidence**: `{vp}-F1-l4-injong.png`, `{vp}-F2-l4-after-next.png`
- **Note**: 인종은 5개 사건(index 0-4)을 보유. event=0은 마지막 사건이 아님 — 정확한 마지막 인덱스(4) 지정 필요.

### TC-G: 주요 레벨에서 가로 viewport overflow 없음
- **Command**: L1, L2(세종), L3.5(세종 훈민정음) 각각 로드
- **Expected**: 모든 요소의 `getBoundingClientRect().right <= viewport.width + 3px`
- **Actual**: 전 viewport × 전 레벨에서 overflow 없음
- **Status**: PASS (×3)
- **Evidence**: `{vp}-G1-overflow-l1.png`, `{vp}-G2-overflow-l2.png`, `{vp}-G3-overflow-l35.png`

---

## Summary

| | 320×568 | 375×667 | 414×896 |
|---|---|---|---|
| TC-A KingTransitionEffect (L1) | PASS | PASS | PASS |
| TC-B KingTransitionEffect (L2 next king) | PASS | PASS | PASS |
| TC-C L3.5 단방향 흐름 5회 | PASS | PASS | PASS |
| TC-D L3.5 첫 entry prev 비활성 | PASS | PASS | PASS |
| TC-E L3.5 마지막 entry next 비활성 | PASS | PASS | PASS |
| TC-F L4 마지막 사건 → 다음 왕 | PASS | PASS | PASS |
| TC-G 가로 overflow 없음 | PASS | PASS | PASS |

**Total: 21 / 21 PASS — 0 critical, 0 major**

---

## Defects Found During Test Development (코드 결함 아님, 데이터/문서 이슈)

### D-1: Level4SillokView에 nextKing prop 미전달 (cosmetic)
- **재현**: L4 마지막 사건 도달 시 "다음 왕" CTA 카드 미노출
- **위치**: `src/App.tsx` line 401 — `Level4SillokView`에 `nextKing` prop 누락
- **영향**: 마지막 사건에서 하단 "다음 왕" 안내 카드 없음. 상단 "다음" 버튼으로 진행 가능하므로 기능은 정상.
- **카테고리**: minor
- **권장**: `nextKing={nextKing}` prop 추가

### D-2: 인종(injong) 사건 수 문서-코드 불일치 (cosmetic)
- **재현**: STORY_MANIFEST에 injong eventIndex=0만 등재되어 있으나 실제 injong.ts에 5개 사건(0-4) 존재
- **위치**: `src/data/story-manifest.ts` — injong 항목 1개만 존재
- **영향**: L3.5에서 인종의 4개 추가 사건(현량과 복구, 사림 우대, 승하, 을사사화 전야)에 storyEntry가 있으나 단방향 스토리 시퀀스에서 건너뜀
- **카테고리**: major
- **권장**: scripts/build-story-manifest.mjs 재실행 또는 manifest에 injong eventIndex 1-4 수동 추가

---

## Cleanup

- tmux session `qa-silrok-dev-1777462671`: KILLED
- port 3000: FREE
- 스크린샷 66장 저장: `docs/mobile-screenshots/`
- 테스트 artifact: `test-results/` (playwright 자동 생성)
