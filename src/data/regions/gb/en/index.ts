// src/data/regions/gb/en/index.ts
// NOTE: Articles are now managed in src/data/articles/ with language-first architecture
// Import articles through src/data/articles.ts public API

import { BookmakerReview } from './reviews/types';
import * as reviewsList from './reviews';

import { gbBookmakerData } from './bookmakerData';
import { welcomeOffers } from './welcomeOffers';
import { extraPromotions } from './extraPromotions';
import { siteConfig } from './siteConfig';
import { sports } from './sports';
import { staticPages } from './staticPages';
import { events as allGbEvents } from './events';

const gbReviews: Record<string, BookmakerReview> = {
  bet365: reviewsList.bet365Review,
  betfair: reviewsList.betfairReview,
  'william-hill': reviewsList.williamHillReview,
  boylesports: reviewsList.boyleSportsReview,
  'sky-bet': reviewsList.skyBetReview,
  unibet: reviewsList.unibetReview,
  betfred: reviewsList.betfredReview,
  'paddy-power': reviewsList.paddyPowerReview,
  'virgin-bet': reviewsList.virginBetReview,
  ladbrokes: reviewsList.ladbrokesReview,
  matchbook: reviewsList.matchbookReview,
  coral: reviewsList.coralReview,
  betvictor: reviewsList.betvictorReview,
  betway: reviewsList.betwayReview,
  netbet: reviewsList.netbetReview,
  smarkets: reviewsList.smarketsReview,
  '888sport': reviewsList.sport888Review,
  bwin: reviewsList.bwinReview,
};

export {
  sports,
  staticPages,
  gbBookmakerData,
  welcomeOffers,
  extraPromotions,
  siteConfig,
};

export const events = allGbEvents;

export const reviews = gbReviews;

export const getReviewBySlug = (slug: string): BookmakerReview | undefined => {
  return gbReviews[slug];
};

export const getAllReviews = (): BookmakerReview[] => {
  return Object.values(gbReviews);
};

export type { BookmakerReview } from './reviews/types';