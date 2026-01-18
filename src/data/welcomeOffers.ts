// src/data/welcomeOffers.ts
import { WelcomeOffer, PaymentMethodSlug } from '@/types';
import { welcomeOffers as gbOffers } from './regions/gb/en/welcomeOffers';
import { adaptObjectToRegion } from './utils';
import { DEFAULT_REGION, BOOKMAKER_SLUGS } from './constants';
import { setOffersIndex, getCachedOffers, isOffersCacheReady } from './cache';

export const getValidatedOffers = (region: string = DEFAULT_REGION): WelcomeOffer[] => {
  const now = new Date();
  const offers = adaptObjectToRegion(gbOffers, region);
  const validSlugs = new Set(BOOKMAKER_SLUGS);

  const validated = offers.filter((offer: WelcomeOffer) => {
    if (!offer.isActive) return false;
    if (offer.validUntil && new Date(offer.validUntil) < now) return false;
    return validSlugs.has(offer.bookmakerSlug as typeof BOOKMAKER_SLUGS[number]);
  });

  if (!isOffersCacheReady(region)) {
    setOffersIndex(region, validated);
  }

  return validated;
};

export const getOffersByBookmaker = (slug: string, region: string = DEFAULT_REGION): WelcomeOffer[] => {
  const cached = getCachedOffers(slug, region);
  if (cached) return cached;
  return getValidatedOffers(region).filter((offer) => offer.bookmakerSlug === slug);
};

export const getPrimaryOffer = (slug: string, region: string = DEFAULT_REGION): WelcomeOffer | undefined => {
  const offers = getOffersByBookmaker(slug, region);
  if (offers.length === 0) return undefined;
  return offers.sort((a, b) => b.reward.totalValue - a.reward.totalValue)[0];
};

export const getActiveOffers = (region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region);
};

export const getBestValueOffers = (region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region)
    .filter((o) => o.type !== 'commission_free')
    .sort((a, b) => b.reward.totalValue - a.reward.totalValue);
};

export const getFeaturedOffers = (region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region).filter((o) => o.isExclusive);
};

export const getOffersByType = (type: string, region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region).filter((o) => o.type === type);
};

export const getLowStakeOffers = (maxStake: number = 10, region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region)
    .filter((o) => o.qualifying.betMin <= maxStake)
    .sort((a, b) => a.qualifying.betMin - b.qualifying.betMin);
};

export const getNoCodeOffers = (region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region).filter((o) => o.promoCode === null);
};

export const getPromoCodeOffers = (region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region).filter((o) => o.promoCode !== null);
};

export const getOffersAcceptingPayment = (paymentSlug: PaymentMethodSlug, region: string = DEFAULT_REGION): WelcomeOffer[] => {
  return getValidatedOffers(region).filter((o) => !o.excludedPayments.includes(paymentSlug));
};

export const getOffersStats = (region: string = DEFAULT_REGION) => {
  const offers = getValidatedOffers(region);
  const totalValue = offers.reduce((sum, o) => sum + o.reward.totalValue, 0);
  const avgValue = offers.length > 0 ? totalValue / offers.length : 0;
  const byType = offers.reduce((acc, o) => {
    acc[o.type] = (acc[o.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: offers.length,
    totalValue,
    avgValue: Math.round(avgValue),
    byType,
    withPromoCode: offers.filter((o) => o.promoCode !== null).length,
    exclusive: offers.filter((o) => o.isExclusive).length,
  };
};
