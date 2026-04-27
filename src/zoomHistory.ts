// A zoom navigation stack: each entry binds a level (1-4) to the specific
// era/king/event/sillok that was zoomed into. The stack lets the user replay,
// rewind, or branch their reading path the same way browser history does.
import { useCallback, useState } from 'react';

export type ZoomFrame =
  | { level: 1 }
  | { level: 2; kingId: string }
  | { level: 3; kingId: string; eventId: number }
  | { level: 4; kingId: string; eventId: number; sillokId: number };

export interface ZoomHistoryApi {
  current: ZoomFrame;
  stack: ZoomFrame[];
  push: (frame: ZoomFrame) => void;
  pop: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export function useZoomHistory(initial: ZoomFrame = { level: 1 }): ZoomHistoryApi {
  const [stack, setStack] = useState<ZoomFrame[]>([initial]);

  const push = useCallback((frame: ZoomFrame) => {
    setStack(s => [...s, frame]);
  }, []);

  const pop = useCallback(() => {
    setStack(s => (s.length > 1 ? s.slice(0, -1) : s));
  }, []);

  const jumpTo = useCallback((index: number) => {
    setStack(s => (index >= 0 && index < s.length ? s.slice(0, index + 1) : s));
  }, []);

  const reset = useCallback(() => setStack([initial]), [initial]);

  return {
    current: stack[stack.length - 1],
    stack,
    push,
    pop,
    jumpTo,
    reset,
  };
}
