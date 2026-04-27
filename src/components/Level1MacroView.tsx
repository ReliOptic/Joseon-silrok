import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ERAS } from '../data';
import type { Era } from '../types/king.types';

interface Level1Props {
  setActiveEra: (era: Era) => void;
  onSelectKing: (id: string) => void;
}

export function Level1MacroView({ setActiveEra, onSelectKing }: Level1Props) {
  const erasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.era-section');
      sections.forEach((sec: unknown, i) => {
        ScrollTrigger.create({
          trigger: sec as Element,
          start: "top 40%",
          end: "bottom 60%",
          onEnter: () => {
            setActiveEra(ERAS[i]);
            gsap.to('body', { backgroundColor: ERAS[i].color.primary, duration: 1.5, ease: "power2.inOut" });
          },
          onEnterBack: () => {
            setActiveEra(ERAS[i]);
            gsap.to('body', { backgroundColor: ERAS[i].color.primary, duration: 1.5, ease: "power2.inOut" });
          }
        });
      });
    }, erasRef);
    return () => ctx.revert();
  }, [setActiveEra]);

  return (
    <div ref={erasRef} className="pb-32">
      <div className="max-w-5xl mx-auto px-6 pt-20">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-4">조선 왕조 500년</h1>
        <p className="text-xl opacity-70 mb-32">The 500 Years of the Joseon Dynasty</p>

        {ERAS.map((era, i) => (
          <div key={era.id} className="era-section min-h-[80vh] flex flex-col justify-center mb-32 relative">
            <div className="absolute left-0 top-0 w-1 h-full bg-black/10"></div>
            <div className="pl-12">
              <span className="text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block">{era.period}</span>
              <h2 className="text-[48px] font-serif font-bold mb-6 leading-[1.4] tracking-[-0.02em]">{era.name}</h2>
              <p className="text-lg opacity-80 max-w-2xl mb-12 leading-relaxed tracking-[-0.01em]">{era.description}</p>

              <div className="flex flex-col gap-4 relative">
                <div className="absolute left-[30px] top-0 bottom-0 w-px bg-black/20"></div>
                {era.kingsList.map(king => {
                  const height = Math.max(80, king.years * 4);
                  return (
                    <div
                      key={king.id}
                      onClick={() => onSelectKing(king.id)}
                      className="relative pl-20 group cursor-pointer"
                      style={{ minHeight: `${height}px` }}
                    >
                      <div className="absolute left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all z-10"></div>
                      <div
                        className="absolute left-[29px] top-8 w-[3px] bg-black/40 group-hover:bg-black transition-colors"
                        style={{ height: `calc(100% - 32px)` }}
                      ></div>
                      <div className="p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all group-hover:bg-white/40 group-hover:-translate-y-1 h-full flex flex-col justify-center">
                        <div className="flex items-baseline gap-4 mb-2">
                          <h3 className="text-[32px] font-serif font-bold leading-[1.5] tracking-[-0.01em]">{king.name}</h3>
                          <span className="text-sm font-bold opacity-60 bg-black/5 px-2 py-1 rounded-full">{king.years}년</span>
                        </div>
                        <p className="text-sm opacity-60 mb-2">{king.reign}</p>
                        <p className="text-base font-medium leading-[1.6] tracking-[-0.01em]">{king.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
