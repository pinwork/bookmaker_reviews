// src/data/regions/gb/en/reviews/bet365.ts
import { BookmakerReview } from './types';

export const bet365Review: BookmakerReview = {
  bookmakerSlug: 'bet365',

  history: {
    foundedYear: 2001,
    foundedLocation: 'Stoke-on-Trent, UK',
    originStory: `bet365's origin story is the stuff of British business legend. In January 2000, Denise Coates — then running her father's chain of betting shops in Stoke-on-Trent — spotted the future of gambling before almost anyone else. She purchased the domain bet365.com for around £20,000 and spent a year building the platform, famously working from a Portakabin in the car park of one of the family's betting shops.

To fund the venture, the Coates family took what Denise herself called "the ultimate gamble" — securing a £15 million loan from Royal Bank of Scotland using the entire family betting shop estate as collateral. The site launched in March 2001, just months after the dot-com crash had wiped out countless tech ventures.`,
    
    keyMilestones: [
      { year: 2000, event: 'Domain bet365.com purchased for approximately £20,000' },
      { year: 2001, event: 'Launched online from a Portakabin in Stoke-on-Trent' },
      { year: 2005, event: 'Sold Provincial Racing betting shops to Coral for £50 million to go fully online' },
      { year: 2012, event: 'Denise Coates awarded CBE for services to business and community' },
      { year: 2016, event: 'Secured naming rights for Stoke City FC stadium' },
      { year: 2021, event: 'Began US expansion with New Jersey and Colorado launches' }
    ],

    corporate: {
      parentCompany: 'bet365 Group Limited',
      isPublic: false,
      hasRetailShops: false,
      retailNote: 'Exclusively online since selling their retail estate in 2005.',
    }
  },

  regulatory: {
    otherLicenses: ['MGA', 'Gibraltar', 'DGE (New Jersey)'],
    fines: [
      {
        year: 2024,
        amount: '£582,120',
        reason: 'Anti-money laundering and social responsibility failures'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'In-Play Betting & Live Streaming',
      description: 'The industry benchmark for live betting with unmatched market depth.'
    },
    strengths: [
      { type: 'Live Streaming', details: 'Streams thousands of events including major football leagues.' },
      { type: 'Early Payout', details: '2 Goals Ahead Early Payout covers 80+ leagues.' }
    ],
    weaknesses: [
      { type: 'Loyalty Rewards', details: 'No formal loyalty programme for existing customers.' }
    ]
  },

  editorial: {
    tagline: 'Never Ordinary',
    verdict: 'bet365 is the complete package for serious sports bettors. Their in-play betting and live streaming combination is genuinely years ahead of competitors.',
    bestFor: ['In-play betting', 'Live streaming', 'Football accas'],
    notIdealFor: ['Bonus hunters', 'Telephone support users'],
    uniqueSellingPoints: ['Industry-leading In-Play product', '2 Goals Ahead Early Payout'],
    competitorComparison: 'While Sky Bet matches bet365 for football promotions, no competitor delivers the same combination of streaming quality and app reliability.'
  },

  testing: {
    lastTested: 'January 2026',
    withdrawalTest: {
      method: 'PayPal',
      amount: '£50',
      withdrawalTime: '2 hours 15 minutes',
    },
    supportTest: {
      channel: 'Live Chat',
      responseTime: '2 minutes',
    }
  },

  partnerships: [
    { name: 'Stoke City FC', type: 'stadium', years: '2016-Present' },
    { name: 'UFC', type: 'official_partner' }
  ],

  interestingFacts: [
    'Built from a Portakabin in a car park.',
    'Denise Coates is one of the world\'s highest-paid executives.',
    'Remain headquartered in Stoke-on-Trent despite global scale.'
  ],

  seo: {
    h1: 'bet365 Review 2026: Expert Verdict & Hands-on Testing',
    excerpt: 'Is bet365 still the best bookmaker in the UK? Read our 2026 review covering withdrawal speeds, live streaming, and the £30 welcome offer.',
    metaTitle: 'bet365 Review UK 2026 | Expert Analysis & Best Odds',
    metaDescription: 'In-depth bet365 review for 2026. We tested withdrawal speeds (2 hrs), live streaming, and football markets. See why bet365 remains the industry leader.',
    lastUpdated: '2026-01-18'
  }
};