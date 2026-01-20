import { BOOKMAKER_SLUGS } from '../../../../constants';
import { IndustryReport } from '@/types';

export const bettingIndustryBible: IndustryReport = {
  slug: 'uk-betting-market-analysis-2026',
  collections: ['guides'],
  h1: 'The 2026 UK Betting Industry Report: Money, Power & Regulation',
  metaTitle: 'UK Betting Industry Analysis 2026 | Market Share, Taxes & Trends',
  metaDescription: 'The definitive report on the £16.8bn UK betting market. Analysis of the 40% tax hike, dominance of Flutter & bet365, and new affordability checks.',
  lastUpdated: '2026-01-27',

  relatedBookmakers: [
    'bet365', 'paddy-power', 'sky-bet', 'william-hill', 'ladbrokes', 'betfred'
  ] as typeof BOOKMAKER_SLUGS[number][],

  intro: {
    title: 'A £16.8 Billion Industry at a Crossroads',
    content: `The UK gambling industry generated £16.8 billion in gross gambling yield (GGY) in the last fiscal year, cementing its status as the world's largest regulated online market. Yet, these headline figures mask a brutal reality: the "Golden Age" of easy growth is over. 

    From April 2026, a punishing 40% Remote Gaming Duty will reshape the landscape, forcing smaller operators out of business and consolidating power among the "Big Two" conglomerates. At the same time, the Gambling Commission's new affordability checks (£150 net deposit threshold) have fundamentally changed the relationship between bookmaker and bettor. This report cuts through the corporate PR to explain who really owns your bookmaker, where your money goes, and why the odds you see today might be gone tomorrow.`
  },

  statistics: {
    title: 'UK Gambling Industry by the Numbers (2025-26)',
    mainStats: [
      { label: 'Total Market Size (GGY)', value: '£16.8 Billion', note: '+7.3% Year-on-Year' },
      { label: 'Online Market Share', value: '62%', note: '£7.8bn of total revenue' },
      { label: 'Football Betting Revenue', value: '£1.3 Billion', note: 'Largest betting sport' },
      { label: 'Active Betting Shops', value: '5,825', note: 'Down 36% since 2012' },
      { label: 'Problem Gambling Rate', value: '2.7%', note: 'Approx 1.4m adults' },
      { label: 'GAMSTOP Registrations', value: '600,000+', note: 'Over 1% of UK adult population' }
    ],
    demographics: {
      title: 'Who Gambles in the UK?',
      data: [
        { group: 'Adults Gambling (Past Year)', value: '60%' },
        { group: 'Gender Split (M vs F)', value: '51% vs 44%' },
        { group: 'Mobile Usage (18-24s)', value: '76%' },
        { group: 'Youth Problem Gambling', value: '1.5%', note: 'Doubled in 2024' }
      ]
    }
  },

  marketDominance: {
    title: 'The Great Consolidation: Who Actually Owns the Odds?',
    intro: 'Approximately 65% of the UK online market is controlled by just three entities. We analyzed the financial reports to show you the hierarchy.',
    players: [
      {
        name: 'Flutter Entertainment',
        brands: ['Paddy Power', 'Sky Bet', 'Betfair', 'Tombola'],
        marketShare: '30% (Approx)',
        status: 'Dominant Market Leader',
        analysis: 'Now listed on the NYSE with $14bn global revenue, Flutter is the "Amazon of Gambling". Their scale allows them to absorb tax hikes that kill smaller rivals. Sky Bet remains the recreational punter\'s favorite app, while Betfair controls the exchange market.'
      },
      {
        name: 'bet365 Group',
        brands: ['bet365'],
        marketShare: '20% (Approx)',
        status: 'The Private Fortress',
        analysis: 'Unique among giants, bet365 remains a private company owned by the Coates family in Stoke. They paid £481.5m in UK taxes alone last year. Without shareholder pressure, they offer the most consistent odds and highest limits.'
      },
      {
        name: 'Entain plc',
        brands: ['Ladbrokes', 'Coral', 'BetMGM (UK partnership)'],
        marketShare: '15% (Approx)',
        status: 'Stagnating Giant',
        analysis: 'Possessing a massive retail estate (3,000+ shops), Entain is struggling to modernize its legacy tech stack compared to Flutter. They are increasingly reliant on their US joint venture, while UK growth has stalled.'
      },
      {
        name: 'Evoke plc (formerly 888)',
        brands: ['William Hill', '888sport'],
        marketShare: '8-10%',
        status: 'Distressed Asset',
        analysis: 'The rebrand to "Evoke" hasn\'t hidden the disaster of the William Hill acquisition. With shares down 95% and £168m in losses, aggressive cost-cutting is expected. We predict significant shop closures for William Hill in 2026.'
      }
    ]
  },

  comparisonTable: {
    title: 'UK Operators at a Glance 2026',
    headers: ['Operator', 'Brands', 'Market Share', 'Outlook'],
    rows: [
      ['Flutter', 'Paddy Power, Sky Bet, Betfair', '~30%', '🟢 Dominant'],
      ['bet365', 'bet365', '~20%', '🟢 Stable'],
      ['Entain', 'Ladbrokes, Coral', '~15%', '🟡 Stagnant'],
      ['Evoke', 'William Hill, 888', '~8%', '🔴 Distressed'],
      ['Betfred', 'Betfred', '~5%', '🟡 Independent'],
    ]
  },

  realStories: {
    title: 'The People Behind the Billions',
    stories: [
      {
        name: 'Denise Coates (bet365)',
        role: 'Founder & Co-CEO',
        story: 'In 2000, Denise Coates mortgaged her father\'s entire chain of betting shops to secure a £15 million loan from RBS. She used the money to build bet365.com from a temporary Portakabin in a Stoke-on-Trent car park. Critics called it reckless.',
        impact: 'Today, bet365 generates £4bn annually. Denise is Britain\'s highest-paid executive and the single largest taxpayer in the UK, contributing over £480m to the Treasury in 2024.'
      },
      {
        name: 'Fred Done (Betfred)',
        role: 'Co-Founder',
        story: 'In 1967, Fred and his brother Peter bet on England to win the World Cup in 1966. They used the winnings to open a single betting shop in Salford. Unlike competitors, Fred focused on bonuses, inventing the "Lucky 15" bet.',
        impact: 'Betfred remains one of the few large independent operators, with over 1,300 shops, though they nearly sold the entire estate in 2025 due to tax hikes.'
      }
    ]
  },

  sportBreakdown: {
    title: 'Where the Money Goes: Betting Volume by Sport',
    intro: 'While horse racing built the industry, football now powers it. Here is the revenue breakdown for UK online betting.',
    data: [
      { sport: 'Football', revenue: '£1.3 Billion', share: '50%', note: 'Premier League & In-Play dominate' },
      { sport: 'Horse Racing', revenue: '£767 Million', share: '30%', note: 'Declining but vital for daytime turnover' },
      { sport: 'Tennis', revenue: '£180 Million', share: '7%', note: 'High volume of in-play point betting' },
      { sport: 'Other Sports', revenue: '£350 Million', share: '13%', note: 'Greyhounds, Cricket, Golf, Esports' }
    ]
  },

  regulatoryTimeline: {
    title: 'The Evolution of UK Betting',
    events: [
      { year: 1961, title: 'Legalisation', desc: 'Betting shops legalised to end illegal street betting. Windows must be blacked out; no TV allowed.' },
      { year: 2001, title: 'The Tax Free Era', desc: 'Gordon Brown abolishes Betting Duty (9%). The UK becomes the global hub for online gambling.' },
      { year: 2005, title: 'Gambling Act 2005', desc: 'The "Tony Blair Act" liberalises advertising, allowing gambling ads on TV and football shirts.' },
      { year: 2019, title: 'FOBT Crackdown', desc: 'Max stake on shop gaming machines cut from £100 to £2. Mass shop closures follow.' },
      { year: 2025, title: 'The White Paper Era', desc: 'Affordability checks (£150 threshold), slot limits (£2/£5), and statutory levy introduced.' },
      { year: 2026, title: 'The Tax Bomb', desc: 'Remote Gaming Duty doubles to 40% (April 1st). Analysts predict the end of generic free bets.' }
    ]
  },

  trivia: {
    title: 'Industry Facts You Didn\'t Know',
    facts: [
      { 
        topic: 'William Hill\'s Irony', 
        text: 'William Hill himself called betting shops "a cancer on society" and refused to open one until 1966 — five years after they were legalised.' 
      },
      { 
        topic: 'The First Online Bet', 
        text: 'The first ever online sports bet was placed in January 1996 by a Finnish punter on Tottenham vs Hereford via Intertops.' 
      },
      { 
        topic: 'Ireland Was First', 
        text: 'While the UK waited until 1961, the Irish Free State legalised betting shops in 1926 — 35 years earlier.' 
      },
      { 
        topic: '1% Self-Excluded', 
        text: 'Over 600,000 people (approx 1% of the UK adult population) are currently blocked from all sites via GAMSTOP.' 
      }
    ]
  },

  taxationExplainer: {
    title: 'The 2026 Fiscal Shock: Where Your Stake Goes',
    intro: 'The UK government now treats gambling as a "sin tax" revenue stream comparable to tobacco.',
    headers: ['Tax Name', 'Rate (2026)', 'Impact on Punter'],
    rows: [
      ['Remote Gaming Duty (RGD)', '40% of Gross Profit', 'Massive. Lower RTP on slots, fewer casino bonuses.'],
      ['General Betting Duty (GBD)', '15% of Gross Profit', 'Moderate. Sports odds remain competitive, but margins will tighten.'],
      ['Statutory Levy', '1.1% of Yield', 'Direct funding for NHS gambling clinics. No direct impact on odds.'],
      ['Corporation Tax', '25% of Profit', 'Standard business tax applied after all duties.'],
      ['Horse Racing Levy', '10.5% of Racing Profit', 'Funds the sport. Keeps racing betting viable.']
    ]
  },

  consumerImpact: {
    title: 'The New Reality: How 2026 Changes Your Experience',
    points: [
      {
        title: 'The End of "Blind" Deposits',
        content: 'The "Light Touch" check at £150 net deposits is now automated. If you fail this (e.g., no credit history), you WILL be asked for bank statements immediately. It is not the bookie being difficult; it is a license condition.'
      },
      {
        title: 'Bifurcation of Odds',
        content: 'We are seeing a split. Premier League odds (high volume) remain good (95%+ payout). Niche sports (lower leagues, tennis) are seeing margins increase to cover the tax hike. Value is becoming harder to find.'
      },
      {
        title: 'Bonus Tightening',
        content: 'With a 40% tax on gaming revenue, operators can no longer afford "loss-leading" bonuses. Expect fewer "Bet £10 Get £30" offers and more "Odds Boosts" which are cheaper for them to run.'
      }
    ]
  },

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

  footer: {
    helpline: 'If gambling stops being fun, stop. National Gambling Helpline: 0808 8020 133 (24/7, Free).',
    dataSource: 'Data sourced from UK Gambling Commission Industry Statistics FY 2024-25 and Regulus Partners Analysis.',
    lastUpdated: 'January 2026'
  }
};