// src/data/regions/gb/en/reviews/types.ts
export interface BookmakerReview {
  bookmakerSlug: string;

  history: {
    foundedYear: number;
    foundedLocation: string;
    originStory: string;
    keyMilestones: HistoryMilestone[];
    corporate: CorporateProfile;
  };

  regulatory: {
    otherLicenses: string[];
    fines: RegulatoryFine[];
  };

  productAnalysis: {
    standoutFeature: StandoutFeature;
    strengths: ProductPoint[];
    weaknesses: ProductPoint[];
  };

  editorial: {
    tagline: string;
    verdict: string;
    bestFor: string[]; 
    notIdealFor: string[]; 
    uniqueSellingPoints: string[]; 
    competitorComparison: string; 
  };

  testing: {
    lastTested: string; 
    withdrawalTest: WithdrawalTest;
    supportTest: SupportTest;
  };

  partnerships: Partnership[];
  interestingFacts: string[]; 

  seo: {
    h1: string;
    excerpt: string;
    metaTitle: string;
    metaDescription: string;
    lastUpdated: string;
  };
}

export interface HistoryMilestone {
  year: number;
  event: string;
}

export interface CorporateProfile {
  parentCompany: string;
  isPublic: boolean;
  ticker?: string; 
  hasRetailShops: boolean;
  retailNote?: string;
}

export interface RegulatoryFine {
  year: number;
  amount: string;
  reason: string;
  note?: string; 
}

export interface StandoutFeature {
  name: string;
  description: string;
}

export interface ProductPoint {
  type: string; 
  details: string; 
}

export interface WithdrawalTest {
  method: string;
  amount: string;
  withdrawalTime: string; 
}

export interface SupportTest {
  channel: string;
  responseTime: string;
  note?: string;
}

export interface Partnership {
  name: string;
  type: 'shirt' | 'stadium' | 'official_partner' | 'ambassador' | 'broadcast' | 'other';
  years?: string;
}