// src/data/regions/gb/en/reviews/netbet.ts
import { BookmakerReview } from './types';

export const netbetReview: BookmakerReview = {
  bookmakerSlug: 'netbet',

  history: {
    foundedYear: 2001,
    foundedLocation: 'Malta',
    originStory: `NetBet is a Malta-headquartered online gambling operator that launched in 2001, making it one of the earlier online-only entrants. Originally registered as "Cosmo Gaming Company," it rebranded to NetBet Enterprises in 2017. Unlike UK high-street giants, NetBet has always been exclusively digital. The company secured its UK Gambling Commission licence in 2017 and has since expanded across Europe. CEO Marcel Prioteasa has recently focused on technology, launching an AI-powered betting assistant in 2024.`,
    
    keyMilestones: [
      { year: 2001, event: 'Launched as an online betting platform (Cosmo Gaming)' },
      { year: 2017, event: 'Secured UK Gambling Commission licence and rebranded to NetBet' },
      { year: 2020, event: 'Fined £748,000 by UKGC for AML and social responsibility failures' },
      { year: 2024, event: 'Launched industry-first AI Bet Assistant using OpenAI technology' },
      { year: 2025, event: 'Ordered to pay £650,000 UKGC settlement for repeated compliance lapses' }
    ],

    corporate: {
      parentCompany: 'NetBet Enterprises Limited',
      isPublic: false,
      hasRetailShops: false,
      retailNote: 'Online only. No physical shop presence.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority',
      'Ireland (Revenue Commissioners)',
      'France (ANJ)',
      'Italy (ADM)',
      'Romania (ONJN)'
    ],
    fines: [
      {
        year: 2025,
        amount: '£650,000',
        reason: 'AML and Social Responsibility',
        note: 'Settlement following an investigation into over-reliance on financial triggers and slow identification of harm.'
      },
      {
        year: 2020,
        amount: '£748,000',
        reason: 'AML and Social Responsibility',
        note: 'Failures included not identifying customers at risk of money laundering or problem gambling.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'AI Bet Assistant',
      description: 'An AI-powered tool that uses natural language processing to help users find matches, check rules, and monitor for signs of distress.'
    },

    strengths: [
      {
        type: 'Product Variety',
        details: 'Comprehensive single-wallet access to Sports, Casino, Live Casino, Poker, and Lotto.'
      },
      {
        type: 'UFC Partnership',
        details: 'Official partner across UK and Europe; branding present in the Octagon and broadcast feeds.'
      },
      {
        type: 'Exclusive Tips',
        details: 'Ray Parlour (Arsenal legend) provides weekly expert analysis and exclusive promotions.'
      }
    ],

    weaknesses: [
      {
        type: 'Compliance Record',
        details: 'Recurring regulatory settlements (£1.4m total) suggest ongoing friction with UK standards.'
      },
      {
        type: 'Withdrawal Speed',
        details: 'Tests showed card withdrawals taking up to 3 days, lacking the instant payout tech of top-tier rivals.'
      },
      {
        type: 'Support Accessibility',
        details: 'Live chat can be difficult to access, often requiring navigation through extensive FAQ bots.'
      }
    ]
  },

  editorial: {
    tagline: 'Where Players Play',
    verdict: 'NetBet is a versatile digital operator that excels as a "one-stop-shop" for sports and gaming. Its AI Bet Assistant and official UFC tie-up give it a modern, tech-forward feel. While it lacks the heritage of high-street names, it compensates with unique products like Lotto and a highly-rated mobile app. However, users should be mindful of its regulatory history, which often leads to more frequent and rigid document verification requests than at other bookmakers.',
    
    bestFor: [
      'UFC and MMA fans',
      'Multi-product players (Poker/Lotto)',
      'Arsenal supporters (Ray Parlour tie-in)',
      'Mobile-first bettors'
    ],
    
    notIdealFor: [
      'High-stakes players (strict financial triggers)',
      'Punters expecting 2-hour withdrawals',
      'Those preferring human-led support'
    ],

    uniqueSellingPoints: [
      'Proprietary AI Bet Assistant',
      'Official European Sportsbook of the UFC',
      'Lotto betting integrated into the sportsbook',
      'Ambassador Ray Parlour’s "Invincible" insights'
    ],

    competitorComparison: 'Offers a broader variety than Virgin Bet or BetVictor due to its Lotto and Poker wings. Technology-wise it competes with 888sport, but trails bet365 in market depth and speed.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£40',
      withdrawalTime: '3 days',
    },

    supportTest: {
      channel: 'WhatsApp',
      responseTime: '10 minutes',
      note: 'WhatsApp support is convenient, but interaction with a human agent took several prompts.'
    }
  },

  partnerships: [
    { name: 'UFC', type: 'official_partner', years: 'Since 2025' },
    { name: 'Ray Parlour', type: 'ambassador', years: 'Since 2024' },
    { name: 'Bath Racecourse', type: 'official_partner', years: 'Since 2025' }
  ],

  interestingFacts: [
    'NetBet was the first major UK bookmaker to integrate OpenAI technology directly into their betting interface in 2024.',
    'Their "Up For 8" predictor game (now replaced) was one of the first free-to-play football games to gain mass UK popularity.',
    'A UK player won £2.85m on NetBet’s Golden Rally slot, one of the largest single payouts in the site\'s history.',
    'CEO Marcel Prioteasa has led the firm for over a decade, focusing heavily on European expansion.',
    'The 2025 fine revealed one customer was able to deposit £31,000 in just two days without a proactive check.'
  ],

  seo: {
    h1: 'NetBet Review 2026: AI Betting & UFC Partner Verdict',
    excerpt: 'Is NetBet safe and what is the AI Bet Assistant? Read our 2026 expert review covering the UFC partnership, withdrawal speeds, and Ray Parlour’s exclusive tips.',
    metaTitle: 'NetBet Review UK 2026 | UFC Betting & AI Assistant Analysis',
    metaDescription: 'Complete NetBet review for 2026. We test the AI Bet Assistant, examine the £650k UKGC fine history, and check withdrawal times (3 days). Professional expert verdict.',
    lastUpdated: '2026-01-18'
  }
};