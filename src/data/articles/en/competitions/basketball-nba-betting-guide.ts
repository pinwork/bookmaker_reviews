import { CompetitionArticle } from '@/types';

export const basketballNbaBettingGuide: CompetitionArticle = {
  slug: 'basketball-nba-betting-guide',
  competitionId: 'nba',
  h1: 'NBA Betting Guide 2025/26',
  metaTitle: 'NBA Betting Guide 2025/26 | Data-Backed Edge Patterns',
  metaDescription:
    'NBA betting guide with verified edges from 27,000+ games. Comeback rates by quality tier, B2B fade systems hitting 58%, and live windows where algorithms lag.',

  intro: {
    title: 'The Most Liquid Basketball Betting Market in the World',
    content: `The NBA processes more betting volume than any other basketball competition globally. With **380+ matches per season** across 30 franchises and an October-to-June calendar, it offers the deepest markets, tightest spreads, and most comprehensive player prop ecosystems available to punters.

That efficiency creates a problem. Main markets are heavily arbitraged by professional syndicates within minutes of release. Point spreads settle at 3-5% overround. Finding edge requires looking where bookmakers and casual punters do not.

This guide focuses on verified inefficiencies: back-to-back fade configurations hitting 58%, comeback probability tiers where big favourites recover from deficits at 62% versus 16% for big underdogs from identical scorelines, and live betting windows where algorithms lag reality by 90-180 seconds. The data comes from peer-reviewed research, official NBA statistics, and multi-season ATS records across 27,000+ matches.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1946 (BAA merger 1949)' },
    { label: 'Teams', value: '30 franchises' },
    { label: 'Regular Season', value: '82 games per team' },
    { label: 'Season', value: 'October - June' },
    { label: 'Avg PPG (2024/25)', value: '113.7' },
    { label: 'Home Win Rate', value: '54%' },
  ],

  popularMarkets: [
    'Point Spread (ATS)',
    'Money Line',
    'Totals (Over/Under)',
    'Team Totals',
    'First Half/Quarter Lines',
    'Player Props (PRA)',
    'Same-Game Parlays',
  ],

  microMarkets: [
    '1Q Player Points',
    '3Q Team Total',
    'Player Fouls/Turnovers',
    'Race to X Points',
    'Alt Player Lines',
    'Next Scoring Play Type',
  ],

  edgePatterns: [
    {
      pattern:
        'Home favourites on second of back-to-back receiving 65%+ of spread bets cover only 42% ATS',
      source: 'Sports Insights',
      period: '2005-2024',
      sampleSize: 200,
    },
    {
      pattern:
        'Unders hit 58.3% when total is bet up from open but majority handle remains on the under',
      source: 'VSiN / DraftKings Splits',
      period: '2023-2025',
      sampleSize: 302,
    },
    {
      pattern:
        'Big pre-game favourites (-7+) trailing by 3 at halftime recover to win 62% vs just 16% for big underdogs (+7+)',
      source: 'ProfessorMJ Historical Database',
      period: '2010-2024',
      sampleSize: 2400,
    },
    {
      pattern:
        'Home teams down 6 after Q1 still win 41.5% of games; down 12 after Q1 still win 31.5%',
      source: 'ProfessorMJ Comeback Data',
      period: '2000-2024',
      sampleSize: 803,
    },
  ],

  comparisonTables: [
    {
      id: 'nba-season-stats',
      title: 'NBA League Averages (Recent Seasons)',
      headers: ['Season', 'Avg PPG', 'Home Win %', 'B2B ATS %'],
      rows: [
        ['2024-25', '113.7', '54%', '49.3%'],
        ['2023-24', '114.2', '54%', '49.1%'],
        ['2022-23', '114.7', '58%', '49.4%'],
      ],
    },
    {
      id: 'nba-ats-leaders',
      title: 'Best ATS Teams 2023-24 Season',
      headers: ['Team', 'ATS Record', 'Cover %', 'MOV'],
      rows: [
        ['Orlando Magic', '51-31', '62.2%', '+2.0'],
        ['Philadelphia 76ers', '48-34', '58.5%', '+3.0'],
        ['Dallas Mavericks', '48-34', '58.5%', '+2.2'],
        ['Boston Celtics', '41-36-5', '53.3%', '+11.3'],
        ['Atlanta Hawks', '29-53', '35.4%', '-2.2'],
      ],
    },
    {
      id: 'nba-comeback-tiers',
      title: 'Halftime Comeback Probability (Down 3)',
      headers: ['Pre-Game Spread', 'Scenario', 'Win %'],
      rows: [
        ['Big favourite (-7+)', 'Trailing at half', '62%'],
        ['Small favourite (-0.5 to -6.5)', 'Trailing at half', '49%'],
        ['Small dog (+0.5 to +6.5)', 'Trailing at half', '38%'],
        ['Big dog (+7+)', 'Trailing at half', '16%'],
      ],
    },
  ],

  body: `## Understanding NBA Betting Markets

### Point Spread (ATS)

The spread dominates NBA betting. Bookmakers assign a handicap to level the playing field, with typical lines ranging from -1.5 to -15.5 for regular season fixtures.

Unlike the NFL, NBA spreads lack "key numbers" where results cluster. Games land on every margin relatively evenly, making half-point moves less critical than football. The -110 juice on both sides creates approximately **4.5% margin** for the book.

**When to use:** Matchups where you have identified a specific edge beyond the headline result. The Orlando Magic covered 62.2% of their spreads in 2023-24 despite a modest straight-up record, demonstrating that ATS value and win probability are separate calculations.

**When to avoid:** As a default bet without identified edge. Main markets face constant arbitrage pressure from sharp syndicates.

### Totals (Over/Under)

Combined points scored by both teams relative to a posted line. NBA totals have risen from 195-200 in the 1990s to 220-235 in the modern pace-and-space era.

A peer-reviewed system tracking DraftKings splits found unders hit **58.3%** when the total is bet up from open but majority handle remains on the under. This counter-intuitive finding suggests the public is selectively sharp on unders in specific configurations.

**When to use:** Games featuring pace mismatches or defensive-first teams. Tom Thibodeau teams historically suppress possessions and force mid-range shots, supporting unders.

**When to avoid:** Blindly backing overs because "NBA games are high-scoring." The market has fully adjusted to the pace-and-space revolution.

### Player Props

Individual performance markets covering points, rebounds, assists, PRA (combined), made threes, steals, blocks, and turnovers. This segment has exploded, now representing a majority of same-game parlay legs.

Player props offer edges through detailed research because bookmakers face bandwidth constraints pricing 400+ lines per game. Usage rates, matchups, and minutes projections create exploitable gaps.

**Caution:** The NBA is actively considering restrictions on certain player props, especially single-event unders and low-usage players, due to integrity concerns. This market faces regulatory uncertainty.

## Verified Edge Patterns

### The Back-to-Back Public Fade

Simple back-to-back fades produce no edge. Teams playing the second night of a B2B are 2,058-2,118 ATS since 2005, yielding just **49.3%** when fading them. Markets have priced in fatigue.

The exploitable configuration requires layering conditions. Home teams on the second of a back-to-back, laying points, and receiving 65%+ of spread tickets went just 84-116 ATS. Fading them hits **58%**, a robust situational edge across 200 games. The mechanism: public and narrative media overweight "bounce-back at home" while underweighting cumulative fatigue and travel, and books shade toward public favourite.

Travel distance compounds the effect. Research across 2013-2020 found home win probability drops approximately **4 percentage points for every 500km** travelled between B2B games. A West Coast team flying to Miami for the second of a back-to-back faces measurable degradation.

### Quality-Tiered Comeback Probabilities

Live betting algorithms price all deficits similarly. They should not.

Historical data across thousands of games reveals dramatic tier differences. A big pre-game favourite (-7 or more) trailing by 3 at halftime still wins **62%** of the time. A big underdog (+7 or more) in the same scoreline wins just **16%**. Same nominal deficit, 46 percentage point gap in actual probability.

- **Big favourite trailing:** 62% win probability
- **Small favourite trailing:** 49%
- **Small dog trailing:** 38%
- **Big dog trailing:** 16%

Books and recreational punters often overreact to the current scoreline and underweight pre-game strength as a proxy for team quality. When elite teams fall behind early, the market creates value on their comeback.

### Home Resilience in Early Deficits

Home teams down 6 after Q1 still win **41.5%** of games (250-353). Down 12 after Q1, they still convert at **31.5%** (63-137). Even double-digit early deficits are far from fatal at home.

By Q3, the math shifts dramatically. Home teams trailing by 11 after Q3 win approximately **13%**. Down 20 after Q3: just 1.2%. The key window for backing home comebacks sits in Q2 and early Q3, before the deficit becomes structurally insurmountable.

## Live Betting Windows

### Early Large Deficit for Elite Favourite

Big favourites (-7+) falling behind by 10-15 points in the first half create systematic mispricing. Live markets and public sentiment overreact to the scoreline, implicitly pricing comeback probability closer to league average (13%) rather than the tier-adjusted 34%.

- **Trigger:** Pre-game big favourite down 10-15 in first half
- **Duration:** Mid-Q2 to early Q3, before rotations stabilise
- **Edge:** Back favourite ML or reduced spread
- **Mechanism:** Historical data shows top-tier teams down 15+ still win approximately 34% over the last eight seasons

### Post-Red-Hot Shooting Regression

Both teams shooting significantly above season three-point percentage in early quarters (50%+ versus typical 36-38%) inflates live totals. Algorithms track current shooting more than underlying shot quality.

At quarter breaks and timeouts, look for live under opportunities if pace is normal but efficiency is unsustainably high. Regression in shooting percentage is near-certain over 48 minutes.

### The 90-180 Second Algorithm Lag

Post-significant event, odds take 90-180 seconds to fully adjust. The window after a star player picks up foul trouble, a key rotation player exits with injury, or a timeout following a momentum run offers brief exploitable gaps before models recalibrate.

## Team Anomalies

### Defence-First Teams Cover

The Orlando Magic went **51-31 ATS (62.2%)** in 2023-24 despite a modest overall record. Elite defence and grindy half-court style kept totals and spreads low while public perception lagged. Markets treated them as mid-tier despite top-tier ATS profile.

Similar dynamics apply to any defence-first, low-pace team the market anchors to prior losing seasons. Detroit and San Antonio have shown recent underdog ATS anomalies as young rosters mature faster than market adjustments.

### Home Advantage Has Weakened

Stop using the old "60% home teams" rule. NBA home win rate fell from approximately **60%** in 2000-2013 to **54%** in recent seasons, with a low around 52% in 2024. The COVID bubble demonstrated that fans and travel constitute the core of HCA; remove those factors and home advantage nearly disappears.

Traditional HCA adjustments now overshoot. When modelling games, use 54% home win probability as your baseline, not 58-60%.

## Seasonal Timing Patterns

### Early Season Uncertainty

The first 10-15 games of each season feature maximum uncertainty around rotations, new additions, and coaching schemes. Books sometimes under- or over-react to small samples. Some sharp bettors report better edges in this window before market efficiency tightens.

### December-January Congestion

Approximately **40 fixtures across 15 days** with no winter break. Injury rates spike 24-31% above monthly averages during congestion. B2B frequency increases, and star players rest more unpredictably.

BTTS and total variability rise during congestion as tired defenders make mistakes. Home underdogs offer value against fatigued top-6 sides rotating key players.

### Late Season and Play-In

Seeding battles intensify maximum motivation for playoff hopefuls. Tanking teams play young players extended minutes with no competitive stake. Play-in tournament games (seeds 7-10) carry playoff intensity but regular-season line-setting, sometimes creating value on motivated underdogs.`,

  faq: [
    {
      q: 'Which bookmaker offers the best NBA odds?',
      a: 'Betfair Exchange offers the best odds through the commission model (0% margin on exchange). For traditional betting, Pinnacle prices basketball efficiently with low margins. Bet365 and DraftKings provide the widest player prop selections with 200+ markets per game.',
    },
    {
      q: 'Is backing against teams on back-to-backs a real edge?',
      a: 'Simple B2B fades produce no edge: teams on the second night are 2,058-2,118 ATS since 2005 (49.3%). The exploitable configuration is specific: fade home teams on second of B2B receiving 65%+ of spread bets. This hits 58% across 200 games.',
    },
    {
      q: 'Why do my NBA bets collapse in the final minutes?',
      a: 'Late-game fouling and free throw variance create wild swings unrelated to game quality. Research shows referee calls in the final two minutes carry small but measurable home bias (2-2.5pp edge on loose-ball and offensive foul calls). Consider using team totals or first-half markets to avoid end-game chaos.',
    },
    {
      q: 'Are NBA player props still profitable after rule changes?',
      a: 'Yes, but with caveats. The NBA is considering restrictions on certain props, especially single-event unders and low-usage players. Current edges exist in quarter-level props and matchup-specific research, where bookmakers face bandwidth constraints pricing 400+ lines per game.',
    },
    {
      q: 'How important is home court advantage in the NBA now?',
      a: 'Less than you think. Home win rate has fallen from 60% (2000-2013) to approximately 54% in recent seasons. The COVID bubble proved fans and travel constitute the core of HCA. Use 54% as your baseline, not the outdated 58-60%.',
    },
    {
      q: 'When is the best time to bet on NBA games?',
      a: 'Early odds (afternoon/evening prior to game) capture sharp money moves. Late moves (within an hour of tip) reflect lineup and injury news plus public action. For live betting, the mid-Q2 to early-Q3 window offers value on trailing big favourites, and post-significant-event windows (90-180 seconds) lag full algorithm adjustment.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'ProfessorMJ Comeback Probability Database',
      'Sports Insights B2B Research',
      'VSiN / DraftKings Betting Splits',
      'Journal of Functional Morphology and Kinesiology',
      'NBA Official Statistics',
      'BetIQ Team Rankings ATS Records',
    ],
  },
};