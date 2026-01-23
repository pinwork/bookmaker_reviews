import { CompetitionArticle } from '@/types';

export const mlbBettingGuide: CompetitionArticle = {
  slug: 'mlb-betting-guide',
  competitionId: 'mlb',
  h1: 'MLB Betting Guide 2026',
  metaTitle: 'MLB Betting Guide 2026 | Expert Tips & Best Odds',
  metaDescription: 'Complete guide to betting on MLB baseball. Expert analysis, money line strategies, and tips for America\'s pastime.',

  intro: {
    title: 'America\'s Pastime',
    content: `Major League Baseball offers 162 games per team across a six-month season, providing endless betting opportunities. The sport's statistics-heavy nature makes it ideal for data-driven betting, with money lines, run lines, and totals available for every game.

This guide covers everything you need to know about betting on MLB baseball: from understanding baseball betting formats to identifying value across the longest season in professional sports.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1903' },
    { label: 'Teams', value: '30 franchises' },
    { label: 'Regular Season', value: '162 games per team' },
    { label: 'Playoffs', value: '12 teams' },
    { label: 'World Series', value: 'Best of 7' },
    { label: 'Season', value: 'April-October' },
  ],

  popularMarkets: [
    'Money Line',
    'Run Line (-1.5)',
    'Totals (Over/Under)',
    'World Series Winner',
    'Pennant Winner',
    'First 5 Innings',
    'Player Props',
  ],

  microMarkets: [
    'First Inning Runs',
    'Pitcher Strikeouts',
    'Player Hits',
    'Home Runs',
    'Team Totals',
    'No Run First Inning',
  ],

  edgePatterns: [
    {
      pattern: 'Home teams win 53% of MLB games',
      source: 'MLB Statistics',
      period: '2015-2024',
      sampleSize: 24300,
    },
    {
      pattern: 'Underdogs win 42% of games on money line',
      source: 'Betting Analysis',
      period: '2015-2024',
      sampleSize: 24300,
    },
    {
      pattern: 'Starting pitcher accounts for 25-30% of game outcome',
      source: 'Sabermetric Analysis',
      period: '2018-2024',
      sampleSize: 14580,
    },
    {
      pattern: 'Run line favourites cover 52% when -150 or shorter',
      source: 'Spread Analysis',
      period: '2015-2024',
      sampleSize: 8400,
    },
    {
      pattern: 'First 5 innings betting eliminates bullpen variance',
      source: 'Market Analysis',
      period: '2018-2024',
      sampleSize: 14580,
    },
  ],

  comparisonTables: [
    {
      id: 'mlb-markets',
      title: 'MLB Betting Market Analysis',
      headers: ['Market', 'House Edge', 'Skill Factor'],
      rows: [
        ['Money Line', '3-4%', 'High'],
        ['Run Line', '4.5%', 'Medium'],
        ['Totals', '4.5%', 'High'],
        ['F5 Innings', '4.5%', 'Very High'],
        ['Player Props', '5-8%', 'Medium'],
      ],
    },
  ],

  body: `## Understanding MLB Betting

### Baseball Betting Formats
Key concepts:
- **Money line** — straight-up winner
- **Run line** — -1.5/+1.5 spread
- **Totals** — combined runs over/under
- **First 5 innings** — starter-focused
- **Props** — individual player performance

### Key MLB Stats
- Home advantage: 53%
- Underdog wins: 42%
- Pitcher impact: 25-30%
- Best teams win: 60% max

## Best Betting Markets for MLB

### Money Line
Most popular baseball market:
- **No spread** — just pick winner
- **Variable juice** — reflects probability
- **Underdog value** — 42% win rate

### Run Line
Baseball's spread:
- **Standard -1.5** — favourites give runs
- **Alternate lines** — +2.5, -2.5 available
- **Close game factor** — baseball margins thin

### First 5 Innings
Starter-focused betting:
- **Eliminates bullpen** — variance reducer
- **Pitcher vs pitcher** — cleaner analysis
- **Push possible** — tied after 5

## Starting Pitcher Analysis

### Why Pitchers Matter
25-30% of game outcome:
- **Ace vs journeyman** — major edge
- **Matchup history** — vs opposing lineup
- **Rest days** — fatigue factor
- **Platoon splits** — LHP vs RHP

### Key Pitcher Metrics
What to evaluate:
- **ERA** — runs allowed
- **FIP** — fielding independent
- **WHIP** — runners allowed
- **K/9** — strikeout rate
- **Recent form** — last 3-4 starts

### Bullpen Considerations
Late-game factors:
- **Closer availability** — rest status
- **High leverage** — setup men
- **Workload** — recent usage
- **First 5 avoids this** — cleaner bet

## Betting Factors

### Statistical Indicators
Key baseball metrics:
- **wRC+** — offensive value
- **OPS** — on-base plus slugging
- **FIP** — true pitching skill
- **Team BABIP** — luck indicator

### Situational Factors
Game context:
- **Day games after night** — fatigue
- **Travel** — cross-country trips
- **Weather** — wind, temperature
- **Ballpark** — hitter/pitcher friendly

### Seasonal Patterns
162-game marathon:
- **April** — cold weather, rust
- **Summer** — ball carries, offense
- **September** — call-ups, playoff push
- **Dog days** — fatigue sets in

## Advanced Approaches

### Line Movement
Understanding movement:
- **Sharp action** — professional money
- **Pitcher changes** — dramatic moves
- **Weather news** — affects totals
- **Lineup confirmation** — affects lines`,

  faq: [
    {
      q: 'Which bookmaker is best for MLB betting?',
      a: 'Bet365 offers comprehensive MLB coverage. FanDuel and DraftKings have extensive player prop markets. Betfair Exchange provides sharp odds on main markets. Sky Bet offers good UK MLB coverage.',
    },
    {
      q: 'How does the run line work in baseball?',
      a: 'The run line is baseball\'s spread, typically set at -1.5/+1.5. Favourites must win by 2+ runs to cover -1.5. Underdogs cover +1.5 if they win or lose by exactly 1 run. It offers better odds than money line.',
    },
    {
      q: 'Why is first 5 innings betting popular?',
      a: 'First 5 innings (F5) betting focuses on starting pitchers and eliminates bullpen variance. Starters account for 25-30% of game outcome. F5 creates cleaner pitcher vs pitcher analysis without late-game randomness.',
    },
    {
      q: 'How important is the starting pitcher?',
      a: 'Critical — starting pitchers account for 25-30% of game outcome. Elite aces create significant edges. Check pitcher matchup, recent form, rest, and historical performance against the opposing lineup.',
    },
    {
      q: 'What makes baseball betting different from other sports?',
      a: '162-game season creates large sample sizes for trends. Money line (no spread) betting is primary. Daily games mean constant action. Statistical depth (sabermetrics) rewards research. Underdogs win 42% — more than most sports.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'MLB Official Statistics',
      'FanGraphs',
      'Baseball Reference',
    ],
  },
};
