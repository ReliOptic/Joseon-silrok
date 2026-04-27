PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;

CREATE TABLE IF NOT EXISTS eras (
  id           INTEGER PRIMARY KEY,
  ordinal      INTEGER NOT NULL UNIQUE,
  name_ko      TEXT    NOT NULL,
  kings_range  TEXT    NOT NULL,
  period       TEXT    NOT NULL,
  keyword      TEXT    NOT NULL,
  description  TEXT    NOT NULL,
  color_primary   TEXT NOT NULL,
  color_secondary TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS kings (
  id           TEXT    PRIMARY KEY,
  era_id       INTEGER NOT NULL REFERENCES eras(id),
  ordinal      INTEGER NOT NULL UNIQUE,
  name_ko      TEXT    NOT NULL,
  name_hanja   TEXT    NOT NULL,
  reign_start  INTEGER NOT NULL,
  reign_end    INTEGER NOT NULL,
  years        INTEGER NOT NULL,
  summary      TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS events (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  king_id      TEXT    NOT NULL REFERENCES kings(id),
  year         INTEGER NOT NULL,
  reign_year   INTEGER,
  lunar_date   TEXT,
  title_ko     TEXT    NOT NULL,
  title_hanja  TEXT,
  summary_html TEXT    NOT NULL,
  tags         TEXT
);
CREATE INDEX IF NOT EXISTS idx_events_king ON events(king_id);
CREATE INDEX IF NOT EXISTS idx_events_year ON events(year);

CREATE TABLE IF NOT EXISTS sillok (
  id                INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id          INTEGER NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  volume            TEXT,
  date_lunar        TEXT,
  date_solar        TEXT,
  title_ko          TEXT NOT NULL,
  original_html     TEXT NOT NULL,
  translation_html  TEXT NOT NULL,
  commentary_html   TEXT,
  source_url        TEXT NOT NULL,
  is_hero           INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_sillok_event ON sillok(event_id);
