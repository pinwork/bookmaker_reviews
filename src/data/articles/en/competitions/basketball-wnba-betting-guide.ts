import { CompetitionArticle } from '@/types';

export const wnbaBettingGuide: CompetitionArticle = {
  slug: 'basketball-wnba-betting-guide',
  competitionId: 'wnba',
  h1: 'WNBA Betting Guide 2026',
  metaTitle: 'WNBA Betting Guide 2026 | Data-Backed Edges & Prop Markets',
  metaDescription:
    'WNBA betting guide with verified edge patterns from 6 seasons of data. Underdog ATS rates, back-to-back unders, and soft prop markets explained.',

  intro: {
    title: 'The Fastest-Growing Betting Market in American Sports',
    content: `The WNBA processes significantly less betting volume than the NBA—roughly 15-20% at equivalent sportsbooks. That gap creates structural inefficiencies impossible to find in mature markets. Lines remain softer, adjustment periods stretch longer after injury news, and player prop pricing sits **2-4% looser** than NBA equivalents.

The 2026 season expands to 15 teams with the arrival of the Toronto Tempo and Portland Fire, adding 88 new regular season matchups. Underdogs covered the spread at 52.4% in 2025—a systematic edge that persists because sharp model participation remains light. Professional bettors describe WNBA props as "all over the place" and "pretty easy to beat right now."

This guide synthesises six seasons of betting settlement data, verified edge patterns with sample sizes, and micro-market analysis. The findings reveal actionable value in home dog spreads, back-to-back game totals, and line movement patterns that casual bettors consistently misread.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1996' },
    { label: 'Teams', value: '15 (2026)' },
    { label: 'Regular Season Games', value: '44 per team' },
    { label: 'Season', value: 'May 8 - September 24' },
    { label: 'Avg. Game Total', value: '163 points' },
    { label: 'Home Win Rate', value: '56.3%' },
  ],

  popularMarkets: [
    'Point Spread (ATS)',
    'Moneyline',
    'Total Points Over/Under',
    'First Half Spread',
    'Quarter Lines',
    'Championship Winner',
  ],

  microMarkets: [
    'Player Points Over/Under',
    'Player Rebounds',
    'Player Fouls',
    'First Basket Scorer',
    'Team Total Points',
    'Bench Scoring Props',
  ],

  edgePatterns: [
    {
      pattern:
        'Underdogs cover the spread at 52.4% rate (161-146-4 ATS) vs 50% baseline expectation',
      source: 'WNBA Betting Settlement Records',
      period: '2025 season',
      sampleSize: 307,
    },
    {
      pattern:
        'Home underdogs +4.5 to +7.5 vs top-4 seeds cover at 54.0% ATS (67-57-1 record)',
      source: 'WNBA Historical Analysis',
      period: '2024-2025',
      sampleSize: 125,
    },
    {
      pattern:
        'Second game of back-to-back series finishes 7 points below consensus totals with 62% under hit rate',
      source: 'WNBA Situational Betting Data',
      period: '2021',
      sampleSize: 25,
    },
    {
      pattern:
        'When totals drop 1-2 points while public betting overs exceeds 58%, resulting overs win at 51.4% with 10.2% ROI',
      source: 'Line Movement Analysis',
      period: '2006-2024',
      sampleSize: 170,
    },
  ],

  comparisonTables: [
    {
      id: 'wnba-season-stats',
      title: 'WNBA Market Hit Rates (2023-2025)',
      headers: ['Season', 'Fav Cover %', 'Under %', 'Home Win %'],
      rows: [
        ['2025', '47.6%', '51.5%', '56.3%'],
        ['2024', '47.2%', '51.4%', '56.3%'],
        ['2023', '48.1%', '50.8%', '55.8%'],
      ],
    },
    {
      id: 'wnba-market-efficiency',
      title: 'Betting Market Hit Rates by Category',
      headers: ['Market', 'Hit Rate', 'Sample Size'],
      rows: [
        ['Spread (Underdogs)', '52.4%', 'n=307'],
        ['Full Game Under', '51.5%', 'n=305'],
        ['Home Dog +4 to +7', '54.0%', 'n=125'],
        ['Overtime Games Over', '87.5%', 'n=8'],
      ],
    },
    {
      id: 'wnba-team-scoring',
      title: '2025 Offensive Leaders',
      headers: ['Team', 'PPG', 'FG%', '3P%'],
      rows: [
        ['Minnesota Lynx', '86.1', '47.2%', '37.8%'],
        ['Los Angeles Sparks', '85.7', '45.7%', '33.7%'],
        ['Indiana Fever', '84.9', '45.6%', '34.6%'],
        ['Las Vegas Aces', '84.4', '44.3%', '33.7%'],
      ],
    },
  ],

  body: `## Understanding WNBA Betting Markets

### Point Spread (ATS)

The spread market carries standard -110 juice on both sides. Spreads typically range from -8.0 to +8.0 depending on quality disparity, with home court worth approximately **3.25 points**—consistent with NBA modelling.

The critical insight: favourites fail to cover at alarming rates. Bookmakers set lines based on public perception, and casual bettors overweight star power. The 2025 season saw favourites cover just 47.6% of spreads while underdogs hit 52.4%. That 2.4% edge exceeds the break-even threshold of 52.38% required to profit at -110 juice.

**When to use:** Home underdogs in the +4.5 to +7.5 range against elite opponents. Public money hammers road favourites, creating systematic overpricing.

**When to avoid:** Road dogs on the second night of back-to-backs. Fatigue drops their ATS rate to 40% versus 51.4% when rested.

### Totals (Over/Under)

Game totals averaged 163.2 combined points in 2025. The under hit at 51.5% overall—insufficient edge for flat betting but valuable in specific situations.

The back-to-back dynamic changes everything. Second games of consecutive-day series finish **7 points below** consensus totals. Fatigue, defensive familiarity, and reduced pace create a 62% under hit rate in these spots. This single pattern has demonstrated 12%+ ROI potential when applied systematically.

**When to use:** Any WNBA game where one or both teams played the previous night. Particularly valuable on Game 2 of consecutive road games.

**When to avoid:** Overtime pushes overs to 87.5% hit rate. Once a game reaches OT, live unders become losing propositions.

### Moneyline

Straight win/loss betting without the spread. Favourites win 66.9% outright, with home favourites at 69.4% and road favourites at 63.2%. The market is efficient here—moneyline betting offers no systematic edge unless you identify specific situational value.

**When to use:** Combined with spread analysis when the spread seems mispriced but the winner is clear.

**When to avoid:** As a default bet. The vig on heavy favourites (-250 or steeper) destroys expected value.

## Competition-Specific Factors

### What Makes WNBA Different for Betting

**Lower Scoring Creates Outsized Impact:** With team averages around 81.6 PPG versus the NBA's 114 PPG, individual player absences shift totals dramatically. A dominant centre sitting out can swing lines 3-5 points compared to 2-3 in the NBA. This creates predictable line movement—track injury news 2-4 hours before tipoff when sportsbooks adjust slowly.

**Bench Depth as Determinant:** WNBA rosters carry fewer players with narrower talent gaps between starters and reserves. Teams with elite bench scoring (35+ PPG off the bench) cover spreads despite poor starting unit performance. The Mystics demonstrated this pattern throughout 2024.

**Fixture Congestion Less Severe:** The 44-game season features **12-14 back-to-backs** per team versus 16-17 in the NBA. Injury recovery timelines become more predictable, and return dates hold more reliably.

### The 15-Team Expansion

Toronto Tempo and Portland Fire join in 2026, creating scheduling asymmetries. Expansion teams historically perform unpredictably in their debut season—the Golden State Valkyries reached the 2025 playoffs despite pre-season projections of a bottom-four finish. Early-season spreads contain wider error margins.

**Betting implication:** Wait 2-3 weeks post-season start before backing or fading expansion teams. Sample size matters.

## Seasonal Timing Patterns

### Opening Weeks (May)

Pre-season form is a poor predictor. New rosters need time to gel, and betting markets struggle to price teams without recent data. Home favourites after close losses covered at 62.9% since 2022—motivation effects are real but fade quickly.

### Commissioner's Cup (June 1-17)

The mid-season tournament overlays on regular season games. Teams mathematically eliminated from Cup contention by Round 2 show worse performance against closing lines. Casual bettors fail to account for reduced motivation.

### FIBA Break (August 30 - September 17)

The 2026 schedule includes an 18-day World Cup break. The condensed finish forces **7-8 games per team** in the final two weeks. Heavy road schedules in this period produce automatic under value on back-to-back games.

### Playoffs (Late September)

The format expanded to best-of-7 finals starting 2025. First-round upsets spiked to **18%** in 2025 versus historical 12-14%. Best-of-3 opening rounds increase variance compared to best-of-5 series deeper in the bracket.

## Micro-Markets Strategy

### Player Props

Professional bettors describe WNBA player props as the softest market in American sports betting. Lines sit 2-4% looser than NBA props because fewer sharp models compete on pricing. Focus on:

- **Fouls:** Players with high foul rates against specific defensive styles. WNBA allows aggressive post defence—knowing which opponents draw the most fouls creates 2-3% edge on foul prop overs.
- **Rebounds:** Dominant post players create predictable board advantages. Track offensive rebounding rates by matchup.
- **Points:** Star dependency means individual scoring varies wildly based on defensive attention. Check recent game logs against similar defensive schemes.

### First Basket Scorer

The market offers +200 to +400 odds with minimal model competition. Track which starters take tip-off responsibilities—Nneka Ogwumike had the highest frequency in 2025 with 11 tip-off wins. Combine with first-shot tendencies and field goal percentage splits.

### Bench Props

The highest-conviction micro-market. Limited sharp competition means lines run **2-4 points soft** on bench player point and rebound totals. Target teams with strong second-unit rotations where individual bench contributors exceed expectations.

## Live Betting Considerations

WNBA live betting volume matched or exceeded pre-game totals in 2023. The fastest-growing market segment offers algorithmic lag opportunities:

- **Injury adjustment:** When star players exit, lines take 2-4 hours to fully adjust. Early bets capture 1-2 points of value.
- **Fourth quarter unders:** Public bettors undervalue late-game defensive execution. Fourth quarter overs hit just 37.4%—strong under bias late in games.
- **Momentum swings:** Close games see dramatic odds movement that often overcorrects. Trailing teams at halftime in games within 5 points offer value when the favourite is priced above -180.`,

  faq: [
    {
      q: 'Which bookmaker offers the best WNBA odds?',
      a: 'DraftKings and FanDuel lead on market depth with 150+ betting options per game. Pinnacle offers the tightest spreads for serious punters. Bet365 provides the widest prop selection including player fouls and bench scoring markets unavailable elsewhere.',
    },
    {
      q: 'Are WNBA underdogs really profitable?',
      a: 'Yes—underdogs covered 52.4% of spreads in 2025 (161-146-4 ATS). This exceeds the 52.38% break-even threshold at -110 juice. Home underdogs in the +4.5 to +7.5 range against top-4 seeds perform even better at 54.0% ATS. The edge persists because sharp model participation remains light.',
    },
    {
      q: 'How do back-to-back games affect WNBA betting?',
      a: 'Dramatically. Second games of back-to-back series finish 7 points below consensus totals with a 62% under hit rate. Road underdogs on Game 2 of back-to-backs cover at just 40% versus 51.4% when rested. Systematically bet unders on any game where both teams played the previous night.',
    },
    {
      q: 'Why are WNBA player props considered soft?',
      a: 'Fewer institutional models compete on WNBA prop lines compared to NBA. Professional bettors describe the market as "all over the place" with 2-4% looser pricing than equivalent NBA props. Foul props, bench scoring, and first basket markets offer the largest inefficiencies.',
    },
    {
      q: 'When is the best time to bet on WNBA games?',
      a: 'Track injury news 2-4 hours before tipoff—WNBA lines adjust slower than NBA (2-4 hours versus 15-30 minutes). For totals, check back-to-back schedules and automatically bet unders on Game 2. Expansion team lines stabilise around week 3 of the season.',
    },
    {
      q: 'How does WNBA scoring compare to NBA for totals betting?',
      a: 'WNBA averages 163 combined points per game versus 225-230 in the NBA. Shorter quarters (10 versus 12 minutes) and approximately 82 possessions per game (versus 100 in NBA) create the gap. Do not apply NBA totals logic directly—the under hits 51.5% overall in WNBA versus closer to 50% in NBA.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'WNBA Official Statistics',
      'WNBA Betting Settlement Records (2021-2025)',
      'VSiN WNBA Betting Systems Analysis',
      'Betstamp Professional Bettor Interviews',
      'Line Movement Analysis Database (2006-2024)',
    ],
  },
};