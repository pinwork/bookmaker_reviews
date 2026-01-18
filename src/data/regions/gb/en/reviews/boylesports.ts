import { BookmakerReview } from './types';

export const boyleSportsReview: BookmakerReview = {
  bookmakerSlug: 'boylesports',

  history: {
    foundedYear: 1982,
    foundedLocation: 'Markethill, County Armagh',
    originStory: `BoyleSports' origin story is pure underdog triumph. John Boyle was born in County Armagh, one of seven children. By his mid-twenties, he was struggling with alcohol and had just been sacked from his job as a bread van driver. That dismissal proved to be the turning point.

With £6,000 borrowed from his father and a £12,000 bank loan, the 25-year-old opened his first betting shop in Markethill in 1982. He worked the single shop alone for seven years, later admitting he was "bored and depressed" but used the time to perfect customer service. Expansion finally began in 1989 when he crossed the border into the Republic of Ireland. Today, BoyleSports is Ireland's largest independent bookmaker and is aggressively expanding into the UK, remaining 100% family-owned.`,
    
    keyMilestones: [
      { year: 1982, event: 'First shop opens in Markethill, Northern Ireland' },
      { year: 1989, event: 'Entered Republic of Ireland market with 5 shops in Drogheda' },
      { year: 2011, event: 'Acquired 17 Celtic Bookmakers and 15 William Hill Ireland shops' },
      { year: 2020, event: 'Acquired 33 William Hill shops in Northern Ireland' },
      { year: 2020, event: 'Fined £2.8m by UKGC for AML failures' },
      { year: 2025, event: 'Announced massive £100m+ UK expansion plan and West Ham sponsorship' }
    ],

    corporate: {
      parentCompany: 'BoyleSports Enterprise',
      isPublic: false,
      hasRetailShops: true,
      retailNote: 'Operates 380+ shops across Ireland and the UK, with plans to open 200+ more UK locations by 2028.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner',
      'Ireland (Revenue Commissioners)'
    ],
    fines: [
      {
        year: 2020,
        amount: '£2.8m',
        reason: 'Anti-money laundering failures',
        note: 'Failures in risk assessment implementation. Resulted in new strict AML training requirements for senior management.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'GAA & Irish Racing Expertise',
      description: 'Unmatched market depth on Gaelic Football, Hurling, and Irish Horse Racing that UK-centric bookies often ignore.'
    },

    strengths: [
      {
        type: 'Early Payout',
        details: '2 Goals Ahead Early Payout on football, plus similar offers for Boxing (Knockdown) and Basketball.'
      },
      {
        type: 'Retail Integration',
        details: 'BoyleXtra card allows depositing/withdrawing cash in 380+ shops and using it online.'
      },
      {
        type: 'Acca Rewards',
        details: 'Choice between "Acca Boost" (extra winnings) or "Acca Insurance" (money back if one leg loses) on every accumulator.'
      }
    ],

    weaknesses: [
      {
        type: 'Streaming',
        details: 'Heavily focused on racing and greyhounds; lacks the football/tennis coverage of bet365.'
      },
      {
        type: 'Odds Quality',
        details: 'Football odds are generally mid-market; the value is mostly found in niche Irish markets.'
      },
      {
        type: 'Interface',
        details: 'The desktop site can feel cluttered compared to modern minimal competitors like BetVictor.'
      }
    ],
  },

  editorial: {
    tagline: 'Back Yourself',
    verdict: 'BoyleSports is the premier choice for anyone interested in Irish sport. If you bet on GAA or Irish racing, their market depth and knowledge are superior to any UK rival. For the general punter, the "2 Goals Ahead" early payout and solid mobile app make them a very capable alternative to the big corporate brands. Being 100% family-owned gives them a distinct personality, and their retail presence is a huge plus for those who prefer cash.',
    
    bestFor: [
      'GAA (Hurling/Football) fans',
      'Irish Horse Racing bettors',
      'Cash players (380+ shops)',
      'Accumulator fans (Acca Insurance/Boost)'
    ],
    
    notIdealFor: [
      'Live streaming of international football',
      'Professional traders seeking exchange-level odds',
      'Players who prefer minimal, simple interfaces'
    ],

    uniqueSellingPoints: [
      'Ireland\'s largest independent bookmaker',
      'Unrivalled GAA betting coverage',
      'Physical shops for cash withdrawals',
      'Early Payouts on multiple sports (Football, NFL, NBA)'
    ],

    competitorComparison: 'BoyleSports is the "Irish bet365" but with a human face. They beat Paddy Power on racing odds consistency but trail slightly on marketing creativity. Compared to William Hill, their app feels faster and more modern.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Direct',
      amount: '£40',
      withdrawalTime: '4 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: 'Instant',
      note: '24/7 support availability is a major plus; agents were knowledgeable about GAA rules.'
    }
  },

  partnerships: [
    { name: 'West Ham United', type: 'official_partner', years: 'Since 2025' },
    { name: 'Newcastle United', type: 'official_partner', years: 'Since 2021' },
    { name: 'Irish Grand National', type: 'official_partner', years: 'Since 2014' }
  ],

  interestingFacts: [
    'Founder John Boyle started the empire after being sacked as a bread van driver.',
    'BoyleSports attempted to buy the UK Tote in 2005 but lost out to Betfred.',
    'Their "Nailed On Bonus" Easter ad campaign featuring a hand nailed to a cross was banned for causing serious offence.',
    'The company remains 100% family-owned, with John Boyle\'s three daughters holding senior executive positions.',
    'Was the first bookmaker to sponsor a GAA county team (Louth), defying the association\'s historical anti-gambling stance.'
  ],

  seo: {
    h1: 'BoyleSports Review 2026: Ireland’s Top Independent Bookmaker Tested',
    excerpt: 'Is BoyleSports the best choice for GAA and Irish racing? Read our 2026 expert review covering withdrawal speeds (4 hrs), retail features, and acca rewards.',
    metaTitle: 'BoyleSports Review UK 2026 | GAA Betting & Expert Analysis',
    metaDescription: 'Complete BoyleSports review for 2026. We test the BoyleXtra retail integration, GAA market depth, and "2 Goals Ahead" early payouts. Honest expert verdict.',
    lastUpdated: '2026-01-18'
  }
};