import type { KingData } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Level4Props {
  kingData: KingData;
  eventIndex: number;
  onNavigateEvent: (direction: 'prev' | 'next') => void;
}

export function Level4SillokView({ kingData, eventIndex, onNavigateEvent }: Level4Props) {
  const safeIndex = Math.min(eventIndex, kingData.events.length - 1);
  const currentEvent = kingData.events[safeIndex];
  const sillokEntry = currentEvent.sillokEntry ?? kingData.sillokEntry;
  const isEventSpecific = !!currentEvent.sillokEntry;
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-32">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => onNavigateEvent('prev')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={16} />이전
        </button>
        <span className="text-xs opacity-40 tracking-widest">{safeIndex + 1} / {kingData.events.length}</span>
        <button
          onClick={() => onNavigateEvent('next')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          다음<ChevronRight size={16} />
        </button>
      </div>

      <div className="flex items-start justify-between border-b-2 border-black/10 pb-6 mb-12">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase opacity-60 mb-1">조선왕조실록 (Veritable Records)</span>
          {!isEventSpecific && (
            <span className="block text-[10px] tracking-widest opacity-30 mb-2 italic">
              {kingMeta?.name ?? kingData.id} 대표 기사 — {currentEvent.title}와 연관
            </span>
          )}
          <h2 className="text-[48px] font-serif font-bold leading-[1.4] tracking-[-0.02em]">{sillokEntry.title}</h2>
          <span className="block text-sm opacity-50 mt-2">{sillokEntry.date}</span>
        </div>
        <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center bg-black/5 shrink-0">
          <span className="font-serif font-bold text-sm text-center px-1">{kingMeta?.name?.slice(2) ?? ''}</span>
        </div>
      </div>

      <div className="mb-12 relative flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex justify-end">
          <div className="vertical-rl font-gungsuh text-[18px] leading-[1.8] opacity-80 h-[400px]">
            {sillokEntry.original}
          </div>
        </div>

        <div className="md:w-2/3 relative z-10">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">국역 (Translation)</span>
            <div className="h-px bg-black/10 flex-1"></div>
          </div>
          <p className="font-serif text-[18px] leading-[1.8] text-justify break-keep mb-12">
            {sillokEntry.translation}
          </p>

          {sillokEntry.commentary && (
            <div className="bg-[#E2E7E4]/50 rounded-r-2xl border-l-4 border-[#90A4AE] p-8 relative mb-12">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                사신은 논한다 <span className="opacity-50 font-normal">(Historian's Commentary)</span>
              </h3>
              <p className="font-serif text-[18px] leading-[1.8] italic opacity-90">
                {sillokEntry.commentary}
              </p>
            </div>
          )}

          {sillokEntry.sourceUrl && (
            <div className="pt-6 border-t border-black/8 flex items-center gap-3">
              <span className="text-[9px] tracking-[0.3em] uppercase opacity-30">출처</span>
              <a
                href={sillokEntry.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs opacity-40 hover:opacity-80 transition-opacity underline underline-offset-2 font-mono"
              >
                조선왕조실록 {sillokEntry.articleId}
              </a>
              <span className="text-[9px] opacity-20">— 국사편찬위원회</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
