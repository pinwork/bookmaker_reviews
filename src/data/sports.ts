// src/data/sports.ts
// Global sports registry - simplified entities (SEO content lives in articles)
import { SportCategory } from '@/types';

// All sports in order of popularity for UK market
const sports: SportCategory[] = [
  { slug: 'football', name: 'Football', isPopular: true, order: 1 },
  { slug: 'horse-racing', name: 'Horse Racing', isPopular: true, order: 2 },
  { slug: 'tennis', name: 'Tennis', isPopular: true, order: 3 },
  { slug: 'cricket', name: 'Cricket', isPopular: true, order: 4 },
  { slug: 'golf', name: 'Golf', isPopular: true, order: 5 },
  { slug: 'boxing', name: 'Boxing', isPopular: true, order: 6 },
  { slug: 'darts', name: 'Darts', isPopular: true, order: 7 },
  { slug: 'snooker', name: 'Snooker', isPopular: true, order: 8 },
  { slug: 'rugby', name: 'Rugby', isPopular: true, order: 9 },
  { slug: 'american-football', name: 'American Football', isPopular: true, order: 10 },
  { slug: 'basketball', name: 'Basketball', isPopular: true, order: 11 },
  { slug: 'ice-hockey', name: 'Ice Hockey', isPopular: false, order: 12 },
  { slug: 'formula-1', name: 'Formula 1', isPopular: true, order: 13 },
  { slug: 'mma', name: 'MMA / UFC', isPopular: true, order: 14 },
  { slug: 'esports', name: 'Esports', isPopular: true, order: 15 },
  { slug: 'greyhound-racing', name: 'Greyhound Racing', isPopular: false, order: 16 },
  { slug: 'baseball', name: 'Baseball', isPopular: false, order: 17 },
  { slug: 'handball', name: 'Handball', isPopular: false, order: 18 },
  { slug: 'volleyball', name: 'Volleyball', isPopular: false, order: 19 },
  { slug: 'table-tennis', name: 'Table Tennis', isPopular: false, order: 20 },
];

// API Functions
export const getSports = (): SportCategory[] => {
  return sports;
};

export const getSportBySlug = (slug: string): SportCategory | undefined => {
  return sports.find(s => s.slug === slug);
};

export const getPopularSports = (): SportCategory[] => {
  return sports.filter(s => s.isPopular).sort((a, b) => a.order - b.order);
};

export const getNavSports = (limit: number = 6): SportCategory[] => {
  return getPopularSports().slice(0, limit);
};

export const searchSports = (query: string): SportCategory[] => {
  const q = query.toLowerCase();
  return sports.filter(s => s.name.toLowerCase().includes(q));
};

// Icon path helper
export const getSportIconPath = (slug: string): string => {
  return `/images/sports/${slug}.svg`;
};
