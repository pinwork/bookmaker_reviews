// src/data/regions/gb/en/reviews/matchbook.ts
import { BookmakerReview } from './types';

export const matchbookReview: BookmakerReview = {
  bookmakerSlug: 'matchbook',

  history: {
    foundedYear: 2004,
    foundedLocation: 'Antigua (Original Launch)',
    originStory: `Matchbook launched in 2004 targeting the US market with backing from the pioneers behind World Sports Exchange. After the 2006 US gambling crackdown decimated its original business model, the exchange was acquired in 2011 by Triplebet Limited, led by Matthew Benham (owner of Brentford FC).

Under Triplebet, the platform was rebuilt with a focus on the UK and Europe. The ownership structure remained a topic of speculation until December 2025, when it was revealed that legendary Australian gambler Zeljko Ranogajec had become the majority shareholder, with Benham retaining a minority stake. In 2026, Matchbook became the first UK-licensed platform to launch dedicated prediction markets.`,
    
    keyMilestones: [
      { year: 2004, event: 'Launched targeting North American sports bettors' },
      { year: 2011, event: 'Acquired by Triplebet Limited (Matthew Benham)' },
      { year: 2020, event: 'License suspended for 6 months and fined £740k for AML failures' },
      { year: 2024, event: 'Launched easyBet.net joint venture with easyGroup' },
      { year: 2025, event: 'Zeljko Ranogajec revealed as majority shareholder' },
      { year: 2026, event: 'Launched UK licensed prediction markets' }
    ],

    corporate: {
      parentCompany: 'Triplebet Limited',
      isPublic: false,
      hasRetailShops: false,
      retailNote: 'Online only. Operates exclusively as a digital betting exchange.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Alderney Gambling Control Commission'
    ],
    fines: [
      {
        year: 2020,
        amount: '£740,000',
        reason: 'AML and Social Responsibility',
        note: 'Severe failings led to a 6-month license suspension. A syndicate was found to have matched $55m in bets without proper checks.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: '2% Commission & No Premium Charge',
      description: 'The lowest commission rate among major UK exchanges (2% on net profit) and, crucially, no "Premium Charge" for winners.'
    },

    strengths: [
      {
        type: 'Value for Winners',
        details: 'Unlike Betfair, winning accounts are not penalised with extra charges, making it the top choice for professional traders.'
      },
      {
        type: 'US Sports Liquidity',
        details: 'Historically strong liquidity on NFL, NBA, and MLB due to its origins.'
      },
      {
        type: 'Prediction Markets',
        details: 'First UK-licensed exchange to offer political and current affairs prediction markets.'
      }
    ],

    weaknesses: [
      {
        type: 'Liquidity Depth',
        details: 'While good on major US sports, liquidity on UK horse racing and lower-league football lags behind Betfair.'
      },
      {
        type: 'Live Streaming',
        details: 'Limited streaming options compared to major sportsbooks.'
      },
      {
        type: 'Learning Curve',
        details: 'The exchange model is less intuitive for casual bettors than a standard sportsbook.'
      }
    ]
  },

  editorial: {
    tagline: 'The Smart Way to Bet',
    verdict: 'Matchbook is the "smart" alternative to Betfair. For 99% of casual punters, the difference is negligible, but for serious bettors and traders, Matchbook is essential. The 2% commission rate and complete absence of the hated Premium Charge mean that if you are a long-term winner, you simply make more money here. The recent addition of Prediction Markets shows they are innovating again. Liquidity is lower than the market leader, but the value proposition is mathematically superior.',
    
    bestFor: [
      'Professional Traders',
      'US Sports Bettors',
      'Arbitrage Betting',
      'Political/Prediction Market traders'
    ],
    
    notIdealFor: [
      'Casual accumulator punters',
      'Those needing deep liquidity on niche UK sports',
      'Stream-heavy users'
    ],

    uniqueSellingPoints: [
      '2% Net Win Commission (vs 5% standard)',
      'No Premium Charge for winners',
      'Licensed Prediction Markets',
      'Strongest US Sports exchange in UK'
    ],

    competitorComparison: 'Cheaper than Betfair (2% vs 5%) and friendlier to winners. Better technology and liquidity than Betdaq. Smarkets is the closest rival on price, but Matchbook often edges it on US sports liquidity.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£100',
      withdrawalTime: '24 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '2 minutes',
      note: 'Support agents are more technical than average, understanding exchange concepts well.'
    }
  },

  partnerships: [
    { name: 'easyBet.net', type: 'official_partner', years: 'Joint Venture' },
    { name: 'Brentford FC', type: 'official_partner', years: 'Historical Connection' }
  ],

  interestingFacts: [
    'Majority owner Zeljko Ranogajec is one of the world\'s biggest gamblers, reportedly betting over $10bn annually.',
    'Ranogajec\'s syndicate won a $95m lottery jackpot in Texas by buying 99% of the combinations, a feat that changed lottery laws.',
    'Matthew Benham used his gambling fortune to buy Brentford FC and guide them to the Premier League using data analytics.',
    'Matchbook offers 110 days commission-free trading for new customers.',
    'The platform was originally US-facing before the 2006 crackdown forced a pivot to Europe.'
  ],

  seo: {
    h1: 'Matchbook Review 2026: Low Commission Exchange Tested',
    excerpt: 'Is Matchbook the best Betfair alternative for serious traders? Read our 2026 review covering the 2% commission rate, prediction markets, and the lack of Premium Charge.',
    metaTitle: 'Matchbook Review UK 2026 | 2% Commission & No Premium Charge',
    metaDescription: 'Complete Matchbook Exchange review for 2026. We test withdrawal speeds (24 hrs), US sports liquidity, and the new prediction markets. Discover why it’s the pro’s choice.',
    lastUpdated: '2026-01-18'
  }
};