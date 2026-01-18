import { BookmakerReview } from './reviews/types';
import * as reviewsList from './reviews';

import { gbBookmakerData } from './bookmakerData';
import { welcomeOffers } from './welcomeOffers';
import { extraPromotions } from './extraPromotions';
import { siteConfig } from './siteConfig';

import { guides } from './guides';
import { sports } from './sports';
import { staticPages } from './staticPages';
import { faqs } from './faqs';

const gbReviews: Record<string, any> = {
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

// Експортуємо ВСЕ одним махом
export { 
  guides, 
  sports, 
  staticPages, 
  faqs, 
  gbBookmakerData, 
  welcomeOffers, 
  extraPromotions, 
  siteConfig 
};

export const reviews = gbReviews;

export const getReviewBySlug = (slug: string): any | undefined => {
  return gbReviews[slug];
};

export const getAllReviews = (): any[] => {
  return Object.values(gbReviews);
};