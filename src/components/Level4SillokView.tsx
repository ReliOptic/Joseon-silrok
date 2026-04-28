import type { KingData } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Level4Props {
  kingData: KingData;
  eventIndex: number;
  onNavigateEvent: (direction: 'prev' | 'next') => void;
}

export function Level4SillokView({ kingData, eventIndex, onNavigateEvent }: Level4Props) {
  const safeIndex = Math.min(eventIndex, kingData.events.length - 1);
  const currentEvent = kingData.events[safeIndex];
  const sillokEntry = currentEvent.sillokEntry ?? kingData.sillokEntry;
  const isEventSpecific = !!currentEvent.sillokEntry;
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);
  const recordName = kingData.id === 'yeonsangun' ? '연산군일기' : kingData.id === 'gwanghaegun' ? '광해군일기' : `${kingMeta?.name ?? ''}실록`;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-10 pb-32">

      {/* 이벤트 네비게이션 */}
      <div className="flex items-center justify-between mb-10">
        <button
          onClick={() => onNavigateEvent('prev')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={16} />이전
        </button>
        <span className="text-xs opacity-40 tracking-widest">{safeIndex + 1} / {kingData.events.length}</span>
        <button
          onClick={() => onNavigateEvent('next')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          다음<ChevronRight size={16} />
        </button>
      </div>

      {/* 현재 이벤트 컨텍스트 — 이동할 때마다 바뀌는 핵심 헤더 */}
      <div className="mb-10 border-b-2 border-black/10 pb-8">
        <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-40 mb-3 block">
          {kingMeta?.name} · {currentEvent.year}년
        </span>
        <h1 className="text-[38px] font-serif font-bold leading-[1.3] tracking-[-0.02em] mb-4">
          {currentEvent.title}
        </h1>
        <p className="text-base opacity-70 leading-[1.7] tracking-[-0.01em] break-keep">
          {currentEvent.desc}
        </p>
      </div>

      {/* 실록 기사 */}
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

      <div className="bg-black/[0.03] rounded-2xl p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-[22px] font-serif font-bold leading-[1.4] tracking-[-0.01em]">
              {sillokEntry.title}
            </h2>
            <span className="text-xs opacity-40 mt-1 block">{sillokEntry.date}</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center bg-white/60 shrink-0 ml-4">
            <span className="font-serif font-bold text-xs text-center px-1">{kingMeta?.name?.slice(2) ?? ''}</span>
          </div>
        </div>

        {/* 원문 + 국역 */}
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

        {/* 사신은 논한다 */}
        {sillokEntry.commentary && (
          <div className="bg-[#E2E7E4]/60 rounded-xl border-l-4 border-[#90A4AE] px-7 py-6">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3 opacity-60 flex items-center gap-2">
              사신은 논한다 <span className="opacity-60 font-normal">(Historian's Commentary)</span>
            </h3>
            <p className="font-serif text-[16px] leading-[1.85] italic opacity-85">
              {sillokEntry.commentary}
            </p>
          </div>
        )}
      </div>

      {/* 출처 */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5 px-1">
        <span className="text-xs tracking-[0.3em] uppercase opacity-25 shrink-0">출처</span>
        {sillokEntry.sourceUrl ? (
          <a
            href={sillokEntry.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs opacity-40 hover:opacity-80 transition-opacity underline underline-offset-2 font-mono"
          >
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
