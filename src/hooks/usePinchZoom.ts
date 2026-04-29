import { useEffect, useRef } from 'react';

interface UsePinchZoomDeps {
  readonly level: number;
  readonly zoomIn: () => void;
  readonly zoomOut: () => void;
}

export function usePinchZoom(deps: UsePinchZoomDeps): void {
  const { level, zoomIn, zoomOut } = deps;
  const touchInitialDistance = useRef<number | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent): void => {
      if (e.touches.length !== 2) return;
      touchInitialDistance.current = Math.hypot(
        e.touches[1].clientX - e.touches[0].clientX,
        e.touches[1].clientY - e.touches[0].clientY
      );
    };

    const handleTouchMove = (e: TouchEvent): void => {
      if (e.touches.length !== 2 || touchInitialDistance.current === null) return;
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
  }, [level, zoomIn, zoomOut]);
}
