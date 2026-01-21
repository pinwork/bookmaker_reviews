import { IndustryReport } from '@/types';

export const ieBettingShopsBible: IndustryReport = {
  slug: 'ireland-betting-shops-guide',
  collections: ['guides'],
  h1: 'The 2026 Ireland Betting Shop Bible: Closures, Laws & The GRAI Era',
  metaTitle: 'Ireland Betting Shops 2026 | 721 Remaining Stores & New GRAI Rules',
  metaDescription: "Expert analysis of Ireland's retail betting sector. Why 134 shops closed since 2019, the 94-year-old Sunday ban, the Yellow Sam coup, and why FOBTs are banned.",

  linkedResources: [
    { id: 'boylesports', type: 'bookmaker', active: true },
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
  ],

  intro: {
    title: 'An Industry Halved: The Reality of Irish Retail',
    content: `Ireland was the first country in Europe to legalise betting shops in 1926—decades before the UK. However, the sector has halved since its peak in 2008. As of July 2025, just 721 retail outlets remain—down from 1,385. This 47% decline reflects a "perfect storm" of doubled betting duty (2%), shifting consumer habits, and regulatory pressure. Yet, despite the closures, these shops remain deeply embedded in Irish communities, employing over 6,000 people and contributing €170 million annually to the Exchequer. With the Gambling Regulation Act 2024 now in force, the sector faces its most significant overhaul since 1931.`
  },

  comparisonTables: [
    {
      id: 'ie-betting-chains-2026',
      title: 'The Big Three & Independents (2026)',
      headers: ['Chain', 'ROI Shops', 'HQ', 'Recent News'],
      rows: [
        ['BoyleSports', '277', 'Dundalk', 'Bought Bruce, WH NI, Tully'],
        ['Paddy Power', '202', 'Dublin', 'Closed 28 shops (Oct 2025)'],
        ['Ladbrokes', '108', 'London', 'May sell to Bar One'],
        ['Bar One Racing', '~57', 'Dundalk', '€17m profit, growing'],
        ['Independents', '~330', 'Various', 'Facing existential threat']
      ]
    }
  ],

  groups: [
    {
      groupName: 'The Numbers: A Steep Decline',
      items: [
        {
          id: 'industry-statistics',
          title: 'Industry Statistics (2025)',
          keyStats: [
            { label: 'Active Shops', value: '721' },
            { label: 'Peak (2008)', value: '1,385' },
            { label: 'Employment', value: '6,000+' },
            { label: 'Tax Contribution', value: '€170m+' }
          ],
          content: `The sector has lost **134 shops since 2019**. Average shop profitability has collapsed from €92,000 (2018) to just **€7,000** today.

### Economic Reality

- **Duty Impact**: Tax doubled from 1% to 2% in 2019, accelerating closures
- **Independent Survival**: Margins wiped out by overheads
- **Cash-to-Online**: 50%+ of Paddy Power's IE online deposits start as shop cash`
        },
        {
          id: 'employment-data',
          title: 'Jobs in Irish Betting',
          keyStats: [
            { label: 'Total Sector Jobs', value: '6,000+' },
            { label: 'BoyleSports Staff', value: '2,700' },
            { label: 'Bar One Staff', value: '350' },
            { label: 'Recent Losses', value: '119' }
          ],
          content: `BoyleSports employs 2,700 across all jurisdictions. The October 2025 Paddy Power closures resulted in 119 job losses.`
        }
      ]
    },
    {
      groupName: 'Official Store Locators',
      items: [
        {
          id: 'store-locators',
          title: 'Find Your Nearest Betting Shop',
          content: `Use these official locators to find your nearest betting shop in the Republic of Ireland:

- **BoyleSports**: [boylesports.com/shoplocator](https://www.boylesports.com/shoplocator)
- **Paddy Power**: [locator.pponside.com](https://locator.pponside.com/)
- **Ladbrokes**: [sports.ladbrokes.com/shop-locator](https://sports.ladbrokes.com/shop-locator)`
        }
      ]
    },
    {
      groupName: 'Tech & Regulation: Ireland vs UK',
      items: [
        {
          id: 'technology',
          title: 'SSBTs, FOBTs & Omnichannel',
          content: `### FOBT Ban
**CRITICAL DIFFERENCE**: Fixed Odds Betting Terminals are completely **BANNED in Ireland**. UK shops rely on machines; Irish shops rely on sport.

### SSBT Dominance
Self-Service Betting Terminals fill the void. BoyleSports operates 1,000+ terminals. Paddy Power upgraded 500+ shops with Amino H200 screens in Nov 2024.

### Omnichannel
Ladbrokes Grid and Paddy Power Onside allow customers to deposit cash in-shop and use it online instantly.`
        }
      ]
    },
    {
      groupName: 'A Century of Law: 1926 to GRAI',
      items: [
        {
          id: 'history-timeline',
          title: 'From the Free State to the Digital Age',
          content: `- **1926 — Betting Act Passed:** First legislation to regulate bookies in the Irish Free State.
- **1931 — The Sunday Ban:** Betting Act 1931 bans Sunday opening. This archaic law is STILL active 95 years later.
- **1975 — Yellow Sam Coup:** Barney Curley wins IR£300,000 by blocking the only phone line at Bellewstown.
- **2016 — Hackett's Collapse:** Ireland's largest independent (65 shops) enters liquidation.
- **2019 — Duty Doubled:** Betting tax rises from 1% to 2%. IBA warns of "accelerated closures".
- **2025 — GRAI Established:** March 5th: The new regulator formally commences operations.
- **2027 — Full Licensing:** Expected completion of transition from Revenue to GRAI licensing.`
        }
      ]
    },
    {
      groupName: 'Legends of the Turf',
      items: [
        {
          id: 'barney-curley',
          title: 'Barney Curley (Professional Gambler)',
          content: `The mastermind behind the Yellow Sam coup. He once said, "The bookmakers have the best of it 364 days a year. I just want one day." Bookies paid him out in single notes, filling 108 bags in protest.

His actions forced bookmakers to change the rules on how bets are reported from the track.`
        },
        {
          id: 'stewart-kenny',
          title: 'Stewart Kenny (Paddy Power Co-Founder)',
          content: `In 1988, Kenny masterminded the merger of three struggling independent bookmakers (Kenny, Power, and Corcoran). He realized individual shops would die against British chains like Coral, so they united under the "Paddy Power" brand.

He created what is now Flutter Entertainment, the world's largest gambling company.`
        },
        {
          id: 'john-boyle',
          title: 'John Boyle (BoyleSports Founder)',
          content: `Founded his empire in 1982 in Markethill. Unlike competitors who sold out to UK giants, Boyle aggressively acquired rivals (Bruce Betting, Tully).

He built the largest independent retail chain in Ireland, keeping ownership domestic.`
        }
      ]
    },
    {
      groupName: 'Did You Know?',
      items: [
        {
          id: 'trivia',
          title: 'Irish Betting Shop Trivia',
          content: `- **The Yellow Sam Coup**: In 1975, Barney Curley organized a scheme that netted €1.7m (adjusted). He planted a man in the only phone box at Bellewstown racecourse, preventing off-course bookies from laying off bets.
- **Closed on Sundays**: Due to the 1931 Act, Irish betting shops in the Republic are legally required to close on Sundays. Northern Ireland lifted this ban in 2022.
- **Good Friday**: While pubs were allowed to open on Good Friday in 2018, betting shops remain closed by law.
- **Machine Free**: Ireland has zero FOBTs. The 2013 Gambling Control Bill strictly prohibited them, saving Ireland from the addiction crisis seen in the UK.`
        }
      ]
    },
    {
      groupName: 'The Future',
      items: [
        {
          id: 'grai-future',
          title: 'GRAI and What\'s Next',
          content: `The sector is in a transition period. While GRAI is operational as of March 2025, the full transfer of retail licensing from the Revenue Commissioners is not expected until Q1 2026 or later.

The statutory credit card ban is now in force (Section 165), and the National Gambling Exclusion Register is the regulator's top priority.

With independent shops facing profit margins of just **€7k**, further consolidation by BoyleSports or Bar One seems inevitable.`
        }
      ]
    }
  ],

  faq: [
    { q: 'Are betting shops open on Sundays?', a: 'No. The Betting Act 1931 still prohibits Sunday opening in the Republic of Ireland. Northern Ireland shops act differently.' },
    { q: 'Are there FOBTs (Slot Machines) in Irish shops?', a: 'No. FOBTs are completely banned in Ireland. You will only find SSBTs (Self-Service Betting Terminals) for sports betting.' },
    { q: 'What happened to Hackett\'s Bookmakers?', a: 'Once a major independent with 65 shops, Hackett\'s entered liquidation in 2016 due to high costs and online competition.' },
    { q: 'Can I use a credit card?', a: 'No. The Gambling Regulation Act 2024 strictly bans credit cards for all gambling payments.' },
    { q: 'When will GRAI take full control?', a: 'GRAI opened in March 2025, but full retail licensing control is a phased process expected to complete by 2027.' },
    { q: 'Who is Bar One Racing?', a: 'A rapidly growing independent bookmaker based in Dundalk (50+ shops). Reports in 2025 suggest they may acquire Ladbrokes\' Irish estate.' }
  ],

  footer: {
    helpline: 'GamblingCare.ie: 1800 936 725. Please gamble responsibly.',
    lastUpdated: '2026-01-20'
  }
};
