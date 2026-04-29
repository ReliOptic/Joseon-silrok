import { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { ERAS } from '../data';
import { loadKingData } from '../data/index';
import type { KingData } from '../types/king.types';

interface SearchResult {
  readonly kingId: string;
  readonly kingName: string;
  readonly eventIndex: number;
  readonly year: number;
  readonly title: string;
  readonly desc: string;
  readonly hasSillok: boolean;
}

interface SearchModalProps {
  onSelect: (kingId: string, eventIndex: number) => void;
  onClose: () => void;
}

function buildResults(kingId: string, kingName: string, data: KingData): readonly SearchResult[] {
  return data.events.map((ev, i) => ({
    kingId,
    kingName,
    eventIndex: i,
    year: ev.year,
    title: ev.title,
    desc: ev.desc,
    hasSillok: !!ev.sillokEntry,
  }));
}

export function SearchModal({ onSelect, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [allResults, setAllResults] = useState<readonly SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const kings = ERAS.flatMap(era => era.kingsList);
    Promise.all(
      kings.map(king =>
        loadKingData(king.id).then(data => buildResults(king.id, king.name, data))
      )
    ).then(chunks => setAllResults(chunks.flat()));
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const results = useMemo<readonly SearchResult[]>(() => {
    const q = query.trim();
    if (!q) return [];
    const lower = q.toLowerCase();
    return allResults.filter(r =>
      r.title.includes(q) ||
      r.desc.includes(q) ||
      r.kingName.includes(q) ||
      String(r.year).includes(lower)
    ).slice(0, 12);
  }, [query, allResults]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] bg-black/40 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-xl mx-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-black/10 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-black/8">
          <Search size={18} className="opacity-40 shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="왕 이름, 사건, 연도 검색..."
            className="flex-1 bg-transparent text-base outline-none placeholder:opacity-40 tracking-[-0.01em]"
          />
          {query && (
            <button onClick={() => setQuery('')} className="opacity-30 hover:opacity-70 transition-opacity">
              <X size={16} />
            </button>
          )}
          <button onClick={onClose} className="text-xs opacity-40 hover:opacity-70 transition-opacity ml-1 font-mono">ESC</button>
        </div>

        {results.length > 0 && (
          <ul className="max-h-[50vh] overflow-y-auto">
            {results.map(r => (
              <li key={`${r.kingId}-${r.eventIndex}`}>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-black/5 transition-colors border-b border-black/[0.04] last:border-0"
                  onClick={() => { onSelect(r.kingId, r.eventIndex); onClose(); }}
                >
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className="text-xs font-bold opacity-50">{r.kingName}</span>
                    <span className="text-xs opacity-30">{r.year}년</span>
                    {r.hasSillok && (
                      <span className="text-[9px] font-bold tracking-widest uppercase opacity-40 border border-current rounded px-1 py-0.5 leading-none">실록</span>
                    )}
                  </div>
                  <p className="text-sm font-medium leading-snug">{r.title}</p>
                  <p className="text-xs opacity-50 mt-0.5 leading-relaxed line-clamp-1">{r.desc}</p>
                </button>
              </li>
            ))}
          </ul>
        )}

        {query.trim() && results.length === 0 && (
          <div className="px-4 py-8 text-center text-sm opacity-40">
            "{query}"에 해당하는 사건이 없습니다
          </div>
        )}

        {!query.trim() && (
          <div className="px-4 py-5">
            <p className="text-xs opacity-30 mb-3 text-center">
              {allResults.length > 0 ? `조선 왕조 전체 사건 ${allResults.length}개` : '검색 인덱스 로딩 중...'}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['훈민정음', '임진왜란', '사육신', '한양 천도', '사도세자', '경복궁', '수원 화성', '병자호란'].map(kw => (
                <button
                  key={kw}
                  onClick={() => setQuery(kw)}
                  className="text-xs px-3 py-1.5 rounded-full bg-black/5 hover:bg-black/10 transition-colors opacity-60 hover:opacity-90"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
