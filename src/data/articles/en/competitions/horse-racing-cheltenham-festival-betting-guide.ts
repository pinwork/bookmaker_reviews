import { CompetitionArticle } from '@/types';

export const horseRacingCheltenhamFestivalBettingGuide: CompetitionArticle = {
  slug: 'horse-racing-cheltenham-festival-betting-guide',
  competitionId: 'cheltenham',
  h1: 'Cheltenham Festival Betting Guide 2026',
  metaTitle: 'Cheltenham Festival Betting Guide 2026 | Data-Backed Edges',
  metaDescription:
    'Cheltenham betting guide with verified patterns from 644 Festival races. Front-runner bias, Irish dominance stats, and why handicap favourites fail.',

  intro: {
    title: 'Where Pace Bias and Irish Dominance Create Systematic Edges',
    content: `The Cheltenham Festival operates on different mathematics than the rest of National Hunt racing. Favourites win just **29% of races**—not the 40-50% casual punters assume. That gap between perception and reality creates value, but only if you know where to look.

The data reveals two structural edges bookmakers consistently misprice. First, front-runners over fences show Impact Values above 2.0 with ROI of +38% in certain distance bands—yet the same running style over staying hurdles produces IV of just 0.36. Second, Irish-trained horses have won 61.3% of Festival races since 2014, yet nationality markets still open with conservative lines.

This guide synthesises research across 644 Festival races, pace-bias studies covering 1,000+ runs, and trainer-specific performance data. The findings challenge the "banker acca" mentality: Grade 1 favourites win 40-60% of the time, but handicap favourites manage just 6-10%. Knowing which races suit which approach is worth more than any single tip.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1860 (modern era 1911)' },
    { label: 'Duration', value: '4 days (mid-March)' },
    { label: 'Races', value: '28' },
    { label: 'Avg Field Size (2024)', value: '13.4 runners' },
    { label: 'Favourite Win Rate', value: '29%' },
    { label: 'Irish Win Rate (2014-25)', value: '61%' },
  ],

  popularMarkets: [
    'Win (SP / Early Prices)',
    'Each Way',
    'Ante-Post',
    'Top Trainer',
    'Top Jockey',
    'Forecast / Tricast',
    'Multiples (Lucky 15/31/63)',
  ],

  microMarkets: [
    'Extra-Place Each Way (Handicaps)',
    'Total Winning Favourites',
    'Prestbury Cup Margin',
    'Without Favourite',
    'Match Bets (A vs B)',
    'Winning SP Band',
  ],

  edgePatterns: [
    {
      pattern:
        'Front-runners in Cheltenham steeplechases win 18.8% with Impact Value 2.08 and ROI +38% at minimum trips',
      source: 'Geegeez / Sporting Life Pace Analysis',
      period: '2016-2024',
      sampleSize: 200,
    },
    {
      pattern:
        'Irish-trained horses win 61.3% of all Cheltenham Festival races vs 38.4% for British runners',
      source: 'Racing Post / Prestbury Cup Records',
      period: '2014-2025',
      sampleSize: 333,
    },
    {
      pattern:
        'Grade 1 favourites win 40-60% of renewals while big handicap favourites win just 6-10%',
      source: 'Cheltenham Betting Offers Statistical Database',
      period: '2000-2024',
      sampleSize: 644,
    },
    {
      pattern:
        'Day 1 favourites win 37% of races compared to 29% Festival-wide average',
      source: 'Betway 25-Year Analysis',
      period: '2000-2024',
      sampleSize: 164,
    },
  ],

  comparisonTables: [
    {
      id: 'cheltenham-fav-by-race',
      title: 'Favourite Win Rate by Race Type',
      headers: ['Race Type', 'Fav Win %', 'Sample'],
      rows: [
        ['Mares Hurdle', '61%', 'n=16'],
        ['Champion Hurdle', '52%', 'n=25'],
        ['Gold Cup', '34-48%', 'n=25'],
        ['Big Handicaps', '6-10%', 'n=15-20 each'],
      ],
    },
    {
      id: 'cheltenham-pace-bias',
      title: 'Front-Runner Performance by Discipline',
      headers: ['Race Type', 'Impact Value', 'ROI'],
      rows: [
        ['Chases (min trip)', '2.08', '+38%'],
        ['Chases (staying)', '1.82', '+22%'],
        ['Hurdles (2m)', '0.92', '-8%'],
        ['Hurdles (staying)', '0.36', '-31%'],
      ],
    },
    {
      id: 'cheltenham-irish-dominance',
      title: 'Prestbury Cup: Irish vs British (2014-2025)',
      headers: ['Year', 'Irish Wins', 'British Wins'],
      rows: [
        ['2025', '20', '8'],
        ['2024', '19', '9'],
        ['2022', '17', '11'],
        ['2021', '23', '5'],
      ],
    },
  ],

  body: `## Understanding Cheltenham Festival Betting

### Why the Festival Breaks Normal Rules

Cheltenham concentrates the entire top tier of National Hunt racing into four days. Field sizes average **13.4 runners** but handicaps regularly see 20+ starters. The unique track—left-handed, undulating, with a brutal uphill finish over the final half-mile—eliminates horses who lack stamina regardless of their ability elsewhere.

This creates specific betting dynamics:
- **Course experience matters more here than any other track.** Horses with 3-6 previous Cheltenham runs show consistent profitability at level stakes. First-time visitors underperform.
- **Recent form is essential.** In the Festival Trophy, 83% of winners (10/12) had run within the previous 59 days and had at least three runs that season.
- **Pace bias splits by discipline.** Front-runners dominate over fences but struggle over staying hurdles—a counter-intuitive finding most punters miss.

### The Favourite Myth

Media coverage creates an impression that "bankers" dominate. The data tells a different story. Since 2000, favourites have won just **29.2% of Festival races** (188 winners from 644 races). That is marginally above generic National Hunt norms—not the 40-50% casual punters assume.

Critically, this average masks extreme variance by race type:
- **Mares Hurdle:** 61% favourite win rate since 2008
- **Champion Hurdle:** 52% favourite win rate (9 of last 12)
- **Gold Cup:** 34-48% depending on sample
- **Martin Pipe Handicap Hurdle:** 6% favourite win rate
- **Coral Cup:** Under 10% favourite win rate

**Application:** Back favourites in Grade 1 championship races. Fade them aggressively in big-field handicaps where short-priced "good things" win less than 1 in 5.

## The Irish Dominance Edge

### Prestbury Cup Reality

Since the Prestbury Cup began tracking Ireland vs Britain in 2014, Irish-trained horses have won **204 of 333 races (61.3%)**. Britain has managed just 128 wins (38.4%). In 2021, Ireland took 23 of 28 races—an 82% strike rate.

This is not fluctuation. Ireland has won 10 of 12 Prestbury Cup editions. The only British win came in 2015; one tie occurred in 2019. Every other year belongs to Ireland.

**Why it happens:**
- Irish prize money funds deeper talent pools
- Irish yards specifically target Cheltenham as the pinnacle
- The weak pound makes British prizes attractive for Irish connections
- Ground conditions (Good to Soft) suit Irish preparation

**Market application:** In trainer and nationality specials, price Ireland as strong favourite. Top Trainer markets consistently undervalue Willie Mullins (113 Festival winners) relative to British counterparts.

### Trainer-Specific Edges

| Trainer | Festival Wins | Specialty |
|---------|---------------|-----------|
| Willie Mullins | 113 | Mares, novice hurdles, stayers |
| Nicky Henderson | 75 | Supreme, Champion Hurdle |
| Paul Nicholls | 50 | Staying chases |
| Gordon Elliott | 41 | Handicaps, Cross Country |

Mullins recorded 10 winners at a single Festival in both 2022 and 2025—an all-time record. His depth means second and third strings can represent value when the market focuses on his principal runner.

## Pace Bias: The Hidden Edge

### Over Fences: Front-Runners Dominate

This is the most actionable finding in the research. Geegeez pace-bias analysis shows front-runners in Cheltenham steeplechases produce:
- **Impact Value 2.08** at minimum trips
- **ROI +38.51%** and A/E 1.74
- **25% win rate** vs 5.7% for hold-up horses in handicap chase samples

In a 96-winner handicap chase study, 68 winners (71%) were front-runners or raced prominently despite representing only 47% of runners.

**Application:** In Festival chases—particularly the Arkle, Queen Mother Champion Chase, and shorter handicap chases—back horses with front-running profiles. When a fancied chaser gets an uncontested lead, in-play markets often under-price the chance it keeps going.

### Over Hurdles: Front-Runners Struggle

The opposite applies over hurdles, especially at staying trips:
- **2m hurdles:** IV 0.92 (marginally below par)
- **Intermediate hurdles:** IV 0.64 (significant negative)
- **Staying hurdles:** IV 0.36 (severe disadvantage)

Cheltenham becomes one of the worst tracks for front-running hurdlers over 2m4f+. The stiff uphill finish exposes horses who have used energy maintaining position.

**Application:** In the Stayers Hurdle, Coral Cup, and Pertemps Final, fade horses travelling too freely at halfway. Late closers who sit in the pack approaching the hill outperform market expectations.

## Live Betting Windows

### Second-Last Fence Risk (Old Course)

Analysis of Cheltenham steeplechases since 2003 shows **30% of all falls (39/132) occur at the second-last fence** on the Old Course. The third-last accounts for just 8, the fourth-last 11, and the last fence only 9.

This concentration creates specific live value:
- **Lay short-priced leaders** approaching the second-last in rough races
- **Novice chasers are particularly vulnerable** at this obstacle
- The downhill/undulating approach combined with race pressure causes errors

### Handicap "Bankers" Mid-Race

Short-priced favourites in Festival handicaps (3/1 and shorter) win just **19.4% of the time** (6/31 since 2002). Yet these horses attract heavy in-running support when they cruise mid-race.

**Strategy:**
- Lay over-short favourites cruising at halfway in big-field handicaps
- Back "lurkers" who fit positive trends (course form, 6-8 years old, Leopardstown prep) but drift in-running due to position

## Trials Day: The Over-Hyped Pointer

### The Reality

Racing Post analysis shows that since 2015, just **26 of 296 horses** running on Trials Day won at that year's Festival—a 9% conversion rate. Only 12 completed a genuine Trials Day/Festival double.

Television branding pushes Trials Day as the ultimate pointer. The data does not support this.

**The exception:** Specific races do predict Festival success:
- **Cleeve Hurdle:** 8 Stayers Hurdle winners from 72 runners since moving to 3m (11% conversion, +22% ROI backing blind)
- **Timeform Novices Handicap Chase:** 13 Festival winners this century; 4 of last 10 doubled up at Festival (40%)

**Application:** Ignore generic "Trials Day winner" hype. Focus specifically on Cleeve Hurdle and Timeform Novices Chase form when handicapping their target races.

## Each-Way Strategy

### Why Enhanced Terms Create Edge

Bookmakers offer aggressive each-way terms at Cheltenham—1/4 odds for 5-7 places in big handicaps. In some situations, this creates place books where implied probabilities exceed 100%—meaning the layer, not the punter, is mathematically disadvantaged.

Irish Field documented early-priced Festival horses whose place odds carried **18-20% edges** relative to true probability.

**When to play each-way:**
- Big-field handicaps (20+ runners) with enhanced place terms
- 1/4 odds paying 5-6 places
- Horses priced 8/1 to 16/1 with strong place credentials

**When to avoid:**
- Grade 1 championship races with small fields
- Short-priced favourites where win-only offers better value
- Any race where standard 1/5 odds apply

## Course Form Sweet Spot

### The 3-6 Runs Profile

Cross-race profiling shows horses with **3-6 previous Cheltenham runs** generate positive level-stakes returns across the Festival card. First-time visitors consistently underperform expectations.

In the Festival Trophy Handicap Chase:
- 11 of 12 winners had previous Cheltenham experience
- 7 of 12 had already won at the track
- 10 of 12 had run within 59 days of the Festival

**Pattern:** Prioritise horses with proven Cheltenham form, recent racing (under 60 days), and at least three runs in the current season. Under-exposed "dark horses" skipping trials are over-backed relative to their actual strike rate.`,

  faq: [
    {
      q: 'How often do favourites win at the Cheltenham Festival?',
      a: 'Favourites win approximately 29% of Festival races (188/644 since 2000)—lower than most punters assume. However, this varies dramatically by race type: Mares Hurdle favourites win 61%, Champion Hurdle 52%, but big handicap favourites win just 6-10%. Back favourites in Grade 1s, fade them in handicaps.',
    },
    {
      q: 'Why do my Cheltenham handicap bets always lose?',
      a: 'Short-priced handicap favourites (3/1 and under) win just 19.4% at the Festival—roughly 1 in 5. Big-field handicaps are graveyards for "bankers". The edge lies in backing each-way at enhanced terms (1/4 odds, 5-6 places) on horses priced 8/1-16/1 with course form, not in stacking accas on short-priced favourites.',
    },
    {
      q: 'Which bookmaker is best for Cheltenham Festival betting?',
      a: 'Paddy Power and Betfair offer the best enhanced each-way terms (often 6-7 places in big handicaps). Bet365 provides excellent in-play coverage. Sky Bet frequently has best prices on Irish runners. For ante-post, William Hill offers Non-Runner No Bet from January on major races.',
    },
    {
      q: 'Why do Irish horses dominate Cheltenham?',
      a: 'Irish-trained horses have won 61.3% of Festival races since 2014 (204/333). Irish yards benefit from deeper talent pools funded by domestic prize money, specifically target Cheltenham as the pinnacle, and prepare horses on similar Good-Soft ground. Willie Mullins alone has 113 Festival winners—more than Henderson (75) and Nicholls (50) combined.',
    },
    {
      q: 'Is Trials Day a reliable guide to Festival winners?',
      a: 'No. Since 2015, just 9% of Trials Day runners (26/296) won at that years Festival. The exception: specific races like the Cleeve Hurdle (11% conversion to Stayers Hurdle winners, +22% ROI) and Timeform Novices Chase (40% of last 10 winners doubled up). Ignore generic Trials Day hype; target these specific form lines.',
    },
    {
      q: 'Should I back front-runners at Cheltenham?',
      a: 'Over fences, yes—front-runners show Impact Value 2.08 and +38% ROI at minimum trips. Over staying hurdles, no—IV drops to 0.36 at 3m+, making Cheltenham one of the worst tracks for front-running hurdlers. This split is the most actionable edge in Festival betting.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'Racing Post Festival Statistics (2000-2025)',
      'Geegeez Pace Bias Analysis',
      'Betway 25-Year Favourite Study',
      'Cheltenham Betting Offers Database',
      'Timeform Historical Records',
      'British Horseracing Authority Data',
    ],
  },
};