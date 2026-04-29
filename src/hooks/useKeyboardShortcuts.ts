import { useEffect } from 'react';

interface UseKeyboardShortcutsDeps {
  readonly isSearchOpen: boolean;
  readonly onOpenSearch: () => void;
}

export function useKeyboardShortcuts(deps: UseKeyboardShortcutsDeps): void {
  const { isSearchOpen, onOpenSearch } = deps;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (isSearchOpen) return;
      if (
        e.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        onOpenSearch();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isSearchOpen, onOpenSearch]);
}
