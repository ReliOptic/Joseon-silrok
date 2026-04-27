import { ERAS } from '../data';

interface TimelineBarProps {
  currentKingId: string | null;
}

export function TimelineBar({ currentKingId }: TimelineBarProps) {
  const ALL_KINGS = ERAS.flatMap(e => e.kingsList);
  const TOTAL_YEARS = ALL_KINGS.reduce((sum, k) => sum + k.years, 0);

  const eraColor = new Map<string, string>();
  ERAS.forEach(era => era.kingsList.forEach(k => eraColor.set(k.id, era.color.primary)));

  let cumulative = 0;
  const positions = ALL_KINGS.map(k => {
    const start = (cumulative / TOTAL_YEARS) * 100;
    cumulative += k.years;
    return { id: k.id, name: k.name, years: k.years, start, width: Math.max((k.years / TOTAL_YEARS) * 100, 0.5), color: eraColor.get(k.id) ?? '#888' };
  });

  const current = currentKingId ? positions.find(p => p.id === currentKingId) : null;
  const currentMeta = currentKingId ? ALL_KINGS.find(k => k.id === currentKingId) : null;
  const labelLeft = current ? Math.min(Math.max(current.start + current.width / 2, 8), 92) : 50;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 h-9 flex items-center bg-white/5 backdrop-blur-[2px] border-t border-black/[0.04]">
      <div className="relative w-full mx-8">
        <div className="relative h-[2px] rounded-full overflow-visible">
          <div className="absolute inset-0 bg-black/[0.06] rounded-full" />
          {positions.map(p => (
            <div
              key={p.id}
              className="absolute rounded-full transition-all duration-500"
              style={{
                left: `${p.start}%`,
                width: `${p.width}%`,
                backgroundColor: p.color,
                opacity: p.id === currentKingId ? 0.75 : 0.2,
                height: p.id === currentKingId ? '5px' : '2px',
                top: p.id === currentKingId ? '-1.5px' : '0',
              }}
            />
          ))}
        </div>
        <div className="relative mt-[3px] h-4">
          <span className="absolute left-0 text-[9px] opacity-25 tracking-widest">1392</span>
          {current && currentMeta && (
            <span
              className="absolute text-[9px] opacity-55 font-medium tracking-wider -translate-x-1/2 whitespace-nowrap"
              style={{ left: `${labelLeft}%` }}
            >
              {currentMeta.name} · {currentMeta.years}년
            </span>
          )}
          <span className="absolute right-0 text-[9px] opacity-25 tracking-widest">1910</span>
        </div>
      </div>
    </div>
  );
}
