import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TransitionCardProps {
  readonly kingId: string;
  readonly text: string;
}

export function TransitionCard({ kingId, text }: TransitionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const key = `transition-seen-${kingId}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');

    const el = cardRef.current;
    if (!el) return;

    el.style.display = 'block';

    const tl = gsap.timeline();
    tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.inOut' })
      .to(el, { duration: 1.5 })
      .to(el, { opacity: 0, duration: 0.5, ease: 'power2.inOut', onComplete: () => { el.style.display = 'none'; } });

    const dismiss = () => {
      tl.kill();
      gsap.to(el, { opacity: 0, duration: 0.25, ease: 'power2.inOut', onComplete: () => { el.style.display = 'none'; } });
      el.removeEventListener('click', dismiss);
    };
    el.addEventListener('click', dismiss);

    return () => {
      tl.kill();
      el.removeEventListener('click', dismiss);
    };
  }, [kingId]);

  return (
    <div
      ref={cardRef}
      className="mb-8 px-6 py-5 rounded-xl cursor-pointer select-none"
      style={{
        display: 'none',
        backgroundColor: '#E8E2D9',
        border: '1px solid #C8BFB4',
      }}
    >
      <p
        className="text-sm leading-relaxed tracking-wide text-center opacity-80"
        style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#3A3530' }}
      >
        {text}
      </p>
    </div>
  );
}
