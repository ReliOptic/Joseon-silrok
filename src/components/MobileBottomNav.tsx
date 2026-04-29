import { ZoomIn, ZoomOut, Search, Share2 } from 'lucide-react';

interface MobileBottomNavProps {
  level: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onSearch: () => void;
  onShare: () => void;
  shareCopied: boolean;
}

export function MobileBottomNav({
  level,
  onZoomIn,
  onZoomOut,
  onSearch,
  onShare,
  shareCopied,
}: MobileBottomNavProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full z-50 flex items-center justify-around px-4 py-2 bg-white/20 backdrop-blur-md border-t border-black/5">
      <button
        onClick={onZoomOut}
        disabled={level <= 1}
        aria-label="축소"
        className="flex flex-col items-center gap-0.5 p-2 disabled:opacity-30"
      >
        <ZoomOut size={22} />
        <span className="text-[10px] opacity-60">줌 아웃</span>
      </button>

      <button
        onClick={onZoomIn}
        disabled={level >= 4}
        aria-label="확대"
        className="flex flex-col items-center gap-0.5 p-2 disabled:opacity-30"
      >
        <ZoomIn size={22} />
        <span className="text-[10px] font-bold">LV.{Math.floor(level)}</span>
      </button>

      <button
        onClick={onSearch}
        aria-label="검색"
        className="flex flex-col items-center gap-0.5 p-2 opacity-70"
      >
        <Search size={22} />
        <span className="text-[10px] opacity-60">검색</span>
      </button>

      {level > 1 && (
        <button
          onClick={onShare}
          aria-label="공유"
          className="flex flex-col items-center gap-0.5 p-2 opacity-70"
        >
          <Share2 size={22} />
          <span className="text-[10px] opacity-60">{shareCopied ? '복사됨!' : '공유'}</span>
        </button>
      )}
    </div>
  );
}
