import { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { ERAS } from '../data';
import { loadKingData } from '../data/index';
import type { KingData } from '../types/king.types';

interface SearchResult { readonly kingId: string; readonly kingName: string; readonly eraId: number; readonly eventIndex: number; readonly year: number; readonly title: string; readonly desc: string; readonly hanjaChar?: string; readonly hasStory: boolean; readonly hasSillok: boolean; }

interface SearchModalProps { readonly onSelect: (kingId: string, eventIndex: number) => void; readonly onClose: () => void; }
interface Filters { readonly storyOnly: boolean; readonly sillokOnly: boolean; readonly era: number | null; }

const ERA_SHORT_NAMES: Record<number, string> = { 1: '제1기', 2: '제2기', 3: '제3기', 4: '제4기', 5: '제5기' };
const SUGGESTED_KEYWORDS = ['훈민정음', '임진왜란', '사육신', '한양 천도', '사도세자', '경복궁', '수원 화성', '병자호란'];

function buildResults(kingId: string, kingName: string, eraId: number, data: KingData): readonly SearchResult[] {
  return data.events.map((ev, i) => ({
    kingId, kingName, eraId, eventIndex: i,
    year: ev.year, title: ev.title, desc: ev.desc,
    hanjaChar: ev.hanjaChar, hasStory: !!ev.storyEntry, hasSillok: !!ev.sillokEntry,
  }));
}

function filterResults(pool: readonly SearchResult[], filters: Filters, query: string): readonly SearchResult[] {
  let out = pool;
  if (filters.storyOnly) out = out.filter(r => r.hasStory);
  if (filters.sillokOnly) out = out.filter(r => r.hasSillok);
  if (filters.era !== null) out = out.filter(r => r.eraId === filters.era);
  const q = query.trim();
  if (!q) return filters.storyOnly || filters.sillokOnly || filters.era !== null ? out.slice(0, 20) : [];
  const lower = q.toLowerCase();
  return out.filter(r =>
    r.title.includes(q) || r.title.toLowerCase().includes(lower) ||
    r.desc.includes(q) || r.desc.toLowerCase().includes(lower) ||
    r.kingName.includes(q) || String(r.year).includes(q) ||
    (r.hanjaChar !== undefined && r.hanjaChar.includes(q))
  ).slice(0, 20);
}

interface SearchInputRowProps { readonly query: string; readonly inputRef: React.RefObject<HTMLInputElement | null>; readonly onQuery: (q: string) => void; readonly onClose: () => void; }

function SearchInputRow({ query, inputRef, onQuery, onClose }: SearchInputRowProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-black/8">
      <Search size={18} className="opacity-40 shrink-0" />
      <input ref={inputRef} value={query} onChange={e => onQuery(e.target.value)}
        placeholder="왕 이름, 사건, 연도, 한자 검색..."
        className="flex-1 bg-transparent text-base outline-none placeholder:opacity-40 tracking-[-0.01em]" />
      {query && <button onClick={() => onQuery('')} className="opacity-30 hover:opacity-70 transition-opacity"><X size={16} /></button>}
      <span className="text-[10px] opacity-30 font-mono hidden sm:inline">⌘K &nbsp;/&nbsp; ESC</span>
      <button onClick={onClose} className="text-xs opacity-40 hover:opacity-70 transition-opacity ml-1 font-mono sm:hidden">ESC</button>
    </div>
  );
}

interface SearchFiltersProps { readonly filters: Filters; readonly onToggleStory: () => void; readonly onToggleSillok: () => void; readonly onToggleEra: (eraId: number) => void; }

function SearchFilters({ filters, onToggleStory, onToggleSillok, onToggleEra }: SearchFiltersProps) {
  return (
    <div className="px-4 py-2.5 border-b border-black/[0.06] bg-black/[0.015] flex flex-wrap gap-2 items-center">
      <button onClick={onToggleStory}
        className={`text-xs px-2.5 py-1 rounded-full border transition-all ${filters.storyOnly ? 'bg-amber-100 border-amber-400 text-amber-800 font-semibold' : 'border-black/15 opacity-50 hover:opacity-80'}`}>
        📖 스토리 있는 사건만
      </button>
      <button onClick={onToggleSillok}
        className={`text-xs px-2.5 py-1 rounded-full border transition-all ${filters.sillokOnly ? 'bg-blue-100 border-blue-400 text-blue-800 font-semibold' : 'border-black/15 opacity-50 hover:opacity-80'}`}>
        📜 실록 원문 있는 사건만
      </button>
      <div className="flex gap-1.5 flex-wrap">
        {ERAS.map(era => (
          <button key={era.id} onClick={() => onToggleEra(era.id)}
            className={`text-[11px] px-2 py-0.5 rounded-full border transition-all ${filters.era === era.id ? 'bg-stone-700 text-white border-stone-700 font-semibold' : 'border-black/15 opacity-45 hover:opacity-75'}`}>
            {ERA_SHORT_NAMES[era.id] ?? `제${era.id}기`}
          </button>
        ))}
      </div>
    </div>
  );
}

interface SearchResultsListProps { readonly results: readonly SearchResult[]; readonly allResults: readonly SearchResult[]; readonly filters: Filters; readonly storyCount: number; readonly sillokCount: number; readonly onSelect: (r: SearchResult) => void; }

