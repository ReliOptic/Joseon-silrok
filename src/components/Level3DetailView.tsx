import { useState } from 'react';
import type { KingData } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Level3Props {
  kingData: KingData;
  eventIndex: number;
  onNavigateEvent: (direction: 'prev' | 'next') => void;
  zoomIn: () => void;
}

export function Level3DetailView({ kingData, eventIndex, onNavigateEvent, zoomIn }: Level3Props) {
  const [hoveredFigure, setHoveredFigure] = useState<number | null>(null);
  const { detail } = kingData;
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);
  const safeIndex = Math.min(eventIndex, kingData.events.length - 1);
  const event = kingData.events[safeIndex];
  const hanjaChar = event.hanjaChar ?? detail.hanjaChar;
  const unofficialHistory = event.unofficialHistory ?? detail.unofficialHistory;
  const unofficialHistorySourceLevel = event.unofficialHistorySourceLevel ?? detail.unofficialHistorySourceLevel;
  const figures = event.figures ?? detail.figures;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-32">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => onNavigateEvent('prev')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={16} />이전 사건
        </button>
        <span className="text-xs opacity-40 tracking-widest">{safeIndex + 1} / {kingData.events.length}</span>
        <button
          onClick={() => onNavigateEvent('next')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          다음 사건<ChevronRight size={16} />
        </button>
      </div>

      <div className="mb-16">
        {kingMeta && (
          <span className="text-sm font-bold tracking-widest uppercase opacity-50 mb-2 block">
            {kingMeta.name} · {kingMeta.reign}
          </span>
        )}
        <h1 className="text-[48px] font-serif font-bold mb-4 leading-[1.4] tracking-[-0.02em]">{event.year}년</h1>
      </div>

      <div
        className="group bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl relative cursor-pointer hover:bg-white/50 transition-colors"
        onClick={zoomIn}
      >
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none select-none overflow-hidden">
          <span className="text-[200px] font-serif leading-none">{hanjaChar}</span>
        </div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold uppercase tracking-widest">{event.year}년</span>
        </div>

        <h2 className="text-[32px] font-serif font-bold mb-6 relative z-10 leading-[1.5] tracking-[-0.01em]">{event.title}</h2>
        <p className="text-base leading-[1.6] tracking-[-0.01em] opacity-90 mb-8 relative z-10">{event.desc}</p>

        <div className="relative z-10 bg-[#F5EFE6] p-6 rounded-2xl rounded-tl-none border border-[#F7B500]/30 shadow-sm mb-8 max-w-2xl">
          <div className="absolute -top-3 left-0 w-4 h-4 bg-[#F5EFE6] border-t border-l border-[#F7B500]/30 transform rotate-45"></div>
          <div className="flex items-center mb-2">
            <span className="text-xs font-bold text-[#F7B500]">야사 (Unofficial History)</span>
            {unofficialHistorySourceLevel && (
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ml-2 ${
                unofficialHistorySourceLevel === 'sillok'
                  ? 'bg-blue-100/60 text-blue-700'
                  : unofficialHistorySourceLevel === 'historical-record'
                  ? 'bg-amber-100/60 text-amber-700'
                  : 'bg-gray-100/60 text-gray-500'
              }`}>
                {unofficialHistorySourceLevel === 'sillok' ? '실록 기반' :
                 unofficialHistorySourceLevel === 'historical-record' ? '후대 사서' : '전승'}
              </span>
            )}
          </div>
          <p className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80">{unofficialHistory}</p>
          <span className="text-xs opacity-30 mt-3 block tracking-wide">출처: 조선왕조실록 (국사편찬위원회)</span>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-black/10 relative z-10">
          <div className="flex -space-x-3">
            {figures.slice(0, 3).map((fig, i) => (
              <div
                key={i}
                className="relative group"
                onMouseEnter={() => setHoveredFigure(i)}
                onMouseLeave={() => setHoveredFigure(null)}
              >
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px] font-bold overflow-hidden px-1 text-center cursor-default hover:border-black/30 transition-colors">
                  {fig.name}
                </div>
                {hoveredFigure === i && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-black/10 p-3 pointer-events-none z-20">
                    <p className="text-xs font-bold mb-1 leading-tight">{fig.name}</p>
                    <p className="text-[11px] opacity-70 leading-[1.5]">{fig.role}</p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white/95"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            <span className="text-sm opacity-60">관련 인물</span>
            {figures.length > 3 && (
              <span className="text-xs opacity-40 ml-1">+{figures.length - 3}</span>
            )}
          </div>
          <div className="ml-auto flex items-center gap-1 text-xs opacity-30 group-hover:opacity-60 transition-opacity">
            <span>{event.storyEntry ? '스토리 보기' : '실록 원문'}</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
}
