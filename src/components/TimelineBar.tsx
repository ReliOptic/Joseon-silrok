import { useState, useMemo } from 'react';
import { ERAS } from '../data';
import { STORY_MANIFEST } from '../data/story-manifest';

interface TimelineBarProps {
  readonly currentKingId: string | null;
  readonly onSelectKing?: (id: string) => void;
}

interface KingPosition {
  readonly id: string;
  readonly name: string;
  readonly years: number;
  readonly start: number;
  readonly width: number;
  readonly color: string;
  readonly eraName: string;
  readonly reign: string;
  readonly storyCount: number;
}

interface KingButtonProps {
  readonly p: KingPosition;
  readonly isActive: boolean;
  readonly isHovered: boolean;
  readonly maxStoryCount: number;
  readonly onSelect: () => void;
  readonly onHover: (id: string | null) => void;
}

function TimelineKingButton({ p, isActive, isHovered, maxStoryCount, onSelect, onHover }: KingButtonProps){
  const countRatio = maxStoryCount > 0 ? p.storyCount / maxStoryCount : 0;
  const barHeight = isActive || isHovered
    ? 2 + Math.round(countRatio * 6)
    : 2 + Math.round(countRatio * 4);
  const barOpacity = isActive ? 0.75 : isHovered ? 0.65 : 0.18 + countRatio * 0.28;

  return (
    <button
      className="absolute top-0 focus:outline-none"
      style={{ left: `${p.start}%`, width: `${Math.max(p.width, 1.5)}%`, height: '36px', marginTop: '-17px' }}
      onClick={onSelect}
      onMouseEnter={() => onHover(p.id)}
      onMouseLeave={() => onHover(null)}
      onTouchStart={() => onHover(p.id)}
      onTouchEnd={() => setTimeout(() => onHover(null), 1200)}
      aria-label={`${p.name} (${p.years}년, 기사 ${p.storyCount}개)`}
    >
      <div
        className="absolute left-0 w-full rounded-full transition-all duration-200"
        style={{
          backgroundColor: p.color,
          opacity: barOpacity,
          height: `${barHeight}px`,
          bottom: 0,
          marginBottom: barHeight <= 2 ? '1.5px' : '0px',
        }}
      />
    </button>
  );
}

interface HoverCardProps {
  readonly pos: KingPosition;
}

function TimelineHoverCard({ pos }: HoverCardProps){
  return (
    <div
      className="absolute pointer-events-none z-50"
      style={{
        bottom: '100%',
        left: `${Math.min(Math.max(pos.start + pos.width / 2, 8), 88)}%`,
        transform: 'translateX(-50%)',
        marginBottom: '14px',
      }}
    >
      <div
        className="rounded-md px-3 py-2 text-left shadow-lg border border-black/10 min-w-[120px]"
        style={{ backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}
      >
        <div className="text-[11px] font-semibold text-gray-800 whitespace-nowrap">{pos.name}</div>
        <div className="text-[9px] text-gray-500 mt-0.5 whitespace-nowrap">{pos.reign}</div>
        <div
          className="text-[9px] mt-1 font-medium whitespace-nowrap"
          style={{ color: pos.color === '#E2E7E4' ? '#666' : pos.color }}
        >
          기사 {pos.storyCount}개
        </div>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0 h-0"
        style={{
          top: '100%',
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '5px solid rgba(255,255,255,0.92)',
        }}
      />
    </div>
  );
}

export function TimelineBar({ currentKingId, onSelectKing }: TimelineBarProps){
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const ALL_KINGS = useMemo(() => ERAS.flatMap(e => e.kingsList), []);
  const TOTAL_YEARS = useMemo(() => ALL_KINGS.reduce((sum, k) => sum + k.years, 0), [ALL_KINGS]);

  const storyCountByKing = useMemo(() => {
    const counts = new Map<string, number>();
    for (const entry of STORY_MANIFEST) {
      counts.set(entry.kingId, (counts.get(entry.kingId) ?? 0) + 1);
    }
    return counts;
  }, []);

  const maxStoryCount = useMemo(
    () => Math.max(...Array.from(storyCountByKing.values())),
    [storyCountByKing]
  );

  const positions = useMemo<KingPosition[]>(() => {
    let cumulative = 0;
    return ALL_KINGS.map(k => {
      const eraEntry = ERAS.find(e => e.kingsList.some(ek => ek.id === k.id));
      const start = (cumulative / TOTAL_YEARS) * 100;
      cumulative += k.years;
      return {
        id: k.id,
        name: k.name,
        years: k.years,
        start,
        width: Math.max((k.years / TOTAL_YEARS) * 100, 0.5),
        color: eraEntry?.color.primary ?? '#888',
        eraName: eraEntry?.name ?? '',
        reign: k.reign,
        storyCount: storyCountByKing.get(k.id) ?? 0,
      };
    });
  }, [ALL_KINGS, TOTAL_YEARS, storyCountByKing]);

  const eraSegments = useMemo(() => ERAS.map(era => {
    const kings = era.kingsList;
    const firstPos = positions.find(p => p.id === kings[0].id);
    const lastPos = positions.find(p => p.id === kings[kings.length - 1].id);
    if (!firstPos || !lastPos) return null;
    return { id: era.id, color: era.color.primary, start: firstPos.start, width: lastPos.start + lastPos.width - firstPos.start };
  }).filter(Boolean), [positions]);

  const activeId = hoveredId ?? currentKingId;
  const activePos = activeId ? positions.find(p => p.id === activeId) : null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 h-9 flex items-center bg-white/5 backdrop-blur-[2px] border-t border-black/[0.04]">
      <div className="relative w-full mx-8">
        <div className="absolute w-full pointer-events-none" style={{ top: '-7px', height: '4px' }}>
          {eraSegments.map(seg => seg ? (
            <div key={seg.id} className="absolute h-full rounded-sm"
              style={{ left: `${seg.start}%`, width: `${seg.width}%`, backgroundColor: seg.color, opacity: 0.35 }} />
          ) : null)}
        </div>

        <div className="relative h-[2px] rounded-full overflow-visible">
          <div className="absolute inset-0 bg-black/[0.06] rounded-full" />
          {positions.map(p => (
            <TimelineKingButton
              key={p.id}
              p={p}
              isActive={p.id === currentKingId}
              isHovered={p.id === hoveredId}
              maxStoryCount={maxStoryCount}
              onSelect={() => onSelectKing?.(p.id)}
              onHover={setHoveredId}
            />
          ))}
        </div>

        <div className="relative mt-[3px] h-4 pointer-events-none">
          <span className="absolute left-0 text-[9px] opacity-25 tracking-widest">1392</span>
          {activePos && (
            <span
              className="absolute text-[9px] font-medium tracking-wider -translate-x-1/2 whitespace-nowrap transition-all duration-150"
              style={{ left: `${Math.min(Math.max(activePos.start + activePos.width / 2, 8), 92)}%`, opacity: hoveredId ? 0.8 : 0.55 }}
            >
              {activePos.name} · {activePos.years}년
            </span>
          )}
          <span className="absolute right-0 text-[9px] opacity-25 tracking-widest">1910</span>
        </div>

        {hoveredId && activePos && <TimelineHoverCard pos={activePos} />}
      </div>
    </div>
  );
}
