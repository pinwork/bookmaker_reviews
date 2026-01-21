// src/data/index.ts
import { BookmakerComplete, PaymentMethodSlug, OfferType } from '@/types';
import { getActiveBookmakers } from './bookmakers';
import { DEFAULT_REGION } from './constants';

export {
  getActiveBookmakers, getFeaturedBookmakers, getBookmakerBySlug, getBookmakersByPayment,
  getBookmakersByFeature, getEditorsChoiceBookmakers, getBookmakersSortedByRating,
  getBaseBookmaker, getAllBookmakerSlugs,
} from './bookmakers';

export {
  getOffersByBookmaker, getPrimaryOffer, getValidatedOffers, getActiveOffers,
  getBestValueOffers, getFeaturedOffers, getOffersByType, getLowStakeOffers,
  getNoCodeOffers, getPromoCodeOffers, getOffersAcceptingPayment, getOffersStats,
} from './welcomeOffers';

export {
  getExtraPromotions, getPromotionsByBookmaker, getPromotionsByCategory, getPromotionsBySport,
} from './extraPromotions';

export {
  getArticlesByCollection, getAllArticlesForRegion, getArticleBySlug, getFeaturedArticles,
} from './articles';

export {
  getToolReviewsByCollection, getAllToolReviewsForRegion, getToolReviewBySlug, getFeaturedToolReviews,
  getToolReviews,
} from './toolReviews';

export {
  DEFAULT_REGION, getRegion, isValidRegion, getAllRegions, getRegionOrDefault,
  getCurrencySymbol, isBookmakerEnabledInRegion,
  type RegionCode, type RegionConfig, type LegalInfo,
} from './regions';

export {
  BOOKMAKER_SLUGS, PAYMENT_METHOD_SLUGS, OFFER_TYPES, EXTRA_PROMO_CATEGORIES,
  PARTNERSHIP_TYPES, REGION_CODES, type BookmakerSlug,
} from './constants';

export { clearCache, clearRegionCache, getCacheStats } from './cache';

export function getBookmakersSortedByOfferValue(region: string = DEFAULT_REGION): BookmakerComplete[] {
  return getActiveBookmakers(region).sort((a, b) =>
    (b.primaryOffer?.reward.totalValue ?? 0) - (a.primaryOffer?.reward.totalValue ?? 0));
}

export function getBookmakersSortedByMinBet(region: string = DEFAULT_REGION): BookmakerComplete[] {
  return getActiveBookmakers(region).sort((a, b) =>
    (a.primaryOffer?.qualifying.betMin ?? Infinity) - (b.primaryOffer?.qualifying.betMin ?? Infinity));
}

export function getBookmakersAcceptingPaymentForBonus(
  method: PaymentMethodSlug, region: string = DEFAULT_REGION
): BookmakerComplete[] {
  return getActiveBookmakers(region).filter(b =>
    b.primaryOffer && !b.primaryOffer.excludedPayments.includes(method));
}

export function getBookmakersByOfferType(type: OfferType, region: string = DEFAULT_REGION): BookmakerComplete[] {
  return getActiveBookmakers(region).filter(b => b.primaryOffer?.type === type);
}

export function getBookmakersWithPromoCode(region: string = DEFAULT_REGION): BookmakerComplete[] {
  return getActiveBookmakers(region).filter(b => b.primaryOffer?.promoCode !== null);
}

export function getBookmakersWithoutPromoCode(region: string = DEFAULT_REGION): BookmakerComplete[] {
  return getActiveBookmakers(region).filter(b => b.primaryOffer?.promoCode === null);
}

export function getBestValueBookmakers(region: string = DEFAULT_REGION): (BookmakerComplete & { valueRatio: number })[] {
  return getActiveBookmakers(region)
    .filter(b => b.primaryOffer && b.primaryOffer.qualifying.betMin > 0)
    .map(b => ({
      ...b,
      valueRatio: (b.primaryOffer?.reward.totalValue ?? 0) / (b.primaryOffer?.qualifying.betMin ?? 1),
    }))
    .sort((a, b) => b.valueRatio - a.valueRatio);
}

export function searchBookmakers(query: string, region: string = DEFAULT_REGION): BookmakerComplete[] {
  const q = query.toLowerCase();
  return getActiveBookmakers(region).filter(b =>
    b.name.toLowerCase().includes(q) || b.slug.includes(q) || b.content.tagline.toLowerCase().includes(q));
}

export interface BookmakerComparisonData {
  slug: string; name: string; offerTitle: string; offerValue: number;
  minBet: number; hasLiveStreaming: boolean; hasBetBuilder: boolean; promoCode: string | null;
}

export function getBookmakerComparisonData(region: string = DEFAULT_REGION): BookmakerComparisonData[] {
  return getActiveBookmakers(region).map(b => ({
    slug: b.slug, name: b.name,
    offerTitle: b.primaryOffer?.shortTitle ?? 'No offer',
    offerValue: b.primaryOffer?.reward.totalValue ?? 0,
    minBet: b.primaryOffer?.qualifying.betMin ?? 0,
    hasLiveStreaming: b.features.liveStreaming,
    hasBetBuilder: b.features.betBuilder,
    promoCode: b.primaryOffer?.promoCode ?? null,
  }));
}
