export type PaymentMethodSlug =
  | 'debit-cards'
  | 'credit-cards'
  | 'apple-pay'
  | 'google-pay'
  | 'paypal'
  | 'skrill'
  | 'neteller'
  | 'bank-transfer'
  | 'instant-bank-transfer'
  | 'trustly'
  | 'klarna'
  | 'paysafecard'
  | 'disposable-cards'
  | 'apple-pay-verified'
  | 'pay-by-bank';

export type PartnershipType = 
  | 'club'
  | 'league'
  | 'broadcast'
  | 'other'
  | 'stadium'
  | 'shirt'
  | 'official_partner';

export interface Partnership {
  name: string;
  slug: string;
  type: PartnershipType;
}

export type AffiliateLinkType = 'default' | 'welcome-bonus' | 'free-bet' | 'casino' | string;

export interface AffiliateLink {
  url: string;
  type: AffiliateLinkType;
  country?: string; 
}

export type OfferType = 
  | 'free_bet' 
  | 'bet_credits' 
  | 'commission_free' 
  | 'deposit_bonus' 
  | 'bet_get' 
  | 'risk_free_bet';

export type RewardRestriction =
  | 'any'
  | 'bet-builder'
  | 'acca'
  | 'acca-3+'
  | 'acca-4+'
  | 'in-play'
  | 'football'
  | 'horse-racing'
  | 'tennis'
  | 'exchange'
  | 'multiples'
  | 'singles';

export type QualifyingBetType = 'single' | 'acca' | 'each-way' | 'any';

export interface RewardToken {
  amount: number;
  count: number;
  restriction: RewardRestriction;
  minOdds?: number;
  minSelections?: number;
}

export interface QualifyingRequirements {
  depositMin: number;
  betMin: number;
  minOdds: number;
  daysToQualify: number;
  allowedBetTypes: QualifyingBetType[];
  mobileOnly: boolean;
  sportRequired?: string;
}

export interface OfferReward {
  totalValue: number;
  structure: RewardToken[];
  validityDays: number;
}

export interface WelcomeOffer {
  bookmakerSlug: string;
  title: string;
  shortTitle: string;
  type: OfferType | string;
  bonusPercentage?: number; 
  wageringRequirement: number;
  isExclusive: boolean;
  claimUrl?: string; 
  qualifying: QualifyingRequirements;
  reward: OfferReward;
  excludedPayments: PaymentMethodSlug[];
  promoCode: string | null;
  termsShort: string;
  termsFull: string;
  highlights: string[];
  lastVerified: string;
  validUntil?: string;
  isActive: boolean;
}

export type ExtraPromoCategory = 
  | 'early_payout'
  | 'acca_boost'
  | 'player_protection'
  | 'odds_guarantee' 
  | 'insurance'
  | 'bet_boost'
  | 'refer_a_friend'
  | 'loyalty_program';

export interface ExtraPromotion {
  id: string;
  bookmakerSlug: string;
  title: string;
  shortDescription: string;
  type: ExtraPromoCategory;
  sports: string[];
  isActive: boolean;
  validUntil?: string;
  lastVerified: string;
  tags: string[];
  details: {
    keyCondition?: string;
    maxBoost?: string;
  };
  promoPageUrl?: string;
  competitionId?: string;
  eventId?: string;
}

export interface Competition {
  id: string;
  slug: string;
  sportSlug: string;
  name: string;
  isMajor: boolean;
  order: number;            
  promotionalTags: string[];
  content: {
    h1: string;
    excerpt: string;
    body: string;
    metaTitle: string;
    metaDescription: string;
  };
}

export interface SportEvent {
  id: string;
  competitionId: string;
  slug: string;
  name: string;
  startTime: string;
  status: 'upcoming' | 'live' | 'finished';
  venue?: string;
  content?: {
    h1?: string;
    previewText?: string;
    prediction?: string;
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface BookmakerFeatures {
  cashOut: boolean;
  liveStreaming: boolean;
  betBuilder: boolean;
  inPlayBetting: boolean;
  mobileApp: boolean;
  bestOddsGuaranteed: boolean;
  earlyPayout: boolean;
  accaBoost: boolean;
}

export interface RegionalBookmakerData {
  website: string;
  affiliateLink: string;
  promotionsPage: string;
  payments: PaymentMethodSlug[];
  license: string;
}

export interface Bookmaker {
  slug: string;
  name: string;
  features: BookmakerFeatures;
  brandData: {
    foundedYear: number;
    parentCompany: string;
    headquarters: string;
  };
  content: {
    tagline: string;
    summary: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    pros: string[];
    cons: string[];
    highlights: string[];
  };
  display: {
    isActive: boolean;
    isFeatured: boolean;
    displayOrder: number;
    isEditorsChoice: boolean;
  };
  partnerships: Partnership[];
  lastUpdated: string;
}

export interface BookmakerWithOffer extends Bookmaker, RegionalBookmakerData {
  welcomeOffer?: WelcomeOffer;
  extraPromotions?: ExtraPromotion[];
}

export interface FAQ {
  slug: string;
  question: string;
  answer: string;
  category: 'general' | 'bonuses' | 'deposits' | 'withdrawals' | 'betting' | 'account' | 'responsible_gambling' | 'technical';
  bookmakerSlug?: string;
  isPopular: boolean;
  order: number;
}

export interface Guide {
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  category: 'basics' | 'bet-types' | 'features' | 'strategy' | 'sports';
  readingTime: number;
  isFeatured: boolean;
  order: number;
  content: string;
  relatedGuides: string[];
  lastUpdated: string;
}

export interface StaticPage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  lastUpdated: string;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  experienceYears: number;
  social?: { twitter?: string; linkedin?: string; };
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  copyrightYear: number;
  foundedYear: number;
  contactEmail: string;
  defaultAuthor: Author;
  fullDisclaimer: string;
}

export interface SportCategory {
  slug: string;
  name: string;
  h1: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  recommendedBookmakers: string[];
  isPopular: boolean;
  order: number;
}