import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'onboarding-dismissed';

export function OnboardingHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-5 py-3 rounded-full bg-black/70 text-white text-sm backdrop-blur-md shadow-lg">
      <span>왕을 클릭해 시대로 들어가세요 · ⌘+휠로 줌</span>
      <button
        onClick={dismiss}
        aria-label="온보딩 힌트 닫기"
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        <X size={14} />
      </button>
    </div>
  );
}
