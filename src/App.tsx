import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ERAS } from './data';
import { loadKingData } from './data/index';
import type { Era, KingData } from './types/king.types';
import { ArrowLeft, ZoomIn, ZoomOut, ChevronRight, Search, Share2 } from 'lucide-react';
import { Level1MacroView } from './components/Level1MacroView';
import { Level2EventView } from './components/Level2EventView';
import { Level3DetailView } from './components/Level3DetailView';
import { Level35StoryView } from './components/Level35StoryView';
import { Level4SillokView } from './components/Level4SillokView';
import { TimelineBar } from './components/TimelineBar';
import { SearchModal } from './components/SearchModal';

gsap.registerPlugin(ScrollTrigger);

function parseUrlState(): { level: number; kingId: string; eventIndex: number } {
  const params = new URLSearchParams(window.location.search);
  const rawLevel = parseFloat(params.get('level') ?? '');
  const level = [1, 2, 3, 3.5, 4].includes(rawLevel) ? rawLevel : 1;
  const kingId = params.get('king') ?? 'sejong';
  const validKingId = ERAS.flatMap(e => e.kingsList).some(k => k.id === kingId) ? kingId : 'sejong';
  const rawEvent = parseInt(params.get('event') ?? '', 10);
  const eventIndex = Number.isFinite(rawEvent) && rawEvent >= 0 ? rawEvent : 0;
  return { level, kingId: validKingId, eventIndex };
}

const INITIAL_URL_STATE = parseUrlState();

function getNextLevel(current: number, hasStory: boolean): number {
  if (current === 3) return hasStory ? 3.5 : 4;
  if (current === 3.5) return 4;
  return Math.min(current + 1, 4);
}

function getPrevLevel(current: number, hasStory: boolean): number {
  if (current === 4) return hasStory ? 3.5 : 3;
  if (current === 3.5) return 3;
  return Math.max(current - 1, 1);
}

