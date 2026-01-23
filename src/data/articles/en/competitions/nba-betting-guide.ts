import { CompetitionArticle } from '@/types';

export const nbaBettingGuide: CompetitionArticle = {
  slug: 'nba-betting-guide',
  competitionId: 'nba',
  h1: 'NBA Betting Guide 2026',
  metaTitle: 'NBA Betting Guide 2026 | Expert Tips & Best Odds',
  metaDescription: 'Complete guide to betting on the NBA. Expert analysis, point spread strategies, player props, and tips for basketball\'s premier league.',

  intro: {
    title: 'Basketball\'s Premier League',
    content: `The NBA is one of the world's most popular betting leagues, offering action from October through June. With 82 regular season games per team plus playoffs, the NBA provides consistent betting opportunities across spreads, totals, and extensive player prop markets.

This guide covers everything you need to know about betting on the NBA: from understanding basketball betting fundamentals to identifying value in the most star-driven sport.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1946' },
    { label: 'Teams', value: '30 franchises' },
    { label: 'Regular Season', value: '82 games per team' },
    { label: 'Playoffs', value: '16 teams' },
    { label: 'Finals', value: 'Best of 7' },
    { label: 'Season', value: 'October-June' },
  ],

  popularMarkets: [
    'Point Spread',
    'Money Line',
    'Totals (Over/Under)',
    'NBA Champion',
    'Conference Winner',
    'MVP Award',
    'Player Props',
  ],

  microMarkets: [
    'Quarter/Half Lines',
    'Player Points',
    'Rebounds/Assists',
    'Three-Pointers Made',
    'Double-Double',
    'First Basket',
  ],

  edgePatterns: [
    {
      pattern: 'Home teams win 58% of NBA regular season games',
      source: 'NBA Statistics',
      period: '2015-2024',
      sampleSize: 12300,
    },
    {
      pattern: 'Road underdogs of 5-10 points cover 53% of spreads',
      source: 'Spread Analysis',
      period: '2015-2024',
      sampleSize: 2100,
    },
    {
      pattern: 'Teams on back-to-backs are 45% ATS as road teams',
      source: 'Rest Analysis',
      period: '2018-2024',
      sampleSize: 1800,
    },
    {
      pattern: 'Over hits 53% when combined total is 230+',
      source: 'Totals Analysis',
      period: '2015-2024',
      sampleSize: 4200,
    },
    {
      pattern: 'Elite teams (60+ wins) cover 48% in regular season',
      source: 'Statistical Analysis',
      period: '2015-2024',
      sampleSize: 1600,
    },
  ],

  comparisonTables: [
    {
      id: 'nba-betting-markets',
      title: 'NBA Market Comparison',
      headers: ['Market', 'Edge Opportunity', 'Variance'],
      rows: [
        ['Point Spread', 'Medium', 'Low'],
        ['Totals', 'Medium', 'Medium'],
        ['Money Line', 'Low', 'Low'],
        ['Player Props', 'High', 'High'],
        ['Parlays', 'Very Low', 'Very High'],
      ],
    },
  ],

  body: `## Understanding NBA Betting

### NBA Odds Format
NBA uses American odds:
- **Point spread** — typically -110 both sides
- **Totals** — combined team scores
- **Money line** — straight-up winner
- **Props** — individual player performances

### Key NBA Betting Stats
- Home advantage: 58% win rate
- Back-to-back decline: Significant
- Star rest: Unpredictable
- Load management era

## Best Betting Markets for NBA

### Point Spread
Most popular NBA market:
- **Key numbers** — less crucial than NFL
- **Late scratches** — injury news essential
- **Rest differential** — fatigue matters

### Totals (Over/Under)
Pace-dependent betting:
- **Pace factors** — possessions per game
- **Defensive ratings** — efficiency metrics
- **High totals** — over bias at 230+

### Player Props
Individual performance markets:
- **Usage rate** — who gets the shots
- **Minutes projection** — blowout risk
- **Matchup analysis** — defensive assignment

## NBA Betting Factors

### Rest and Fatigue
Critical NBA factor:
- **Back-to-backs** — 45% ATS as road team
- **Rest advantage** — rested vs tired
- **Travel** — cross-country trips
- **Altitude** — Denver factor

### Injury Impact
Star-driven league:
- **Star players** — worth 5-10 points
- **Late scratches** — line movements
- **Load management** — rest healthy players
- **Lineup confirmation** — pre-game essential

### Statistical Indicators
Key NBA metrics:
- **Net Rating** — point differential per 100
- **Pace** — possessions per game
- **eFG%** — effective field goal percentage
- **Defensive Rating** — points allowed per 100

## Seasonal Patterns

### Early Season (Oct-Nov)
New rosters gel:
- **Chemistry building** — new teammates
- **Rust** — after offseason
- **Scheme changes** — new coaches
- **Overreactions** — to early results

### Mid-Season (Dec-Feb)
Form establishes:
- **All-Star break** — fatigue factor
- **Trade deadline** — roster changes
- **Load management** — resting stars
- **Playoff positioning** — motivation varies

### Late Season (Mar-Apr)
Playoff push:
- **Seeding battles** — maximum effort
- **Tanking teams** — lose on purpose
- **Rest starters** — locked seeds
- **Play-in tournament** — 7-10 seeds fight

## Playoff Betting

### Postseason Differences
Playoffs are unique:
- **Stars play** — no load management
- **Adjustments** — 7-game series allow
- **Home court** — more valuable
- **Defense intensifies** — unders trend`,

  faq: [
    {
      q: 'Which bookmaker is best for NBA betting?',
      a: 'Bet365 offers extensive NBA coverage and live streaming. FanDuel and DraftKings have vast player prop markets. Betfair Exchange provides sharp odds. Sky Bet has good UK NBA coverage with competitive lines.',
    },
    {
      q: 'How do back-to-backs affect NBA betting?',
      a: 'Significantly — teams on the second night of back-to-backs cover just 45% as road teams. Fatigue compounds with travel. Check schedules before betting; rest advantages are exploitable angles.',
    },
    {
      q: 'How important are injuries in NBA betting?',
      a: 'Critical — star players can be worth 5-10 points to the spread. Late scratches cause significant line moves. Always check injury reports close to tip-off. Load management has made lineup confirmation essential.',
    },
    {
      q: 'What stats matter for NBA betting?',
      a: 'Net Rating (point differential per 100 possessions) and Pace (possessions per game) are fundamental. eFG%, Defensive Rating, and recent form (last 10 games) provide additional context for spread and total betting.',
    },
    {
      q: 'Are NBA player props profitable?',
      a: 'Player props offer edges through detailed research — usage rates, matchups, and minutes projections. Higher variance but more inefficiencies than main markets. Watch for blowout risk reducing star minutes.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'NBA Official Statistics',
      'Basketball Reference',
      'Cleaning the Glass',
    ],
  },
};
