// src/data/regions/gb/en/reviews/ladbrokes.ts
import { BookmakerReview } from './types';

export const ladbrokesReview: BookmakerReview = {
  bookmakerSlug: 'ladbrokes',

  history: {
    foundedYear: 1886,
    foundedLocation: 'Ladbroke Hall, Worcestershire',
    originStory: `Ladbrokes is the oldest major name in British betting, with roots stretching back to 1886. Founded by Messrs. Schwind and Pennington as commission agents for horses trained at Ladbroke Hall, the name was officially coined in 1902. The company initially targeted the aristocracy and elite clientele of London's gentlemen's clubs.

The modern era began in 1956 when Cyril Stein acquired the business for just £100,000. Under his leadership, Ladbrokes became the first bookmaker to float on the London Stock Exchange (1967) and pioneered fixed-odds football betting. Following a merger with Coral in 2016 and subsequent acquisition by GVC Holdings (now Entain) in 2018, it is part of one of the world's largest sports betting groups.`,
    
    keyMilestones: [
      { year: 1886, event: 'Founded as commission agents for aristocracy' },
      { year: 1961, event: 'Opened high-street shops immediately after legalisation' },
      { year: 1967, event: 'Floated on the London Stock Exchange (valued at £1m)' },
      { year: 2016, event: 'Merged with Coral to form Ladbrokes Coral Group' },
      { year: 2018, event: 'Acquired by GVC Holdings (now Entain) for £4 billion' },
      { year: 2023, event: 'Parent company agreed £615m settlement for historic bribery investigation' },
      { year: 2024, event: 'Became Official Betting Partner of Liverpool FC' },
      { year: 2025, event: 'Launched "That\'s Ladisfaction" brand platform' }
    ],

    corporate: {
      parentCompany: 'Entain plc',
      isPublic: true,
      ticker: 'LSE: ENT',
      hasRetailShops: true,
      retailNote: 'Operates approx. 2,700 shops (combined with Coral), making it the UK\'s largest retail bookmaker estate.',
    }
  },

  regulatory: {
    otherLicenses: [
      'Gibraltar Gambling Commissioner',
      'Ireland (Revenue Commissioners)'
    ],
    fines: [
      {
        year: 2023,
        amount: '£615m',
        reason: 'Deferred Prosecution Agreement',
        note: 'Settlement regarding historic activities in Turkey by parent company (Entain).'
      },
      {
        year: 2022,
        amount: '£17.0m',
        reason: 'AML and Social Responsibility',
        note: 'Record fine for systemic failures across Ladbrokes and Coral online & retail divisions.'
      },
      {
        year: 2019,
        amount: '£5.9m',
        reason: 'AML Failures',
        note: 'Failed to identify customers spending clearly unsustainable amounts.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'The Grid',
      description: 'The industry gold standard for omnichannel betting. Link your online account to a physical card (or app) to deposit/withdraw cash in shops and track retail bets digitally.'
    },

    strengths: [
      {
        type: 'Retail Integration',
        details: 'Unmatched ability to access online winnings instantly in cash at 2,700+ shops.'
      },
      {
        type: 'Football Innovation',
        details: '"5-A-Side" betting mixes fantasy football with betting, offering a unique way to bet on player stats.'
      },
      {
        type: 'Edit My Acca',
        details: 'Allows you to remove losing legs from an accumulator even after matches have started.'
      },
      {
        type: 'Liverpool FC Partnership',
        details: 'Exclusive content and fan activations as the club\'s official betting partner.'
      }
    ],

    weaknesses: [
      {
        type: 'Compliance Heavy',
        details: 'Due to past regulatory issues, Ladbrokes has some of the strictest affordability checks in the industry.'
      },
      {
        type: 'App Speed',
        details: 'The app is feature-rich but can feel slower and "heavier" than streamlined competitors like BetVictor.'
      },
      {
        type: 'Odds Value',
        details: 'Rarely the market leader on price; focuses more on features and mass-market appeal.'
      }
    ],
  },

  editorial: {
    tagline: "That's Ladisfaction",
    verdict: 'Ladbrokes is the "Big Red" of British betting — a reliable, ubiquitous brand that bridges the gap between the high street and the smartphone better than anyone else. "The Grid" is a genuine game-changer for punters who want the security of cash withdrawals without sacrificing online convenience. Their "5-A-Side" product shows they can still innovate in football betting. However, high-stakes players should be aware that Entain\'s strict compliance checks (a result of past fines) can kick in aggressively.',
    
    bestFor: [
      'Cash players (The Grid)',
      'Accumulator bettors (Edit My Acca)',
      'Fantasy Football fans (5-A-Side)',
      'Liverpool FC supporters'
    ],
    
    notIdealFor: [
      'High rollers wanting minimal friction',
      'Punters seeking the absolute highest odds',
      'Those who prefer a lightweight, minimalist app'
    ],

    uniqueSellingPoints: [
      'The Grid (Best-in-class retail integration)',
      '5-A-Side Betting (Unique fantasy/betting hybrid)',
      'Edit My Acca (Remove selections in-play)',
      'Official Betting Partner of Liverpool FC'
    ],

    competitorComparison: 'Ladbrokes offers deeper markets and a Betting Exchange (unlike Coral), but feels more "corporate" than Paddy Power. The Grid puts them ahead of William Hill for retail integration.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'The Grid (Cash in Shop)',
      amount: '£50',
      withdrawalTime: 'Instant',
    },

    supportTest: {
      channel: 'Facebook Messenger',
      responseTime: '10 minutes',
      note: 'Support is solid, but the on-site chatbot can be difficult to bypass to reach a human.'
    }
  },

  partnerships: [
    { name: 'Liverpool FC', type: 'official_partner', years: 'Since 2024' },
    { name: 'Entain Foundation (Pitching In)', type: 'official_partner', years: 'Grassroots Support' },
    { name: 'Coral-Ladbrokes Grid', type: 'official_partner', years: 'Retail Network' }
  ],

  interestingFacts: [
    'Founded in 1886, Ladbrokes is the oldest major bookmaker in the UK still in operation.',
    'The name "Ladbrokes" comes from Ladbroke Hall in Worcestershire, where the founders originally trained horses.',
    'Ladbrokes pioneered fixed-odds football betting in the 1960s, changing the industry forever.',
    'In 2023, parent company Entain agreed to a massive £615m settlement regarding historical bribery allegations in Turkey.',
    'The "5-A-Side" feature was one of the first products to successfully gamify player stat betting for a mass audience.'
  ],

  seo: {
    h1: 'Ladbrokes Review 2026: The "Grid" & Liverpool FC Partnership Tested',
    excerpt: 'Is the UK’s oldest bookmaker still a top-tier choice? Read our 2026 Ladbrokes review covering The Grid, 5-A-Side betting, and instant cash withdrawals.',
    metaTitle: 'Ladbrokes Review UK 2026 | The Grid, Free Bets & Expert Verdict',
    metaDescription: 'Detailed Ladbrokes review for 2026. We test the industry-leading Grid card for shop withdrawals, football innovation, and the Liverpool FC fan experience. Expert pros & cons.',
    lastUpdated: '2026-01-18'
  }
};