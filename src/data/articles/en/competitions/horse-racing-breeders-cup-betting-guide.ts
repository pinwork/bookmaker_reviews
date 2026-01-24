import { CompetitionArticle } from '@/types';

export const breedersCupBettingGuide: CompetitionArticle = {
  slug: 'horse-racing-breeders-cup-betting-guide',
  competitionId: 'breederscup',
  h1: 'Breeders\' Cup Betting Guide 2026',
  metaTitle: 'Breeders\' Cup Betting Guide 2026 | Data-Backed Patterns',
  metaDescription:
    'Breeders\' Cup betting guide with verified edge patterns from 40+ years. Mile wire-to-wire drought, Del Mar draw bias, and payout premiums up to 914%.',

  intro: {
    title: 'Where Running Style and Draw Bias Create Systematic Edges',
    content: `The Breeders\' Cup is the single richest betting event in North American horse racing. Fourteen Grade I races across two days, **$34+ million in purses**, and exotic pools that dwarf typical track handles. Average payouts run 64% higher than North American baseline for win bets. Superfectas pay 566% more. Pick 6 pools explode to 914% above normal.

That payout premium exists because competitive fields create genuine uncertainty. Friday favourites win at 43%. Saturday favourites collapse to just 22%. The market cannot efficiently price 14-horse fields featuring international raiders, surface transitions, and venue-specific biases.

This guide focuses on the exploitable patterns: the Mile has not produced a wire-to-wire winner in 32 straight runnings. Del Mar turf sprints show 40% inside post advantage. The Distaff punishes early speed so severely that only 10% of recent winners led at the half. These are not generic trends. They are filters that eliminate false contenders before the betting window opens.`,
  },

  quickFacts: [
    { label: 'Established', value: '1984' },
    { label: 'Format', value: '14 Grade I races (2 days)' },
    { label: 'Prize Money', value: '$34+ million' },
    { label: '2026 Venue', value: 'Keeneland (Kentucky)' },
    { label: 'Field Size', value: '12-14 horses per race' },
    { label: 'Flagship Race', value: 'Classic ($7 million)' },
  ],

  popularMarkets: [
    'Win / Place / Show',
    'Exacta / Trifecta / Superfecta',
    'Pick 3 / Pick 4 / Pick 6',
    'Daily Double',
  ],

  microMarkets: [
    'Running Style Filter (Speed vs Closer)',
    'Post Position Value (Turf Races)',
    'Top European (Turf Events)',
    'Grade I Experience Screen',
    'Prep Race Lineage',
    'Surface Transition Props',
  ],

  edgePatterns: [
    {
      pattern:
        'Mile has produced zero wire-to-wire winners in 32 consecutive runnings since 1993; winners average 5.75 lengths back after opening quarter',
      source: 'Americas Best Racing / Historical Analysis',
      period: '1993-2024',
      sampleSize: 32,
    },
    {
      pattern:
        'Friday juvenile favourites win 43% vs Saturday mature race favourites at 22% (21 percentage point gap)',
      source: 'Breeders\' Cup Historical Data',
      period: '2015-2024',
      sampleSize: 70,
    },
    {
      pattern:
        'Del Mar turf posts 1-5 produce 11.3% strike rate vs 6.8% for posts 6+ in 5-furlong sprints (40% inside advantage)',
      source: 'Thoroughbred Racing Commentary',
      period: '2021',
      sampleSize: 425,
    },
    {
      pattern:
        'Distaff winners: only 10% led after first half mile; 65% raced outside top 3 at halfway point',
      source: 'Americas Best Racing',
      period: '2005-2024',
      sampleSize: 20,
    },
  ],

  comparisonTables: [
    {
      id: 'bc-favourite-rates',
      title: 'Favourite Win Rates by Race Type',
      headers: ['Race Type', 'Win %', 'Sample'],
      rows: [
        ['Juvenile Fillies (all-time)', '48.8%', 'n=41'],
        ['Juvenile Fillies (recent)', '23%', 'n=13'],
        ['Juvenile Turf', '17.6%', 'n=17'],
        ['Classic', '28%', 'n=25'],
        ['Mile', '~34%', 'n=41'],
      ],
    },
    {
      id: 'bc-payout-premium',
      title: 'Payout Premium vs North American Average',
      headers: ['Bet Type', 'Premium', 'Avg Payout'],
      rows: [
        ['Win', '+64%', '$20.54'],
        ['Exacta', '+209%', '$307'],
        ['Trifecta', '+344%', '$963'],
        ['Superfecta', '+566%', '$9,585'],
        ['Pick 6', '+914%', '$142,194'],
      ],
    },
    {
      id: 'bc-running-style',
      title: 'Running Style Edge by Race',
      headers: ['Race', 'Best Style', 'Win %'],
      rows: [
        ['Mile', 'Deep closer', '80%'],
        ['Distaff', 'Stalker/Closer', '90%'],
        ['Turf', 'Rally from 5th+', '80%'],
        ['Juvenile Fillies', 'Early speed (top 3)', '67%'],
      ],
    },
  ],

  body: `## Understanding Breeders\' Cup Betting Markets

### Pari-Mutuel Reality

Unlike fixed-odds betting, Breeders\' Cup pools are pari-mutuel. Final odds are determined by total wagering, not bookmaker pricing. This creates specific opportunities:

- **Early money moves lines:** Sharp bettors who identify value early influence closing odds
- **Large pools reduce variance:** Pick 6 pools exceeding $3 million guarantee allow larger tickets without crushing odds
- **Exotic premiums:** Competitive 14-horse fields produce superfecta payouts averaging $9,585 versus $1,700 at typical tracks

**Strategic implication:** Build exotic tickets around contenders with odds likely to drift. European shippers often attract early money, then lengthen as American bettors concentrate on familiar names.

### Win Betting Strategy

The 64% payout premium on win bets reflects field quality, not soft markets. Favourites at the Breeders\' Cup face stiffer competition than at any other event.

- **Friday (juveniles):** 43% favourite win rate justifies moderate confidence in top choices
- **Saturday (mature horses):** 22% favourite win rate demands spreading risk

**Application:** On Saturday, avoid singling heavy favourites in multi-race wagers. The Distaff, Turf, and Mile consistently produce double-digit winners that explode exotic tickets.

## Running Style Patterns by Race

### The Mile: 32 Years Without a Front-Runner

The Breeders\' Cup Mile represents the most extreme running style bias in major American racing. Since Lure won wire-to-wire in 1993, **zero front-runners have won in 32 consecutive editions**.

The data is unambiguous:

- **After opening quarter:** 0 of 25 recent winners led; average position 5.75 lengths back
- **At halfway:** 0 of 25 winners led; 19 of 25 were fifth or worse
- **Top of stretch:** Only 2 of 25 led; both barely held on

**Betting filter:** Eliminate any Mile contender whose optimal style involves pressing or leading the pace. This single filter removes 3-4 false contenders from every field.

### The Distaff: Early Speed Loses

The Distaff punishes front-runners almost as severely as the Mile. Over the last 20 runnings:

- **10% led after the first half mile** and won
- **65% raced outside the top 3** at halfway
- **40% were 6+ lengths back** at the half-mile call

The short Del Mar stretch (1.4 furlongs) theoretically favours speed. It does not. The pace becomes so contested that early types exhaust themselves, and mid-pack stalkers sweep past in deep stretch.

**Betting filter:** Require Distaff contenders to show stalking or closing ability. Horses whose best races came from wire-to-wire efforts are non-viable.

### The Turf: European Closers Dominate

European horses have won 5 of the last 7 Breeders\' Cup Turf editions. The pattern compounds because European trainers specifically target this race with horses suited to its demands.

- **80% of recent winners rallied from 5th or worse** at the half-mile
- **Only 3 American-based winners since 2007:** Little Mike (2012), Main Sequence (2014), Bricks and Mortar (2019)

**Why Europeans excel:** They race exclusively on turf. American turf horses often compete on dirt between grass starts, disrupting their rhythm. European shippers arrive at peak grass fitness.

**Betting edge:** Back European closers at value odds. Fade American speed horses regardless of morning line.

### Juvenile Fillies: Prep Race Lineage

The Juvenile Fillies is the most formful Friday race. The Frizette Stakes at Belmont produces **47% of recent winners** (7 of 15). Add the Alcibiades (27%) and Del Mar Debutante (20%), and three prep races account for nearly all winners.

Running style also matters:

- **67% of winners raced 1st, 2nd, or 3rd** at the half-mile (opposite of Distaff)
- Early tactical speed is advantageous for 2-year-old fillies at one turn

**Mid-range void:** Horses at 8-1 to 16-1 almost never win. Winners cluster at shorter odds (favourite or second choice) or extreme longshots (17-1+) at 19.5%.

**Betting filter:** Prioritise Frizette winners with early tactical speed. Eliminate mid-odds contenders lacking prep race credentials.

## Venue-Specific Factors

### Del Mar Turf Draw Bias (2025, 2028+)

Del Mar hosts the Breeders\' Cup in alternating years. When racing returns there, the turf draw bias creates systematic mispricing.

**5-furlong turf sprints:**

- **Posts 1-5:** 11.3% strike rate (48 winners from 425 starters)
- **Posts 6+:** 6.8% strike rate (6 winners from 88 starters)
- **Inside advantage:** 40% better chance of winning from inside draws

**1-mile turf:**

- **Posts 1-2:** 12.9% strike rate
- **Posts 7-14:** Significantly lower; horses face impossible task

The short 1.4-furlong stretch at Del Mar limits comebacks. Wide runners cannot make up ground. Horses drawn outside in Turf Sprint and Filly and Mare Turf face near-impossible geometry.

**Betting application:** When evaluating Del Mar turf races, apply a 20-30% discount to win probability for horses drawn in posts 10+. Upgrade contenders in posts 1-4.

### Keeneland (2026)

Keeneland offers a fairer playing field than Del Mar. The turf course features:

- Longer stretch allowing closers to rally
- More forgiving outside posts
- Reduced draw bias across all distances

**Adjustment:** At Keeneland, weight running style more heavily than post position. The track rewards ability over draw luck.

## Multi-Race Betting Strategy

### Pick 4 and Pick 6 Architecture

Breeders\' Cup multi-race pools generate life-changing payouts. The 2023 Friday Pick 6 paid **$773,865** for a $2 ticket. Saturday Pick 6: $419,245.

**Ticket construction principles:**

- **Single formful races:** Juvenile Fillies, Juvenile (2-3 horses)
- **Spread chaotic races:** Mile, Turf, Distaff (5-6 horses)
- **Key European shippers:** Use as secondary keys in turf events
- **Eliminate running style non-fits:** Remove speed horses in Mile and Distaff before building tickets

### Guaranteed Pool Timing

Breeders\' Cup guarantees specific pool minimums:

- **Friday Pick 5:** $500,000 guaranteed
- **Friday Pick 6:** $1,000,000 guaranteed
- **Saturday Late Pick 4:** $3,000,000 guaranteed

**Value window:** Early tickets (24+ hours before post) often receive better odds before sharp money concentrates the pools. Build core tickets early, then add value plays closer to post time.

## Classic Analysis

### Speed Figure Floor

The $7 million Classic demands elite speed figures. Over the last 25 years:

- **Average winning Equibase figure:** 120.9
- **Median:** 119
- **17 of 25 winners earned 119+** prior to the Classic

**Filter:** Horses without a prior 119+ Equibase figure are non-viable, particularly older horses with established form ceilings.

### Trainer and Jockey Edges

Bob Baffert has won 4 Classics. Steven Asmussen has 2. Most trainers have 0-1. The race rewards preparation by elite barns.

Jockey patterns:

- **Mike E. Smith:** 3 Classic wins
- **Joel Rosario, Irad Ortiz Jr., Flavien Prat:** 2 wins each

**Practical use:** In close decisions, favour horses trained by Classic-proven barns with jockeys showing Del Mar/Keeneland expertise.

## European vs American Horses

### Surface Separation

The betting edge is simple:

- **Turf races:** Europeans win 38% despite comprising 25% of fields
- **Dirt races:** Europeans win only 12%

European horses train exclusively on grass. Their turf breeding and preparation gives them systematic advantages in Mile, Turf, Filly and Mare Turf, and Turf Sprint.

American horses dominate dirt because European runners rarely encounter the surface. Dirt is practically nonexistent in European training.

**Betting rule:** Back European turf shippers at double-digit odds. Fade European horses on dirt regardless of form.`,

  faq: [
    {
      q: 'Why are Breeders\' Cup payouts so much higher than normal?',
      a: 'Competitive 14-horse Grade I fields create genuine uncertainty. Favourites win only 22% on Saturday versus 33% at typical tracks. This uncertainty inflates exotic pools: superfectas pay 566% above North American average, Pick 6 pools 914% higher. Large fields plus quality competition equals oversized payouts.',
    },
    {
      q: 'Should I back favourites at the Breeders\' Cup?',
      a: 'Friday yes, Saturday no. Juvenile race favourites win 43% (concentrated 2-year-old talent). Saturday mature race favourites win just 22% (deeper fields, international competition). On Saturday, spread multi-race tickets across 4-6 contenders per race rather than singling favourites.',
    },
    {
      q: 'Which running style wins the Mile?',
      a: 'Deep closers. Zero front-runners have won the Mile in 32 consecutive editions since 1993. Winners average 5.75 lengths back after the opening quarter. Eliminate any Mile contender whose optimal style involves leading or pressing the pace.',
    },
    {
      q: 'How much does post position matter at Del Mar?',
      a: 'In turf sprints, posts 1-5 produce 11.3% winners versus 6.8% for posts 6+. That is a 40% inside advantage. In mile turf races, posts 1-2 win at 12.9% versus significantly lower for outside posts. Wide-drawn horses in turf events face near-impossible geometry due to Del Mar\'s short 1.4-furlong stretch.',
    },
    {
      q: 'Should I back European horses?',
      a: 'On turf yes, on dirt no. Europeans win 38% of Breeders\' Cup turf races despite comprising 25% of starters. They train exclusively on grass and target these specific events. On dirt, Europeans win only 12%. Back European turf closers at value odds; fade them entirely on dirt.',
    },
    {
      q: 'What prep race produces the most Juvenile Fillies winners?',
      a: 'The Frizette Stakes at Belmont produces 47% of recent Juvenile Fillies winners (7 of 15). Add Alcibiades (27%) and Del Mar Debutante (20%) and three races account for nearly all winners. Prioritise Frizette graduates with early tactical speed; eliminate mid-odds contenders (8-1 to 16-1) lacking these credentials.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'Breeders\' Cup Official Statistics',
      'Americas Best Racing Historical Analysis',
      'Thoroughbred Racing Commentary (Del Mar Bias Study)',
      'US Racing Mile and Distaff Trend Data',
      'Equibase Speed Figures',
    ],
  },
};