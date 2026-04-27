import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ERAS } from './data';
import { KINGS_DATA } from './data/index';
import type { Era } from './types/king.types';
import { ArrowLeft, ZoomIn, ZoomOut, ChevronRight } from 'lucide-react';
import { Level1MacroView } from './components/Level1MacroView';
import { Level2EventView } from './components/Level2EventView';
import { Level3DetailView } from './components/Level3DetailView';
import { Level4SillokView } from './components/Level4SillokView';
import { TimelineBar } from './components/TimelineBar';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [level, setLevel] = useState(1);
  const [activeEra, setActiveEra] = useState<Era>(ERAS[0]);
  const [selectedKingId, setSelectedKingId] = useState('sejong');
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchInitialDistance = useRef<number | null>(null);

  const ALL_KINGS = ERAS.flatMap(e => e.kingsList);
  const currentKingIndex = ALL_KINGS.findIndex(k => k.id === selectedKingId);
  const prevKing = currentKingIndex > 0 ? ALL_KINGS[currentKingIndex - 1] : null;
  const nextKing = currentKingIndex < ALL_KINGS.length - 1 ? ALL_KINGS[currentKingIndex + 1] : null;

  const kingData = KINGS_DATA[selectedKingId] ?? KINGS_DATA['sejong'];
  const kingMeta = ALL_KINGS.find(k => k.id === selectedKingId);
  const currentEvent = kingData.events[Math.min(selectedEventIndex, kingData.events.length - 1)];

  const slideAnimate = (direction: 'prev' | 'next', onMid: () => void) => {
    const outX = direction === 'next' ? -80 : 80;
    const inX = direction === 'next' ? 80 : -80;
    gsap.to(containerRef.current, {
      x: outX, opacity: 0, duration: 0.28, ease: 'power2.in',
      onComplete: () => {
        onMid();
        gsap.fromTo(containerRef.current,
          { x: inX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      }
    });
  };

  const zoomIn = () => {
    if (level >= 4) return;
    gsap.to(containerRef.current, {
      scale: 1.25, opacity: 0, y: -20, duration: 0.4,
      onComplete: () => {
        setLevel(l => l + 1);
        gsap.fromTo(containerRef.current,
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }
    });
  };

  const zoomOut = () => {
    if (level <= 1) return;
    gsap.to(containerRef.current, {
      scale: 0.8, opacity: 0, y: 20, duration: 0.4,
      onComplete: () => {
        setLevel(l => l - 1);
        gsap.fromTo(containerRef.current,
          { scale: 1.25, opacity: 0, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }
    });
  };

  const selectKing = (id: string) => {
    setSelectedKingId(id);
    setSelectedEventIndex(0);
    zoomIn();
  };

  const selectEvent = (index: number) => {
    setSelectedEventIndex(index);
    zoomIn();
  };

  const navigateToKing = (id: string, direction: 'prev' | 'next') => {
    slideAnimate(direction, () => {
      setSelectedKingId(id);
      setSelectedEventIndex(0);
    });
  };

  const navigateEvent = (direction: 'prev' | 'next') => {
    const eventsCount = kingData.events.length;
    if (direction === 'next') {
      if (selectedEventIndex < eventsCount - 1) {
        slideAnimate('next', () => setSelectedEventIndex(i => i + 1));
      } else if (nextKing) {
        slideAnimate('next', () => { setSelectedKingId(nextKing.id); setSelectedEventIndex(0); });
      }
    } else {
      if (selectedEventIndex > 0) {
        slideAnimate('prev', () => setSelectedEventIndex(i => i - 1));
      } else if (prevKing) {
        const prevEventsCount = KINGS_DATA[prevKing.id]?.events.length ?? 1;
        slideAnimate('prev', () => { setSelectedKingId(prevKing.id); setSelectedEventIndex(prevEventsCount - 1); });
      }
    }
  };

  useEffect(() => {
    if (level === 2) setSelectedEventIndex(0);
  }, [level]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      if (e.deltaY > 0) zoomOut(); else zoomIn();
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [level]);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 2) return;
      touchInitialDistance.current = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2 || touchInitialDistance.current === null) return;
      e.preventDefault();
      const current = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
      if (current > touchInitialDistance.current * 1.2) {
        touchInitialDistance.current = current;
        zoomIn();
      } else if (current < touchInitialDistance.current * 0.8) {
        touchInitialDistance.current = current;
        zoomOut();
      }
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [level]);

  useEffect(() => {
    const bgColor = level >= 3 ? (level === 4 ? 'var(--color-level4-bg)' : '#F0F4F2') : activeEra.color.primary;
    gsap.to('body', { backgroundColor: bgColor, duration: 1.2, ease: "power2.inOut" });
  }, [level, activeEra]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#2D2A26]">
      <div className="hanji-noise"></div>

      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-4">
          {level > 1 && (
            <button onClick={zoomOut} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase opacity-80">
            <span className="cursor-pointer hover:opacity-100" onClick={() => { if (level > 1) zoomOut(); }}>
              조선 (Joseon)
            </span>
            {level > 1 && <ChevronRight size={14} />}
            {level > 1 && <span className="cursor-pointer hover:opacity-100">{kingMeta?.name ?? ''}</span>}
            {level > 2 && <ChevronRight size={14} />}
            {level > 2 && <span className="cursor-pointer hover:opacity-100">{currentEvent.year}년</span>}
            {level > 3 && <ChevronRight size={14} />}
            {level > 3 && <span>실록 (Sillok)</span>}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={zoomOut} disabled={level === 1} className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomOut size={20} />
          </button>
          <span className="text-xs font-bold">LV.{level}</span>
          <button onClick={zoomIn} disabled={level === 4} className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomIn size={20} />
          </button>
        </div>
      </nav>

      <div ref={containerRef} className="w-full h-full pt-20 pb-9 overflow-y-auto no-scrollbar">
        {level === 1 && <Level1MacroView setActiveEra={setActiveEra} onSelectKing={selectKing} />}
        {level === 2 && <Level2EventView kingData={kingData} onSelectEvent={selectEvent} prevKing={prevKing} nextKing={nextKing} onNavigateKing={navigateToKing} />}
        {level === 3 && <Level3DetailView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} zoomIn={zoomIn} />}
        {level === 4 && <Level4SillokView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} />}
      </div>

      <TimelineBar currentKingId={level > 1 ? selectedKingId : null} />
    </div>
  );
}
