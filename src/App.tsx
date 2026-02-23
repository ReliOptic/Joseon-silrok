import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ERAS, SEJONG_EVENTS, SILLOK_ENTRY } from './data';
import { ChevronRight, ArrowLeft, Bookmark, Search, BookOpen, Share2, ZoomIn, ZoomOut } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [level, setLevel] = useState(1);
  const [activeEra, setActiveEra] = useState(ERAS[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle Zoom In/Out
  const zoomIn = () => {
    if (level < 4) {
      gsap.to(containerRef.current, {
        scale: 1.25,
        opacity: 0,
        y: -20,
        duration: 0.4,
        onComplete: () => {
          setLevel(l => l + 1);
          gsap.fromTo(containerRef.current, 
            { scale: 0.8, opacity: 0, y: 20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          );
        }
      });
    }
  };

  const zoomOut = () => {
    if (level > 1) {
      gsap.to(containerRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 0.4,
        onComplete: () => {
          setLevel(l => l - 1);
          gsap.fromTo(containerRef.current, 
            { scale: 1.25, opacity: 0, y: -20 },
            { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
          );
        }
      });
    }
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY > 0) {
          zoomOut();
        } else {
          zoomIn();
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [level]);

  // Background color transition based on level and active era
  useEffect(() => {
    let bgColor = activeEra.color.primary;
    if (level === 2) bgColor = activeEra.color.primary; 
    if (level === 3) bgColor = '#F0F4F2'; 
    if (level === 4) bgColor = 'var(--color-level4-bg)';

    gsap.to('body', {
      backgroundColor: bgColor,
      duration: 1.2,
      ease: "power2.inOut"
    });
  }, [level, activeEra]);

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#2D2A26]">
      <div className="hanji-noise"></div>
      
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between bg-white/10 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-4">
          {level > 1 && (
            <button onClick={zoomOut} className="p-2 hover:bg-black/5 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
          )}
          <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase opacity-80">
            <span className="cursor-pointer hover:opacity-100" onClick={() => {if(level>1) zoomOut()}}>조선 (Joseon)</span>
            {level > 1 && <ChevronRight size={14} />}
            {level > 1 && <span className="cursor-pointer hover:opacity-100">세종 (Sejong)</span>}
            {level > 2 && <ChevronRight size={14} />}
            {level > 2 && <span className="cursor-pointer hover:opacity-100">25년 (Year 25)</span>}
            {level > 3 && <ChevronRight size={14} />}
            {level > 3 && <span>실록 (Sillok)</span>}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={zoomOut} disabled={level === 1} className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30"><ZoomOut size={20}/></button>
          <span className="text-xs font-bold">LV.{level}</span>
          <button onClick={zoomIn} disabled={level === 4} className="p-2 hover:bg-black/5 rounded-full disabled:opacity-30"><ZoomIn size={20}/></button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div ref={containerRef} className="w-full h-full pt-20 overflow-y-auto no-scrollbar">
        {level === 1 && <Level1MacroView setActiveEra={setActiveEra} zoomIn={zoomIn} />}
        {level === 2 && <Level2EventView zoomIn={zoomIn} />}
        {level === 3 && <Level3DetailView zoomIn={zoomIn} />}
        {level === 4 && <Level4SillokView />}
      </div>
    </div>
  );
}

function Level1MacroView({ setActiveEra, zoomIn }: { setActiveEra: any, zoomIn: () => void }) {
  const erasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.era-section');
      sections.forEach((sec: any, i) => {
        ScrollTrigger.create({
          trigger: sec,
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
                  // Calculate height based on years (min height 80px, scale factor 4)
                  const height = Math.max(80, king.years * 4);
                  return (
                    <div 
                      key={king.id} 
                      onClick={zoomIn}
                      className="relative pl-20 group cursor-pointer"
                      style={{ minHeight: `${height}px` }}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all z-10"></div>
                      
                      {/* Reign duration bar */}
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

function Level2EventView({ zoomIn }: { zoomIn: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <div className="mb-20">
        <span className="text-sm font-bold tracking-widest uppercase opacity-60 mb-2 block">제4대 왕 (4th King)</span>
        <h1 className="text-[48px] font-serif font-bold mb-4 leading-[1.4] tracking-[-0.02em]">세종 (Sejong)</h1>
        <p className="text-xl opacity-80">1418 - 1450 • 재위 32년</p>
      </div>

      <div className="relative">
        <div className="absolute left-[15px] top-0 w-px h-full bg-black/20"></div>
        
        {SEJONG_EVENTS.map((ev, i) => (
          <div key={i} className="relative pl-12 mb-16 group cursor-pointer" onClick={zoomIn}>
            <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-150 transition-all"></div>
            
            {/* 1px translucent curve for relationships (decorative) */}
            {i < SEJONG_EVENTS.length - 1 && (
              <svg className="absolute left-[15px] top-4 w-12 h-24 pointer-events-none opacity-30" viewBox="0 0 50 100" fill="none">
                <path d="M 0 0 C 20 20, 20 80, 0 100" stroke="black" strokeWidth="1" />
              </svg>
            )}

            <span className="text-xl font-bold opacity-60 mb-1 block">{ev.year}</span>
            <h3 className="text-[32px] font-serif font-bold mb-3 group-hover:text-[#1F3A69] transition-colors leading-[1.5] tracking-[-0.01em]">{ev.title}</h3>
            <p className="text-base opacity-80 leading-[1.6] tracking-[-0.01em]">{ev.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Level3DetailView({ zoomIn }: { zoomIn: () => void }) {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <div className="mb-16">
        <h1 className="text-[48px] font-serif font-bold mb-4 leading-[1.4] tracking-[-0.02em]">1443년 (세종 25년)</h1>
        <p className="text-xl opacity-80">계해년 (癸亥年)</p>
      </div>

      <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl relative overflow-hidden cursor-pointer hover:bg-white/50 transition-colors" onClick={zoomIn}>
        {/* Map Watermark */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url(https://picsum.photos/seed/map/800/600)', backgroundSize: 'cover' }}></div>
        
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
          <span className="text-[200px] font-serif leading-none">訓</span>
        </div>
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold uppercase tracking-widest">12월 30일</span>
          <span className="text-sm opacity-60">겨울 (Winter)</span>
        </div>
        
        <h2 className="text-[32px] font-serif font-bold mb-6 relative z-10 leading-[1.5] tracking-[-0.01em]">훈민정음 창제</h2>
        <p className="text-base leading-[1.6] tracking-[-0.01em] opacity-90 mb-8 relative z-10">
          "백성을 가르치는 바른 소리." 세종대왕이 친히 스물여덟 자를 창제하시다. 
          글을 몰라 억울한 일을 당하는 백성들을 위해, 누구나 쉽게 배우고 쓸 수 있는 새로운 문자가 탄생하였다.
        </p>

        {/* Unofficial History Speech Bubble */}
        <div className="relative z-10 bg-[#F5EFE6] p-6 rounded-2xl rounded-tl-none border border-[#F7B500]/30 shadow-sm mb-8 max-w-2xl">
          <div className="absolute -top-3 left-0 w-4 h-4 bg-[#F5EFE6] border-t border-l border-[#F7B500]/30 transform rotate-45"></div>
          <span className="text-xs font-bold text-[#F7B500] mb-2 block">야사 (Unofficial History)</span>
          <p className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80">
            "전하께서 눈병이 심하여 요양을 가신 중에도 밤낮으로 문자를 연구하시니, 신하들의 걱정이 이만저만이 아니었다고 전해진다."
          </p>
        </div>

        <div className="flex items-center gap-4 pt-6 border-t border-black/10 relative z-10">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold">집현전</div>
            <div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold">정인지</div>
          </div>
          <span className="text-sm opacity-60">관련 인물 및 기관</span>
        </div>
      </div>
    </div>
  );
}

function Level4SillokView() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-32">
      <div className="flex items-start justify-between border-b-2 border-black/10 pb-6 mb-12">
        <div>
          <span className="block text-xs font-bold tracking-widest uppercase opacity-60 mb-2">조선왕조실록 (Veritable Records)</span>
          <h2 className="text-[48px] font-serif font-bold leading-[1.4] tracking-[-0.02em]">{SILLOK_ENTRY.title}</h2>
        </div>
        <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center bg-black/5">
          <span className="font-serif font-bold text-xl">世宗</span>
        </div>
      </div>

      <div className="mb-12 relative flex flex-col md:flex-row gap-12">
        {/* Original Text (Vertical) */}
        <div className="md:w-1/3 flex justify-end">
          <div className="vertical-rl font-gungsuh text-[18px] leading-[1.8] opacity-80 h-[400px]">
            {SILLOK_ENTRY.original}
          </div>
        </div>
        
        {/* Translation */}
        <div className="md:w-2/3 relative z-10">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest opacity-50">국역 (Translation)</span>
            <div className="h-px bg-black/10 flex-1"></div>
          </div>
          <p className="font-serif text-[18px] leading-[1.8] text-justify break-keep mb-12">
            {SILLOK_ENTRY.translation}
          </p>

          <div className="bg-[#E2E7E4]/50 rounded-r-2xl border-l-4 border-[#90A4AE] p-8 relative">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              사신은 논한다 <span className="opacity-50 font-normal">(Historian's Commentary)</span>
            </h3>
            <p className="font-serif text-[18px] leading-[1.8] italic opacity-90">
              {SILLOK_ENTRY.commentary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
