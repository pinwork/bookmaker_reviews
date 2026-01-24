import { CompetitionArticle } from '@/types';

export const rugbyWorldCupBettingGuide: CompetitionArticle = {
  slug: 'rugby-world-cup-betting-guide',
  competitionId: 'rwc',
  h1: 'Rugby World Cup Betting Guide 2027',
  metaTitle: 'Rugby World Cup 2027 Betting Guide | Data-Backed Strategies',
  metaDescription:
    'Rugby World Cup 2027 betting guide with verified edge patterns from 10 tournaments. Pool pathway analysis, knockout statistics, and host nation advantage data.',

  intro: {
    title: 'The First 24-Team World Cup Changes Everything',
    content: `The 2027 Rugby World Cup introduces a structural overhaul that creates betting edges unavailable in previous tournaments. Australia hosts **24 teams across six pools of four**—a format featuring a Round of 16 knockout stage for the first time in World Cup history.

That expansion changes the mathematics. Pool winners from A, B, C, and D face third-place qualifiers in the Round of 16. Pool E and F winners face runners-up instead—creating measurable pathway advantages that bookmakers have not fully priced into outright markets.

South Africa enters as two-time defending champions, seeking an unprecedented third consecutive title. The Springboks hold a perfect 4-0 record in World Cup finals, yet face New Zealand in a potential quarter-final if both top their pools. Australia and New Zealand meet in Pool A—the first time these trans-Tasman rivals have been drawn together in World Cup pool play.

This guide synthesises data from all 10 tournaments since 1987, current pool compositions, and structural advantages created by the new format.`,
  },

  quickFacts: [
    { label: 'Edition', value: '11th (First with 24 teams)' },
    { label: 'Format', value: '6 pools of 4 + Round of 16' },
    { label: 'Duration', value: '43 days (1 Oct - 13 Nov 2027)' },
    { label: 'Total Matches', value: '52' },
    { label: 'Host', value: 'Australia (7 cities)' },
    { label: 'Defending Champions', value: 'South Africa (4 titles)' },
  ],

  popularMarkets: [
    'Tournament Winner',
    'To Reach Final',
    'Pool Winner',
    'Match Handicap',
    'Top Try Scorer',
    'Top Points Scorer',
    'Winning Margin',
  ],

  microMarkets: [
    'First Try Scorer',
    'Total Match Tries',
    'Team to Score 4+ Tries',
    'Half-Time Result',
    'Yellow/Red Cards',
    'Correct Score',
  ],

  edgePatterns: [
    {
      pattern:
        'Southern Hemisphere nations win 80% of World Cups (8 of 10) with England the only Northern Hemisphere champion',
      source: 'World Rugby Tournament Records',
      period: '1987-2023',
      sampleSize: 10,
    },
    {
      pattern:
        'Pool favourites progress to knockout rounds at 92% rate across all tournaments',
      source: 'Pool Stage Historical Analysis',
      period: '1987-2023',
      sampleSize: 160,
    },
    {
      pattern:
        'Host nations reached 5 of 8 World Cup finals (62.5%) and won 3 (37.5%) - only England 2015 saw sole hosts exit in pool stage',
      source: 'Tournament Host Analysis',
      period: '1991-2023',
      sampleSize: 8,
    },
    {
      pattern:
        'Home teams in domestic rugby win 69% of matches with 25.7% higher try-scoring efficiency than away teams',
      source: 'Northumbria Journal Sports Research',
      period: '2022-2023',
      sampleSize: 119,
    },
  ],

  comparisonTables: [
    {
      id: 'rwc-2027-pools',
      title: 'Rugby World Cup 2027 Pool Composition',
      headers: ['Pool', 'Band 1', 'Band 2', 'Band 3-4'],
      rows: [
        ['A', 'New Zealand', 'Australia', 'Chile, Hong Kong'],
        ['B', 'South Africa', 'Italy', 'Georgia, Romania'],
        ['C', 'Argentina', 'Fiji', 'Spain, Canada'],
        ['D', 'Ireland', 'Scotland', 'Uruguay, Portugal'],
        ['E', 'France', 'Japan', 'USA, Samoa'],
        ['F', 'England', 'Wales', 'Tonga, Zimbabwe'],
      ],
    },
    {
      id: 'rwc-winners-history',
      title: 'World Cup Winners by Hemisphere',
      headers: ['Nation', 'Titles', 'Finals', 'Last Win'],
      rows: [
        ['South Africa', '4', '4', '2023'],
        ['New Zealand', '3', '4', '2015'],
        ['Australia', '2', '4', '1999'],
        ['England', '1', '4', '2003'],
      ],
    },
    {
      id: 'rwc-host-performance',
      title: 'Host Nation Performance History',
      headers: ['Host', 'Year', 'Result', 'Notes'],
      rows: [
        ['New Zealand', '2011', 'Champion', 'Won 8-7 vs France'],
        ['South Africa', '1995', 'Champion', 'Won 15-12 vs NZ (AET)'],
        ['Australia', '2003', 'Runner-up', 'Lost 20-17 to England'],
        ['England', '2015', 'Pool exit', 'First sole host eliminated'],
      ],
    },
  ],

  body: `## Understanding Rugby World Cup Betting Markets

### Tournament Winner (Outright)

The flagship market attracts the highest volume but carries distinct characteristics in rugby compared to football. Only **four nations have ever lifted the Webb Ellis Cup**—South Africa (4), New Zealand (3), Australia (2), and England (1). That concentration of success makes historical form a stronger predictor than in more volatile tournaments.

**When to bet:** Early markets (6-12 months out) offer value before draw implications become clear. Post-draw betting lets you see knockout paths but odds compress significantly.

**When to avoid:** Backing teams outside the traditional four at short prices. No Tier 2 nation has reached a final since the format expanded in 1999.

### Pool Winner Markets

Pool betting carries lower variance than outrights. Top seeds progress to knockouts at a **92% rate** across all tournaments—one of the most reliable patterns in major sport. The 2027 format creates pathway advantages worth quantifying:

- **Pool A/B winners:** Face third-place qualifiers in Round of 16
- **Pool E/F winners:** Face runners-up (theoretically harder path)
- **Pool D winner (Ireland/Scotland):** Avoids South Africa until potential final

South Africa (Pool B: Italy, Georgia, Romania) and England (Pool F: Wales, Tonga, Zimbabwe) received the softest draws. France (Pool E: Japan, USA, Samoa) faces the most competitive second-tier opposition.

### Match Handicap

Point spreads balance mismatched fixtures. Rugby handicaps move in 3-point increments reflecting try (5 points + conversion) and penalty (3 points) scoring. Common lines:

- **-7.5 to -10.5:** Competitive Tier 1 matchups
- **-14.5 to -21.5:** Strong favourite vs mid-tier opponent
- **-28.5+:** Pool mismatches (Tier 1 vs Tier 3/4)

The 2027 format reduces pool mismatches. With four teams per pool instead of five, fewer dead rubber matches exist where favourites rest key players.

## Why 2027 Creates New Betting Dynamics

### The Round of 16 Factor

Previous formats sent eight teams straight to quarter-finals. The 2027 structure adds an elimination round that changes value calculations:

- **16 teams qualify:** Top 2 from each pool plus 4 best third-place finishers
- **Pool winners A-D:** Face third-place qualifiers (softer path)
- **Pool winners E-F:** Face runners-up from other pools

This asymmetry means Pool E and F winners face marginally harder Round of 16 opponents. If backing England to win the tournament, factor in that they must beat a pool runner-up (likely Italy or Georgia based on Pool B composition) rather than a third-place qualifier.

### Australia vs New Zealand: The Pool A Showdown

These trans-Tasman rivals meet in a World Cup pool for the first time. The winner likely tops Pool A; the loser still advances but faces a harder knockout path.

Home advantage data from English Premiership research shows **69% home win rates** with 25.7% higher try-scoring efficiency for the home team. Australia carries that edge throughout the pool stage. New Zealand must overcome travel, timezone adjustment, and hostile crowds in Perth, Sydney, Brisbane, and Melbourne.

Rassie Erasmus (South Africa head coach) publicly warned that people underestimate the power of a home nation and noted New Zealand will have a tough time. This professional assessment suggests bookmakers may be underpricing Australian chances.

### Pool Pathway Analysis

**Softest path to semi-finals:**

England wins Pool F, beats Pool B runner-up (Italy/Georgia) in Round of 16, faces Pool A/E runner-up in quarter-finals. They could reach the semi-finals facing no pool winners.

**Hardest path:**

France wins Pool E, beats Pool D runner-up (Scotland) in Round of 16, then faces South Africa or New Zealand in quarter-finals. One of the tournament favourites exits before the semis regardless.

## Timing Patterns and Line Movement

### Pre-Tournament Sharp Money (Now - September 2027)

Outright odds opened with South Africa at 3.25-3.80 and New Zealand at 3.50-5.00. Sharp money moves these lines during:

- **December 2025:** Post-draw adjustment period
- **June-July 2027:** Summer internationals reveal squad depth
- **September 2027:** Pre-tournament warm-ups finalise starting XVs

Pool winner markets offer the most stable value. South Africa at 1.01 to win Pool B reflects near-certainty; backing them at those odds wastes capital. The value exists in secondary markets—Pool B highest try scorer, Georgia +28.5 handicap against South Africa.

### Dead Rubber Identification

The 2027 format reduces but does not eliminate dead rubbers. Final pool matches where both teams have already qualified see rotation and reduced intensity.

**Betting implication:** When both teams have secured qualification, Under totals carry value. Coaches manage player workloads; intensity drops. Avoid heavy favourite handicaps in these situations.

### Knockout Compression

Once the Round of 16 begins, only seven matches determine the champion. Odds compress rapidly; spreads tighten. The value window shrinks because casual betting volume increases and bookmaker exposure grows.

## Micro-Markets Strategy

### First Try Scorer

High-margin market with limited research coverage. Rugby try scorers concentrate among wingers, fullbacks, and dynamic centres. Historical data shows:

- **Wingers:** Score 45-50% of tries in international rugby
- **Centres:** 20-25% of tries
- **Back row forwards:** 15-20% of tries

Targeting a specific teams winger at 8/1-12/1 offers better value than backing a star fly-half at 5/1. Positioning matters more than name recognition.

### Team to Score 4+ Tries (Bonus Point)

The bonus point system rewards attacking rugby. Teams scoring four or more tries earn an additional competition point regardless of match result. In pool play where point differential breaks ties, favourites push for bonus points even with comfortable leads.

**Targeting:** Back 4+ tries for Tier 1 teams against Tier 3/4 opponents. South Africa scored 4+ in 75% of pool matches across 2019 and 2023 tournaments.

### Cards Markets

Rugby cards depend heavily on referee assignment and match intensity. Key patterns:

- **Pool mismatches:** Fewer cards (dominant team controls possession, fewer breakdown battles)
- **Tier 1 vs Tier 1:** More cards (intense forward battles, tactical fouling)
- **Knockout matches:** Yellow card rates increase 15-20% versus pool stage

Track referee assignments announced 48-72 hours before kickoff. Some referees average 2-3 yellows per match; others average 4-5.

## Live Betting Windows

### Red Card Ejection (90-180 seconds)

Post-red card, bookmaker algorithms take 60-90 seconds to recalibrate win probability. During this window, trailing team odds improve 8-15% before stabilising. Back the team retaining full numbers immediately after the red card decision.

### First Try Scored (30-120 seconds)

Markets overweight first-try significance. A try in the opening 10 minutes does not predict match outcome as strongly as bookmakers price. If the underdog scores first, their match winner odds compress too aggressively—value exists on the favourite.

### Halftime Adjustment

Trailing teams at halftime receive overlong odds in rugby compared to football. Rugby lacks the comeback mechanisms (power plays, quick restart goals) that other sports feature. A team down 14+ points at halftime wins fewer than 10% of knockout matches.

**Betting implication:** Do not back comeback plays in knockout rugby. The trailing favourite is a value trap.

## Historical Context Worth Knowing

### The 1995-2023 Pattern

Every World Cup from 1995-2023 was won by a team that lost at least one match during the tournament:

- **South Africa 2023:** Lost to Ireland (pool stage)
- **South Africa 2019:** Lost to New Zealand (pool stage)
- **New Zealand 2015:** No losses (exception)
- **New Zealand 2011:** Lost to France (pool stage)

Backing a tournament favourite after they lose a pool match offers value. The market overcorrects; prices drift too far.

### Finals Are Tight

World Cup finals consistently produce lower-scoring, narrower margins than earlier rounds:

- **2023:** 12-11 (1 point)
- **2019:** 32-12 (20 points)
- **2015:** 34-17 (17 points)
- **2011:** 8-7 (1 point)

The 2011 and 2023 finals—both one-point margins—demonstrate that championship rugby comes down to single kicks under pressure. Under totals and narrow margin bets carry historical backing in final betting.`,

  faq: [
    {
      q: 'Which bookmaker offers the best Rugby World Cup odds?',
      a: 'Betfair Exchange provides the best odds through its commission model (0% margin on exchange). For traditional betting, Bet365 offers comprehensive World Cup coverage including in-play markets and live streaming. Paddy Power runs enhanced odds promotions for home nations. Pinnacle consistently prices tournament outrights more efficiently than recreational bookmakers.',
    },
    {
      q: 'Why do Southern Hemisphere teams dominate the World Cup?',
      a: 'Southern Hemisphere nations have won 8 of 10 World Cups (80%). The edge comes from Super Rugby player development, the Rugby Championship creating knockout-intensity matches year-round, and coaching systems that prioritise tournament peaking. England (2003) remains the only Northern Hemisphere winner. This pattern persists despite Six Nations nations improving significantly since 2015.',
    },
    {
      q: 'How does the 24-team format change betting strategy?',
      a: 'The Round of 16 creates pathway asymmetries. Pool A-D winners face third-place qualifiers; Pool E-F winners face runners-up. England (Pool F) could reach semi-finals without facing a pool winner. France (Pool E) likely faces South Africa or New Zealand in quarter-finals. Adjust outright probabilities based on knockout path difficulty—the market has not fully priced this structural edge.',
    },
    {
      q: 'What happens to my bet if a match is abandoned?',
      a: 'Rules vary by bookmaker. Most void bets if fewer than 55-60 minutes are played. If the match reaches the minimum threshold, the score at abandonment typically stands. Weather abandonment in Australian spring is rare—only Docklands Stadium (Melbourne) has a retractable roof. Check specific terms before betting on outdoor venue matches.',
    },
    {
      q: 'Is backing Australia as hosts a good bet?',
      a: 'Host nations reached 5 of 8 World Cup finals (62.5%) and won 3 (37.5%). Research shows home teams gain 25.7% try-scoring efficiency advantage. Australia at 8-10/1 offers value given pool composition (must beat NZ to top Pool A) and knockout path (likely faces Pool E/D runner-up in Round of 16). The counter-argument: Australia crashed out in pool stage in 2023 and lacks recent tournament form.',
    },
    {
      q: 'When is the best time to bet on Rugby World Cup outrights?',
      a: 'Two optimal windows exist. First: immediately post-draw (December 2025) before pathway advantages get priced in. Second: after pool stage concludes when knockout paths are locked but before quarter-final markets compress. Avoid betting during the tournament opening week—casual money inflates favourite odds without improving value.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-23',
    sources: [
      'World Rugby Official Records',
      'Rugby World Cup Tournament Statistics (1987-2023)',
      'Northumbria Journal of Sports Research',
      'World Rugby Rankings Database',
    ],
  },
};