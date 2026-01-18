import { BookmakerReview } from './types';
import { adaptObjectToRegion } from '../../../../utils';

import { bet365Review } from './bet365';
import { betfairReview } from './betfair';
import { williamHillReview } from './william-hill';
import { boyleSportsReview } from './boylesports';
import { skyBetReview } from './sky-bet';
import { unibetReview } from './unibet';
import { betfredReview } from './betfred';
import { paddyPowerReview } from './paddy-power';
import { virginBetReview } from './virgin-bet';
import { ladbrokesReview } from './ladbrokes';
import { matchbookReview } from './matchbook';
import { coralReview } from './coral';
import { betvictorReview } from './betvictor';
import { betwayReview } from './betway';
import { netbetReview } from './netbet';
import { smarketsReview } from './smarkets';
import { sport888Review } from './888sport';
import { bwinReview } from './bwin';

const baseReviews: Record<string, BookmakerReview> = {
  bet365: bet365Review,
  betfair: betfairReview,
  'william-hill': williamHillReview,
  boylesports: boyleSportsReview,
  'sky-bet': skyBetReview,
  unibet: unibetReview,
  betfred: betfredReview,
  'paddy-power': paddyPowerReview,
  'virgin-bet': virginBetReview,
  ladbrokes: ladbrokesReview,
  matchbook: matchbookReview,
  coral: coralReview,
  betvictor: betvictorReview,
  betway: betwayReview,
  netbet: netbetReview,
  smarkets: smarketsReview,
  '888sport': sport888Review,
  bwin: bwinReview,
};

export const getReviewBySlug = (slug: string, region: string = 'gb'): BookmakerReview | undefined => {
  const review = baseReviews[slug];
  if (!review) return undefined;
  return adaptObjectToRegion(review, region);
};

export const getAllReviews = (region: string = 'gb'): BookmakerReview[] => {
  return Object.values(baseReviews).map(review => adaptObjectToRegion(review, region));
};

export {
  bet365Review,
  betfairReview,
  williamHillReview,
  boyleSportsReview,
  skyBetReview,
  unibetReview,
  betfredReview,
  paddyPowerReview,
  virginBetReview,
  ladbrokesReview,
  matchbookReview,
  coralReview,
  betvictorReview,
  betwayReview,
  netbetReview,
  smarketsReview,
  sport888Review,
  bwinReview,
};