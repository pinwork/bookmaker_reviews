// src/data/regions/gb/en/reviews/virgin-bet.ts
import { BookmakerReview } from './types';

export const virginBetReview: BookmakerReview = {
  bookmakerSlug: 'virgin-bet',

  history: {
    foundedYear: 2019,
    foundedLocation: 'Gibraltar / London',
    originStory: `Virgin Bet is the product of Irish tech entrepreneur Noel Hayden's vision. Hayden, who taught himself to code on a Tandy TRS80 as a teenager in Drogheda, built the Gamesys empire before demerging the LiveScore Group (which includes Virgin Bet) in 2019. 

Though it uses the iconic Richard Branson branding via a trademark license, the company is independently operated by LiveScore Group. A common industry myth is that it was part of the $2.7bn Bally's acquisition of Gamesys in 2021—in reality, Virgin Bet was carved out months before that deal. Since launch, it has pivoted from a "challenger" to a serious Tier-1 contender, recently migrating its entire tech stack to Kambi in 2024 to offer a more robust, professional betting experience.`,
    
    keyMilestones: [
      { year: 2019, event: 'Virgin Bet launches as a digital-first sportsbook' },
      { year: 2021, event: 'Named "Rising Star in Sports Betting" at SBC Awards' },
      { year: 2022, event: 'Ringier AG invests £50m for a 10% stake in the group' },
      { year: 2024, event: 'Migrated platform to Kambi technology' },
      { year: 2024, event: 'Virgin Group officially joins as a minority shareholder' },
      { year: 2025, event: 'Launched major sponsorship with TNT Sports for UEFA Europa League' }
    ],

    corporate: {
      parentCompany: 'LiveScore Group (Anzo Group)',
      isPublic: false,
      hasRetailShops: false,
      retailNote: 'Exclusively online. No retail footprint ever existed for this brand.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner'
    ],
    fines: []
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Virgin Bet FIVES',
      description: 'The industry\'s most popular free-to-play game where you reveal 5 players a week and earn real, withdrawable cash for every goal they score. No wagering requirements.'
    },

    strengths: [
      {
        type: 'Free-to-Play Value',
        details: 'FIVES pays out real cash, not just free bets, which is a massive differentiator for acquisition.'
      },
      {
        type: 'Horse Racing',
        details: 'Best Odds Guaranteed from 10am and extensive sponsorship of tracks like Ayr and Goodwood.'
      },
      {
        type: 'In-Play Tech',
        details: 'Post-Kambi migration, the live betting speed and market depth are now top-tier (#2 in UK by some rankings).'
      },
      {
        type: 'Compliance Record',
        details: 'One of the few major operators with a completely clean UKGC record (zero fines).'
      }
    ],

    weaknesses: [
      {
        type: 'Payment Methods',
        details: 'Limited to Visa, Mastercard, and PayPal; lacks the diversity of bet365 or Ladbrokes.'
      },
      {
        type: 'Odds Pricing',
        details: 'Margins are mid-market (~4.5% margin); rarely offers the absolute top price on outsiders.'
      },
      {
        type: 'Profitability',
        details: 'Parent company LiveScore Group remains in a heavy investment phase, posting significant annual losses.'
      }
    ]
  },

  editorial: {
    tagline: 'A Good Bet',
    verdict: 'Virgin Bet is a breath of fresh air in an industry of aging giants. It feels modern, the app is incredibly fast (especially since the Kambi move), and "FIVES" is arguably the best free-to-play game on the market because it pays actual cash. While it lacks the massive live-streaming library of bet365, it covers the essentials well. Most importantly, it is one of the few "clean" operators with no regulatory fines, making it a very safe bet for the average punter.',
    
    bestFor: [
      'Casual bettors (FIVES game)',
      'Horse Racing enthusiasts',
      'In-play football bettors',
      'Those seeking a clean regulatory record'
    ],
    
    notIdealFor: [
      'Professional value hunters (Mid-range odds)',
      'Users wanting niche payment methods (Crypto/E-wallets)',
      'Streaming-only users'
    ],

    uniqueSellingPoints: [
      'Virgin Bet FIVES (Real cash prizes)',
      'Clean UKGC Record (Zero Fines)',
      'Powered by Kambi (World-class tech)',
      'TNT Sports Partnership'
    ],

    competitorComparison: 'Punches well above its weight against Tier-2 rivals like BetVictor. Less complex than bet365 but offers a better "free game" experience than Sky Bet.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'PayPal / Apple Pay',
      amount: '£50',
      withdrawalTime: 'Under 12 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '3 minutes',
      note: 'Very polite and efficient; they actually handle queries without the "template" feel of bigger rivals.'
    }
  },

  partnerships: [
    { name: 'TNT Sports', type: 'official_partner', years: 'Since 2025' },
    { name: 'Ayr Gold Cup', type: 'official_partner', years: 'Title Sponsor' },
    { name: 'Goodwood Racecourse', type: 'official_partner' }
  ],

  interestingFacts: [
    'Founder Noel Hayden demerged the company from Gamesys just before it was sold for billions to Bally\'s.',
    'Virgin Bet FIVES pays out real cash with zero wagering requirements.',
    'The company is headquartered in the World Trade Center in Gibraltar.',
    'Despite the Virgin branding, Richard Branson is only a minority shareholder as of late 2024.',
    'Virgin Bet and LiveScore Bet share the same backend, but often run different exclusive promotions.'
  ],

  seo: {
    h1: 'Virgin Bet Review 2026: Expert Verdict & FIVES Game Analysis',
    excerpt: 'Is Virgin Bet the best modern bookmaker in the UK? Read our 2026 review covering the cash-paying FIVES game, Kambi-powered app, and clean regulatory record.',
    metaTitle: 'Virgin Bet Review UK 2026 | Free Bets, FIVES & Expert Verdict',
    metaDescription: 'Detailed Virgin Bet review for 2026. We test the FIVES cash game, new Kambi tech migration, and withdrawal speeds (under 12 hrs). See why it has zero UKGC fines.',
    lastUpdated: '2026-01-18'
  }
};