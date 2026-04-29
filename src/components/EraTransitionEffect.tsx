import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import type { Era } from '../types/king.types';

interface EraTransitionEffectProps {
  /** The era that contains the currently selected king. Pass undefined when level < 2. */
  readonly era: Era | undefined;
  /** Currently selected king id — used only to detect era-boundary crossings. */
  readonly kingId: string;
}

export function EraTransitionEffect({ era, kingId }: EraTransitionEffectProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  const lastEraId = useRef<number | undefined>(undefined);
  const lastKingId = useRef<string | undefined>(undefined);

  useEffect(() => {
    // Skip the very first mount — no "transition" has occurred yet.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      lastEraId.current = era?.id;
      lastKingId.current = kingId;
      return;
    }

    const eraChanged = era !== undefined && era.id !== lastEraId.current;
    const kingChanged = kingId !== lastKingId.current;

    lastEraId.current = era?.id;
    lastKingId.current = kingId;

    // Only fire when the era boundary is crossed and a king navigation triggered it.
    if (!eraChanged || !kingChanged || !era) return;

    const el = overlayRef.current;
    const txt = textRef.current;
    if (!el || !txt) return;

    const tl = gsap.timeline();

    // Phase 1: slam in (0–0.3s)
    tl.set(el, { display: 'flex', opacity: 0 })
      .to(el, { opacity: 1, duration: 0.3, ease: 'power3.out' })

      // Phase 2: hold with text stagger (0.3–1.1s)
      .from(txt.children, {
        y: 24,
        opacity: 0,
        duration: 0.35,
        stagger: 0.12,
        ease: 'power2.out',
      }, '-=0.05')
      .to({}, { duration: 0.55 })

      // Phase 3: fade out (1.1–1.6s)
      .to(el, { opacity: 0, duration: 0.5, ease: 'power2.in' })
      .set(el, { display: 'none' });

    return () => { tl.kill(); };
  }, [kingId, era?.id]);

  // Derive gradient from era color — use the primary color with a dark overlay.
  const primary = era?.color.primary ?? '#1a1a2e';
  const secondary = era?.color.secondary ?? '#0d0d12';

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[200] pointer-events-none"
      style={{ display: 'none' }}
    >
      {/* Coloured gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${primary}ee 0%, ${secondary}f5 55%, #0a0a14fc 100%)`,
        }}
      />

      {/* Vertical noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay hanji-noise" />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 gap-4"
      >
        {/* Era number badge */}
        <span
          className="text-[10px] sm:text-xs tracking-[0.6em] uppercase font-semibold"
          style={{ color: `${primary}` }}
        >
          시대 전환
        </span>

        {/* Era name — big headline */}
        <h1
          className="font-serif text-[42px] sm:text-[72px] font-bold leading-tight text-center text-white"
          style={{ textShadow: `0 0 60px ${primary}99` }}
        >
          {era?.name ?? ''}
        </h1>

        {/* Keyword */}
        <p className="text-sm sm:text-base tracking-[0.25em] text-white/70 text-center">
          {era?.keyword ?? ''}
        </p>

        {/* Period */}
        <span className="text-xs sm:text-sm tracking-[0.4em] text-white/45 mt-2">
          {era?.period ?? ''}
        </span>

        {/* Thin divider line */}
        <div
          className="w-16 h-px mt-1 opacity-50"
          style={{ backgroundColor: primary }}
        />

        {/* Brief description — hidden on smallest screens */}
        <p className="hidden sm:block text-xs sm:text-sm text-white/40 text-center max-w-md leading-relaxed">
          {era?.description ?? ''}
        </p>
      </div>
    </div>
  );
}
