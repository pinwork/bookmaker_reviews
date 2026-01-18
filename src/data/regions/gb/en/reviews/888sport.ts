// src/data/regions/gb/en/reviews/888sport.ts
import { BookmakerReview } from './types';

export const sport888Review: BookmakerReview = {
  bookmakerSlug: '888sport',

  history: {
    foundedYear: 2008,
    foundedLocation: 'Gibraltar (Sportsbook launch)',
    originStory: `888sport's origins are rooted in one of the gambling industry's most famous anecdotes. In the mid-1990s, Aaron Shaked, an Israeli dentist attending a conference in Monte Carlo, was captivated by the casino atmosphere. Despite knowing nothing about gambling, he and his brother Avi (a chemical engineer) teamed up with brothers Shay and Ron Ben-Yitzhak to launch Casino-on-Net in 1997, operating from Antigua with a $100,000 licence.

While the group (888 Holdings) became a casino giant early on, 888sport didn't launch until March 2008, completing their transition to a full-service operator. The company has since undergone massive transformation, most notably the £2.2 billion acquisition of William Hill's non-US assets in 2022. This deal, intended to create a UK market leader, instead burdened the company with £1.79 billion in debt, leading to a corporate rebrand to 'Evoke plc' in 2024 and a strategic review that could result in a breakup or sale.`,
    
    keyMilestones: [
      { year: 1997, event: 'Launched Casino-on-Net (one of the world\'s first online casinos)' },
      { year: 2005, event: 'IPO on London Stock Exchange' },
      { year: 2008, event: '888sport launched, entering the sports betting market' },
      { year: 2022, event: 'Acquired William Hill International for £1.95 billion' },
      { year: 2023, event: 'Paid record £19.2m UKGC fine for historical failures' },
      { year: 2024, event: 'Rebranded from 888 Holdings to Evoke plc' },
      { year: 2024, event: 'Sold US B2C operations to Hard Rock Digital, exiting USA' }
    ],

    corporate: {
      parentCompany: 'Evoke plc',
      isPublic: true,
      ticker: 'LSE: EVOK',
      hasRetailShops: false,
      retailNote: '888sport is online-only. Parent company Evoke operates 1,300+ shops under the William Hill brand.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner',
      'Malta Gaming Authority',
      'Ireland'
    ],
    fines: [
      {
        year: 2023,
        amount: '£19.2m',
        reason: 'Social responsibility & AML failures',
        note: 'Largest fine in UK history at the time. Failures occurred across William Hill and Mr Green brands under 888 ownership.'
      },
      {
        year: 2022,
        amount: '£9.4m',
        reason: 'AML and social responsibility',
        note: 'Allowed deposits up to £40k without financial checks.'
      },
      {
        year: 2017,
        amount: '£7.8m',
        reason: 'Self-exclusion technical failure',
        note: '7,000+ self-excluded customers were allowed to bet due to a system error.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Integrated Casino-Sports Ecosystem',
      description: 'Seamless single-wallet integration between a world-class casino product and a solid sportsbook.'
    },

    strengths: [
      {
        type: 'NFL Partnership',
        details: 'Official betting partner of the NFL in UK/Ireland, offering unique predictor games and branding.'
      },
      {
        type: 'Mobile App',
        details: 'Highly rated (4.5/5 iOS) with fingerprint login and intuitive navigation.'
      },
      {
        type: 'Free-to-Play',
        details: '"Up for 8" predictor game offers a £10k jackpot without requiring a stake.'
      }
    ],

    weaknesses: [
      {
        type: 'Withdrawal Speed',
        details: 'Slower than competitors (2-5 days for Visa), lacking instant Visa Direct capabilities in tests.'
      },
      {
        type: 'Corporate Stability',
        details: 'Parent company carries significant debt (£1.79bn), creating uncertainty about future ownership.'
      },
      {
        type: 'Odds Quality',
        details: 'Generally mid-market pricing; rarely offers the absolute best price compared to exchanges or aggressive competitors.'
      }
    ]
  },

  editorial: {
    tagline: 'Feel the Game',
    verdict: '888sport is a competent, well-designed platform that benefits heavily from its integration with the legendary 888casino. It is an excellent choice for players who want to mix sports betting with gaming in a single app. However, the brand is currently overshadowed by the financial struggles of its parent company, Evoke plc, and a history of significant regulatory fines. While safe to play (funds are protected), it lacks the speed of withdrawals and odds value found at top-tier rivals like bet365.',
    
    bestFor: [
      'NFL fans (Official Partner)',
      'Casino players crossing over to sports',
      'Mobile-first bettors',
      'Accumulator players (Bet Builder)'
    ],
    
    notIdealFor: [
      'Players seeking instant withdrawals',
      'Professional bettors (mid-market odds)',
      'Those concerned by corporate financial stability'
    ],

    uniqueSellingPoints: [
      'Official NFL Betting Partner UK & Ireland',
      'Up for 8 Free-to-Play Game (£10k Jackpot)',
      'Proprietary technology stack (via BetBright acquisition)',
      'Huge range of 50,000+ live streamed events'
    ],

    competitorComparison: 'Compared to sister brand William Hill, 888sport feels more modern but lacks the retail connection. Against bet365, it falls short on withdrawal speed and market depth.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£50',
      withdrawalTime: '3 days',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '5 minutes',
      note: 'Support is competent but harder to access than competitors; often buried behind FAQ walls.'
    }
  },

  partnerships: [
    { name: 'NFL', type: 'official_partner', years: 'Since 2020' },
    { name: 'RB Leipzig', type: 'official_partner', years: 'Since 2022' },
    { name: 'Cardiff City FC', type: 'official_partner' }
  ],

  interestingFacts: [
    'Founded by two pairs of Israeli brothers who initially knew nothing about gambling and studied blackjack rules at a casino in Sinai.',
    'Co-founder Shay Ben-Yitzhak coded the original software based on pictures from a rulebook.',
    'The 2022 acquisition of William Hill International has saddled the company with £1.79 billion in debt, causing a 95% share price collapse.',
    'Paid the largest fine in UK history at the time (£19.2m in 2023) for systemic failures.',
    'Was one of the very first operators to launch legal online poker in the USA (Nevada/Delaware) in 2013.'
  ],

  seo: {
    h1: '888sport Review 2026: Official NFL Partner Analysis',
    excerpt: 'Read our expert 888sport review for 2026. We test withdrawal speeds, analyze the £19.2m regulatory fine, and explore the NFL betting experience.',
    metaTitle: '888sport Review UK 2026 | App Testing & Expert Verdict',
    metaDescription: 'Is 888sport safe? Our 2026 review covers testing results for withdrawal speeds (3 days), the NFL predictor games, and mobile app performance. Honest pros and cons.',
    lastUpdated: '2026-01-18'
  }
};