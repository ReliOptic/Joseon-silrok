import type { KingData } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronRight } from 'lucide-react';

interface Level2Props {
  kingData: KingData;
  zoomIn: () => void;
}

export function Level2EventView({ kingData, zoomIn }: Level2Props) {
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
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

      <div className="relative">
        <div className="absolute left-[15px] top-0 w-px h-full bg-black/20"></div>

        {kingData.events.map((ev, i) => (
          <div key={i} className="relative pl-12 mb-16 group cursor-pointer" onClick={zoomIn}>
            <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all"></div>

            {i < kingData.events.length - 1 && (
              <svg className="absolute left-[15px] top-4 w-12 h-24 pointer-events-none opacity-30" viewBox="0 0 50 100" fill="none">
                <path d="M 0 0 C 20 20, 20 80, 0 100" stroke="black" strokeWidth="1" />
              </svg>
            )}

            <span className="text-xl font-bold opacity-60 mb-1 block">{ev.year}</span>
            <h3 className="text-[32px] font-serif font-bold mb-3 group-hover:text-[#1F3A69] transition-colors leading-[1.5] tracking-[-0.01em]">
              {ev.title}
            </h3>
            <p className="text-base opacity-80 leading-[1.6] tracking-[-0.01em]">{ev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
