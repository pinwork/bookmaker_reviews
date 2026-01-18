import { BookmakerReview } from './types';

export const betwayReview: BookmakerReview = {
  bookmakerSlug: 'betway',

  history: {
    foundedYear: 2006,
    foundedLocation: 'Malta',
    originStory: `Betway emerged in 2006 as a digital-native bookmaker, built exclusively for the online era without the legacy retail estate of competitors like William Hill or Ladbrokes. Founded in Malta with early backing from investor Martin Moshal and Richard Akitt, the company operated somewhat opaquely in its early years before finding its stride under The Palace Group in 2011.

The brand's modern era is defined by aggressive sponsorship and corporate maturation. Under CEO Anthony Werkman, Betway built a massive portfolio including a decade-long partnership with West Ham United. In 2022, the parent company, Super Group (SGHC), went public on the New York Stock Exchange via a SPAC merger, transforming Betway into a transparent, publicly traded global heavyweight.`,
    
    keyMilestones: [
      { year: 2006, event: 'Founded as an online-only operator in Malta' },
      { year: 2014, event: 'Granted UK Gambling Commission licence' },
      { year: 2015, event: 'Began 10-year West Ham United front-of-shirt sponsorship (£100m total value)' },
      { year: 2015, event: 'Punter Jon Heywood won Guinness World Record €17.8m jackpot on Mega Moolah' },
      { year: 2020, event: 'Paid record £11.6m UKGC fine for VIP source-of-funds failures' },
      { year: 2022, event: 'Parent company Super Group listed on NYSE (Ticker: SGHC)' },
      { year: 2024, event: 'Secured partnerships with Manchester City, Arsenal, and Chelsea' },
      { year: 2025, event: 'Ended West Ham partnership amid Lucas Paquetá betting integrity case' }
    ],

    corporate: {
      parentCompany: 'Super Group (SGHC) Limited',
      isPublic: true,
      ticker: 'NYSE: SGHC',
      hasRetailShops: false,
      retailNote: 'Digital-native operator with no high-street presence.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Malta Gaming Authority (MGA)',
      'Ontario (iGaming Ontario)',
      'South Africa',
      'Belgium',
      'Ireland',
      'Denmark',
      'Italy',
      'Spain'
    ],
    fines: [
      {
        year: 2022,
        amount: '£408,915',
        reason: 'Marketing to children',
        note: 'Logo appeared on West Ham\'s "Young Hammers" children\'s webpages.'
      },
      {
        year: 2020,
        amount: '£11.6m',
        reason: 'AML and Social Responsibility',
        note: 'Accepted £8m in deposits from a VIP without source-of-funds checks; £5.8m of the fine was divested to victims.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Esports Betting Pioneer',
      description: 'The first major bookmaker to launch a dedicated esports portal, offering unmatched market depth on CS2, LoL, and Dota 2.'
    },

    strengths: [
      {
        type: 'Premier League Presence',
        details: 'Partnerships with 7 clubs (including Man City & Arsenal) ensure massive brand visibility and exclusive promos.'
      },
      {
        type: 'Jackpot Heritage',
        details: 'Home of the world record online slot jackpot (€17.8m); strong "Vegas" product integration.'
      },
      {
        type: 'Cricket Markets',
        details: 'Extensive prop bets on cricket (player runs, wickets) backed by ambassador Kevin Pietersen.'
      }
    ],

    weaknesses: [
      {
        type: 'Compliance History',
        details: 'The £11.6m fine for failing to check VIP funds remains a significant mark on their record.'
      },
      {
        type: 'Odds Quality',
        details: 'Often mid-market pricing compared to aggressive competitors; rarely the absolute best price.'
      },
      {
        type: 'Streaming',
        details: 'Live streaming availability is decent but lacks the breadth of bet365.'
      }
    ]
  },

  editorial: {
    tagline: 'For the Love of the Game',
    verdict: 'Betway is a global powerhouse that excels in specific niches. It is arguably the best betting site for Esports fans, thanks to a decade of dedicated investment in the sector. The sponsorship portfolio — covering Arsenal, Man City, and Chelsea — gives it premier status. However, the shadow of a record-breaking £11.6m fine for AML failures hangs over the brand, even if they have since listed on the NYSE and improved compliance. A solid, safe choice for mainstream sports and esports, but value-hunters might find better odds elsewhere.',
    
    bestFor: [
      'Esports bettors (CS2, LoL, Valorant)',
      'Cricket fans',
      'Premier League followers',
      'Jackpot slots players'
    ],
    
    notIdealFor: [
      'Punters seeking the absolute highest odds',
      'Those concerned by historical regulatory lapses',
      'Fans of niche sports streaming'
    ],

    uniqueSellingPoints: [
      'Dedicated Esports betting portal (First in industry)',
      'NYSE-listed parent company (Super Group)',
      'Record-holding online slot jackpot (€17.8m)',
      'Massive Premier League sponsorship footprint'
    ],

    competitorComparison: 'Superior to all traditional bookies for Esports. Less "British" in feel than William Hill or Ladbrokes. A reliable corporate giant, similar to 888sport but with better sports visibility.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Visa Debit',
      amount: '£50',
      withdrawalTime: '24-48 hours',
    },

    supportTest: {
      channel: 'Live Chat',
      responseTime: '3 minutes',
      note: 'Support is generally efficient but can be bureaucratic regarding documents.'
    }
  },

  partnerships: [
    { name: 'Arsenal FC', type: 'official_partner', years: 'Since 2023' },
    { name: 'Manchester City', type: 'official_partner', years: 'Since 2024' },
    { name: 'Ninjas in Pyjamas (Esports)', type: 'official_partner' },
    { name: 'Queen Mother Champion Chase', type: 'official_partner', years: 'Since 2015' }
  ],

  interestingFacts: [
    'In 2015, British soldier Jon Heywood won €17,879,645 on the Mega Moolah slot at Betway — a Guinness World Record. He had opened his account just 25 minutes earlier.',
    'Betway reported its own partner, West Ham player Lucas Paquetá, to integrity bodies for suspicious betting patterns, prioritising compliance over commercial ties.',
    'The 2020 fine of £11.6m was for allowing "VIPs" to deposit millions of stolen money. One customer deposited £8m and lost £4m without source-of-funds checks.',
    'Super Group Chairman Eric Grubman is a former Executive VP of the NFL, bringing US sports expertise to the board.',
    'Betway sponsored West Ham United for 10 years (2015-2025), paying an estimated £100m over the decade.'
  ],

  seo: {
    h1: 'Betway Review 2026: The Global King of Esports Betting',
    excerpt: 'Is Betway still the number one choice for esports and Premier League fans? Read our 2026 review covering their dedicated portals, app performance, and recent testing.',
    metaTitle: 'Betway Review UK 2026 | Esports, Free Bets & Expert Analysis',
    metaDescription: 'Complete Betway review for 2026. We test withdrawal speeds (24-48 hrs), examine the record-breaking €17.8m jackpot history, and analyze the £11.6m regulatory fine.',
    lastUpdated: '2026-01-18'
  }
};