import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { STORY_MANIFEST } from '../data/story-manifest';
import type { KingData } from '../types/king.types';

function getNextLevel(current: number, hasStoryInKing: boolean): number {
  if (current === 3) return hasStoryInKing ? 3.5 : 4;
  if (current === 3.5) return 4;
  return Math.min(current + 1, 4);
}

function getPrevLevel(current: number, hasStoryInEvent: boolean): number {
  if (current === 4) return hasStoryInEvent ? 3.5 : 3;
  if (current === 3.5) return 3;
  return Math.max(current - 1, 1);
}

interface UseZoomDeps {
  readonly containerRef: RefObject<HTMLDivElement | null>;
  readonly level: number;
  readonly selectedKingId: string;
  readonly selectedEventIndex: number;
  readonly kingData: KingData | null;
  readonly setLevel: (level: number) => void;
  readonly setSelectedEventIndex: (index: number) => void;
}

interface UseZoomReturn {
  readonly zoomIn: () => void;
  readonly zoomOut: () => void;
  readonly zoomToLevel: (target: number) => void;
}

export function useZoom(deps: UseZoomDeps): UseZoomReturn {
  const {
    containerRef,
    level,
    selectedKingId,
    selectedEventIndex,
    kingData,
    setLevel,
    setSelectedEventIndex,
  } = deps;

  const currentEvent = kingData
    ? kingData.events[Math.min(selectedEventIndex, kingData.events.length - 1)]
    : null;

  const zoomIn = (): void => {
    const hasStoryInKing = STORY_MANIFEST.some(e => e.kingId === selectedKingId);
    const next = getNextLevel(level, hasStoryInKing);
    if (next <= level) return;
    const jumpToStoryIdx =
      next === 3.5 && !currentEvent?.storyEntry
        ? STORY_MANIFEST.find(e => e.kingId === selectedKingId)?.eventIndex ?? null
        : null;
    gsap.to(containerRef.current, {
      scale: 1.25, opacity: 0, y: -20, duration: 0.4,
      onComplete: () => {
        setLevel(next);
        if (jumpToStoryIdx !== null) setSelectedEventIndex(jumpToStoryIdx);
        gsap.fromTo(
          containerRef.current,
          { scale: 0.8, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      },
    });
  };

  const zoomOut = (): void => {
    const prev = getPrevLevel(level, !!currentEvent?.storyEntry);
    if (prev >= level) return;
    gsap.to(containerRef.current, {
      scale: 0.8, opacity: 0, y: 20, duration: 0.4,
      onComplete: () => {
        setLevel(prev);
        gsap.fromTo(
          containerRef.current,
          { scale: 1.25, opacity: 0, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      },
    });
  };

  const zoomToLevel = (target: number): void => {
    if (target >= level) return;
    gsap.to(containerRef.current, {
      scale: 0.8, opacity: 0, y: 20, duration: 0.3,
      onComplete: () => {
        setLevel(target);
        gsap.fromTo(
          containerRef.current,
          { scale: 1.25, opacity: 0, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
        );
      },
    });
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent): void => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      if (e.deltaY > 0) zoomOut(); else zoomIn();
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [level]);

  return { zoomIn, zoomOut, zoomToLevel };
}
