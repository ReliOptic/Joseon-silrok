import type { KingData } from '../types/king.types';
import { ERAS } from '../data';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface Level35Props {
  kingData: KingData;
  eventIndex: number;
  onNavigateEvent: (direction: 'prev' | 'next') => void;
  zoomIn: () => void;
  zoomOut: () => void;
}

export function Level35StoryView({ kingData, eventIndex, onNavigateEvent, zoomIn, zoomOut }: Level35Props) {
  const safeIndex = Math.min(eventIndex, kingData.events.length - 1);
  const event = kingData.events[safeIndex];
  const kingMeta = ERAS.flatMap(e => e.kingsList).find(k => k.id === kingData.id);
  const storyEntry = event.storyEntry;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-12 pb-32">
      {/* 이벤트 네비게이션 */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => onNavigateEvent('prev')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={16} />이전 사건
        </button>
        <span className="text-xs opacity-40 tracking-widest">{safeIndex + 1} / {kingData.events.length}</span>
        <button
          onClick={() => onNavigateEvent('next')}
          className="flex items-center gap-1.5 text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          다음 사건<ChevronRight size={16} />
        </button>
      </div>

      {/* 헤더 */}
      <div className="mb-10">
        {kingMeta && (
          <span className="text-sm font-bold tracking-widest uppercase opacity-50 mb-2 block">
            {kingMeta.name} · {event.year}년
          </span>
        )}
        <h1 className="text-[36px] font-serif font-bold leading-[1.4] tracking-[-0.02em] mb-2">{event.title}</h1>
      </div>

      {/* 스토리 씬 영역 */}
      {storyEntry ? (
        <div className="mb-8">
          <p className="text-sm opacity-50 mb-4">{storyEntry.title}</p>
          {storyEntry.scenes.map((scene, i) => (
            <div key={i} className="aspect-video rounded-2xl bg-black/20 flex items-center justify-center mb-4">
              <p className="text-sm opacity-40 italic px-8 text-center">{scene.narration}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-8 aspect-video rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border border-white/10 flex flex-col items-center justify-center gap-4 text-white">
          <BookOpen size={40} className="opacity-20" />
          <div className="text-center">
            <p className="text-base font-serif opacity-60 mb-2">스토리 생성 준비 중</p>
            <p className="text-xs opacity-30 max-w-xs leading-relaxed">
              AI가 실록 원문을 바탕으로<br />이 사건의 이야기를 만들어 드릴 예정입니다
            </p>
          </div>
        </div>
      )}

      {/* 하단 CTA */}
      <div className="flex items-center gap-4">
        <button
          onClick={zoomOut}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/20 text-sm hover:bg-black/5 transition-colors"
        >
          <ChevronLeft size={15} />사건 상세로
        </button>
        <button
          onClick={zoomIn}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/10 text-sm hover:bg-black/20 transition-colors ml-auto"
        >
          실록 원문 보기<ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
