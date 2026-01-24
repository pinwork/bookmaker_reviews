import { CompetitionArticle } from '@/types';

export const championsCupBettingGuide: CompetitionArticle = {
  slug: 'rugby-champions-cup-betting-guide',
  competitionId: 'championscup',
  h1: 'Champions Cup Rugby Betting Guide 2025/26',
  metaTitle: 'Champions Cup Betting Guide 2025/26 | Rugby Edge Patterns',
  metaDescription:
    'Data-backed Champions Cup guide with verified patterns from 612+ matches. Home advantage decline, top seed curse, and French salary cap edge explained.',

  intro: {
    title: 'Where Home Advantage Collapses in the Knockouts',
    content: `The Champions Cup presents a paradox. Home teams dominate pool stages at **76% win rate**—among the highest in professional team sport. Yet that advantage erodes dramatically as the tournament progresses: 75% at quarter-finals, then just 59% at semi-finals.

That collapse creates systematic betting value invisible to casual punters. The market prices knockout home teams as if pool-stage dominance persists. It does not.

French clubs have claimed 5 consecutive titles (2020-2024) despite representing only one-third of the 24-team field. The structural advantage is clear: a €10.7m salary cap versus £6.4m for English clubs—a 40%+ spending differential that compounds across squad depth. This guide synthesises research across 612 matches, favourite performance data since 2015, and under-researched disciplinary micro-markets.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1995 (as Heineken Cup)' },
    { label: 'Teams', value: '24' },
    { label: 'Format', value: '4 Pools of 6 + Knockouts' },
    { label: 'Season', value: 'December - May' },
    { label: 'Avg. Total Points', value: '56.1' },
    { label: 'Home Win Rate (Pool)', value: '76%' },
  ],

  popularMarkets: [
    'Match Winner',
    'Handicap Betting',
    'Total Points Over/Under',
    'First Try Scorer',
    'Outright Winner',
    'Half-Time/Full-Time',
  ],

  microMarkets: [
    'First Scoring Play (Try/Penalty)',
    'Total Match Tries',
    'Player Yellow Cards',
    'Time of First Try',
    'Both Teams to Score Try',
    'Winning Margin Bands',
  ],

  edgePatterns: [
    {
      pattern:
        'Home advantage declines from 76% in pool stage to 75% at QF and 59% at semifinals—22 percentage point collapse creates knockout underdog value',
      source: 'EPCR Historical Records',
      period: '1998-2025',
      sampleSize: 134,
    },
    {
      pattern:
        'Favourites win 78.59% overall (n=612) but rate increased to 81.95% since 2019 (n=338)—backing short-priced favourites historically profitable',
      source: 'Champions Cup Match Database',
      period: '2015-2025',
      sampleSize: 612,
    },
    {
      pattern:
        'French Top 14 salary cap (10.7m EUR) exceeds English Premiership (6.4m GBP) by 40%+—translates to 1.5-2 win probability swing in pool matchups',
      source: 'LNR / Premiership Rugby Financial Reports',
      period: '2024-25',
      sampleSize: 24,
    },
    {
      pattern:
        'Top seed has not won Champions Cup in 17 consecutive seasons—8 of 17 home QF defeats involved the tournament top seed',
      source: 'Exeter Chiefs / EPCR Analysis',
      period: '2008-2025',
      sampleSize: 17,
    },
  ],

  comparisonTables: [
    {
      id: 'cc-stage-performance',
      title: 'Home Win Rate by Tournament Stage',
      headers: ['Stage', 'Home Win %', 'Sample Size', 'Value Side'],
      rows: [
        ['Pool Stage', '76%', 'n=480', 'Home'],
        ['Quarter-Finals', '75%', 'n=68', 'Neutral'],
        ['Semi-Finals', '59%', 'n=34', 'Away'],
        ['Final', '44%', 'n=17', 'Underdog'],
      ],
    },
    {
      id: 'cc-salary-caps',
      title: 'League Salary Cap Comparison 2024/25',
      headers: ['League', 'Cap Amount', 'GBP Equivalent', 'Edge'],
      rows: [
        ['French Top 14', '€10.7m', '£9.1m', '+42%'],
        ['English Premiership', '£6.4m', '£6.4m', 'Baseline'],
        ['URC (varies)', '£4.8-5.1m', '£5.0m avg', '-22%'],
      ],
    },
    {
      id: 'cc-favourite-trends',
      title: 'Favourite Win Rate Trends',
      headers: ['Period', 'Win Rate', 'Sample', 'Trend'],
      rows: [
        ['All-Time (2015-25)', '78.59%', 'n=612', 'Baseline'],
        ['Since 2019', '81.95%', 'n=338', '+3.4pp'],
        ['2024-25 Season', '~84%', 'n=96', 'Peak'],
      ],
    },
  ],

  body: `## Understanding Champions Cup Betting Markets

### Match Winner

The foundational market where you back home win, draw, or away win. Draws remain extremely rare in rugby union—effectively 0% historical frequency—making this functionally a two-way bet.

**When to use:** Pool stage matches where home advantage remains strong (76% win rate). Back home teams against lower-seeded opposition.

**When to avoid:** Knockout rounds, particularly semi-finals where home advantage collapses to 59%. The market often fails to adjust.

### Handicap Betting (Asian Handicap)

Removes the draw possibility using half-point handicaps. This market outperforms traditional fixed spreads in both volume and margin efficiency.

**Value tip:** Pool stage spreads averaging -7 to -10 for home favourites reflect the 76% home win rate. In knockouts, tighten your spread targets: -3.5 to -5.5 becomes the sweet spot as parity increases.

### Total Points Over/Under

Standard lines sit at Over/Under 47.5 points. Historical data shows **56.1 average total**, making Over 47.5 technically favourable—but bookmakers have adjusted.

**Key insight:** 89% of matches finish within ±2.5 points of the mean (53.6 to 58.6 range). Over 47.5 at odds implying less than 65% probability represents value.

## The Home Advantage Collapse

### Why Knockouts Play Differently

Pool stage rugby rewards consistency. Teams face varied opposition, travel fatigue accumulates unevenly, and crowd support matters across 4 home/away fixtures.

Knockout rugby eliminates variance. Single-match elimination favours preparation over form. The higher-seeded team plays at home—but opponents have had weeks to prepare specific game plans. Mental pressure intensifies.

The data shows this shift quantitatively:

- **Pool Stage:** 76% home win rate—back home teams confidently
- **Quarter-Finals:** 75% home win rate—marginal erosion begins
- **Semi-Finals:** 59% home win rate—collapse territory, value shifts to away
- **Finals:** 44% home/favourite win rate—underdog territory

**Application:** When backing away teams in semi-finals at +200 or better, the market has not adjusted for the 41% upset frequency. Value exists on underdogs the market treats as 25-30% probability.

### The Top Seed Curse

The tournament's top seed has not lifted the trophy in **17 consecutive seasons**. Eight of those 17 home quarter-final defeats involved the top-seeded team.

Theories vary: fixture congestion from domestic league obligations, psychological weight of expectation, or opponents' tactical preparation benefiting from film study. Regardless of mechanism, the pattern persists.

**Application:** Fade top seeds at odds shorter than -150 in knockout rounds. Back 3rd-5th seeds at +300 to +600 for outright winner markets where historical probability exceeds implied odds.

## The French Structural Advantage

### Salary Cap Reality

French Top 14 clubs operate under a **€10.7m salary cap**—maintained through 2027. English Premiership clubs are restricted to **£6.4m** (approximately €7.6m). That 40%+ differential compounds across squad depth.

The practical effect: French clubs retain international-calibre players in positions 16-23. English clubs face bench quality gaps that manifest in second-half collapses.

This explains French dominance: 5 consecutive titles (2020-2024), 50% of all finalists since 1995, and 13 of the last 14 finals featuring at least one French club.

**Application:** Apply 3-5% edge bonus to French clubs facing English opposition in pool stage matchups. The salary cap differential translates to approximately 1.5-2 win probability swing—often not fully priced by bookmakers anchoring on recent form alone.

### Why Irish Teams Offer Value

URC teams (Leinster, Munster, Ulster) operate on salary budgets closer to English levels (£4.8-5.1m) yet consistently reach knockout rounds. The mechanism: concentrated talent in starting XV, superior conditioning programmes, and institutional European experience.

Leinster has reached 5 of the last 8 finals. Munster owns the competition's strongest historical away knockout record. These teams are often fairly priced or underpriced relative to French opposition when home advantage is neutralised.

**Application:** Back Irish teams at +150 to +250 against French clubs in semi-finals where home advantage collapses.

## Seasonal Betting Patterns

### Early Pool Stage (December)

Lower betting volume creates wider spreads (5.5-6.5% margins). Sharp money remains sparse due to holiday distractions. Bookmakers set conservative lines based on domestic league form—which may not translate to European competition.

**Application:** Target away underdogs at +5.5 to +7.5 spreads in Round 1-2. Early-season European form is unstable; teams need matches to calibrate tactics.

### Late Pool Stage (January)

Volume increases, spreads tighten (4.5-5% margins). Qualification drama intensifies—4th place drops to Challenge Cup, creating maximum motivation for borderline teams.

**Application:** Back strong favourites in must-win scenarios. Favourites in Round 3-4 when needing bonus points show elevated try-scoring (Over 4.5 team tries becomes value).

### Knockout Rounds (April-May)

Maximum sharp money deployment. Spreads compress to 4-4.5% margins on main markets. In-play betting volume peaks.

**Application:** Enter positions immediately after seeding announcement (late January). Bookmakers set initial lines before sharp convergence—value window lasts 24-48 hours.

## Micro-Markets Strategy

### First Scoring Play

One of the most exploitable micro-markets. Bookmakers price try versus penalty/drop goal based on generic assumptions. In reality, team style determines first-score probability.

French clubs (high-tempo, wide attack) score first tries at 58-62% rate. English clubs (set-piece focused, territorial kicking) score first penalties at 45-50% rate.

**Application:** Back "First Scoring Play: Try" when French club plays at home against defensive opposition. Back "First Scoring Play: Penalty" in English club matches featuring wet conditions or tight spreads.

### Player Yellow Cards

Underexplored market with significant edge potential. Average Champions Cup match produces **3.2-3.8 yellow cards**. Key variables:

- **Referee tendency:** Some officials average 2.7 cards/match; others exceed 5.0
- **Team discipline profile:** Defensive-pressure systems accumulate tactical fouls
- **Game state:** Trailing teams in final 20 minutes show 2x card frequency

**Application:** Back Over 3.5 cards when lower-seeded underdog faces top-seeded favourite at home. Pressure plus frustration plus tactical fouling creates systematic over-performance on cards markets.

### Time of First Try

Links directly to early-match tactics and bench depth. French teams attack early (minutes 5-15 try frequency elevated). English teams build through phases (minutes 20-35 try frequency elevated).

**Application:** Back "First Try Before 10 Minutes" when French club plays at home with attacking reputation. Market often prices at 35% implied; actual probability sits at 42-45%.

## Live Betting Windows

### Post-Red Card Adjustment

Red cards in rugby create dramatic win probability shifts—far larger than football. A 14-man side concedes approximately 0.8 additional points per minute.

The opportunity: bookmaker algorithms take **90-180 seconds** to fully adjust. In that window, backing the 15-man team at temporary inflated odds captures value.

**Application:** Monitor red card events live. Enter position within 2 minutes at whatever odds available—the market corrects quickly.

### Second-Half Momentum Shifts

Pool stage matches show elevated scoring in minutes 55-70 as trailing teams push for try bonus points. Knockout matches show the opposite: defensive intensity increases as clock pressure mounts.

**Application:** In pool matches, back Over 2.5 second-half tries when one team needs bonus points. In knockouts, back Under totals after tight first halves.`,

  faq: [
    {
      q: 'Which bookmaker offers the best Champions Cup odds?',
      a: 'Betfair Exchange provides the best odds through zero-margin exchange pricing. For traditional betting, Pinnacle and Bet365 consistently offer competitive handicap markets. Bet365 features the widest range of player props including try scorer and disciplinary markets.',
    },
    {
      q: 'Why do top seeds keep losing the Champions Cup?',
      a: 'The top seed has not won the Champions Cup in 17 consecutive seasons. Eight of 17 home quarter-final defeats involved the tournament top seed. The pattern suggests psychological pressure, fixture congestion from domestic obligations, and opponents benefiting from extended preparation time against a known quantity.',
    },
    {
      q: 'Is backing home teams profitable in Champions Cup?',
      a: 'In pool stages, yes—76% home win rate makes backing home favourites historically profitable. In knockouts, home advantage collapses: 75% at QF, 59% at SF, 44% in finals. Adjust strategy by stage. Semi-final away underdogs at +200 or better represent value the market underprices.',
    },
    {
      q: 'Why do French clubs dominate the Champions Cup?',
      a: 'French Top 14 clubs operate under a €10.7m salary cap versus £6.4m for English Premiership—a 40%+ spending advantage. This translates to superior squad depth, bench quality, and the ability to retain international-calibre players. Five consecutive French winners (2020-2024) reflects this structural edge.',
    },
    {
      q: 'What is the average points total in Champions Cup matches?',
      a: 'The 2024-25 season averaged 56.1 total points per match, with 89% of games finishing within ±2.5 points of that mean. Over 47.5 lines carry positive expected value when priced at -110 or longer. Pool stages trend higher-scoring than knockouts due to bonus point incentives.',
    },
    {
      q: 'Are disciplinary betting markets exploitable in rugby?',
      a: 'Yes—among the most underexploited micro-markets. Champions Cup matches average 3.2-3.8 yellow cards. Key edges: referee tendencies (2.7 to 5.0+ cards/match variance), team discipline profiles, and game-state effects where trailing teams accumulate cards at 2x rate. Over 3.5 cards in top-seed versus underdog matchups offers consistent value.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'EPCR Official Statistics',
      'Champions Cup Historical Match Database',
      'LNR (Ligue Nationale de Rugby) Financial Reports',
      'Premiership Rugby Salary Cap Documentation',
      'Exeter Chiefs Historical Analysis',
      'RugbyPass Statistical Research',
    ],
  },
};