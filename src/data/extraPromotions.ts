import { ExtraPromotion } from '@/types';
import { extraPromotions as gbPromos } from './regions/gb/en/extraPromotions';
import { adaptObjectToRegion } from './utils';

export const getExtraPromotions = (region: string = 'gb'): ExtraPromotion[] => {
  return adaptObjectToRegion(gbPromos, region);
};

export const getPromotionsByBookmaker = (slug: string, region: string = 'gb'): ExtraPromotion[] => {
  return getExtraPromotions(region).filter(p => p.bookmakerSlug === slug && p.isActive);
};

export const getPromotionsByCategory = (category: string, region: string = 'gb'): ExtraPromotion[] => {
  return getExtraPromotions(region).filter(p => p.type === category && p.isActive);
};

export const getPromotionsBySport = (sport: string, region: string = 'gb'): ExtraPromotion[] => {
  return getExtraPromotions(region).filter(p => p.sports.includes(sport) && p.isActive);
};