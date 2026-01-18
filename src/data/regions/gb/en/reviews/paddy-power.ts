// src/data/regions/gb/en/reviews/paddy-power.ts
import { BookmakerReview } from './types';

export const paddyPowerReview: BookmakerReview = {
  bookmakerSlug: 'paddy-power',

  history: {
    foundedYear: 1988,
    foundedLocation: 'Dublin, Ireland',
    originStory: `Paddy Power's origin is a tale of Irish defiance. In 1988, three independent Dublin bookmakers—Stewart Kenny, David Power, and John Corcoran—merged their 40 shops to create a brand strong enough to fight off the "British invasion" of Ladbrokes and Coral. The name was chosen from David Power's son (actually named Paddy Power) to sound unmistakably Irish and convey strength.

Under the vision of John Corcoran, the company adopted a strategy of "mischief marketing," using controversy and humour to gain global attention. In 2016, it merged with Betfair to form a giant that eventually rebranded as Flutter Entertainment—now the world's largest online gambling company listed on the NYSE. Despite its massive scale, it retains its irreverent "anti-establishment" persona.`,
    
    keyMilestones: [
      { year: 1988, event: 'Founded via merger of three Irish bookmakers' },
      { year: 2002, event: 'Expanded into the UK market' },
      { year: 2010, event: 'Acquired Sportsbet Australia' },
      { year: 2014, event: 'Oscar Pistorius ad generates record 5,525 complaints' },
      { year: 2016, event: 'Merged with Betfair to form Paddy Power Betfair' },
      { year: 2024, event: 'Parent company Flutter moves primary listing to NYSE' },
      { year: 2025, event: 'Announced closure of 57 shops in UK & Ireland' }
    ],

    corporate: {
      parentCompany: 'Flutter Entertainment plc',
      isPublic: true,
      ticker: 'NYSE: FLUT',
      hasRetailShops: true,
      retailNote: 'Operates approx. 600 shops, though the estate is shrinking with recent closures announced in 2025.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority',
      'Ireland (Revenue Commissioners)',
      'Australia (Northern Territory)'
    ],
    fines: [
      {
        year: 2025,
        amount: '£2.0m',
        reason: 'Social Responsibility',
        note: 'Systems failed to identify a customer who staked £86k in 16 days without review.'
      },
      {
        year: 2018,
        amount: '£2.2m',
        reason: 'AML and Social Responsibility',
        note: 'Allowed a charity CEO to gamble £900k of stolen funds without adequate checks.'
      },
      {
        year: 2023,
        amount: '£490,000',
        reason: 'Marketing to Self-Excluded',
        note: 'Accidentally sent push notifications to GAMSTOP users.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Money Back Specials',
      description: 'The "Home of the Money Back Special" refunds stakes as free bets on near-misses (e.g., if your horse finishes 2nd to the favourite) more generously than anyone else.'
    },

    strengths: [
      {
        type: 'App Experience',
        details: 'Rated 4.7/5 on iOS; widely considered the benchmark for speed and UX alongside bet365.'
      },
      {
        type: 'Marketing & Fun',
        details: 'Unique "Mischief Marketing" and novelty bets (politics, TV) make the experience entertaining.'
      },
      {
        type: 'Bet Builder',
        details: 'Excellent interface for combining markets, often central to their "Bet £5 Get £30" offers.'
      },
      {
        type: 'Cash Out',
        details: 'Paddy Power (with Betfair) invented Cash Out, and it remains the smoothest implementation.'
      }
    ],

    weaknesses: [
      {
        type: 'Controversy',
        details: 'Their marketing stunts (e.g., Oscar Pistorius, Rainforest) often cross lines that offend some users.'
      },
      {
        type: 'Compliance Record',
        details: 'Over £5m in fines since 2016 indicates recurring issues with player protection.'
      },
      {
        type: 'Odds Value',
        details: 'Standard pricing; rarely the absolute market leader on raw odds compared to exchanges.'
      }
    ],
  },

  editorial: {
    tagline: 'You Beauty!',
    verdict: 'Paddy Power is the only bookmaker with a genuine personality. You either love their "banter" or you hate it, but their product is undeniably top-tier. The app is incredibly fast, the "Money Back" promos are genuinely valuable (13m free bets issued in 2025), and they cover novelty markets that others won\'t touch. However, behind the clown mask is a massive corporate machine (Flutter) that has faced significant fines for failing to protect vulnerable players. Great for fun, casual betting, but keep your eyes open regarding responsible gambling tools.',
    
    bestFor: [
      'Mobile-first bettors',
      'Fans of novelty/political betting',
      'Bonus hunters (Money Back Specials)',
      'Bet Builder enthusiasts'
    ],
    
    notIdealFor: [
      'Those offended by controversial ads',
      'Professional value hunters (use the Exchange instead)',
      'Retail customers in closing shop locations'
    ],

    uniqueSellingPoints: [
      'Industry leader in "Novelty Betting"',
      'Invented the "Cash Out" feature',
      'Massive social media presence & brand personality',
      'Part of the world\'s largest gambling company (Flutter)'
    ],

    competitorComparison: 'More fun than bet365, but with slightly less market depth. Identical odds to Betfair Sportsbook (sister brand). Offers more "insurance" style promos than Sky Bet.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'PayPal',
      amount: '£50',
      withdrawalTime: '4 hours',
    },

    supportTest: {
      channel: 'Twitter (@AskPaddyPower)',
      responseTime: '15 minutes',
      note: 'Social support is excellent; Live Chat is fast but often starts with a bot.'
    }
  },

  partnerships: [
    { name: 'PDC World Darts', type: 'official_partner', years: 'Since 2022' },
    { name: 'NFL UK', type: 'official_partner', years: 'Since 2025' },
    { name: 'Cheltenham Festival', type: 'official_partner', years: 'Gold Cup Sponsor' }
  ],

  interestingFacts: [
    'The "Money Back if He Walks" ad regarding the Oscar Pistorius trial generated a record 5,525 complaints to the ASA.',
    'Co-founder Stewart Kenny resigned in 2016 citing the board\'s refusal to do enough about gambling addiction.',
    'Paddy Power paid a €100k fine for Nicklas Bendtner when he revealed Paddy Power underwear after scoring at Euro 2012.',
    'The 2019 "Save Our Shirt" campaign was a hoax that tricked the media into thinking Huddersfield Town had a giant sash logo, promoting "unsponsored" shirts.',
    'Trustpilot rating of 3.8/5 is significantly higher than major rivals like bet365 and William Hill (approx 1.2/5).'
  ],

  seo: {
    h1: 'Paddy Power Review 2026: Money Back Specials & App Verdict',
    excerpt: 'Is the "Home of the Money Back Special" still king of fun betting? Read our 2026 review on the 4.7-star app, withdrawal speeds, and controversial marketing.',
    metaTitle: 'Paddy Power Review UK 2026 | Free Bets & Expert Analysis',
    metaDescription: 'Complete Paddy Power review for 2026. We test the legendary Money Back Specials, the industry-leading mobile app, and analyze their compliance record. Honest expert verdict.',
    lastUpdated: '2026-01-18'
  }
};