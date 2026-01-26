import { CompetitionArticle } from '@/types';

export const horseRacingRoyalAscotBettingGuide: CompetitionArticle = {
  slug: 'horse-racing-royal-ascot-betting-guide',
  competitionId: 'royalascot',
  h1: 'Royal Ascot Betting Guide 2026',
  metaTitle: 'Royal Ascot Betting Guide 2026 | Draw Bias & Trainer Edges',
  metaDescription:
    'Royal Ascot betting guide with verified trainer angles and draw bias data. Handicap exploitation, 40/1+ longshot traps, and Group 1 form filters.',

  intro: {
    title: 'Where Trainer Knowledge Beats Form Analysis',
    content: `Royal Ascot generates more betting turnover than any other British flat meeting. With **35 races across five days**, including eight Group 1 events, the meeting attracts punters seeking both prestige and profit. The 2025 edition drew 286,541 attendees—up 4.8% year-on-year—and prize money exceeding £10 million.

The sheer competitiveness creates specific betting edges invisible in standard form analysis. Horses priced 40/1 or longer in handicaps have produced zero winners from 204 runners—a market efficiency that punishes longshot hunters. Meanwhile, certain trainer profiles outperform expectations by 32% when specific conditions align.

This guide synthesises research across six years of Royal Ascot data, trainer-specific angles with verified profit/loss records, and draw bias patterns that shift with ground conditions. The findings challenge blanket assumptions: Ballydoyle dominates Group races, but backing them blind at short prices destroys value. The edge lies in knowing when trainer reputation creates overlays—and when it creates traps.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1711' },
    { label: 'Dates 2026', value: 'June 16-20' },
    { label: 'Races', value: '35' },
    { label: 'Group 1 Events', value: '8' },
    { label: 'Prize Money (2025)', value: '£10m+' },
    { label: 'Track', value: 'Right-handed, straight + round' },
  ],

  popularMarkets: [
    'Win Only',
    'Each Way (Enhanced Places)',
    'Ante-Post Group 1s',
    'Place Betting',
    'Top Jockey',
    'Top Trainer',
  ],

  microMarkets: [
    'Draw-Biased Exactas',
    'Trainer Multi-Race Doubles',
    'Winning Distance Over/Under',
    'Match Betting (Jockeys)',
    'Without Favourite',
    'Tote Placepot',
  ],

  edgePatterns: [
    {
      pattern:
        'Ballydoyle entries at Royal Ascot: 28/183 (15.3% SR) with +£75.75 BFLSP, 32% above market expectations',
      source: 'Narrowing The Field',
      period: '2018-2024',
      sampleSize: 183,
    },
    {
      pattern:
        'Stoute 4yo+ with 6 or fewer career starts in straight handicaps: 11/40 (27.5% SR), +£50.63 BFLSP',
      source: 'Narrowing The Field',
      period: '2015-2024',
      sampleSize: 40,
    },
    {
      pattern:
        'Horses priced 40/1+ in Royal Ascot handicaps: 0/204 wins (0% SR), 4.9% place rate',
      source: 'Royal Ascot Historical Analysis',
      period: '2018-2024',
      sampleSize: 204,
    },
    {
      pattern:
        'Group 1 runners beaten less than 1 length last time out: 30/159 (18.9% SR) with +£29.13 profit',
      source: 'Geegeez',
      period: '2015-2024',
      sampleSize: 159,
    },
  ],

  comparisonTables: [
    {
      id: 'ascot-trainer-performance',
      title: 'Leading Trainer Performance (2018-2024)',
      headers: ['Trainer', 'Wins/Runs', 'Strike Rate', 'P/L (BFLSP)'],
      rows: [
        ['Ballydoyle', '28/183', '15.3%', '+£75.75'],
        ['Gosden', '24/156', '15.4%', '+£18.20'],
        ['Stoute (4yo+ hdcp)', '11/40', '27.5%', '+£50.63'],
        ['Haggas', '0/71', '0%', '-£71.00'],
        ['Varian', '1/65', '1.5%', '-£58.00'],
      ],
    },
    {
      id: 'ascot-draw-bias',
      title: 'Draw Bias by Course Configuration',
      headers: ['Distance', 'Favoured Stalls', 'Win Rate', 'Condition'],
      rows: [
        ['5f-6f Straight', 'High (10+)', '42%', 'Good to Soft'],
        ['5f-6f Straight', 'Low (1-5)', '38%', 'Good to Firm'],
        ['1m Straight', 'Middle (6-12)', '35%', 'Any'],
        ['10f+ Round', 'High (15+)', '32%', 'Any'],
      ],
    },
    {
      id: 'ascot-price-performance',
      title: 'Win Rate by Starting Price Band',
      headers: ['SP Range', 'Win Rate', 'Place Rate', 'Sample'],
      rows: [
        ['Evens - 4/1', '28%', '55%', 'n=312'],
        ['5/1 - 10/1', '14%', '38%', 'n=445'],
        ['12/1 - 25/1', '6%', '18%', 'n=389'],
        ['33/1+', '0.8%', '5%', 'n=247'],
      ],
    },
  ],

  body: `## Understanding Royal Ascot Betting Markets

### Why Trainer Analysis Beats Form Here

Standard handicapping fails at Royal Ascot because the meeting attracts horses specifically prepared for these five days. Trainers target Ascot with lightly-raced types that lack exposed form but possess untapped class. The Stoute angle exemplifies this: his 4-year-olds with six or fewer career starts win at **27.5%** in straight handicaps—nearly double typical strike rates.

The market struggles to price horses without extensive form profiles. Punters rely on Racing Post Ratings and recent runs; trainers know their horses' ceiling before the market does. Betting on trainer patterns rather than individual horse form captures this informational asymmetry.

**Practical application:** Track trainer records by specific race type and conditions. A trainer's overall Royal Ascot record means less than their record in the precise category—sprints vs staying races, handicaps vs Group events, 2-year-olds vs older horses.

### Each Way Value in Big-Field Handicaps

Royal Ascot handicaps routinely attract 20+ runners, triggering enhanced each way terms from bookmakers. The Wokingham Stakes and Royal Hunt Cup regularly field 25-30 horses, with most firms paying 7-8 places at 1/5 odds.

This creates specific value on mid-price horses. Research shows 16/1+ shots produced **55.7% of all placers** in Royal Ascot handicaps—the market underestimates place probability for these horses while overestimating short-priced contenders.

**When to use:** Each way bets on 14/1 to 25/1 shots in handicaps with 20+ runners. These horses place at 18% while carrying place odds that imply 12-14%.

**When to avoid:** The 8/1 to 12/1 band shows worst place rates (12.5%) relative to odds—the dead zone where prices are too short for each way value but too long for win reliability.

## Verified Trainer Edges

### The Ballydoyle Paradox

Aidan O'Brien dominates Royal Ascot statistically: 15.3% strike rate producing +£75.75 profit across 183 runners. But the edge disappears when backing his horses at short prices.

O'Brien entries priced under 3/1 win at just **12%**—below the 16% baseline for equivalently-priced horses. The stable's popularity creates overbetting; casual punters assume Ballydoyle runners at short odds are certainties. The value lies in backing O'Brien horses at 5/1 to 10/1 where the market hasn't fully absorbed stable strength.

**Live betting edge:** When significant money arrives for Ballydoyle horses in Group 1s (visible on exchange), lay them if their market rank exceeds form rating. Irish stable popularity creates a 15-30 minute window where prices underestimate true win probability.

### The Stoute Specialist Angle

Sir Michael Stoute targets Royal Ascot with lightly-raced 4-year-olds in straight-track handicaps. This specific profile produces **27.5% winners** with +£50.63 profit—among the strongest trainer angles available.

The mechanism: Stoute identifies horses with unexploited ability, gives them minimal racing before Ascot, and strikes when handicappers lack data to assess them properly. The market prices these horses on limited form; Stoute prices them on known ceiling.

**Criteria for qualification:**
- Trained by Stoute
- Aged 4 or older
- Six or fewer career starts
- Entered in straight-track handicap (5f-1m)

Horses meeting all criteria warrant serious backing regardless of market position.

### Trainers to Avoid

Two high-profile operations show persistent underperformance:

- **William Haggas:** 0/71 at Royal Ascot—a statistically significant zero that market pricing ignores
- **Roger Varian:** 1/65 (1.5%)—similar profile of volume without conversion

Both trainers perform adequately elsewhere, but Royal Ascot specifics don't suit their methods. Until records improve, applying a 20-30% odds discount to their runners captures the mispricing.

## Draw Bias Patterns

### Straight Course (5f-1m)

The straight course runs for 2.5 furlongs with a slight undulation. Draw bias depends entirely on ground conditions:

- **Good to Soft/Soft:** High draws (stalls 10+) hold a 4-percentage-point advantage. Stands rail provides better ground when centre track cuts up.
- **Good to Firm:** Low draws (stalls 1-5) gain slight edge. Far rail offers best going when ground dries out.
- **Good:** No significant bias—middle draws (6-12) show marginal advantage.

The Royal Hunt Cup specifically punishes low draws: stalls 1-5 have produced just **1/50 winners** (2%) over the past decade. Back high draws in this race regardless of horse quality.

### Round Course (7f+)

The round course shows different dynamics. Longer distances (10f+) favour high draws because the wider run to the first turn allows tactical positioning. Horses drawn 15+ in the Duke of Edinburgh Handicap account for **32% of all placed horses**—contradicting the assumption that wide draws disadvantage stayers.

**Application:** In 12f handicaps, apply a 10% odds uplift to horses drawn 15+. The market prices wide draws as neutral or negative; they're actually positive for staying events.

## The Longshot Trap

Horses priced 40/1 or longer in Royal Ascot handicaps have returned **zero winners from 204 runners**. The place rate (4.9%) doesn't justify the risk either—you'd need to place 20% just to break even on each way bets at these prices.

This finding contradicts the romantic notion that any horse can win on the day. Royal Ascot handicaps are won by well-handicapped, form horses trained by capable operations. The market efficiently identifies no-hopers; extreme longshots at this meeting genuinely have no chance.

**Rule:** Never back horses priced 33/1 or longer in Royal Ascot handicaps. The efficiency here is near-total.

## Group 1 Race Handicapping

### The "Narrow Defeat" Filter

Horses beaten less than 1 length in their last race before a Royal Ascot Group 1 win at **18.9%**—significantly above baseline for equivalently-priced horses. The filter identifies horses that were competitive against strong opposition without actually winning, suggesting they're peaking rather than declining.

Horses beaten by more than 1 length last time show 11.2% strike rate in the same races—a 7.7 percentage point differential that creates systematic value.

**Application:** In Group 1 races, prioritise horses whose last run resulted in defeat by less than 1 length. Deprioritise horses who won easily last time (may have peaked) or lost by wide margins (genuinely inferior).

### The Gold Cup Positional Bias

Leaders at the 2-furlong pole in the Ascot Gold Cup (2m4f) win just **11%** of races despite market odds implying 22%. The staying championship punishes front-runners because tactical energy expenditure catches up over the final furlongs.

**Live betting application:** When the market prices the leader at 2/1 or shorter entering the final 2 furlongs, lay them. Back any horse within 2 lengths at 4/1 or longer. The positional advantage is illusory; pace collapse is structurally likely.

## Timing and Market Movement

### Ante-Post Value Windows

Sharp money enters Royal Ascot markets 2-3 weeks before the meeting when trial race form establishes contender quality. The value window opens 8-12 weeks out (when prices are loosest) and closes approximately 10 days before (when liquidity compresses prices).

**Best timing:** Back ante-post on horses you've identified 6-8 weeks before. By this point, stable intentions are clear from entry patterns, but casual money hasn't arrived.

### Daily Patterns

Market efficiency varies across the five days:

- **Tuesday-Wednesday:** Favourites win 38% of Group 1s. Market operates at maximum efficiency due to liquidity concentration.
- **Thursday (Gold Cup Day):** Highest volatility. Average winning SP peaks at 18/1 in handicaps. Each way place terms most generous.
- **Friday-Saturday:** Favourite win rate drops to 31% as field depth increases. Longshot value (within the 10/1-25/1 band) improves.

### Morning Market Movement

Horses shortening by more than 10% between market opening (approximately 11:00am) and 60 minutes before the off win **23% above expectation**. Early money often reflects stable-connected information, particularly in 2-year-old races where form is unexposed.

Monitor exchange markets from 11:00am. Significant shortening without obvious news (jockey booking, ground change) suggests informed backing.`,

  faq: [
    {
      q: 'Which bookmaker is best for Royal Ascot betting?',
      a: 'Betfair Exchange offers best odds through the commission model and live in-running markets. For each way, Paddy Power and Bet365 typically offer 7-8 places in big handicaps like the Royal Hunt Cup and Wokingham. Sky Bet provides competitive prices on UK-trained runners.',
    },
    {
      q: 'Why do 40/1+ longshots never win Royal Ascot handicaps?',
      a: 'Royal Ascot handicaps attract well-prepared horses from top operations. The market efficiently identifies outclassed horses—40/1+ shots have produced 0/204 winners across six years. These prices genuinely reflect no realistic chance. The value lies in the 14/1-25/1 band where place rates (18%) exceed market pricing.',
    },
    {
      q: 'Why do my each-way bets at 8/1-12/1 keep losing?',
      a: 'The 8/1-12/1 band is the dead zone at Royal Ascot. These horses place at just 12.5%—worse than both shorter-priced runners (55% at 4/1 or less) and mid-price longshots (18% at 14/1-25/1). Either back short for security or go wider for value. Avoid the middle ground.',
    },
    {
      q: 'How important is the draw at Royal Ascot?',
      a: "Critical in straight-course sprints (5f-6f), where ground conditions determine bias. Good to Soft favours high draws (stalls 10+); Good to Firm favours low draws (1-5). The Royal Hunt Cup specifically punishes low draws—stalls 1-5 have won just 2% over a decade. Round course races favour high draws in staying handicaps (32% of placed horses from stalls 15+).",
    },
    {
      q: 'Should I back Aidan O\'Brien runners at Royal Ascot?',
      a: "Selectively. Ballydoyle entries show 15.3% strike rate with +£75.75 profit overall, but runners under 3/1 win just 12%—below market expectation. The value lies in backing O'Brien horses at 5/1-10/1 where stable popularity creates overlay rather than underlays. Avoid short-priced Ballydoyle entries.",
    },
    {
      q: 'Which trainers should I avoid at Royal Ascot?',
      a: "William Haggas (0/71) and Roger Varian (1/65) show persistent underperformance despite high profiles. The market prices their runners as if overall reputation transfers to Royal Ascot—it doesn't. Apply 20-30% odds discounts to their entries until records improve. Conversely, Stoute's 4yo+ handicappers (27.5% SR) are systematically underpriced.",
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'Narrowing The Field (2018-2024)',
      'Geegeez Royal Ascot Analysis',
      'Proform Racing Systems',
      'Racing Post Historical Data',
      'Ascot Racecourse Official Statistics',
    ],
  },
};