import { CompetitionArticle } from '@/types';

export const iceHockeyNhlBettingGuide: CompetitionArticle = {
  slug: 'ice-hockey-nhl-betting-guide',
  competitionId: 'nhl',
  h1: 'NHL Betting Guide 2025/26',
  metaTitle: 'NHL Betting Guide 2025/26 | Puck Line & Totals Edge',
  metaDescription:
    'NHL betting guide with edge patterns from 27,000+ games. Home underdog puck lines cover at 62-66%, plus first period under and back-to-back data.',

  intro: {
    title: 'The Most Efficient Hockey Betting Market in the World',
    content: `The NHL processes more betting volume than any other ice hockey competition globally. With **32 teams playing 82 games each** from October to April, it offers the deepest markets, tightest odds, and most comprehensive data available to punters.

That efficiency creates a problem. Main markets—moneyline, puck line, totals—are heavily arbitraged by professional syndicates. Bookmakers adjust opening odds within minutes of release. Retail margins sit at 3-5% through overround pricing.

This guide focuses on where value actually exists: home underdog puck lines that cover at 62-66%, first period unders where sharp money consistently profits, and back-to-back fatigue patterns where specific teams collapse by 17-24% in fantasy output. The data comes from peer-reviewed research, official NHL statistics, and multi-season betting settlement records across 27,000+ matches.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1917' },
    { label: 'Teams', value: '32' },
    { label: 'Games per Team', value: '82 (84 from 2026/27)' },
    { label: 'Season', value: 'October - April' },
    { label: 'Avg Goals per Game', value: '6.1 combined' },
    { label: 'Home Win Rate', value: '54-56%' },
  ],

  popularMarkets: [
    'Moneyline',
    'Puck Line (-1.5/+1.5)',
    'Totals (Over/Under)',
    'First Period Totals',
    'Three-Way (60 Minutes)',
    'Player Props',
  ],

  microMarkets: [
    'First Period Under 1.5',
    'Anytime Goalscorer',
    'Player Shots on Goal',
    'Team Total Goals',
    'Race to X Goals',
    'Winning Margin',
  ],

  edgePatterns: [
    {
      pattern:
        'Home underdogs cover +1.5 puck line at 62-66% rate versus 44% moneyline win rate',
      source: 'Sports Betting Dime / Historical ATS Analysis',
      period: '2020-2025',
      sampleSize: 400,
    },
    {
      pattern:
        'Home favourites win 64.1% versus road favourites at 55.6% - an 8.5 percentage point gap markets underprice',
      source: 'BettorEdge NHL Trends Analysis',
      period: '2023-2024',
      sampleSize: 1312,
    },
    {
      pattern:
        'Teams scoring first win 67-69% in regular season and 70-75% in playoffs',
      source: 'Online Hockey Training / NHL Historical Database',
      period: '2018-2025',
      sampleSize: 9840,
    },
    {
      pattern:
        'Back-to-back second games produce 50.7% win rate versus 55.5% for first games - 4.8 percentage point fatigue deficit',
      source: 'Lineup Experts / ESPN Back-to-Back Analysis',
      period: '2024-2025',
      sampleSize: 1200,
    },
  ],

  comparisonTables: [
    {
      id: 'nhl-home-away-splits',
      title: 'Home vs Away Performance by Bet Type',
      headers: ['Category', 'Home %', 'Away %', 'Edge'],
      rows: [
        ['Overall Win Rate', '54-56%', '44-46%', '+10pp home'],
        ['Favourites Win Rate', '64.1%', '55.6%', '+8.5pp home'],
        ['Underdog Moneyline', '44.4%', '38.8%', '+5.6pp home'],
        ['Underdog +1.5 Puck Line', '62-66%', '60-62%', '+2-4pp home'],
      ],
    },
    {
      id: 'nhl-b2b-team-anomalies',
      title: 'Back-to-Back Performance Anomalies 2024/25',
      headers: ['Team', 'B2B Impact', 'FPTS Change'],
      rows: [
        ['NY Rangers', 'Outperform', '+13.91 (+15.7%)'],
        ['Colorado', 'Outperform', '+5.70 (+6.8%)'],
        ['Seattle', 'Collapse', '-14.84 (-17.7%)'],
        ['Tampa Bay', 'Collapse', '-22.92 (-23.8%)'],
      ],
    },
    {
      id: 'nhl-first-period-trends',
      title: 'First Period O/U 1.5 Goals by Team Type',
      headers: ['Team Profile', 'Over Hit Rate', 'Sharp Lean'],
      rows: [
        ['High-scoring (EDM, TOR)', '52-55%', 'Slight Over'],
        ['League Average', '48-50%', 'Under'],
        ['Defensive (DAL, VGK)', '44-46%', 'Strong Under'],
      ],
    },
  ],

  body: `## Understanding NHL Betting Markets

### Moneyline

The most straightforward market. Pick the winner, including overtime and shootout. No spread involved.

Hockey is balanced. Home teams win approximately **54% of games**, but underdogs win 40-44% of moneylines—far higher than NFL or NBA equivalents. This variance creates value on dogs that other sports rarely offer.

**When to use:** Games where you identify specific edges (goalie mismatch, back-to-back fatigue, referee assignment). Avoid betting favourite moneylines blindly—the juice rarely justifies the risk.

### Puck Line (-1.5/+1.5)

The standard spread in hockey. Favourites must win by 2+ goals; underdogs can lose by 1 and still cover.

Here is the critical insight: home underdogs cover +1.5 at **62-66%** while only winning outright at 44%. That 18-22 percentage point gap represents systematic mispricing. The +1.5 cushion combined with home ice creates consistent value that bookmakers fail to adjust.

**When to use:** Home underdogs. The combination of crowd support, last change advantage, and the goal cushion produces the highest cover rate of any NHL bet type.

**When to avoid:** Road favourites at -1.5. Cover rates drop to 38-42%—worse than a coin flip with negative juice.

### Totals (Over/Under)

Combined goals for both teams. Standard lines sit at 5.5 or 6.5 depending on matchup. League average is **6.1 goals per game** in 2024/25.

The public reflexively bets overs. Scoring narratives dominate hockey media, pushing casual money toward high totals. Sharp bettors exploit this by targeting unders in specific situations: defensive coaching systems, back-to-back second games, and playoff hockey where scoring drops 4-7%.

### First Period Totals

Niche market with genuine edge potential. Standard line: 1.5 goals. The first 20 minutes are tactical and cautious—teams feel each other out before opening up.

Sharp consensus: under or pass. Blindly betting New York Islanders first period unders yielded **+25.41 units** in the 2022/23 season. The mechanism is simple—public bets over reflexively, creating value on unders.

**When to use:** Defensive matchups, back-to-back situations, teams with methodical systems (Dallas, Vegas historically).

## Verified Edge Patterns

### Home Underdog Puck Line: The Highest-Percentage Bet

Research across 400+ home underdog puck line games reveals **62-66% cover rate**—the single most consistent edge in NHL betting.

The mechanics are clear. Home underdogs receive crowd energy, familiar ice conditions, and crucially, last change on stoppages. The +1.5 goal cushion means they can lose by a single goal and still cash. One-goal games are common in hockey; this bet wins on outright victories AND close losses.

**Application:** Back home underdogs at +1.5 whenever odds exceed -130. At -120 or better, expected value turns positive. Track goalie confirmation—backup goaltenders eliminate the edge.

### Home Favourite Advantage: Markets Underprice the Gap

Home favourites win **64.1%** versus road favourites at 55.6%—an 8.5 percentage point gap that markets consistently underprice by 2-3%.

The explanation involves last change rules. Home coaches see visiting line changes during stoppages before making their own adjustments. Against evenly matched opponents, this tactical advantage compounds. Elite teams at home against mid-table opponents should be priced 3-5% higher than road equivalents, but books rarely adjust fully.

**Application:** When projected win probability exceeds 60%, home favourites offer value. Target division rivals where tactical adjustments matter most.

### First Goal Momentum: The Lockdown Effect

Teams scoring first win **67-69% in regular season** and **70-75% in playoffs**. This is not merely correlation—it reflects strategic behaviour.

Leading teams shift to conservative systems. They collapse defensive structure, prioritise shot blocking, and take fewer offensive risks. Trailing teams must open up, creating odd-man rushes the other direction. The "lockdown effect" makes first goals statistically sticky.

**Live betting application:** Back the team that scores first within 2-4 minutes of the goal. Markets overcorrect temporarily—algorithms push win probability to 72-75% when the true rate sits at 67-69%. Wait for mean reversion, then bet the other direction if trailing team equalises.

### Back-to-Back Fatigue: Team-Specific Collapse Patterns

Teams playing second games of back-to-backs win at **50.7%** versus 55.5% for first games—a 4.8 percentage point deficit.

But aggregate data hides extreme variance. Some teams thrive; others collapse catastrophically:

- **NY Rangers:** +13.91 fantasy points on back-to-backs (+15.7% above baseline)
- **Colorado:** +5.70 fantasy points (+6.8%)
- **Seattle:** -14.84 fantasy points (-17.7%)—goaltending collapses with Joey Daccord posting 4.20 GAA in second games
- **Tampa Bay:** -22.92 fantasy points (-23.8%)—extended travel and depth issues

**Application:** Fade Seattle and Tampa Bay in back-to-back second games. Back Rangers and Avalanche. Target totals based on team profile—collapse teams create under value; resilient teams maintain scoring.

## Competition-Specific Factors

### Goaltender Impact

Goalies account for **35-40% of game outcome**—more than any single position in major North American sports. Lines move 10-15 cents on starter versus backup news.

Critical rule: never bet NHL totals or sides before goalie confirmation. A backup goaltender posting .890 save percentage versus a starter at .915 shifts expected goals by 0.5-0.8 per game. That is the difference between over and under.

Track goalie rest patterns. Starters on back-to-backs show measurable decline. Backups facing their former teams show motivational spikes but also elevated nerves.

### Referee Assignment

Referees call **6% more penalties on visiting teams** on average. In high-leverage situations—final 5 minutes, home team trailing by exactly one goal—that bias increases to 23% more penalties on visitors.

Specific officials show stronger patterns:

- **Tim Peel, Ian Walsh:** Most neutral (minimal home bias)
- **Marc Faucette, Rob Shick, Bill McCreary:** Strong home bias (+1.4 to +1.9 penalty minute differential)

**Application:** When high-bias referees officiate, home underdogs gain additional edge. Adjust moneyline expectations by 1-2% toward home team.

### Shootout Dynamics: Counter-Intuitive Home Disadvantage

Home teams win **55.7% in regulation** but only **48.99% of shootouts**. This contradicts the home-ice advantage narrative.

Data from 317 shootouts shows home goaltenders save 1.1% worse and home shooters convert 1.1% worse than road counterparts. The mechanism appears psychological—home crowd pressure creates performance anxiety in skill competitions.

**Application:** In games likely to reach shootout (evenly matched teams, defensive styles), slight edge exists backing the road team. The market overprices home advantage in these scenarios.

## Seasonal Betting Patterns

### Early Season (October-November)

Preseason results have **1.8% correlation** with regular season—essentially zero predictive power. Markets overvalue preseason form.

One-third of teams dramatically outperform or underperform October expectations. Unders hit 52.85% in opening games as scoring stabilises. Wait for 8-10 games before trusting team identities.

### Mid-Season Congestion (December-January)

Fatigue accumulates. Teams play 15-18 games in 30 days. Injury rates spike. Second-string goalies appear more frequently.

Back-to-back patterns intensify. Home underdogs gain additional edge against tired favourites who played the night before. Track rest differentials obsessively—a team on 2+ days rest versus same-day travel offers 3-4% edge.

### Playoff Adjustments

Scoring drops **4-7%** in playoffs. Markets often fail to adjust totals downward sharply enough.

Goaltending becomes nearly unpredictable. Single-series performance has a 75% confidence interval of ±2.35% in save percentage—essentially random within normal ranges. Ignore "hot goalie" narratives; regression dominates.

First goal impact jumps to 70-75% (from 67-69% regular season). This is the largest predictive gap between seasons. Back teams that score first more aggressively in playoffs.

## Live Betting Windows

### Post-First Goal (0-1 Scoreline)

**Trigger:** First goal scored
**Duration:** 2-4 minutes
**Edge:** Fade leading team temporarily

Algorithms overcorrect, pushing favourite win probability from 50% to 72-75% when true rate is 67-69%. Value exists briefly on trailing team before markets stabilise.

### Post-Red Card/Major Penalty

**Trigger:** 5-minute major penalty called
**Duration:** 90-180 seconds
**Edge:** Back trailing team

Power play conversion rates are approximately 20-25%. Markets initially overestimate leading team ability to kill penalty. Odds take 90+ seconds to fully adjust.

### Score Tied, Final 5 Minutes

**Trigger:** 0-0 or 1-1 with under 5 minutes remaining
**Duration:** Until regulation ends
**Edge:** Back under for regulation

Teams shift to defensive postures. Risk of conceding outweighs offensive reward. Overtime probability spikes. Markets price continuous goal probability rather than tactical reality.

## Micro-Markets Strategy

### First Period Under 1.5

The sharpest micro-market in hockey. First periods are tactical. Teams probe defences rather than commit to attack.

Target defensive matchups and back-to-back situations. Avoid high-tempo teams (Edmonton, Toronto) where over value exists. Track referee assignment—strict officials increase stoppages, reducing scoring chances.

### Anytime Goalscorer

Bookmaker odds average 18-19/1 for random players. Exchange models suggest 22-30/1 fair value for non-elite scorers.

Research across 11,585 first goalscorer bets shows laying this market delivers **8.45% ROI**. The edge comes from backing longshots (20-50/1) in high-possession matches where secondary scorers get more opportunities.

### Team Total Goals

More efficient than combined totals. Target teams with clear offensive or defensive profiles:

- Edmonton, Toronto: Over value (3.40+ goals per game)
- Dallas, Vegas, Tampa historically: Under value (defensive systems)

Market prices team totals based on season averages but fails to adjust for opponent matchup. A defensive team facing another defensive team compounds under value.`,

  faq: [
    {
      q: 'Which bookmaker offers the best NHL odds?',
      a: 'Betfair Exchange provides the best odds through its commission model (0% margin). For traditional betting, Pinnacle offers the sharpest lines on puck line and totals. Bet365 has the widest market selection including player props and period betting. FanDuel and DraftKings dominate for same-game parlays.',
    },
    {
      q: 'Why do home underdogs cover the puck line so often?',
      a: 'Home underdogs cover +1.5 at 62-66% because the goal cushion combines with home ice advantages—last change on stoppages, familiar ice, and crowd energy. One-goal losses still cash the bet, and one-goal games are common in hockey. This 18-22 percentage point gap versus moneyline win rate represents systematic market mispricing.',
    },
    {
      q: 'Is first period under a profitable NHL bet?',
      a: 'Yes—sharp consensus favours under or pass on first period 1.5 totals. First periods are tactical; teams feel each other out before opening up. Blindly betting NYI first period unders yielded +25.41 units in 2022/23. Target defensive matchups and avoid high-tempo teams like Edmonton or Toronto.',
    },
    {
      q: 'How does back-to-back scheduling affect NHL betting?',
      a: 'Teams win 50.7% on back-to-back second games versus 55.5% otherwise—a 4.8pp deficit. But variance is extreme by team: Rangers improve +15.7% while Tampa Bay collapses -23.8%. Track team-specific patterns rather than applying blanket fades. Unders gain value against collapse-prone teams.',
    },
    {
      q: 'Why is goalie confirmation critical for NHL betting?',
      a: 'Goalies account for 35-40% of game outcome—more than any position in major North American sports. A backup posting .890 save percentage versus a starter at .915 shifts expected goals by 0.5-0.8. Lines move 10-15 cents on starter news. Never bet NHL totals or sides before goalie confirmation.',
    },
    {
      q: 'Does scoring really drop in NHL playoffs?',
      a: 'Yes—playoff scoring drops 4-7% versus regular season. Markets often fail to adjust totals downward enough, creating under value. First goal impact also jumps from 67-69% to 70-75% win rate. Fade overs early in playoff series before books recalibrate.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'Journal of Functional Morphology and Kinesiology (Back-to-Back Study)',
      'BettorEdge NHL Home/Away Trends Analysis',
      'Sports Betting Dime Historical ATS Data',
      'Sound of Hockey Statistical Analysis',
      'SFU Referee Bias Research',
      'ESPN Back-to-Back Performance Data',
      'NHL Official Statistics',
    ],
  },
};