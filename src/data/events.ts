import { SportEvent } from '@/types';
import { adaptObjectToRegion } from './utils';
import { DEFAULT_REGION } from './constants';
import { getExtraPromotions } from './extraPromotions';
import { events as gbEvents } from './regions/gb/en';

export const getAllEvents = (region: string = DEFAULT_REGION): SportEvent[] => {
  return adaptObjectToRegion(gbEvents, region);
};

export const getEventsByDate = (date: string, region: string = DEFAULT_REGION): SportEvent[] => {
  const allEvents = getAllEvents(region);
  return allEvents.filter((event) => event.startTime.startsWith(date));
};

export const getEventBySlug = (slug: string, region: string = DEFAULT_REGION): SportEvent | null => {
  const allEvents = getAllEvents(region);
  return allEvents.find((event) => event.slug === slug) || null;
};

export const getEventWithPromotions = (slug: string, region: string = DEFAULT_REGION) => {
  const event = getEventBySlug(slug, region);
  if (!event) return null;

  const allPromotions = getExtraPromotions(region);
  const promotions = event.promotionIds
    .map((id) => allPromotions.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined && p.isActive);

  return {
    ...event,
    promotions
  };
};

export const getEventsBySport = (sportSlug: string, region: string = DEFAULT_REGION): SportEvent[] => {
  const allEvents = getAllEvents(region);
  return allEvents.filter((event) => event.sportSlug === sportSlug && event.isActive);
};

export const getEventsByCompetition = (competitionId: string, region: string = DEFAULT_REGION): SportEvent[] => {
  const allEvents = getAllEvents(region);
  return allEvents.filter((event) => event.competitionId === competitionId && event.isActive);
};

export const getUpcomingEvents = (region: string = DEFAULT_REGION): SportEvent[] => {
  const allEvents = getAllEvents(region);
  const now = new Date();

  return allEvents
    .filter((event) => new Date(event.startTime) > now && event.isActive)
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
};
