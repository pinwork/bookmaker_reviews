import { IndustryReport } from '@/types';

export const bettingIndustryBible: IndustryReport = {
  slug: 'uk-betting-market-analysis-2026',
  collections: ['guides'],
  h1: 'The 2026 UK Betting Industry Report: Money, Power & Regulation',
  metaTitle: 'UK Betting Industry Analysis 2026 | Market Share, Taxes & Trends',
  metaDescription: 'The definitive report on the £16.8bn UK betting market. Analysis of the 40% tax hike, dominance of Flutter & bet365, and new affordability checks.',

  linkedResources: [
    { id: 'bet365', type: 'bookmaker', active: true },
    { id: 'paddy-power', type: 'bookmaker', active: true },
    { id: 'sky-bet', type: 'bookmaker', active: true },
    { id: 'william-hill', type: 'bookmaker', active: true },
    { id: 'ladbrokes', type: 'bookmaker', active: true },
    { id: 'betfred', type: 'bookmaker', active: true },
  ],

  intro: {
    title: 'A £16.8 Billion Industry at a Crossroads',
    content: `The UK gambling industry generated £16.8 billion in gross gambling yield (GGY) in the last fiscal year, cementing its status as the world's largest regulated online market. Yet, these headline figures mask a brutal reality: the "Golden Age" of easy growth is over.

    From April 2026, a punishing 40% Remote Gaming Duty will reshape the landscape, forcing smaller operators out of business and consolidating power among the "Big Two" conglomerates. At the same time, the Gambling Commission's new affordability checks (£150 net deposit threshold) have fundamentally changed the relationship between bookmaker and bettor. This report cuts through the corporate PR to explain who really owns your bookmaker, where your money goes, and why the odds you see today might be gone tomorrow.`
  },

  comparisonTables: [
    {
      id: 'uk-operators-2026',
      title: 'UK Operators at a Glance 2026',
      headers: ['Operator', 'Brands', 'Market Share', 'Outlook'],
      rows: [
        ['Flutter', 'Paddy Power, Sky Bet, Betfair', '~30%', 'Dominant'],
        ['bet365', 'bet365', '~20%', 'Stable'],
        ['Entain', 'Ladbrokes, Coral', '~15%', 'Stagnant'],
        ['Evoke', 'William Hill, 888', '~8%', 'Distressed'],
        ['Betfred', 'Betfred', '~5%', 'Independent']
      ]
    },
    {
      id: 'uk-tax-rates-2026',
      title: '2026 Fiscal Shock: Where Your Stake Goes',
      headers: ['Tax Name', 'Rate (2026)', 'Impact'],
      rows: [
        ['Remote Gaming Duty', '40% of Gross Profit', 'Lower RTP, fewer bonuses'],
        ['General Betting Duty', '15% of Gross Profit', 'Sports odds tightening'],
        ['Statutory Levy', '1.1% of Yield', 'NHS gambling clinics'],
        ['Corporation Tax', '25% of Profit', 'Standard business tax'],
        ['Horse Racing Levy', '10.5% of Racing Profit', 'Funds the sport']
      ]
    }
  ],

  groups: [
    {
      groupName: 'UK Gambling Industry by the Numbers',
      items: [
        {
          id: 'market-stats',
          title: 'Industry Statistics (2025-26)',
          keyStats: [
            { label: 'Total GGY', value: '£16.8B' },
            { label: 'Online Share', value: '62%' },
            { label: 'Football Revenue', value: '£1.3B' },
            { label: 'Active Shops', value: '5,825' }
          ],
          content: `The UK market grew **7.3% year-on-year** with £7.8bn from online channels. Football betting alone generates £1.3 billion, making it the largest betting sport. Retail continues to decline with betting shops down **36% since 2012**.

### Problem Gambling
- **2.7%** of adults (~1.4m) are problem gamblers
- **600,000+** registered on GAMSTOP (1% of adult population)

### Demographics
| Group | Percentage |
|-------|------------|
| Adults gambling (past year) | 60% |
| Gender split (M vs F) | 51% vs 44% |
| Mobile usage (18-24s) | 76% |
| Youth problem gambling | 1.5% (doubled in 2024) |`
        }
      ]
    },
    {
      groupName: 'The Great Consolidation: Who Owns the Odds?',
      items: [
        {
          id: 'flutter',
          title: 'Flutter Entertainment',
          badge: '~30% Market Share',
          content: `**Brands:** Paddy Power, Sky Bet, Betfair, Tombola

Now listed on the NYSE with $14bn global revenue, Flutter is the "Amazon of Gambling". Their scale allows them to absorb tax hikes that kill smaller rivals. Sky Bet remains the recreational punter's favorite app, while Betfair controls the exchange market.`
        },
        {
          id: 'bet365',
          title: 'bet365 Group',
          badge: '~20% Market Share',
          content: `**Brands:** bet365

Unique among giants, bet365 remains a **private company** owned by the Coates family in Stoke. They paid £481.5m in UK taxes alone last year. Without shareholder pressure, they offer the most consistent odds and highest limits.`
        },
        {
          id: 'entain',
          title: 'Entain plc',
          badge: '~15% Market Share',
          content: `**Brands:** Ladbrokes, Coral, BetMGM (UK partnership)

Possessing a massive retail estate (3,000+ shops), Entain is struggling to modernize its legacy tech stack compared to Flutter. They are increasingly reliant on their US joint venture, while UK growth has stalled.`
        },
        {
          id: 'evoke',
          title: 'Evoke plc (formerly 888)',
          badge: '~8% Market Share',
          content: `**Brands:** William Hill, 888sport

The rebrand to "Evoke" hasn't hidden the disaster of the William Hill acquisition. With shares down **95%** and £168m in losses, aggressive cost-cutting is expected. We predict significant shop closures for William Hill in 2026.`
        }
      ]
    },
    {
      groupName: 'The People Behind the Billions',
      items: [
        {
          id: 'denise-coates',
          title: 'Denise Coates (bet365)',
          badge: 'Founder & Co-CEO',
          content: `In 2000, Denise Coates mortgaged her father's entire chain of betting shops to secure a **£15 million loan** from RBS. She used the money to build bet365.com from a temporary Portakabin in a Stoke-on-Trent car park. Critics called it reckless.

Today, bet365 generates **£4bn annually**. Denise is Britain's highest-paid executive and the single largest taxpayer in the UK, contributing over **£480m** to the Treasury in 2024.`
        },
        {
          id: 'fred-done',
          title: 'Fred Done (Betfred)',
          badge: 'Co-Founder',
          content: `In 1967, Fred and his brother Peter bet on England to win the World Cup in 1966. They used the winnings to open a single betting shop in Salford. Unlike competitors, Fred focused on bonuses, inventing the "Lucky 15" bet.

Betfred remains one of the few large independent operators, with over **1,300 shops**, though they nearly sold the entire estate in 2025 due to tax hikes.`
        }
      ]
    },
    {
      groupName: 'Where the Money Goes: Betting by Sport',
      items: [
        {
          id: 'sport-breakdown',
          title: 'Revenue Breakdown',
          content: `While horse racing built the industry, football now powers it.

| Sport | Revenue | Share | Note |
|-------|---------|-------|------|
| **Football** | £1.3 Billion | 50% | Premier League & In-Play dominate |
| **Horse Racing** | £767 Million | 30% | Declining but vital for daytime |
| **Tennis** | £180 Million | 7% | High volume in-play point betting |
| **Other Sports** | £350 Million | 13% | Greyhounds, Cricket, Golf, Esports |`
        }
      ]
    },
    {
      groupName: 'The Evolution of UK Betting',
      items: [
        {
          id: 'regulatory-timeline',
          title: 'Key Milestones',
          content: `| Year | Event | Description |
|------|-------|-------------|
| **1961** | Legalisation | Betting shops legalised. Windows must be blacked out; no TV allowed. |
| **2001** | Tax Free Era | Gordon Brown abolishes Betting Duty (9%). UK becomes global hub. |
| **2005** | Gambling Act | The "Tony Blair Act" liberalises advertising on TV and football shirts. |
| **2019** | FOBT Crackdown | Max stake cut from £100 to £2. Mass shop closures follow. |
| **2025** | White Paper Era | Affordability checks, slot limits, statutory levy introduced. |
| **2026** | Tax Bomb | Remote Gaming Duty doubles to 40% (April 1st). |`
        }
      ]
    },
    {
      groupName: 'The New Reality: How 2026 Changes Your Experience',
      items: [
        {
          id: 'blind-deposits',
          title: 'The End of "Blind" Deposits',
          content: `The "Light Touch" check at **£150 net deposits** is now automated. If you fail this (e.g., no credit history), you WILL be asked for bank statements immediately. It is not the bookie being difficult; it is a license condition.`
        },
        {
          id: 'odds-bifurcation',
          title: 'Bifurcation of Odds',
          content: `We are seeing a split. **Premier League odds** (high volume) remain good (95%+ payout). Niche sports (lower leagues, tennis) are seeing margins increase to cover the tax hike. Value is becoming harder to find.`
        },
        {
          id: 'bonus-tightening',
          title: 'Bonus Tightening',
          content: `With a **40% tax** on gaming revenue, operators can no longer afford "loss-leading" bonuses. Expect fewer "Bet £10 Get £30" offers and more "Odds Boosts" which are cheaper for them to run.`
        }
      ]
    },
    {
      groupName: 'Industry Trivia',
      items: [
        {
          id: 'trivia',
          title: 'Facts You Didn\'t Know',
          content: `- **William Hill's Irony**: William Hill himself called betting shops "a cancer on society" and refused to open one until 1966 — five years after they were legalised.
- **The First Online Bet**: The first ever online sports bet was placed in January 1996 by a Finnish punter on Tottenham vs Hereford via Intertops.
- **Ireland Was First**: While the UK waited until 1961, the Irish Free State legalised betting shops in 1926 — 35 years earlier.
- **1% Self-Excluded**: Over 600,000 people (approx 1% of the UK adult population) are currently blocked from all sites via GAMSTOP.`
        }
      ]
    }
  ],

  faq: [
    {
      q: 'Do I have to pay tax on my winnings in the UK?',
      a: 'No. The "Punter pays no tax" principle remains. All taxes are paid by the operator on their profits. However, they pass this cost to you via worse odds and fewer bonuses.'
    },
    {
      q: 'Why are William Hill closing shops?',
      a: 'William Hill (owned by Evoke) is heavily indebted and faces rising retail costs. Closing unprofitable shops is a strategy to save cash to pay off their £1.7bn debt.'
    },
    {
      q: 'Is my money safe with smaller bookmakers?',
      a: 'UKGC rules require player funds to be ring-fenced, but protection levels vary. We recommend sticking to the major groups (Flutter, Entain, bet365) during this period of high tax volatility.'
    },
    {
      q: 'Why did I get an affordability check for just £150?',
      a: 'This is the new "Light Touch" threshold introduced in 2025. It checks public records for bankruptcies. It is designed to be invisible for 80% of players.'
    }
  ],

  tooltips: {
    ggy: "Gross Gambling Yield: The amount the operator keeps. (Total Staked - Total Won by Players). This is what is taxed.",
    rgd: "Remote Gaming Duty: The specific tax applied to online casino, slots, and bingo. Rising to 40% in 2026.",
    gbd: "General Betting Duty: The tax on sports betting profits. Currently 15%, rising to 25% for online in 2027.",
    affordability_check: "A background check on a player's financial health. 'Light touch' at £150 loss/month.",
    white_label: "A company that rents the license and tech from another operator. Most at risk of closure due to new taxes.",
    rtp: "Return to Player: The percentage of stakes a game pays back over time. The 40% tax will likely force RTPs down.",
    fobt: "Fixed Odds Betting Terminal: The controversial touch-screen machines in betting shops, now limited to £2 stakes.",
    gamstop: "The national self-exclusion scheme. It blocks you from ALL UK-licensed sites at once.",
    omnichannel: "A system linking your online, mobile, and physical shop accounts (e.g., Ladbrokes Grid, Coral Connect).",
    kyc: "Know Your Customer: The mandatory ID verification process before withdrawals."
  },

  footer: {
    helpline: 'If gambling stops being fun, stop. National Gambling Helpline: 0808 8020 133 (24/7, Free).',
    dataSource: 'Data sourced from UK Gambling Commission Industry Statistics FY 2024-25 and Regulus Partners Analysis.',
    lastUpdated: '2026-01-20'
  }
};
