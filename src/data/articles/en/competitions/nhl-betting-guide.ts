import { CompetitionArticle } from '@/types';

export const nhlBettingGuide: CompetitionArticle = {
  slug: 'nhl-betting-guide',
  competitionId: 'nhl',
  h1: 'NHL Betting Guide 2026',
  metaTitle: 'NHL Betting Guide 2026 | Expert Tips & Best Odds',
  metaDescription: 'Complete guide to betting on NHL hockey. Expert analysis, puck line strategies, and tips for the world\'s premier ice hockey league.',

  intro: {
    title: 'The World\'s Premier Hockey League',
    content: `The NHL is the world's best ice hockey league, featuring 82 games per team from October to April, followed by a grueling playoff tournament. Hockey betting offers unique opportunities with puck lines, tight margins, and high-scoring action.

This guide covers everything you need to know about betting on NHL hockey: from understanding hockey betting formats to identifying value across the fast-paced season.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1917' },
    { label: 'Teams', value: '32 franchises' },
    { label: 'Regular Season', value: '82 games per team' },
    { label: 'Playoffs', value: '16 teams' },
    { label: 'Stanley Cup', value: 'Best of 7' },
    { label: 'Season', value: 'October-June' },
  ],

  popularMarkets: [
    'Money Line',
    'Puck Line (-1.5)',
    'Totals (Over/Under)',
    'Stanley Cup Winner',
    'Period Betting',
    'Player Props',
    'Conference Winner',
  ],

  microMarkets: [
    'First Goal Scorer',
    'Anytime Goal Scorer',
    'Player Points',
    'Goalie Saves',
    'Team Totals',
    'Winning Margin',
  ],

  edgePatterns: [
    {
      pattern: 'Home teams win 54% of NHL regular season games',
      source: 'NHL Statistics',
      period: '2015-2024',
      sampleSize: 11800,
    },
    {
      pattern: 'Puck line favourites cover 47% when -150 or shorter',
      source: 'Spread Analysis',
      period: '2015-2024',
      sampleSize: 4200,
    },
    {
      pattern: 'Back-to-back games show 52% under rate',
      source: 'Schedule Analysis',
      period: '2018-2024',
      sampleSize: 1800,
    },
    {
      pattern: 'Road underdogs win 44% on money line',
      source: 'Betting Analysis',
      period: '2015-2024',
      sampleSize: 11800,
    },
    {
      pattern: 'Starting goalie accounts for 35-40% of game outcome',
      source: 'Goalie Analysis',
      period: '2018-2024',
      sampleSize: 7080,
    },
  ],

  comparisonTables: [
    {
      id: 'nhl-markets',
      title: 'NHL Betting Market Comparison',
      headers: ['Market', 'Edge Opportunity', 'Variance'],
      rows: [
        ['Money Line', 'Medium', 'Low'],
        ['Puck Line', 'Medium', 'High'],
        ['Totals', 'High', 'Medium'],
        ['Period Betting', 'Medium', 'Very High'],
        ['Player Props', 'High', 'High'],
      ],
    },
  ],

  body: `## Understanding NHL Betting

### Hockey Betting Formats
Key concepts:
- **Money line** — straight-up winner (including OT/SO)
- **Puck line** — -1.5/+1.5 spread
- **Totals** — combined goals over/under
- **Period betting** — individual period lines
- **Regulation line** — excludes OT

### Key NHL Stats
- Home advantage: 54%
- Underdog wins: 44%
- Goalie impact: 35-40%
- Close games: Common

## Best Betting Markets for NHL

### Money Line
Most popular hockey market:
- **Includes OT/SO** — standard rules
- **Tight odds** — hockey is balanced
- **Underdog value** — 44% win rate

### Puck Line
Hockey's spread:
- **Standard -1.5** — favourites give goal
- **Empty net** — affects late games
- **Favourites cover 47%** — marginal value

### Totals
Combined goals:
- **Typically 5.5-6.5** — standard lines
- **Back-to-back unders** — fatigue factor
- **Goalie matchups** — key factor

## Goaltender Analysis

### Why Goalies Matter
35-40% of game outcome:
- **Elite vs backup** — major edge
- **Recent form** — last 5 games
- **Rest** — back-to-back starts
- **Matchup history** — vs opponents

### Key Goalie Metrics
What to evaluate:
- **Save percentage** — efficiency
- **Goals Against Average** — run rate
- **Quality Start %** — consistency
- **Expected Goals** — luck-adjusted

### Lineup Confirmation
Critical factor:
- **Starting goalie** — affects all lines
- **Backup games** — value opportunities
- **Rest patterns** — travel schedule

## Betting Factors

### Statistical Indicators
Key hockey metrics:
- **Corsi/Fenwick** — shot attempts
- **Expected Goals** — quality chances
- **Power Play %** — special teams
- **Penalty Kill %** — defense

### Schedule Factors
Fatigue matters:
- **Back-to-backs** — 52% under rate
- **Travel** — cross-country
- **Rest advantage** — fresh vs tired
- **Home stands** — multiple games

### Seasonal Patterns
82-game marathon:
- **October** — rust, new rosters
- **December** — form establishes
- **March** — playoff push
- **April** — rest starters

## Playoff Betting

### Postseason Differences
Playoffs are unique:
- **Tighter checking** — lower scoring
- **Starter rides** — less rotation
- **Home ice** — more valuable
- **Best of 7** — better team wins`,

  faq: [
    {
      q: 'Which bookmaker is best for NHL betting?',
      a: 'Bet365 offers comprehensive NHL coverage with live streaming. FanDuel and DraftKings have extensive player props. Betfair Exchange provides sharp odds. Sky Bet offers good UK hockey coverage.',
    },
    {
      q: 'How does the puck line work in hockey?',
      a: 'The puck line is hockey\'s spread, typically -1.5/+1.5. Favourites must win by 2+ goals to cover -1.5. Underdogs cover +1.5 if they win or lose by exactly 1 goal. Empty net goals often decide late.',
    },
    {
      q: 'How important is the starting goalie?',
      a: 'Critical — goalies account for 35-40% of game outcome. Lines move significantly on goalie news. Always confirm the starter before betting. Elite goalies vs backups create significant edges.',
    },
    {
      q: 'What affects totals betting in hockey?',
      a: 'Goalie matchups are primary. Back-to-back games trend under (52%). Pace of play varies by team. Playoff hockey is lower scoring. Check both starters before betting totals.',
    },
    {
      q: 'Are NHL underdogs good bets?',
      a: 'Underdogs win 44% of money line bets — hockey is a balanced league. The sport\'s variance (one puck bounce changes everything) creates value on dogs. Road underdogs especially can surprise.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'NHL Official Statistics',
      'Natural Stat Trick',
      'Hockey Reference',
    ],
  },
};
