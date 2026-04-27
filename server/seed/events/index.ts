import type { SeedEvent } from '../types.js';
import { TAEJO_EVENTS } from './01-taejo.js';
import { JEONGJONG_EVENTS } from './02-jeongjong.js';
import { TAEJONG_EVENTS } from './03-taejong.js';
import { SEJONG_EVENTS } from './04-sejong.js';
import { MUNJONG_EVENTS } from './05-munjong.js';
import { DANJONG_EVENTS } from './06-danjong.js';
import { SEJO_EVENTS } from './07-sejo.js';
import { ERA2_EVENTS } from './era2.js';
import { ERA3_EVENTS } from './era3.js';
import { ERA4_EVENTS } from './era4.js';

export const ALL_EVENTS: SeedEvent[] = [
  ...TAEJO_EVENTS,
  ...JEONGJONG_EVENTS,
  ...TAEJONG_EVENTS,
  ...SEJONG_EVENTS,
  ...MUNJONG_EVENTS,
  ...DANJONG_EVENTS,
  ...SEJO_EVENTS,
  ...ERA2_EVENTS,
  ...ERA3_EVENTS,
  ...ERA4_EVENTS,
];
