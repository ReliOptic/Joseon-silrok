import type { KingData } from '../types/king.types';

interface Level3Props {
  kingData: KingData;
  zoomIn: () => void;
}

export function Level3DetailView({ kingData, zoomIn }: Level3Props) {
  const { detail } = kingData;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <div className="mb-16">
        <h1 className="text-[48px] font-serif font-bold mb-4 leading-[1.4] tracking-[-0.02em]">{detail.date}</h1>
      </div>

      <div
        className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl relative overflow-hidden cursor-pointer hover:bg-white/50 transition-colors"
        onClick={zoomIn}
      >
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none select-none">
          <span className="text-[200px] font-serif leading-none">{detail.hanjaChar}</span>
        </div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold uppercase tracking-widest">{detail.date}</span>
        </div>

        <h2 className="text-[32px] font-serif font-bold mb-6 relative z-10 leading-[1.5] tracking-[-0.01em]">{detail.title}</h2>
        <p className="text-base leading-[1.6] tracking-[-0.01em] opacity-90 mb-8 relative z-10">{detail.desc}</p>

        <div className="relative z-10 bg-[#F5EFE6] p-6 rounded-2xl rounded-tl-none border border-[#F7B500]/30 shadow-sm mb-8 max-w-2xl">
          <div className="absolute -top-3 left-0 w-4 h-4 bg-[#F5EFE6] border-t border-l border-[#F7B500]/30 transform rotate-45"></div>
          <span className="text-xs font-bold text-[#F7B500] mb-2 block">야사 (Unofficial History)</span>
          <p className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80">{detail.unofficialHistory}</p>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-black/10 relative z-10">
          <div className="flex -space-x-3">
            {detail.figures.slice(0, 3).map((fig, i) => (
              <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px] font-bold overflow-hidden px-1 text-center">
                {fig.name}
              </div>
            ))}
          </div>
          <span className="text-sm opacity-60">관련 인물 및 기관</span>
        </div>
      </div>
    </div>
  );
}
