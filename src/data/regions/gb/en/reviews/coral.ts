// src/data/regions/gb/en/reviews/coral.ts
import { BookmakerReview } from './types';

export const coralReview: BookmakerReview = {
  bookmakerSlug: 'coral',

  history: {
    foundedYear: 1926,
    foundedLocation: 'London, UK',
    originStory: `Coral's story is a classic tale of immigrant resilience. Founder Joseph Kagarlitski (Joe Coral) arrived in London from Warsaw in 1912 unable to speak English. Despite childhood polio leaving both his arms disabled, he began taking illegal bets at age 14. By the 1930s, he ran a network of runners across London. He famously stood his ground against notorious gangsters like Darby Sabini (of Peaky Blinders fame) to protect his pitches at greyhound tracks.

When betting shops were legalised in 1961, Coral was among the first to open on the high street. The brand has passed through several owners—Bass, Gala, and eventually merging with Ladbrokes in 2016. Today, it is part of the Entain plc group, one of the world's largest gambling companies, but retains its distinct blue branding and mass-market appeal.`,
    
    keyMilestones: [
      { year: 1926, event: 'Joe Coral begins bookmaking at Stoke Newington and Clapton tracks' },
      { year: 1961, event: 'Opened one of the first licensed betting shops in the UK' },
      { year: 1999, event: 'Acquired Eurobet to form Coral Eurobet' },
      { year: 2005, event: 'Acquired by Gala for £2.18 billion' },
      { year: 2016, event: 'Merged with Ladbrokes to create Ladbrokes Coral' },
      { year: 2020, event: 'Rebranded parent company GVC to Entain plc' },
      { year: 2023, event: 'Parent company agreed £615m settlement for historic bribery offences' }
    ],

    corporate: {
      parentCompany: 'Entain plc',
      isPublic: true,
      ticker: 'LSE: ENT',
      hasRetailShops: true,
      retailNote: 'Operates over 1,000 shops in the UK (approx. 2,400 combined with Ladbrokes).',
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
        note: 'Settlement for historic bribery offences in former Turkish business unit (Entain group).'
      },
      {
        year: 2022,
        amount: '£17.0m',
        reason: 'AML and Social Responsibility',
        note: 'Record fine at the time. Customers blocked by Coral could immediately gamble with Ladbrokes.'
      },
      {
        year: 2019,
        amount: '£5.9m',
        reason: 'AML Failures',
        note: 'Allowed a customer to lose £1.5m without adequate source of funds checks.'
      }
    ]
  },

  productAnalysis: {
    standoutFeature: {
      name: 'Coral Connect',
      description: 'An omnichannel card allowing you to deposit and withdraw online funds instantly in any of their 1,000+ high-street shops.'
    },

    strengths: [
      {
        type: 'Racing Heritage',
        details: 'Sponsor of the Coral-Eclipse and Welsh Grand National for over 50 years; deep racing integration.'
      },
      {
        type: 'User Friendly',
        details: 'Often cited as the most beginner-friendly interface in the Entain group; simpler than Ladbrokes.'
      },
      {
        type: 'Cash Access',
        details: 'Instant access to winnings via Connect Card avoids bank transfer delays.'
      },
      {
        type: 'Free-to-Play',
        details: 'Correct 4 and Racing Super Series offer substantial cash prizes for free predictions.'
      }
    ],

    weaknesses: [
      {
        type: 'Odds Value',
        details: 'Standard market pricing; rarely leads the industry on football odds compared to Asian-style bookies.'
      },
      {
        type: 'Compliance Rigidity',
        details: 'Due to past fines, affordability checks can be triggered earlier than at other bookmakers.'
      },
      {
        type: 'No Exchange',
        details: 'Unlike sister brand Ladbrokes, Coral does not offer a betting exchange product.'
      }
    ]
  },

  editorial: {
    tagline: "We're Here For It",
    verdict: 'Coral is the "friendly face" of the massive Entain group. It positions itself as more accessible and casual than the serious, racing-focused Ladbrokes. The "Coral Connect" card is a genuine selling point for anyone who lives near a shop, effectively turning your online account into a cash wallet. While the parent company\'s regulatory record is alarming (£600m+ in penalties), the actual player experience on Coral is polished, safe, and rich in features like free-to-play games and excellent racing streams.',
    
    bestFor: [
      'Beginners (User-friendly UI)',
      'Cash players (Coral Connect)',
      'Horse Racing fans',
      'Football accumulator bettors'
    ],
    
    notIdealFor: [
      'Professional traders (No Exchange)',
      'High rollers (Strict affordability checks)',
      'Those seeking market-leading odds'
    ],

    uniqueSellingPoints: [
      'Coral Connect (Instant cash withdrawals)',
      'Longest-running sponsorship in racing (Coral-Eclipse)',
      'Fail-safe "Smart Boosts" on football',
      'Owns Romford & Brighton dog tracks'
    ],

    competitorComparison: 'Simpler and brighter than Ladbrokes. More retail-integrated than bet365. Coral sits in the "safe, solid, high-street brand" tier alongside William Hill but offers better free-to-play games.'
  },

  testing: {
    lastTested: 'January 2026',
    
    withdrawalTest: {
      method: 'Coral Connect (Cash in Shop)',
      amount: '£20',
      withdrawalTime: 'Instant',
    },

    supportTest: {
      channel: 'Facebook Messenger',
      responseTime: '15 minutes',
      note: 'Social media support is surprisingly active and helpful compared to the on-site bot.'
    }
  },

  partnerships: [
    { name: 'Coral-Eclipse (Sandown)', type: 'official_partner', years: 'Since 1976' },
    { name: 'Welsh Grand National', type: 'official_partner', years: 'Since 1973' },
    { name: 'Birmingham City FC', type: 'official_partner', years: 'Since 2025' }
  ],

  interestingFacts: [
    'Founder Joe Coral had polio as a child and relied on his verbal skills to manage his betting pitches.',
    'He famously stood up to the Sabini gang (featured in Peaky Blinders) who tried to extort him at London tracks.',
    'The Coral-Eclipse sponsorship is the longest-running Group race sponsorship in the world (50+ years).',
    'Parent company Entain paid a massive £615m settlement in 2023 regarding historic bribery in Turkey.',
    'Coral owns two greyhound stadiums directly: Romford and Brighton & Hove.'
  ],

  seo: {
    h1: 'Coral Review 2026: The "Friendly" High Street Bookie Tested',
    excerpt: 'Read our expert Coral review for 2026. We test the Coral Connect card for instant cash, the £20 welcome offer, and analyze their 50-year horse racing heritage.',
    metaTitle: 'Coral Review UK 2026 | Free Bets, Connect Card & Expert Verdict',
    metaDescription: 'Is Coral reliable? Our 2026 review covers real-world testing of instant shop withdrawals, racing stream quality, and the beginner-friendly app interface.',
    lastUpdated: '2026-01-18'
  }
};