export interface Era {
  id: number;
  ordinal: number;
  name_ko: string;
  kings_range: string;
  period: string;
  keyword: string;
  description: string;
  color: { primary: string; secondary: string };
}

export interface King {
  id: string;
  era_id: number;
  ordinal: number;
  name_ko: string;
  name_hanja: string;
  reign_start: number;
  reign_end: number;
  years: number;
  summary: string;
}

export interface EventRow {
  id: number;
  king_id: string;
  year: number;
  reign_year: number | null;
  lunar_date: string | null;
  title_ko: string;
  title_hanja: string | null;
  summary_html: string;
  tags: string[];
}

export interface SillokEntry {
  id: number;
  event_id: number;
  volume: string | null;
  date_lunar: string | null;
  date_solar: string | null;
  title_ko: string;
  original_html: string;
  translation_html: string;
  commentary_html: string | null;
  source_url: string;
  is_hero: boolean;
}
