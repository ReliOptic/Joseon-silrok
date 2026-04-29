import type { KingData, KingListItem, KingSillokEntry } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Level4Props {
  readonly kingData: KingData;
  readonly eventIndex: number;
  readonly onNavigateEvent: (direction: 'prev' | 'next') => void;
  readonly nextKing?: KingListItem | null;
}

interface SillokArticleProps {
  readonly sillokEntry: KingSillokEntry;
  readonly isEventSpecific: boolean;
  readonly recordName: string;
  readonly kingInitial: string;
}

function SillokArticle({ sillokEntry, isEventSpecific, recordName, kingInitial }: SillokArticleProps){
  return (
    <div className="bg-black/[0.03] rounded-2xl p-8 mb-8">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-serif font-bold leading-[1.4] tracking-[-0.01em]">{sillokEntry.title}</h2>
          <span className="text-xs opacity-40 mt-1 block">{sillokEntry.date}</span>
        </div>
        <div className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center bg-white/60 shrink-0 ml-4">
          <span className="font-serif font-bold text-xs text-center px-1">{kingInitial}</span>
        </div>
      </div>

      <div className={`flex flex-col ${sillokEntry.original ? 'md:flex-row' : ''} gap-8 mb-8`}>
        {sillokEntry.original && (
          <div className="md:w-[38%] flex justify-end">
            <div className="vertical-rl font-gungsuh text-[16px] leading-[1.8] opacity-70 max-h-[320px] overflow-y-auto no-scrollbar">
              {sillokEntry.original}
            </div>
          </div>
        )}
        <div className={sillokEntry.original ? 'md:w-[62%]' : 'w-full'}>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest opacity-40">국역</span>
            <div className="h-px bg-black/10 flex-1"></div>
          </div>
          <p className="font-serif text-[17px] leading-[1.85] text-justify break-keep opacity-90">
            {sillokEntry.translation}
          </p>
        </div>
      </div>

      {sillokEntry.commentary && (
        <div className="bg-[#E2E7E4]/60 rounded-xl border-l-4 border-[#90A4AE] px-7 py-6">
          <h3 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60 flex items-center gap-2">
            사신은 논한다 <span className="opacity-60 font-normal">(Historian's Commentary)</span>
          </h3>
          <p className="font-serif text-[16px] leading-[1.85] italic opacity-85">{sillokEntry.commentary}</p>
        </div>
      )}

      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 px-1 mt-8">
        <span className="text-xs tracking-[0.3em] uppercase opacity-25 shrink-0">출처</span>
        {sillokEntry.sourceUrl ? (
          <a href={sillokEntry.sourceUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs opacity-40 hover:opacity-80 transition-opacity underline underline-offset-2 font-mono">
            {recordName} {sillokEntry.articleId}
          </a>
        ) : (
          <span className="text-xs opacity-30 font-mono">
            {recordName}{sillokEntry.articleId ? ` ${sillokEntry.articleId}` : ''}
          </span>
        )}
        <span className="text-xs opacity-20">국사편찬위원회 제공</span>
        {!isEventSpecific && (
          <span className="text-xs opacity-35 w-full leading-relaxed">
            이 기사는 {recordName} 대표 기사입니다. 해당 사건의 원문은 수집 중입니다.
          </span>
        )}
      </div>
    </div>
  );
}

interface NextKingCtaProps {
  readonly nextKing: KingListItem | null | undefined;
  readonly reignEnd: string;
  readonly onNext: () => void;
}

function NextKingCta({ nextKing, reignEnd, onNext }: NextKingCtaProps){
  return (
    <div className="mt-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-black/10" />
        <span className="text-xs tracking-[0.4em] uppercase opacity-30">{reignEnd} 재위 종료</span>
        <div className="h-px flex-1 bg-black/10" />
      </div>
      {nextKing ? (
        <button
          onClick={onNext}
          className="w-full group bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:border-white/60 transition-all text-left"
        >
          <span className="text-xs tracking-[0.35em] uppercase opacity-40 block mb-4">다음 왕</span>
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-[32px] font-serif font-bold leading-[1.3] mb-2">{nextKing.name}</h3>
              <p className="text-sm opacity-50 mb-3">{nextKing.reign} · 재위 {nextKing.years}년</p>
              <p className="text-base opacity-70 leading-relaxed line-clamp-2">{nextKing.desc}</p>
            </div>
            <ChevronRight size={36} className="opacity-20 group-hover:opacity-70 group-hover:translate-x-2 transition-all shrink-0" />
          </div>
        </button>
      ) : (
        <div className="w-full rounded-2xl p-8 border border-black/10 bg-black/[0.03] text-center">
          <span className="text-xs tracking-[0.35em] uppercase opacity-30 block mb-6">1392 – 1910</span>
          <h3 className="text-[28px] font-serif font-bold leading-[1.4] mb-4 opacity-80">조선왕조의 끝</h3>
          <p className="text-base opacity-50 leading-relaxed break-keep max-w-sm mx-auto">
            518년에 걸친 27대 왕의 기록이 여기서 끝납니다.<br />
            처음으로 돌아가 다시 읽어보시겠습니까?
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs opacity-30 tracking-widest uppercase">
            <ChevronLeft size={14} /><span>태조부터 다시</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function Level4SillokView({ kingData, eventIndex, onNavigateEvent, nextKing }: Level4Props){
  const safeIndex = Math.min(eventIndex, kingData.events.length - 1);
  const isLastEvent = safeIndex === kingData.events.length - 1;
  const currentEvent = kingData.events[safeIndex];
  const sillokEntry = currentEvent.sillokEntry ?? kingData.sillokEntry;
  const isEventSpecific = !!currentEvent.sillokEntry;
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);
  const recordName = kingData.id === 'yeonsangun' ? '연산군일기'
    : kingData.id === 'gwanghaegun' ? '광해군일기'
    : `${kingMeta?.name ?? ''}실록`;
  const reignEnd = kingMeta?.reign?.split('–')[1]?.trim() ?? '';

  return (
    <div className="max-w-3xl mx-auto px-6 pt-10 pb-32">
      <div className="flex items-center justify-between mb-10">
        <button onClick={() => onNavigateEvent('prev')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity">
          <ChevronLeft size={16} />이전
        </button>
        <span className="text-xs opacity-40 tracking-widest">{safeIndex + 1} / {kingData.events.length}</span>
        <button onClick={() => onNavigateEvent('next')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity">
          다음<ChevronRight size={16} />
        </button>
      </div>

      <div className="mb-10 border-b-2 border-black/10 pb-8">
        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-40 mb-3 block">
          {kingMeta?.name} · {currentEvent.year}년
        </span>
        <h1 className="text-[38px] font-serif font-bold leading-[1.3] tracking-[-0.02em] mb-4">{currentEvent.title}</h1>
        <p className="text-base opacity-70 leading-[1.7] tracking-[-0.01em] break-keep">{currentEvent.desc}</p>
      </div>

      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-40">
          {kingData.id === 'yeonsangun' ? '연산군일기' : kingData.id === 'gwanghaegun' ? '광해군일기' : '조선왕조실록 (Veritable Records)'}
        </span>
        {isEventSpecific ? (
          <span className="text-xs opacity-30 font-mono">{sillokEntry.articleId}</span>
        ) : (
          <span className="text-xs opacity-30 italic bg-amber-500/10 px-2 py-0.5 rounded">
            ※ {recordName} 대표 기사 — 해당 사건의 원문이 아닙니다
          </span>
        )}
      </div>

      <SillokArticle
        sillokEntry={sillokEntry}
        isEventSpecific={isEventSpecific}
        recordName={recordName}
        kingInitial={kingMeta?.name?.slice(2) ?? ''}
      />

      {isLastEvent && (
        <NextKingCta nextKing={nextKing} reignEnd={reignEnd} onNext={() => onNavigateEvent('next')} />
      )}
    </div>
  );
}
