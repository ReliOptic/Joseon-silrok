import { useEffect } from 'react';

interface UrlStateSetters {
  readonly setLevel: (level: number) => void;
  readonly setSelectedKingId: (id: string) => void;
  readonly setSelectedEventIndex: (index: number) => void;
}

interface UrlStateDeps {
  readonly level: number;
  readonly selectedKingId: string;
  readonly selectedEventIndex: number;
}

export function useUrlState(deps: UrlStateDeps, setters: UrlStateSetters): void {
  const { level, selectedKingId, selectedEventIndex } = deps;
  const { setLevel, setSelectedKingId, setSelectedEventIndex } = setters;

  useEffect(() => {
    const params = new URLSearchParams();
    if (level > 1) {
      params.set('level', String(level));
      params.set('king', selectedKingId);
      params.set('event', String(selectedEventIndex));
      window.history.pushState(
        { level, king: selectedKingId, event: selectedEventIndex },
        '',
        '?' + params.toString()
      );
    } else {
      window.history.replaceState({ level: 1 }, '', window.location.pathname);
    }
  }, [level, selectedKingId, selectedEventIndex]);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent): void => {
      const state = e.state as { level?: number; king?: string; event?: number } | null;
      if (state && typeof state.level === 'number') {
        setLevel(state.level);
        if (state.king) setSelectedKingId(state.king);
        if (typeof state.event === 'number') setSelectedEventIndex(state.event);
      } else {
        setLevel(1);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [setLevel, setSelectedKingId, setSelectedEventIndex]);
}
