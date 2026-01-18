// src/data/regions/gb/en/reviews/william-hill.ts
import { BookmakerReview } from './types';

export const williamHillReview: BookmakerReview = {
  bookmakerSlug: 'william-hill',

  history: {
    foundedYear: 1934,
    foundedLocation: 'London, UK',
    originStory: `William Hill's story began in an era when betting was illegal in Britain. The founder, William Hill himself, started as a "silver ring" bookie at tracks before opening an illicit fixed-odds football betting office in 1934. He exploited a legal loophole by requiring bets to be placed via post or telegram, bypassing the ban on cash betting.

Hill was a pioneer who campaigned for the legalisation of betting shops, though ironically, he initially refused to open them when they became legal in 1961, calling them a "cancer on society." He eventually relented, building the UK's most iconic high-street betting brand. After his death in 1971, the company passed through various corporate hands before being acquired by Caesars Entertainment for £2.9 billion in 2021 and subsequently sold to 888 Holdings (now evoke plc) in 2022.`,
    
    keyMilestones: [
      { year: 1934, event: 'Founded as a postal/telephone betting service' },
      { year: 1961, event: 'First betting shops opened (reluctantly)' },
      { year: 1966, event: 'First bookmaker to be listed on the London Stock Exchange' },
      { year: 2002, event: 'Launched online sportsbook' },
      { year: 2021, event: 'Acquired by Caesars Entertainment and delisted from LSE' },
      { year: 2022, event: 'Sold to 888 Holdings (now evoke plc) for £1.95 billion' },
      { year: 2025, event: 'Completed roll-out of 5,000 new gaming cabinets across UK retail estate' },
      { year: 2026, event: 'Strategic repositioning complete with a new visual identity for the digital era' }
    ],

    corporate: {
      parentCompany: 'evoke plc',
      isPublic: true,
      ticker: 'LSE: EVOK',
      hasRetailShops: true,
      retailNote: 'Operates approx. 1,300 shops across the UK, representing the group\'s core high-street presence.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner',
      'Malta Gaming Authority',
      'Spain (DGOJ)',
      'Italy (ADM)'
    ],
    fines: [
      {
        year: 2023,
        amount: '£19.2m',
        reason: 'Social responsibility & AML failures',
        note: 'Record-breaking settlement for failures that occurred across William Hill and Mr Green brands.'
      },
      {
        year: 2018,
        amount: '£6.2m',
        reason: 'Anti-money laundering failures',
        note: 'Failed to identify and mitigate risks associated with high-spending customers.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: '#YourOdds',
      description: 'The definitive "Request-a-Bet" tool allowing punters to create custom combinations by tweeting the brand directly for odds.'
    },

    strengths: [
      {
        type: 'Horse Racing',
        details: 'Market-leading racing radio, commentary, and "Extra Place" offers on major daily cards.'
      },
      {
        type: 'Omnichannel Integration',
        details: 'The Plus Card allows users to deposit and withdraw online funds instantly in any of the 1,300+ shops.'
      },
      {
        type: 'Bet Builder',
        details: 'Highly improved "Impact Sub" and player prop features following the 2024 technology reset.'
      }
    ],

    weaknesses: [
      {
        type: 'Retail Dependence',
        details: 'Retail revenue dropped 2.4% in H1 2025, reflecting a broader market shift toward digital platforms.'
      },
      {
        type: 'Withdrawal Times',
        details: 'Standard bank transfers can still take up to 3 days, though Plus Card withdrawals are instant.'
      },
      {
        type: 'App Complexity',
        details: 'The interface is powerful but can be overwhelming for beginners compared to minimalist rivals.'
      }
    ]
  },

  editorial: {
    tagline: 'Who You Got?',
    verdict: 'William Hill remains a trusted pillar of British betting. Since its acquisition by evoke plc, the brand has successfully pivoted toward a "digital-first" strategy without losing its racing soul. The 2025 retail upgrade with 5,000 new cabinets and the #YourOdds tool make it an essential account for serious football and racing punters. Despite significant past fines, its current focus on AI-driven safety and data-led segmentation makes it one of the most stable choices in the 2026 market.',
    
    bestFor: [
      'Horse racing enthusiasts',
      'Cash-heavy players (Plus Card)',
      'EFL and Scottish Cup bettors',
      'Fans of live racing commentary'
    ],
    
    notIdealFor: [
      'Users seeking the absolute fastest app experience',
      'Punters wanting simple "Bet & Get" welcome offers',
      'Those preferring independent, non-corporate bookies'
    ],

    uniqueSellingPoints: [
      'William Hill Plus (Seamless retail/online bridge)',
      'Official Betting Partner of the Scottish Cup',
      'Industry-leading Horse Racing Radio',
      'Member of FTSE 250 parent group evoke plc'
    ],

    competitorComparison: 'Offers better shop integration than bet365 but trails on app speed. More racing-focused than sister brand 888sport. Competes directly with Ladbrokes for the "traditional UK bookie" crown.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'William Hill Plus (In-Shop Cash)',
      amount: '£30',
      withdrawalTime: 'Instant',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '4 minutes',
      note: 'Human agents were knowledgeable about the new 2025 platform features; AI bot is useful for basic queries.'
    }
  },

  partnerships: [
    { name: 'Scottish Cup', type: 'official_partner', years: 'Since 2021' },
    { name: 'Randox Grand National', type: 'official_partner', years: 'Bonus Series Sponsor' },
    { name: 'Racing Post', type: 'official_partner' }
  ],

  interestingFacts: [
    'William Hill once described betting shops as a "cancer" before becoming their largest operator.',
    'The company launched the UK\'s first dedicated bookmaker-run radio station.',
    'It was the first British bookmaker to receive a license in Nevada, USA.',
    'Parent company evoke plc reported a significant turnaround in 2024, with H2 Adjusted EBITDA rising 71% half-on-half.',
    'Founder William Hill used his gambling profits to fund his passion for breeding prize-winning horses.'
  ],

  seo: {
    h1: 'William Hill Review 2026: The "Home of Betting" Expertise Tested',
    excerpt: 'Is William Hill still the king of horse racing and retail betting? Read our 2026 review covering #YourOdds, the Plus Card, and the 2025 retail technology reset.',
    metaTitle: 'William Hill Review UK 2026 | Plus Card & Expert Analysis',
    metaDescription: 'Complete William Hill review for 2026. We test the new Plus Card instant shop withdrawals, racing radio quality, and analyze the evoke plc turnaround. Honest expert verdict.',
    lastUpdated: '2026-01-18'
  }
};