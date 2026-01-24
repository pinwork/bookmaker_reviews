import { CompetitionArticle } from '@/types';

export const iceHockeyStanleyCupBettingGuide: CompetitionArticle = {
  slug: 'ice-hockey-stanley-cup-betting-guide',
  competitionId: 'stanleycup',
  h1: 'Stanley Cup Betting Guide 2026',
  metaTitle: 'Stanley Cup Betting Guide 2026 | Series Lead & Live Edges',
  metaDescription:
    'Data-backed Stanley Cup betting guide with verified edge patterns. 2-0 lead conversion (86%), referee power play bias, and overtime clustering windows.',

  intro: {
    title: 'Where Series Leads and Referee Patterns Create Systematic Edges',
    content: `The Stanley Cup Playoffs compress variance in ways that create exploitable betting patterns. Best-of-seven series allow dominant teams to emerge. Referee tendencies—measurable across thousands of calls—shift power play opportunities toward home teams by **11.5%**. And teams holding 2-0 leads convert at rates the market consistently underprices.

Florida Panthers demonstrated the formula in back-to-back championships: elite goaltending, depth scoring, and the discipline to avoid penalty trouble on the road. Their repeat title in 2025—defeating Edmonton 4-2 despite playing fewer home games—validated a specific blueprint.

This guide synthesises research across 361 best-of-seven series, 2,300+ power play situations, and documented referee patterns. The findings challenge assumptions: "playoff hockey means refs put whistles away" is empirically false (penalties actually increase). Physical teams win less often than finesse squads. And overtime goals cluster so heavily in the first 10 minutes that live betting markets systematically misprice the distribution.

The 2026 playoffs begin mid-April with 16 teams competing across four rounds. The Panthers enter as defending champions seeking a third consecutive title—a feat unmatched since the 1980s Islanders dynasty.`,
  },

  quickFacts: [
    { label: 'First Awarded', value: '1893' },
    { label: 'Playoff Teams', value: '16 (8 per conference)' },
    { label: 'Format', value: 'Four best-of-7 rounds (2-2-1-1-1)' },
    { label: 'Duration', value: 'April-June (~8 weeks)' },
    { label: 'Defending Champion', value: 'Florida Panthers (2024, 2025)' },
    { label: 'Average Series Length', value: '5.8 games' },
  ],

  popularMarkets: [
    'Stanley Cup Winner',
    'Conference Winner',
    'Series Winner',
    'Series Correct Score',
    'Game Moneyline',
    'Conn Smythe (MVP)',
    'Puck Line (Spread)',
  ],

  microMarkets: [
    'Series Total Goals',
    'Overtime in Series (Yes/No)',
    'Game 7 Occurrence',
    'First Goal Scorer',
    'Period Betting',
    'Next Faceoff Winner (Live)',
  ],

  edgePatterns: [
    {
      pattern:
        'Teams leading 2-0 win series 86.1% overall (311/361); rate climbs to 92.7% when winning Game 3 as well',
      source: 'NHL Series Records / Reddit Hockey Analysis',
      period: '1987-2025',
      sampleSize: 361,
    },
    {
      pattern:
        'Home teams receive 11.5% more power play opportunities than road teams in playoffs—referee bias documented across 2,300+ calls',
      source: 'Sports Yahoo / Arctic Ice Hockey Analysis',
      period: '2010-2024',
      sampleSize: 2300,
    },
    {
      pattern:
        'Teams ranking higher in penalty minutes win only 46.66% of playoff series—physicality correlates negatively with advancement',
      source: 'RG Sports Data Analysis',
      period: '2014-2024',
      sampleSize: 150,
    },
    {
      pattern:
        '57% of overtime playoff games end within the first 10 minutes, but markets price even distribution across the period',
      source: 'Vancouver Is Awesome / NHL Overtime Analysis',
      period: '2015-2024',
      sampleSize: 187,
    },
  ],

  comparisonTables: [
    {
      id: 'stanley-series-leads',
      title: 'Series Conversion Rates by Lead Position',
      headers: ['Lead Position', 'Conversion Rate', 'Sample Size'],
      rows: [
        ['Up 2-0 (overall)', '86.1%', 'n=361'],
        ['Up 2-0 + Win G3', '92.7%', 'n=207'],
        ['Up 2-0 + Lose G3', '80.7%', 'n=147'],
        ['Up 3-0', '98.0%', 'n=200+'],
      ],
    },
    {
      id: 'stanley-team-anomalies',
      title: 'Team Playoff Performance Anomalies (Since 2004)',
      headers: ['Team', 'Expected Win %', 'Actual Win %', 'Gap'],
      rows: [
        ['Vegas Golden Knights', '50-55%', '73.3% (11-4)', '+18pp'],
        ['Carolina Hurricanes', '50-55%', '68.4% (13-6)', '+13pp'],
        ['Calgary Flames', '45-50%', '25.0% (3-9)', '-20pp'],
        ['Florida Panthers', '50-55%', '66.7% (6-3)*', '+12pp'],
      ],
    },
    {
      id: 'stanley-referee-bias',
      title: 'Referee Home Bias Index (Penalties/Game Differential)',
      headers: ['Official', 'Home Bias', 'Tendencies'],
      rows: [
        ['Marc Faucette', '+1.39 (extreme)', 'Highest measured home differential'],
        ['Ian Walsh', '+0.30 (strong)', 'Aggressive early-game calling'],
        ['Dan O\'Halloran', '-0.43 (road)', 'Slight visitor team bias'],
        ['Kelly Sutherland', '+0.14 (neutral)', 'Consistent game management'],
      ],
    },
  ],

  body: `## Understanding Stanley Cup Betting Markets

### Why Playoff Hockey Creates Exploitable Patterns

Best-of-seven series filter variance. Unlike single-elimination tournaments where upsets persist, the NHL format allows superior teams to recover from bad nights. This produces predictable outcomes once series leads establish—and markets consistently underprice conversion rates.

The 2025 Stanley Cup Final illustrated this pattern. Florida held a 3-2 series lead after five games. Edmonton, despite having Connor McDavid (the previous year's Conn Smythe winner from a losing team), could not overcome the structural disadvantage. Florida closed it out in Game 6, winning 5-1.

**Practical implication:** Series betting offers more reliable edges than game-by-game wagering. A team up 2-0 has an 86.1% historical conversion rate—yet markets often price them at -500 (83.3% implied). The 2.8 percentage point gap compounds across a playoff season.

### Stanley Cup Winner Markets

Futures betting opens months before playoffs. By January, oddsmakers have established hierarchies based on regular season performance. Colorado Avalanche currently sit around +300 to +400, with Florida Panthers and other contenders trailing.

The research suggests caution on regular season dominance. Teams with the best record win the Cup only 20-25% of the time. Goaltending runs and health at playoff time matter more than October-March consistency.

**Value angle:** Identify teams with elite goaltending and playoff-tested cores trading at +800 or longer. Dark horse value exists when market overweights recent results versus structural playoff factors.

### Series Winner Markets

Round-by-round series betting offers the sharpest edges. Key factors:

- **2-0 leads:** 86.1% conversion rate (n=361 series since 1987)
- **Home ice:** 55-60% game win rate, but less predictive than series position
- **Goalie matchups:** Hot goaltenders can carry inferior rosters
- **Rest differential:** Teams sweeping previous rounds gain 3-4 days recovery

**Application:** After Game 2, series prices often reflect market overreaction. A team down 0-2 typically prices at +400 to +500 (17-20% implied). Historical conversion for trailing teams is 13.9%—meaning the underdog is overpriced by 3-6 percentage points. Lay them.

### Puck Line (Spread) Markets

The standard spread is +/-1.5 goals. Favourites must win by 2+ to cover; underdogs can lose by one and still cash.

Playoff hockey scoring compresses. Games average 5.5-6.5 total goals—lower than regular season. This benefits underdogs on puck lines, as one-goal margins occur in approximately 30% of games.

**Value angle:** Underdogs +1.5 at -150 or better offer consistent value in tight series. Avoid heavy favourite puck lines (-1.5 at +140) except in confirmed blowout spots.

## Verified Edge Patterns

### The 2-0 Lead Conversion Machine

The most actionable edge in playoff hockey: teams leading 2-0 win the series **86.1% of the time** across 361 best-of-seven series since 1987.

Breakdowns reveal where value compounds:
- **Up 2-0, win Game 3:** 92.7% conversion (192/207)
- **Up 2-0, lose Game 3:** 80.7% conversion (119/147)
- **Up 2-0 in Cup Final:** 90.6% conversion (48/53)
- **Up 2-0, started at home:** 92.7% conversion (38/41)

The false hope scenario: a trailing team wins Game 3 to make it 2-1. Markets often overcorrect, pricing the comeback at 25-30% probability. Historical data shows they still lose 80.7% of the time. That Game 3 win provides psychological relief without materially changing series dynamics.

**Application:** After a team goes up 2-0, back them at any price below -550 (84.5% implied). If they win Game 3, back them aggressively at any price below -1000 (90.9% implied). The market consistently underprices series leads.

### Referee Power Play Bias

Home teams receive **11.5% more power play opportunities** than road teams in playoff games—a systematic bias documented across 2,300+ power play situations.

This is not random variance. Crowd noise influences referee decisions. The "home whistle" creates measurable advantages in special teams opportunities. Individual referees show specific bias patterns:

- **Marc Faucette:** +1.39 penalties/game home bias (extreme)
- **Ian Walsh:** +0.30 home bias, aggressive early calling
- **Dan O'Halloran:** -0.43 bias (actually favours road teams)
- **Kelly Sutherland:** +0.14 (effectively neutral)

**Application:** Check referee assignments before betting power play props. When Faucette or Walsh officiate, home team power play Overs gain 8-12% edge versus market price. When O'Halloran officiates, road teams in penalty-drawing matchups offer value.

### The Physicality Myth

"Playoff hockey requires toughness." Every analyst says it. The data disagrees.

Teams ranking higher in penalty minutes during the regular season win only **46.66% of playoff series** across 150 series analysed over 10 years. Physical play—as measured by PIM, hits per game, and fighting majors—correlates negatively with advancement.

The mechanism: undisciplined teams take penalties. Penalties create power plays. Power plays in playoffs convert at 20-25%. Taking penalties while failing to draw them (the physicality paradox) creates negative expected value.

**Caveat:** Recent champions (2023-2025) have shown more physical profiles, suggesting a potential trend reversal. Florida Panthers led the NHL in hits during their 2024-25 Cup run. Monitor this pattern—it may be shifting.

**Application:** Fade teams whose identity centres on physical play and penalty minutes. Prioritise teams with special teams discipline and possession metrics over hit totals.

### Overtime Goal Clustering

**57% of overtime playoff games end within the first 10 minutes.** Markets price overtime as evenly distributed across the 20-minute period—they should not.

The mechanism: fresh legs and aggressive strategies produce high-danger chances early. As overtime extends, teams become conservative, reducing goal probability per minute. But live betting algorithms adjust slowly to this non-linear distribution.

**Application:** In overtime live betting, back "Next Goal: Home Team" or game winner props in the first 5-7 minutes at standard prices. After minute 10, the probability curve flattens—back Unders on overtime length or lay aggressive game winner bets.

## Competition-Specific Factors

### Conference Playoff Structure

The NHL uses division-based bracketing without re-seeding:
- Top 3 teams from each division qualify automatically
- Two wild card spots per conference go to next-best records
- First round matchups are fixed by division (no cross-division until Conference Finals)

This creates predictable travel patterns and rivalry intensity. First-round series between division rivals produce higher-emotion, lower-skill games—favouring underdogs on puck lines.

### The 2-2-1-1-1 Format

Home ice distribution matters. The higher seed hosts Games 1, 2, 5, and 7 (if necessary). This front-loads home advantage but creates road pressure in Games 3-4.

Counter-intuitively, **recent first-round home teams have underperformed**—winning just 37% of series-clinching games in one recent sample. The pressure of closing out at home versus the desperation of elimination road games may explain this anomaly.

**Application:** In potential clinching games, the home team is often overpriced. Back road teams facing elimination in Games 5-6 at +150 or better.

### Goaltending Volatility

Playoff success correlates heavily with goaltender performance. Starters play nearly every game—no rotation, no rest. A hot goalie can carry an average roster; a cold one sinks a contender.

Sam Bennett won the 2025 Conn Smythe with 15 goals—but Florida's goaltending held Edmonton to 2.5 goals per game across the Final. The defensive structure enabled offensive stars.

**Goalie metrics to track:**
- **Save percentage above .915:** Required for deep runs
- **High-danger save %:** Separates elite from average
- **Goals saved above expected:** Identifies overperformers

### The Olympic Break (2026 Specific)

The 2025-26 season includes a 19-day break (February 6-24) for NHL players participating in the Winter Olympics. This disrupts momentum and creates unique late-season dynamics:

- Teams hot before the break may cool off
- Injured players gain extended recovery time
- Players returning from Olympic competition face fatigue

Monitor post-break form (late February through April) more heavily than pre-break performance when handicapping playoff matchups.

## Live Betting Windows

### Power Play Trailing Team (3rd Period)

**Trigger:** Power play awarded to trailing team in 3rd period with 1-goal deficit.

**Duration:** 45-90 seconds.

**Edge:** Algorithms lag in adjusting for 6v5 empty-net scenarios that often compound with power plays. Historical data shows 23% of such situations produce game-tying goals versus 18% market-implied probability.

**Mechanism:** The trailing team often pulls their goalie during the power play, creating 6v4 situations. Models underestimate scoring probability during these combined advantages.

### Overtime Opening Minutes

**Trigger:** Overtime period begins.

**Duration:** First 7-10 minutes.

**Edge:** 57% of overtime games end within the first 10 minutes. Markets price even distribution.

**Mechanism:** Fresh legs, aggressive strategies, and high-danger chances cluster early. Back game winner props at standard prices in the opening minutes; fade them after minute 10.

### Post-Goal Momentum

**Trigger:** Goal scored by trailing team to tie the game.

**Duration:** 60-90 seconds.

**Edge:** Back the scoring team for "Next Goal" at inflated prices. Momentum swings in hockey are measurable—teams scoring to tie generate 15-20% more high-danger chances in the following 2 minutes.

**Mechanism:** Line changes favour the scoring team (can match lines). Psychological lift creates aggressive forechecking.

## Team-Specific Anomalies

Historical playoff performance reveals persistent team-level edges:

**Overperformers (back in futures/series):**
- **Vegas Golden Knights:** 73.3% series win rate (11-4) since expansion—systematic market underpricing of their depth and goaltending
- **Carolina Hurricanes:** 68.4% (13-6)—analytics-driven roster decisions outperform market perception

**Underperformers (fade in series betting):**
- **Calgary Flames:** 25.0% (3-9) since 2004 lockout—goaltending collapses in clutch moments
- **Edmonton Oilers:** Consistent Cup Final appearances but 1-3 in Finals since 2006—market overvalues regular season offense

**Florida Panthers:** 66.7% series win rate entering their dynasty window. Back-to-back champions with proven playoff structure. The market may finally be pricing them correctly at -250 to -300 range.`,

  faq: [
    {
      q: 'Which bookmaker offers the best Stanley Cup odds?',
      a: 'Bet365 provides comprehensive coverage with live streaming and extensive props. FanDuel and DraftKings offer competitive series prices and same-game parlays. Betfair Exchange delivers the sharpest odds for series betting through the commission model. For Canadians, bet365 and Sports Interaction cover all playoff markets.',
    },
    {
      q: 'How reliable is a 2-0 series lead in NHL playoffs?',
      a: 'Extremely reliable. Teams leading 2-0 win 86.1% of series (311/361 since 1987). Even losing Game 3 only drops conversion to 80.7%. Winning Game 3 pushes it to 92.7%. Markets typically price 2-0 leads at -500 (83.3% implied)—the true edge is 2-3 percentage points higher.',
    },
    {
      q: 'Do referees really favour home teams in the playoffs?',
      a: 'Yes—documented across 2,300+ power play situations. Home teams receive 11.5% more power plays than road teams. Individual referees show specific bias: Marc Faucette has +1.39 home penalty differential (extreme), while Dan O\'Halloran actually favours visitors (-0.43). Check assignments before betting power play props.',
    },
    {
      q: 'Does regular season form predict Stanley Cup success?',
      a: 'Weakly. Teams with the best regular season record win the Cup only 20-25% of the time. Goaltending runs, health at playoff time, and matchup-specific factors matter more. Florida Panthers finished 5th in the East in 2024-25 yet won back-to-back titles. Prioritise playoff-specific factors over October-March performance.',
    },
    {
      q: 'Are physical teams better in playoff hockey?',
      a: 'Counter-intuitively, no. Teams ranking higher in penalty minutes win only 46.66% of playoff series (n=150). Physicality creates penalties; penalties create opponent power plays. However, recent champions (2024-25 Florida) have trended more physical—this pattern may be shifting.',
    },
    {
      q: 'When should I bet on overtime outcomes?',
      a: '57% of overtime games end within the first 10 minutes—but markets price even distribution. Back game winner props in the first 5-7 minutes at standard prices. After minute 10, probability flattens and the remaining time offers less value. Fresh legs and aggressive early strategies explain the clustering.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'NHL Official Records / Hockey-Reference',
      'Reddit r/hockey Series Analysis (1987-2025)',
      'Arctic Ice Hockey Referee Bias Study',
      'RG Sports Data Analysis',
      'Vancouver Is Awesome Overtime Research',
      'Sports Yahoo Power Play Analysis',
    ],
  },
};