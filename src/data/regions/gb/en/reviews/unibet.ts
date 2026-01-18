import { BookmakerReview } from './types';

export const unibetReview: BookmakerReview = {
  bookmakerSlug: 'unibet',

  history: {
    foundedYear: 1997,
    foundedLocation: 'Earl\'s Court, London',
    originStory: `Unibet's origin is pure startup legend — Swedish founder Anders Ström building a betting empire from his bedroom in London. His mantra "By Players, For Players" was a radical shift, aiming to empower bettors with data and statistics rather than treating them as adversaries.

Launched in 1997, Unibet became an internet pioneer by releasing one of the world's first betting websites in 1999. The company's biggest technical legacy was the creation of Kambi, a sportsbook platform it later spun off, which now powers major US operators like DraftKings. In October 2024, Unibet entered a new era after being acquired by the French national lottery operator, La Française des Jeux (FDJ), for €2.45 billion, making it part of Europe's second-largest gambling group.`,
    
    keyMilestones: [
      { year: 1997, event: 'Founded by Anders Ström in a London flat' },
      { year: 1999, event: 'Launched one of the industry\'s first online betting sites' },
      { year: 2004, event: 'IPO on NASDAQ OMX Nordic Exchange' },
      { year: 2014, event: 'Spun off Kambi Group to focus on consumer operations' },
      { year: 2017, event: 'Acquired 32Red for £175.6 million' },
      { year: 2024, event: 'Kindred Group (parent) acquired by FDJ for €2.45 billion' },
      { year: 2025, event: 'Platinum Gaming (Unibet operator) fined £10m by UKGC for repeat failures' }
    ],

    corporate: {
      parentCompany: 'FDJ UNITED (La Française des Jeux)',
      isPublic: true,
      ticker: 'PARIS: FDJ',
      hasRetailShops: false,
      retailNote: 'Online only in the UK. Parent FDJ operates a massive retail lottery network in France.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority',
      'Sweden (Spelinspektionen)',
      'Denmark (Spillemyndigheden)',
      'Australia (Northern Territory)'
    ],
    fines: [
      {
        year: 2025,
        amount: '£10.0m',
        reason: 'Social Responsibility and AML Failures',
        note: 'Record penalty for Platinum Gaming Ltd. The UKGC cited "serious shortcomings," including a customer losing £2,500 within 16 minutes of joining without intervention.'
      },
      {
        year: 2023,
        amount: '£7.1m',
        reason: 'AML and Social Responsibility',
        note: 'Combined fine for Kindred brands (Unibet and 32Red) for failing to identify and interact with high-risk customers.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Unibet TV',
      description: 'One of the best live streaming services in the world, covering over 40,000 matches and 165,000 horse races annually with minimal delay.'
    },

    strengths: [
      {
        type: 'Streaming Quality',
        details: 'Unibet TV rivals bet365, offering Bundesliga, La Liga, Serie A, and Grand Slam tennis streams.'
      },
      {
        type: 'Statistical Depth',
        details: 'Features "Smartview" racecards and deep statistical integration within the sportsbook interface.'
      },
      {
        type: 'Uniboost',
        details: 'Punters can apply three daily odds boosts to their own selected markets instead of pre-picked ones.'
      },
      {
        type: 'Horse Racing',
        details: 'Title sponsor of the Champion Hurdle; offers Best Odds Guaranteed from 8am on all UK/Irish racing.'
      }
    ],

    weaknesses: [
      {
        type: 'Compliance Rigidity',
        details: 'Following the £10m fine in 2025, users often face extremely strict and fast-acting affordability checks.'
      },
      {
        type: 'App Separation',
        details: 'Requires separate apps for Sports, Casino, and Poker, which is less convenient than all-in-one platforms.'
      },
      {
        type: 'Market Pricing',
        details: 'Football margins are generally 5.5% - 6.0%, which is mid-market rather than industry-leading value.'
      }
    ]
  },

  editorial: {
    tagline: 'By Players, For Players',
    verdict: 'Unibet is the "thinking man\'s" bookmaker. It lacks the flashy marketing of Paddy Power, but compensates with incredible streaming (Unibet TV) and a tech-first approach. Being part of the FDJ group gives it immense financial stability. It is the perfect second account for any bettor who wants to watch live sports while they bet. However, be prepared for strict ID and income verification—their recent record-breaking fines mean they are now extra cautious with UK customers.',
    
    bestFor: [
      'Live streaming fans (Top tier service)',
      'In-play football bettors',
      'Tennis and NBA enthusiasts',
      'Horse racing value hunters (Champion Hurdle sponsor)'
    ],
    
    notIdealFor: [
      'Punters seeking the absolute best odds every time',
      'Users who hate document verification (KYC)',
      'Those wanting one app for everything'
    ],

    uniqueSellingPoints: [
      'Unibet TV (40k+ sports streams yearly)',
      'Zero% Mission (Visible on Rangers FC shirts)',
      'Original creator of Kambi technology',
      'Longest-running shirt sponsor in UK football (Rangers)'
    ],

    competitorComparison: 'Rivals bet365 on streaming quality but trails on market depth. More analytical and less promo-heavy than Sky Bet. Identical tech to 888sport (both Kambi-influenced).'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Direct',
      amount: '£30',
      withdrawalTime: '2-4 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '2 minutes',
      note: 'Support is efficient, but they are very strict about sticking to regulatory scripts due to recent fines.'
    }
  },

  partnerships: [
    { name: 'Rangers FC', type: 'shirt', years: 'Since 2014' },
    { name: 'Champion Hurdle (Cheltenham)', type: 'official_partner', years: 'Title Sponsor' },
    { name: 'Leeds United', type: 'official_partner' }
  ],

  interestingFacts: [
    'Founded in a bedroom in Earl\'s Court by a statistics fan who wanted to help punters beat the bookies.',
    'Unibet created Kambi, the tech that now runs major US sports betting apps like DraftKings and ESPN Bet.',
    'Their partnership with Rangers FC is the longest continuous shirt sponsorship deal in British football history.',
    'They are the first major bookmaker to replace their logo with "Zero% Mission" responsible gambling messages on shirts.',
    'The 2024 acquisition by FDJ for €2.45bn created Europe\'s second-largest gambling operator after Flutter.'
  ],

  seo: {
    h1: 'Unibet Review 2026: The "Thinking Man’s" Bookie Tested',
    excerpt: 'Is Unibet still the best for live streaming and sports statistics? Read our 2026 review on Unibet TV, the £10m fine history, and withdrawal speeds.',
    metaTitle: 'Unibet Review UK 2026 | Live Streaming & Expert Analysis',
    metaDescription: 'Complete Unibet review for 2026. We test the Unibet TV streaming platform (40k+ events), examine the £10m regulatory fine, and check withdrawal times (2-4 hrs).',
    lastUpdated: '2026-01-18'
  }
};