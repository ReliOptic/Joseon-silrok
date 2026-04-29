import { ERAS } from '../data';
import type { Era } from '../types/king.types';

/**
 * Returns the Era that contains the given kingId, or undefined if not found.
 */
export function findEraByKingId(kingId: string): Era | undefined {
  return ERAS.find(era => era.kingsList.some(k => k.id === kingId));
}

/**
 * Returns the primary color string for the era containing the given kingId.
 * Falls back to '#1a1a2e' when the king is not found in any era.
 */
export function getEraColor(kingId: string): string {
  return findEraByKingId(kingId)?.color.primary ?? '#1a1a2e';
}
