import { CompetitionArticle } from '@/types';

export const faCupBettingGuide: CompetitionArticle = {
  slug: 'fa-cup-betting-guide',
  competitionId: 'facup',
  h1: 'FA Cup Betting Guide 2025/26',
  metaTitle: 'FA Cup Betting Guide 2025/26 | Expert Tips & Best Odds',
  metaDescription: 'Complete guide to betting on the FA Cup. Expert analysis, giant-killing trends, replay rules, and betting strategies for the world\'s oldest cup competition.',

  intro: {
    title: 'The World\'s Oldest Football Cup Competition',
    content: `The FA Cup is football's original knockout competition, famous for giant-killings and magical moments. Unlike league betting, the cup format creates unique opportunities for value betting, especially in early rounds.

This guide covers everything you need to know about betting on the FA Cup: from understanding giant-killing patterns to navigating the replay system and identifying value in later rounds.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1871' },
    { label: 'Teams', value: '700+ (all rounds)' },
    { label: 'Format', value: 'Single-leg knockout' },
    { label: 'Season', value: 'August - May' },
    { label: 'Rounds', value: '14 (including qualifying)' },
    { label: 'Final Venue', value: 'Wembley Stadium' },
  ],

  popularMarkets: [
    'Match Result (1X2)',
    'To Qualify',
    'Both Teams to Score (BTTS)',
    'Over/Under Goals',
    'Correct Score',
    'First Goalscorer',
    'Outright Winner',
  ],

  microMarkets: [
    'Player Shots on Target',
    'Team Corners',
    'Extra Time Yes/No',
    'Penalty Shootout',
    'First Goal Time',
    'Winning Margin',
  ],

  edgePatterns: [
    {
      pattern: 'Non-league teams win 8% of matches against League Two opposition',
      source: 'FA Cup Historical Data',
      period: '2015-2024',
      sampleSize: 124,
    },
    {
      pattern: 'Championship teams beat Premier League opponents 22% of the time',
      source: 'Historical Analysis',
      period: '2015-2024',
      sampleSize: 186,
    },
    {
      pattern: 'BTTS lands in 58% of FA Cup matches (higher than league average)',
      source: 'Opta Sports',
      period: '2019-2024',
      sampleSize: 456,
    },
    {
      pattern: 'Home teams in 3rd Round win 62% when facing lower league opposition',
      source: 'FA Cup Statistics',
      period: '2015-2024',
      sampleSize: 320,
    },
    {
      pattern: 'Big 6 teams reach Quarter-Finals 85% of the time',
      source: 'Historical Data',
      period: '2015-2024',
      sampleSize: 54,
    },
  ],

  comparisonTables: [
    {
      id: 'facup-round-stats',
      title: 'FA Cup Upset Rate by Round',
      headers: ['Round', 'Upsets %', 'BTTS %', 'Over 2.5 %'],
      rows: [
        ['3rd Round', '18%', '58%', '54%'],
        ['4th Round', '15%', '55%', '52%'],
        ['5th Round', '12%', '52%', '50%'],
        ['Quarter-Finals', '8%', '48%', '48%'],
        ['Semi-Finals', '5%', '45%', '45%'],
      ],
    },
  ],

  body: `## Understanding FA Cup Betting

### Competition Structure
- **14 rounds** from Extra Preliminary to Final
- **Premier League teams** enter at 3rd Round (January)
- **Single-leg knockout** (no replays since 2020)
- **Extra time and penalties** decide drawn matches
- **Wembley Final** in May

### What Makes FA Cup Different
- **Giant-killings** — lower league teams regularly upset favorites
- **Rotation** — top teams rest players in early rounds
- **Motivation variance** — some teams prioritize league
- **Home advantage** — crucial for lower league teams
- **No replays** — sudden death format since 2020

## Best Betting Markets for FA Cup

### Match Result (1X2)
Giant-killings create value in backing underdogs. Lower league teams win approximately **8-22%** of matches against higher division opposition.

**When to use:** Early rounds with rotated Premier League teams.

**When to avoid:** Semi-finals and Final — top teams fully focused.

### To Qualify
More forgiving than match result — accounts for extra time and penalties.

**Key factor:** Check penalty records for knockout matches.

### Draw No Bet
Protects against shock results while offering value on favorites.

**Value tip:** Use DNB on Championship teams away at League One/Two sides.

## Competition-Specific Factors

### 3rd Round Magic
January's 3rd Round is FA Cup's most unpredictable stage:
- Premier League teams enter
- Heavy rotation common
- Non-league dream ties
- Pitches can be poor

### Top Team Approach
Big clubs' FA Cup priorities vary:
- **Title challengers** — may rotate heavily
- **Trophy-less clubs** — take it seriously
- **European clubs** — fixture congestion affects team selection

### Lower League Factors
When backing underdogs consider:
- Home advantage crucial
- Pitch conditions
- Physical approach
- Set-piece threat
- Goalkeeping quality

## Round-by-Round Betting

### Early Rounds (1st-2nd)
- Stick to teams you know
- Research form in lower leagues
- Home advantage crucial

### 3rd-4th Round
- Maximum unpredictability
- Check team news obsessively
- Value in upset markets

### 5th Round Onwards
- Serious teams remain
- Less rotation
- Quality prevails

### Semi-Finals and Final
- Neutral venue betting
- Both teams motivated
- Form less relevant — big occasion`,

  faq: [
    {
      q: 'Which bookmaker has the best FA Cup odds?',
      a: 'Bet365 offers extensive coverage including lower league matches. Sky Bet has good promotions for FA Cup rounds. Betfair Exchange provides best odds for popular markets.',
    },
    {
      q: 'Are replays still part of the FA Cup?',
      a: 'No, replays were scrapped from the 2020/21 season onwards. All matches are now decided on the day with extra time and penalties if needed.',
    },
    {
      q: 'When do Premier League teams enter the FA Cup?',
      a: 'Premier League and Championship teams enter at the 3rd Round in January. This is when the competition gains mainstream attention and giant-killings capture headlines.',
    },
    {
      q: 'Should I back non-league teams?',
      a: 'Non-league teams win approximately 8% of matches against League Two sides. The value exists but requires careful selection. Home advantage, pitch conditions, and the bigger team\'s approach (rotation vs full strength) are crucial factors.',
    },
    {
      q: 'How do penalties affect FA Cup betting?',
      a: 'With no replays, penalties decide drawn matches. Check team penalty records and specialist takers. "To Qualify" markets factor in penalties while "Match Result" does not (draw is possible in 90 minutes).',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'FA Official Statistics',
      'Opta Sports Data',
      'Historical Match Data',
    ],
  },
};
