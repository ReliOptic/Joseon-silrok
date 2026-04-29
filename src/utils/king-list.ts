import { ERAS } from '../data';
import type { KingListItem } from '../types/king.types';

/** Returns a flat ordered list of all kings across all eras. */
export function getAllKings(): readonly KingListItem[] {
  return ERAS.flatMap(e => e.kingsList);
}

/** Returns the KingListItem for the given kingId, or undefined if not found. */
export function findKingMeta(kingId: string): KingListItem | undefined {
  return getAllKings().find(k => k.id === kingId);
}

/** Returns the 0-based index of the given kingId in the full king list, or -1. */
export function findKingIndex(kingId: string): number {
  return getAllKings().findIndex(k => k.id === kingId);
}

/** Returns the king immediately before the given kingId, or null if first. */
export function getPrevKing(kingId: string): KingListItem | null {
  const all = getAllKings();
  const idx = all.findIndex(k => k.id === kingId);
  return idx > 0 ? all[idx - 1] : null;
}

/** Returns the king immediately after the given kingId, or null if last. */
export function getNextKing(kingId: string): KingListItem | null {
  const all = getAllKings();
  const idx = all.findIndex(k => k.id === kingId);
  return idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
}
