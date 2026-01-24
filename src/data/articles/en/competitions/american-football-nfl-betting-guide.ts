import { CompetitionArticle } from '@/types';

export const americanFootballNflBettingGuide: CompetitionArticle = {
  slug: 'american-football-nfl-betting-guide',
  competitionId: 'nfl',
  h1: 'NFL Betting Guide 2025/26',
  metaTitle: 'NFL Betting Guide 2025/26 | Data-Backed Edge Patterns',
  metaDescription:
    'NFL betting guide with verified edges from 2,400+ games. Home field worth only 1.5 points now, public bettors hit 32% ATS Weeks 1-4, and road dog value at +3.',

  intro: {
    title: 'Where Home Field Advantage Has Collapsed',
    content: `The NFL processes more betting volume than any other American sport. With **272 regular season games** across 18 weeks, followed by single-elimination playoffs, it offers the deepest markets, tightest spreads, and most analysed matchups available to punters.

That analysis creates a problem. Main markets are efficiently priced within hours of opening. Sharp syndicates move lines by Wednesday. Finding edge requires understanding where the market systematically misprices.

This guide focuses on verified inefficiencies: home field advantage has compressed from 3 points to 1.5, public bettors hit just 32% ATS when backing consensus picks in Weeks 1-4, and road underdogs at +3 or shorter win outright at 45.6%, generating 3.4% ROI. The data comes from 20+ years of historical records, peer-reviewed research, and multi-season ATS databases across 2,400+ games.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1920' },
    { label: 'Teams', value: '32 franchises' },
    { label: 'Regular Season', value: '17 games (18 weeks)' },
    { label: 'Playoffs', value: '14 teams' },
    { label: 'Avg PPG (2025)', value: '23.2' },
    { label: 'Home Win Rate', value: '53%' },
  ],

  popularMarkets: [
    'Point Spread',
    'Money Line',
    'Totals (Over/Under)',
    'Player Props',
    'Same-Game Parlays',
    'First Touchdown Scorer',
    'Team Totals',
  ],

  microMarkets: [
    'Pre-Bye Week Unders',
    'Thursday Night Home Dogs',
    'Week 1 Underdog Spreads',
    'Anytime TD Scorer',
    'Alt Spreads/Totals',
    'Half/Quarter Lines',
  ],

  edgePatterns: [
    {
      pattern:
        'Teams receiving 60%+ public betting in Weeks 1-4 went 22-46-1 ATS (32% cover rate)',
      source: 'Sports Insights Public Betting Data',
      period: '2018-2025',
      sampleSize: 69,
    },
    {
      pattern:
        'Road underdogs at +3 or shorter win outright 45.6%, generating 3.4% ROI versus 47.62% breakeven',
      source: 'NFL Historical Betting Database',
      period: '2000-2024',
      sampleSize: 420,
    },
    {
      pattern:
        'Thursday night home underdogs go 7-22 SU, 11-18 ATS (37.9%), averaging just 15.9 PPG',
      source: 'Thursday Night Football Records',
      period: '2018-2025',
      sampleSize: 29,
    },
    {
      pattern:
        'Post-bye teams cover 54% ATS; pre-bye teams see unders hit at 56% rate',
      source: 'NFL Schedule Analysis',
      period: '2015-2025',
      sampleSize: 320,
    },
  ],

  comparisonTables: [
    {
      id: 'nfl-home-advantage',
      title: 'Home Field Advantage Decline',
      headers: ['Period', 'Home Win %', 'Point Value'],
      rows: [
        ['1970-2010', '57-60%', '2.8-3.0 pts'],
        ['2011-2018', '55-57%', '2.3-2.5 pts'],
        ['2019-2025', '52-53%', '1.5-2.0 pts'],
        ['2024 Season', '53.3%', '1.5 pts'],
      ],
    },
    {
      id: 'nfl-public-inverse',
      title: 'Public Betting Inverse Performance',
      headers: ['Public %', 'ATS Record', 'Cover Rate'],
      rows: [
        ['60%+ on one side', '22-46-1', '32%'],
        ['Inverse (fade public)', '46-22-1', '67.6%'],
        ['50-60% consensus', '~50%', 'Near neutral'],
      ],
    },
    {
      id: 'nfl-underdog-value',
      title: 'Underdog ATS Performance by Spread',
      headers: ['Spread Range', 'Cover Rate', 'SU Win Rate'],
      rows: [
        ['+1 to +3', '52.8%', '45.6%'],
        ['+3.5 to +6.5', '51.2%', '38.4%'],
        ['+7 to +10', '49.8%', '28.2%'],
        ['+10.5+', '47.1%', '18.6%'],
      ],
    },
  ],

  body: `## Understanding NFL Betting Markets

### Point Spread

The spread dominates NFL betting. Bookmakers assign a handicap to level the playing field, with typical lines ranging from -1 to -14 depending on matchup quality.

Key numbers matter critically in NFL. Games settle on 3 (field goal margin) and 7 (touchdown margin) more frequently than any other numbers. A spread moving from -2.5 to -3 or -6.5 to -7 fundamentally changes the cover probability. Buy the half-point around these numbers when juice permits.

**When to use:** Matchups where you have identified specific edge beyond the headline result. Road underdogs at +3 or shorter offer the most consistent value: 45.6% outright win rate generates 3.4% ROI versus the 47.62% breakeven threshold.

**When to avoid:** Heavy favourites on the road. Road favourites of -6 or more cover at just 44%, well below the breakeven rate.

### Totals (Over/Under)

Combined points scored by both teams relative to a posted line. NFL totals range from 36 to 56+ depending on offensive matchups and weather conditions.

Totals vary dramatically by situation:

- **Low totals (35.5-40.5):** 47.3% over (strong under bias)
- **High totals (56+):** 58.4% over (public over-lean creates overs value)
- **Division games:** 52% under rate (familiarity suppresses scoring)
- **Pre-bye week games:** 56% under (teams mentally preparing for rest)

**Value angle:** Pre-bye week unders represent one of the most consistent edges. Teams entering bye weeks show 1.5-2 PPG scoring decline. The Rams went 9-of-10 under in pre-bye games; Seahawks went 9-2 under across a 10-game sample.

### Money Line

Straight-up winner betting without the spread. Juice varies dramatically based on favourite pricing.

Favourites at -115 or shorter win 66.6% of the time (2018-2024), but the juice erodes profitability. Road underdogs at short prices (+130 to +150) create the most profitable moneyline vehicle: 45.6% win rate at average +140 odds generates sustained positive expected value.

## The Home Field Collapse

This is the most dramatic shift in NFL betting. Bookmakers once priced home teams with a standard **3-point advantage**. Modern data shows this has compressed to approximately **1.5 points**.

Historical baseline (1970-2010): 57-60% home win rate, equivalent to 2.8-3.0 point advantage. Modern reality (2019-2025): 52-53% home win rate, equivalent to 1.5 points. The 2024 season saw home teams win just 53.3%, barely above a coin flip.

The drivers are structural:

- **Replay review:** Reduced referee bias toward home teams
- **Salary cap parity:** Talent distribution more even
- **Travel technology:** Sleep scientists, chartered flights, preparation facilities
- **Offensive evolution:** Pass-heavy offence travels better than run-heavy defence

**Betting implication:** Sportsbooks still price home teams as 2-2.5 point favourites on average. This creates systematic arbitrage: back away teams at -3 or better for long-term edge.

### Venue-Specific Exceptions

Not all home fields are equal. Three venues warrant adjustment:

- **Denver (Mile High):** 5,280 ft altitude creates measurable respiratory impact on visitors. Broncos show +17.6pp home advantage (70.6% win rate) versus league average
- **Buffalo (Highmark):** Bills Mafia + extreme weather. 65.5% home win rate since 2018, 62% ATS cover rate
- **Green Bay (Lambeau):** Cold weather specialist roster. 21-9 home record since 2021

These venues warrant 0.5-1 point additional adjustment when backing home teams.

## Public Betting Inverse

The single most actionable edge in NFL betting: fade overwhelming public consensus in early season.

Teams receiving **60%+ of public betting in Weeks 1-4** went 22-46-1 ATS, a 32% cover rate. Betting against consensus yielded **67.6%** win rate across 69 games.

The mechanism is clear. Media recency bias, fantasy football hype, and failure to process coaching/roster changes create systematic overvaluation of certain teams. The market corrects by Week 6-8, but the early-season window offers consistent edge.

**Application:**

- Monitor public betting percentages by Wednesday
- Identify teams receiving 65%+ public action
- Position contrarian by Friday before line compression
- Strongest in Weeks 1-4; effect weakens mid-season

### Week 1 Underdog Surge

Week 1 underdogs specifically cover at **53%** since 2000 (n=200+), contradicting the market thesis that pre-season recalibration favours favourites.

Oddsmakers insufficiently adjust for offseason coaching and roster changes. New coordinators implementing scheme shifts, free agent additions finding chemistry, and training camp battles resolving create information gaps the market slowly corrects.

## Bye Week Dynamics

### Post-Bye Advantage

Teams returning from bye weeks cover **54%** ATS when compared to control group. The rest advantage manifests in:

- Injury recovery time
- Additional preparation for upcoming opponent
- Scheme installation for specific matchups
- Mental refresh mid-season

**Application:** Back post-bye teams against opponents on standard rest, particularly in divisional matchups where preparation time creates schematic advantage.

### Pre-Bye Collapse

Teams entering bye weeks show measurable decline. Scoring drops 1.5-2 PPG. Unders hit at **56%** rate.

The mechanism is psychological and physical. Coaches manage workloads knowing rest is coming. Players protect against injury before the break. Offensive aggression decreases.

**Application:** Play unders in pre-bye matchups at -110 or better. Lay favourites when the favourite is entering bye (mental checkout risk).

## Thursday Night Trap

Thursday Night Football creates specific situational patterns that casual bettors miss.

**Home underdogs on Thursday** represent the single worst bet category in NFL: 7-22 SU, 11-18 ATS (37.9%), averaging just 15.9 PPG, more than 2 standard deviations below league mean.

The scheduling mechanism explains this. TNF features nationally televised matchups, which means strong teams. When home teams are priced as underdogs on Thursday, they are genuinely inferior, not just situationally disadvantaged.

**The 66.7% under rate** in recent TNF games featuring home dogs compounds this. Short-week preparation limits offensive creativity. Defences rely on vanilla schemes. Scoring compresses.

**Application:**

- Never back TNF home underdogs blindly
- Unders hit at elevated rates in TNF games
- Road favourites show less disadvantage than on Sunday

## Seasonal Timing Windows

### Early Season (Weeks 1-4)

Maximum uncertainty and public mispricing. Roster changes not yet reflected in market efficiency.

- Week 1 underdogs cover 53%
- Public consensus teams cover 32%
- New coordinators systematically undervalued
- Fade public heavily until Week 5

### Mid-Season (Weeks 5-12)

Form stabilises. Bye week patterns emerge. Market efficiency increases.

- Post-bye teams cover 54%
- Pre-bye unders hit 56%
- Division games trend under (52%)
- Injury reports become critical

### Late Season (Weeks 13-18)

Motivation differentials dominate. Playoff implications create sharp divergence.

- Eliminated teams underperform
- Locked seeds rest starters (fade in spread)
- Division rivalry games exceed totals
- Weather impacts outdoor stadiums

## Live Betting Windows

### Scoring Drought Recovery

When neither team scores for 8+ minutes in the second half, live totals compress aggressively. If underlying pace metrics remain stable, the live under becomes overpriced.

- **Trigger:** 8+ minute scoreless stretch
- **Duration:** 2-3 minutes after next score
- **Edge:** Assess whether drought reflects true pace change or variance

### Turnover Overcorrection

Post-turnover, live spreads shift 2-3 points in 60-90 seconds. The market often overcorrects.

If the turnover occurred in opponent territory (limited field position damage) or was forced by elite defence (sustainable), the shift may be excessive. The trailing team at new live spread offers value.

### Injury Assessment Lag

When a star player exits for evaluation, books pull lines for 3-5 minutes. Lines reopen with rough estimates. If the injury appears minor (cramps, wind knocked out), the new line overreacts.

Monitor injury for 2-3 plays before positioning. If player returns quickly, the adjusted line offers brief arbitrage.`,

  faq: [
    {
      q: 'Which bookmaker offers the best NFL odds?',
      a: 'BetMGM offers the deepest player prop markets and Edit My Bet functionality. DraftKings leads promotions with bonus bets and NFL Sunday Ticket discounts. Bet365 posts the earliest lines and offers 12-leg same-game parlays. For UK-based punters, Sky Bet and William Hill provide solid NFL coverage.',
    },
    {
      q: 'How much is home field advantage worth in the NFL?',
      a: 'Approximately 1.5 points in 2025, down from the historical 3-point standard. Home teams won just 53.3% in 2024. Markets still price home teams 2-2.5 points higher than justified, creating systematic edge backing away teams at -3 or better.',
    },
    {
      q: 'Should I bet NFL favourites or underdogs?',
      a: 'Underdogs offer better value. Favourites cover just 47% of spreads league-wide (below breakeven). Road underdogs at +3 or shorter win outright 45.6%, generating 3.4% ROI. Home underdogs of +3 to +7 cover 54%. Road favourites of -6+ cover just 44%.',
    },
    {
      q: 'Why does betting against the public work in the NFL?',
      a: 'Public bettors systematically overvalue media narratives, especially early season. Teams receiving 60%+ public betting in Weeks 1-4 went 22-46-1 ATS (32% cover). The inverse strategy hits 67.6%. Effect weakens mid-season as market corrects.',
    },
    {
      q: 'What are the key numbers in NFL betting?',
      a: '3 and 7 are crucial because games settle on these margins most frequently (field goal and touchdown). Buying the half-point around -2.5 to -3 or -6.5 to -7 changes cover probability significantly. Also monitor 10 (TD + FG) and 14 (two TDs).',
    },
    {
      q: 'How important are bye weeks in NFL betting?',
      a: 'Critical. Post-bye teams cover 54% ATS due to rest, injury recovery, and preparation advantages. Pre-bye teams see unders hit 56% as scoring drops 1.5-2 PPG. Use bye weeks as a weekly toggle signal for both spread and total positioning.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'NFL Historical Betting Database (2000-2025)',
      'Sports Insights Public Betting Data',
      'Pro Football Reference',
      'Sharp Football Analysis',
      'VSiN Home Field Advantage Study',
      'Football Outsiders DVOA',
    ],
  },
};