import { trustBadges } from '../../../../trustSignals';

export const responsibleGamblingBible = {
  slug: 'responsible-gambling-uk-guide',
  h1: 'The 2026 UK Responsible Gambling Bible: Tools, Data & Recovery',
  metaTitle: 'UK Responsible Gambling Guide 2026 | Complete Help, Stats & Recovery Tools',
  metaDescription: 'The definitive 2026 guide to UK gambling support. Real stories, NHS screening, GamStop mechanics, £19m fines exposed, and national statistics on harm.',
  
  activeTrustBadges: trustBadges.map(b => b.slug),

  intro: {
    title: 'Why This Guide Exists',
    content: `In 2025, the UK Gambling Commission recorded 1.4 million problem gamblers—a number that doesn't include the millions more affected as family members, partners, and friends. This guide is not marketing material. It is a factual database of every tool, statistic, and support system available to anyone touched by gambling harm in the United Kingdom. We document real stories, expose industry fines, and explain the psychology behind addiction so you can make informed decisions.`
  },

  toolsComparison: {
    title: 'GamStop vs Gamban vs Bank Blocks: Complete Technical Comparison',
    headers: ['Feature', 'GamStop', 'Gamban', 'Bank Blocks'],
    rows: [
      ['What It Blocks', 'All UK-Licensed Operators', '100,000+ Global Gambling Sites', 'Card Transactions to Gambling Merchants'],
      ['Offshore/Unlicensed Sites', '❌ Not Blocked', '✅ Blocked Globally', '⚠️ Partial (MCC dependent)'],
      ['Land-Based Venues', '❌ Not Covered', '❌ Not Covered', '✅ Blocks Debit Card Use'],
      ['Cost', 'Free', '£24.99/year (Free via TalkBanStop)', 'Free'],
      ['Reversibility', 'After minimum period + 24h cooling-off', 'Extremely Difficult', '48–72h Cooling-off'],
      ['Technical Layer', 'Operator Database (ID Matching)', 'Device/Software Level', 'Payment/Banking Layer'],
      ['Best For', 'Blocking all legal UK sites', 'Blocking offshore & apps', 'Adding financial friction']
    ]
  },

  bankBlocks: {
    title: 'UK Banks with Gambling Blocks (2025/26)',
    description: 'Most UK banks now offer gambling transaction blocks. The "cooling-off" period is the mandatory wait time before you can re-enable gambling after turning the block off.',
    coverage: '~60% of UK personal current accounts (~49 million accounts) now have gambling block options.',
    list: [
      { bank: 'Barclays', coolingOff: '72 hours', note: 'Extended from 48h in September 2024' },
      { bank: 'Monzo', coolingOff: '48 hours', note: 'Pioneer of UK bank blocking (June 2018)' },
      { bank: 'Starling', coolingOff: '48 hours', note: '~25% of customers have activated the block' },
      { bank: 'HSBC', coolingOff: '48 hours', note: 'Standard implementation' },
      { bank: 'Lloyds / Halifax / BoS', coolingOff: '48 hours', note: 'Group-wide policy' },
      { bank: 'NatWest / RBS', coolingOff: '48 hours', note: 'Standard implementation' },
      { bank: 'TSB', coolingOff: '48 hours', note: 'Standard implementation' },
      { bank: 'Santander', coolingOff: 'Instant on/off', note: '⚠️ Not recommended for recovery' },
      { bank: 'Revolut', coolingOff: 'Varies', note: 'Check app settings' }
    ],
    limitation: 'Bank blocks can be bypassed via cash withdrawals. For complete protection, combine with GamStop and Gamban.'
  },

  ukStatistics: {
    title: 'The Reality of Gambling Harm in the UK (2025/26 Data)',
    sections: [
      {
        category: 'Problem Gambling Prevalence',
        stats: [
          { label: 'Problem Gamblers (PGSI 8+)', value: '2.7% of adults (~1.4 million people)', source: 'GSGB 2024' },
          { label: 'Youth Problem Gambling (18-24)', value: '10.2% — highest of any age group', source: 'UKGC Oct 2025' },
          { label: 'Child Gambling (11-17)', value: '1.5% problem gamblers (up from 0.7% in 2023)', source: 'Gambling Commission' }
        ]
      },
      {
        category: 'Financial Impact',
        stats: [
          { label: 'Average Problem Gambler Debt', value: '£17,000 (treatment-seeking individuals)', source: 'Gordon Moody Research' },
          { label: 'UK Online Gamblers in Debt', value: '3.3 million people (18%)', source: 'Citizens Advice' },
          { label: 'Industry Profit Concentration', value: '86% of online profits from just 5% of customers', source: 'Social Market Foundation' },
          { label: 'Annual UK Gambling Spend (GGY)', value: '£16.8 billion (April 2024 – March 2025)', source: 'Gambling Commission' }
        ]
      },
      {
        category: 'Mental Health & Suicide',
        stats: [
          { label: 'Estimated Gambling-Related Suicides', value: '117–496 deaths annually in England', source: 'OHID 2023 (modelling)' },
          { label: 'Suicidal Thoughts (Problem Gamblers)', value: '6x more likely than general population', source: 'University of Bristol 2025' },
          { label: 'Suicide Attempts (Problem Gamblers)', value: '15x more likely than general population', source: 'University of Bristol 2025' },
          { label: 'Treatment Clients with Gambling Debt', value: '66%', source: 'GambleAware NGSN 2023/24' }
        ]
      }
    ]
  },

  realStories: {
    title: 'Real Lives Affected by Gambling',
    description: 'Documented cases from UK coroner inquests, public advocacy, and charity testimonials.',
    stories: [
      {
        name: 'Jack Ritchie',
        years: '1993–2017',
        age: 24,
        story: 'Jack started at 17 on FOBTs. He won £1,000 in less than 35 seconds — the trigger for a 7-year addiction. His death led to the first-ever Article 2 inquest examining the state\'s role in gambling harm. The coroner ruled that regulation was "woefully inadequate."',
        outcome: 'His parents founded "Gambling With Lives" and were awarded MBEs in 2023.',
        source: 'Coroner\'s Court, Sheffield 2022'
      },
      {
        name: 'Luke Ashton',
        years: '1981–2021',
        age: 40,
        story: 'A father of two who placed over 100 bets per day in his final weeks. He accumulated £18,000 in debt and lost £5,000 in his last month alone.',
        outcome: 'First inquest in UK history to officially record "gambling disorder" as cause of death by suicide. Betfair was named as an "Interested Person".',
        source: 'Coroner\'s Court 2023'
      },
      {
        name: 'Paul Merson',
        years: 'Ongoing',
        story: 'The former Arsenal legend publicly disclosed losing £7 million over 35 years. He has been married three times, with gambling contributing to each breakdown. He now lives in rented accommodation.',
        outcome: '"I\'ve been addicted to alcohol and cocaine, but the most destructive addiction is gambling. It\'s already in you, just waiting."',
        source: 'Public interviews, 2021–2024'
      },
      {
        name: 'Chris Bruney',
        years: 'Deceased',
        story: 'Lost £119,000 in five days. The operator sent him a £400 "bonus" hours before his death. Suicide note: "It was the gambling."',
        outcome: 'Playtech paid a £3.5 million settlement to the family. The coroner ruled the death was caused in part by "the shame of gambling."',
        source: 'Coroner\'s report'
      },
      {
        name: 'Tony Adams',
        years: 'Recovery Advocate',
        story: 'The former Arsenal captain founded Sporting Chance Clinic in 2000 to help athletes with addiction.',
        outcome: '"We get more gambling addicts through the clinic now than alcoholics. Gambling is epidemic in professional football."',
        source: 'Sporting Chance data, 2024'
      }
    ]
  },

  nhsScreening: {
    title: 'Am I Addicted? The Official NHS 10-Point Screening',
    description: 'Standard screening used by UK healthcare professionals. If you answer "Yes" to 2 or more, gambling is likely causing harm.',
    questions: [
      { id: 1, text: 'Do you spend a lot of time thinking about gambling?' },
      { id: 2, text: 'Have you needed to gamble with larger amounts over time?' },
      { id: 3, text: 'Have you tried to cut down or stop but couldn\'t?' },
      { id: 4, text: 'Do you feel restless or irritable when trying to stop?' },
      { id: 5, text: 'Do you gamble to escape problems or anxiety?' },
      { id: 6, text: 'Do you return to "chase" losses?' },
      { id: 7, text: 'Have you lied to hide the extent of your gambling?' },
      { id: 8, text: 'Have you jeopardized a relationship or job?' },
      { id: 9, text: 'Have you committed illegal acts to finance gambling?' },
      { id: 10, text: 'Have you relied on others for money for a desperate situation?' }
    ],
    interpretation: {
      zeroToOne: 'Low risk. Stay aware of your habits.',
      twoToThree: 'Moderate risk. Use tools like deposit limits.',
      fourPlus: 'High risk. Contact GamCare (0808 8020 133).'
    }
  },

  psychology: {
    title: 'The Science Behind Gambling Addiction',
    mechanisms: [
      {
        name: 'The Dopamine Loop',
        explanation: 'Activates the reward pathway, releasing dopamine at up to 10x normal levels. For problem gamblers, dopamine remains high during losses, explaining "loss-chasing".',
        source: 'Nature Neuroscience'
      },
      {
        name: 'Variable Ratio Reinforcement',
        explanation: 'Rewards come at unpredictable intervals, creating behavior that is extremely resistant to stopping. The brain keeps playing because it never knows when the next win is coming.',
        source: 'Skinner Research'
      },
      {
        name: 'The Near-Miss Effect',
        explanation: 'The brain processes a "near win" almost identically to a real win, triggering the urge to keep playing. Machines are often programmed to increase this frequency.',
        source: 'Journal of Gambling Studies'
      },
      {
        name: 'Cognitive Distortions',
        explanation: 'Thinking errors like the Gambler\'s Fallacy ("I\'m due for a win"), Illusion of Control, and Selective Recall (remembering wins more than losses).',
        source: 'Griffiths Research'
      }
    ]
  },

  majorFines: {
    title: 'UK Gambling Commission: Record Fines (2017–2025)',
    totalSince2022: '£76 million across 26 cases',
    fines: [
      { rank: 1, operator: 'William Hill', amount: '£19.2 million', date: 'March 2023', violation: 'Customer allowed to deposit £23k in 20 mins without checks.' },
      { rank: 2, operator: 'Entain (Ladbrokes/Coral)', amount: '£17 million', date: 'August 2022', violation: 'Social housing resident deposited £186k without checks.' },
      { rank: 3, operator: 'Caesars Entertainment', amount: '£13 million', date: 'April 2020', violation: 'Systemic failures across 11 UK casinos.' },
      { rank: 4, operator: 'Betway', amount: '£11.6 million', date: 'March 2020', violation: 'VIP customer lost £4m without meaningful interaction.' },
      { rank: 5, operator: 'Platinum Gaming', amount: '£10 million', date: 'October 2025', violation: 'Social responsibility and AML failures.' },
      { rank: 6, operator: '888 Holdings', amount: '£9.4 million', date: 'March 2022', violation: 'Checks only triggered after £40,000 losses.' },
      { rank: 7, operator: '888 Holdings', amount: '£7.8 million', date: 'August 2017', violation: '7,000+ self-excluded customers accessed accounts.' },
      { rank: 8, operator: 'Bet365', amount: '£582,120', date: 'April 2024', violation: 'Ineffective KYC triggers and AML failures.' }
    ]
  },

  groups: [
    {
      groupName: 'Part 1: Self-Exclusion Systems',
      items: [
        {
          id: 'gamstop_complete',
          title: 'GamStop: Technical Breakdown',
          content: `
### How It Works
Mandatory for all UK licensed operators since March 2020. Once you provide your details (Name, DOB, Email), your ID is synced across the entire industry database. 

### Mandatory Waiting Periods
Exclusions of 6 months, 1 year, or 5 years cannot be cancelled under any circumstances. Once the period ends, you must manually call 0800 138 6518 to deactivate. A mandatory **24-hour cooling-off wait** is applied before access is restored.

### The 7-Year Rule
Even after expiry, GamStop retains your data and continues to inform operators for an additional 7 years unless a removal request is successfully processed.
          `.trim()
        },
        {
          id: 'talkbanstop',
          title: 'TalkBanStop Partnership',
          content: `
### The Three-Layer Protection
TalkBanStop is a collaborative approach that combines:
1. **Talk (GamCare):** Emotional support and professional counselling.
2. **Ban (Gamban):** Device-level software blocking 100,000+ gambling sites worldwide.
3. **Stop (GamStop):** Operator-level self-exclusion for all UK-licensed platforms.

### Real Impact
Gamban is provided **FREE** through this partnership (Standard cost £24.99/yr). To date, over 12,000+ free licenses have been issued, creating a multi-layered safety net that prevents both licensed and offshore access.
          `.trim()
        }
      ]
    },
    {
      groupName: 'Part 2: Support Services',
      items: [
        {
          id: 'gamcare_complete',
          title: 'GamCare Support Network',
          content: `
### National Gambling Helpline
Available 24/7 via phone (0808 8020 133), WhatsApp, and Live Chat. 86% of calls are answered within 30 seconds.

### Treatment & Peer Support
GamCare offers FREE face-to-face therapy and CBT. They also manage moderated forums and daily chatrooms (8pm–9pm) for peer support. 57% of treatment referrals come through the helpline.
          `.trim()
        },
        {
          id: 'gordon_moody_residential',
          title: 'Gordon Moody Residential Care',
          content: `
### Intensive Intervention
The UK's only residential provider for severe cases. Programmes include a 6-week immersion followed by extensive aftercare (~182 days total). 

### Clinical Success
Centres in Dudley, Manchester, and Wolverhampton (women-only). Average PGSI score of participants drops significantly from 21.2 (extreme) to 5.9 (moderate/low) post-treatment.
          `.trim()
        }
      ]
    },
    {
      groupName: 'Part 3: 2025–2026 Regulatory Changes',
      items: [
        {
          id: 'stake_limits_2025',
          title: 'Stake Limits (April 2025)',
          content: `
### New Online Slot Restrictions
- **Universal:** £5 maximum stake per spin for all adults.
- **Young Adult (18-24):** £2 maximum stake per spin (May 2025).
- **Game Speed:** Mandatory 2.5s between spins. Autoplay and "Turbo" features are strictly banned. Minimum game cycle of 5 seconds.
          `.trim()
        },
        {
          id: 'statutory_levy_2025',
          title: 'Statutory Gambling Levy (April 2025)',
          content: `
### Funding the Future
Replaces the old voluntary contribution system. Remote operators now pay a mandatory **1.1% of GGY**. 

### Fund Distribution:
- **50% Treatment:** Directed to NHS-led recovery services.
- **30% Prevention:** Funding national awareness campaigns.
- **20% Research:** Independent academic studies into gambling harm.
          `.trim()
        },
        {
          id: 'financial_checks_2025',
          title: 'Financial Vulnerability Checks',
          content: `
### Frictionless Checks
Triggered at **£150 net deposits** per 30 days. Uses public data (bankruptcies, CCJs, IVAs) to identify financial risk frictionlessly from Feb 2025. 95-97% are completed without requiring customer documents.
          `.trim()
        }
      ]
    }
  ],

  faq: [
    { q: 'Can I cancel GamStop early?', a: 'No. Minimum periods (6 months, 1yr, 5yrs) are strictly enforced and cannot be shortened.' },
    { q: 'Is GamCare free?', a: 'Yes. All services, including the 24/7 helpline and face-to-face therapy, are 100% free.' },
    { q: 'What is TalkBanStop?', a: 'A multi-layer approach combining GamCare (Talk), Gamban (Ban software), and GamStop (Stop exclusion).' },
    { q: 'Does GamStop block offshore sites?', a: 'No. It only covers UKGC licensed sites. Use Gamban for global blocking.' },
    { q: 'How long does recovery take?', a: 'Recovery is a cycle. Research shows stabilization usually occurs 1-2 years after treatment initiation.' },
    { q: 'How effective is GamStop?', a: '78% of users say it delivered expected results; 75% quit all online gambling after registration.' },
    { q: 'Do banks block gambling?', a: 'Yes, 81% of UK banks offer blocks. Barclays has a 72-hour cooling-off period.' },
    { q: 'What is the PGSI score?', a: 'The Problem Gambling Severity Index. A score of 8 or more indicates a high level of problem gambling.' },
    { q: 'What happens after GamStop ends?', a: 'Exclusion remains active indefinitely until you manually request removal and wait 24 hours.' },
    { q: 'Are gambling fines public?', a: 'Yes. The UKGC has issued £76m in fines since 2022 to improve industry safety.' }
  ],

  tooltips: {
    gamstop: "UK national self-exclusion for all licensed online operators.",
    gamban: "Software blocking 100,000+ gambling sites globally.",
    gamcare: "UK's primary support charity. Free 24/7 helpline: 0808 8020 133.",
    gordon_moody: "The UK's only residential provider for severe gambling addiction.",
    cooling_off: "Mandatory 24-72h wait before restrictions or bank blocks can be lifted.",
    fobt: "Fixed Odds Betting Terminal. High-stakes machines now limited to £2 max stake.",
    ggy: "Gross Gambling Yield: Total amount retained by operators after paying out winnings.",
    ukgc: "United Kingdom Gambling Commission: The official industry regulator.",
    statutory_levy: "Mandatory 1.1% tax on operators (starting 2025) to fund recovery.",
    article_2_inquest: "A coroner's inquest examining the state's role in a death (e.g. Jack Ritchie case).",
    affordability_check: "Checks triggered at £150 net deposits per 30 days to identify financial risk.",
    mcc_code: "Merchant Category Code (7995) used by banks to identify gambling payments.",
    snr: "Stake Not Returned: You keep the winnings but not the original stake of a free bet.",
    self_exclusion: "A voluntary process where you ask a provider to exclude you from gambling for a set time."
  },

  footer: {
    helpline: 'National Gambling Helpline: 0808 8020 133 (24/7, free).',
    lastUpdated: 'January 2026'
  }
} as const;