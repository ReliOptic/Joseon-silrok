import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ChevronRight,
  ArrowLeft,
  History as HistoryIcon,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { api } from './api';
import { useZoomHistory, type ZoomFrame } from './zoomHistory';
import type { Era, King, EventRow, SillokEntry } from './types';

gsap.registerPlugin(ScrollTrigger);

const ERA_BG_FALLBACK = '#A5CCBF';
const LEVEL3_BG = '#F0F4F2';
const LEVEL4_BG = 'var(--color-level4-bg)';

export default function App() {
  const history = useZoomHistory({ level: 1 });
  const containerRef = useRef<HTMLDivElement>(null);

  const [eras, setEras] = useState<Era[]>([]);
  const [kings, setKings] = useState<King[]>([]);
  const [activeEra, setActiveEra] = useState<Era | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);

  // Initial load.
  useEffect(() => {
    Promise.all([api.eras(), api.kings()]).then(([e, k]) => {
      setEras(e);
      setKings(k);
      if (e.length) setActiveEra(e[0]);
    });
  }, []);

  const animateZoom = (direction: 1 | -1, mutate: () => void) => {
    const el = containerRef.current;
    if (!el) {
      mutate();
      return;
    }
    gsap.to(el, {
      scale: direction === 1 ? 1.25 : 0.8,
      opacity: 0,
      y: direction === 1 ? -20 : 20,
      duration: 0.4,
      onComplete: () => {
        mutate();
        gsap.fromTo(
          el,
          { scale: direction === 1 ? 0.8 : 1.25, opacity: 0, y: direction === 1 ? 20 : -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        );
      },
    });
  };

  const zoomTo = (frame: ZoomFrame) => animateZoom(1, () => history.push(frame));
  const zoomBack = () => animateZoom(-1, () => history.pop());

  // Background colour reacts to level + era.
  useEffect(() => {
    const lv = history.current.level;
    let bg = activeEra?.color.primary ?? ERA_BG_FALLBACK;
    if (lv === 3) bg = LEVEL3_BG;
    if (lv === 4) bg = LEVEL4_BG;
    gsap.to('body', { backgroundColor: bg, duration: 1.2, ease: 'power2.inOut' });
  }, [history.current, activeEra]);

  // Ctrl+wheel = zoom.
  useEffect(() => {
    const handle = (e: WheelEvent) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      if (e.deltaY > 0) zoomBack();
    };
    window.addEventListener('wheel', handle, { passive: false });
    return () => window.removeEventListener('wheel', handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.current]);

  const frame = history.current;
  const currentKing = 'kingId' in frame ? kings.find(k => k.id === frame.kingId) : undefined;

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#2D2A26]">
      <div className="hanji-noise" />

      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-4">
          {frame.level > 1 && (
            <button onClick={zoomBack} className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="back">
              <ArrowLeft size={24} />
            </button>
          )}
          <Breadcrumbs frame={frame} king={currentKing} onJump={i => animateZoom(-1, () => history.jumpTo(i))} stack={history.stack} kings={kings} />
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setHistoryOpen(o => !o)} className="p-2 hover:bg-black/5 rounded-full transition-colors" aria-label="history">
            <HistoryIcon size={20} />
          </button>
          <button onClick={zoomBack} disabled={frame.level === 1} className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomOut size={20} />
          </button>
          <span className="text-xs font-bold">LV.{frame.level}</span>
          <button disabled={frame.level === 4} className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30 cursor-default" aria-hidden>
            <ZoomIn size={20} />
          </button>
        </div>
      </nav>

      {historyOpen && (
        <HistoryPanel
          stack={history.stack}
          kings={kings}
          onJump={i => {
            animateZoom(-1, () => history.jumpTo(i));
            setHistoryOpen(false);
          }}
          onClose={() => setHistoryOpen(false)}
        />
      )}

      <div ref={containerRef} className="w-full h-full pt-20 overflow-y-auto no-scrollbar">
        {frame.level === 1 && (
          <Level1 eras={eras} kings={kings} setActiveEra={setActiveEra} onPickKing={id => zoomTo({ level: 2, kingId: id })} />
        )}
        {frame.level === 2 && 'kingId' in frame && (
          <Level2 kingId={frame.kingId} kings={kings} onPickEvent={eid => zoomTo({ level: 3, kingId: frame.kingId, eventId: eid })} />
        )}
        {frame.level === 3 && 'eventId' in frame && (
          <Level3 eventId={frame.eventId} onPickSillok={sid => zoomTo({ level: 4, kingId: frame.kingId, eventId: frame.eventId, sillokId: sid })} />
        )}
        {frame.level === 4 && 'sillokId' in frame && <Level4 sillokId={frame.sillokId} />}
      </div>
    </div>
  );
}

