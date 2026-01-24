import { CompetitionArticle } from '@/types';

export const collegeFootballBettingGuide: CompetitionArticle = {
  slug: 'american-football-college-football-betting-guide',
  competitionId: 'ncaaf',
  h1: 'College Football Betting Guide 2026',
  metaTitle: 'College Football Betting Guide 2026 | Data-Backed Edge Patterns',
  metaDescription:
    'College football betting guide with verified edge patterns from 27,000+ matches. Home field advantage, bye week traps, and transfer portal analysis.',

  intro: {
    title: 'The Most Inefficient Major American Sports Betting Market',
    content: `College football processes less sharp money than the NFL, creating persistent inefficiencies that professional bettors exploit year after year. With **136 FBS teams** across vastly different talent levels, bookmakers struggle to set accurate lines for the 800+ games each season.

The numbers tell a clear story. Favourites have covered just 49.7% of spreads since 2005—below the 52.4% break-even threshold at standard -110 juice. Home teams win 64% of games straight-up, yet public money consistently overvalues road favourites. Teams coming off bye weeks underperform their season averages by 10-15 percentage points.

This guide synthesises research from peer-reviewed studies covering 27,000+ top-flight games, official NCAA statistics, and multi-season ATS settlement records. The transfer portal has transformed roster construction since 2021, creating a new variable that books are still learning to price correctly.`,
  },

  quickFacts: [
    { label: 'Teams (FBS)', value: '136' },
    { label: 'Season', value: 'Late August - Mid January' },
    { label: 'Regular Season Games', value: '12-13 per team' },
    { label: 'Playoff Format', value: '12-team CFP' },
    { label: 'Home Win Rate', value: '64%' },
    { label: 'Avg Points per Game', value: '30+' },
  ],

  popularMarkets: [
    'Point Spread',
    'Moneyline',
    'Total Points Over/Under',
    'First Half Spread',
    'Same-Game Parlay',
    'National Championship Futures',
  ],

  microMarkets: [
    'Player Receiving Yards',
    'First Touchdown Scorer',
    'Team Total Points',
    'Method of First Score',
    'Player Rushing Yards',
    'Anytime Touchdown Scorer',
  ],

  edgePatterns: [
    {
      pattern:
        'Home teams win 64% straight-up with consistent 63.8% rate across 3-year and 5-year samples',
      source: 'TeamRankings / Phil Steele',
      period: '2019-2024',
      sampleSize: 2200,
    },
    {
      pattern:
        'Favourites cover spreads only 49.7% since 2005; 2024 regular season hit 49% (worst in 20 years)',
      source: 'BetMGM Sports',
      period: '2005-2024',
      sampleSize: 5000,
    },
    {
      pattern:
        '75% of Power 5 coaches perform worse after bye week vs their conference-play average',
      source: 'NCAA Historical Analysis',
      period: '2010-2024',
      sampleSize: 450,
    },
    {
      pattern:
        'CFP first-round bye teams lost 7 of 8 quarterfinal matches across 2024 and 2025 playoffs',
      source: 'College Football Playoff Records',
      period: '2024-2025',
      sampleSize: 8,
    },
  ],

  comparisonTables: [
    {
      id: 'cfb-home-advantage',
      title: 'Home Field Advantage Consistency (2019-2024)',
      headers: ['Time Period', 'Home Record', 'Win %'],
      rows: [
        ['2024 Season', '553-306', '64%'],
        ['3-Year (2022-24)', '1,653-935', '63.8%'],
        ['5-Year (2019-24)', '2,679-1,523', '63.8%'],
      ],
    },
    {
      id: 'cfb-conference-scoring',
      title: 'Conference Scoring Averages 2025',
      headers: ['Conference', 'Avg PPG', 'Totals Bias'],
      rows: [
        ['Big 12', '33.6', 'Overs'],
        ['SEC', '28-30', 'Neutral'],
        ['Big Ten', '27.9', 'Unders'],
        ['Mountain West', '26-28', 'Unders'],
      ],
    },
    {
      id: 'cfb-favourite-ats',
      title: 'Favourite ATS Performance (Long-Term)',
      headers: ['Period', 'Cover Rate', 'Edge'],
      rows: [
        ['2005-2024', '49.7%', '-2.7% vs break-even'],
        ['2018-2024 (Post-PASPA)', '49.3%', '-3.1% vs break-even'],
        ['2024 Regular Season', '49.0%', '-3.4% vs break-even'],
      ],
    },
  ],

  body: `## Understanding College Football Betting Markets

### Point Spread

The dominant market. College spreads range from -1 to -45+, far wider than the NFL's typical -3 to -20 range. This variance creates opportunity. The key numbers differ from professional football: +3, +7, and +10 matter most due to scoring patterns.

**When to use:** Games with clear talent gaps where you have an opinion on margin.

**When to avoid:** Early-season matchups against unknown opponents. Wait for conference play when team identities solidify.

### Totals (Over/Under)

Conference tendencies drive totals value. The Big 12 averages **33.6 points per game**—highest among Power conferences. Big Ten teams average just 27.9 PPG with a defensive identity that suppresses scoring. Bookmakers price totals similarly across conferences, creating systematic edges.

**Conference breakdown:**
- **Big 12:** Overs hit at elevated rates due to offensive schemes
- **Big Ten:** Unders offer value against defensive-minded programmes
- **SEC:** Trending higher but historically balanced
- **Mountain West:** Defensive league, favour unders

### Moneyline

College moneylines feature extreme prices. A -2000 favourite requires betting £2000 to win £100. Upsets occur frequently enough that heavy favourite moneylines carry negative expected value long-term.

**Value tip:** Road underdogs in the +4 to +14 spread range offer better risk-adjusted returns on moneyline than spread betting.

## Verified Edge Patterns

### The Home Field Advantage Gap

Home teams win **64% of college football games**—significantly higher than any professional American sport. The effect is remarkably consistent: 63.8% across both 3-year and 5-year samples. Public money still overvalues road favourites.

The mechanism is clear. Student sections create genuine intimidation. Travel distances span thousands of miles. Altitude (Colorado, Wyoming) and extreme weather (Minnesota, Wisconsin) compound the disadvantage for visitors.

**Application:** Road favourites laying more than 7 points deserve scrutiny. The market prices home advantage at roughly 3 points, but data suggests 7-10 points is more accurate when combined with stadium-specific factors.

### Bye Week Disadvantage

Conventional wisdom says bye weeks help. Data says otherwise. Analysis of 450+ bye-week games across 13 seasons shows **75% of Power 5 coaches perform worse** after the break compared to their conference-play baseline.

Historical examples are striking:
- **Nick Saban:** 85.3% SEC win rate vs 70.8% post-bye (-14.5 points)
- **Bob Stoops:** 81.0% Big 12 rate vs 65.3% post-bye (-15.7 points)
- **Kirk Ferentz:** 55.5% Big Ten rate vs 45.2% post-bye (-10.3 points)

The 2024-25 College Football Playoff amplified this pattern. Seven of eight teams with first-round byes lost their quarterfinal matchups. Only Indiana won after sitting out the first round.

**Application:** Fade teams coming off bye weeks, especially when facing quality opponents. The extra preparation time appears to help opponents more than it helps the rested team.

### Favourite Underperformance

Betting favourites blindly loses money. Period. Since 2005, favourites have covered just **49.7% of spreads**—below the 52.4% threshold needed to break even at -110. The trend has worsened post-PASPA: 49.3% since 2018, and a dismal 49% during the 2024 regular season.

**The maths:** At 49.7% win rate and -110 juice, blind favourite betting produces -2.7% ROI annually. That's £27 lost per £1000 wagered.

The edge exists in reverse. Underdogs covered 50.3% over the same period, with 51% in 2024. Selective underdog betting, particularly road dogs in the +7 to +14 range, produces positive expected value.

### Transfer Portal Transformation

The transfer portal has become college football's most important roster variable since 2021. Teams that dominate portal recruiting show dramatic ATS improvements in their first season with new players.

Texas Tech exemplifies the pattern. After aggressive portal spending in 2024-25, they went **11-1 ATS** (85.7% cover rate)—the best in FBS. Indiana under Curt Cignetti built a playoff roster almost entirely through portal additions, prioritising proven production over potential.

**Application:** Monitor portal activity December-January. Teams adding experienced starters (20+ career games) at key positions show measurable betting value in early-season lines before bookmakers adjust.

## Competition-Specific Factors

### Talent Variance

The gap between Alabama and a mid-major is enormous. Blue-chip recruiting (4-star and 5-star players) predicts championship success 2-3 years ahead. This talent concentration enables elite programmes to cover massive spreads that would be impossible in the NFL.

**Key insight:** Top-5 ranked teams covering -21+ spreads against unranked opponents is profitable long-term. The quality gap allows blowouts because starters play deep into games to impress the playoff committee.

### Conference Realignment Effects

The 2024 conference realignment shuffled programmes across leagues, creating data discontinuity. Historical Big 12 trends no longer apply to new members. Be cautious with trend-based betting until programmes establish new conference identities.

### 12-Team Playoff Motivation

Late-season games now carry higher stakes than ever. Teams fighting for playoff positioning (rankings 8-15) show elevated motivation and cover rates. Teams already eliminated or already locked into position show predictable letdowns.

**November value:** Track CFP committee rankings weekly. Back teams in the 10-14 range needing wins for positioning. Fade teams that have mathematically secured or been eliminated from playoff contention.

## Seasonal Timing Patterns

### Weeks 0-3 (August-September)

Early-season chaos. Sharp bettors lack current data on new rosters. Public money floods toward brand names (Alabama, Ohio State, USC). Upset rates run 15-20% higher than mid-season averages.

**Application:** Contrarian plays against overvalued favourites offer +EV. Unders perform well as offences work out timing with new personnel.

### Weeks 4-10 (October-November)

Markets sharpen as team identities solidify. General spread efficiency approaches 50%. Value shifts toward micro-markets: player props, team totals, and situational plays.

### Weeks 11-14 (Rivalry/Championship Period)

Emotional betting peaks during rivalry games. Historical rivalry records outperform recent form as predictors. Virginia Tech dominates Virginia regardless of season records. The market overreacts to public sentiment.

**Rivalry rule:** When public betting exceeds 70% on one side, check historical rivalry data. Fade public favourites if history supports the underdog.

## Micro-Markets Strategy

### Player Props

Bookmakers dedicate fewer resources to player prop lines than game spreads. Receiving yards markets for secondary pass-catchers are particularly inefficient—books price them based on limited data while sharp models incorporate coverage tendencies and target shares.

**High-value props:**
- **Receiving yards:** Underdogs in pass-heavy game scripts
- **First touchdown scorer:** Running backs in short-yardage packages
- **Defensive stats:** Sack props against weak offensive lines

### Team Totals

Team totals isolate offensive and defensive matchups better than full-game totals. When a high-scoring offence faces a porous defence, team overs offer cleaner exposure than combined totals that require both teams to cooperate.

### Weather Adjustments

College stadiums in Wisconsin, Minnesota, and Michigan feature November snow and sub-zero temperatures. Totals drop 10-14 points in extreme cold. Unders hit at **61%** when game-time temperature falls below -7°C.`,

  faq: [
    {
      q: 'Which bookmaker offers the best college football odds?',
      a: 'Pinnacle consistently offers the tightest margins on college football spreads. For recreational bettors, DraftKings and FanDuel provide extensive prop markets with competitive pricing. Betfair Exchange is unavailable for US college sports due to state gambling restrictions.',
    },
    {
      q: 'Should I bet against teams coming off a bye week?',
      a: 'Yes. Data from 450+ bye-week games shows 75% of Power 5 coaches perform worse after the break. The 2024-25 CFP amplified this: 7 of 8 teams with first-round byes lost their quarterfinals. Fade bye-week teams against quality opponents.',
    },
    {
      q: 'Why do college football favourites fail to cover so often?',
      a: 'Favourites have covered just 49.7% since 2005—below the 52.4% break-even rate. Public money inflates favourite lines beyond fair value. The trend worsened to 49% in 2024. Selective underdog betting, particularly road dogs at +7 to +14, produces positive expected value.',
    },
    {
      q: 'How much does home field advantage matter in college football?',
      a: 'Home teams win 64% of games straight-up—higher than any professional American sport. The effect is consistent across multi-year samples. Markets price home advantage at 3 points, but true value is 7-10 points when factoring in stadium environment, altitude, and travel distance.',
    },
    {
      q: 'Does the transfer portal affect betting lines?',
      a: 'Significantly. Teams that dominate portal recruiting show immediate ATS improvement. Texas Tech went 11-1 ATS (85.7%) after aggressive portal spending in 2024-25. Monitor portal activity in December-January and target early-season value before lines adjust.',
    },
    {
      q: 'When is the best time to bet on college football?',
      a: 'Opening lines (Sunday-Monday for Saturday games) move sharply as sharp money enters. For totals, wait until weather forecasts firm up mid-week. For player props, bet early before injury news and lineup information reaches the market.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'NCAA Official Statistics',
      'College Football Playoff Records',
      'BetMGM Sports Historical Analysis',
      'TeamRankings / Phil Steele Compilation',
      'Journal of Functional Morphology and Kinesiology',
      '247Sports Transfer Portal Database',
    ],
  },
};