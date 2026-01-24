import { CompetitionArticle } from '@/types';

export const mmaUfcBettingGuide: CompetitionArticle = {
  slug: 'mma-ufc-betting-guide',
  competitionId: 'ufc',
  h1: 'UFC Betting Guide 2026',
  metaTitle: 'UFC Betting Guide 2026 | Data-Backed Edge Patterns',
  metaDescription:
    'UFC betting guide with verified edge patterns. Short underdogs win 52% at +100-150, reach overvalued at 52.7%, finish rates vary 36% by division.',

  intro: {
    title: 'Where Conventional Wisdom Fails',
    content: `UFC betting contains some of the clearest market inefficiencies in combat sports. The conventional narrative—back favourites, respect reach advantage, avoid underdogs—contradicts historical data across thousands of fights.

Consider the reach myth. Fighters with reach advantage win just **52.7% of bouts** across 2,856 fights—barely above coin-flip territory. Yet markets consistently price longer fighters as if physical measurements translate directly to octagon success. This disconnect between perception and reality creates exploitable edges.

Short underdogs between +100 and +150 have delivered +7.44 units profit at 52% win rate over 48 documented fights. Underdog champions defending titles retain their belts 63% of the time despite being priced as likely losers. Co-main event underdogs upset at 40% versus just 23% for main events—a 17-point gap the market fails to price correctly.

This guide synthesises research across 3,200+ UFC fights, weight class finish rates, and card positioning data. The findings reveal where sportsbooks systematically misprice outcomes and where informed punters can extract consistent value.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1993' },
    { label: 'Events Per Year', value: '43 (13 PPV + 30 Fight Nights)' },
    { label: 'Weight Classes', value: '12 (8 men, 4 women)' },
    { label: 'Non-Title Rounds', value: '3 x 5 minutes' },
    { label: 'Title Fight Rounds', value: '5 x 5 minutes' },
    { label: 'Favourite Win Rate', value: '68-72%' },
  ],

  popularMarkets: [
    'Fight Winner (Moneyline)',
    'Method of Victory',
    'Total Rounds Over/Under',
    'Round Betting',
    'Fight to Go the Distance',
    'Parlay Betting',
  ],

  microMarkets: [
    'Specific Round Finish',
    'Decision Outcome Only',
    'Fighter Knockdown',
    'Submission Victory',
    'Method + Round Combination',
    'Fight of the Night',
  ],

  edgePatterns: [
    {
      pattern:
        'Short underdogs between +100 and +150 odds win 52% of fights with +7.44 units profit and 15.5% ROI',
      source: 'Covers.com UFC Betting Trends',
      period: '2022-2024',
      sampleSize: 48,
    },
    {
      pattern:
        'Underdog champions defending titles retain belts 63% of the time (12 wins from 19 attempts)',
      source: 'UFC Historical Title Fight Data',
      period: '2010-2025',
      sampleSize: 19,
    },
    {
      pattern:
        'Co-main event underdogs upset at 40% rate versus main event underdogs at 23% (17pp gap)',
      source: 'MMA Odds Breaker Analysis',
      period: '2018-2024',
      sampleSize: 200,
    },
    {
      pattern:
        'Reach advantage provides only 52.7% win rate (1,506 of 2,856 fights) despite market overvaluation',
      source: 'UFC Statistical Analysis',
      period: '2015-2024',
      sampleSize: 2856,
    },
  ],

  comparisonTables: [
    {
      id: 'ufc-finish-rates',
      title: 'Finish Rates by Weight Class',
      headers: ['Division', 'KO/TKO Rate', 'Decision Rate'],
      rows: [
        ['Heavyweight', '52%', '32%'],
        ['Light Heavyweight', '51%', '34%'],
        ['Middleweight', '40%', '29%'],
        ['Welterweight', '38%', '28%'],
        ['Lightweight', '35%', '34%'],
        ['Featherweight', '33%', '39%'],
        ['Flyweight', '30%', '40%'],
      ],
    },
    {
      id: 'ufc-underdog-tiers',
      title: 'Underdog Performance by Odds Range',
      headers: ['Odds Range', 'Win Rate', 'ROI'],
      rows: [
        ['+100 to +150', '52%', '+15.5%'],
        ['+151 to +250', '27%', '-32.7%'],
        ['+251 to +400', '12%', '-46%'],
        ['+400+', '7%', '-71.2%'],
      ],
    },
    {
      id: 'ufc-favourite-tiers',
      title: 'Favourite Performance by Odds Tier',
      headers: ['Favourite Odds', 'Win Rate', 'Value'],
      rows: [
        ['-400 to -900', '88-93%', 'Appropriately priced'],
        ['-200 to -399', '75-82%', 'Slight value available'],
        ['-101 to -199', '58-65%', 'Often overpriced'],
        ['-100 to +100', '51%', 'Avoid favourites here'],
      ],
    },
  ],

  body: `## Understanding UFC Betting Markets

### The Short Underdog Edge

This represents the clearest exploitable pattern in UFC betting. Fighters closing between +100 and +150 convert at **52% against implied probability of 40-50%**. The mechanism is line compression: sportsbooks narrow spreads excessively on competitive matchups, creating systematic mispricing.

Over 48 documented fights in this range, bettors generated +7.44 units profit—a 15.5% ROI that persists across multiple seasons. The edge is largest when short underdogs possess stylistic advantages or recent winning form that markets undervalue.

**When to target:** Fighters at +100 to +150 with superior wrestling credentials against strikers, or counter-strikers facing pressure fighters. These stylistic edges often produce wins without requiring knockout power.

**When to avoid:** Short underdogs coming off long layoffs or significant weight cuts. Ring rust and dehydration effects neutralise the statistical edge.

### Method of Victory Markets

Combining fighter selection with method provides superior odds compared to straight moneylines. Finishes occur in approximately 52% of UFC fights, but this varies dramatically by weight class.

Heavyweight produces **52% KO/TKO rate**—the highest in the organisation—with only 32% of fights reaching the judges. Flyweight shows the inverse: 30% KO rate and 40% decisions. These division-specific patterns create systematic mispricing when books apply uniform finish probabilities across weight classes.

**Value strategy:** Back KO/TKO in heavyweight and light heavyweight divisions. Back decision outcomes in flyweight, bantamweight, and featherweight where technical skill and cardio dominate over one-punch power.

## Counter-Intuitive Findings

### Reach Advantage Is Massively Overvalued

The V1 guide claimed fighters with significant reach advantage win 58% of fights. Actual data shows **52.7%**—a difference of over 5 percentage points that reveals fundamental market mispricing.

Across 2,856 UFC fights, longer fighters won 1,506 times. This barely exceeds random chance. The mechanism: grappling, footwork, and defensive positioning neutralise reach in ways that static measurements cannot capture. Shorter fighters with superior footwork and distance management routinely defeat longer opponents.

**Betting application:** When a fighter is favoured primarily due to reach advantage—with no clear technical or experiential edge—the line is likely inflated. Look for shorter opponents with superior takedown defence or counter-striking ability.

### Strike Accuracy Statistics Mislead Markets

Raw strike accuracy percentages create false confidence in betting selections. A fighter landing 75% of strikes sounds dominant until you realise they throw primarily from clinch and ground positions where evasion is limited.

Strike Accuracy Over Expected (SAOE) reveals the truth. Distance strikers naturally land 40-50% due to defensive options available to opponents. Clinch strikers land 70%+ because targets cannot evade effectively. When comparing fighters, adjust for striking zone distribution rather than accepting raw percentages.

**Example:** A 61.5% accuracy striker throwing from distance (SAOE +18.5%) is more dangerous than a 75% accurate grappler throwing ground strikes (SAOE +5%).

## Card Position and Event Type Patterns

### The Co-Main Event Anomaly

Card positioning creates measurable betting edges that markets fail to price. Co-main event underdogs upset at **40% versus 23% for main event underdogs**—a 17-percentage-point gap.

The mechanism is betting volume concentration. Main events attract massive public attention, inflating favourite prices through recreational money. Co-main events receive less casual interest, allowing sharper pricing to dominate. Professional bettors hunt value in the 2-3 slots below the headline, where pricing inefficiencies persist.

**Strategy:** Systematically review co-main event underdogs before main event selections. The structural edge from reduced public betting creates consistent value.

### PPV vs Fight Night Dynamics

PPV cards feature elite fighters with established records, making favourites more predictable. Fight Night events showcase rising prospects with thinner data, creating wider odds ranges and more upset opportunities.

PPV favourites generated approximately 0.3 units profit per event historically. Fight Night underdogs generated 0.14 units per event. This reversal suggests different strategies by card type: back established fighters on numbered PPV events, hunt underdog value on free Fight Night cards.

## Underdog Champions: The Hidden Edge

When reigning champions are listed as underdogs for title defences, markets systematically underprice their retention probability. Of **19 underdog champions** throughout UFC history, 12 retained their titles—a 63% success rate.

Champions possess advantages that closing odds fail to capture: 5-round experience, championship-calibre conditioning, and the psychological edge of defending rather than challenging. The cumulative profit from backing all underdog champions: +2.93 units at 24.4% ROI.

**Application:** When a defending champion closes as underdog, their fair probability is significantly higher than market-implied. Back them unless specific circumstances (injury, severe style mismatch) justify the underdog pricing.

## Live Betting Windows

### Line Release Window (4-15 Minutes)

When UFC lines first release, sharp money floods immediately. Within 4-15 minutes, opening prices shift substantially as algorithms recalculate after detecting professional action. Place bets immediately after release for optimal closing-line value. After 15 minutes, lines stabilise until major news emerges.

### Weigh-In Footage Lag (30-90 Minutes)

Visual assessment of fighter condition at weigh-ins influences sharp bettors, but algorithms lag 30-90 minutes in adjusting. If a fighter appears severely dehydrated or struggles to make weight, lines will not reflect this immediately. Monitor live weigh-ins and position before algorithmic adjustment.

### Post-Round 1 Momentum Shifts

When a favourite struggles in Round 1, live odds often overcorrect. Elite fighters with strong championship-round cardio frequently rally after slow starts. The 60-75 minute mark in football has its UFC equivalent: backing quality fighters who lost Round 1 but remain structurally sound.

## Weight Class Strategy

### Heavyweight: Back Finishes

One-punch knockout probability creates unique market dynamics. With **52% KO/TKO rate** and only 32% decisions, heavyweight offers clear under/over positioning. Target Under 1.5 rounds when both fighters carry genuine power. Avoid decision props unless both fighters show poor finishing rates.

### Featherweight and Bantamweight: Back Decisions

The lightest competitive divisions show **39-40% decision rates**—the highest in the organisation. Technical skill, cardio, and defensive responsibility dominate over knockout power. Back Over totals and decision outcomes when two well-conditioned fighters meet.

### Light Favourites Are Traps

Fighters priced between -100 and -199 win just **58-65%** of fights—often lower than break-even requirements after juice. This "light favourite" range represents the worst risk-adjusted value in UFC betting. Either back the underdog or pass entirely. Heavy favourites (-400 to -900) convert at 88-93%, justifying their pricing.`,

  faq: [
    {
      q: 'Which bookmaker has the best UFC odds?',
      a: 'Betfair Exchange offers the best odds through reduced commission on combat sports. For traditional books, DraftKings and FanDuel provide extensive fighter props and method markets. Pinnacle offers the tightest moneyline spreads for professional bettors seeking volume. Shop multiple books—odds variance of 10-15% between platforms is common on undercard fights.',
    },
    {
      q: 'How often do UFC favourites win?',
      a: 'Favourites win 68-72% of UFC fights overall. However, win rate varies dramatically by odds tier: heavy favourites (-400 to -900) convert at 88-93%, while light favourites (-100 to -199) convert at just 58-65%. This gap means light favourites often represent poor value after juice is factored.',
    },
    {
      q: 'Does reach advantage matter in UFC betting?',
      a: 'Less than markets suggest. Fighters with reach advantage win just 52.7% of bouts—barely above random chance. Grappling, footwork, and defensive positioning neutralise reach in ways that static measurements cannot capture. Do not back fighters solely for physical measurements.',
    },
    {
      q: 'Are UFC underdogs worth betting?',
      a: 'Yes, but only in specific ranges. Short underdogs (+100 to +150) win 52% with +15.5% ROI—a clear profitable zone. Underdogs beyond +250 win just 7-12% and produce severe negative ROI. Target short underdogs with stylistic advantages rather than chasing longshot payouts.',
    },
    {
      q: 'What is the best UFC betting market for value?',
      a: 'Method of Victory combined with fighter selection offers superior odds to straight moneylines. Division-specific patterns create edge: heavyweight KO/TKO bets cash 52% of the time versus 30% in flyweight. Back decisions in technical divisions, finishes in power divisions.',
    },
    {
      q: 'Why do my favourite parlays keep losing?',
      a: 'Light favourites (-100 to -199) convert at just 58-65%—often below break-even after juice. A 4-leg parlay of -150 favourites has only 18% probability of hitting despite feeling "safe". Either back heavy favourites (-400+) who convert at 88-93%, or avoid parlaying favourites entirely. Single bets on short underdogs (+100 to +150) at 52% win rate offer better risk-adjusted returns.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'UFC Official Statistics',
      'Covers.com UFC Betting Trends (2022-2024)',
      'MMA Odds Breaker Card Position Analysis',
      'FightMetric Historical Data',
      'Sports Betting Dime Title Fight Records',
    ],
  },
};