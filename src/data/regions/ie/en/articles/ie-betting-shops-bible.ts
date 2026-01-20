import { BOOKMAKER_SLUGS } from '../../../../constants';
import { IndustryReport } from '@/types';

export const ieBettingShopsBible: IndustryReport = {
  slug: 'ireland-betting-shops-guide',
  collections: ['guides'],
  h1: 'The 2026 Ireland Betting Shop Bible: Closures, Laws & The GRAI Era',
  metaTitle: 'Ireland Betting Shops 2026 | 721 Remaining Stores & New GRAI Rules',
  metaDescription: 'Expert analysis of Ireland’s retail betting sector. Why 134 shops closed since 2019, the 94-year-old Sunday ban, the Yellow Sam coup, and why FOBTs are banned.',
  lastUpdated: '2026-01-30',

  relatedBookmakers: [
    'boylesports', 'paddy-power', 'ladbrokes'
  ] as typeof BOOKMAKER_SLUGS[number][],

  intro: {
    title: 'An Industry Halved: The Reality of Irish Retail',
    content: `Ireland was the first country in Europe to legalise betting shops in 1926—decades before the UK. However, the sector has halved since its peak in 2008. As of July 2025, just 721 retail outlets remain—down from 1,385. This 47% decline reflects a "perfect storm" of doubled betting duty (2%), shifting consumer habits, and regulatory pressure. Yet, despite the closures, these shops remain deeply embedded in Irish communities, employing over 6,000 people and contributing €170 million annually to the Exchequer. With the Gambling Regulation Act 2024 now in force, the sector faces its most significant overhaul since 1931.`
  },

  locators: {
    title: 'Official Store Locators (Republic of Ireland)',
    links: [
      { name: 'BoyleSports Locator', url: 'https://www.boylesports.com/shoplocator', brand: 'boylesports' },
      { name: 'Paddy Power Locator', url: 'https://locator.pponside.com/', brand: 'paddy-power' },
      { name: 'Ladbrokes Locator', url: 'https://sports.ladbrokes.com/shop-locator', brand: 'ladbrokes' }
    ]
  },

  chainsComparison: {
    title: 'The Big Three & Independents (2026 Status)',
    headers: ['Chain', 'ROI Shops', 'HQ', 'Recent News (2025/26)'],
    rows: [
      ['BoyleSports', '277', 'Dundalk', 'Aggressive acquirer. Bought Bruce, Wm Hill NI, & Tully.'],
      ['Paddy Power', '202', 'Dublin', 'Closed 28 shops in Oct 2025 (119 jobs lost).'],
      ['Ladbrokes', '108', 'London', 'Entain in talks to sell Irish estate to Bar One (July 2025).'],
      ['Bar One Racing', '~57', 'Dundalk', 'Posted €17m profit. Growing independent.'],
      ['Independents', '~330', 'Various', 'Family-run model facing "existential threat".']
    ]
  },

  statistics: {
    title: 'The Numbers: A Steep Decline',
    mainStats: [
      { label: 'Active Shops (July 2025)', value: '721', change: '-134 since 2019' },
      { label: 'Employment', value: '6,000+', note: 'Down 700+ jobs since 2019' },
      { label: 'Tax Contribution', value: '€170m+', note: 'Duty, PAYE & VAT' },
      { label: 'Shop Profitability (Avg)', value: '€7,000', note: 'Collapsed from €92,000 in 2018' },
      { label: 'Peak Number', value: '1,385', note: 'Recorded in 2008' }
    ],
    demographics: {
      title: 'Economic Reality',
      data: [
        { group: 'Duty Impact', value: '2%', note: 'Tax doubled in 2019, accelerating closures' },
        { group: 'Independent Survival', value: 'Critical', note: 'Margins wiped out by overheads' },
        { group: 'Cash-to-Online', value: '50%+', note: 'Paddy Power: majority of IE online deposits start as shop cash' }
      ]
    }
  },

  employment: {
    title: 'The Human Cost: Jobs in Irish Betting',
    stats: [
      { label: 'Total Sector Jobs', value: '6,000+' },
      { label: 'BoyleSports Staff', value: '2,700', note: 'Across all jurisdictions' },
      { label: 'Bar One Racing Staff', value: '350', note: 'Growing independent workforce' },
      { label: 'Recent Job Losses', value: '119', note: 'Paddy Power Oct 2025 closures' }
    ]
  },

  technology: {
    title: 'Tech & Regulation: Ireland vs UK',
    items: [
      { name: 'FOBT Ban', detail: 'CRITICAL DIFFERENCE: Fixed Odds Betting Terminals are completely BANNED in Ireland. UK shops rely on machines; Irish shops rely on sport.' },
      { name: 'SSBT Dominance', detail: 'Self-Service Betting Terminals fill the void. BoyleSports operates 1,000+ terminals. Paddy Power upgraded 500+ shops with Amino H200 screens in Nov 2024.' },
      { name: 'Omnichannel', detail: 'Ladbrokes Grid and Paddy Power Onside allow customers to deposit cash in-shop and use it online instantly.' }
    ]
  },

  history: {
    title: 'A Century of Law: 1926 to GRAI',
    description: 'From the foundation of the Free State to the digital age.',
    timeline: [
      { year: 1926, event: 'Betting Act Passed', detail: 'First legislation to regulate bookies in the Irish Free State.' },
      { year: 1931, event: 'The Sunday Ban', detail: 'Betting Act 1931 bans Sunday opening. This archaic law is STILL active 95 years later.' },
      { year: 1975, event: 'Yellow Sam Coup', detail: 'Barney Curley wins IR£300,000 by blocking the only phone line at Bellewstown.' },
      { year: 2016, event: 'Hackett’s Collapse', detail: 'Ireland\'s largest independent (65 shops) enters liquidation.' },
      { year: 2019, event: 'Duty Doubled', detail: 'Betting tax rises from 1% to 2%. IBA warns of "accelerated closures".' },
      { year: 2025, event: 'GRAI Established', detail: 'March 5th: The new regulator formally commences operations.' },
      { year: 2027, event: 'Full Licensing', detail: 'Expected completion of transition from Revenue to GRAI licensing.' }
    ]
  },

  trivia: {
    title: 'Did You Know?',
    facts: [
      { topic: 'The Yellow Sam Coup', text: 'In 1975, Barney Curley organized a scheme that netted €1.7m (adjusted). He planted a man in the only phone box at Bellewstown racecourse, preventing off-course bookies from laying off bets.' },
      { topic: 'Closed on Sundays', text: 'Due to the 1931 Act, Irish betting shops in the Republic are legally required to close on Sundays. Northern Ireland lifted this ban in 2022.' },
      { topic: 'Good Friday', text: 'While pubs were allowed to open on Good Friday in 2018, betting shops remain closed by law.' },
      { topic: 'Machine Free', text: 'Ireland has zero FOBTs. The 2013 Gambling Control Bill strictly prohibited them, saving Ireland from the addiction crisis seen in the UK.' }
    ]
  },

  realStories: {
    title: 'Legends of the Turf',
    stories: [
      {
        name: 'Barney Curley',
        role: 'Professional Gambler',
        story: 'The mastermind behind the Yellow Sam coup. He once said, "The bookmakers have the best of it 364 days a year. I just want one day." Bookies paid him out in single notes, filling 108 bags in protest.',
        impact: 'His actions forced bookmakers to change the rules on how bets are reported from the track.'
      },
      {
        name: 'Stewart Kenny',
        role: 'Co-Founder, Paddy Power',
        story: 'In 1988, Kenny masterminded the merger of three struggling independent bookmakers (Kenny, Power, and Corcoran). He realized individual shops would die against British chains like Coral, so they united under the "Paddy Power" brand.',
        impact: 'He created what is now Flutter Entertainment, the world\'s largest gambling company.'
      },
      {
        name: 'John Boyle',
        role: 'Founder, BoyleSports',
        story: 'Founded his empire in 1982 in Markethill. Unlike competitors who sold out to UK giants, Boyle aggressively acquired rivals (Bruce Betting, Tully).',
        impact: 'He built the largest independent retail chain in Ireland, keeping ownership domestic.'
      }
    ]
  },

  future: {
    title: 'GRAI and the Future',
    content: 'The sector is in a transition period. While GRAI is operational as of March 2025, the full transfer of retail licensing from the Revenue Commissioners is not expected until Q1 2026 or later. The statutory credit card ban is now in force (Section 165), and the National Gambling Exclusion Register is the regulator\'s top priority. With independent shops facing profit margins of just €7k, further consolidation by BoyleSports or Bar One seems inevitable.'
  },

  faq: [
    { q: 'Are betting shops open on Sundays?', a: 'No. The Betting Act 1931 still prohibits Sunday opening in the Republic of Ireland. Northern Ireland shops act differently.' },
    { q: 'Are there FOBTs (Slot Machines) in Irish shops?', a: 'No. FOBTs are completely banned in Ireland. You will only find SSBTs (Self-Service Betting Terminals) for sports betting.' },
    { q: 'What happened to Hackett’s Bookmakers?', a: 'Once a major independent with 65 shops, Hackett’s entered liquidation in 2016 due to high costs and online competition.' },
    { q: 'Can I use a credit card?', a: 'No. The Gambling Regulation Act 2024 strictly bans credit cards for all gambling payments.' },
    { q: 'When will GRAI take full control?', a: 'GRAI opened in March 2025, but full retail licensing control is a phased process expected to complete by 2027.' },
    { q: 'Who is Bar One Racing?', a: 'A rapidly growing independent bookmaker based in Dundalk (50+ shops). Reports in 2025 suggest they may acquire Ladbrokes\' Irish estate.' }
  ],

  tooltips: {
    grai: "Gambling Regulatory Authority of Ireland: Established March 2025.",
    ssbt: "Self-Service Betting Terminal: Touchscreen for sports bets (legal).",
    fobt: "Fixed Odds Betting Terminal: Casino-style machine (ILLEGAL in Ireland).",
    yellow_sam: "The horse involved in the famous 1975 betting coup.",
    turnover_tax: "The 2% duty on stakes that has impacted shop profitability.",
    revenue_commissioners: "Currently still issuing bookmaker licenses during the transition to GRAI.",
    think_21: "The age verification policy used in Ireland (vs Think 25 in the UK)."
  },

  footer: {
    helpline: 'GamblingCare.ie: 1800 936 725. Please gamble responsibly.',
    lastUpdated: 'January 2026'
  }
};