// src/data/regions/gb/en/reviews/_template.ts
import { BookmakerReview } from './types';

export const templateReview: BookmakerReview = {
  bookmakerSlug: 'template-slug',

  history: {
    foundedYear: 2000,
    foundedLocation: 'City, Country',
    originStory: `
      Paragraph 1: The Origin.
      Paragraph 2: The Turning Point.
      Paragraph 3: Modern Era.
    `,
    keyMilestones: [
      { year: 2005, event: 'Event Description' },
    ],
    corporate: {
      parentCompany: 'Parent Company Name',
      isPublic: true,
      ticker: 'TKR',
      hasRetailShops: false,
    }
  },

  regulatory: {
    otherLicenses: ['MGA', 'Gibraltar'],
    fines: [
      {
        year: 2024,
        amount: '£0.0m',
        reason: 'Reason Description',
        note: 'Additional context.'
      }
    ],
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Feature Name',
      description: 'Feature Description.'
    },
    strengths: [
      {
        type: 'Strength Type',
        details: 'Strength Details.'
      }
    ],
    weaknesses: [
      {
        type: 'Weakness Type',
        details: 'Weakness Details.'
      }
    ]
  },

  editorial: {
    tagline: 'Marketing Tagline',
    verdict: 'Executive summary and final recommendation.',
    bestFor: ['Target Audience A', 'Target Audience B'],
    notIdealFor: ['Audience C'],
    uniqueSellingPoints: [
      'USP 1',
      'USP 2'
    ],
    competitorComparison: 'Market positioning vs competitors.'
  },

  testing: {
    lastTested: 'January 2026',
    withdrawalTest: {
      method: 'Payment Method',
      amount: '£00',
      withdrawalTime: '0 hours 00 mins',
    },
    supportTest: {
      channel: 'Channel Name',
      responseTime: 'Time',
      note: 'Test experience.'
    }
  },

  partnerships: [
    { name: 'Partner Name', type: 'official_partner', years: '2024-Present' }
  ],

  interestingFacts: [
    'Fact 1',
    'Fact 2'
  ],

  seo: {
    h1: 'Brand Review 2026: Expert Verdict & Testing Results',
    excerpt: 'Is [Brand] a reliable bookmaker? Read our 2026 expert review including withdrawal tests, odds analysis, and latest bonus details.',
    metaTitle: '[Brand] Review UK 2026 | Free Bets & Expert Analysis',
    metaDescription: 'Read our honest [Brand] review for 2026. We test withdrawal speeds, mobile app performance, and betting markets. Get the latest welcome offer details.',
    lastUpdated: '2026-01-18'
  }
};