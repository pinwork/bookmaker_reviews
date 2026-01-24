import { CompetitionArticle } from '@/types';

export const basketballMarchMadnessBettingGuide: CompetitionArticle = {
  slug: 'basketball-march-madness-betting-guide',
  competitionId: 'ncaa',
  h1: 'March Madness Betting Guide 2026',
  metaTitle: 'March Madness Betting Guide 2026 | Seed Edge Patterns',
  metaDescription:
    'March Madness betting guide with verified patterns from 40 tournaments. 12-5 upset data, spread traps, and first-half unders by seed.',

  intro: {
    title: 'Where Public Money Creates Systematic Mispricings',
    content: `March Madness generates **$3.1 billion in betting handle**—more than 2.5x the volume of NCAA football playoffs. That liquidity attracts casual punters alongside sharps, creating predictable market distortions that persist year after year.

The structure of the problem is simple. Public money floods favourites with recognisable names (Duke, Kansas, UConn), compressing spreads beyond fair value. Meanwhile, specific seed-by-seed patterns repeat with statistical regularity: 12-seeds beat 5-seeds at 35.3% despite being priced as 20-25% underdogs. Number 2 seeds favoured by 17+ points cover just 36.8% of spreads—a 20 percentage point gap from expected.

This guide synthesises 40 years of tournament data (1985-2025), round-by-round ATS records, and live betting analysis to identify where March Madness markets misprice outcomes. The edges exist in specific line ranges and seed combinations, not generic upset hunting.`,
  },

  quickFacts: [
    { label: 'Teams', value: '68' },
    { label: 'Format', value: 'Single elimination' },
    { label: 'Rounds', value: '7 (First Four to Final)' },
    { label: '2026 Final Four', value: 'San Antonio (April 4-6)' },
    { label: 'Avg Championship Total', value: '140 points' },
    { label: '1-Seed Championship Rate', value: '65% (26 of 40)' },
  ],

  popularMarkets: [
    'Game Spread',
    'Game Totals (Over/Under)',
    'Moneyline',
    'Tournament Winner Futures',
    'Final Four Teams',
    'Region Winner',
  ],

  microMarkets: [
    'First-Half Spread',
    'First-Half Totals',
    'Team Totals',
    'Seed Victory Props',
    'Lowest Seed to Sweet 16',
    'Conference Performance Props',
  ],

  edgePatterns: [
    {
      pattern:
        '2-seeds favoured by 17+ points cover just 36.8% ATS (14-24-1) vs 73.3% when favoured by less than 17 points',
      source: 'VSiN College Basketball Analysis',
      period: '2005-2025',
      sampleSize: 39,
    },
    {
      pattern:
        '12-seeds beat 5-seeds at 35.3% rate (57-101 record); at least one 12-seed wins in 34 of 40 tournaments',
      source: 'NCAA Tournament Records',
      period: '1985-2025',
      sampleSize: 158,
    },
    {
      pattern:
        '3-seeds in single-digit lines hit first-half Under at 74.1% (20-7 record) with average 6.9 PPG below posted totals',
      source: 'VSiN First-Half Analysis',
      period: '2003-2025',
      sampleSize: 27,
    },
    {
      pattern:
        'Double-digit favourites cover 55.3% in Round 1 and 63% in Round 2 vs tight lines (1-3 points) covering just 41%',
      source: 'Historical Spread Analysis',
      period: '2016-2025',
      sampleSize: 103,
    },
  ],

  comparisonTables: [
    {
      id: 'seed-upset-rates',
      title: 'First Round Upset Rates by Seed Matchup',
      headers: ['Matchup', 'Upset Rate', 'Sample Size'],
      rows: [
        ['12 vs 5', '35.3%', 'n=158'],
        ['11 vs 6', '37.1%', 'n=156'],
        ['10 vs 7', '39.3%', 'n=156'],
        ['13 vs 4', '21.2%', 'n=156'],
        ['14 vs 3', '15.0%', 'n=156'],
      ],
    },
    {
      id: 'spread-performance',
      title: 'ATS Performance by Line Range (Round 1)',
      headers: ['Spread Range', 'Favourite ATS', 'Edge'],
      rows: [
        ['1-3 points', '41%', 'Fade favourite'],
        ['4-10 points', '52%', 'Neutral'],
        ['11-16 points', '55.3%', 'Back favourite'],
        ['17+ points', '36.8%', 'Fade favourite'],
      ],
    },
    {
      id: 'championship-seeds',
      title: 'Championship Winners by Seed (1985-2025)',
      headers: ['Seed', 'Titles', 'Final Appearances'],
      rows: [
        ['1-seed', '26 (65%)', '32 (47%)'],
        ['2-seed', '5 (12.5%)', '9 (13%)'],
        ['3-seed', '4 (10%)', '8 (12%)'],
        ['4+ seed', '5 (12.5%)', '19 (28%)'],
      ],
    },
  ],

  body: `## Understanding March Madness Betting Markets

### Game Spread

The spread market drives most tournament volume. Public bettors overwhelmingly back favourites, creating systematic mispricings at specific line ranges.

**Where favourites fail:**
- **Tight lines (1-3 points):** Favourites cover just 41%. These matchups feature evenly-matched teams where bookmakers shade toward public perception rather than true probability.
- **Blowout lines (17+ points):** Number 2 seeds as heavy favourites cover 36.8%—a trap where public expects dominance but lower seeds compete harder than rankings suggest.

**Where favourites succeed:**
- **Mid-range lines (11-16 points):** Double-digit favourites cover 55.3% in Round 1 and 63% in Round 2. These represent genuine talent gaps where top seeds execute against overmatched opponents.

**Application:** Fade favourites at extreme spread values. Back them in the 11-16 point range where talent differential is real.

### Game Totals

Tournament basketball produces defensive intensity that regular season does not. Teams play with maximum effort knowing elimination follows any loss. This creates systematic Under value.

**The 3-seed Under pattern** is the most reliable totals edge in the tournament. Number 3 seeds as single-digit favourites go 74.1% Under in first halves—an extraordinary 24 percentage point edge over expected. The driver: elite defensive teams (3-seeds rank top-20 in defensive efficiency) facing lower seeds who cannot score against tournament-level pressure.

**Championship game average:** 140 points over the last 15 years (range 131-162). Use this as your tiebreaker baseline, adjusted ±5-10 points based on finalist defensive profiles.

### Moneyline

Moneyline value concentrates in specific seed matchups where historical upset rates exceed implied probability.

**12 vs 5 games:** The classic upset spot. Number 12 seeds win 35.3% of these matchups, yet moneylines typically price them at +180 to +220 (implied 30-35% probability). That gap creates 3-5 percentage points of edge on 12-seed moneylines.

**Why it works:** Number 5 seeds are often underseeded power conference teams with flawed profiles (poor defence, inconsistent guard play). Number 12 seeds include conference tournament champions playing with maximum confidence and nothing to lose.

## The Seed-by-Seed Breakdown

### 1-Seeds: Elite Defensive Value

Number 1 seeds dominate the tournament with **534 wins since 1985** and a 99.3% first-round win rate (only 2 losses to 16-seeds ever: UMBC over Virginia 2018, FDU over Purdue 2023).

The betting edge is not on 1-seed spreads—those are efficiently priced. The edge is on **first-round Unders**. Number 1 seeds hold opponents to 59 PPG average in first round, hitting Under at 70% rate since 2019.

**Driver:** Elite defensive pressure against 16-seeds who cannot execute their offence under tournament intensity. Public bets Overs expecting blowouts with high scoring. The opposite occurs—blowouts with defensive dominance.

### 2-Seeds: The Heavy Favourite Trap

Number 2 seeds win 93% of first-round games, making them feel like safe bets. The problem emerges when spreads exceed 17 points.

At -17 or higher, 2-seeds cover just **36.8% ATS** (14-24-1 record since 2005). Compare that to 73.3% when favoured by less than 17 points. The 36 percentage point gap represents one of the most reliable fade patterns in tournament betting.

**Why the collapse?** Public overestimates 2-seed dominance based on brand recognition. Sportsbooks shade lines higher, knowing square money will hit the favourite regardless. Meanwhile, 15-seeds compete harder than their seed suggests—many are conference tournament champions with senior leadership.

**Application:** Never lay -17 or higher with 2-seeds. If the line is -14 to -16, consider the favourite. If it crosses 17, fade immediately.

### 5-Seeds vs 12-Seeds: The Annual Certainty

This matchup produces more bracket chaos than any other. The numbers are unambiguous: 12-seeds win **35.3% of matchups** (57-101 record), with at least one 12-seed winning in 34 of the last 40 tournaments.

**When to bet 12-seeds:**
- Conference tournament champions with experienced guards (senior PGs handle pressure)
- Teams ranking top-50 in defensive efficiency (they slow the game and limit possessions)
- Pace mismatches where 5-seed plays uptempo against a disciplined 12-seed

**When to avoid:** Do not blindly bet all four 12-seeds. Identify 1-2 specific matchups with pace/style advantages.

### 8-Seeds vs 9-Seeds: Fade the Favourite

The 8/9 matchup is functionally a coin flip (49.3% 8-seed win rate historically). When 8-seeds are listed as small favourites (under 3 points), they cover at just **22.7% ATS** (5-17-1 record since 2009).

**Why?** The line reflects perceived superiority that does not exist. Number 8 and 9 seeds are structurally similar—middle-of-the-road power conference teams or upper-tier mid-majors. Any favouritism is noise, not signal.

**Application:** Fade 8-seed favourites at -1 to -3. Take 9-seeds or the Under.

## Round-by-Round Strategy

### First Round (64 Teams)

The opening weekend offers maximum variance and maximum value.

- **Double-digit favourites:** Back them. 55.3% ATS success rate, with genuine talent gaps.
- **Tight lines (1-3 points):** Fade the favourite. 41% cover rate reflects overvalued public perception.
- **12 vs 5 matchups:** Identify 1-2 moneyline bets on athletic 12-seeds.
- **First-half Unders on 3-seeds:** 74.1% hit rate is the single most reliable prop bet.

### Second Round (32 Teams)

Chalk firms up as lower seeds are eliminated.

- **Double-digit favourites improve to 63% ATS.** Survivors face weaker opposition relative to their talent.
- **Second-round spreads on 5.5-6.5 range:** 67.7% favourite cover rate. This specific range indicates quality mid-seeds facing inferior opponents.

### Sweet 16 and Beyond

Markets become efficient. Oddsmakers have 4 days between rounds to analyse matchups, and sharp money has pruned inefficiencies.

**Value diminishes** as tournament progresses. The best edges concentrate in Rounds 1-2 where public money floods the market and 67 games occur in 4 days. By Sweet 16, only 8 games occur per weekend—far less opportunity for systematic mispricing.

**Final Four exception:** Championship game totals average 140 points, but variance is extreme (131-162 range). The Under has value when both finalists rank top-25 in defensive efficiency.

## Live Betting Windows

Single-elimination intensity creates momentum swings that algorithms lag in pricing.

### Window 1: Opening Possession (0-2 Minutes)

When the underdog scores first, live algorithms initially underweight the possession advantage. Models assume 1-possession leads are 50/50, but actual predictive value shifts 3-5% toward the team that scored.

**Edge:** Back underdog immediately after they score the opening bucket. Algorithms take 90-120 seconds to recalibrate. Success rate: 52-54% (net edge 2-4%).

### Window 2: Halftime Adjustment (10-30 Seconds Post-Buzzer)

New odds post within seconds of halftime. If first-half action was heavily one-sided (80%+ public on favourite), sharp oddsmakers adjust second-half lines downward aggressively.

**Application:** Bet opposite the first-half public side within 20-30 seconds of halftime line posting. The adjustment often overshoots.

### Window 3: Foul Trouble (Star Player Gets 3rd Foul)

When a star player sits with 3 fouls before halftime, live odds shift toward the opponent. The initial adjustment typically **overestimates impact** by 1-2 possessions.

**Application:** If the favourite loses their star to foul trouble, back them at the inflated odds. The player returns, and the team compensates defensively. Edge: slight (51-52%).

## Counter-Intuitive Findings

### Slow-Paced Teams Create Upset Value

The 2025 tournament confirmed a persistent pattern: slow-paced defensive teams upset higher seeds by limiting possessions.

Drake (2025 16-seed) played just 59 possessions per game—the lowest in Division I. They ranked 67th in KenPom defensive efficiency. Despite their seed, they controlled game flow against faster opponents, limiting their chances to exploit talent advantages.

**Application:** When backing underdogs, prioritise defensive efficiency and tempo control over offensive metrics. A team that holds opponents to 62 PPG creates variance that favours the lower seed.

### Conference Tournament Winners Are Not Value

The Big Ten went 8-0 SU and 8-0 ATS in the 2025 first round—a historic achievement. But backing conference tournament winners is not a systematic edge.

**Why?** Momentum is already priced in. Conference tournament winners receive favourable seeding, creating the appearance of outperformance. In reality, the market adjusted their lines before tipoff.

**Application:** Do not chase recent winners. Their edge is already reflected in spreads.

### Comeback Probability Exceeds Regular Season

Tournament single-elimination format creates psychological dynamics absent from regular season play. Large first-half deficits do not predict outcomes as reliably.

BYU trailed Iona 49-24 (25 points) in the 2025 First Four—and won 78-72. Duke trailed Maryland 39-17 (22 points) in the 2001 Final Four—and won 95-84.

**Data shows:** Comeback probability from 15+ point deficits is approximately 18-22% in tournament play versus 5-8% in regular season. The pressure dynamic shifts both ways—leading teams tighten, trailing teams play freely.

**Application:** Do not heavily lay first-half leads on favourite spreads. Comeback variance is higher than markets price.`,

  faq: [
    {
      q: 'Which bookmaker is best for March Madness betting?',
      a: 'FanDuel and DraftKings offer the most extensive game and futures markets with same-game parlays. Bet365 provides competitive spreads and early lines. Betfair Exchange allows trading positions as the tournament progresses—useful for hedging futures.',
    },
    {
      q: 'Should I bet 12-seeds to beat 5-seeds every year?',
      a: 'Not blindly. The 35.3% upset rate (57-101 record) creates moneyline value, but picking all four loses money. Identify 1-2 specific matchups where the 12-seed has defensive efficiency, experienced guards, and pace mismatch advantage. Conference tournament champions with senior PGs are the ideal profile.',
    },
    {
      q: 'Why do heavy favourites fail to cover in March Madness?',
      a: 'Public money inflates lines beyond true value. Number 2 seeds favoured by 17+ points cover just 36.8% ATS because sportsbooks shade toward public perception, knowing squares will bet the favourite regardless. Lower seeds also play harder knowing elimination is one loss away.',
    },
    {
      q: 'What is the best market for tournament betting value?',
      a: 'First-half Unders on 3-seeds (74.1% hit rate) offer the most reliable edge. Double-digit favourites in Rounds 1-2 cover at 55-63%. Avoid tight spreads (1-3 points) where favourites cover just 41%. Moneylines on 12-seeds provide 3-5 percentage points of edge when priced at +180 or higher.',
    },
    {
      q: 'How should I pick my tournament winner?',
      a: 'Number 1 seeds win 65% of championships (26 of 40 since 1985). Number 1-3 seeds win 87.5% of titles. Choose your champion from these seeds. Look for elite defensive efficiency (top-10 KenPom), experienced guards, and favourable regional draws. Do not pick 5+ seeds to win it all—only two 4-seeds have ever won.',
    },
    {
      q: 'Does the championship game go Over or Under?',
      a: 'The 15-year average is 140 points, but variance is extreme (131-162 range). Back Under when both finalists rank top-25 in defensive efficiency. The 2024 final (UConn 75, Purdue 60 = 135 total) exemplified defensive slugfest dynamics. Use 140 as your bracket tiebreaker baseline, adjusted by ±10 based on team profiles.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'NCAA Tournament Historical Records (1985-2025)',
      'VSiN College Basketball Analysis',
      'KenPom Efficiency Ratings',
      'Odds Shark ATS Historical Data',
      'Team Rankings Bracket Research',
    ],
  },
};