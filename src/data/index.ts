// src/data/index.ts
import { BookmakerWithOffer, WelcomeOffer, Bookmaker } from '@/types';
import { 
  getActiveBookmakers, 
  getFeaturedBookmakers, 
  getBookmakerBySlug,
  getBookmakersByPayment,
  getBookmakersByFeature,
  getEditorsChoiceBookmakers,
  getBookmakersSortedByRating
} from './bookmakers';
import { 
  getOfferByBookmaker, 
  getValidatedOffers 
} from './welcomeOffers';

// Re-export base functions
export { 
  getActiveBookmakers, 
  getFeaturedBookmakers, 
  getBookmakerBySlug, 
  getBookmakersByPayment, 
  getBookmakersByFeature, 
  getEditorsChoiceBookmakers, 
  getBookmakersSortedByRating 
} from './bookmakers';

export { 
  getOfferByBookmaker, 
  getBestValueOffers 
} from './welcomeOffers';

export { 
  getExtraPromotions, 
  getPromotionsByBookmaker, 
  getPromotionsByCategory, 
  getPromotionsBySport 
} from './extraPromotions';

/**
 * Get a single bookmaker with its welcome offer
 */
export function getBookmakerWithOffer(slug: string, region: string = 'gb'): BookmakerWithOffer | undefined {
  const bookmaker = getBookmakerBySlug(slug, region);
  if (!bookmaker) return undefined;

  const offer = getOfferByBookmaker(slug, region);
  return { ...bookmaker, welcomeOffer: offer };
}

/**
 * Get all active bookmakers with their offers
 */
export function getActiveBookmakersWithOffers(region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakers(region).map((bookmaker) => ({
    ...bookmaker,
    welcomeOffer: getOfferByBookmaker(bookmaker.slug, region),
  }));
}

/**
 * Get featured bookmakers with their offers
 */
export function getFeaturedBookmakersWithOffers(region: string = 'gb'): BookmakerWithOffer[] {
  return getFeaturedBookmakers(region).map((bookmaker) => ({
    ...bookmaker,
    welcomeOffer: getOfferByBookmaker(bookmaker.slug, region),
  }));
}

/**
 * Sort bookmakers by the total value of their welcome offer
 */
export function getBookmakersSortedByOfferValue(region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region).sort((a, b) => {
    const aValue = a.welcomeOffer?.reward.totalValue ?? 0;
    const bValue = b.welcomeOffer?.reward.totalValue ?? 0;
    return bValue - aValue;
  });
}

/**
 * Sort bookmakers by the minimum bet required for the offer
 */
export function getBookmakersSortedByMinBet(region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region).sort((a, b) => {
    const aMin = a.welcomeOffer?.qualifying.betMin ?? Infinity;
    const bMin = b.welcomeOffer?.qualifying.betMin ?? Infinity;
    return aMin - bMin;
  });
}

/**
 * Filter bookmakers that allow a specific payment method for their bonus
 */
export function getBookmakersAcceptingPaymentForBonus(method: string, region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region).filter((bookie) => {
    if (!bookie.welcomeOffer) return false;
    return !bookie.welcomeOffer.excludedPayments.includes(method as any);
  });
}

/**
 * Filter bookmakers by welcome offer type
 */
export function getBookmakersByOfferType(type: string, region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region).filter((bookie) => bookie.welcomeOffer?.type === type);
}

/**
 * Get bookmakers that require a promo code
 */
export function getBookmakersWithPromoCode(region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region).filter((bookie) => bookie.welcomeOffer?.promoCode !== null);
}

/**
 * Get bookmakers that DON'T require a promo code
 */
export function getBookmakersWithoutPromoCode(region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region).filter((bookie) => bookie.welcomeOffer?.promoCode === null);
}

/**
 * Calculate value ratio (Reward / Stake) and sort
 */
export function getBestValueBookmakers(region: string = 'gb'): BookmakerWithOffer[] {
  return getActiveBookmakersWithOffers(region)
    .filter((bookie) => {
      const offer = bookie.welcomeOffer;
      return offer && offer.qualifying.betMin > 0;
    })
    .map((bookie) => ({
      ...bookie,
      valueRatio: (bookie.welcomeOffer?.reward.totalValue ?? 0) / (bookie.welcomeOffer?.qualifying.betMin ?? 1),
    }))
    .sort((a, b) => (b as any).valueRatio - (a as any).valueRatio);
}

/**
 * Search across bookmakers
 */
export function searchBookmakers(query: string, region: string = 'gb'): BookmakerWithOffer[] {
  const lowerQuery = query.toLowerCase();
  return getActiveBookmakersWithOffers(region).filter(
    (bookie) =>
      bookie.name.toLowerCase().includes(lowerQuery) ||
      bookie.slug.toLowerCase().includes(lowerQuery) ||
      bookie.content.tagline.toLowerCase().includes(lowerQuery)
  );
}

// Comparison structure
export interface BookmakerComparisonData {
  slug: string;
  name: string;
  offerTitle: string;
  offerValue: number;
  minBet: number;
  hasLiveStreaming: boolean;
  hasBetBuilder: boolean;
  promoCode: string | null;
}

/**
 * Get simplified comparison data
 */
export function getBookmakerComparisonData(region: string = 'gb'): BookmakerComparisonData[] {
  return getActiveBookmakersWithOffers(region).map((bookie) => ({
    slug: bookie.slug,
    name: bookie.name,
    offerTitle: bookie.welcomeOffer?.shortTitle ?? 'No offer',
    offerValue: bookie.welcomeOffer?.reward.totalValue ?? 0,
    minBet: bookie.welcomeOffer?.qualifying.betMin ?? 0,
    hasLiveStreaming: bookie.features.liveStreaming,
    hasBetBuilder: bookie.features.betBuilder,
    promoCode: bookie.welcomeOffer?.promoCode ?? null,
  }));
}