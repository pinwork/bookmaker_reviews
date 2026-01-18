// src/data/guides.ts
import { guides as gbGuides } from './regions/gb/en/guides';
import { Guide } from '@/types';
import { adaptObjectToRegion } from './utils';

export const getAllGuides = (region: string = 'gb'): Guide[] => {
  return adaptObjectToRegion(gbGuides, region);
};

export const getGuideBySlug = (slug: string, region: string = 'gb'): Guide | undefined => {
  return getAllGuides(region).find(g => g.slug === slug);
};