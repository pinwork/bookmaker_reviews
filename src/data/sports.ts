// src/data/sports.ts
import { sports as gbSports } from './regions/gb/en/sports';
import { SportCategory } from '@/types';
import { adaptObjectToRegion } from '@/utils';

export const getSports = (region: string = 'gb'): SportCategory[] => {
  return adaptObjectToRegion(gbSports, region);
};

export const getPopularSports = (region: string = 'gb'): SportCategory[] => {
  return getSports(region).filter(s => s.isPopular).sort((a, b) => a.order - b.order);
};

export const getSportBySlug = (slug: string, region: string = 'gb'): SportCategory | undefined => {
  return getSports(region).find(s => s.slug === slug);
};

export const getSportIconPath = (slug: string): string => `/images/sports/${slug}.svg`;