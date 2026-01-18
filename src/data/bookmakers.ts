// src/data/bookmakers.ts
import {
  Bookmaker, BookmakerComplete, BookmakerFeatures, Partnership, PartnershipType,
  RegionalBookmakerData, ExtraPromotion, PaymentMethodSlug,
} from '@/types';
import * as reviews from './regions/gb/en/reviews';
import { DEFAULT_REGION, RegionCode, PARTNERSHIP_TYPES } from './constants';
import { getRegion } from './regions';
import { gbBookmakerData } from './regions/gb/en/bookmakerData';
import { ieBookmakerData } from './regions/ie/en/bookmakerData';
import { extraPromotions } from './regions/gb/en/extraPromotions';
import { getOffersByBookmaker } from './welcomeOffers';
import { setPromosIndex, getCachedPromos } from './cache';

interface ReviewPoint { type: string; details: string; }
interface ReviewPartnership { name: string; type: string; years?: string; }

interface BookmakerConfig {
  slug: string; name: string; features: BookmakerFeatures;
  review: {
    history: { foundedYear: number; foundedLocation: string; corporate: { parentCompany: string } };
    editorial: { tagline: string; verdict: string; uniqueSellingPoints: string[] };
    productAnalysis: { strengths: ReviewPoint[]; weaknesses: ReviewPoint[] };
    partnerships: ReviewPartnership[];
    seo: { h1: string; metaTitle: string; metaDescription: string; lastUpdated: string };
  };
  display: { isActive: boolean; isFeatured: boolean; displayOrder: number; isEditorsChoice: boolean };
}

const regionalDataMap: Record<RegionCode, Record<string, RegionalBookmakerData>> = { gb: gbBookmakerData, ie: ieBookmakerData };

const mapPartnerships = (reviewPartnerships: ReviewPartnership[] | undefined): Partnership[] => {
  if (!reviewPartnerships) return [];
  return reviewPartnerships.map((p) => ({
    name: p.name,
    slug: p.name.toLowerCase().replace(/\s+/g, '-'),
    type: (PARTNERSHIP_TYPES as readonly string[]).includes(p.type) ? (p.type as PartnershipType) : 'other',
    years: p.years,
  }));
};

const mapReviewToBookmaker = (config: BookmakerConfig): Bookmaker => ({
  slug: config.slug, name: config.name, features: config.features,
  brandData: {
    foundedYear: config.review.history.foundedYear,
    parentCompany: config.review.history.corporate.parentCompany,
    headquarters: config.review.history.foundedLocation,
  },
  content: {
    tagline: config.review.editorial.tagline, summary: config.review.editorial.verdict,
    h1: config.review.seo.h1, metaTitle: config.review.seo.metaTitle, metaDescription: config.review.seo.metaDescription,
    pros: config.review.productAnalysis.strengths.map((s: ReviewPoint) => s.details),
    cons: config.review.productAnalysis.weaknesses.map((w: ReviewPoint) => w.details),
    highlights: config.review.editorial.uniqueSellingPoints,
  },
  display: config.display,
  partnerships: mapPartnerships(config.review.partnerships),
  lastUpdated: config.review.seo.lastUpdated,
});

const bookmakerConfigs: BookmakerConfig[] = [
  { slug: 'bet365', name: 'bet365', review: reviews.bet365Review, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 1, isEditorsChoice: true } },
  { slug: 'betfair', name: 'Betfair', review: reviews.betfairReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 2, isEditorsChoice: false } },
  { slug: 'william-hill', name: 'William Hill', review: reviews.williamHillReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 3, isEditorsChoice: false } },
  { slug: 'ladbrokes', name: 'Ladbrokes', review: reviews.ladbrokesReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 4, isEditorsChoice: false } },
  { slug: 'coral', name: 'Coral', review: reviews.coralReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 5, isEditorsChoice: false } },
  { slug: 'paddy-power', name: 'Paddy Power', review: reviews.paddyPowerReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 6, isEditorsChoice: false } },
  { slug: 'sky-bet', name: 'Sky Bet', review: reviews.skyBetReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: true, displayOrder: 7, isEditorsChoice: true } },
  { slug: 'betfred', name: 'Betfred', review: reviews.betfredReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 8, isEditorsChoice: false } },
  { slug: '888sport', name: '888sport', review: reviews.sport888Review, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: false, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 9, isEditorsChoice: false } },
  { slug: 'unibet', name: 'Unibet', review: reviews.unibetReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: false, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 10, isEditorsChoice: false } },
  { slug: 'betvictor', name: 'BetVictor', review: reviews.betvictorReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: false, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 11, isEditorsChoice: false } },
  { slug: 'boylesports', name: 'BoyleSports', review: reviews.boyleSportsReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: true, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 12, isEditorsChoice: false } },
  { slug: 'virgin-bet', name: 'Virgin Bet', review: reviews.virginBetReview, features: { cashOut: true, liveStreaming: false, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: true, accaBoost: false }, display: { isActive: true, isFeatured: false, displayOrder: 13, isEditorsChoice: false } },
  { slug: 'betway', name: 'Betway', review: reviews.betwayReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: false, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 14, isEditorsChoice: false } },
  { slug: 'matchbook', name: 'Matchbook', review: reviews.matchbookReview, features: { cashOut: true, liveStreaming: false, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: false, accaBoost: false }, display: { isActive: true, isFeatured: false, displayOrder: 15, isEditorsChoice: false } },
  { slug: 'netbet', name: 'NetBet', review: reviews.netbetReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: false, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 16, isEditorsChoice: false } },
  { slug: 'smarkets', name: 'Smarkets', review: reviews.smarketsReview, features: { cashOut: true, liveStreaming: false, betBuilder: false, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: false, earlyPayout: false, accaBoost: false }, display: { isActive: true, isFeatured: false, displayOrder: 17, isEditorsChoice: false } },
  { slug: 'bwin', name: 'bwin', review: reviews.bwinReview, features: { cashOut: true, liveStreaming: true, betBuilder: true, inPlayBetting: true, mobileApp: true, bestOddsGuaranteed: true, earlyPayout: false, accaBoost: true }, display: { isActive: true, isFeatured: false, displayOrder: 18, isEditorsChoice: false } },
];

