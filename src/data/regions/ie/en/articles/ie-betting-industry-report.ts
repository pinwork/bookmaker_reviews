import { IndustryReport } from '@/types';

export const ieBettingIndustryReport: IndustryReport = {
  slug: 'ireland-betting-market-analysis-2026',
  collections: ['guides'],
  h1: 'The 2026 Ireland Betting Report: GRAI, Taxes & A New Era',
  metaTitle: 'Ireland Betting Industry 2026 | GRAI Rules, GAA & Market Analysis',
  metaDescription: 'The definitive report on the €5.5bn Irish gambling market. We analyze GRAI regulations, the targeted inducement ban, and Irish bookmaking history.',
  lastUpdated: '2026-01-27',

  linkedResources: [
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'boylesports', type: 'bookmaker', active: true },
    { id: 'bet365', type: 'bookmaker', active: true },
    { id: 'betfair', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
    { id: 'coral', type: 'bookmaker', active: true },
  ],

  intro: {
    title: 'Ireland\'s Gambling Revolution: From 1926 to 2026',
    content: `For 93 years, Irish gambling operated under laws written before television existed. That era is over. The full implementation of the Gambling Regulatory Authority of Ireland (GRAI) marks the most significant change since the Irish Free State became the first in Europe to legalise betting shops in 1926. 

    While the "Wild West" era is ending, full licensing under the new regime is still rolling out through mid-2026. This report examines Ireland's unique €5.5 billion annual gambling spend, the legal status of bonuses, and why homegrown brands like BoyleSports and Paddy Power still dominate the cultural narrative.`
  },

  statistics: {
    title: 'Ireland Betting by the Numbers (2025-26)',
    mainStats: [
      { label: 'Total Annual Spend', value: '€5.5 Billion', note: 'ESRI (Oct 2023) Expenditure' },
      { label: 'Problem Gambling Rate', value: '3.3%', note: '130,000 adults (ESRI Oct 2023)' },
      { label: 'Moderate Risk Rate', value: '7.1%', note: 'Approx 279,000 adults' },
      { label: 'Active Betting Shops', value: '721', note: 'Down 47% since 2008 (1,385 shops)' },
      { label: 'Horse Racing Betting', value: '€141m', note: 'Off-course betting receipts (HRI 2024)' }
    ],
    demographics: {
      title: 'The Irish Betting Profile',
      data: [
        { group: 'Regular Bettors', value: '44% of Adults' },
        { group: 'Mobile Usage', value: '88%' },
        { group: 'Childhood Exposure', value: '64% gambled before age 18' },
        { group: 'Youth Participation', value: '22.9% of 16-year-olds' }
      ]
    }
  },

  ukVsIeComparison: {
    title: 'UK vs Ireland: The Key Differences',
    intro: 'Many punters assume the rules are the same across the Irish Sea. They are wrong.',
    headers: ['Feature', 'United Kingdom', 'Ireland (Republic)'],
    rows: [
      ['Tax Model', '15-40% on Operator Profit', '2% on All Turnover (Stakes)'],
      ['Credit Card Ban', '✅ Enforced', '✅ Section 165 (Enforcement pending licensing)'],
      ['Ad Watershed', '❌ No daytime ban', '✅ 5:30am - 9:00pm (Section 149)'],
      ['Primary Sport', 'Football (50%)', 'Horse Racing (~40%)'],
      ['Inducements', '✅ Legal & Taxed', '⚠️ Targeted Bonuses Banned']
    ]
  },

  realStories: {
    title: 'The People Who Built Irish Betting',
    stories: [
      {
        name: 'John Boyle',
        role: 'Founder & Chairman, BoyleSports',
        story: 'In 1982, after being sacked from his bread van driver job at age 25, Boyle borrowed £6,000 from his father and £12,000 from the bank to buy a single betting shop in Markethill, County Armagh.',
        impact: 'BoyleSports is now Ireland\'s largest independent bookmaker with 300+ shops and 2,700 employees. He announced a £100m UK investment in 2025.',
        quote: '"I remember coming home and telling all my friends: I\'m going to be a millionaire."'
      },
      {
        name: 'The 1988 Paddy Power Merger',
        role: 'Kenny, Power & Corcoran',
        story: 'When British bookmakers began invading Irish high streets in the late 1980s, three independent rivals decided to fight back by merging their 40 shops to focus on market share, not short-term profits.',
        impact: 'From 8% of the Irish market in 1988 to the world\'s largest online betting company (Flutter Entertainment).',
        quote: '"If we go for market share and they go for short-term profits, there can only be one winner."'
      }
    ]
  },

  regulatoryTimeline: {
    title: '100 Years of Irish Betting History',
    events: [
      { year: 1926, title: 'First in Europe', desc: 'Irish Free State legalises betting shops — 35 years before Britain.' },
      { year: 1931, title: 'Betting Act', desc: 'The law that governed Irish gambling for 93 years.' },
      { year: 1982, title: 'BoyleSports Founded', desc: 'John Boyle opens his first shop in County Armagh.' },
      { year: 1988, title: 'Paddy Power Merger', desc: 'Kenny, Power and Corcoran merge 40 shops to fight British invaders.' },
      { year: 2015, title: 'Betting Amendment Act', desc: 'First attempt to regulate online betting; remote operators pay Irish tax.' },
      { year: 2024, title: 'Gambling Regulation Act', desc: 'Signed by President Higgins. Creates GRAI and modern licensing.' },
      { year: 2025, title: 'GRAI Operational', desc: 'March: GRAI becomes statutory. December: B2C licensing opens.' },
      { year: 2026, title: 'Full Licensing', desc: 'Licensing scheme expected to begin in full by mid-2026.' }
    ]
  },

  sportBreakdown: {
    title: 'Where Irish Punters Bet (Estimates)',
    intro: 'Unlike the UK where football dominates (50%), Ireland\'s betting culture remains rooted in horse racing.',
    data: [
      { sport: 'Horse Racing', share: '~40%', note: 'The heartland. Cheltenham is a national pilgrimage.' },
      { sport: 'Football', share: '~30%', note: 'Premier League dominates online volume.' },
      { sport: 'GAA', share: '~15%', note: 'Massive seasonal spikes during the summer championships.' },
      { sport: 'Other', share: '~15%', note: 'Golf, rugby, greyhounds, tennis.' }
    ],
    disclaimer: 'Note: These are industry estimates; GRAI has not yet published official sport-by-sport data.'
  },

  trivia: {
    title: 'Did You Know?',
    facts: [
      { 
        topic: 'The 1926 Advantage', 
        text: 'Ireland legalised betting shops 35 years before the UK (1961), creating a unique high-street betting culture.' 
      },
      { 
        topic: 'Cheltenham Exodus', 
        text: 'More Irish people travel to Cheltenham than any other non-British nationality; it is effectively an Irish home game.' 
      },
      { 
        topic: 'Horse Capital', 
        text: 'Ireland produces more Thoroughbred foals than France and the UK combined.' 
      },
      { 
        topic: 'Ad Ban', 
        text: 'Ireland\'s 5:30am - 9:00pm daytime ad ban is one of the strictest in Europe.' 
      }
    ]
  },

  taxationExplainer: {
    title: 'The 2% Turnover Tax: The Hidden Margin',
    intro: 'Unlike the UK, Ireland taxes the stake, not the profit.',
    headers: ['Tax Type', 'Rate', 'Impact on Punter'],
    rows: [
      ['Turnover Tax', '2% of Stakes', 'Margins are slightly tighter to cover the cost on every bet.'],
      ['Winnings Tax', '0%', 'You keep 100% of your winnings, tax-free.'],
      ['Social Impact Fund', '1.1% of GGY', 'Mandatory levy on operators to fund Irish research and HSE treatment.']
    ]
  },

  graiImpact: {
    title: 'The GRAI Reality: 2026 Update',
    points: [
      {
        title: '🚫 Targeted Inducements Banned',
        content: 'Personalized free bets and VIP bonuses targeted at individuals are banned under the 2024 Act. General promotional offers for the public remain legal but strictly regulated. Full enforcement starts mid-2026.'
      },
      {
        title: '📺 Watershed Rules (Section 149)',
        content: 'A total ban on gambling advertising between 5:30 AM and 9:00 PM across all Irish TV and radio.'
      },
      {
        title: '💳 Credit Card Ban (Section 165)',
        content: 'Strict prohibition on using credit cards for gambling. ATMs have also been legally removed from all shop premises.'
      }
    ]
  },

  tooltips: {
    grai: "Gambling Regulatory Authority of Ireland: The official watchdog established in 2025.",
    turnover_tax: "2% tax on every bet placed, paid by the bookmaker to the Irish Revenue.",
    gaa: "Gaelic Athletic Association: Governing body for Hurling and Gaelic Football.",
    bog: "Best Odds Guaranteed: Essential for racing value; you get the higher odds if the SP is better.",
    inducement: "Targeted offers like personal free bets, now prohibited to prevent addiction.",
    exclusion_register: "National Gambling Exclusion Register: Ireland's pending centralized system for self-exclusion.",
    sp: "Starting Price: The official odds at the start of a race.",
    each_way: "Two bets in one: one for the win and one for the horse to place.",
    mabs: "Money Advice & Budgeting Service: State agency providing free debt support.",
    watershed: "The 5:30am - 9:00pm ban on gambling advertisements on TV and radio."
  },

  faq: [
    {
      q: 'Are all free bets banned in Ireland?',
      a: 'No. Only "targeted" inducements (personalized offers) are banned. General sign-up bonuses for the public are still legal but regulated by GRAI.'
    },
    {
      q: 'Is there a tax on winnings?',
      a: 'No. Punter winnings are tax-free. Operators pay a 2% tax on total stakes.'
    },
    {
      q: 'When does the new licensing start?',
      a: 'The full licensing regime and strict enforcement of ad bans are expected to be in full effect by mid-2026.'
    },
    {
      q: 'Does GamStop work in Ireland?',
      a: 'No, GamStop is UK-only. Ireland is developing its own National Exclusion Register under the GRAI.'
    }
  ],

  footer: {
    helpline: 'HSE Gambling Support Line: 1800 936 725 or visit gamblingcare.ie.',
    dataSource: 'Data: IBA (July 2025), ESRI (Oct 2023), HRI (2024), and GRAI Operational Updates.',
    lastUpdated: 'January 2026'
  }
};