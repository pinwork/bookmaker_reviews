import { CompetitionArticle } from '@/types';

export const horseRacingEpsomDerbyBettingGuide: CompetitionArticle = {
  slug: 'horse-racing-epsom-derby-betting-guide',
  competitionId: 'derby',
  h1: 'Epsom Derby Betting Guide 2026',
  metaTitle: 'Epsom Derby Betting Guide 2026 | Draw Stats & Trial Form',
  metaDescription:
    'Epsom Derby betting guide with verified trends from 23 renewals. Draw bias data, trial correlations, and why mid-price each-way bets underperform.',

  intro: {
    title: 'The Blue Riband Where Draw and Trial Form Collide',
    content: `The Epsom Derby rewards a specific profile. Winners are lightly raced, recently active, and priced at **7/1 or shorter 82.6% of the time**. The market is efficient at the front—but inefficient in micro-markets where draw bias, trial correlations, and in-running pace dynamics create exploitable edges.

Aidan O'Brien has trained 11 of the last 24 winners, including Lambourn (2025) and City Of Troy (2024). That dominance masks a counter-intuitive pattern: his non-favourite runners at 25/1-40/1 have won three Derbys this decade. The market prices Ballydoyle's first string aggressively but ignores the pacemakers who occasionally steal the race.

This guide synthesises research across 23 renewals, 287 runners, and detailed draw analysis since stalls were introduced in 1967. The findings contradict casual assumptions: low draws underperform (not outperform), mid-price each-way bets at 8-14/1 have the worst place rate of any price band, and horses leading at Tattenham Corner win just 11% of the time.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1780' },
    { label: 'Distance', value: '1m 4f 10y' },
    { label: 'Age', value: '3-year-olds only' },
    { label: 'Prize Money', value: '£1.5m' },
    { label: 'Typical Field', value: '12-16 runners' },
    { label: 'Average Winning SP', value: '15/2' },
  ],

  popularMarkets: [
    'Win Only',
    'Each Way',
    'Place Betting',
    'Ante-Post',
    'Without Favourite',
    'Forecast/Tricast',
    'Tote Placepot',
  ],

  microMarkets: [
    'Winning Distance',
    'Top Irish Trainer',
    'Draw-Based Props',
    'SP Band Markets',
    'Match Betting',
    'In-Running Leader Lay',
  ],

  edgePatterns: [
    {
      pattern:
        'Winners priced 7/1 or shorter account for 82.6% of renewals (19/23)',
      source: 'Geegeez Trends Analysis',
      period: '2002-2024',
      sampleSize: 23,
    },
    {
      pattern:
        'Stalls 7-12 produced 10 of last 13 winners (76.9%); stalls 1-3 produced just 2 winners since 2003',
      source: 'Racing Post / Paddy Power Draw Analysis',
      period: '2003-2024',
      sampleSize: 22,
    },
    {
      pattern:
        'Leaders entering the straight win only 11.1% (2/18); eventual winners typically have 70% of field behind at Tattenham Corner',
      source: 'Betfair Sectional Analysis',
      period: '1990-2007',
      sampleSize: 18,
    },
    {
      pattern:
        'Runners priced 15/2-15/1 place at just 12.5% (8/64) vs 55% for horses at 4/1 or shorter',
      source: 'Coral Historical Analysis',
      period: '2003-2023',
      sampleSize: 287,
    },
  ],

  comparisonTables: [
    {
      id: 'derby-draw-stats',
      title: 'Derby Draw Performance (Since 2003)',
      headers: ['Stall Group', 'Winners', 'Strike Rate'],
      rows: [
        ['1-3', '2', '~9%'],
        ['4-6', '4', '~18%'],
        ['7-12', '13', '~59%'],
        ['Stall 10 (since 1967)', '11', '~19%'],
      ],
    },
    {
      id: 'derby-sp-bands',
      title: 'Podium Rate by SP Band (287 runners)',
      headers: ['SP Band', 'Podium Rate', 'Sample'],
      rows: [
        ['4/1 or shorter', '55.2%', 'n=29'],
        ['7/2-7/1', '41.7%', 'n=36'],
        ['15/2-15/1', '12.5%', 'n=64'],
        ['16/1-33/1', '16.3%', 'n=86'],
      ],
    },
    {
      id: 'derby-trainer-form',
      title: 'Trainer Strike Rate (Last 20 Years)',
      headers: ['Trainer', 'Wins', 'Runners'],
      rows: [
        ['Aidan O\'Brien', '11', '86+'],
        ['Sir Michael Stoute', '3', '12'],
        ['Charlie Appleby', '2', '8'],
        ['John Gosden', '2', '15'],
      ],
    },
  ],

  body: `## Understanding Epsom Derby Betting

### Why Epsom Is Different From Every Other Track

The Derby course punishes inexperience. A steep uphill start, sweeping left-hand bends through Tattenham Corner, and a cambered home straight create a unique test that three-year-olds have never faced before. Zero winners in the last 23 renewals had previously raced at Epsom.

That lack of course experience means pedigree, balance, and tactical positioning matter more than form figures. The undulating terrain unbalances horses who lack natural equilibrium. The cambered straight can send an unbalanced runner sideways in the final furlong.

**Key stat:** Winners have run within the previous **5 weeks** in 95.7% of renewals (22/23). Horses returning from longer absences are statistical outliers.

### The Draw Myth: Low Is Not Good

Casual punters assume low draws are advantageous because horses save ground on the rail. The data says the opposite.

Since 2003, stalls 1-3 have produced just **2 winners**—City Of Troy (2024) and Adayar (2021) bucked a long barren run. Meanwhile, stalls 7-12 have produced **10 of the last 13 winners** (76.9%). Stall 10 alone has **11 winners since stalls were introduced in 1967**, roughly 19% strike rate versus 5% if draws were neutral.

The mechanics explain why. An early right-hand kink after the start means low-drawn horses get squeezed against the rail. They must either accept being trapped or use energy switching out. Mid-to-high draws can choose their ground and stay out of trouble into Tattenham Corner.

**Betting application:** Apply a 10-15% discount to horses drawn 1-3. Add 5-10% to horses drawn 7-12, especially stall 10 when it appears in the draw.

## Best Betting Markets for Derby Day

### Win and Each Way

The Derby rewards the front of the market more than most Group 1 races. Of the last 23 winners, **19 were priced 7/1 or shorter** (82.6%), and 14 of 20 came from the top three in the betting.

Favourites individually are volatile—only 8/23 (34.8%) won—but the market collectively identifies the winner at single-figure odds more than four times in five.

**Avoid the "value" trap at mid-prices.** Each-way bets at 8-14/1 feel like sweet spots, but the data contradicts this:

- Horses at **4/1 or shorter** place 55.2% of the time
- Horses at **15/2-15/1** place just 12.5%
- Horses at **16/1-33/1** actually place more often (16.3%) due to occasional big-priced shocks

If you are playing each-way, back very short prices for place security or genuine longshots for the upside. The middle ground underperforms.

### Without Favourite Markets

When the favourite is prohibitively short (under 2/1), the "without favourite" market offers value on the second and third choices. The favourite wins only 34.8% of the time, meaning the without-favourite market pays out in two-thirds of renewals.

### Ante-Post Strategy

Derby ante-post markets open immediately after the previous renewal. Prices shift dramatically at three points:

- **Autumn 2yo Group races:** Dewhurst, Futurity Trophy
- **2,000 Guineas:** Clarifies speed vs stamina profiles
- **Dante/Chester Vase:** Final trial form, 3-4 weeks before Derby

Sharp money waits until after trials and the draw announcement, then bets before late-week retail volume. The draw is released approximately 48 hours before the race—stall 10 assignments regularly trigger 10-15% price contractions.

## Trial Race Correlations

### The Guineas Question

Traditional wisdom says the Derby rewards stamina trials. The data contradicts this. Since 1946, the 2,000 Guineas has produced **20 Derby winners** versus just 11 from the Dante Stakes.

Mile speed translates to Derby success more often than 10-12f staying form. City Of Troy (2024) and Auguste Rodin (2023) both flopped in the Guineas then bounced back to win the Derby—the pattern is now almost expected from Ballydoyle.

**What to look for:** Guineas horses who finished strongly over the final furlong. Lack of stamina is often misdiagnosed when the real issue was an unfavourable pace or greenness.

### Dante and Chester Vase

The Dante (York) and Chester Vase serve as traditional final trials:

- **Dante winners:** 11 Derby winners since 1946; strong correlation
- **Dante beaten horses:** Only Workforce has won the Derby after being beaten in the Dante—losers rarely rebound

Chester Vase winners have produced multiple Derby winners and placers, partly because Chester's tight, undulating track resembles Epsom more than any other British course.

### The Lightly Raced Profile

Derby winners are **almost always unexposed**. Of the last 23 winners:

- 21/23 (91.3%) had five or fewer career runs
- 19/23 (82.6%) had already won a Group race
- Only 2/23 had previously won at 1m4f

The market overvalues "proven stayers" who have already won at 12 furlongs. Derby winners are typically stepping up to the trip for the first time, with latent stamina from pedigree rather than demonstrated form.

## In-Running Strategy: Lay the Leader

This is the most actionable edge for exchange traders.

Betfair's analysis of 18 Derbys (1990-2007) found that **horses leading at Tattenham Corner won just 11.1%** of the time (2/18). Only 33.3% (6/18) even placed. Yet in-running markets routinely crash leaders to sub-2.0 (implied 50%+) as they swing for home.

The eventual winner typically has **70% of the field behind them** at the home turn—roughly 5th position in a 15-runner field. They are tracking the pace, saving energy for the uphill finish.

**Application:** Lay the leader at Tattenham Corner when they are trading at 2.5 or shorter. Back strong-travelling horses sitting 4th-6th who have shown closing ability in trials.

### Pace and Going Interaction

On soft ground, the Derby finish becomes even more attritional. Front-runners who set strong fractions fade dramatically. Horses tracking 3-4 lengths off the lead at the 2f pole can finish much faster than a tiring pack.

Watch earlier races on the card for pace indicators. If front-runners are fading across the Epsom meeting, the Derby leader is almost certainly overpriced in-running.

## The Irish Factor

Irish-trained horses dominate the Derby. Across 23 renewals, **12 winners (52.2%)** were trained in Ireland—despite British runners outnumbering Irish in most fields.

During 2008-2013, Irish horses won 5 of 6 runnings and filled 20 of 30 podium spots. The concentration of elite Classic stock at Ballydoyle and other Irish operations creates a structural edge.

**Betting application:** In "Top Trainer" and nationality markets, Irish operations are systematically underpriced. O'Brien's 11 wins from 86+ runners gives a modest strike rate, but his non-favourites at big prices (Wings Of Eagles 40/1, Serpentine 25/1) offer each-way value when the first string is too short.

## Micro-Markets Strategy

### Winning Distance

The Derby produces both tight finishes and runaways. Shergar (1981) won by 10 lengths; Workforce (2010) set the race record. Markets offering "under 1 length" versus "4+ lengths" often misprice based on recency.

Check the pace map. A strong gallop and attritional ground favour wide-margin winners. Tactical crawls on fast ground compress the field.

### SP Band Props

If bookmakers offer "Winner to return 7/1 or shorter," the Yes side wins 82.6% of the time. "Winner at 16/1+" wins roughly 17% of the time—but when it hits, the payout is substantial.

Combine SP band props with draw analysis. A genuine outsider at 20/1 drawn in stall 10 is statistically more viable than a 12/1 shot drawn in stall 2.`,

  faq: [
    {
      q: 'Which bookmaker is best for Derby betting?',
      a: 'Bet365 offers strong ante-post markets with NRNB (Non-Runner No Bet). Paddy Power extends place terms to 4-5 places on Derby Day. Betfair Exchange provides best odds for serious punters, especially for in-running trading around Tattenham Corner. William Hill and Coral offer competitive each-way terms.',
    },
    {
      q: 'Does the draw really matter in the Derby?',
      a: 'Yes—significantly. Stalls 7-12 produced 10 of the last 13 winners (76.9%). Stalls 1-3 have managed just 2 winners since 2003. Stall 10 alone has 11 winners since 1967, roughly four times the neutral expectation. Low draws are a structural disadvantage at Epsom, not an advantage.',
    },
    {
      q: 'Why do my each-way bets at 10-14/1 keep missing?',
      a: 'Mid-price each-way is the worst band for Derby places. Horses at 15/2-15/1 place just 12.5% of the time (8/64 runners). Compare to 55% for horses at 4/1 or shorter. If playing each-way, back very short prices for place security or genuine longshots (16/1+) for upside—the middle ground statistically underperforms.',
    },
    {
      q: 'Should I back the Guineas winner in the Derby?',
      a: 'Not automatically—but the Guineas is a better Derby trial than most stamina races. Since 1946, the Guineas has produced 20 Derby winners versus 11 from the Dante. Look for Guineas horses who finished strongly; lack of stamina is often misdiagnosed when the real issue was pace or greenness. City Of Troy and Auguste Rodin both rebounded from poor Guineas runs to win the Derby.',
    },
    {
      q: 'Is backing the favourite profitable in the Derby?',
      a: 'Individually, no—favourites win just 34.8% (8/23). But the top three in the betting produce 70% of winners, and horses at 7/1 or shorter win 82.6% of the time. The Derby is not a graveyard for market leaders—it punishes mid-price "value" plays more than short-priced favourites.',
    },
    {
      q: 'When is the best time to bet on the Derby?',
      a: 'Ante-post after trials (late May) but before draw announcement offers stable odds. Sharp money waits until after the draw is released (48 hours before race), then bets before late-week retail volume. Stall 10 assignments trigger 10-15% price contractions. Avoid betting before the 2,000 Guineas—the picture changes significantly.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'Geegeez Derby Trends (2002-2024)',
      'Coral Historical Analysis (287 runners)',
      'Betfair Sectional Analysis (1990-2007)',
      'Racing Post Draw Statistics',
      'Paddy Power Draw Bias Research',
    ],
  },
};