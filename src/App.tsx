import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ZoomIn, ZoomOut, ChevronRight, Search, Share2 } from 'lucide-react';
import { ERAS } from './data';
import { loadKingData } from './data/index';
import { Level1MacroView } from './components/Level1MacroView';
import { Level2EventView } from './components/Level2EventView';
import { Level3DetailView } from './components/Level3DetailView';
import { Level35StoryView } from './components/Level35StoryView';
import { Level4SillokView } from './components/Level4SillokView';
import { TimelineBar } from './components/TimelineBar';
import { SearchModal } from './components/SearchModal';
import { OnboardingHint } from './components/OnboardingHint';
import { MobileBottomNav } from './components/MobileBottomNav';
import { KingTransitionEffect } from './components/KingTransitionEffect';
import { EraTransitionEffect } from './components/EraTransitionEffect';
import { useUrlState } from './hooks/useUrlState';
import { useZoom } from './hooks/useZoom';
import { useNavigation } from './hooks/useNavigation';
import { usePinchZoom } from './hooks/usePinchZoom';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useBackgroundColor } from './hooks/useBackgroundColor';
import type { Era, KingData } from './types/king.types';

gsap.registerPlugin(ScrollTrigger);

function parseUrlState(): { level: number; kingId: string; eventIndex: number } {
  const params = new URLSearchParams(window.location.search);
  const rawLevel = parseFloat(params.get('level') ?? '');
  const level = [1, 2, 3, 3.5, 4].includes(rawLevel) ? rawLevel : 1;
  const kingId = params.get('king') ?? 'sejong';
  const validKingId = ERAS.flatMap(e => e.kingsList).some(k => k.id === kingId)
    ? kingId
    : 'sejong';
  const rawEvent = parseInt(params.get('event') ?? '', 10);
  const eventIndex = Number.isFinite(rawEvent) && rawEvent >= 0 ? rawEvent : 0;
  return { level, kingId: validKingId, eventIndex };
}

const INITIAL_URL_STATE = parseUrlState();

