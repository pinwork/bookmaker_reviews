import { IndustryReport } from '@/types';

export const responsibleGamblingIrelandBible: IndustryReport = {
  slug: 'responsible-gambling-ireland-guide',
  collections: ['guides'],
  h1: 'The 2026 Ireland Responsible Gambling Bible: Tools, Data & Recovery',
  metaTitle: 'Ireland Responsible Gambling Guide 2026 | ESRI Stats, GRAI & HSE Support',
  metaDescription: "The definitive 2026 guide to Irish gambling support. 3.3% problem gambling rate, HSE screening, Oisín McConville's story, and 2025 suicide study findings.",

  intro: {
    title: "Navigating Ireland's New Regulatory Era",
    content: `Ireland is undergoing its most significant gambling reform since 1926. With the Gambling Regulation Act 2024, the landscape has shifted from outdated 20th-century laws to a modern framework under the Gambling Regulatory Authority of Ireland (GRAI). However, the transition is ongoing. While new protections like the credit card ban are written in law, the National Exclusion Register is still in development. This guide provides verified data on Ireland's €5.5bn gambling spend, real stories of recovery, and the clinical support systems now available via the HSE.`
  },

  comparisonTables: [
    {
      id: 'ie-exclusion-tools-comparison',
      title: 'Exclusion vs Software vs Bank Blocks',
      headers: ['Feature', 'GRAI Registry', 'Gamban', 'Bank Blocks'],
      rows: [
        ['Status', 'Coming 2026+', 'Operational', 'Operational'],
        ['Blocks', 'GRAI-Licensed Sites', '100k+ Global Sites', 'Card & DD Payments'],
        ['Legal Basis', 'GRA Act 2024', 'Private Software', 'Bank Policy'],
        ['Cost', 'Free', 'Free (GamblingCare.ie)', 'Free'],
        ['Tech Layer', 'Operator Database', 'Device/Software', 'Payment Layer'],
        ['Best For', 'Legal Irish sites', 'Offshore & apps', 'Financial friction']
      ]
    },
    {
      id: 'ie-bank-blocks-2025',
      title: 'Irish Banks: Gambling Blocks (2025/26)',
      headers: ['Bank', 'Cooling-Off', 'Note'],
      rows: [
        ['AIB', '3 working days', 'Via "Freeze Card"; requires phone call to lift'],
        ['Bank of Ireland', '2 business days', 'Vulnerable Customer policy (May 2025)'],
        ['Permanent TSB', '48 hours', 'Only pillar bank with full in-app toggle'],
        ['Revolut Ireland', '48 hours', 'Most used among Irish 18-34s'],
        ['EBS', '3 working days', 'Requires manual customer service intervention']
      ]
    }
  ],

  groups: [
    {
      groupName: 'The Reality of Gambling Harm in Ireland',
      items: [
        {
          id: 'prevalence-stats',
          title: 'Prevalence & Participation',
          keyStats: [
            { label: 'Problem Rate', value: '3.3%' },
            { label: 'At-Risk Adults', value: '279,000' },
            { label: 'Annual Spend', value: '€5.5B' }
          ],
          content: `Problem gambling affects **3.3% of Irish adults** (~130,000 people). Another 7.1% (~279,000) show moderate evidence of harm. Ireland has the **highest per-capita gambling spend in the EU** at €5.5 billion annually.

*Source: ESRI, Oct 2023*`
        },
        {
          id: 'youth-crisis',
          title: 'Youth Gambling Crisis',
          keyStats: [
            { label: '16-Year-Olds Gambling', value: '22.9%' },
            { label: 'Childhood Exposure', value: '64%' },
            { label: 'Treatment Start Age', value: '<17' }
          ],
          content: `Ireland ranks **4th highest in Europe** for 16-year-old gambling at 22.9%. **64% of Irish adults** gambled before age 18, and 50% of those entering treatment started gambling before age 17.

*Sources: ESRI 2024, HSE Data*`
        },
        {
          id: 'economic-impact',
          title: 'Economic Impact',
          keyStats: [
            { label: 'Problem Gambler Revenue', value: '28.3%' },
            { label: 'Monthly Problem Spend', value: '€1,000+' }
          ],
          content: `Problem gamblers contribute **28.3% of industry revenue** despite being a small fraction of players. At-risk users spend an average of **€1,000+ per month**.

*Source: ESRI/IBCB*`
        }
      ]
    },
    {
      groupName: 'Gambling and Suicide in Ireland',
      items: [
        {
          id: 'suicide-study',
          title: '2025 National Study Findings',
          keyStats: [
            { label: 'Documented Deaths', value: '23' },
            { label: 'Male', value: '91%' },
            { label: 'Avg Age', value: '38.7' }
          ],
          content: `In January 2025, the Institute of Public Health and HSE published the first national study on gambling-related suicides in Ireland.

**Key Finding:** Cases are significantly **under-reported** due to stigma preventing gambling from being noted in many coroner reports.

The Keogh Family, whose son Lewis died by suicide in 2013 due to hidden debts, now leads national calls for reform, mirroring the Ritchie family's work in the UK.

*Source: IPH Jan 2025 Suicide Report*`
        }
      ]
    },
    {
      groupName: 'Irish Recovery: GAA Legends & Public Figures',
      items: [
        {
          id: 'oisin-mcconville',
          title: 'Oisín McConville',
          badge: 'Armagh GAA Legend',
          content: `The All-Ireland winner accumulated over **€140,000 in debt** and contemplated suicide multiple times. He has been gamble-free since 2005.

Now a qualified counsellor and GamblingCare ambassador, he is the most prominent voice for recovery in Irish sport.`
        },
        {
          id: 'tony-oreilly',
          title: 'Tony O\'Reilly ("Tony 10")',
          badge: 'Former An Post Manager',
          content: `Stole **€1.75 million** from his branch to fund a gambling addiction that saw him bet over €10 million total.

After serving time, he co-authored "Tony 10" and now works as an addiction counsellor.`
        },
        {
          id: 'niall-mcnamee',
          title: 'Niall McNamee',
          badge: 'Offaly GAA Footballer',
          content: `Spent over **€200,000 on gambling** and accumulated €80,000 in debt before seeking help in 2011.

Now an ambassador for Extern Problem Gambling, focusing on youth education.`
        }
      ]
    },
    {
      groupName: 'Am I Addicted? HSE Screening',
      items: [
        {
          id: 'hse-screening',
          title: 'HSE PGSI Clinical Self-Assessment',
          content: `The official screening used by the Health Service Executive. **A score of 8+ indicates problem gambling.**

1. Have you bet more than you could afford to lose?
2. Have you needed to gamble with larger amounts to get the same feeling?
3. Have you "chased" losses the next day?
4. Have you borrowed money or sold items to gamble?
5. Has gambling caused you stress or anxiety?
6. Have people criticized your betting?
7. Has your gambling caused financial problems for your household?
8. Have you felt guilty about your gambling?

### Interpretation
- **0**: Low risk.
- **1-7**: Moderate risk. Intervention recommended.
- **8+**: High risk. Contact GamblingCare: **1800 936 725**`
        }
      ]
    },
    {
      groupName: 'GRAI: Powers & Timeline (2024-2026)',
      items: [
        {
          id: 'grai-powers',
          title: 'The New Regulator',
          badge: 'Operational March 2025',
          content: `### Powers
- **Administrative Fines:** Up to €20m or 10% of turnover
- **Credit Card Ban:** Section 165 (Enforcement pending licensing)
- **Advertising Watershed:** 5:30 AM – 9:00 PM (Section 149)

**Note:** As of January 2026, GRAI has not yet issued fines as the full B2C licensing regime is still rolling out through the year.`
        }
      ]
    },
    {
      groupName: 'Support Services in Ireland',
      items: [
        {
          id: 'support-services',
          title: 'Where to Get Help',
          content: `### GamblingCare.ie
**1800 936 725** — Supported 2,500+ people in 2024 and provided 17,000 counselling sessions.

### Rutland Centre
**rutlandcentre.ie** — First fully HSE-funded 10-week gambling treatment programme (Launched March 2025).

### MABS Ireland
**0818 07 2000** — Free government service for gambling debt and personal insolvency.

### Gamblers Anonymous IE
**01 872 1133** — Daily meetings across Dublin, Cork, Galway, and Limerick.`
        }
      ]
    }
  ],

  faq: [
    { q: 'Is the National Exclusion Register working?', a: 'It is established by law but currently in development. Full launch is expected later in 2026 once GRAI licensing is complete.' },
    { q: 'Are free bets banned in Ireland?', a: 'Under the 2024 Act, "promotional inducements" (free bets) are prohibited. This is being phased in during 2025-26.' },
    { q: 'Is treatment free?', a: 'Yes. HSE-funded programs at the Rutland Centre and Helplink provide free clinical support.' },
    { q: 'Does MABS help with gambling debt?', a: 'Yes, MABS provides specialized budgeting for gambling-related insolvency, though they do not track these cases separately in public data.' }
  ],

  footer: {
    helpline: 'Free National Gambling Helpline (IE): 1800 936 725.',
    dataSource: 'Data from ESRI Oct 2023 Study, IPH Jan 2025 Suicide Report, and GRAI 2025 Operational Updates.',
    lastUpdated: '2026-01-20'
  }
};
