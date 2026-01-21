// src/data/regions/gb/en/index.ts
import { BookmakerReview } from './reviews/types';
import * as reviewsList from './reviews';

import { gbBookmakerData } from './bookmakerData';
import { welcomeOffers } from './welcomeOffers';
import { extraPromotions } from './extraPromotions';
import { siteConfig } from './siteConfig';
import { sports } from './sports';
import { staticPages } from './staticPages';
import { events as allGbEvents } from './events';

import { ultimateBonusGuide as bonusGuideData } from './articles/uk-ultimate-bonus-guide';
import { responsibleGamblingBible as responsibleGamblingData } from './articles/responsible-gambling-uk-bible';
import { bettingShopsBible as bettingShopsData } from './articles/uk-betting-shops-bible';
import { bettingIndustryBible as industryReportData } from './articles/uk-betting-industry-report';
import { liveScoreAppsReview as liveScoreAppsData } from './reviews/tools';

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

export const ultimateBonusGuide = bonusGuideData;
export const responsibleGamblingBible = responsibleGamblingData;
export const bettingShopsBible = bettingShopsData;
export const bettingIndustryReport = industryReportData;
export const liveScoreAppsGuide = liveScoreAppsData;

export const reviews = gbReviews;

export const getReviewBySlug = (slug: string): BookmakerReview | undefined => {
  return gbReviews[slug];
};

export const getAllReviews = (): BookmakerReview[] => {
  return Object.values(gbReviews);
};

export type { BookmakerReview } from './reviews/types';