import type { Era, King, EventRow, SillokEntry } from './types';

async function get<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  eras: () => get<Era[]>('/api/eras'),
  kings: () => get<King[]>('/api/kings'),
  king: (id: string) => get<King>(`/api/kings/${id}`),
  kingEvents: (id: string) => get<EventRow[]>(`/api/kings/${id}/events`),
  event: (id: number) => get<EventRow>(`/api/events/${id}`),
  eventSillok: (id: number) => get<SillokEntry[]>(`/api/events/${id}/sillok`),
  sillok: (id: number) => get<SillokEntry>(`/api/sillok/${id}`),
};
