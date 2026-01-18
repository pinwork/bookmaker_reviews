import { WelcomeOffer } from '@/types';
import { bookmakers } from './bookmakers';
import { welcomeOffers as gbOffers } from './regions/gb/en/welcomeOffers';
import { adaptObjectToRegion } from './utils';

export const getValidatedOffers = (region: string = 'gb'): WelcomeOffer[] => {
  const now = new Date();
  const offers = adaptObjectToRegion(gbOffers, region);

  return offers.filter((offer: WelcomeOffer) => {
    if (!offer.isActive) return false;
    if (offer.validUntil && new Date(offer.validUntil) < now) return false;
    const parent = bookmakers.find((b) => b.slug === offer.bookmakerSlug);
    return !!(parent && parent.display.isActive);
  });
};

export const getOfferByBookmaker = (slug: string, region: string = 'gb'): WelcomeOffer | undefined => {
  return getValidatedOffers(region).find((offer) => offer.bookmakerSlug === slug);
};

export const getActiveOffers = (region: string = 'gb'): WelcomeOffer[] => {
  return getValidatedOffers(region);
};

export const getBestValueOffers = (region: string = 'gb'): WelcomeOffer[] => {
  return getValidatedOffers(region)
    .filter(o => o.type !== 'commission_free')
    .sort((a, b) => b.reward.totalValue - a.reward.totalValue);
};

export const getFeaturedOffers = (region: string = 'gb'): WelcomeOffer[] => {
  return getValidatedOffers(region).filter(o => o.isExclusive);
};

export const getOffersByType = (type: string, region: string = 'gb'): WelcomeOffer[] => {
  return getValidatedOffers(region).filter(o => o.type === type);
};