import type { KingData, KingListItem } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TransitionCard } from './TransitionCard';

interface Level2Props {
  kingData: KingData;
  onSelectEvent: (index: number) => void;
  prevKing: KingListItem | null;
  nextKing: KingListItem | null;
  onNavigateKing: (id: string, direction: 'prev' | 'next') => void;
}

export function Level2EventView({ kingData, onSelectEvent, prevKing, nextKing, onNavigateKing }: Level2Props) {
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      {/* King-level prev/next nav */}
      <div className="flex items-center justify-between mb-6">
        {prevKing ? (
          <button onClick={() => onNavigateKing(prevKing.id, 'prev')} className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity">
            <ChevronLeft size={16} />{prevKing.name}
          </button>
        ) : <span />}
        {nextKing ? (
          <button onClick={() => onNavigateKing(nextKing.id, 'next')} className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity">
            {nextKing.name}<ChevronRight size={16} />
          </button>
        ) : <span />}
      </div>

      {/* Transition card */}
      {kingData.transitionFromPrev && (
        <TransitionCard kingId={kingData.id} text={kingData.transitionFromPrev} />
      )}

      {/* King header */}
      <div className="mb-20">
        {kingMeta && (
          <span className="text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block">
            {kingMeta.reign}
          </span>
        )}
        <h1 className="text-[48px] font-serif font-bold mb-4 leading-[1.4] tracking-[-0.02em]">
          {kingMeta?.name ?? kingData.id}
        </h1>
        {kingMeta && (
          <p className="text-xl opacity-80">{kingMeta.reign} · 재위 {kingMeta.years}년</p>
        )}
      </div>

      {/* Events timeline */}
      <div className="relative">
        <div className="absolute left-[15px] top-0 w-px h-full bg-black/20"></div>

        {kingData.events.map((ev, i) => (
          <div key={i} className="relative pl-12 mb-16 group cursor-pointer" onClick={() => onSelectEvent(i)}>
            <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all"></div>

            {i < kingData.events.length - 1 && (
              <svg className="absolute left-[15px] top-4 w-12 h-24 pointer-events-none opacity-30" viewBox="0 0 50 100" fill="none">
                <path d="M 0 0 C 20 20, 20 80, 0 100" stroke="black" strokeWidth="1" />
              </svg>
            )}

            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xl font-bold opacity-60">{ev.year}</span>
              {ev.sillokEntry && (
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-40 border border-current rounded px-1.5 py-0.5">실록</span>
              )}
            </div>
            <h3 className="text-[32px] font-serif font-bold mb-3 group-hover:text-[#1F3A69] transition-colors leading-[1.5] tracking-[-0.01em]">
              {ev.title}
            </h3>
            <p className="text-base opacity-80 leading-[1.6] tracking-[-0.01em]">{ev.desc}</p>
          </div>
        ))}
      </div>

      {/* End-of-reign divider */}
      <div className="mt-24 mb-16 flex items-center gap-4">
        <div className="h-px flex-1 bg-black/10" />
        <span className="text-xs tracking-[0.4em] uppercase opacity-30">
          재위 종료 {kingMeta?.reign?.split('–')[1]?.trim() ?? ''}
        </span>
        <div className="h-px flex-1 bg-black/10" />
      </div>

      {/* Next king immersive CTA */}
      {nextKing && (
        <button
          onClick={() => onNavigateKing(nextKing.id, 'next')}
          className="w-full group bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-white/60 transition-all text-left"
        >
          <span className="text-xs tracking-[0.35em] uppercase opacity-40 block mb-4">다음 왕</span>
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-[36px] font-serif font-bold leading-[1.3] mb-2">{nextKing.name}</h3>
              <p className="text-sm opacity-50 mb-3">{nextKing.reign} · 재위 {nextKing.years}년</p>
              <p className="text-base opacity-70 leading-relaxed line-clamp-2">{nextKing.desc}</p>
            </div>
            <ChevronRight
              size={36}
              className="opacity-20 group-hover:opacity-70 group-hover:translate-x-2 transition-all shrink-0"
            />
          </div>
        </button>
      )}

      {/* Prev king — shown only if no next (last king) */}
      {!nextKing && prevKing && (
        <button
          onClick={() => onNavigateKing(prevKing.id, 'prev')}
          className="w-full group bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-white/60 transition-all text-left"
        >
          <span className="text-xs tracking-[0.35em] uppercase opacity-40 block mb-4">이전 왕</span>
          <div className="flex items-center gap-6">
            <ChevronLeft
              size={36}
              className="opacity-20 group-hover:opacity-70 group-hover:-translate-x-2 transition-all shrink-0"
            />
            <div>
              <h3 className="text-[36px] font-serif font-bold leading-[1.3] mb-2">{prevKing.name}</h3>
              <p className="text-sm opacity-50">{prevKing.reign} · 재위 {prevKing.years}년</p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
