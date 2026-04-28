import { useState } from 'react';
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
  const sceneCount = storyEntry?.scenes.length ?? 0;

  const [sceneIdx, setSceneIdx] = useState(0);
  const currentScene = storyEntry?.scenes[sceneIdx];

  const prevScene = () => setSceneIdx(i => Math.max(0, i - 1));
  const nextScene = () => setSceneIdx(i => Math.min(sceneCount - 1, i + 1));

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
      {storyEntry && currentScene ? (
        <div className="mb-8">
          {/* 스토리 제목 + 뱃지 */}
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-serif font-bold tracking-tight">{storyEntry.title}</h2>
            <span className="shrink-0 text-[10px] tracking-widest px-2 py-0.5 rounded-full border border-white/20 opacity-40">
              AI 해석 · 실록 기반
            </span>
          </div>

          {/* 씬 카드 — 한 번에 하나 */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d0d1a] via-[#111827] to-[#0a0a12]">
            {/* 씬 번호 */}
            <div className="absolute top-4 left-5 text-xs font-mono tracking-widest text-white opacity-50">
              {String(sceneIdx + 1).padStart(2, '0')} / {String(sceneCount).padStart(2, '0')}
            </div>

            {/* 좌우 씬 이동 버튼 */}
            {sceneIdx > 0 && (
              <button
                onClick={prevScene}
                aria-label="이전 씬"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            {sceneIdx < sceneCount - 1 && (
              <button
                onClick={nextScene}
                aria-label="다음 씬"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
              >
                <ChevronRight size={18} />
              </button>
            )}

            {/* 중앙 나레이션 */}
            <div className="absolute inset-0 flex items-center justify-center px-14">
              <p className="font-serif text-lg text-white leading-relaxed tracking-wide text-center">
                {currentScene.narration}
              </p>
            </div>

            {/* imagePrompt 힌트 */}
            <div className="absolute bottom-10 left-5 right-5">
              <p className="text-[10px] font-mono text-white opacity-20 truncate">{currentScene.imagePrompt}</p>
            </div>

            {/* 하단 dot 인디케이터 */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {storyEntry.scenes.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  aria-label={`씬 ${dotIdx + 1}`}
                  onClick={() => setSceneIdx(dotIdx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    dotIdx === sceneIdx ? 'bg-white opacity-80 scale-125' : 'bg-white opacity-25 hover:opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* generatedAt */}
          {storyEntry.generatedAt && (
            <p className="text-xs opacity-25 tracking-widest text-right mt-3">
              생성일 {storyEntry.generatedAt.slice(0, 10)}
            </p>
          )}
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
