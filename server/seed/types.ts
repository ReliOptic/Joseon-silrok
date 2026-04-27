export interface SeedEra {
  ordinal: number;
  name_ko: string;
  kings_range: string;
  period: string;
  keyword: string;
  description: string;
  color: { primary: string; secondary: string };
}

export interface SeedKing {
  id: string;
  era_ordinal: number;
  ordinal: number;
  name_ko: string;
  name_hanja: string;
  reign_start: number;
  reign_end: number;
  summary: string;
}

export interface SeedSillok {
  volume?: string;
  date_lunar?: string;
  date_solar?: string;
  title_ko: string;
  original_html: string;
  translation_html: string;
  commentary_html?: string;
  source_url: string;
  is_hero?: boolean;
}

export interface SeedEvent {
  king_id: string;
  year: number;
  reign_year?: number;
  lunar_date?: string;
  title_ko: string;
  title_hanja?: string;
  summary_html: string;
  tags?: string[];
  sillok?: SeedSillok[];
}
