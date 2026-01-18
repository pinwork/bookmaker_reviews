import { BookmakerReview } from './types';

export const smarketsReview: BookmakerReview = {
  bookmakerSlug: 'smarkets',

  history: {
    foundedYear: 2008,
    foundedLocation: 'London, UK',
    originStory: `Smarkets is the genuine "disruptor" in the exchange space. Founded by two American finance professionals, Jason Trost and Hunter Morris, who were frustrated by Betfair's high commissions and outdated tech. Trost, a computer science graduate, designed the platform to feel more like a modern stock exchange than a traditional bookie.

Since its public launch in 2010, Smarkets has focused on price-led growth, attracting a dedicated following of matched bettors and professional traders. Despite the dominance of Betfair, Smarkets has carved out a massive niche by offering a flat 2% commission and—most importantly—never penalising winners with a 'Premium Charge'. While Trost remains the vocal face of the company, Morris has since transitioned to a senior role at Google's DeepMind.`,
    
    keyMilestones: [
      { year: 2008, event: 'Smarkets Limited incorporated in London' },
      { year: 2010, event: 'Public platform launch following two years of dev' },
      { year: 2019, event: 'Launched SBK, a fixed-odds sportsbook powered by exchange prices' },
      { year: 2021, event: 'Susquehanna Growth Equity took a significant minority stake' },
      { year: 2022, event: 'Fined £630k by UKGC for historical AML failings' },
      { year: 2024, event: 'Revenue surged 18% following SBK growth' },
      { year: 2025, event: 'Became Official Training Wear partner for AFC Bournemouth' }
    ],

    corporate: {
      parentCompany: 'Smarkets Holdings (Malta) Limited',
      isPublic: false,
      hasRetailShops: false,
      retailNote: 'Exclusively digital. Operates both the Smarkets Exchange and the SBK Sportsbook app.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority',
      'Ireland (Remote Bookmaking)'
    ],
    fines: [
      {
        year: 2022,
        amount: '£630,000',
        reason: 'AML and Social Responsibility failures',
        note: 'The fine related to historical cases where customers deposited large sums without adequate source-of-funds checks. The company has since "substantially" increased its compliance investment.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Flat 2% Commission',
      description: 'A transparent, low-cost model that only charges 2% on net profits per market, with no hidden Premium Charges for successful bettors.'
    },

    strengths: [
      {
        type: 'Winner Friendly',
        details: 'Unlike Betfair, which can charge winners up to 60% (Premium Charge), Smarkets welcomes profitable traders.'
      },
      {
        type: 'Trading API',
        details: 'Offers a free public API for developers to build automated trading bots—a feature Betfair often charges for.'
      },
      {
        type: 'Political Markets',
        details: 'Renowned for having some of the most liquid and accurate political prediction markets in the world.'
      },
      {
        type: 'SBK App',
        details: 'The sister app (SBK) provides bookmaker-style betting but with the superior odds of an exchange.'
      }
    ],

    weaknesses: [
      {
        type: 'Liquidity',
        details: 'While excellent on Premier League and major racing, it cannot match Betfair’s depth on niche or lower-tier sports.'
      },
      {
        type: 'Android Experience',
        details: 'User ratings for the Android app (approx. 3.0/5) consistently lag behind the polished iOS version.'
      },
      {
        type: 'No Casino/Poker',
        details: 'Purist approach means no casino or poker products, which may deter casual "all-in-one" users.'
      }
    ]
  },

  editorial: {
    tagline: 'Betting Without the Bullsh*t',
    verdict: 'Smarkets is the exchange for the data-driven bettor. If you are doing matched betting, arbitrage, or professional trading, it is almost certainly a better home for your money than Betfair due to the lower commission and lack of winning penalties. The UI is the cleanest in the industry, feeling more like a Robinhood-style trading app than a gambling site. However, for niche markets, you might still find yourself needing a Betfair account for the liquidity.',
    
    bestFor: [
      'Professional Traders',
      'Matched Bettors',
      'Political junkies',
      'Tech-savvy bettors using APIs'
    ],
    
    notIdealFor: [
      'Casual bettors who want a casino/poker mix',
      'Punters betting on very obscure sports',
      'Users who prefer a "traditional" bookie feel'
    ],

    uniqueSellingPoints: [
      '2% Flat Commission (Standard)',
      'No Premium Charge (Winner Friendly)',
      'Free Public Trading API',
      'SBK "Price+" feature for boosted odds'
    ],

    competitorComparison: 'Much cheaper than Betfair (2% vs 5-7%) for winners. Cleaner UI than Matchbook or Betdaq. SBK app is more modern than almost any traditional sportsbook app.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£50',
      withdrawalTime: '12-24 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '3 minutes',
      note: 'Very efficient. They recently added a community forum where users can discuss technical issues or API bugs.'
    }
  },

  partnerships: [
    { name: 'AFC Bournemouth', type: 'official_partner', years: 'Training Wear Partner' },
    { name: 'Hibernian FC', type: 'shirt', years: 'Since 2024' },
    { name: 'Bradford City', type: 'official_partner' }
  ],

  interestingFacts: [
    'The company operates a "self-management" model where employees can see each other\'s salaries and vote on pay rises.',
    'Founder Jason Trost is famously self-critical, often posting on his blog about corporate mistakes and learning from them.',
    'While politics doesn\'t make much profit for them, it generates the most media coverage, with Smarkets often cited by news outlets for election odds.',
    'The platform was built by finance professionals who designed it to handle high-frequency trading volumes.',
    'The "Betting Without the Bullsh*t" campaign in 2025 was one of the first in the industry to use fully AI-generated video ads.'
  ],

  seo: {
    h1: 'Smarkets Review 2026: Low Commission Betting Exchange Tested',
    excerpt: 'Is Smarkets the best Betfair alternative for matched betting? Read our 2026 review on 2% commission, liquidity, and the high-speed SBK app.',
    metaTitle: 'Smarkets Review UK 2026 | 2% Commission & No Premium Charge',
    metaDescription: 'Complete Smarkets review for 2026. We test the industry-low 2% commission, analyze exchange liquidity, and check withdrawal times (12-24 hrs). Perfect for pro traders.',
    lastUpdated: '2026-01-18'
  }
};