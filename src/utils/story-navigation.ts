import { STORY_MANIFEST } from '../data/story-manifest';
import type { StoryManifestEntry } from '../data/story-manifest';

/**
 * Returns the StoryManifestEntry matching the given kingId and eventIndex,
 * or undefined if no story exists for that combination.
 */
export function findManifestEntry(
  kingId: string,
  eventIndex: number,
): StoryManifestEntry | undefined {
  return STORY_MANIFEST.find(
    e => e.kingId === kingId && e.eventIndex === eventIndex,
  );
}

/**
 * Returns the next StoryManifestEntry after the given kingId/eventIndex,
 * or undefined if already at the last story.
 */
export function getNextStoryEntry(
  kingId: string,
  eventIndex: number,
): StoryManifestEntry | undefined {
  const idx = STORY_MANIFEST.findIndex(
    e => e.kingId === kingId && e.eventIndex === eventIndex,
  );
  if (idx < 0) return undefined;
  return STORY_MANIFEST[idx + 1];
}

/**
 * Returns the previous StoryManifestEntry before the given kingId/eventIndex,
 * or undefined if already at the first story.
 */
export function getPrevStoryEntry(
  kingId: string,
  eventIndex: number,
): StoryManifestEntry | undefined {
  const idx = STORY_MANIFEST.findIndex(
    e => e.kingId === kingId && e.eventIndex === eventIndex,
  );
  if (idx <= 0) return undefined;
  return STORY_MANIFEST[idx - 1];
}
