// One JSONL line = one record. The id corresponds to the sillok.history.go.kr
// permalink id (e.g. "kda_12512030_002") and is what links a dump record to
// our seeded sillok rows.
export interface ImportedRecord {
  id: string;                 // required, matches sillok.source_id
  volume?: string;            // 권차/일자, e.g. "세종실록 102권, 세종 25년 12월 30일"
  date_lunar?: string;
  date_solar?: string;
  title_ko?: string;
  original?: string;          // raw text — importer wraps in <p>…</p>
  translation?: string;       // raw text — importer wraps in <p>…</p>
  commentary?: string;        // optional
  original_html?: string;     // pre-formatted HTML overrides the raw forms above
  translation_html?: string;
  commentary_html?: string;
}
