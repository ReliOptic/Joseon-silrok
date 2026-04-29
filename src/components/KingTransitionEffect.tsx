import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { KingListItem } from '../types/king.types';

interface KingTransitionEffectProps {
  readonly kingMeta: KingListItem | undefined;
  readonly eraName: string | undefined;
  /** Current drill-down level. Effect only fires when level >= 2. Defaults to 2. */
  readonly level?: number;
}

export function KingTransitionEffect({ kingMeta, eraName, level = 2 }: KingTransitionEffectProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const lastTriggeredId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      lastTriggeredId.current = kingMeta?.id;
      return;
    }
    const el = overlayRef.current;
    // Only fire when a king is known, the level is L2+, and the id actually changed.
    if (!el || !kingMeta || level < 2 || kingMeta.id === lastTriggeredId.current) return;
    lastTriggeredId.current = kingMeta.id;

    const tl = gsap.timeline();
    tl.set(el, { display: 'flex', opacity: 0 })
      .to(el, { opacity: 1, duration: 0.22, ease: 'power2.out' })
      .to(el, { duration: 0.45 })
      .to(el, { opacity: 0, duration: 0.28, ease: 'power2.in' })
      .set(el, { display: 'none' });

    return () => { tl.kill(); };
  }, [kingMeta?.id, level]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] pointer-events-none flex-col items-center justify-center bg-[#0d0d12]/85 backdrop-blur-sm"
      style={{ display: 'none' }}
    >
      {eraName && (
        <span className="text-[11px] tracking-[0.5em] uppercase text-white/50 mb-6">
          {eraName}
        </span>
      )}
      <h2 className="font-serif text-[64px] sm:text-[88px] font-bold text-white tracking-tight leading-none">
        {kingMeta?.name ?? ''}
      </h2>
      {kingMeta?.reign && (
        <span className="mt-5 text-sm tracking-[0.3em] text-white/60">
          {kingMeta.reign}
        </span>
      )}
    </div>
  );
}
