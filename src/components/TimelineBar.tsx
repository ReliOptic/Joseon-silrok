import { useState } from 'react';
import { ERAS } from '../data';

interface TimelineBarProps {
  currentKingId: string | null;
  onSelectKing?: (id: string) => void;
}

export function TimelineBar({ currentKingId, onSelectKing }: TimelineBarProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const ALL_KINGS = ERAS.flatMap(e => e.kingsList);
  const TOTAL_YEARS = ALL_KINGS.reduce((sum, k) => sum + k.years, 0);

  const eraColor = new Map<string, string>();
  ERAS.forEach(era => era.kingsList.forEach(k => eraColor.set(k.id, era.color.primary)));

  let cumulative = 0;
  const positions = ALL_KINGS.map(k => {
    const start = (cumulative / TOTAL_YEARS) * 100;
    cumulative += k.years;
    return {
      id: k.id,
      name: k.name,
      years: k.years,
      start,
      width: Math.max((k.years / TOTAL_YEARS) * 100, 0.5),
      color: eraColor.get(k.id) ?? '#888',
    };
  });

  const activeId = hoveredId ?? currentKingId;
  const active = activeId ? positions.find(p => p.id === activeId) : null;
  const activeMeta = activeId ? ALL_KINGS.find(k => k.id === activeId) : null;
  const labelLeft = active ? Math.min(Math.max(active.start + active.width / 2, 8), 92) : 50;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 h-9 flex items-center bg-white/5 backdrop-blur-[2px] border-t border-black/[0.04]">
      <div className="relative w-full mx-8">
        {/* Track */}
        <div className="relative h-[2px] rounded-full overflow-visible">
          <div className="absolute inset-0 bg-black/[0.06] rounded-full" />

          {positions.map(p => {
            const isActive = p.id === currentKingId;
            const isHovered = p.id === hoveredId;
            return (
              <button
                key={p.id}
                className="absolute top-0 focus:outline-none group"
                style={{ left: `${p.start}%`, width: `${Math.max(p.width, 1.5)}%`, height: '36px', marginTop: '-17px' }}
                onClick={() => onSelectKing?.(p.id)}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                title={p.name}
                aria-label={`${p.name} (${p.years}년)`}
              >
                <div
                  className="absolute bottom-0 left-0 w-full rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: p.color,
                    opacity: isActive ? 0.75 : isHovered ? 0.55 : 0.2,
                    height: isActive || isHovered ? '5px' : '2px',
                    marginBottom: isActive || isHovered ? '0px' : '1.5px',
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Label row */}
        <div className="relative mt-[3px] h-4 pointer-events-none">
          <span className="absolute left-0 text-[9px] opacity-25 tracking-widest">1392</span>
          {activeMeta && active && (
            <span
              className="absolute text-[9px] font-medium tracking-wider -translate-x-1/2 whitespace-nowrap transition-all duration-150"
              style={{
                left: `${labelLeft}%`,
                opacity: hoveredId ? 0.8 : 0.55,
              }}
            >
              {activeMeta.name} · {activeMeta.years}년
            </span>
          )}
          <span className="absolute right-0 text-[9px] opacity-25 tracking-widest">1910</span>
        </div>
      </div>
    </div>
  );
}
