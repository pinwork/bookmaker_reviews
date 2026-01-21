import { IndustryReport } from '@/types';

export const bettingShopsBible: IndustryReport = {
  slug: 'uk-betting-shops-guide',
  collections: ['guides'],
  h1: 'The 2026 UK Betting Shop Bible: History, Stats & Store Locators',
  metaTitle: 'UK Betting Shops Guide 2026 | From 1961 Legalization to Digi-Hubs',
  metaDescription: "Comprehensive guide to UK betting shops. 65 years of history, 5,789 active stores, store locators, Fred Done's story, and why 13% of Brits still bet in cash.",

  linkedResources: [
    { id: 'betfred', type: 'bookmaker', active: true },
    { id: 'william-hill', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
    { id: 'coral', type: 'bookmaker', active: true },
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'boylesports', type: 'bookmaker', active: true },
  ],

  intro: {
    title: 'More Than Just a High Street Store',
    content: `In 1961, betting shops were legalised to move gambling off the streets, but they were designed to be as unwelcoming as possible—blacked-out windows and no chairs were the law. Fast forward to 2026, and despite a 36% decline in store numbers since 2012, the "bookies" remains a British institution. With 5,789 shops still active and 13% of the population visiting monthly, we explore the evolution from "smoky funeral parlours" to high-tech Digi-Hubs.`
  },

  comparisonTables: [
    {
      id: 'uk-betting-chains-2026',
      title: 'UK Betting Chains at a Glance 2026',
      headers: ['Chain', 'Shops', 'Parent', 'Unique Feature'],
      rows: [
        ['William Hill', '~1,350', 'Evoke plc', 'Vegas Gaming & Plus Card'],
        ['Ladbrokes', '~1,400', 'Entain', 'Grid Partner Discounts'],
        ['Coral', '~1,350', 'Entain', 'Connect Rewards & BOG'],
        ['Betfred', '~1,300', 'Done family', 'Lucky 15 & Double Delight'],
        ['Paddy Power', '~550', 'Flutter', 'Humorous Markets']
      ]
    }
  ],

  groups: [
    {
      groupName: 'UK Betting Shops by the Numbers',
      items: [
        {
          id: 'industry-statistics',
          title: 'Industry Statistics (2025/26)',
          keyStats: [
            { label: 'Active Shops', value: '5,789' },
            { label: 'Peak (1970s)', value: '16,000+' },
            { label: 'FOBT Closures 2019', value: '1,209' },
            { label: 'Market GGY', value: '£16.8B' }
          ],
          content: `The UK betting shop sector has declined **36% since 2012**, with the FOBT stake cut triggering 1,209 closures in just 12 months. However, police callouts dropped **40%** after the £2 stake cap.

### Who Still Visits?

- **25-34 Year Olds**: Highest attendance age group (25%+)
- **Gender Split**: 20% men vs 6% women visit monthly
- **Revenue Concentration**: 86% of profits come from just 5% of customers`
        },
        {
          id: 'employment-data',
          title: 'Jobs in Retail Betting',
          keyStats: [
            { label: 'Sector Jobs', value: '58,000' },
            { label: 'At Risk', value: '10,000+' },
            { label: 'William Hill Staff', value: '~8,000' },
            { label: 'Betfred Staff', value: '~7,500' }
          ],
          content: `If another 2,000 shops close as predicted, over **10,000 jobs** could be at risk. William Hill and Betfred alone employ over 15,000 people across their retail networks.`
        }
      ]
    },
    {
      groupName: 'Official Store Locators',
      items: [
        {
          id: 'store-locators',
          title: 'Find Your Nearest Betting Shop',
          content: `Use these official locators to find your nearest betting shop:

- **William Hill**: [shoplocator.williamhill](https://shoplocator.williamhill/)
- **Ladbrokes**: [sports.ladbrokes.com/shop-locator](https://sports.ladbrokes.com/shop-locator)
- **Coral**: [coral.co.uk/shop-locator](https://www.coral.co.uk/en/sports/shop-locator)
- **Betfred**: [betfred.com/shop-locator](https://www.betfred.com/shop-locator)
- **Paddy Power**: [locator.pponside.com](https://locator.pponside.com/)
- **BoyleSports**: [boylesports.com/shoplocator](https://www.boylesports.com/shoplocator)`
        }
      ]
    },
    {
      groupName: 'The Dark Origins: 65 Years of History',
      items: [
        {
          id: 'history-timeline',
          title: 'From Funeral Parlours to Digi-Hubs',
          content: `For decades, betting shops were deliberately designed to deter loitering.

### Timeline

- **1961 — Legalisation:** 10,000 shops opened in 6 months. Windows had to be blacked out; no seating or TVs allowed.
- **1986 — The Great Deregulation:** Chairs, live TV, and refreshments finally allowed. The "funeral parlour" era ends.
- **1994 — Sunday Trading:** Sunday betting becomes legal 31 years after the first shops opened.
- **2002 — Tax Abolished:** Gordon Brown removes the 10% betting tax on winnings.
- **2019 — The FOBT Crash:** Max stakes cut from £100 to £2. 1,209 shops close within a year.
- **2025 — The Digi-Hub Era:** Entain rolls out 200 "Digi-Hubs" with interactive screens and premium Wi-Fi.`
        }
      ]
    },
    {
      groupName: 'The Men Behind the Counter',
      items: [
        {
          id: 'fred-done',
          title: 'Fred & Peter Done (Betfred Founders)',
          content: `Fred Done started Betfred in 1967 with money won from a bet on England to win the 1966 World Cup. He famously invented the "Lucky 15" bet in 1984. Today, Fred Done's net worth is estimated at **£2.29 billion**.

Betfred remains the UK's largest independent bookmaker with ~1,300 shops.`
        },
        {
          id: 'john-boyle',
          title: 'John Boyle (BoyleSports Founder)',
          content: `Founded in 1982 in Markethill, Co. Armagh. John Boyle grew the company into Ireland's largest independent bookmaker, expanding significantly into the UK Midlands and Northern Ireland.

Currently operates 277 shops in Ireland, 45 in Northern Ireland, and 46 in the UK mainland.`
        }
      ]
    },
    {
      groupName: 'Why 13% of Brits Still Bet in Person',
      items: [
        {
          id: 'reasons-to-visit',
          title: 'The Case for Physical Shops',
          pros: [
            'Anonymity & Cash: No digital footprint, no bank statements, no KYC for small bets',
            'Instant Payouts: Collect winnings in cash immediately, no 3-5 day processing',
            'Social Community: A place to watch racing and chat with regulars',
            'No Technology Required: Accessible to those who prefer paper slips over apps'
          ],
          content: `Despite the rise of mobile betting, **13% of UK adults** still visit betting shops monthly. For many, it's about more than just placing a bet—it's a social ritual.`
        }
      ]
    },
    {
      groupName: 'The Tech Powering 2026 Shops',
      items: [
        {
          id: 'shop-technology',
          title: 'SSBTs, FOBTs & Omnichannel',
          keyStats: [
            { label: 'SSBT Bets/Quarter', value: '40.5M' },
            { label: 'OTC Bets/Quarter', value: '129M' }
          ],
          content: `### Self-Service Betting Terminals (SSBTs)
SSBTs now account for 40.5 million bets per quarter, while Over-The-Counter (OTC) slips still handle 129 million transactions.

### Omnichannel Connection
William Hill Plus and Ladbrokes Grid allow you to withdraw online winnings as cash in-shop instantly.

### FOBTs (Fixed Odds Betting Terminals)
Category B2 machines are now limited to £2 spins, significantly reducing industry revenue but also police callouts.`
        }
      ]
    },
    {
      groupName: 'The Future',
      items: [
        {
          id: 'future-outlook',
          title: 'Survival of the Fittest',
          content: `Analysts predict another **2,000-3,000 closures by 2030**. Operators like Entain are pivoting to "Digi-Hubs"—premium venues with high-brightness screens, bet builders, and digital window displays to attract a younger audience.`
        }
      ]
    },
    {
      groupName: 'Betting Shop Trivia',
      items: [
        {
          id: 'trivia',
          title: 'Things You Didn\'t Know',
          content: `- **The Blackout Era**: Between 1961 and 1986, it was illegal for passers-by to see inside a shop. Windows were darkened to look like "funeral parlours".
- **Highest Density**: Grimsby has the UK's highest shop density (1 per 6,721 people). Oxford has the lowest (1 per 11,398).
- **The First Millionaire**: In 2004, a Betfred customer became the first betting shop millionaire, winning £1.13m.
- **Police & FOBTs**: After the £2 stake cap in 2019, police callouts to betting shops dropped by 40%.
- **Live Frequency**: SIS broadcasts a live racing event every 7-8 minutes, 24/7.`
        }
      ]
    }
  ],

  faq: [
    { q: 'When did betting shops become legal?', a: 'They became legal on May 1, 1961, following the Betting and Gaming Act 1960.' },
    { q: 'Why were windows blacked out in early shops?', a: 'It was a legal requirement to deter people from being attracted to gambling by seeing inside.' },
    { q: 'Can I withdraw online money in a shop?', a: 'Yes, using omnichannel cards like William Hill Plus or Ladbrokes Grid, you can get instant cash.' },
    { q: 'What is the maximum stake on a machine?', a: 'Since April 2019, the maximum stake on a FOBT is £2 per spin.' },
    { q: 'Who is the largest independent bookmaker?', a: 'Betfred, owned by Fred Done, is the largest with approximately 1,300 shops.' },
    { q: 'What is MOSES?', a: 'It is the Multi-Operator Self-Exclusion Scheme for betting shops. Call 0800 294 2060 to exclude.' },
    { q: 'Do shops open on Sundays?', a: 'Yes, but only since 1994. Hours are usually shorter than weekdays.' },
    { q: 'Are betting shop winnings taxed?', a: 'No. Gordon Brown abolished the 10% tax on winnings in 2002.' },
    { q: 'What is an SSBT?', a: 'A Self-Service Betting Terminal, a touchscreen machine for placing sports bets in-shop.' },
    { q: 'How many betting shops are left?', a: 'There are approximately 5,789 active shops in the UK as of Q1 2025.' },
    { q: 'What is the average problem gambler debt?', a: 'Research by Gordon Moody indicates an average debt of £17,000 for treatment-seeking individuals.' },
    { q: 'Who invented the Lucky 15 bet?', a: 'Betfred founder Fred Done invented the Lucky 15 bet in 1984.' }
  ],

  footer: {
    helpline: 'If you need to talk, call the National Gambling Helpline: 0808 8020 133.',
    lastUpdated: '2026-01-20'
  }
};