export function App(): React.ReactElement {
  const [level, setLevel] = useState(INITIAL_URL_STATE.level);
  const [activeEra, setActiveEra] = useState<Era>(ERAS[0]);
  const [selectedKingId, setSelectedKingId] = useState(INITIAL_URL_STATE.kingId);
  const [selectedEventIndex, setSelectedEventIndex] = useState(INITIAL_URL_STATE.eventIndex);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [kingData, setKingData] = useState<KingData | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const ALL_KINGS = ERAS.flatMap(e => e.kingsList);
  const currentKingIndex = ALL_KINGS.findIndex(k => k.id === selectedKingId);
  const prevKing = currentKingIndex > 0 ? ALL_KINGS[currentKingIndex - 1] : null;
  const nextKing = currentKingIndex < ALL_KINGS.length - 1 ? ALL_KINGS[currentKingIndex + 1] : null;
  const kingMeta = ALL_KINGS.find(k => k.id === selectedKingId);
  const currentEvent = kingData
    ? kingData.events[Math.min(selectedEventIndex, kingData.events.length - 1)]
    : null;

  useEffect(() => {
    let cancelled = false;
    loadKingData(selectedKingId).then(data => {
      if (!cancelled) setKingData(data);
    });
    return () => { cancelled = true; };
  }, [selectedKingId]);

  useEffect(() => {
    if (level === 2) setSelectedEventIndex(0);
  }, [level]);

  useUrlState(
    { level, selectedKingId, selectedEventIndex },
    { setLevel, setSelectedKingId, setSelectedEventIndex }
  );

  const { zoomIn, zoomOut, zoomToLevel } = useZoom({
    containerRef,
    level,
    selectedKingId,
    selectedEventIndex,
    kingData,
    setLevel,
    setSelectedEventIndex,
  });

  const { selectKing, selectKingFromTimeline, selectEvent, navigateToKing, navigateStory, navigateEvent, jumpToEvent } =
    useNavigation({
      containerRef,
      level,
      selectedKingId,
      selectedEventIndex,
      kingData,
      prevKing,
      nextKing,
      setSelectedKingId,
      setSelectedEventIndex,
      setLevel,
      zoomIn,
      zoomToLevel,
    });

  usePinchZoom({ level, zoomIn, zoomOut });
  useKeyboardShortcuts({ isSearchOpen, onOpenSearch: () => setIsSearchOpen(true) });
  useBackgroundColor({ level, activeEra });

  const shareUrl = (): void => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    });
  };

  const currentEra = ERAS.find(e => e.kingsList.some(k => k.id === selectedKingId));

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#2D2A26]">
      <div className="hanji-noise"></div>

      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {level > 1 && (
            <button onClick={zoomOut} aria-label="뒤로 가기" className="p-2 hover:bg-black/5 rounded-full transition-colors flex-shrink-0">
              <ArrowLeft size={24} />
            </button>
          )}
          <nav aria-label="탐색 경로" className="flex items-center gap-1 sm:gap-2 text-sm font-medium tracking-widest uppercase opacity-80 min-w-0">
            <ol role="list" className="flex items-center gap-1 sm:gap-2">
              <li>
                <button type="button" className="hover:opacity-100 hidden sm:inline" onClick={() => zoomToLevel(1)}>조선 (Joseon)</button>
                <button type="button" className="hover:opacity-100 sm:hidden" onClick={() => zoomToLevel(1)}>조선</button>
              </li>
              {level > 1 && <li aria-hidden="true"><ChevronRight size={14} className="flex-shrink-0" /></li>}
              {level > 1 && (
                <li>
                  <button type="button" className="hover:opacity-100 truncate max-w-[80px] sm:max-w-none" onClick={() => zoomToLevel(2)}>
                    {kingMeta?.name ?? ''}
                  </button>
                </li>
              )}
              {level > 2 && <li aria-hidden="true" className="hidden sm:block"><ChevronRight size={14} className="flex-shrink-0" /></li>}
              {level > 2 && (
                <li className="hidden sm:block">
                  <button type="button" className="hover:opacity-100" onClick={() => zoomToLevel(3)}>
                    {currentEvent?.year}년
                  </button>
                </li>
              )}
              {level > 3 && <li aria-hidden="true" className="hidden sm:block"><ChevronRight size={14} className="flex-shrink-0" /></li>}
              {level > 3 && <li aria-current="page" className="hidden sm:block">실록 (Sillok)</li>}
            </ol>
          </nav>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          {level > 1 && (
            <button onClick={shareUrl} className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs opacity-50 hover:opacity-80 transition-opacity rounded-full hover:bg-black/5" title="현재 페이지 URL 복사">
              <Share2 size={14} />
              <span>{shareCopied ? '복사됨!' : '공유'}</span>
            </button>
          )}
          <button onClick={() => setIsSearchOpen(true)} className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs opacity-50 hover:opacity-80 transition-opacity rounded-full hover:bg-black/5" title="검색 (/ 또는 ⌘K)">
            <Search size={14} /><span>검색</span>
          </button>
          <button onClick={zoomOut} disabled={level <= 1} aria-label="축소" className="hidden sm:flex p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomOut size={20} />
          </button>
          <span className="hidden sm:inline text-xs font-bold">LV.{Math.floor(level)}</span>
          <button onClick={zoomIn} disabled={level >= 4} aria-label="확대" className="hidden sm:flex p-2 hover:bg-black/5 rounded-full disabled:opacity-30">
            <ZoomIn size={20} />
          </button>
        </div>
      </nav>

      <main ref={containerRef} aria-label="실록 콘텐츠" className="w-full h-full pt-20 pb-9 overflow-y-auto no-scrollbar">
        {level === 1 && <Level1MacroView setActiveEra={setActiveEra} onSelectKing={selectKing} />}
        {level === 2 && kingData && <Level2EventView kingData={kingData} onSelectEvent={selectEvent} prevKing={prevKing} nextKing={nextKing} onNavigateKing={navigateToKing} />}
        {level === 3 && kingData && <Level3DetailView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} zoomIn={zoomIn} />}
        {level === 3.5 && kingData && <Level35StoryView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateStory} zoomIn={zoomIn} zoomOut={zoomOut} />}
        {level === 4 && kingData && <Level4SillokView kingData={kingData} eventIndex={selectedEventIndex} onNavigateEvent={navigateEvent} nextKing={nextKing} />}
      </main>

      <TimelineBar currentKingId={level > 1 ? selectedKingId : null} onSelectKing={selectKingFromTimeline} />
      <EraTransitionEffect era={currentEra} kingId={selectedKingId} />
      <KingTransitionEffect kingMeta={kingMeta} eraName={currentEra?.name} level={level} />
      {level === 1 && <OnboardingHint />}

      <MobileBottomNav level={level} onZoomIn={zoomIn} onZoomOut={zoomOut} onSearch={() => setIsSearchOpen(true)} onShare={shareUrl} shareCopied={shareCopied} />

      {isSearchOpen && <SearchModal onSelect={jumpToEvent} onClose={() => setIsSearchOpen(false)} />}
    </div>
  );
}
