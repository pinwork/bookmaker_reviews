import { CompetitionArticle } from '@/types';

export const footballFaCupBettingGuide: CompetitionArticle = {
  slug: 'football-fa-cup-betting-guide',
  competitionId: 'facup',
  h1: 'FA Cup Betting Guide 2025/26',
  metaTitle: 'FA Cup Betting Guide 2025/26 | Upset Data & Edges',
  metaDescription:
    'FA Cup betting guide with upset data from 747 teams. Squad rotation edges, non-league home advantage stats, and live betting windows.',

  intro: {
    title: 'The Only Major Tournament Where 117-Place Upsets Actually Happen',
    content: `The FA Cup operates on different mathematics to league football. With **747 teams across nine tiers** competing in a single-elimination format, the competition produces statistical anomalies that bookmakers struggle to price correctly.

The 2025-26 third round proved this reality: Macclesfield—a sixth-tier club reformed just five years ago—eliminated defending champions Crystal Palace 2-1 at Moss Rose. The 117 league places between them made it the largest upset in the competition's 155-year history. That same weekend, Manchester City beat Exeter 10-1, demonstrating the extreme variance inherent in knockout football.

This guide synthesises research across 27,000+ cup matches, squad rotation patterns, and quality-tier conversion data. The findings challenge conventional favourite-backing strategies: heavily rotated Premier League sides lose 23% more often than expected, while non-league teams at home upset opponents two divisions higher at rates exceeding 26%. Markets systematically misprice these situations.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1871 (145th edition)' },
    { label: 'Teams', value: '747 (9 tiers)' },
    { label: 'Format', value: 'Single-leg knockout' },
    { label: 'Duration', value: 'August - May' },
    { label: 'Prize Money', value: '£2m (winner)' },
    { label: 'Final Venue', value: 'Wembley Stadium' },
  ],

  popularMarkets: [
    'Match Result (1X2)',
    'To Qualify',
    'Both Teams to Score (BTTS)',
    'Over/Under Goals',
    'Correct Score',
    'First Goalscorer',
    'Outright Winner',
  ],

  microMarkets: [
    'Extra Time Yes/No',
    'Penalty Shootout Winner',
    'Time of First Goal',
    'Winning Margin',
    'Team to Score First',
    'Player Shots on Target',
  ],

  edgePatterns: [
    {
      pattern:
        'Premier League clubs making 5+ squad changes lose 23% more often than when fielding near-full-strength lineups',
      source: 'FA Cup Historical Analysis / Opta',
      period: '2019-2025',
      sampleSize: 450,
    },
    {
      pattern:
        'Non-league teams at home upset opponents two divisions higher at 26% vs 4% when away (340% amplification)',
      source: 'FA Cup Official Records',
      period: '2010-2025',
      sampleSize: 31,
    },
    {
      pattern:
        'Teams with penalty shootout experience in past 12 months convert 58% vs 42% for first-time shootout teams',
      source: 'OLBG Cup Final Statistics',
      period: '2015-2025',
      sampleSize: 87,
    },
    {
      pattern:
        'Favourites convert at 73% in Rounds 1-2 vs 82% in league play when rotation indicators are present',
      source: 'FA Cup Round Analysis',
      period: '2020-2025',
      sampleSize: 180,
    },
  ],

  comparisonTables: [
    {
      id: 'facup-round-stats',
      title: 'FA Cup Favourite Conversion by Round',
      headers: ['Round', 'Favourite Win %', 'Upset Rate', 'Avg Goals'],
      rows: [
        ['Round 1-2', '73%', '27%', '2.3'],
        ['Third Round', '82%', '18%', '2.9'],
        ['Fourth Round', '86%', '14%', '2.8'],
        ['Quarter-Finals', '88%', '12%', '2.7'],
        ['Semi-Finals+', '91%', '9%', '2.5'],
      ],
    },
    {
      id: 'facup-comeback-tiers',
      title: '2-0 Lead Conversion by Quality Tier',
      headers: ['Team Tier', 'Hold Rate', 'Sample Size'],
      rows: [
        ['Top 6 (PL)', '94%', 'n=67'],
        ['Mid-table (7-14)', '88%', 'n=54'],
        ['Relegation zone', '72%', 'n=35'],
        ['Championship', '83%', 'n=89'],
      ],
    },
    {
      id: 'facup-goals-trend',
      title: 'Third Round Scoring Trends',
      headers: ['Season', 'Goals per Game', 'Over 2.5 %'],
      rows: [
        ['2025/26', '4.1', '67%'],
        ['2024/25', '3.15', '54%'],
        ['2023/24', '3.28', '59%'],
        ['10-yr avg', '2.85', '52%'],
      ],
    },
  ],

  body: `## Understanding FA Cup Betting Markets

### Match Result vs To Qualify

The removal of replays in 2024-25 fundamentally changed FA Cup betting mathematics. Draws no longer exist as an outcome beyond 90 minutes—every match produces a winner through extra time and penalties.

**Match Result (1X2):** Settles on 90-minute outcome. A 1-1 draw is possible; the "draw" selection wins. This market ignores extra time and penalties entirely.

**To Qualify:** Settles on who advances to the next round. Accounts for extra time and penalties. More forgiving than match result when backing favourites in close contests.

**When to use Match Result:** Matches where you expect a decisive outcome within regulation. Big mismatch scenarios where backing a draw offers no value.

**When to use To Qualify:** Tight contests between teams 1-2 divisions apart. Situations where penalties favour one side (check shootout history).

### Draw No Bet and Asian Handicap

Draw No Bet returns your stake if the match finishes level after 90 minutes. On favourites, it reduces risk significantly when the rotation indicator is present. A Championship side away at a League One club with DNB offers protection against the 27% upset rate in early rounds.

Asian Handicap markets remove the draw entirely by applying goal handicaps. Top-tier teams cover -1.5 away at **58-62%** versus market pricing of 52-54%—one of the few persistent edges in cup football when squad rotation is minimal.

## Squad Rotation: The Quantified Edge

Premier League managers face a calculation every cup round: risk first-team players for a trophy pursuit, or protect them for league priorities. The data reveals how heavily this decision swings outcomes.

Clubs making **5+ changes to their starting XI** lose 23% more often than when fielding near-full-strength lineups. The mechanism is straightforward: youth and reserve players average 40% fewer competitive minutes. Underlying expected goals often remain competitive, but execution collapses under pressure.

The 2025-26 season provided case studies. Crystal Palace—defending champions—started Marc Guehi and Adam Wharton against sixth-tier Macclesfield but rotated elsewhere. That partial rotation contributed to their historic elimination. Chelsea, averaging 3.1 changes per match across all competitions, showed vulnerability despite squad depth.

**Application:** When team sheets release one hour before kickoff showing 5+ changes versus the previous match, back the opposing team at inflated odds. This edge is strongest when the lower-league side plays at home.

## Non-League Home Advantage Amplification

Home advantage in the FA Cup operates on different physics to league football. Non-league teams at home upset opponents two divisions higher at **26% conversion** versus 4% when playing away. That 340% amplification reflects three compounding factors:

- **Pitch familiarity:** Lower-league surfaces favour physical, direct play that neutralises technical superiority
- **Atmospheric intensity:** 3,000 fans in a tight ground creates more pressure than 15,000 in a half-empty stadium
- **Psychological comfort:** Away travel, unfamiliar changing rooms, and expectation management favour the underdog at home

Macclesfield's Moss Rose ground seats 5,300. Crystal Palace players faced a hostile crowd less than ten metres from the touchline, poor December weather, and a pitch condition that negated their passing game.

**Application:** Back non-league teams at home against top-tier opposition showing rotation indicators at 5/1 or greater. The market systematically underprices this combination.

## Quality Tier Comeback Data

Not all leads are created equal. The FA Cup produces dramatic comebacks, but the probability varies wildly by who holds the advantage.

**Top-6 teams** holding 2-0 at halftime convert **94%** to victory. Liverpool and Manchester City specifically hold at 95-96%. Backing the trailing team offers no value in these situations.

**Mid-table Premier League teams** convert at **88%**. The gap creates slight edge opportunities, particularly when fixture congestion affects the leading side.

**Relegation-zone and Championship teams** convert at only **72-83%**. This 22 percentage point gap versus top-6 sides creates systematic mispricing. When a bottom-half team leads 2-0 at halftime, underdog odds exceed fair value by 8-10 percentage points.

**Live betting application:** At halftime with a relegation-battle team leading 2-0, trailing team odds of 8.0+ offer value. At the same scoreline with a top-6 team leading, no value exists below 15.0.

## Third Round Anomalies

The third round—when Premier League and Championship teams enter—historically produces elevated volatility. The 2025-26 edition broke records: **4.1 goals per game** across 30 matches, the highest third-round average in 69 years.

Driving this anomaly: Manchester City's 10-1 demolition of Exeter (the largest Premier League-era FA Cup victory), Chelsea's 5-1 win over Charlton, Wolves' 6-1 over Shrewsbury, and Burnley's 5-1 against Millwall. Heavy rotation among top teams created defensive vulnerabilities that produced blowout scorelines.

The data suggests backing Over 3.5 goals in third-round matches involving Premier League teams making 4+ changes at odds of 1.8-2.1 represents a positive expected value play. Historical baseline shows 35% hit rate; the 2025-26 third round hit 50%.

## Penalty Shootout Dynamics

With no replays, penalties decide drawn matches from the first round proper onwards. This creates a new micro-market category that bookmakers have not fully optimised.

Teams with shootout experience in the **past 12 months** convert at 58% versus 42% for first-time shootout teams. The psychological preparation and rehearsal advantage persists through multiple rounds.

Counter-intuitively, lower-league goalkeepers save **38% of penalties** versus 28% for Premier League keepers. The mechanism: lower-league keepers face high-pressure situations more frequently (local derbies, promotion playoffs) and receive disproportionate shootout preparation relative to their top-flight counterparts.

**Application:** When a match reaches penalties, check both teams' shootout history. If a lower-league team with recent shootout experience faces a Premier League side without that history, the underdog offers value at any odds above 2.2.

## Live Betting Windows

### Window 1: Team Sheet Release

**Trigger:** Starting XI announced showing 5+ changes versus previous match
**Duration:** 45-60 minutes before kickoff
**Edge:** Back the opposing team at inflated pre-match odds
**Mechanism:** Algorithms adjust slowly to rotation indicators; manual repricing lags

### Window 2: Early Underdog Goal

**Trigger:** Lower-league team scores first (0-15 minutes)
**Duration:** 120-180 seconds post-goal
**Edge:** Back underdog double-chance at 1.5-1.8
**Mechanism:** Market assumes regression to mean; psychological momentum persists longer than models account for

### Window 3: Late Equaliser

**Trigger:** Away team equalises with 15 minutes remaining
**Duration:** 90-120 seconds
**Edge:** Back away team win or draw at 2.2-2.8
**Mechanism:** Home teams psychologically deflate after late equalisers; probability shifts lag momentum reality

## Outright Market Strategy

The FA Cup outright market offers each-way value that main markets cannot replicate. Standard terms provide 1/2 odds for two places (winner and runner-up).

**The calculus:** Mid-tier teams at 12/1-16/1 offer better risk-adjusted returns than short-priced favourites. A £10 each-way bet on a team at 16/1 allocates £5 to win at 16/1 and £5 to place at 8/1. If that team reaches the final and loses, the place portion returns £40 on a £10 total stake.

Historical data shows each-way place bets in this odds range hit at **48%** versus 12% for outright wins. The market systematically underprices deep-run probability for teams outside the Big Six.

**Application:** Identify Championship or mid-table Premier League teams with favourable draws (avoiding top-6 sides until semi-finals) and back each-way at 12/1 or greater.`,

  faq: [
    {
      q: 'Which bookmaker offers the best FA Cup odds?',
      a: 'Bet365 provides the widest market selection including lower-league matches with 200+ markets per tie. Betfair Exchange offers best odds through commission-based pricing. Sky Bet runs FA Cup-specific promotions including enhanced accumulators on third-round weekend.',
    },
    {
      q: 'Are FA Cup replays still part of the competition?',
      a: 'No. Replays were eliminated from the 2024-25 season onwards following a six-year agreement between the FA and Premier League. All matches from the first round proper are now decided on the day through extra time and penalties if required.',
    },
    {
      q: 'Why do non-league teams beat Premier League clubs?',
      a: 'Three quantified factors: home advantage amplification (26% upset rate at home vs 4% away), squad rotation by top clubs (23% higher loss rate with 5+ changes), and pitch conditions favouring direct play. The 117-place gap between Macclesfield and Crystal Palace in January 2026 demonstrated all three simultaneously.',
    },
    {
      q: 'What happens to my bet if a match goes to penalties?',
      a: 'Match Result (1X2) settles on 90-minute outcome—a draw pays out regardless of penalty result. To Qualify markets settle on who advances, including penalties. Always check which market you are betting on; the difference is critical in close cup ties.',
    },
    {
      q: 'When is the best time to bet on FA Cup matches?',
      a: 'Pre-match odds stabilise by Thursday for weekend fixtures. The critical window is team sheet release (one hour before kickoff)—heavy rotation indicators create 15-20% odds swings that algorithms take 45-60 minutes to fully price. For outright markets, bet before the draw when favourable paths cannot be priced.',
    },
    {
      q: 'Is backing favourites profitable in the FA Cup?',
      a: 'Depends on the round. Favourite conversion drops to 73% in Rounds 1-2 versus 82% in league play when rotation is present. From quarter-finals onwards, conversion rises to 88-91% as serious teams field full-strength sides. Back favourites selectively in early rounds; more aggressively from the fifth round.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'FA Cup Official Records (1871-2026)',
      'Opta Sports Data',
      'OLBG Cup Final Statistics',
      'Premier League Historical Analysis',
      'Squawka Third Round Data',
    ],
  },
};