function Breadcrumbs({
  frame, king, kings, stack, onJump,
}: {
  frame: ZoomFrame;
  king: King | undefined;
  kings: King[];
  stack: ZoomFrame[];
  onJump: (i: number) => void;
}) {
  // Walk the stack to give each crumb a clickable history index.
  const crumbs: Array<{ label: string; index: number }> = [];
  stack.forEach((f, i) => {
    if (f.level === 1) crumbs.push({ label: '조선 (Joseon)', index: i });
    if (f.level === 2 && 'kingId' in f) {
      const k = kings.find(x => x.id === f.kingId);
      crumbs.push({ label: k ? `${k.name_ko}` : f.kingId, index: i });
    }
    if (f.level === 3) crumbs.push({ label: '사건', index: i });
    if (f.level === 4) crumbs.push({ label: '실록', index: i });
  });
  void king; void frame;
  return (
    <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase opacity-80">
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={14} />}
          <span
            className={i < crumbs.length - 1 ? 'cursor-pointer hover:opacity-100' : ''}
            onClick={() => i < crumbs.length - 1 && onJump(c.index)}
          >
            {c.label}
          </span>
        </span>
      ))}
    </div>
  );
}

function HistoryPanel({
  stack, kings, onJump, onClose,
}: {
  stack: ZoomFrame[];
  kings: King[];
  onJump: (i: number) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed top-16 right-6 z-50 w-80 bg-white/90 backdrop-blur-md border border-black/10 rounded-2xl shadow-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold tracking-widest uppercase opacity-60">이력 (history)</span>
        <button onClick={onClose} className="text-xs opacity-60 hover:opacity-100">닫기</button>
      </div>
      <ol className="flex flex-col gap-1">
        {stack.map((f, i) => {
          const king = 'kingId' in f ? kings.find(k => k.id === f.kingId) : undefined;
          let label = `Lv.${f.level}`;
          if (f.level === 1) label += ' · 조선';
          else if (f.level === 2 && king) label += ` · ${king.name_ko}`;
          else if (f.level === 3) label += ` · ${king?.name_ko ?? ''} 사건 #${(f as any).eventId}`;
          else if (f.level === 4) label += ` · 실록 #${(f as any).sillokId}`;
          return (
            <li key={i}>
              <button
                onClick={() => onJump(i)}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-black/5 text-sm"
              >
                {label}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// ─── Level 1 ─────────────────────────────────────────────────────────
function Level1({
  eras, kings, setActiveEra, onPickKing,
}: {
  eras: Era[];
  kings: King[];
  setActiveEra: (e: Era) => void;
  onPickKing: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>('.era-section');
      sections.forEach((sec, i) => {
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 40%',
          end: 'bottom 60%',
          onEnter: () => {
            setActiveEra(eras[i]);
            gsap.to('body', { backgroundColor: eras[i].color.primary, duration: 1.5, ease: 'power2.inOut' });
          },
          onEnterBack: () => {
            setActiveEra(eras[i]);
            gsap.to('body', { backgroundColor: eras[i].color.primary, duration: 1.5, ease: 'power2.inOut' });
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [eras, setActiveEra]);

  return (
    <div ref={ref} className="pb-32">
      <div className="max-w-5xl mx-auto px-6 pt-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-4">조선 왕조 500년</h1>
        <p className="text-xl opacity-70 mb-32">The 500 Years of the Joseon Dynasty</p>

        {eras.map(era => {
          const eraKings = kings.filter(k => k.era_id === era.id).sort((a, b) => a.ordinal - b.ordinal);
          return (
            <div key={era.id} className="era-section min-h-[80vh] flex flex-col justify-center mb-32 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-black/10" />
              <div className="pl-12">
                <span className="text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block">{era.period}</span>
                <h2 className="text-[48px] font-serif font-bold mb-6 leading-[1.4] tracking-[-0.02em]">{era.name_ko}</h2>
                <p className="text-lg opacity-80 max-w-2xl mb-12 leading-relaxed tracking-[-0.01em]">{era.description}</p>

                <div className="flex flex-col gap-4 relative">
                  <div className="absolute left-[30px] top-0 bottom-0 w-px bg-black/20" />
                  {eraKings.map(king => {
                    const height = Math.max(80, king.years * 4);
                    return (
                      <div
                        key={king.id}
                        onClick={() => onPickKing(king.id)}
                        className="relative pl-20 group cursor-pointer"
                        style={{ minHeight: `${height}px` }}
                      >
                        <div className="absolute left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all z-10" />
                        <div className="absolute left-[29px] top-8 w-[3px] bg-black/40 group-hover:bg-black transition-colors" style={{ height: 'calc(100% - 32px)' }} />
                        <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all group-hover:bg-white/40 group-hover:-translate-y-1 h-full flex flex-col justify-center">
                          <div className="flex items-baseline gap-4 mb-2">
                            <h3 className="text-[32px] font-serif font-bold leading-[1.5] tracking-[-0.01em]">
                              {king.ordinal}대 {king.name_ko}
                            </h3>
                            <span className="text-sm font-bold opacity-60 bg-black/5 px-2 py-1 rounded-full">{king.years}년</span>
                          </div>
                          <p className="text-sm opacity-60 mb-2">{king.reign_start}–{king.reign_end}</p>
                          <p className="text-base font-medium leading-[1.6] tracking-[-0.01em]">{king.summary}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Level 2 — events for a king ─────────────────────────────────────
function Level2({
  kingId, kings, onPickEvent,
}: {
  kingId: string;
  kings: King[];
  onPickEvent: (id: number) => void;
}) {
  const king = kings.find(k => k.id === kingId);
  const [events, setEvents] = useState<EventRow[] | null>(null);
  useEffect(() => {
    setEvents(null);
    api.kingEvents(kingId).then(setEvents);
  }, [kingId]);

  if (!king) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <div className="mb-20">
        <span className="text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block">제{king.ordinal}대 왕</span>
        <h1 className="text-[48px] font-serif font-bold mb-4 leading-[1.4] tracking-[-0.02em]">
          {king.name_ko} <span className="font-gungsuh opacity-60 text-3xl ml-2">{king.name_hanja}</span>
        </h1>
        <p className="text-xl opacity-80">{king.reign_start} – {king.reign_end} · 재위 {king.years}년</p>
        <p className="text-base opacity-70 mt-4">{king.summary}</p>
      </div>

      <div className="relative">
        <div className="absolute left-[15px] top-0 w-px h-full bg-black/20" />

        {events === null && <p className="pl-12 opacity-60">불러오는 중…</p>}
        {events?.length === 0 && <p className="pl-12 opacity-60">아직 정리된 사건이 없습니다.</p>}
        {events?.map(ev => (
          <div key={ev.id} className="relative pl-12 mb-16 group cursor-pointer" onClick={() => onPickEvent(ev.id)}>
            <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all" />
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xl font-bold opacity-60">{ev.year}</span>
              {ev.lunar_date && <span className="text-xs opacity-50">{ev.lunar_date}</span>}
            </div>
            <h3 className="text-[28px] font-serif font-bold mb-3 group-hover:text-[#1F3A69] transition-colors leading-[1.5] tracking-[-0.01em]">
              {ev.title_ko}
              {ev.title_hanja && <span className="font-gungsuh ml-2 opacity-50 text-xl">{ev.title_hanja}</span>}
            </h3>
            <div className="text-base opacity-80 leading-[1.6] tracking-[-0.01em] prose-sillok"
                 dangerouslySetInnerHTML={{ __html: ev.summary_html }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Level 3 — sillok index for one event ────────────────────────────
function Level3({ eventId, onPickSillok }: { eventId: number; onPickSillok: (id: number) => void }) {
  const [event, setEvent] = useState<EventRow | null>(null);
  const [sillok, setSillok] = useState<SillokEntry[] | null>(null);

  useEffect(() => {
    setEvent(null); setSillok(null);
    Promise.all([api.event(eventId), api.eventSillok(eventId)]).then(([e, s]) => {
      setEvent(e); setSillok(s);
    });
  }, [eventId]);

  if (!event) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <div className="mb-12">
        <span className="text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block">{event.year}년</span>
        <h1 className="text-[42px] font-serif font-bold mb-3 leading-[1.4] tracking-[-0.02em]">{event.title_ko}</h1>
        {event.title_hanja && <p className="font-gungsuh text-2xl opacity-60 mb-3">{event.title_hanja}</p>}
        <div className="text-lg opacity-80 leading-relaxed prose-sillok"
             dangerouslySetInnerHTML={{ __html: event.summary_html }} />
      </div>

      {sillok && sillok.length === 0 && (
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/50">
          <p className="opacity-70 text-sm">이 사건의 실록 본문은 다음 데이터 배치에서 추가될 예정입니다.</p>
        </div>
      )}

      <div className="grid gap-6">
        {sillok?.map(s => (
          <button
            key={s.id}
            onClick={() => onPickSillok(s.id)}
            className="text-left bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm hover:bg-white/60 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              {s.is_hero && <span className="px-2 py-0.5 bg-[#1F3A69] text-white text-[10px] tracking-widest uppercase rounded-full">대표</span>}
              {s.volume && <span className="text-xs opacity-60">{s.volume}</span>}
            </div>
            <h3 className="text-[22px] font-serif font-bold mb-2">{s.title_ko}</h3>
            <p className="text-sm opacity-60 truncate">{stripTags(s.translation_html).slice(0, 120)}…</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function stripTags(html: string) {
  return html.replace(/<[^>]+>/g, '');
}

// ─── Level 4 — single sillok entry ───────────────────────────────────
function Level4({ sillokId }: { sillokId: number }) {
  const [s, setS] = useState<SillokEntry | null>(null);
  useEffect(() => {
    setS(null);
    api.sillok(sillokId).then(setS);
  }, [sillokId]);

  if (!s) return null;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-32">
      <div className="flex items-start justify-between border-b-2 border-black/10 pb-6 mb-12">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase opacity-60 mb-2">조선왕조실록 (Veritable Records)</span>
          <h2 className="text-[40px] font-serif font-bold leading-[1.4] tracking-[-0.02em]">{s.title_ko}</h2>
          {s.volume && <p className="text-sm opacity-60 mt-2">{s.volume}</p>}
          {s.date_lunar && <p className="text-sm opacity-60">{s.date_lunar}</p>}
        </div>
      </div>

      <div className="mb-12 relative flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex justify-end">
          <div className="vertical-rl font-gungsuh text-[18px] leading-[1.8] opacity-80 max-h-[420px] overflow-hidden prose-sillok"
               dangerouslySetInnerHTML={{ __html: s.original_html }} />
        </div>

        <div className="md:w-2/3 relative z-10">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">국역 (Translation)</span>
            <div className="h-px bg-black/10 flex-1" />
          </div>
          <div className="font-serif text-[18px] leading-[1.8] text-justify break-keep mb-12 prose-sillok"
               dangerouslySetInnerHTML={{ __html: s.translation_html }} />

          {s.commentary_html && (
            <div className="bg-[#E2E7E4]/50 rounded-r-2xl border-l-4 border-[#90A4AE] p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                사신은 논한다 <span className="opacity-50 font-normal">(Historian's Commentary)</span>
              </h3>
              <div className="font-serif text-[18px] leading-[1.8] italic opacity-90 prose-sillok"
                   dangerouslySetInnerHTML={{ __html: s.commentary_html }} />
            </div>
          )}

          <a href={s.source_url} target="_blank" rel="noreferrer"
             className="inline-block mt-8 text-xs opacity-60 hover:opacity-100 underline">
            원문 영구링크 (sillok.history.go.kr)
          </a>
        </div>
      </div>
    </div>
  );
}
