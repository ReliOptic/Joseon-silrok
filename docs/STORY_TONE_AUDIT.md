# storyEntry 톤·문장 일관성 감사 보고서

감사 일자: 2026-04-29
대상: `src/data/*.ts` 27개 파일, 전체 storyEntry

---

## 감사 기준

| 항목 | 기준 |
|---|---|
| title | 7–15자, 시적/극적 한 줄, 명사구 또는 짧은 문장 |
| narration | 한국어 1–2문장, 사신 commentary 톤(절제+사실+해석), 90–130자 권장 |
| imagePrompt | 영문 한 문장, lighting/composition/mood 키워드 포함, 한국풍 사극 스타일 |
| 구조 | storyEntry당 scenes 3개 (표준) |
| 사신 논평 | scene 3에 "사신은 논한다." 오프너, 해석·평가 톤 |

기준 파일: `sejong.ts`, `yeongjo.ts` (baseline)

---

## 발견된 결함 및 조치

### 1. `heonjong.ts` — 중복 이벤트 (CRITICAL DATA BUG)

**결함**: year 1846이 두 개의 별도 event 객체로 존재.
- 첫 번째: title "스물다섯, 새남터의 모래밭" (storyEntry만, sillokEntry 없음)
- 두 번째: title "스물다섯의 순교" (storyEntry + sillokEntry 포함, 더 완성도 높음)

두 entry 모두 동일 주제(김대건 신부 순교)로 중복. 매니페스트 entry 수를 1 인위적으로 부풀리는 데이터 버그.

**조치**: 첫 번째 entry ("스물다섯, 새남터의 모래밭") 제거. sillokEntry가 결합된 두 번째 entry ("스물다섯의 순교") 유지.

**결과**: heonjong 6 → 5 events, 전체 158 entries (중복 제거 후 정상).

---

### 2. `seongjong.ts` — 홍문관 설치 scenes 2개 (STRUCTURAL OUTLIER)

**결함**: 홍문관 설치 storyEntry가 scenes 2개만 보유. 표준은 3개.

**Before** (scene 2, 마지막):
> "임금은 경연에 성심을 다하였다. 홍문관의 학사들은 단순한 관료가 아니었다. 그들은 왕에게 직언할 수 있는 자리였고, 사림이 조정에 뿌리내리는 통로였다."

**조치**: scene 3 추가 (사신 논평):

**After** (scene 3 신규):
> imagePrompt: "A Hongmungwan scholar presenting a remonstrance memorial to King Seongjong in a calm palace corridor..."
> narration: "사신은 논한다. 홍문관은 학문의 집이었으나 동시에 간쟁의 보루였다. 왕의 잘못을 말할 수 있는 제도적 자리가 굳어진 것이야말로, 성종 치세가 후대에 남긴 가장 깊은 유산이었다."

---

### 3. `taejo.ts` — 한양 천도 scene 3 (TONE OUTLIER)

**결함**: scene 3 narration이 실록 원문을 그대로 패러프레이즈한 행정 기록 어조. 사신 commentary 아님.

**Before**:
> "각 관청의 관원 2명씩은 송경에 남아 행정의 실을 이어 갔고, 최영지와 우인열이 분도평의사사를 맡았다. 두 도읍 사이에 나라의 뼈대가 세워지고 있었다."

**After**:
> "사신은 논한다. 천도는 단순한 이사가 아니었다. 고려의 기억이 서린 개경을 떠난 것은 역성혁명의 의지를 땅에 새기는 행위였다. 오백 년 왕업의 뿌리가 한강 북쪽 이 땅에 내리기 시작하였다."

---

## 이상 없음 확인 파일

다음 파일들은 전체 정독 후 narration 길이·톤·구조 기준 통과로 판정:

`taejong.ts`, `jeongjong.ts`, `munjong.ts`, `danjong.ts`, `sejo.ts`, `yejong.ts`,
`yeonsangun.ts`, `jungjong.ts`, `injong.ts`, `myeongjong.ts`, `seonjo.ts`,
`gwanghaegun.ts`, `injo.ts`, `hyojong.ts`, `hyeonjong.ts`, `sukjong.ts`,
`gyeongjong.ts`, `jeongjo.ts`, `sunjo.ts`, `cheoljong.ts`, `gojong.ts`, `sunjong.ts`

`yejong.ts` 승하 이벤트는 scenes 2개이나, 이는 단명 군주의 짧은 치세를 반영한 의도적 구성으로 판단하여 보존.

---

## 검증 결과

| 항목 | 결과 |
|---|---|
| `node scripts/build-story-manifest.mjs` | 158 entries, 27 kings |
| `npm run build` (tsc --noEmit + vite) | 통과, 오류 없음 |
| 수정 파일 수 | 3개 (`heonjong.ts`, `seongjong.ts`, `taejo.ts`) |
| 총 변경 범위 | entry 1개 삭제, scene 1개 추가, narration 1개 교체 |

---

## entry 수 변경 내역

| 상태 | 수량 |
|---|---|
| 감사 전 (중복 포함) | 159 |
| 중복 entry 제거 | -1 |
| 감사 후 (정규화) | **158** |
