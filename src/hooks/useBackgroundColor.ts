import { useEffect } from 'react';
import { gsap } from 'gsap';
import type { Era } from '../types/king.types';

interface UseBackgroundColorDeps {
  readonly level: number;
  readonly activeEra: Era;
}

export function useBackgroundColor(deps: UseBackgroundColorDeps): void {
  const { level, activeEra } = deps;

  useEffect(() => {
    const bgColor =
      level >= 3
        ? level >= 4
          ? 'var(--color-level4-bg)'
          : '#F0F4F2'
        : activeEra.color.primary;
    gsap.to('body', { backgroundColor: bgColor, duration: 1.2, ease: 'power2.inOut' });
  }, [level, activeEra]);
}
