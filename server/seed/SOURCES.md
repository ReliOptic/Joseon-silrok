# Sources & Provenance

Every `sillok` row in the seeded DB carries a `source_url` permalink at
`sillok.history.go.kr` and a parsed `source_id`. Entries shipped via
`server/seed/events/*` are flagged `provenance='authored'` until a real
`db:import` run swaps them for the official text.

The authored text in this branch was hand-typed against well-attested
primary records and standard secondary references. The `source_url` on
each row is the *canonical* address to verify against — when in doubt,
follow it.

## Primary

- **국사편찬위원회 — 조선왕조실록** · <https://sillok.history.go.kr/>
  Single authoritative permalink space. Every authored row's `source_url`
  resolves into this corpus.
- **공공데이터포털 — 조선왕조실록 정보 (실록원문)** ·
  <https://www.data.go.kr/data/15053647/fileData.do>
  Bulk dataset (registration required). Convert to JSONL and feed into
  `npm run db:import` to overwrite authored text with the official copy.
- **한국고전번역원 한국고전종합DB** · <https://db.itkc.or.kr/dir/item?itemId=JT>
  Cross-translations and apparatus.

## Secondary (cross-checks)

- **한국학중앙연구원 — 한국민족문화대백과사전** · <https://encykorea.aks.ac.kr/>
  Used to cross-check reign dates, ordinal numbering, and biographical
  framing in `server/seed/kings.ts`.
- **국사편찬위원회 — 우리역사넷** · <https://contents.history.go.kr/>
  Narrative summaries used to corroborate event-level descriptions.

## Per-entry permalinks shipped in this batch

The headline rows below all link back into sillok.history.go.kr. The
`source_id` extracted from each URL is what the importer/verifier joins
on.

### Era 1

- 태조 1년 7월 17일 · 즉위 — `kaa_10107017_002`
- 태조 1년 7월 28일 · 즉위교서 — `kaa_10107028_001`
- 태조 3년 10월 28일 · 한양 천도 — `kaa_10310028_001`
- 태조 7년 8월 26일 · 1차 왕자의 난 — `kaa_10708026_001`
- 정종 1년 3월 7일 · 개경 환도 — `kba_10103007_001`
- 정종 2년 1월 28일 · 2차 왕자의 난 — `kba_10201028_001`
- 정종 2년 11월 13일 · 양위 — `kba_10211013_001`
- 태종 2년 8월 1일 · 신문고 — `kca_10208001_001`
- 태종 13년 9월 1일 · 호패법 — `kca_11309001_001`
- 태종 18년 8월 10일 · 양위 — `kca_11808010_001`
- 세종 즉위년 8월 10일 · 즉위 — `kda_10008010_001`
- 세종 2년 3월 16일 · 집현전 직제 — `kda_10203016_001`
- 세종 16년 7월 1일 · 자격루 — `kda_11607001_001`
- 세종 23년 8월 18일 · 측우기 — `kda_12308018_001`
- 세종 25년 12월 30일 · 훈민정음 창제 — `kda_12512030_002`
- 세종 28년 9월 29일 · 훈민정음 반포 — `kda_12809029_004`
- 문종 즉위년 2월 22일 · 즉위 — `kea_10002022_001`
- 문종 1년 8월 25일 · 고려사 찬진 — `kea_10108025_001`
- 단종 즉위년 5월 18일 · 즉위 — `kfa_10005018_001`
- 단종 1년 10월 10일 · 계유정난 — `kfa_10110010_002`
- 단종 3년 윤6월 11일 · 양위 — `kfa_103R06011_001`
- 세조 2년 6월 2일 · 사육신 — `kga_10206002_001`
- 세조 3년 10월 21일 · 노산군 졸 — `kga_10310021_002`
- 세조 12년 8월 25일 · 직전법 — `kga_11208025_001`

## Workflow

1. **Curate or revise** seed text in `server/seed/events/*.ts`. All rows
   stay `provenance='authored'`.
2. **Acquire** the official dataset from data.go.kr and convert to the
   JSONL schema documented in the root README.
3. **Run `npm run db:verify`** against your dump — non-zero exit means
   our authored text disagrees with the corpus. Inspect the printed
   samples and revise either the seed (if we got it wrong) or your dump
   normalisation (if it's a punctuation/encoding difference).
4. **Run `npm run db:import`** to apply the dump. Affected rows flip to
   `provenance='imported'` with an `imported_at` timestamp. Subsequent
   `db:seed` runs reset everything back to `authored`.
