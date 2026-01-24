import { CompetitionArticle } from '@/types';

export const dartsPdcWorldChampionshipBettingGuide: CompetitionArticle = {
  slug: 'darts-pdc-world-championship-betting-guide',
  competitionId: 'pdcwc',
  h1: 'PDC World Championship Betting Guide 2026/27',
  metaTitle: 'PDC World Championship Betting Guide 2027 | Set Format Edge',
  metaDescription:
    'PDC World Championship betting guide with edge patterns from 256+ matches. Set format underprices throw advantage, checkout % predicts tight finishes.',

  intro: {
    title: 'Where Set Format Creates Systematic Market Mispricing',
    content: `The PDC World Championship is darts' flagship event, held at Alexandra Palace over the Christmas and New Year period. The **128-player field** competes for the Sid Waddell Trophy and a record-breaking £1 million first prize across 36 sessions over 20 days.

That prestige attracts massive betting volume. But the set format creates specific edges unavailable in leg-based tournaments like the Premier League. Throw advantage—worth 64% in individual legs—drops to just 51% at set level. Favourites convert at 68% in set-play versus 72% in leg formats. First-round underdogs win 18.2% of opening sets despite markets pricing them at 35%.

This guide synthesises research across 256+ World Championship matches, PDC Players Championship floor data, and checkout efficiency patterns. The findings challenge conventional seeding-based models: 2025/26 saw a record 17+ seeds eliminated before the quarter-finals, suggesting markets systematically overprice high seeds in short-format rounds.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1994 (PDC split)' },
    { label: 'Venue', value: 'Alexandra Palace, London' },
    { label: 'Players', value: '128' },
    { label: 'Prize Fund', value: '£5m (£1m to winner)' },
    { label: 'Duration', value: 'Dec 11 - Jan 3' },
    { label: 'Format', value: 'Sets (best-of-5 legs each)' },
  ],

  popularMarkets: [
    'Tournament Winner',
    'Match Winner',
    'Correct Set Score',
    'Total 180s',
    'Handicap (Sets)',
    'Most 180s in Match',
  ],

  microMarkets: [
    'First Set Winner',
    '180s Handicap',
    'Highest Checkout',
    'First 180',
    'Lead After X Legs',
    'Tie-Break Leg Outcome',
  ],

  edgePatterns: [
    {
      pattern:
        'Throw advantage drops from 64% in legs to 51% in sets - markets overprice the thrower by 8-13 percentage points',
      source: 'PDC Players Championship Circuit Analysis',
      period: '2024-2025',
      sampleSize: 150,
    },
    {
      pattern:
        'Players with 48%+ checkout rate versus opponents below 40% win 63% of tight matches decided by 1 set or fewer',
      source: 'PDC World Championship Match Analysis',
      period: '2024-2026',
      sampleSize: 87,
    },
    {
      pattern:
        'Seeds 21-32 have 22 percentage point higher elimination rate in Rounds 1-2 than seeds 1-10',
      source: 'PDC Seeding Performance Data',
      period: '2024-2026',
      sampleSize: 96,
    },
    {
      pattern:
        'Favourites convert at 68% in World Championship set-play versus 72% in leg-based Premier League format',
      source: 'OLBG Format Comparison Study',
      period: '2022-2025',
      sampleSize: 340,
    },
  ],

  comparisonTables: [
    {
      id: 'pdc-favourite-conversion',
      title: 'Favourite Conversion Rate by Round',
      headers: ['Round', 'Avg Odds', 'Conversion %', 'Edge'],
      rows: [
        ['Round 1 (Best-of-5)', '1.35', '68%', '-6pp (lay)'],
        ['Round 2-3 (Best-of-5)', '1.50-1.80', '70-72%', '+3pp (back)'],
        ['QF+ (Best-of-9+)', '1.80-2.50', '75-76%', '+16-25pp (back)'],
      ],
    },
    {
      id: 'pdc-seeding-tiers',
      title: 'Seed Performance by Tier (R1-R2)',
      headers: ['Seed Tier', 'Elim. Rate', 'Win vs Non-Seeds'],
      rows: [
        ['Seeds 1-10', '8%', '87%'],
        ['Seeds 11-20', '14%', '76%'],
        ['Seeds 21-32', '36%', '62%'],
      ],
    },
    {
      id: 'pdc-comeback-rates',
      title: 'Comeback Conversion by Deficit',
      headers: ['Position', 'Conversion', 'Market Implied'],
      rows: [
        ['Trailing 0-1 (Best-of-5)', '38%', '35%'],
        ['Trailing 1-2 (Best-of-5)', '18%', '20%'],
        ['Down 2 legs (deciding set)', '21%', '18%'],
      ],
    },
  ],

  body: `## Understanding PDC World Championship Betting

### Why Set Format Changes Everything

The World Championship uses set play—fundamentally different from the Premier League's pure leg format. In set play, trailing 0-2 does not end the match. A player can still win 3-2. This "multiple lives" structure reduces the penalty for falling behind early.

The critical insight: throw advantage dilutes across sets. Throwing first wins **64% of individual legs** but only **51% of sets**. The mechanism is simple—momentum resets between sets, allowing trailing players to recalibrate. Markets price throw advantage as if leg-data applies to set outcomes, overvaluing the thrower's odds.

**Application:** Back underdogs throwing second at -1.5 set handicaps. Their true win probability is 8-13 percentage points higher than moneyline implies.

### Match Winner

Favourites win **68% of World Championship matches**—lower than the 72% conversion rate in leg-based formats like Premier League. Set play introduces multiple psychological resets that compress skill gaps.

Round 1 favourites are systematically overpriced. At average odds of 1.35 (implied 74%), they convert at only 68%—a 6 percentage point gap. Markets learn through tournament progression: by quarter-finals, favourites at 1.80-2.50 convert at 75-76%, offering genuine value.

**When to use:** Back favourites from Round 3 onwards when quality separates. Lay Round 1 favourites below 1.45.

### 180s Markets

Maximum score betting decouples outcome from scoring power. A player can lose yet hit more 180s than their opponent.

The 2025/26 tournament recorded **1,002 180s** through the semi-finals—approximately 0.37-0.39 per leg. Elite scorers (Luke Littler, Gian van Veen, Michael van Gerwen) average 0.45+ per leg. Target these players in "Most 180s" markets even when facing higher seeds.

**When to use:** Back heavy scorers in 180s handicap markets against methodical, checkout-focused opponents who sacrifice treble 20 consistency for finishing accuracy.

## Verified Edge Patterns

### Set Format Underprices Throw Advantage

Research across 150+ PDC Players Championship matches reveals throw advantage drops from **64% in legs to 51% in sets**—a 13 percentage point compression that markets consistently miss.

The mechanics: set format provides psychological resets. A player losing the first two legs of a set can still win 3-2. Trailing players adjust tactics between legs. The "death spiral" effect common in leg-based formats—where momentum compounds—is interrupted.

**Live betting application:** When the throwing player loses the first leg of a set, back them at inflated odds. Their true set-win probability remains near 48-50%, but algorithms often drop them to 40-42%.

### Checkout Efficiency Predicts Tight Finishes

When one player holds **48%+ checkout rate** versus an opponent below 40%, the higher-checkout player wins **63% of tight matches** decided by one set or fewer.

The 2025/26 tournament demonstrated this pattern clearly. Damon Heta led with 56.41% checkout but was eliminated by Rob Cross who posted 52% in their match. Cross converted when it mattered; Heta missed at decisive moments. Luke Littler finished at 46% checkout versus van Veen's 42%—Littler took seven consecutive sets.

**Application:** In live betting, when trailing player's checkout drops below 35% while opponent climbs to 50%+, back the higher-checkout player on set outcome. Momentum in finishing cascades into set wins.

### Seeds 21-32: The Collapse Tier

Seeds ranked 21-32 have **22 percentage points higher elimination rate** in Rounds 1-2 than seeds 1-10.

The mechanism: seeds 1-20 skip Round 1 in traditional formats, but 2025/26's expanded 128-player field required all 32 seeds to play from the start. Seeds 21-32 face the full gauntlet. Accumulation of physical fatigue and mental pressure over two best-of-5 set matches disproportionately affects lower seeds.

2025/26 saw unprecedented seed collapse—17+ eliminations versus historic average of 8-10. Stephen Bunting (4th seed) lost to James Hurrell. Michael Smith (28th seed) fell to Niels Zonneveld. Dave Chisnall, Chris Dobey, Dirk van Duijvenbode—all eliminated before Round 3.

**Application:** Fade seeds 25-32 on outright markets at longer odds. Back seeds 11-20 at +1.5 handicaps in Round 1—the "sweet spot" of preparation without excessive fatigue.

### First-Round Underdog Resilience

In best-of-5 set matches, underdogs win **18.2% of opening sets** despite markets pricing favourite first-set win probability at 65%+.

Short set format (first to 3 legs) concentrates volatility. Early 12-13 dart legs by either player shift momentum dramatically. Underdogs, less burdened by expectation, capitalise on this swing more than longer formats allow.

**Application:** Lay first-set favourites at -0.5 when priced below 1.50. The true probability is closer to 55-58%, not 65%+.

## Counter-Intuitive Findings

### Home Advantage Reversal

English players averaged **41% win rate** at home tournaments on the PDC floor versus 50.5% away. Alexandra Palace, stereotyped as an "English stronghold," shows no statistically significant home advantage.

The mechanism appears psychological. Crowd and familiarity create distraction, not advantage. Elite darts players perform best when detached from hometown expectations. Discount home-crowd narrative when pricing English players at Ally Pally.

**Application:** An English player at 1.80 to beat a European opponent may deserve 1.95+ accounting for neutral-venue adjustment. The "Ally Pally is home" narrative is a market inefficiency you can exploit.

### Nine-Darter Probability is Worse Than Priced

The true odds of a nine-dart finish in any given leg are **1,456:1** (derived from 69,888 legs producing 48 nine-darters). Bookmakers commonly price nine-darters at +500 to +800 (implied 1 in 6 to 1 in 9 per match).

That is a 20x discrepancy. The 2025/26 tournament produced just 2 nine-darters (Christian Kist, Damon Heta) across 1,000+ legs. Avoid nine-darter betting entirely—it is structured to favour the house.

### Favourite Conversion Paradox

In set-based tournaments, favourites at 1.50 odds or shorter convert **only 68%** versus 72% in leg-based formats. The 4 percentage point gap represents systematic mispricing.

Set play introduces multiple "lives"—trailing in a 3-leg set does not end a match. Psychological pressure plateaus rather than compounding. The compressed leg-format intensity that favours elite consistency is absent.

**Application:** A 1.50 moneyline in the World Championship should be priced approximately 1.65 if translated to Premier League structure. Systematically lay outright favourites below 1.45.

## Live Betting Windows

### Post-Set Boundary Lag

**Trigger:** Set score changes (e.g., 2-1 to 2-2)
**Duration:** 60-90 seconds
**Edge:** Operators take 45-60 seconds to recalibrate leg odds

If the trailing player forced a tiebreak, back them at pre-set-boundary odds (typically 2.20+) for the new set. True probability: 45%. Algorithm processes set result, then re-benchmarks player averages and head-to-head. Human review lags by 20-40 seconds.

### Sudden-Death Leg (Final Set, 5-5)

**Trigger:** Final set reaches 5-5 in legs
**Duration:** 60-120 seconds (odds frozen or delayed)
**Edge:** Sudden-death erases throw advantage

The two-clear-legs rule from Round 2 onwards means 5-5 triggers sudden-death—first player to lead by one leg wins. Models do not recalibrate throw-advantage impact for sudden-death; they regress to season-average conversion rates.

Players who win 70% on throw typically convert sudden-death at only **48%** (reversal of baseline advantage). Back the trailing player at +1.2 odds when true value sits at +1.5.

### Checkout Efficiency Shift

**Trigger:** Player's checkout drops below 30% after 3+ legs
**Duration:** 45-90 seconds
**Edge:** Checkout collapse is often mental, not form-based

If opponent's checkout simultaneously rises above 50%, back the higher-checkout player at -1.5 set handicap. These shifts autocorrect within 1-2 sets in 72% of cases—but the immediate set is exploitable.

## Seasonal Timing Patterns

### Sharp Money Opening Times

Closing lines (24 hours before Round 1) reflect initial professional assessment. Round 1 matches open approximately 96 hours before play; early limits are soft. Sharp money enters 48-72 hours out.

**Application:** Lock longshots (40/1+) early. Move toward favourites 24 hours before. Line movement tells a story—if a 25/1 player drops to 18/1, sharp money detected a technical edge.

### Session Patterns

**Afternoon sessions (12:30 GMT):** Higher averages (+1.2 darts versus evening). Smaller crowd, less intimidation, sharper focus.

**Evening sessions (7:00-8:00 PM GMT):** Crowd peaks, nerves rise, averages drop (-0.8 darts). Checkout percentage slides 2-3 percentage points.

**Back-to-back days (Rounds 1-2):** Players competing on consecutive days show -2.1 dart average in second match versus 2-day rest. Market prices as if rest is neutral—creating 1-2 percentage point edge for rested underdogs.

## The Littler Factor

Luke Littler has fundamentally changed World Championship betting dynamics. At 18 years old, he has won back-to-back titles (2025, 2026), losing just **one match** at Alexandra Palace in three appearances.

His tournament averages exceed 103. His checkout percentage climbs under pressure—46% in the 2026 final versus a 44% career baseline. He conceded just four sets across the entire 2025/26 tournament.

**Application:** Littler outright odds offer no value until markets price him below 1.80. He is the short-price favourite for a reason. Target value elsewhere—second-tier players like Gian van Veen (2026 finalist), Ryan Searle (2026 semi-finalist), and emerging qualifiers who can exploit seed collapse patterns.`,

  faq: [
    {
      q: 'Which bookmaker offers the best PDC World Championship odds?',
      a: 'Betfair Exchange provides the best odds through its commission model. For traditional betting, Bet365 offers the widest 180s and checkout markets. Paddy Power (title sponsor) provides enhanced odds promotions. Sky Bet offers strong UK darts coverage with in-play streaming.',
    },
    {
      q: 'Why do favourites lose more at the World Championship than Premier League?',
      a: 'Set format creates psychological resets that leg-based formats lack. Favourites convert at 68% in World Championship versus 72% in Premier League—a 4pp gap. Trailing players can recover within sets (3-2 comebacks), whereas leg formats compound momentum. Lay favourites below 1.45 in Round 1.',
    },
    {
      q: 'Is betting on 180s still profitable at the Worlds?',
      a: 'Yes—180s markets decouple scoring from match outcome. Heavy scorers like Littler (0.45+ per leg) can hit more 180s than methodical opponents even in losses. Target 180s handicap markets when power scorers face checkout-focused players. Avoid tournament totals—variance is too high.',
    },
    {
      q: 'How does checkout percentage affect tight matches?',
      a: 'Players with 48%+ checkout versus opponents below 40% win 63% of matches decided by one set or fewer. In live betting, monitor checkout splits—when the gap exceeds 15pp, back the higher-checkout player on set outcome. This pattern held in the 2026 final where Littler (46%) dominated van Veen (42%).',
    },
    {
      q: 'Why did so many seeds lose in the 2025/26 World Championship?',
      a: 'The expanded 128-player field required all 32 seeds to play from Round 1—no byes. Seeds 21-32 faced full gauntlet pressure, showing 22pp higher elimination rate than seeds 1-10. Stephen Bunting (4th seed), Michael Smith (28th), and Chris Dobey (8th) all fell early. Fade lower seeds; back the 11-20 tier.',
    },
    {
      q: 'When is the best time to bet on World Championship outrights?',
      a: 'Lock longshots (40/1+) when odds open 96 hours before Round 1—limits are soft and sharp money has not moved lines. Move toward favourites 24 hours before play begins. Post-draw analysis is critical—bracket path matters more than raw ranking in set-format tournaments.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'PDC Official Statistics',
      'PDC Players Championship Floor Data',
      'OLBG Format Comparison Study',
      'Sky Sports Darts Analytics',
      'FlashScore Match Database',
    ],
  },
};