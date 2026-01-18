// src/data/regions/gb/en/reviews/betfair.ts
import { BookmakerReview } from './types';

export const betfairReview: BookmakerReview = {
  bookmakerSlug: 'betfair',

  history: {
    foundedYear: 2000,
    foundedLocation: 'Wimbledon, London',
    originStory: `Betfair's founding story reads like a tech startup fairy tale — except it happened in betting. Andrew Black conceived the exchange idea in May 1998 while working as a software contractor at GCHQ (the UK's intelligence agency). His background was delightfully unconventional: grandson of Sir Cyril Black MP, a Conservative politician who ironically campaigned against gambling. Black himself was asked to leave the University of Exeter during his second year for spending more time at the bookmakers than attending lectures.

He teamed up with Edward Wray, a J.P. Morgan Vice President who left his banking career to join Black in a small Wimbledon office. Venture capitalists initially rejected them, so they raised £1 million from friends and family just before the dot-com crash. Their launch marketing was aggressive: a "Death to the Bookmaker" campaign featuring a New Orleans-style funeral procession through London.

Launch day on 9 June 2000 saw just £1,476 matched. Today, Betfair processes over 7 million transactions daily — at its peak processing more than all European stock exchanges combined. It revolutionised the industry by allowing punters to set their own odds and bet against each other.`,
    
    keyMilestones: [
      { year: 2000, event: 'Launched on Epsom Oaks Day; £1,476 matched on first market' },
      { year: 2001, event: 'Acquired rival exchange Flutter, securing 90% market share' },
      { year: 2003, event: 'Won Queen\'s Award for Enterprise (Innovation)' },
      { year: 2008, event: 'Won Queen\'s Award for Enterprise (International Trade) — rare double winner' },
      { year: 2010, event: 'IPO on London Stock Exchange valued at £1.4 billion' },
      { year: 2011, event: 'Voided all in-running bets on a Leopardstown race, saving £23m payout' },
      { year: 2016, event: 'Merged with Paddy Power to form Flutter Entertainment' },
      { year: 2024, event: 'Parent company Flutter moves primary listing to NYSE' }
    ],

    corporate: {
      parentCompany: 'Flutter Entertainment plc',
      isPublic: true,
      ticker: 'NYSE: FLUT / LSE: FLTR',
      hasRetailShops: false,
      retailNote: 'Exclusively online. Sister brand Paddy Power operates the retail estate.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority',
      'Gibraltar Gambling Commission',
      'Australia (Northern Territory)'
    ],
    fines: [
      {
        year: 2025,
        amount: '£2.0m',
        reason: 'Social responsibility failures',
        note: 'Customer allowed to gamble for nearly 8 hours without intervention.'
      },
      {
        year: 2023,
        amount: '£490,000',
        reason: 'Marketing compliance',
        note: 'Sent push notifications to devices linked to GAMSTOP self-excluded accounts.'
      },
      {
        year: 2018,
        amount: '£2.2m',
        reason: 'Anti-money laundering failures',
        note: 'Stolen funds from a charity were laundered through the Exchange.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'The Betting Exchange',
      description: 'Peer-to-peer betting platform allowing you to back (bet for) and lay (bet against) outcomes, setting your own odds.'
    },

    strengths: [
      {
        type: 'Odds Value',
        details: 'Exchange odds are typically 20% better than traditional bookmakers as you bet against other users, not a house margin.'
      },
      {
        type: 'Liquidity',
        details: 'Unmatched volume (7m+ daily transactions) ensures you can get large bets matched on major sports instantly.'
      },
      {
        type: 'Trading Capability',
        details: 'Only major site allowing true trading strategies (hedging, laying off risk) akin to financial markets.'
      },
      {
        type: 'Cash Out',
        details: 'Betfair invented this feature; it remains the most robust with Auto Cash Out options.'
      }
    ],

    weaknesses: [
      {
        type: 'Premium Charge',
        details: 'Highly successful long-term winners are charged up to 60% of profits, contradicting the "winners welcome" image.'
      },
      {
        type: 'Complexity',
        details: 'The Exchange interface has a steep learning curve compared to standard sportsbooks.'
      },
      {
        type: 'Commissions',
        details: 'Standard 5% commission on winnings can eat into margins for casual players (though often negotiable).'
      }
    ]
  },

  editorial: {
    tagline: 'Where the World Comes to Play',
    verdict: 'Betfair occupies a unique position in UK betting — it is genuinely different, not just another bookmaker with slightly different colours. The Exchange offers opportunities impossible elsewhere: laying horses you think won\'t win, trading in-play like a stock market, and consistently better odds. Yes, there is a learning curve, and the Premium Charge punishes the top 0.1% of winners. But for punters willing to learn, Betfair delivers value no competitor can match.',
    
    bestFor: [
      'Horse racing value seekers',
      'In-play traders',
      'Arbitrage bettors',
      'Sophisticated punters understanding "Lay" bets'
    ],
    
    notIdealFor: [
      'Beginners wanting simple bets',
      'Consistent high-volume winners (Premium Charge risk)',
      'Players preferring telephone support'
    ],

    uniqueSellingPoints: [
      '90% of UK Betting Exchange market share',
      'Ability to bet AGAINST outcomes (Laying)',
      'Odds typically 20% higher than traditional bookies',
      'Invented the Cash Out feature'
    ],

    competitorComparison: 'There is no direct competitor. Matchbook and Smarkets exist but lack Betfair\'s liquidity. For standard betting, bet365 is simpler, but Betfair Exchange remains essential for serious portfolios.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£75',
      withdrawalTime: '18 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '4 minutes',
      note: 'Agent was knowledgeable, but no telephone support option is a drawback.'
    }
  },

  partnerships: [
    { name: 'Betfair Chase (Haydock Park)', type: 'official_partner', years: 'Since 2005' },
    { name: 'CR Vasco da Gama', type: 'shirt' },
    { name: 'Cruzeiro Esporte Clube', type: 'shirt' }
  ],

  interestingFacts: [
    'Andrew Black developed the concept while working at GCHQ, utilizing his evenings after being "locked out" of the intelligence agency offices at 5pm.',
    'The "Death to the Bookmaker" launch campaign featured a funeral procession with a coffin through the streets of London.',
    'In 2011, Betfair voided all in-running bets on a race where a horse was laid at 28/1 after crossing the line, saving £23m but angering traders.',
    'The 2018 fine revealed that £900,000 stolen from the Birmingham Dogs Home charity had been laundered through the Exchange.',
    'Betfair won the Queen\'s Award for Enterprise twice (Innovation & International Trade), a rare corporate distinction.'
  ],

  seo: {
    h1: 'Betfair Review 2026: The World’s Leading Betting Exchange',
    excerpt: 'Is Betfair still the king of exchanges? Read our 2026 review on lay betting, commission structures, and how to avoid the Premium Charge.',
    metaTitle: 'Betfair Review UK 2026 | Exchange Trading & Expert Verdict',
    metaDescription: 'Complete Betfair review for 2026. We test exchange liquidity, back vs lay odds, and withdrawal speeds (18 hrs). Discover why Betfair remains a pro favorite.',
    lastUpdated: '2026-01-18'
  }
};