function SearchResultsList({ results, allResults, filters, storyCount, sillokCount, onSelect }: SearchResultsListProps) {
  return (
    <>
      <div className="px-4 pt-2 pb-1 text-[10px] opacity-40 font-mono">
        전체 {results.length}건
        {storyCount > 0 && ` · 스토리 ${allResults.filter(r => r.hasStory && (filters.era === null || r.eraId === filters.era)).length}`}
        {sillokCount > 0 && ` · 실록 ${allResults.filter(r => r.hasSillok && (filters.era === null || r.eraId === filters.era)).length}`}
      </div>
      <ul className="max-h-[45vh] overflow-y-auto">
        {results.map(r => (
          <li key={`${r.kingId}-${r.eventIndex}`}>
            <button className="w-full text-left px-4 py-2.5 hover:bg-black/5 transition-colors border-b border-black/[0.04] last:border-0"
              onClick={() => onSelect(r)}>
              <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                <span className="text-xs font-bold opacity-50">{r.kingName}</span>
                <span className="text-xs opacity-30">{r.year}년</span>
                <span className="text-[9px] opacity-30 border border-current rounded px-1 py-px leading-none">{ERA_SHORT_NAMES[r.eraId] ?? `제${r.eraId}기`}</span>
                {r.hasStory && <span className="text-[9px] font-bold bg-amber-100 text-amber-700 rounded px-1 py-px leading-none">📖 스토리</span>}
                {r.hasSillok && <span className="text-[9px] font-bold bg-blue-100 text-blue-700 rounded px-1 py-px leading-none">📜 실록</span>}
              </div>
              <p className="text-sm font-medium leading-snug">{r.title}</p>
              <p className="text-xs opacity-50 mt-0.5 leading-relaxed line-clamp-1">{r.desc}</p>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

interface SearchSuggestProps { readonly allResults: readonly SearchResult[]; readonly storyCount: number; readonly sillokCount: number; readonly onKeyword: (kw: string) => void; }

function SearchSuggest({ allResults, storyCount, sillokCount, onKeyword }: SearchSuggestProps) {
  return (
    <div className="px-4 py-4">
      <p className="text-xs opacity-30 mb-3 text-center">
        {allResults.length > 0 ? `조선 왕조 전체 ${allResults.length}개 사건 · 스토리 ${storyCount} · 실록원문 ${sillokCount}` : '검색 인덱스 로딩 중...'}
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {SUGGESTED_KEYWORDS.map(kw => (
          <button key={kw} onClick={() => onKeyword(kw)}
            className="text-xs px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 transition-colors opacity-60 hover:opacity-90">{kw}</button>
        ))}
      </div>
      <p className="text-[10px] opacity-20 text-center mt-4 font-mono">⌘K 또는 / 로 열기 · ESC 로 닫기</p>
    </div>
  );
}

export function SearchModal({ onSelect, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [allResults, setAllResults] = useState<readonly SearchResult[]>([]);
  const [filters, setFilters] = useState<Filters>({ storyOnly: false, sillokOnly: false, era: null });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const map = ERAS.flatMap(era => era.kingsList.map(k => ({ kingId: k.id, kingName: k.name, eraId: era.id })));
    Promise.all(map.map(({ kingId, kingName, eraId }) =>
      loadKingData(kingId).then(data => buildResults(kingId, kingName, eraId, data))
    )).then(chunks => setAllResults(chunks.flat()));
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const results = useMemo(() => filterResults(allResults, filters, query), [query, allResults, filters]);
  const storyCount = useMemo(() => allResults.filter(r => r.hasStory).length, [allResults]);
  const sillokCount = useMemo(() => allResults.filter(r => r.hasSillok).length, [allResults]);
  const hasActiveFilter = filters.storyOnly || filters.sillokOnly || filters.era !== null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh] bg-black/40 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-label="사건 검색"
        className="w-full max-w-xl mx-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-black/10 overflow-hidden">
        <SearchInputRow query={query} inputRef={inputRef} onQuery={setQuery} onClose={onClose} />
        <SearchFilters filters={filters}
          onToggleStory={() => setFilters(f => ({ ...f, storyOnly: !f.storyOnly }))}
          onToggleSillok={() => setFilters(f => ({ ...f, sillokOnly: !f.sillokOnly }))}
          onToggleEra={eraId => setFilters(f => ({ ...f, era: f.era === eraId ? null : eraId }))} />
        {results.length > 0 && (
          <SearchResultsList results={results} allResults={allResults} filters={filters}
            storyCount={storyCount} sillokCount={sillokCount}
            onSelect={r => { onSelect(r.kingId, r.eventIndex); onClose(); }} />
        )}
        {(query.trim() || hasActiveFilter) && results.length === 0 && (
          <div className="px-4 py-8 text-center text-sm opacity-40">
            {query.trim() ? `"${query}"에 해당하는 사건이 없습니다` : '선택한 필터에 해당하는 사건이 없습니다'}
          </div>
        )}
        {!query.trim() && !hasActiveFilter && (
          <SearchSuggest allResults={allResults} storyCount={storyCount} sillokCount={sillokCount} onKeyword={setQuery} />
        )}
      </div>
    </div>
  );
}
