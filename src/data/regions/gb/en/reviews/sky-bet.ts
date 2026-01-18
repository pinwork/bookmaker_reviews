import { BookmakerReview } from './types';

export const skyBetReview: BookmakerReview = {
  bookmakerSlug: 'sky-bet',

  history: {
    foundedYear: 2002,
    foundedLocation: 'Harrogate, UK',
    originStory: `Sky Bet's journey is a masterclass in combining broadcasting power with technology. It started when BSkyB purchased Sports Internet Group in 2000 for £301 million. After a failed venture with Ladbrokes, the brand officially launched as Sky Bet in 2002. 

The real turning point came in 2007 when the company shifted focus from interactive TV betting to online and mobile platforms. This tech-first approach led to the creation of 'Super 6', which became a cultural phenomenon. After being owned by CVC Capital Partners and later The Stars Group, Sky Bet became part of the Flutter Entertainment family in 2020. In late 2025, the company controversially moved its headquarters to Malta to optimize tax costs, though it maintains a massive operational hub in Leeds.`,
    
    keyMilestones: [
      { year: 2000, event: 'BSkyB acquires Sports Internet Group' },
      { year: 2002, event: 'Surrey Sports rebrands to Sky Bet' },
      { year: 2009, event: 'Launch of the free-to-play Super 6 game' },
      { year: 2013, event: 'Began historic EFL title sponsorship' },
      { year: 2018, event: 'Acquired by The Stars Group for £3.4 billion' },
      { year: 2020, event: 'Merged into Flutter Entertainment' },
      { year: 2025, event: 'Headquarters officially relocated to Malta' }
    ],

    corporate: {
      parentCompany: 'Flutter Entertainment plc',
      isPublic: true,
      ticker: 'NYSE: FLUT',
      hasRetailShops: false,
      retailNote: 'Exclusively online. Built as a digital-first brand with no high-street heritage.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority',
      'Alderney Gambling Control Commission'
    ],
    fines: [
      {
        year: 2022,
        amount: '£1.17m',
        reason: 'Marketing to self-excluded customers',
        note: 'Sent promotional emails to over 41,000 customers who had opted out or self-excluded.'
      },
      {
        year: 2018,
        amount: '£1.0m',
        reason: 'Self-exclusion failures',
        note: 'Failed to prevent self-excluded users from opening duplicate accounts.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'AccaFreeze',
      description: 'A market-first feature that allows you to "freeze" a winning leg of your accumulator in-play, guaranteeing a win for that leg regardless of the final score.'
    },

    strengths: [
      {
        type: 'Super 6',
        details: 'The most popular free-to-play game in the UK, frequently offering £1m jackpots.'
      },
      {
        type: 'EFL Integration',
        details: 'Unmatched markets and boosts for Championship, League 1, and League 2 as title sponsors.'
      },
      {
        type: 'Sky Bet Club',
        details: 'Flexible loyalty scheme where users choose their own weekly rewards (Free Bets, Spins, etc.).'
      },
      {
        type: 'RequestABet',
        details: 'Pioneered the customized bet market; huge depth in player props and stats.'
      }
    ],

    weaknesses: [
      {
        type: 'Odds Margins',
        details: 'Football margins are often around 6%, which is higher (worse for punter) than bet365 or exchanges.'
      },
      {
        type: 'Streaming',
        details: 'Strong on Horse Racing but lacks the depth of international football streaming found at bet365.'
      },
      {
        type: 'Support',
        details: 'Reliance on automated bots makes it harder to reach a human agent for complex issues.'
      }
    ]
  },

  editorial: {
    tagline: 'Not for Everyone. For the Fans',
    verdict: 'Sky Bet is arguably the best "recreational" bookmaker in the UK. They don\'t try to compete on the absolute best odds; instead, they win on features, fun, and football integration. AccaFreeze is a genuine game-changer that solves the "late equaliser" frustration. If you are a fan of English football (especially the EFL) and enjoy free-to-play games like Super 6, Sky Bet should be your primary account. However, serious value hunters will find better raw prices on the exchanges.',
    
    bestFor: [
      'Football Accumulator bettors',
      'EFL fans',
      'Casual players (Super 6)',
      'Mobile-first users'
    ],
    
    notIdealFor: [
      'Professional value hunters',
      'High-stakes bettors (Aggressive limitations)',
      'International sports streaming'
    ],

    uniqueSellingPoints: [
      'AccaFreeze (Unique protective feature)',
      'Super 6 (Best-in-class free game)',
      'Official EFL Title Sponsor',
      'Sky Bet Club (Reward flexibility)'
    ],

    competitorComparison: 'Superior to All Out Football sponsors but less "fun" than Paddy Power. More tech-forward than William Hill. Trails bet365 on streaming and market depth.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Fast Funds',
      amount: '£50',
      withdrawalTime: '2 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '4 minutes',
      note: 'Bot is persistent, but once you reach a human, they are very helpful.'
    }
  },

  partnerships: [
    { name: 'EFL', type: 'official_partner', years: 'Title Sponsor until 2029' },
    { name: 'The Overlap (Gary Neville)', type: 'official_partner' },
    { name: 'York Racecourse', type: 'official_partner' }
  ],

  interestingFacts: [
    'Sky Bet and bet365 are tied for the highest account penetration in the UK (36% of bettors have an account).',
    'Super 6 was originally created to get around restrictions on mentioning betting during Sky Sports broadcasts.',
    'The "AccaFreeze" feature even protects you if a goal is later overturned by VAR, provided you froze it in time.',
    'Moving to Malta in 2025 saved the company an estimated £55 million per year in tax.',
    'CVC Capital Partners made a 9x return on their investment in Sky Bet within just three years.'
  ],

  seo: {
    h1: 'Sky Bet Review 2026: AccaFreeze & EFL Betting Verdict',
    excerpt: 'Is Sky Bet still the king of recreational betting? Read our 2026 review on AccaFreeze, Super 6 jackpots, and their leading mobile app experience.',
    metaTitle: 'Sky Bet Review UK 2026 | Free Bets & AccaFreeze Analysis',
    metaDescription: 'Comprehensive Sky Bet review for 2026. We test the new AccaFreeze feature, withdrawal speeds (2 hrs), and Super 6 performance. Honest expert verdict.',
    lastUpdated: '2026-01-18'
  }
};