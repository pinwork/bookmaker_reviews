// src/data/regions/gb/en/reviews/betfred.ts
import { BookmakerReview } from './types';

export const betfredReview: BookmakerReview = {
  bookmakerSlug: 'betfred',

  history: {
    foundedYear: 1967,
    foundedLocation: 'Ordsall, Salford',
    originStory: `Betfred's origin story is pure British grit — a £200 World Cup bet transformed into a £2.9 billion empire. Fred Done grew up in a cramped house in Salford, working as a runner for his father's illegal betting operation by age 12. The founding moment came on 4 September 1967, when 24-year-old Fred opened his first shop funded by a £25 winning bet on England winning the 1966 World Cup.

The early years were brutal; Fred was stabbed five times by an angry customer in his late 20s, and the business nearly collapsed during the 1967 foot-and-mouth outbreak. However, by pivoting to afternoon greyhound racing and eventually purchasing the government-owned Tote for £265 million in 2011, Betfred grew into Britain's largest independent bookmaker. It remains 100% family-owned by the Done brothers, who famously resolved a business split in 1989 with a coin toss.`,
    
    keyMilestones: [
      { year: 1967, event: 'First shop opens in Salford funded by 1966 World Cup winnings' },
      { year: 1984, event: 'Fred Done credited with inventing the Lucky 15 bet' },
      { year: 1998, event: 'First "early payout" on Manchester United to win the league' },
      { year: 2011, event: 'Acquired the state-owned Tote for £265 million' },
      { year: 2017, event: 'Became title sponsor of Rugby League (Super League)' },
      { year: 2024, event: 'Became the first bookmaker to sponsor all five British Classic races' },
      { year: 2025, event: 'Done Brothers (Cash Betting) fined £825,000 for retail gaming machine failings' }
    ],

    corporate: {
      parentCompany: 'Betfred Group Holdings Limited',
      isPublic: false,
      hasRetailShops: true,
      retailNote: 'Operates approx. 1,350 shops across the UK, making it the largest independent retail bookmaker.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner'
    ],
    fines: [
      {
        year: 2025,
        amount: '£825,000',
        reason: 'AML and Social Responsibility',
        note: 'Failures related to gaming machines in shops; thresholds for interaction were found to be too high.'
      },
      {
        year: 2025,
        amount: '£240,000',
        reason: 'Fairness and Transparency',
        note: 'Online slot features celebrated losses as wins, breaching technical standards.'
      },
      {
        year: 2023,
        amount: '£3.25m',
        reason: 'AML and Social Responsibility',
        note: 'Significant failures including poor record keeping and failure to monitor high-velocity spend.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Double Delight & Hat-Trick Heaven',
      description: 'The industry-standard football promo: if your First Goalscorer scores a second, odds are doubled. If they score a hat-trick, odds are trebled.'
    },

    strengths: [
      {
        type: 'Horse Racing Bonuses',
        details: 'Unmatched value on multiple bets. Known as the "Bonus King" for boosting Lucky 15/31/63 returns.'
      },
      {
        type: 'Football Promotions',
        details: 'Double Delight and 2 Goals Up Early Payout offer top-tier value for football bettors.'
      },
      {
        type: 'Retail Integration',
        details: 'Ability to deposit and withdraw cash directly via the extensive network of 1,350+ shops.'
      }
    ],

    weaknesses: [
      {
        type: 'Withdrawal Speed',
        details: 'Online withdrawals to debit cards typically take 2-5 working days, though Trustly and e-wallets are faster.'
      },
      {
        type: 'App Interface',
        details: 'Functional but lacks the polish of bet365 or Sky Bet; user reviews often cite lag during slot gameplay.'
      },
      {
        type: 'Compliance Record',
        details: 'Frequent regulatory penalties (three significant fines in 2023-2025) indicate ongoing issues with player safety checks.'
      }
    ]
  },

  editorial: {
    tagline: 'The Bonus King',
    verdict: 'Betfred is betting with a human face. While corporate giants rely on algorithms, Betfred relies on the personality of Fred Done — known for paying out early on league titles and inventing the Lucky 15. It is an essential account for football and racing punters due to the "Double Delight" and multiple bet bonuses. However, the technology feels dated compared to market leaders, and the withdrawal times for debit cards remain slow for an operator of this size.',
    
    bestFor: [
      'Lucky 15/31/63 bettors (Best Bonuses)',
      'Football First Goalscorer punters',
      'Fans of traditional high-street betting',
      'Rugby League fans'
    ],
    
    notIdealFor: [
      'Players expecting instant bank withdrawals',
      'Tech-first users accustomed to slick apps',
      'Those concerned by repeated compliance fines'
    ],

    uniqueSellingPoints: [
      'The "Bonus King" of multiples (Lucky 15s)',
      'Title sponsor of the Betfred Super League and Challenge Cup',
      'Double Delight / Hat-Trick Heaven promotions',
      '100% Family Owned (No shareholder pressure)'
    ],

    competitorComparison: 'Betfred cannot match bet365 for tech or in-play betting, and lacks the instant withdrawals of Ladbrokes/Coral. However, for pure promotional value on football scorers and racing multiples, it remains a market leader.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£40',
      withdrawalTime: '3 working days',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '2 minutes',
      note: 'Agents are helpful but the interface feels less modern than competitors.'
    }
  },

  partnerships: [
    { name: 'Manchester United', type: 'official_partner', years: 'Since 2022' },
    { name: 'Betfred Super League', type: 'official_partner', years: 'Title Sponsor' },
    { name: 'Betfred Challenge Cup', type: 'official_partner', years: 'Title Sponsor' },
    { name: 'The Derby (Epsom)', type: 'official_partner', years: 'Since 2023' }
  ],

  interestingFacts: [
    'Fred Done was once stabbed five times by an angry customer in his shop, requiring 32 stitches.',
    'The brothers resolved a business dispute in 1989 with a coin toss; Peter lost and took a separate business (Peninsula), which is now also worth billions.',
    'Fred Done is famous for paying out early on the Premier League winner — a PR stunt that cost him millions when Man Utd lost the title to Man City in 2012.',
    'The Done family were ranked as the second-highest taxpayers in the UK in 2024, paying over £273 million.',
    'Invented the "Lucky 15" bet in 1984 to encourage customers to place multiples.'
  ],

  seo: {
    h1: 'Betfred Review 2026: The Bonus King’s Expert Verdict',
    excerpt: 'Is Betfred still the best for horse racing and football bonuses? Read our 2026 review covering Double Delight, withdrawal speeds, and recent regulatory testing.',
    metaTitle: 'Betfred Review UK 2026 | Free Bets & Bonus King Analysis',
    metaDescription: 'Complete Betfred review for 2026. We test withdrawal speeds (3 days), football scorer bonuses, and Lucky 15 boosts. See why Fred Done’s firm remains a UK favorite.',
    lastUpdated: '2026-01-18'
  }
};