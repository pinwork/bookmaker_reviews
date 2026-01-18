// src/data/regions/gb/en/reviews/betvictor.ts
import { BookmakerReview } from './types';

export const betvictorReview: BookmakerReview = {
  bookmakerSlug: 'betvictor',

  history: {
    foundedYear: 1946,
    foundedLocation: 'London, UK',
    originStory: `BetVictor's heritage is rooted in the 1920s East London underworld. Founder William Chandler built the business while navigating gang territories famously depicted in "Peaky Blinders". His grandson, Victor Chandler Jr., revolutionised the industry in 1999 by moving the entire operation to Gibraltar to avoid UK betting tax — a bold "grey market" gamble that ultimately forced the UK government to abolish the tax for everyone in 2001.

Once known as "The Bookmaker to the Stars", the company was rebranded from 'Victor Chandler' to BetVictor in 2012. It is now owned by British billionaire Michael Tabor, maintaining its status as a private, independent operator with a strong focus on technology and competitive odds.`,
    
    keyMilestones: [
      { year: 1946, event: 'Formally established after William Chandler\'s death' },
      { year: 1999, event: 'Relocated to Gibraltar, becoming the first major "offshore" bookmaker' },
      { year: 2001, event: 'Credited with forcing the abolition of UK betting tax' },
      { year: 2012, event: 'Rebranded from Victor Chandler to BetVictor' },
      { year: 2014, event: 'Michael Tabor acquired full control of the company' },
      { year: 2022, event: 'Paid £2m regulatory settlement for historical compliance failures' },
      { year: 2025, event: 'UKGC licence cleared; clean regulatory record since 2022' }
    ],

    corporate: {
      parentCompany: 'BVGroup',
      isPublic: false,
      hasRetailShops: false,
      retailNote: 'Exclusively online. The original shop estate was sold during the move to Gibraltar.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner',
      'Ireland Revenue Commissioners',
      'Ontario (AGCO)'
    ],
    fines: [
      {
        year: 2022,
        amount: '£2.06m',
        reason: 'AML and Social Responsibility',
        note: 'Failures included inadequate checks on high-spending VIPs. Breaches were fully remedied, and the operator has had a clean record since.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'BV Loyalty Club',
      description: 'Opt-in promotion giving free bets ranging from £1 to £25 weekly based on your activity, without complex wagering hurdles.'
    },

    strengths: [
      {
        type: 'Snooker & Darts',
        details: 'Unrivalled coverage as title sponsor of the Home Nations Series and World Cup of Darts.'
      },
      {
        type: 'Odds Quality',
        details: 'Competitive pricing is in the brand\'s DNA; frequently top-price on Premier League accumulators.'
      },
      {
        type: 'Interface',
        details: 'One of the cleanest, fastest interfaces in the industry. No clutter, just betting.'
      }
    ],

    weaknesses: [
      {
        type: 'Streaming',
        details: 'Limited compared to bet365; focuses mainly on horse racing with less general sports coverage.'
      },
      {
        type: 'Support Hours',
        details: 'Customer support is not 24/7; late-night queries may wait until morning.'
      },
      {
        type: 'Promotions',
        details: 'Fewer daily "gimmick" offers than Paddy Power or Sky Bet; focuses on core value instead.'
      }
    ]
  },

  editorial: {
    tagline: 'A World of Entertainment',
    verdict: 'BetVictor is the "gentleman" of online betting — polished, professional, and efficient. It lacks the loud personality of Paddy Power or the endless features of bet365, but compensates with arguably the cleanest app interface on the market and consistently excellent odds. It is the definitive choice for snooker and darts fans due to its massive sponsorship portfolio. If you want a no-nonsense betting experience where the app just works, BetVictor is hard to beat.',
    
    bestFor: [
      'Snooker & Darts fans',
      'Football accumulator bettors',
      'Mobile-first players',
      'Those who dislike cluttered interfaces'
    ],
    
    notIdealFor: [
      'Players seeking 24/7 support',
      'Stream-heavy bettors',
      'Bonus hunters looking for daily free-to-play games'
    ],

    uniqueSellingPoints: [
      'Guinness World Record holder for "First Offshore Bookmaker"',
      'Title sponsor of major Snooker & Darts tournaments',
      'Cleanest UI in the UK market',
      'Independent ownership (BVGroup)'
    ],

    competitorComparison: 'Cleaner and faster than William Hill or Ladbrokes. Less feature-rich than bet365, but often offers better value odds on top-tier football.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£50',
      withdrawalTime: '24 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '3 minutes',
      note: 'Chat is efficient but not available 24/7, which is a drawback for late-night events.'
    }
  },

  partnerships: [
    { name: 'World Snooker Tour', type: 'official_partner', years: 'Title Sponsor' },
    { name: 'PDC World Cup of Darts', type: 'official_partner' },
    { name: 'Canadian Elite Basketball', type: 'official_partner' }
  ],

  interestingFacts: [
    'Victor Chandler Jr. once owned a portrait of himself painted by Lucian Freud, which he sold for £4.5 million in 2006.',
    'The company is credited with killing the UK betting tax. By moving to Gibraltar in 1999, they forced the Chancellor to abolish the tax to save the British industry.',
    'Founder William Chandler operated in 1920s London, navigating the territory of the real-life Peaky Blinders gangs.',
    'Originally known as "The Bookmaker to the Stars" due to its high-roller clientele in Mayfair clubs.',
    'Held the first-ever gambling license issued by Gibraltar (License No. 001).'
  ],

  seo: {
    h1: 'BetVictor Review 2026: The "Gentleman" of UK Betting Tested',
    excerpt: 'Is BetVictor still the best for snooker, darts, and clean app design? Read our 2026 expert review covering the BV Loyalty Club and withdrawal speeds.',
    metaTitle: 'BetVictor Review UK 2026 | Snooker & Darts Betting Analysis',
    metaDescription: 'Expert BetVictor review for 2026. We test the clean app interface, withdrawal times (24 hrs), and snooker betting value. Discover why it’s a pro favorite.',
    lastUpdated: '2026-01-18'
  }
};