export function App() {
  const [level, setLevel] = useState(INITIAL_URL_STATE.level);
  const [activeEra, setActiveEra] = useState<Era>(ERAS[0]);
  const [selectedKingId, setSelectedKingId] = useState(INITIAL_URL_STATE.kingId);
  const [selectedEventIndex, setSelectedEventIndex] = useState(INITIAL_URL_STATE.eventIndex);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchInitialDistance = useRef<number | null>(null);

  const ALL_KINGS = ERAS.flatMap(e => e.kingsList);
  const currentKingIndex = ALL_KINGS.findIndex(k => k.id === selectedKingId);
  const prevKing = currentKingIndex > 0 ? ALL_KINGS[currentKingIndex - 1] : null;
  const nextKing = currentKingIndex < ALL_KINGS.length - 1 ? ALL_KINGS[currentKingIndex + 1] : null;

  const [kingData, setKingData] = useState<KingData | null>(null);
  const kingMeta = ALL_KINGS.find(k => k.id === selectedKingId);
  const currentEvent = kingData ? kingData.events[Math.min(selectedEventIndex, kingData.events.length - 1)] : null;

  useEffect(() => {
    let cancelled = false;
    loadKingData(selectedKingId).then(data => {
      if (!cancelled) setKingData(data);
    });
    return () => { cancelled = true; };
  }, [selectedKingId]);

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
    const next = getNextLevel(level, !!currentEvent?.storyEntry);
    if (next <= level) return;
    gsap.to(containerRef.current, {
      scale: 1.25, opacity: 0, y: -20, duration: 0.4,
      onComplete: () => {
        setLevel(next);
        gsap.fromTo(containerRef.current,
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }
    });
  };

  const zoomOut = () => {
    const prev = getPrevLevel(level, !!currentEvent?.storyEntry);
    if (prev >= level) return;
    gsap.to(containerRef.current, {
      scale: 0.8, opacity: 0, y: 20, duration: 0.4,
      onComplete: () => {
        setLevel(prev);
        gsap.fromTo(containerRef.current,
          { scale: 1.25, opacity: 0, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }
    });
  };

  const zoomToLevel = (target: number) => {
    if (target >= level) return;
    gsap.to(containerRef.current, {
      scale: 0.8, opacity: 0, y: 20, duration: 0.3,
      onComplete: () => {
        setLevel(target);
        gsap.fromTo(containerRef.current,
          { scale: 1.25, opacity: 0, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
      }
    });
  };

  const selectKing = (id: string) => {
    setSelectedKingId(id);
    setSelectedEventIndex(0);
    zoomIn();
  };

  const shareUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  };

  const jumpToEvent = (kingId: string, eventIndex: number) => {
    gsap.to(containerRef.current, {
      scale: 0.95, opacity: 0, duration: 0.25,
      onComplete: () => {
        setSelectedKingId(kingId);
        setSelectedEventIndex(eventIndex);
        setLevel(3);
        gsap.fromTo(containerRef.current,
          { scale: 1.05, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      }
    });
  };

  const selectKingFromTimeline = (id: string) => {
    if (level <= 1) {
      setSelectedKingId(id);
      setSelectedEventIndex(0);
      zoomIn();
    } else if (level > 2) {
      setSelectedKingId(id);
      setSelectedEventIndex(0);
      zoomToLevel(2);
    } else if (id !== selectedKingId) {
      slideAnimate('next', () => { setSelectedKingId(id); setSelectedEventIndex(0); });
    }
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
    const eventsCount = kingData?.events.length ?? 0;
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
        slideAnimate('prev', () => {
          loadKingData(prevKing.id).then(data => {
            setSelectedKingId(prevKing.id);
            setSelectedEventIndex(data.events.length - 1);
          });
        });
      }
    }
  };

  useEffect(() => {
    if (level === 2) setSelectedEventIndex(0);
  }, [level]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (level > 1) {
      params.set('level', String(level));
      params.set('king', selectedKingId);
      params.set('event', String(selectedEventIndex));
      window.history.replaceState(null, '', '?' + params.toString());
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [level, selectedKingId, selectedEventIndex]);

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
    const bgColor = level >= 3 ? (level >= 4 ? 'var(--color-level4-bg)' : '#F0F4F2') : activeEra.color.primary;
    gsap.to('body', { backgroundColor: bgColor, duration: 1.2, ease: "power2.inOut" });
  }, [level, activeEra]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isSearchOpen) return;
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isSearchOpen]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#2D2A26]">
      <div className="hanji-noise"></div>

      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-4">
          {level > 1 && (
            <button onClick={zoomOut} aria-label="뒤로 가기" className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase opacity-80">
            <span className="cursor-pointer hover:opacity-100" onClick={() => zoomToLevel(1)}>
              조선 (Joseon)
            </span>
            {level > 1 && <ChevronRight size={14} />}
            {level > 1 && <span className="cursor-pointer hover:opacity-100" onClick={() => zoomToLevel(2)}>{kingMeta?.name ?? ''}</span>}
            {level > 2 && <ChevronRight size={14} />}
            {level > 2 && <span className="cursor-pointer hover:opacity-100" onClick={() => zoomToLevel(3)}>{currentEvent?.year}년</span>}
            {level > 3 && <ChevronRight size={14} />}
            {level > 3 && <span>실록 (Sillok)</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {level > 1 && (
            <button
              onClick={shareUrl}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs opacity-50 hover:opacity-80 transition-opacity rounded-full hover:bg-black/5"
              title="현재 페이지 URL 복사"
            >
              <Share2 size={14} />
              <span className="hidden sm:inline">{shareCopied ? '복사됨!' : '공유'}</span>
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs opacity-50 hover:opacity-80 transition-opacity rounded-full hover:bg-black/5"
            title="검색 (/ 또는 ⌘K)"
          >
            <Search size={14} /><span className="hidden sm:inline">검색</span>
          </button>
          <button onClick={zoomOut} disabled={level <= 1} aria-label="축소" className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomOut size={20} />
          </button>
          <span className="text-xs font-bold">LV.{Math.floor(level)}</span>
          <button onClick={zoomIn} disabled={level >= 4} aria-label="확대" className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomIn size={20} />
          </button>
        </div>
      </nav>

      <div ref={containerRef} className="w-full h-full pt-20 pb-9 overflow-y-auto no-scrollbar">
        {level === 1 && <Level1MacroView setActiveEra={setActiveEra} onSelectKing={selectKing} />}
        {level === 2 && kingData && <Level2EventView kingData={kingData} onSelectEvent={selectEvent} prevKing={prevKing} nextKing={nextKing} onNavigateKing={navigateToKing} />}
        {level === 3 && kingData && <Level3DetailView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} zoomIn={zoomIn} />}
        {level === 3.5 && kingData && <Level35StoryView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} zoomIn={zoomIn} zoomOut={zoomOut} />}
        {level === 4 && kingData && <Level4SillokView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} />}
      </div>

      <TimelineBar currentKingId={level > 1 ? selectedKingId : null} onSelectKing={selectKingFromTimeline} />

      {isSearchOpen && (
        <SearchModal
          onSelect={jumpToEvent}
          onClose={() => setIsSearchOpen(false)}
        />
      )}
    </div>
  );
}
