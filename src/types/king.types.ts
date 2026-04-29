export interface KingEvent {
  readonly year: number;
  readonly title: string;
  readonly desc: string;
  readonly hanjaChar?: string;
  readonly unofficialHistory?: string;
  readonly unofficialHistorySourceLevel?: 'sillok' | 'historical-record' | 'tradition';
  readonly figures?: readonly KingFigure[];
  readonly sillokEntry?: KingSillokEntry;
  readonly storyEntry?: KingStoryEntry;
}

export interface KingFigure {
  readonly name: string;
  readonly role: string;
}

export interface KingStoryScene {
  readonly imagePrompt: string;
  readonly narration: string;
  readonly durationMs?: number;
}

export interface KingStoryEntry {
  readonly title: string;
  readonly scenes: readonly KingStoryScene[];
  readonly generatedAt?: string;
  readonly sourceArticleId?: string;
}

export interface KingDetail {
  readonly date: string;
  readonly hanjaChar: string;
  readonly title: string;
  readonly desc: string;
  readonly unofficialHistory: string;
  readonly unofficialHistorySourceLevel?: 'sillok' | 'historical-record' | 'tradition';
  readonly figures: readonly KingFigure[];
  readonly hookLine?: string;
}

export interface KingSillokEntry {
  readonly articleId?: string;
  readonly sourceUrl?: string;
  readonly date: string;
  readonly title: string;
  readonly original?: string;
  readonly translation: string;
  readonly commentary?: string;
}

export interface KingData {
  readonly id: string;
  readonly events: readonly KingEvent[];
  readonly detail: KingDetail;
  readonly sillokEntry: KingSillokEntry;
  readonly transitionFromPrev?: string;
}

export interface KingListItem {
  readonly id: string;
  readonly name: string;
  readonly reign: string;
  readonly years: number;
  readonly desc: string;
  readonly succession?: 'normal' | 'coup' | 'short_lived' | 'abdication' | 'usurpation' | 'enthronement' | 'forced_abdication';
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
