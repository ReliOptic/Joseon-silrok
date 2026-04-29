import React, { RefObject } from 'react';
import { gsap } from 'gsap';
import { ERAS } from '../data';
import { loadKingData } from '../data/index';
import { STORY_MANIFEST } from '../data/story-manifest';
import type { KingData } from '../types/king.types';

interface KingMeta {
  readonly id: string;
}

interface UseNavigationDeps {
  readonly containerRef: RefObject<HTMLDivElement | null>;
  readonly level: number;
  readonly selectedKingId: string;
  readonly selectedEventIndex: number;
  readonly kingData: KingData | null;
  readonly prevKing: KingMeta | null;
  readonly nextKing: KingMeta | null;
  readonly setSelectedKingId: (id: string) => void;
  readonly setSelectedEventIndex: React.Dispatch<React.SetStateAction<number>>;
  readonly setLevel: (level: number) => void;
  readonly zoomIn: () => void;
  readonly zoomToLevel: (target: number) => void;
}

interface UseNavigationReturn {
  readonly slideAnimate: (direction: 'prev' | 'next', onMid: () => void) => void;
  readonly selectKing: (id: string) => void;
  readonly selectKingFromTimeline: (id: string) => void;
  readonly selectEvent: (index: number) => void;
  readonly navigateToKing: (id: string, direction: 'prev' | 'next') => void;
  readonly navigateStory: (direction: 'prev' | 'next') => void;
  readonly navigateEvent: (direction: 'prev' | 'next') => void;
  readonly jumpToEvent: (kingId: string, eventIndex: number) => void;
}

export function useNavigation(deps: UseNavigationDeps): UseNavigationReturn {
  const {
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
  } = deps;

  const ALL_KINGS = ERAS.flatMap(e => e.kingsList);
  const currentKingIndex = ALL_KINGS.findIndex(k => k.id === selectedKingId);

  const slideAnimate = (direction: 'prev' | 'next', onMid: () => void): void => {
    const outX = direction === 'next' ? -80 : 80;
    const inX = direction === 'next' ? 80 : -80;
    gsap.to(containerRef.current, {
      x: outX, opacity: 0, duration: 0.28, ease: 'power2.in',
      onComplete: () => {
        onMid();
        gsap.fromTo(
          containerRef.current,
          { x: inX, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
        );
      },
    });
  };

  const selectKing = (id: string): void => {
    setSelectedKingId(id);
    setSelectedEventIndex(0);
    zoomIn();
  };

  const selectKingFromTimeline = (id: string): void => {
    if (level <= 1) {
      setSelectedKingId(id);
      setSelectedEventIndex(0);
      zoomIn();
    } else if (level > 2) {
      setSelectedKingId(id);
      setSelectedEventIndex(0);
      zoomToLevel(2);
    } else if (id !== selectedKingId) {
      slideAnimate('next', () => {
        setSelectedKingId(id);
        setSelectedEventIndex(0);
      });
    }
  };

  const selectEvent = (index: number): void => {
    setSelectedEventIndex(index);
    zoomIn();
  };

  const navigateToKing = (id: string, direction: 'prev' | 'next'): void => {
    slideAnimate(direction, () => {
      setSelectedKingId(id);
      setSelectedEventIndex(0);
    });
  };

  const navigateStory = (direction: 'prev' | 'next'): void => {
    const currentIdx = STORY_MANIFEST.findIndex(
      e => e.kingId === selectedKingId && e.eventIndex === selectedEventIndex
    );
    let target;
    if (currentIdx < 0) {
      target =
        direction === 'next'
          ? STORY_MANIFEST.find(e =>
              e.kingId === selectedKingId
                ? e.eventIndex >= selectedEventIndex
                : ALL_KINGS.findIndex(k => k.id === e.kingId) > currentKingIndex
            )
          : [...STORY_MANIFEST].reverse().find(e =>
              e.kingId === selectedKingId
                ? e.eventIndex <= selectedEventIndex
                : ALL_KINGS.findIndex(k => k.id === e.kingId) < currentKingIndex
            );
    } else {
      target =
        direction === 'next'
          ? STORY_MANIFEST[currentIdx + 1]
          : STORY_MANIFEST[currentIdx - 1];
    }
    if (!target) return;
    slideAnimate(direction, () => {
      setSelectedKingId(target.kingId);
      setSelectedEventIndex(target.eventIndex);
    });
  };

  const navigateEvent = (direction: 'prev' | 'next'): void => {
    const eventsCount = kingData?.events.length ?? 0;
    if (direction === 'next') {
      if (selectedEventIndex < eventsCount - 1) {
        slideAnimate('next', () => setSelectedEventIndex(i => i + 1));
      } else if (nextKing) {
        slideAnimate('next', () => {
          setSelectedKingId(nextKing.id);
          setSelectedEventIndex(0);
        });
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

  const jumpToEvent = (kingId: string, eventIndex: number): void => {
    gsap.to(containerRef.current, {
      scale: 0.95, opacity: 0, duration: 0.25,
      onComplete: () => {
        setSelectedKingId(kingId);
        setSelectedEventIndex(eventIndex);
        setLevel(3);
        gsap.fromTo(
          containerRef.current,
          { scale: 1.05, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      },
    });
  };

  return {
    slideAnimate,
    selectKing,
    selectKingFromTimeline,
    selectEvent,
    navigateToKing,
    navigateStory,
    navigateEvent,
    jumpToEvent,
  };
}
