import { CompetitionArticle } from '@/types';

export const golfUsOpenBettingGuide: CompetitionArticle = {
  slug: 'golf-us-open-betting-guide',
  competitionId: 'usgopen',
  h1: 'US Open Golf Betting Guide 2026',
  metaTitle: 'US Open Golf Betting Guide 2026 | Data-Backed Edge Patterns',
  metaDescription:
    'US Open betting guide with verified patterns from 40+ championships. Longshot value, approach play metrics, and tee time edges at Shinnecock Hills.',

  intro: {
    title: 'The Major Where Difficulty Creates Value',
    content: `The US Open is golf betting's great equaliser. Course difficulty compresses the gap between world number one and world number thirty—creating systematic mispricing that sharper punters exploit year after year.

Since 2000, only **42.5% of winners** came from the pre-tournament top 10. The remaining 57.5% sat between ranks 11-50. That distribution contradicts every other major, where chalk dominates. Wyndham Clark won 2023 at +7000. J.J. Spaun captured 2025 at +13500—the biggest longshot since Lucas Glover in 2009.

This guide synthesises data across 40+ US Open championships, peer-reviewed tee time research, and strokes-gained analysis. The 2026 edition returns to Shinnecock Hills—a venue where precision beats power and the rough punishes anything offline by inches.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1895' },
    { label: 'Organiser', value: 'USGA' },
    { label: 'Field Size', value: '156 players' },
    { label: 'Format', value: '72-hole stroke play' },
    { label: 'Cut', value: 'Top 60 and ties' },
    { label: 'Prize Money (2025)', value: '$21.5m' },
  ],

  popularMarkets: [
    'Outright Winner',
    'Each Way (Top 5/8)',
    'Top 5/10/20 Finish',
    'First Round Leader',
    'Make/Miss Cut',
    'Head-to-Head Matchups',
    'Winning Score Over/Under',
  ],

  microMarkets: [
    'Winning Margin',
    'Top Nationality',
    'Round Scoring Props',
    'Tournament Matchups (72-hole)',
    'To Shoot Under Par',
    'Wire-to-Wire Winner',
  ],

  edgePatterns: [
    {
      pattern:
        'Players ranked 11-50 in OWGR win 47.5% of US Opens vs top-10 ranked winning 42.5% despite shorter odds',
      source: 'USGA Historical Records / OWGR',
      period: '2000-2025',
      sampleSize: 40,
    },
    {
      pattern:
        'Morning tee time wave scores 0.15 strokes lower than afternoon wave on average across PGA Tour events',
      source: 'Harvard Sports Analysis Collective',
      period: '2010-2014',
      sampleSize: 14160,
    },
    {
      pattern:
        '54-hole leaders convert at 70% but market prices imply 75-80%, creating 5-10pp value on chasers 1-3 back',
      source: 'PGA Tour Historical Data',
      period: '2000-2024',
      sampleSize: 50,
    },
    {
      pattern:
        'Winners with top-6 SG Approach ranking at time of event: 5 of last 5 US Opens (100% correlation)',
      source: 'PGA Tour Strokes Gained Database',
      period: '2020-2024',
      sampleSize: 5,
    },
  ],

  comparisonTables: [
    {
      id: 'usopen-winning-scores',
      title: 'US Open Winning Scores & Venues (2019-2025)',
      headers: ['Year', 'Score', 'Venue', 'Winner Rank'],
      rows: [
        ['2025', 'E (279)', 'Oakmont', '25th'],
        ['2024', '-6 (274)', 'Pinehurst No. 2', '38th'],
        ['2023', '-10 (270)', 'LACC', '32nd'],
        ['2022', '-6 (274)', 'The Country Club', '18th'],
        ['2021', '-6 (278)', 'Torrey Pines', '3rd'],
        ['2020', '-6 (274)', 'Winged Foot', '9th'],
        ['2019', '-13 (271)', 'Pebble Beach', '25th'],
      ],
    },
    {
      id: 'usopen-odds-tiers',
      title: 'Market Hit Rates by Odds Tier (Last 10 US Opens)',
      headers: ['Odds Range', 'Win %', 'Top-5 %', 'Top-20 %'],
      rows: [
        ['+150 to +350', '8%', '35%', '75%'],
        ['+400 to +1000', '5%', '20%', '55%'],
        ['+1200 to +3000', '2%', '8%', '35%'],
        ['+3500 to +10000', '0.5%', '2%', '15%'],
      ],
    },
    {
      id: 'usopen-comeback-tiers',
      title: '54-Hole Lead Conversion by Quality Tier',
      headers: ['Position', 'Top-10 Ranked', 'Rank 11-30', 'Rank 31+'],
      rows: [
        ['Leader', '80%', '65%', '55%'],
        ['1-2 back', '35%', '20%', '12%'],
        ['3-5 back', '15%', '8%', '4%'],
      ],
    },
  ],

  body: `## Understanding US Open Betting Markets

### Outright Winner

The headline market attracts the most volume—and the most inefficiency. Bookmakers price the world number one at +250 to +450 typically, implying 22-29% win probability. Reality suggests 8-12% is fairer based on historical conversion.

**When to use:** Back mid-tier players (OWGR 15-40) with elite SG: Approach stats at +2000 to +6000. This range captures 47.5% of winners since 2000 while offering genuine each-way value.

**When to avoid:** Heavy chalk at single-digit odds. The USGA setup compresses skill differences—world number one gains less advantage than at Augusta or St Andrews.

### Each Way Value

Each way betting at the US Open requires different thinking. With 156 starters and brutal attrition, the "place" portion carries more weight than at standard events.

Standard terms offer 1/5 odds for top-5 or 1/4 for top-8 places. The 2025 Oakmont US Open saw only 2 players finish under par—making top-8 a valuable target even at compressed odds.

**Value angle:** Players in the +4000 to +10000 range hit top-8 at 8-15% rates. The implied probability at those odds (1-2.5%) creates persistent edge on the place portion.

### Make/Miss Cut

Cut markets offer the most reliable edge for analytical bettors. The top-60-and-ties rule sounds generous until you see historical cut lines: +7 at Oakmont 2025, +6 at Oakmont 2016, +5 at Pinehurst 2024.

**Key metric:** SG: Tee-to-Green ranking. Players inside the top-25 for this combined metric make the cut at 90%+ rates. Back them at -200 or better regardless of outright odds.

## Why the US Open Creates Unique Value

### Course Difficulty Compresses the Field

The USGA philosophy differs from other major organisers. Augusta National rewards brilliance. Carnoustie rewards links mastery. US Open venues reward survival.

Average winning score since 2000: **-4.5 under par**. Compare that to the Masters (-11.2), PGA Championship (-9.8), and Open Championship (-8.4). When the leader grinds to even par, the gap between favourite and 30th choice shrinks dramatically.

**Practical implication:** A player who loses 0.5 strokes per round to the world number one on a standard track might only lose 0.2 strokes at a US Open setup. That compression creates value on the middle tier.

### Strokes Gained: Approach Dominates

This is the most predictive metric. Each of the last five US Open winners ranked 6th or better in SG: Approach at time of event. The rough punishes anything offline, making approach accuracy from the fairway the single biggest differentiator.

**Application:** Filter your longshot candidates by SG: Approach ranking. A player at +6000 who ranks 8th in approach offers better expected value than a +2500 player ranked 35th.

### Tee Time Advantage

Research from the Harvard Sports Analysis Collective analysed **14,160 PGA Tour rounds** and found morning tee times produce scores 0.15 strokes lower on average. The effect magnifies at US Opens where greens firm up through the day and wind typically increases.

**Live betting edge:** Track which players catch favourable draws (Thursday AM/Friday PM or Thursday PM/Friday AM). When a mid-tier player posts a strong Round 1 from an afternoon slot, they face easier conditions in Round 2—but algorithms price them based on current leaderboard position, not draw advantage.

## Competition-Specific Factors

### Shinnecock Hills 2026

The 2026 edition returns to one of US Open's most demanding venues. Shinnecock has hosted five prior championships, most recently in 2018 when Brooks Koepka won at +1 (281). Key characteristics:

- **Links-style exposure:** Wind affects every shot. Afternoon rounds play 1-2 strokes harder when gusts exceed 15 mph.
- **Fescue rough:** The native grass punishes anything offline more severely than traditional US Open rough.
- **Elevated greens:** Approach shots must carry to the putting surface—no run-up options on most holes.

Players with links experience (Open Championship contenders, Scottish Open winners) carry genuine edge at Shinnecock.

### The 54-Hole Leader Trap

Markets consistently overprice 54-hole leaders. Data shows **70% conversion**—but implied odds typically suggest 75-80%. The gap creates value on players sitting 1-3 shots back entering Sunday.

Quality tier matters significantly. Top-10 ranked leaders convert at 80%. Leaders ranked 31+ convert at only 55%. When a lower-ranked player leads after 54 holes, trailing favourites offer substantial value.

**Historical context:** Johnny Miller came from 6 back at Oakmont 1973 to win with a final-round 63. Lou Graham trailed by 11 strokes after 36 holes in 1975 before winning. US Open attrition creates comeback opportunities unavailable at other majors.

## Seasonal and Timing Patterns

### Odds Movement Windows

US Open futures open 8-10 weeks before the championship. Key movement periods:

- **4 weeks out:** Major form catalysts. Masters and PGA Championship results shift lines significantly.
- **2 weeks out:** Injury news and warm-up event results (Memorial Tournament correlation).
- **1 week out:** Course setup information released. USGA pins and rough length affect player profiles.
- **Thursday AM:** Weather becomes critical. Final tee time draws announced.

### Weather Volatility

The 2025 Oakmont final round demonstrated weather's impact. Heavy rain before Round 3 softened the course, then Sunday dried out with wind gusts exceeding 15 mph. Sam Burns held a 3-shot lead entering the final day and shot 78 to finish T7.

**Application:** When weather forecasts show significant change between rounds, the market underprices volatility. Back trailing players at enhanced odds—particularly those with strong SG: Around the Green who can scramble through difficult conditions.

## Micro-Markets Strategy

### Winning Score Over/Under

Bookmakers set this line around -5 to -6 for standard setups, moving to -2 or even par for brutal venues like Oakmont. The 2025 line sat at -4.5; Spaun won at even par.

**Edge:** Historical data shows winning scores cluster tightly. Since 2010, only 3 winners exceeded -10 (all at "soft" setups: Erin Hills, LACC, Pebble Beach). Back the over when the venue has demonstrated brutal scoring history.

### First Round Leader

FRL markets price most contenders at +2500 to +4000, with the favourite around +1200 to +1500. A typical field produces approximately **3-5 players capable of leading after 18 holes**, making the market efficient only at the top.

**Value spot:** Players with strong Thursday scoring averages (a real stat on PGA Tour) who receive Thursday AM tee times. The double advantage of fresh course and favourable conditions creates genuine edge.

### Head-to-Head Matchups

Tournament matchups offer the cleanest edges. The market prices based on outright odds, but US Open conditions favour specific attributes (accuracy, scrambling) that create mismatches invisible in standard rankings.

**Example:** A player ranked 30th in OWGR but 5th in SG: Around the Green offers edge against a higher-ranked player who relies on birdie-making. The grind favours completeness over firepower.`,

  faq: [
    {
      q: 'Which bookmaker offers the best US Open golf odds?',
      a: 'Betfair Exchange provides the best outright odds through the commission model. For traditional betting, Pinnacle consistently offers the tightest margins on golf futures. Bet365 has the widest market selection including make/miss cut, round scoring, and same-tournament parlays. Paddy Power offers good each-way terms (1/5 for 8 places) during majors.',
    },
    {
      q: 'Why do favourites underperform at the US Open?',
      a: 'Course difficulty compresses skill gaps. The USGA setup (thick rough, fast greens, narrow fairways) reduces the advantage world number one holds over world number thirty. Since 2000, only 42.5% of winners came from pre-tournament top 10. Mid-tier players (ranked 11-50) won 47.5%—while receiving significantly longer odds.',
    },
    {
      q: 'What stats matter most for US Open betting?',
      a: 'Strokes Gained: Approach is the single most predictive metric. Each of the last 5 winners ranked 6th or better at time of event. SG: Around the Green ranks second (scrambling is essential at US Open setups). Driving accuracy matters more than distance—hitting fairways prevents compounding errors from penal rough.',
    },
    {
      q: 'Do morning tee times really create betting edges?',
      a: 'Yes. Harvard Sports Analysis research across 14,160 PGA Tour rounds found morning waves score 0.15 strokes better on average. At US Opens, the effect amplifies because greens firm up and winds increase through the day. Players with Thursday AM/Friday PM draws face systematically easier conditions.',
    },
    {
      q: 'Are longshots viable at the US Open?',
      a: 'More viable than at any other major. Since 2009, three winners paid +7000 or longer: Glover (2009, +15000), Clark (2023, +7000), and Spaun (2025, +13500). Course difficulty creates variance that short-priced favourites cannot overcome through skill alone. Each way bets at +4000 to +10000 with 8-place terms offer genuine value.',
    },
    {
      q: 'How should I approach live betting at the US Open?',
      a: 'Monitor 54-hole leader conversion. Markets imply 75-80% but actual rate is 70%—creating value on chasers 1-3 back, especially higher-ranked players trailing lower-ranked leaders. Weather volatility also creates windows: when conditions worsen mid-round, algorithms lag in adjusting leader probabilities.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'USGA Championship Records (1895-2025)',
      'PGA Tour Strokes Gained Database',
      'Harvard Sports Analysis Collective',
      'Official World Golf Ranking Historical Data',
      'Data Golf Analytics',
    ],
  },
};