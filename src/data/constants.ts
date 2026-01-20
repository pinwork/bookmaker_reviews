// src/data/constants.ts
export const BOOKMAKER_SLUGS = [
  'bet365', 'betfair', 'william-hill', 'paddy-power', 'sky-bet', 'betfred',
  '888sport', 'unibet', 'betvictor', 'boylesports', 'ladbrokes', 'coral',
  'virgin-bet', 'betway', 'matchbook', 'netbet', 'smarkets', 'bwin',
] as const;
export type BookmakerSlug = (typeof BOOKMAKER_SLUGS)[number];

export const DEFAULT_REGION = 'gb';
export const REGION_CODES = ['gb', 'ie'] as const;
export type RegionCode = (typeof REGION_CODES)[number];

export const PAYMENT_METHOD_SLUGS = [
  'debit-cards', 'apple-pay', 'google-pay', 'paypal', 'skrill', 'neteller',
  'bank-transfer', 'instant-bank-transfer', 'trustly', 'klarna', 'paysafecard', 'pay-by-bank',
] as const;
export type PaymentMethodSlug = (typeof PAYMENT_METHOD_SLUGS)[number];

export const OFFER_TYPES = [
  'free_bet', 'bet_credits', 'commission_free', 'deposit_bonus', 'bet_get', 'risk_free_bet',
] as const;
export type OfferType = (typeof OFFER_TYPES)[number];

export const EXTRA_PROMO_CATEGORIES = [
  'early_payout', 'acca_boost', 'player_protection', 'odds_guarantee',
  'insurance', 'bet_boost', 'refer_a_friend', 'loyalty_program',
] as const;
export type ExtraPromoCategory = (typeof EXTRA_PROMO_CATEGORIES)[number];

export const PARTNERSHIP_TYPES = [
  'club', 'league', 'broadcast', 'stadium', 'shirt', 'official_partner', 'ambassador', 'other',
] as const;
export type PartnershipType = (typeof PARTNERSHIP_TYPES)[number];

export const REWARD_RESTRICTIONS = [
  'any', 'bet-builder', 'acca', 'acca-3+', 'acca-4+', 'in-play',
  'football', 'horse-racing', 'tennis', 'exchange', 'multiples', 'singles',
] as const;
export type RewardRestriction = (typeof REWARD_RESTRICTIONS)[number];

export const QUALIFYING_BET_TYPES = ['single', 'acca', 'each-way', 'any'] as const;
export type QualifyingBetType = (typeof QUALIFYING_BET_TYPES)[number];

export const RESOURCE_TYPES = ['bookmaker', 'external', 'payment'] as const;
export type ResourceType = (typeof RESOURCE_TYPES)[number];
