import { IndustryReport } from '@/types';

export const responsibleGamblingBible: IndustryReport = {
  slug: 'responsible-gambling-uk-guide',
  collections: ['guides'],
  h1: 'The 2026 UK Responsible Gambling Bible: Tools, Data & Recovery',
  metaTitle: 'UK Responsible Gambling Guide 2026 | Complete Help, Stats & Recovery Tools',
  metaDescription: 'The definitive 2026 guide to UK gambling support. Real stories, NHS screening, GamStop mechanics, £19m fines exposed, and national statistics on harm.',

  intro: {
    title: 'Why This Guide Exists',
    content: `In 2025, the UK Gambling Commission recorded 1.4 million problem gamblers—a number that doesn't include the millions more affected as family members, partners, and friends. This guide is not marketing material. It is a factual database of every tool, statistic, and support system available to anyone touched by gambling harm in the United Kingdom. We document real stories, expose industry fines, and explain the psychology behind addiction so you can make informed decisions.`
  },

  comparisonTables: [
    {
      id: 'gamstop-gamban-comparison',
      title: 'GamStop vs Gamban vs Bank Blocks',
      headers: ['Feature', 'GamStop', 'Gamban', 'Bank Blocks'],
      rows: [
        ['What It Blocks', 'UK-Licensed Sites', '100k+ Global Sites', 'Card Transactions'],
        ['Offshore Sites', 'Not Blocked', 'Blocked', 'Partial'],
        ['Land-Based', 'Not Covered', 'Not Covered', 'Blocks Cards'],
        ['Cost', 'Free', '£24.99/yr', 'Free'],
        ['Reversibility', 'Min period + 24h', 'Very Difficult', '48-72h'],
        ['Tech Layer', 'Operator Database', 'Device/Software', 'Payment Layer'],
        ['Best For', 'UK legal sites', 'Offshore & apps', 'Financial friction']
      ]
    },
    {
      id: 'bank-blocks-2025',
      title: 'UK Banks with Gambling Blocks (2025/26)',
      headers: ['Bank', 'Cooling-Off', 'Note'],
      rows: [
        ['Barclays', '72 hours', 'Extended from 48h in Sep 2024'],
        ['Monzo', '48 hours', 'Pioneer (June 2018)'],
        ['Starling', '48 hours', '~25% of customers activated'],
        ['HSBC', '48 hours', 'Standard implementation'],
        ['Lloyds / Halifax / BoS', '48 hours', 'Group-wide policy'],
        ['NatWest / RBS', '48 hours', 'Standard implementation'],
        ['TSB', '48 hours', 'Standard implementation'],
        ['Santander', 'Instant', 'Not recommended for recovery'],
        ['Revolut', 'Varies', 'Check app settings']
      ]
    }
  ],

  groups: [
    {
      groupName: 'The Scale of Gambling Harm',
      items: [
        {
          id: 'problem-gambling-stats',
          title: 'Problem Gambling Prevalence',
          keyStats: [
            { label: 'Problem Gamblers', value: '1.4M' },
            { label: 'Youth (18-24)', value: '10.2%' },
            { label: 'Children (11-17)', value: '1.5%' }
          ],
          content: `Problem gamblers (PGSI 8+) represent **2.7% of UK adults** (~1.4 million people). Youth aged 18-24 have the highest rate at **10.2%**. Child problem gambling (11-17) has doubled from 0.7% in 2023 to **1.5%** today.

*Sources: GSGB 2024, UKGC Oct 2025, Gambling Commission*`
        },
        {
          id: 'financial-impact-stats',
          title: 'Financial Impact',
          keyStats: [
            { label: 'Avg Debt', value: '£17,000' },
            { label: 'Gamblers in Debt', value: '3.3M' },
            { label: 'Annual GGY', value: '£16.8B' }
          ],
          content: `Treatment-seeking problem gamblers carry an average debt of **£17,000**. 18% of UK online gamblers (3.3 million) are in debt. **86% of online profits** come from just 5% of customers.

*Sources: Gordon Moody Research, Citizens Advice, Social Market Foundation, Gambling Commission*`
        },
        {
          id: 'suicide-stats',
          title: 'Mental Health & Suicide',
          keyStats: [
            { label: 'Annual Deaths', value: '117-496' },
            { label: 'Suicidal Thoughts', value: '6x higher' },
            { label: 'Suicide Attempts', value: '15x higher' }
          ],
          content: `Gambling is estimated to cause **117-496 suicides annually** in England. Problem gamblers are **6x more likely** to have suicidal thoughts and **15x more likely** to attempt suicide than the general population. 66% of treatment clients carry gambling debt.

*Sources: OHID 2023, University of Bristol 2025, GambleAware NGSN 2023/24*`
        },
        {
          id: 'jack-ritchie',
          title: 'Jack Ritchie (1993-2017)',
          content: `Jack started at 17 on FOBTs. He won £1,000 in less than 35 seconds — the trigger for a 7-year addiction. His death at age 24 led to the first-ever Article 2 inquest examining the state's role in gambling harm. The coroner ruled that regulation was "woefully inadequate."

His parents founded "Gambling With Lives" and were awarded MBEs in 2023.

*Source: Coroner's Court, Sheffield 2022*`
        },
        {
          id: 'luke-ashton',
          title: 'Luke Ashton (1981-2021)',
          content: `A father of two who placed over 100 bets per day in his final weeks. He accumulated £18,000 in debt and lost £5,000 in his last month alone, dying at age 40.

First inquest in UK history to officially record "gambling disorder" as cause of death by suicide. Betfair was named as an "Interested Person".

*Source: Coroner's Court 2023*`
        },
        {
          id: 'paul-merson',
          title: 'Paul Merson (Public Advocate)',
          content: `The former Arsenal legend publicly disclosed losing **£7 million over 35 years**. He has been married three times, with gambling contributing to each breakdown. He now lives in rented accommodation.

> "I've been addicted to alcohol and cocaine, but the most destructive addiction is gambling. It's already in you, just waiting."

*Source: Public interviews, 2021-2024*`
        },
        {
          id: 'chris-bruney',
          title: 'Chris Bruney',
          content: `Lost **£119,000 in five days**. The operator sent him a £400 "bonus" hours before his death. Suicide note: "It was the gambling."

Playtech paid a £3.5 million settlement to the family. The coroner ruled the death was caused in part by "the shame of gambling".

*Source: Coroner's report*`
        },
        {
          id: 'tony-adams',
          title: 'Tony Adams (Recovery Advocate)',
          content: `The former Arsenal captain founded Sporting Chance Clinic in 2000 to help athletes with addiction.

> "We get more gambling addicts through the clinic now than alcoholics. Gambling is epidemic in professional football."

*Source: Sporting Chance data, 2024*`
        }
      ]
    },
    {
      groupName: 'Understanding Addiction',
      items: [
        {
          id: 'nhs-screening',
          title: 'Official NHS 10-Point Screening',
          content: `Standard screening used by UK healthcare professionals. **If you answer "Yes" to 2 or more, gambling is likely causing harm.**

1. Do you spend a lot of time thinking about gambling?
2. Have you needed to gamble with larger amounts over time?
3. Have you tried to cut down or stop but couldn't?
4. Do you feel restless or irritable when trying to stop?
5. Do you gamble to escape problems or anxiety?
6. Do you return to "chase" losses?
7. Have you lied to hide the extent of your gambling?
8. Have you jeopardized a relationship or job?
9. Have you committed illegal acts to finance gambling?
10. Have you relied on others for money for a desperate situation?

### Interpretation
- **0-1 Yes**: Low risk. Stay aware of your habits.
- **2-3 Yes**: Moderate risk. Use tools like deposit limits.
- **4+ Yes**: High risk. Contact GamCare: **0808 8020 133**`
        },
        {
          id: 'psychology',
          title: 'How Addiction Works',
          content: `### The Dopamine Loop
Gambling activates the reward pathway, releasing dopamine at up to **10x normal levels**. For problem gamblers, dopamine remains high during losses, explaining "loss-chasing". *(Source: Nature Neuroscience)*

### Variable Ratio Reinforcement
Rewards come at unpredictable intervals, creating behavior that is extremely resistant to stopping. The brain keeps playing because it never knows when the next win is coming. *(Source: Skinner Research)*

### The Near-Miss Effect
The brain processes a "near win" almost identically to a real win, triggering the urge to keep playing. Machines are often programmed to increase this frequency. *(Source: Journal of Gambling Studies)*

### Cognitive Distortions
Thinking errors like the Gambler's Fallacy ("I'm due for a win"), Illusion of Control, and Selective Recall (remembering wins more than losses). *(Source: Griffiths Research)*`
        }
      ]
    },
    {
      groupName: 'UKGC Record Fines (2017-2025)',
      items: [
        {
          id: 'major-fines',
          title: 'Industry Accountability',
          keyStats: [
            { label: 'Total Since 2022', value: '£76M' },
            { label: 'Largest Fine', value: '£19.2M' },
            { label: 'Cases', value: '26' }
          ],
          content: `The largest UKGC enforcement actions demonstrate the scale of industry failures:

- **William Hill — £19.2M (Mar 2023):** Customer deposited £23k in 20 mins without checks.
- **Entain (Ladbrokes/Coral) — £17M (Aug 2022):** Social housing resident deposited £186k without checks.
- **Caesars Entertainment — £13M (Apr 2020):** Systemic failures across 11 UK casinos.
- **Betway — £11.6M (Mar 2020):** VIP customer lost £4m without meaningful interaction.
- **Platinum Gaming — £10M (Oct 2025):** Social responsibility and AML failures.
- **888 Holdings — £9.4M (Mar 2022):** Checks only triggered after £40,000 losses.
- **888 Holdings — £7.8M (Aug 2017):** 7,000+ self-excluded customers accessed accounts.
- **Bet365 — £582k (Apr 2024):** Ineffective KYC triggers and AML failures.`
        }
      ]
    },
    {
      groupName: 'Help & Recovery Tools',
      items: [
        {
          id: 'gamstop-complete',
          title: 'GamStop: Technical Breakdown',
          content: `### How It Works
Mandatory for all UK licensed operators since March 2020. Once you provide your details (Name, DOB, Email), your ID is synced across the entire industry database.

### Mandatory Waiting Periods
Exclusions of 6 months, 1 year, or 5 years cannot be cancelled under any circumstances. Once the period ends, you must manually call **0800 138 6518** to deactivate. A mandatory **24-hour cooling-off wait** is applied before access is restored.

### The 7-Year Rule
Even after expiry, GamStop retains your data and continues to inform operators for an additional 7 years unless a removal request is successfully processed.`
        },
        {
          id: 'talkbanstop',
          title: 'TalkBanStop Partnership',
          content: `### The Three-Layer Protection
TalkBanStop is a collaborative approach that combines:
1. **Talk (GamCare):** Emotional support and professional counselling.
2. **Ban (Gamban):** Device-level software blocking 100,000+ gambling sites worldwide.
3. **Stop (GamStop):** Operator-level self-exclusion for all UK-licensed platforms.

### Real Impact
Gamban is provided **FREE** through this partnership (Standard cost £24.99/yr). To date, over 12,000+ free licenses have been issued, creating a multi-layered safety net that prevents both licensed and offshore access.`
        },
        {
          id: 'gamcare-complete',
          title: 'GamCare Support Network',
          content: `### National Gambling Helpline
Available 24/7 via phone (**0808 8020 133**), WhatsApp, and Live Chat. 86% of calls are answered within 30 seconds.

### Treatment & Peer Support
GamCare offers FREE face-to-face therapy and CBT. They also manage moderated forums and daily chatrooms (8pm-9pm) for peer support. 57% of treatment referrals come through the helpline.`
        },
        {
          id: 'gordon-moody-residential',
          title: 'Gordon Moody Residential Care',
          content: `### Intensive Intervention
The UK's only residential provider for severe cases. Programmes include a 6-week immersion followed by extensive aftercare (~182 days total).

### Clinical Success
Centres in Dudley, Manchester, and Wolverhampton (women-only). Average PGSI score of participants drops significantly from **21.2 (extreme)** to **5.9 (moderate/low)** post-treatment.`
        }
      ]
    },
    {
      groupName: '2025-2026 Regulatory Changes',
      items: [
        {
          id: 'stake-limits-2025',
          title: 'Stake Limits (April 2025)',
          content: `### New Online Slot Restrictions
- **Universal:** £5 maximum stake per spin for all adults.
- **Young Adult (18-24):** £2 maximum stake per spin (May 2025).
- **Game Speed:** Mandatory 2.5s between spins. Autoplay and "Turbo" features are strictly banned. Minimum game cycle of 5 seconds.`
        },
        {
          id: 'statutory-levy-2025',
          title: 'Statutory Gambling Levy (April 2025)',
          keyStats: [
            { label: 'Levy Rate', value: '1.1%' },
            { label: 'Treatment', value: '50%' },
            { label: 'Prevention', value: '30%' }
          ],
          content: `Replaces the old voluntary contribution system. Remote operators now pay a mandatory **1.1% of GGY**.

### Fund Distribution:
- **50% Treatment:** Directed to NHS-led recovery services.
- **30% Prevention:** Funding national awareness campaigns.
- **20% Research:** Independent academic studies into gambling harm.`
        },
        {
          id: 'financial-checks-2025',
          title: 'Financial Vulnerability Checks',
          content: `### Frictionless Checks
Triggered at **£150 net deposits** per 30 days. Uses public data (bankruptcies, CCJs, IVAs) to identify financial risk frictionlessly from Feb 2025. 95-97% are completed without requiring customer documents.`
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

  footer: {
    lastUpdated: '2026-01-20'
  }
};
