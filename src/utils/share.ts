/**
 * Copies the current page URL to the clipboard and fires an optional callback
 * when the copy succeeds.  The callback is also fired with `false` after
 * `resetMs` milliseconds so the caller can reset any "copied!" UI state.
 */
export function copyCurrentUrl(
  onCopied: (copied: boolean) => void,
  resetMs: number = 2000,
): void {
  navigator.clipboard.writeText(window.location.href).then(() => {
    onCopied(true);
    setTimeout(() => onCopied(false), resetMs);
  });
}
