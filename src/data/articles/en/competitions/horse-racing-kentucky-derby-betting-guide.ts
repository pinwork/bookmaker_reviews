import { CompetitionArticle } from '@/types';

export const horseRacingKentuckyDerbyBettingGuide: CompetitionArticle = {
  slug: 'horse-racing-kentucky-derby-betting-guide',
  competitionId: 'kentucky',
  h1: 'Kentucky Derby Betting Guide 2026',
  metaTitle: 'Kentucky Derby Betting Guide 2026 | Post Position Edge Data',
  metaDescription:
    'Data-backed Kentucky Derby betting guide with post position edge patterns. Favourite win rates, sloppy track analysis, and superfecta inefficiencies.',

  intro: {
    title: 'The Most Wagered Single Race in American Sports',
    content: `The Kentucky Derby generates more betting volume than any single sporting event in the United States. The 2025 renewal at Churchill Downs produced a record **$234.4 million in all-sources handle** on Derby Day alone, with 17.7 million television viewers watching Sovereignty storm home at 7-1.

That concentrated liquidity creates specific inefficiencies. The public clusters money on obvious factors—recent wins, trainer reputation, morning line favourites—while ignoring statistical edges that have persisted for 151 runnings. Post positions 5, 10, and 20 produce winners at double the baseline rate. Favourites win just 33% of Derbies yet attract 40-50% of win pool money. Superfecta pools remain systematically underpriced because recreational bettors avoid the maths.

This guide synthesises post position data from 1930 onwards, track condition correlations, and pari-mutuel pool dynamics. The findings challenge conventional Derby handicapping: the 20-horse field creates chaos that rewards contrarian positioning and exotic wager construction over single-horse conviction bets.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1875' },
    { label: 'Distance', value: '1 1/4 miles (10 furlongs)' },
    { label: 'Surface', value: 'Dirt (left-handed)' },
    { label: 'Field Size', value: '20 horses maximum' },
    { label: 'Purse (2025)', value: '$5 million' },
    { label: 'Favourite Win Rate', value: '33%' },
  ],

  popularMarkets: [
    'Win',
    'Place',
    'Show',
    'Exacta',
    'Trifecta',
    'Superfecta',
    'Future Wager',
  ],

  microMarkets: [
    'Winning Margin',
    'Post Position Props',
    'Trainer/Jockey Doubles',
    'First Call Leader',
    'Derby/Oaks Double',
    'Mutuel Field Betting',
  ],

  edgePatterns: [
    {
      pattern:
        'Posts 5, 10, and 20 produce winners at 10.5% rate each vs 5% baseline probability in a 20-horse field',
      source: 'Churchill Downs Official Records',
      period: '1930-2025',
      sampleSize: 95,
    },
    {
      pattern:
        'Posts 1-3 combined have produced just 1 winner since 1987 (1.08% win rate vs 15% expected for 3 posts)',
      source: 'Kentucky Derby Historical Database',
      period: '1987-2025',
      sampleSize: 114,
    },
    {
      pattern:
        'Post-time favourites finish 1st or 2nd in 65% of recent Derbies but win only 33% outright',
      source: 'TwinSpires / Churchill Downs',
      period: '2015-2025',
      sampleSize: 11,
    },
    {
      pattern:
        'No maiden (horse without a career win) has won the Kentucky Derby since 1933—a 92-year drought across 12 attempts',
      source: 'Equibase Historical Records',
      period: '1933-2025',
      sampleSize: 12,
    },
  ],

  comparisonTables: [
    {
      id: 'derby-post-position-tiers',
      title: 'Post Position Performance Tiers (1930-2025)',
      headers: ['Post Tier', 'Win Rate', 'ITM Rate'],
      rows: [
        ['Elite (5, 10, 20)', '10.5%', '28-29%'],
        ['Strong (7, 8, 15)', '8-10%', '20-22%'],
        ['Average (4, 9, 11-14)', '5-7%', '15-18%'],
        ['Weak (1-3, 6, 16-19)', '0-4%', '7-14%'],
      ],
    },
    {
      id: 'derby-recent-winners',
      title: 'Kentucky Derby Winners (2021-2025)',
      headers: ['Year', 'Winner', 'Post', 'Odds'],
      rows: [
        ['2025', 'Sovereignty', '18', '7-1'],
        ['2024', 'Mystik Dan', '3', '18-1'],
        ['2023', 'Mage', '8', '15-1'],
        ['2022', 'Rich Strike', '20', '80-1'],
        ['2021', 'Mandaloun*', '7', '26-1'],
      ],
    },
    {
      id: 'derby-favourite-performance',
      title: 'Favourite Performance by Odds Band',
      headers: ['Morning Line', 'Win Rate', 'Sample'],
      rows: [
        ['Odds-on to 2-1', '24%', 'n=12'],
        ['5/2 to 5-1', '28%', 'n=18'],
        ['11/2 to 10-1', '12%', 'n=16'],
        ['Longer than 10-1', '4%', 'n=51'],
      ],
    },
  ],

  body: `## Understanding Derby Betting Markets

### The Pari-Mutuel System

American horse racing uses pari-mutuel wagering—you bet against other punters, not the house. The track takes a percentage (takeout), then distributes the remaining pool among winners. This means odds shift constantly until post time based on betting volume.

**Practical impact:** A horse at 8-1 on Wednesday might close at 4-1 by Saturday if money floods the pool. Your payout is determined by final odds, not when you bet. Lock in early if you want better prices on horses you expect to attract late action.

### Win, Place, Show

The foundational bets. Win requires first place. Place pays for first or second. Show pays for first, second, or third. Show pools have the lowest variance but also the lowest edge—the takeout percentage eats into thin margins.

**When to use:** Place betting offers genuine value in the Derby. Favourites finish 1st or 2nd in approximately **65% of recent renewals** despite winning only 33% outright. The place pool underprices this probability because recreational bettors chase win tickets.

### Exotic Wagers

Exacta (first two in order), trifecta (first three), and superfecta (first four) require predicting multiple finishers. The maths get expensive quickly—a $1 trifecta box covering 5 horses costs $60.

**Value angle:** Superfecta pools are the least efficient because casual bettors avoid them. Professional players report 6-10% ROI edges on superfectas when keying legitimate contenders and spreading into longshots for the final two positions. The 2025 superfecta paid $1,682.27 for a $1 stake.

## Post Position: The Quantified Edge

### Why Position Matters

Churchill Downs forces 20 horses into a gate, then funnels them toward the first turn within 300 metres. Inside posts (1-3) face immediate compression as the field moves to the rail. Outside posts (17-20) must cover extra ground or force their way across.

Post position data from 1930 onwards reveals dramatic variance from the theoretical 5% baseline:

- **Post 5:** 10 winners, 10.5% win rate, 29.5% ITM rate
- **Post 10:** 9 winners, 9.7% win rate, highest ITM percentage at 29%
- **Post 20:** 2 winners but only 19 starts—11.1% win rate
- **Post 17:** Zero winners in 45+ starts, worst ITM rate at 6.7%

### The Inside Rail Problem

Since 1987, posts 1-3 combined have produced just **one winner from 114 starters**—Mystik Dan in 2024, breaking a 26-year drought for post 3. The mechanism is clear: inside horses get boxed early, forced to check when the field compresses, and lose positioning into the first turn.

**Betting application:** Discount any horse drawing posts 1-4 by 20-30% relative to your handicapping assessment. A genuine 6-1 shot from post 2 should be valued closer to 8-1 or 9-1 based on historical conversion rates.

### The Outside Resurgence

Recent Derby winners show a trend toward outside posts. Since 2000, **57% of winners** broke from gate 13 or wider. Rich Strike won from post 20 at 80-1 in 2022. Sovereignty won from post 18 in 2025. The extra ground appears less penalising than the chaos of inside traffic.

**Application:** When a quality contender draws posts 15-20, the market often overreacts to historical bias against outside gates. These represent potential overlays if the horse has tactical speed to cross over before the first turn.

## Track Conditions and Mud Pedigree

### Sloppy Track Frequency

Churchill Downs has hosted the Derby in wet conditions more frequently than casual bettors assume. Four of the last five renewals ran on sloppy or muddy surfaces. The 2025 Derby saw rain throughout the day, creating a sloppy track that favoured horses with proven mud form.

### Identifying Mud Specialists

Not all horses handle kickback. When dirt sprays from the horse in front, some horses back off mentally while others relish the conditions. Check:

- Previous wins on wet tracks (Equibase records list track condition)
- Sire lines with mud pedigree (Into Mischief, Tapit, Bernardini produce reliable mud runners)
- Workout reports on off tracks

**2025 case study:** Sovereignty, by Into Mischief, had demonstrated mud ability in earlier starts. His sire line has produced three Derby winners including Authentic (2020). The sloppy surface suited his running style—pressing pace without leading into the kickback.

### Wet Track Betting Adjustments

When rain probability exceeds 60% in the forecast:

- Upgrade horses with 2+ wet track wins by 4-6 points
- Downgrade pure closers who rely on a clear run—kickback eliminates their final surge
- Favour tactical speed (pressing or stalking positions) over deep closers
- Check inside post horses more carefully—rail can become slower in slop

## Timing and Market Dynamics

### Sharp Money Windows

Professional bettors enter Derby pools in two primary windows:

**Window 1: Post-draw reaction (Tuesday-Wednesday).** Once positions are announced, the market hasn't fully absorbed implications. Horses drawing posts 1-3 see odds drift 10-15%; posts 5, 10, 15-20 contract slightly. Early traders capture value before recreational money arrives.

**Window 2: Final 60 minutes before post.** High-limit wagers unlock in the final hour. Watch for unexpected contractions—a 20-1 shot dropping to 12-1 in 15 minutes signals sharp backing, not public sentiment. These late moves carry predictive information.

### Future Wager Strategy

Churchill Downs offers multiple Future Wager pools from November through April. Odds are set before the field is finalised, creating potential overlays on horses who improve during the prep season.

**Value angle:** The "All Others" field bet often closes at attractive odds (4-1 to 8-1) and covers any horse not individually listed. Late-developing contenders who skip early preps frequently fall into this bucket.

## Exotic Wager Construction

### Exacta Boxing

The Derby's favourite-second reliability suggests exacta value. Box the morning line favourite with 2-3 legitimate contenders at $2 cost for 6-12 ticket combinations.

**Key insight:** Three years ago, the Derby finished chalk through the top five—favourites absolutely dominate exacta placements even when not winning.

### Trifecta Key Strategy

Key your top 2 selections for win, spread 3-4 horses for place, then expand to 5-6 for show. This balances conviction with chaos probability.

**Example construction:** $1 trifecta key: Horse A with Horses B,C,D with Horses B,C,D,E,F,G = $36 total cost. You need A to win, but second and third can scramble among your selections.

### Superfecta Value

The least efficient pool. Recreational bettors find the maths intimidating, leaving value on the table. Key legitimate contenders in the top two slots, then box longshots for third and fourth.

**Expected value:** The 2022 superfecta (Rich Strike at 80-1) paid $321,500.10 for a $1 stake. Even normalised superfectas routinely pay $1,000-3,000 when the sequence includes one 15-1+ horse.

## Trainer and Jockey Patterns

### Bob Baffert Factor

Six Derby wins make Baffert the most successful active trainer. His horses peak at the exact moment of the Derby—conditioning cycles are precisely calibrated. When eligible and present, Baffert entries warrant 1-2 point upgrades regardless of morning line.

**Caveat:** The 2025 Derby saw Baffert return from a three-year suspension. His sole entry (Citizen Bull) set the early pace but faded to 15th. Post-suspension form may not immediately match historical standards.

### Jockey Experience

Analysis shows jockeys with 11-20 years of experience produce 19% win rates overall, but experience levels converge to approximately 12% in graded stakes. The horse matters more than the rider at this level.

**Application:** Do not fade a quality contender solely because the jockey is making their first Derby. Do not overweight veteran riders on horses with questionable form.

## Micro-Markets Strategy

### First Call Leader

A market on which horse leads at the first timing point (typically the quarter-mile pole). Front-runners and tactical speed types dominate this market, but it correlates poorly with final results—Derby winners often sit mid-pack early.

**Use case:** Pair "First Call Leader" bets with lay positions on the same horse for win. Capture the early pace price, hedge against victory.

### Derby/Oaks Double

The Kentucky Oaks runs the day before the Derby with a similar field size of 3-year-old fillies. Double markets link the two races. Godolphin swept both in 2025—Good Cheer (Oaks) and Sovereignty (Derby)—the first owner double since Calumet Farm.

**Value angle:** Oaks winners are more predictable than Derby winners (smaller field, less chaos). Key your Oaks selection with 3-4 Derby contenders for better probability distributions.`,

  faq: [
    {
      q: 'Which bookmaker is best for Kentucky Derby betting?',
      a: 'For UK punters, Bet365 offers Derby markets with competitive overrounds. Betfair provides exchange liquidity for trading positions. For US bettors, TwinSpires is the official Churchill Downs platform with the deepest pools. FanDuel and DraftKings offer fixed-odds alternatives. TVG provides rebates on high-volume exotic wagering.',
    },
    {
      q: 'Should I bet the favourite to win the Kentucky Derby?',
      a: 'Not as a default strategy. Favourites win just 33% of Derbies—below public expectation of 50-60%. However, favourites finish 1st or 2nd in 65% of recent renewals, making place bets on chalk significantly more reliable than win bets. Back favourites to place, not to win.',
    },
    {
      q: 'What is the best post position for the Kentucky Derby?',
      a: 'Posts 5, 10, and 20 each produce winners at 10.5% rate—double the 5% baseline for a 20-horse field. Post 5 has 10 total wins (most of any gate). Post 17 has never produced a winner in 45+ starts. Avoid horses drawing posts 1-3, which have combined for just one winner since 1987.',
    },
    {
      q: 'Why do longshots win the Kentucky Derby so often?',
      a: 'The 20-horse field creates mechanical chaos that randomises outcomes beyond pure ability. Traffic problems, pace collapses, and wide trips eliminate contenders regardless of talent. Recent winners at 80-1 (Rich Strike), 18-1 (Mystik Dan), and 15-1 (Mage) reflect this variance. Build exotic wagers that account for chaos rather than conviction win bets.',
    },
    {
      q: 'How does weather affect Kentucky Derby betting?',
      a: 'Sloppy tracks eliminate deep closers who cannot handle kickback spray. Four of the last five Derbies ran on wet surfaces. When rain exceeds 60% probability, upgrade horses with proven mud form (check Equibase records) and horses by Into Mischief, Tapit, or Bernardini sire lines. Fade late-running styles without wet track experience.',
    },
    {
      q: 'What happened to the rule about maiden horses?',
      a: 'Maidens (horses without a career win) remain eligible but face a 92-year statistical drought. The last maiden winner was Brokers Tip in 1933. Since 1937, 12 maidens have attempted the Derby with a best finish of 8th place. Eliminate maidens from win and exacta consideration regardless of morning line odds.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'Churchill Downs Official Records (1930-2025)',
      'Equibase Historical Database',
      'TwinSpires Kentucky Derby Statistics',
      'Daily Racing Form',
      'Blood Horse Post Position Analysis',
      'America\'s Best Racing',
    ],
  },
};