export const bookmakers: Bookmaker[] = bookmakerConfigs.map(cfg => mapReviewToBookmaker(cfg));

const getBookmakerPromos = (slug: string, region: string): ExtraPromotion[] => {
  const cached = getCachedPromos(slug, region);
  if (cached) return cached;
  setPromosIndex(region, extraPromotions);
  return extraPromotions.filter(p => p.bookmakerSlug === slug && p.isActive);
};

const buildBookmakerComplete = (bookmaker: Bookmaker, region: string): BookmakerComplete => {
  const regionCode = (region as RegionCode) || DEFAULT_REGION;
  const regionalData = regionalDataMap[regionCode]?.[bookmaker.slug] || regionalDataMap.gb[bookmaker.slug];
  const welcomeOffers = getOffersByBookmaker(bookmaker.slug, region);
  const primaryOffer = welcomeOffers.length > 0 ? welcomeOffers.sort((a, b) => b.reward.totalValue - a.reward.totalValue)[0] : undefined;
  const bookmakerPromos = getBookmakerPromos(bookmaker.slug, region);
  return { ...bookmaker, ...regionalData, welcomeOffers, extraPromotions: bookmakerPromos, primaryOffer };
};

export const getActiveBookmakers = (region: string = DEFAULT_REGION): BookmakerComplete[] => {
  const regionConfig = getRegion(region);
  const enabledSlugs = regionConfig?.enabledBookmakers || [];
  return bookmakers
    .filter((b) => enabledSlugs.includes(b.slug) && b.display.isActive)
    .map((b) => buildBookmakerComplete(b, region))
    .sort((a, b) => a.display.displayOrder - b.display.displayOrder);
};

export const getFeaturedBookmakers = (region: string = DEFAULT_REGION): BookmakerComplete[] => {
  return getActiveBookmakers(region).filter((b) => b.display.isFeatured);
};

export const getEditorsChoiceBookmakers = (region: string = DEFAULT_REGION): BookmakerComplete[] => {
  return getActiveBookmakers(region).filter((b) => b.display.isEditorsChoice);
};

export const getBookmakerBySlug = (slug: string, region: string = DEFAULT_REGION): BookmakerComplete | undefined => {
  const bookmaker = bookmakers.find((b) => b.slug === slug);
  if (!bookmaker) return undefined;
  const regionConfig = getRegion(region);
  if (!regionConfig?.enabledBookmakers.includes(slug)) return undefined;
  return buildBookmakerComplete(bookmaker, region);
};

export const getBookmakersByPayment = (method: PaymentMethodSlug, region: string = DEFAULT_REGION): BookmakerComplete[] => {
  return getActiveBookmakers(region).filter((b) => b.payments?.includes(method));
};

export const getBookmakersByFeature = (feature: keyof BookmakerFeatures, region: string = DEFAULT_REGION): BookmakerComplete[] => {
  return getActiveBookmakers(region).filter((b) => b.features[feature]);
};

export const getBookmakersSortedByRating = (region: string = DEFAULT_REGION): BookmakerComplete[] => {
  return getActiveBookmakers(region);
};

export const getBaseBookmaker = (slug: string): Bookmaker | undefined => {
  return bookmakers.find((b) => b.slug === slug);
};

export const getAllBookmakerSlugs = (): string[] => {
  return bookmakers.map(b => b.slug);
};
