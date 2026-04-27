import type { KingData } from '../types/king.types';
import { ERAS } from '../data';

interface Level4Props {
  kingData: KingData;
}

export function Level4SillokView({ kingData }: Level4Props) {
  const { sillokEntry } = kingData;
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-32">
      <div className="flex items-start justify-between border-b-2 border-black/10 pb-6 mb-12">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase opacity-60 mb-2">조선왕조실록 (Veritable Records)</span>
          <h2 className="text-[48px] font-serif font-bold leading-[1.4] tracking-[-0.02em]">{sillokEntry.title}</h2>
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

          <div className="bg-[#E2E7E4]/50 rounded-r-2xl border-l-4 border-[#90A4AE] p-8 relative">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              사신은 논한다 <span className="opacity-50 font-normal">(Historian's Commentary)</span>
            </h3>
            <p className="font-serif text-[18px] leading-[1.8] italic opacity-90">
              {sillokEntry.commentary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
