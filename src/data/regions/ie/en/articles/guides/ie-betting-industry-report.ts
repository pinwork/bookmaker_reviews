import { GuideArticle } from '@/types';

export const ieBettingIndustryReport: GuideArticle = {
  slug: 'ireland-betting-market-analysis-2026',
  collections: ['guides'],
  h1: 'The 2026 Ireland Betting Report: GRAI, Taxes & A New Era',
  metaTitle: 'Ireland Betting Industry 2026 | GRAI Rules, GAA & Market Analysis',
  metaDescription: 'The definitive report on the €5.5bn Irish gambling market. We analyze GRAI regulations, the targeted inducement ban, and Irish bookmaking history.',

  linkedResources: [
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'boylesports', type: 'bookmaker', active: true },
    { id: 'bet365', type: 'bookmaker', active: true },
    { id: 'betfair', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
    { id: 'coral', type: 'bookmaker', active: true },
  ],

  intro: {
    title: "Ireland's Gambling Revolution: From 1926 to 2026",
    content: `For 93 years, Irish gambling operated under laws written before television existed. That era is over. The full implementation of the Gambling Regulatory Authority of Ireland (GRAI) marks the most significant change since the Irish Free State became the first in Europe to legalise betting shops in 1926.

While the "Wild West" era is ending, full licensing under the new regime is rolling out through 2026. This report examines Ireland's unique €5.5 billion annual gambling spend, the legal status of bonuses, and why homegrown brands like BoyleSports and Paddy Power still dominate the cultural narrative.`
  },

  comparisonTables: [
    {
      id: 'uk-vs-ie-comparison',
      title: 'UK vs Ireland: Key Differences',
      headers: ['Feature', 'United Kingdom', 'Ireland'],
      rows: [
        ['Tax Model', '15-40% on Operator Profit', '2% on All Turnover'],
        ['Credit Card Ban', 'Enforced', 'Enacted (Commencement 2026)'],
        ['Ad Watershed', 'No daytime ban', '5:30am - 9:00pm ban'],
        ['Primary Sport', 'Football (50%)', 'Horse Racing (~40%)'],
        ['Inducements', 'Legal & Taxed', 'Targeted Bonuses Banned']
      ]
    },
    {
      id: 'ie-tax-rates-2026',
      title: 'Irish Gambling Tax Structure',
      headers: ['Tax Type', 'Rate', 'Impact'],
      rows: [
        ['Turnover Tax', '2% of Stakes', 'Margins tighter on every bet'],
        ['Winnings Tax', '0%', '100% tax-free winnings'],
        ['Social Impact Fund', 'Levy on Turnover (TBC)', 'Funds addiction treatment (min €14m/yr)']
      ]
    }
  ],

  groups: [
    {
      groupName: 'Ireland Betting by the Numbers',
      items: [
        {
          id: 'market-stats',
          title: 'Industry Statistics (2025-26)',
          keyStats: [
            { label: 'Annual Spend', value: '€5.5B' },
            { label: 'Problem Rate', value: '3.3%' },
            { label: 'Active Shops', value: '721' },
            { label: 'Racing Betting', value: '€141m' }
          ],
          content: `Ireland has a **3.3%** problem gambling rate (~130,000 adults) with another **7.1%** (~279,000) showing moderate risk. Betting shops have declined **47% since 2008** from a peak of 1,385 to just 721 in 2025.

### Irish Betting Profile
- **Regular Bettors:** 44% of Adults
- **Mobile Usage:** 88%
- **Childhood Exposure:** 64% gambled before 18
- **Youth Participation:** 22.9% of 16-year-olds

*Source: ESRI (Oct 2023), IBA (July 2025)*`
        }
      ]
    },
    {
      groupName: 'The People Who Built Irish Betting',
      items: [
        {
          id: 'john-boyle',
          title: 'John Boyle (BoyleSports Founder)',
          content: `In 1982, after being sacked from his bread van driver job at age 25, Boyle borrowed **£6,000** from his father and £12,000 from the bank to buy a single betting shop in Markethill, County Armagh.

BoyleSports is now Ireland's largest independent bookmaker with **300+ shops**. In July 2025, the company announced a massive **£100m investment** to open 200 new shops across the UK.

> "I remember coming home and telling all my friends: I'm going to be a millionaire."`
        },
        {
          id: 'paddy-power-merger',
          title: 'The 1988 Paddy Power Merger (Kenny, Power & Corcoran)',
          content: `When British bookmakers began invading Irish high streets in the late 1980s, three independent rivals decided to fight back by merging their **40 shops** to focus on market share, not short-term profits.

From 8% of the Irish market in 1988 to the **world's largest online betting company** (Flutter Entertainment).

> "If we go for market share and they go for short-term profits, there can only be one winner."`
        }
      ]
    },
    {
      groupName: '100 Years of Irish Betting History',
      items: [
        {
          id: 'regulatory-timeline',
          title: 'Key Milestones',
          content: `- **1926 — First in Europe:** Irish Free State legalises betting shops — 35 years before Britain.
- **1931 — Betting Act:** The law that governed Irish gambling for 93 years.
- **1982 — BoyleSports Founded:** John Boyle opens his first shop in County Armagh.
- **1988 — Paddy Power Merger:** Kenny, Power and Corcoran merge 40 shops to fight British invaders.
- **2015 — Betting Amendment Act:** First attempt to regulate online; remote operators pay Irish tax.
- **2024 — Gambling Regulation Act:** Enacted in October. Creates GRAI and modern licensing.
- **2025 — GRAI Strategy:** First Strategy Statement (2025-2027) published in October.
- **2026 — Full Licensing:** New licensing regime commences on a phased basis from early 2026.`
        }
      ]
    },
    {
      groupName: 'The GRAI Reality: 2026 Update',
      items: [
        {
          id: 'targeted-inducements',
          title: 'Targeted Inducements Banned',
          content: `Personalized free bets and VIP bonuses targeted at individuals are banned under the 2024 Act. **General promotional offers** for the public remain legal but strictly regulated. Full enforcement is rolling out throughout 2026.`
        },
        {
          id: 'watershed-rules',
          title: 'Watershed Rules (Section 149)',
          content: `A total ban on gambling advertising between **5:30 AM and 9:00 PM** across all Irish TV and radio.`
        },
        {
          id: 'credit-card-ban',
          title: 'Credit Card Ban (Section 165)',
          content: `Strict prohibition on using credit cards for gambling. ATMs have also been legally removed from all shop premises.`
        }
      ]
    },
    {
      groupName: 'Betting Breakdown & Trivia',
      items: [
        {
          id: 'sport-breakdown',
          title: 'Betting Volume by Sport',
          content: `Unlike the UK where football dominates (50%), Ireland's betting culture remains rooted in horse racing.

- **Horse Racing (~40%):** The heartland. Cheltenham is a national pilgrimage.
- **Football (~30%):** Premier League dominates online volume.
- **GAA (~15%):** Massive seasonal spikes during summer championships.
- **Other (~15%):** Golf, rugby, greyhounds, tennis.

*Note: These are industry estimates; GRAI has not yet published official sport-by-sport data.*`
        },
        {
          id: 'trivia',
          title: 'Did You Know?',
          content: `- **The 1926 Advantage**: Ireland legalised betting shops 35 years before the UK (1961), creating a unique high-street betting culture.
- **Cheltenham Exodus**: More Irish people travel to Cheltenham than any other non-British nationality; it is effectively an Irish home game.
- **Horse Capital**: Ireland produces more Thoroughbred foals than France and the UK combined.
- **Ad Ban**: Ireland's 5:30am - 9:00pm daytime ad ban is one of the strictest in Europe.`
        }
      ]
    }
  ],

  faq: [
    {
      q: 'Are all free bets banned in Ireland?',
      a: 'No. Only "targeted" inducements (personalized offers based on losses/activity) are banned. General sign-up bonuses for the public are still legal but regulated by GRAI.'
    },
    {
      q: 'Is there a tax on winnings?',
      a: 'No. Punter winnings are tax-free. Operators pay a 2% tax on total turnover (stakes).'
    },
    {
      q: 'When does the new licensing start?',
      a: 'The full licensing regime and strict enforcement are commencing on a phased basis starting early 2026.'
    },
    {
      q: 'Does GamStop work in Ireland?',
      a: "No, GamStop is UK-only. GRAI is developing a National Exclusion Register which will launch as part of the new licensing system."
    }
  ],

  footer: {
    lastUpdated: '2026-01-22',
    sources: [
      'IBA Pre-Budget Submission (July 2025)',
      'ESRI Problem Gambling Report (Oct 2023)',
      'GRAI Strategy Statement 2025-2027',
      'Gambling Regulation Act 2024'
    ]
  }
};