// src/data/extraPromotions.ts
import { ExtraPromotion, ExtraPromoCategory } from '@/types';
import { extraPromotions as gbPromos } from './regions/gb/en/extraPromotions';
import { adaptObjectToRegion } from '@/utils';
import { DEFAULT_REGION } from './constants';

export const getExtraPromotions = (region: string = DEFAULT_REGION): ExtraPromotion[] => {
  return adaptObjectToRegion(gbPromos, region);
};

export const getPromotionsByBookmaker = (slug: string, region: string = DEFAULT_REGION): ExtraPromotion[] => {
  return getExtraPromotions(region).filter((p) => p.bookmakerSlug === slug && p.isActive);
};

export const getPromotionsByCategory = (category: ExtraPromoCategory, region: string = DEFAULT_REGION): ExtraPromotion[] => {
  return getExtraPromotions(region).filter((p) => p.type === category && p.isActive);
};

export const getPromotionsBySport = (sport: string, region: string = DEFAULT_REGION): ExtraPromotion[] => {
  return getExtraPromotions(region).filter((p) => p.sports.includes(sport) && p.isActive);
};
