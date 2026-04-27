export interface KingEvent {
  readonly year: number;
  readonly title: string;
  readonly desc: string;
}

export interface KingFigure {
  readonly name: string;
  readonly role: string;
}

export interface KingDetail {
  readonly date: string;
  readonly hanjaChar: string;
  readonly title: string;
  readonly desc: string;
  readonly unofficialHistory: string;
  readonly figures: readonly KingFigure[];
}

export interface KingSillokEntry {
  readonly date: string;
  readonly title: string;
  readonly original: string;
  readonly translation: string;
  readonly commentary: string;
}

export interface KingData {
  readonly id: string;
  readonly events: readonly KingEvent[];
  readonly detail: KingDetail;
  readonly sillokEntry: KingSillokEntry;
}

export interface KingListItem {
  readonly id: string;
  readonly name: string;
  readonly reign: string;
  readonly years: number;
  readonly desc: string;
}

export interface EraColor {
  readonly primary: string;
  readonly secondary: string;
}

export interface Era {
  readonly id: number;
  readonly name: string;
  readonly kings: string;
  readonly period: string;
  readonly keyword: string;
  readonly description: string;
  readonly color: EraColor;
  readonly kingsList: readonly KingListItem[];
}
