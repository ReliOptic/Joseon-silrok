// Extract the canonical permalink id (e.g. "kda_12512030_002") from a
// sillok.history.go.kr URL. Returns null for non-canonical URLs (e.g. the
// 어제 서문 row whose source_url shares the parent record).
const ID_RE = /\/id\/(k[a-z]{2}_[0-9R]+_[0-9]+)/i;

export function extractSourceId(url: string): string | null {
  const m = url.match(ID_RE);
  return m ? m[1] : null;
}
