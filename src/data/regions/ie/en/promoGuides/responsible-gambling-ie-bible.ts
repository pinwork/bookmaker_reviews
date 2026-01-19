import { IndustryReport } from '@/types';

export const responsibleGamblingIrelandBible: IndustryReport = {
  slug: 'responsible-gambling-ireland-guide',
  h1: 'The 2026 Ireland Responsible Gambling Bible: Tools, Data & Recovery',
  metaTitle: 'Ireland Responsible Gambling Guide 2026 | ESRI Stats, GRAI & HSE Support',
  metaDescription: 'The definitive 2026 guide to Irish gambling support. 3.3% problem gambling rate, HSE screening, Oisín McConville’s story, and 2025 suicide study findings.',
  lastUpdated: '2026-01-27',

  intro: {
    title: 'Navigating Ireland’s New Regulatory Era',
    content: `Ireland is undergoing its most significant gambling reform since 1926. With the Gambling Regulation Act 2024, the landscape has shifted from outdated 20th-century laws to a modern framework under the Gambling Regulatory Authority of Ireland (GRAI). However, the transition is ongoing. While new protections like the credit card ban are written in law, the National Exclusion Register is still in development. This guide provides verified data on Ireland’s €5.5bn gambling spend, real stories of recovery, and the clinical support systems now available via the HSE.`
  },

  toolsComparison: {
    title: 'Exclusion vs Software vs Bank Blocks: Ireland Edition',
    headers: ['Feature', 'National Registry (GRAI)', 'Gamban', 'Irish Bank Blocks'],
    rows: [
      ['Status', '⚠️ In Development (Expected 2026+)', '✅ Operational', '✅ Operational'],
      ['What It Blocks', 'All GRAI-Licensed Operators', '100,000+ Global Gambling Sites', 'Direct Debit & Card Payments'],
      ['Legal Basis', 'Gambling Regulation Act 2024', 'Private Software', 'Bank Voluntary Policy'],
      ['Cost', 'Free', 'Free via GamblingCare.ie', 'Free'],
      ['Technical Layer', 'Operator Database', 'Device/Software Level', 'Payment/Banking Layer'],
      ['Best For', 'Total ban on legal Irish sites', 'Blocking offshore & apps', 'Adding financial friction']
    ]
  },

  bankBlocks: {
    title: 'Irish Banks: Gambling Blocks & Cooling-Off Periods',
    description: 'Following the 2025 "Common Commitment of Care" framework, Ireland’s major banks have standardized their gambling protections. Note that cooling-off periods in Ireland often differ from UK standards.',
    list: [
      { bank: 'AIB', coolingOff: '3 working days', note: 'Can be activated via the "Freeze Card" section; requires a phone call to lift.' },
      { bank: 'Bank of Ireland (BoI)', coolingOff: '2 business days', note: 'Part of the Vulnerable Customer policy introduced in May 2025.' },
      { bank: 'Permanent TSB', coolingOff: '48 hours', note: 'Currently the only Irish pillar bank with a full in-app toggle.' },
      { bank: 'Revolut Ireland', coolingOff: '48 hours', note: 'The most widely used tool among Irish 18-34s.' },
      { bank: 'EBS', coolingOff: '3 working days', note: 'Requires manual intervention via customer service.' }
    ],
    limitation: 'Important: Section 165 of the 2024 Act bans credit card gambling, but while the licensing regime rolls out, these bank blocks remain the primary line of defense.'
  },

  irelandStatistics: {
    title: 'The Reality of Gambling Harm in Ireland (2025/26 Data)',
    sections: [
      {
        category: 'Prevalence & Participation',
        stats: [
          { label: 'Problem Gambling Rate', value: '3.3% of adults (~130,000 people)', source: 'ESRI, Oct 2023' },
          { label: 'Moderate Evidence of Harm', value: '7.1% of adults (~279,000 people)', source: 'ESRI, Oct 2023' },
          { label: 'Total Annual Spend', value: '€5.5 Billion', note: 'Highest per-capita in EU' }
        ]
      },
      {
        category: 'Youth Gambling Crisis',
        stats: [
          { label: '16-Year-Olds Gambling', value: '22.9%', note: 'Ireland ranks 4th highest in Europe' },
          { label: 'Childhood Exposure', value: '64% of adults gambled before age 18', source: 'ESRI 2024' },
          { label: 'Treatment Entry Age', value: '50% started gambling before age 17', source: 'HSE Data' }
        ]
      },
      {
        category: 'Economic Impact',
        stats: [
          { label: 'Industry Profit Share', value: '28.3% of revenue from problem gamblers', source: 'ESRI/IBCB' },
          { label: 'Monthly Spend (Problem)', value: '€1,000+', note: 'Average for at-risk users' }
        ]
      }
    ]
  },

  suicideStudy: {
    title: 'National Study: Gambling and Suicide in Ireland',
    description: 'In January 2025, the Institute of Public Health and HSE published the first national study on gambling-related suicides in Ireland.',
    findings: [
      { label: 'Documented Deaths', value: '23 suicides (2015-2020)', note: 'Known cases from coroner files' },
      { label: 'Gender Profile', value: '91% Male', note: 'Average age: 38.7 years' },
      { label: 'Key Finding', value: 'Under-reported', note: 'Stigma prevents gambling from being noted in many coroner reports.' }
    ],
    advocacy: 'The Keogh Family, whose son Lewis died by suicide in 2013 due to hidden debts, now leads national calls for reform, mirroring the Ritchie family’s work in the UK.'
  },

  realStories: {
    title: 'Irish Recovery: GAA Legends & Public Figures',
    stories: [
      {
        name: 'Oisín McConville',
        role: 'Armagh GAA Legend',
        story: 'The All-Ireland winner accumulated over €140,000 in debt and contemplated suicide multiple times. He has been gamble-free since 2005.',
        impact: 'Now a qualified counsellor and GamblingCare ambassador, he is the most prominent voice for recovery in Irish sport.'
      },
      {
        name: 'Tony O\'Reilly ("Tony 10")',
        role: 'Former An Post Manager',
        story: 'Stole €1.75 million from his branch to fund a gambling addiction that saw him bet over €10 million total.',
        impact: 'After serving time, he co-authored "Tony 10" and now works as an addiction counsellor.'
      },
      {
        name: 'Niall McNamee',
        role: 'Offaly GAA Footballer',
        story: 'Spent over €200,000 on gambling and accumulated €80,000 in debt before seeking help in 2011.',
        impact: 'Now an ambassador for Extern Problem Gambling, focusing on youth education.'
      }
    ]
  },

  hseScreening: {
    title: 'Am I Addicted? HSE PGSI Screening',
    description: 'The Clinical Self-Assessment used by the Health Service Executive. A score of 8+ indicates problem gambling.',
    questions: [
      { id: 1, text: 'Have you bet more than you could afford to lose?' },
      { id: 2, text: 'Have you needed to gamble with larger amounts to get the same feeling?' },
      { id: 3, text: 'Have you "chased" losses the next day?' },
      { id: 4, text: 'Have you borrowed money or sold items to gamble?' },
      { id: 5, text: 'Has gambling caused you stress or anxiety?' },
      { id: 6, text: 'Have people criticized your betting?' },
      { id: 7, text: 'Has your gambling caused financial problems for your household?' },
      { id: 8, text: 'Have you felt guilty about your gambling?' }
    ],
    interpretation: {
      zero: 'Low risk.',
      oneToSeven: 'Moderate risk. Intervention recommended.',
      eightPlus: 'High risk. Contact GamblingCare (1800 936 725).'
    }
  },

  regulatoryAuthority: {
    title: 'GRAI: Powers & Timeline (2024-2026)',
    status: 'Operational since March 2025',
    powers: [
      { power: 'Administrative Fines', limit: 'Up to €20m or 10% of turnover' },
      { power: 'Credit Card Ban', status: 'Section 165 (Enforcement pending licensing)' },
      { power: 'Advertising Watershed', status: '5:30 AM – 9:00 PM (Section 149)' }
    ],
    note: 'As of January 2026, GRAI has not yet issued fines as the full B2C licensing regime is still rolling out through the year.'
  },

  supportServices: {
    title: 'Support in the Republic of Ireland',
    list: [
      { name: 'GamblingCare.ie', contact: '1800 936 725', desc: 'Supported 2,500+ people in 2024 and provided 17,000 counselling sessions.' },
      { name: 'Rutland Centre', contact: 'rutlandcentre.ie', desc: 'First fully HSE-funded 10-week gambling treatment programme (Launched March 2025).' },
      { name: 'MABS Ireland', contact: '0818 07 2000', desc: 'Free government service for gambling debt and personal insolvency.' },
      { name: 'Gamblers Anonymous IE', contact: '01 872 1133', desc: 'Daily meetings across Dublin, Cork, Galway, and Limerick.' }
    ]
  },

  faq: [
    { q: 'Is the National Exclusion Register working?', a: 'It is established by law but currently in development. Full launch is expected later in 2026 once GRAI licensing is complete.' },
    { q: 'Are free bets banned in Ireland?', a: 'Under the 2024 Act, "promotional inducements" (free bets) are prohibited. This is being phased in during 2025-26.' },
    { q: 'Is treatment free?', a: 'Yes. HSE-funded programs at the Rutland Centre and Helplink provide free clinical support.' },
    { q: 'Does MABS help with gambling debt?', a: 'Yes, MABS provides specialized budgeting for gambling-related insolvency, though they do not track these cases separately in public data.' }
  ],

  tooltips: {
    grai: "Gambling Regulatory Authority of Ireland: The official watchdog established in 2025.",
    hse: "Health Service Executive: Ireland's public health provider.",
    pgsi: "Problem Gambling Severity Index: The clinical gold standard for measuring harm.",
    mabs: "Money Advice & Budgeting Service: The state agency for debt support.",
    watershed: "The 5:30 AM – 9:00 PM ban on gambling advertisements.",
    inducement: "Any offer like a 'free bet' used to encourage gambling—now restricted by GRAI."
  },

  footer: {
    helpline: 'Free National Gambling Helpline (IE): 1800 936 725.',
    dataSource: 'Data from ESRI Oct 2023 Study, IPH Jan 2025 Suicide Report, and GRAI 2025 Operational Updates.',
    lastUpdated: 'January 2026'
  }
};