import { CompetitionArticle } from '@/types';

export const golfTheMastersBettingGuide: CompetitionArticle = {
  slug: 'golf-the-masters-betting-guide',
  competitionId: 'masters',
  h1: 'The Masters Betting Guide 2026',
  metaTitle: 'The Masters Betting Guide 2026 | Data-Backed Edge Patterns',
  metaDescription:
    'Masters betting guide with verified edge patterns from 15 years of data. OWGR filters, approach play metrics, and why debutants never win at Augusta.',

  intro: {
    title: 'Where Course Experience Trumps Everything',
    content: `The Masters operates on mathematics that contradict popular betting narratives. Augusta National has not produced a debut winner since **1979**—yet each April, media hype inflates rookie prices. The last 12 champions all ranked inside the OWGR top 25 pre-tournament—yet markets still price longshots as if the field were open.

Rory McIlroy's 2025 victory exemplified these patterns perfectly. His 17th Masters start, multiple prior top-10s, and OWGR top-3 ranking fit every qualifying filter. The playoff win over Justin Rose completed just the sixth career Grand Slam in history—validating that Augusta rewards experience and elite ball-striking, not hot putting or narrative momentum.

This guide synthesises research across 15 years of Masters data, strokes-gained analysis, and leaderboard position tracking. The findings challenge casual betting assumptions: approach play contributes more than putting to winning, 54-hole leaders convert at just 54.5% (not the 70% markets imply), and OWGR ranking is the single strongest predictive filter available.`,
  },

  quickFacts: [
    { label: 'Founded', value: '1934' },
    { label: 'Course', value: 'Augusta National (7,555 yards)' },
    { label: 'Par', value: '72' },
    { label: 'Field Size', value: '85-100 players (invitational)' },
    { label: 'Cut', value: 'Top 50 + ties (since 2020)' },
    { label: 'Prize Money (2025)', value: '$21m ($4.2m winner)' },
  ],

  popularMarkets: [
    'Outright Winner',
    'Each Way (Top 5-8)',
    'Top 5/10/20 Finish',
    'First Round Leader',
    'Nationality Winner',
    'Make/Miss Cut',
    'Winning Margin',
  ],

  microMarkets: [
    'Top Debutant',
    'Top Former Champion',
    'Bogey-Free Round (Yes/No)',
    'Round Score Bands',
    'Hole-in-One by Round',
    'Top Amateur',
  ],

  edgePatterns: [
    {
      pattern:
        'Winners ranked inside OWGR top 25 in 100% of last 12 Masters; top 30 in 100% of last 15',
      source: 'Official World Golf Ranking / Masters Records',
      period: '2010-2024',
      sampleSize: 15,
    },
    {
      pattern:
        'Zero debutants have won the Masters since Fuzzy Zoeller in 1979 despite annual rookie hype',
      source: 'Augusta National Historical Records',
      period: '1980-2025',
      sampleSize: 46,
    },
    {
      pattern:
        'Winners derived 89% of strokes gained from tee-to-green vs 11% from putting over last 4 editions',
      source: 'PGA Tour Strokes Gained Analysis',
      period: '2021-2024',
      sampleSize: 4,
    },
    {
      pattern:
        'Clear 54-hole leaders convert at 54.5% vs market-implied 65-70%; exploitable for laying short prices',
      source: 'Masters Historical Leaderboard Data',
      period: '1996-2024',
      sampleSize: 22,
    },
  ],

  comparisonTables: [
    {
      id: 'masters-recent-winners',
      title: 'Recent Masters Winners (2020-2025)',
      headers: ['Year', 'Winner', 'Score', 'OWGR Pre-Tournament'],
      rows: [
        ['2025', 'Rory McIlroy', '-11 (playoff)', '#2'],
        ['2024', 'Scottie Scheffler', '-11 (277)', '#1'],
        ['2023', 'Jon Rahm', '-12 (276)', '#3'],
        ['2022', 'Scottie Scheffler', '-10 (278)', '#1'],
        ['2021', 'Hideki Matsuyama', '-10 (278)', '#25'],
      ],
    },
    {
      id: 'masters-winner-filters',
      title: 'Winner Profile Filters (Last 12 Champions)',
      headers: ['Filter', 'Hit Rate', 'Sample'],
      rows: [
        ['OWGR Top 25', '100%', '12/12'],
        ['Prior Masters Start', '100%', '12/12'],
        ['Prior Masters Top-5', '75%', '9/12'],
        ['Win That Season', '67%', '8/12'],
        ['Top-11 After R1', '100%', '12/12'],
      ],
    },
    {
      id: 'masters-strokes-gained',
      title: 'Strokes Gained Distribution at Augusta',
      headers: ['Category', 'Winner Contribution', 'Importance'],
      rows: [
        ['SG: Approach', '36% of total gained', 'Critical'],
        ['SG: Tee-to-Green', '89% (last 4 winners)', 'Dominant'],
        ['SG: Putting', '11% (last 4 winners)', 'Secondary'],
        ['GIR %', '73.6% winners vs 61.3% field', 'Elite required'],
      ],
    },
  ],

  body: `## Understanding Masters Betting Markets

### Why Elite Ball-Striking Beats Hot Putting

The single most counter-intuitive finding in Masters betting: Augusta is not a putting course. Detailed strokes-gained analysis shows winners derive the vast majority of their edge from approach play, not the greens.

Over the last four Masters, champions generated **89% of strokes gained from tee-to-green versus just 11% from putting**. Five of the last seven winners ranked top-5 in SG: Approach for the week. Meanwhile, players who lead the field in SG: Putting at Augusta—Fowler, Henley, Fitzpatrick, Rose—have combined for zero green jackets despite dominant putting statistics.

The mechanism is clear. Augusta's greens are so severe that positioning trumps stroke quality. A well-struck approach to the correct quadrant creates makeable birdie putts; a poorly positioned approach creates three-putt bogey risk regardless of putting skill. Winners average **73.6% Greens in Regulation** versus 61.3% for the field—a 12-point gap that putting cannot compensate for.

**Betting implication:** When markets hype a player's recent hot putting streak, treat it as noise. Prioritise SG: Approach rankings and GIR percentages when constructing outright positions.

### The OWGR Filter: Non-Negotiable

This is the most robust edge pattern in major championship betting. Every Masters winner since 2010 has entered ranked inside the **OWGR top 30**. Every winner since 2012 has entered inside the **top 25**. The correlation is 100% across 15 tournaments.

Rory McIlroy's 2025 victory reinforced this pattern. He entered Augusta ranked World No. 2. Scottie Scheffler (2022, 2024) entered as World No. 1. Jon Rahm (2023) entered at No. 3. Hideki Matsuyama (2021) squeaked in at No. 25—the lowest-ranked winner in the sample.

**Practical application:** Before placing any outright bet, verify the player is inside OWGR top 30. If they are outside this range, redirect exposure to Top 20 or Make Cut markets where longer-odds players can still provide value.

## Course Experience: The Debutant Problem

### Zero Debut Winners Since 1979

Only three players have ever won the Masters on debut: Horton Smith (1934), Gene Sarazen (1935), and Fuzzy Zoeller (1979). In the 46 editions since Zoeller, not a single first-timer has won—despite media narratives each April building around exciting rookies.

The 2025 field included hyped debutants Ludvig Aberg (who finished runner-up in 2024 but that was his second start) and various LIV refugees making maiden appearances. None contended on Sunday. The pattern holds: Augusta's subtle slopes, firm greens, and wind patterns require multiple visits to decode.

**Betting application:** Eliminate all debutants from outright consideration. Their implied odds are inflated by casual money attracted to narrative. Redirect exposure to **Top Debutant** markets where these players compete only against each other, or wait until their second or third Masters appearance before backing them to win.

### The Course Horse Effect

Nine of the last 12 Masters winners had a **prior top-5 finish** at Augusta. Nine of 12 had at least one **prior top-10**. The course rewards familiarity to an extreme degree.

McIlroy's 2025 win came on his 17th Masters start. His prior best was second place in 2022. Jordan Spieth, who owns the lowest Masters scoring average among active players (70.95 over 40 rounds), won in 2015 and has contended repeatedly. These are not coincidences—they are pattern validation.

**Betting application:** Weight previous Augusta performance heavily. Players with multiple top-10s at the Masters are systematically underpriced in outright markets because casual bettors chase current form over course history.

## Leaderboard Position Patterns

### You Must Be in Contention Early

The last 12 Masters winners show remarkably consistent leaderboard positioning:

- **After Round 1:** All 12 winners were inside the top 11 (100%)
- **After Round 2:** All 12 winners were inside the top 8 (100%)
- **After Round 3:** 11 of 12 winners were inside the top 3 (91.7%)

This pattern has profound live betting implications. If your outright selection is outside the top 15 after Thursday, historical data suggests their chances have collapsed to near-zero. The Masters rewards steady accumulation, not dramatic Sunday charges from deep in the pack.

**Live betting application:** After Round 1, restrict new outright positions to players inside the top 20 by score AND inside OWGR top 25. This dual filter captures virtually all historical winners while eliminating noise.

### 54-Hole Leader Conversion Is Overstated

Markets consistently overprice Sunday leaders at the Masters. Clear 54-hole leaders convert at approximately **54.5%**—substantially below the 65-70% implied by typical Sunday morning odds.

The Augusta graveyard of collapsed leads is extensive: Greg Norman (1996, six shots ahead), Rory McIlroy (2011, four shots ahead), Jordan Spieth (2016, five-shot lead entering Amen Corner on Sunday). The course's back nine produces more scoring volatility than any stretch in major championship golf.

**Betting application:** When a 54-hole leader is priced at implied probability above 60%, consider laying them or backing elite chasers within 2-3 shots at inflated prices. The historical conversion rate supports this approach.

## Counter-Intuitive Findings

### Runners-Up Rarely Win Next Year

The revenge narrative is a trap. From 2009-2024, only **2 of 15 Masters runners-up** went on to win the following year. Conversely, **7 of the last 10 winners** actually finished outside the top 10 the previous year.

Markets and casual bettors overweight last year's close call. Data shows it provides minimal predictive signal. A player who finished T30 last year but arrives in elite form may be better positioned than the previous year's runner-up carrying emotional baggage.

### Mid-Range Prices Outperform Short Favourites

Since Tiger Woods' 2005 win as a short favourite, only two pre-tournament betting favourites have won the Masters. Recent winners have typically closed in the **+1,000 to +3,000** range, with several shocks at +4,000 to +5,000 (Danny Willett 2016, Patrick Reed 2018).

Augusta's small but elite field creates enough variance that backing heavy pre-tournament favourites at minus prices represents poor risk-adjusted value. The optimal range appears to be players priced between +800 and +2,500 who pass the OWGR and course experience filters.

## Live Betting Windows

### Post-Round 1 Overreaction Window

**Trigger:** End of Round 1; leaderboard published

**Duration:** Approximately 12-18 hours until Round 2 tee times

**Edge:** Back elite players (OWGR top-25) within 4 shots of the lead whose odds have drifted disproportionately

**Mechanism:** Markets heavily overreward the single lowest round. A player who shoots 68 may see their odds cut by 70%, while a World No. 5 who shoots 70 may drift from 12/1 to 25/1. Historical data shows 18 of 19 recent winners were within 4 shots after Round 1—the drifters often represent the best value.

### Saturday Moving Day Window

**Trigger:** Mid-to-late Round 3, particularly holes 10-16

**Duration:** 1.5-2 hours of real time as leaders navigate Amen Corner

**Edge:** Fade fragile leaders without elite SG: Approach; back strong ball-strikers 1-3 shots behind

**Mechanism:** Augusta's back nine on Saturday produces the most dramatic leaderboard swings of the weekend. Books tend to over-stabilise leader prices during Round 3. Use live strokes-gained data to identify players flushing irons who have not yet converted putts—their prices are often too long.

### Early Sunday Leader Risk Window

**Trigger:** Start of Round 4 when clear leader holds 3 shots or fewer

**Duration:** First 6-9 holes of the final round

**Edge:** Lay short-priced Sunday leaders or back world-class chasers at inflated odds

**Mechanism:** The 54.5% historical conversion rate means leaders priced at 1.40 or shorter represent negative expected value. When a leader lacks established major-championship closing credentials or strong SG: Approach that week, fair probability is closer to 50% than to 70%.

## Micro-Markets Strategy

### Top Debutant

This market removes the structural disadvantage of backing rookies to win outright. If you believe a specific debutant is exceptionally talented for Augusta (high-spin irons, creative short game, elite SG: Approach), the Top Debutant market lets you back them against only other first-timers rather than the entire field.

Historical data shows debutants rarely contend for the outright but often finish respectably. A strong rookie might finish T25—worthless for outright but potentially profitable in Top Debutant.

### Bogey-Free Round

Augusta's combination of birdie opportunities (par-5s) and severe penalty holes (Amen Corner) makes bogey-free rounds rare. When offered at 3/1 or better for elite ball-strikers in benign conditions, this market can offer value. Check weather forecasts—calm mornings favour clean cards.

### Top Former Champion

This market isolates past winners competing against each other. Players like Jordan Spieth, Scottie Scheffler, and Jon Rahm—all with proven Augusta credentials—often provide value when priced within this subset rather than against the full field.`,

  faq: [
    {
      q: 'Which bookmaker has the best Masters odds?',
      a: 'Betfair Exchange offers the best odds through commission pricing. For each-way, Paddy Power and bet365 frequently offer enhanced place terms (top 8-12 at 1/5 odds) during Masters week. Sky Bet provides competitive Top 20 markets. Shop around Tuesday-Wednesday as books compete for handle.',
    },
    {
      q: 'Can a debutant win the Masters?',
      a: 'Effectively no. Zero first-timers have won since Fuzzy Zoeller in 1979—46 consecutive editions without a debut winner. Despite annual media hype around rookies, redirect outright exposure to Top Debutant markets where they compete only against other first-timers. Wait until a player has 2-3 Masters starts before backing them outright.',
    },
    {
      q: 'What stats actually predict Masters success?',
      a: 'Strokes Gained: Approach is the dominant predictor. Winners derived 89% of strokes gained from tee-to-green over the last four editions. Greens in Regulation percentage (winners average 73.6% vs 61.3% field) matters more than putting statistics. Ignore hot putting streaks—they are noise at Augusta.',
    },
    {
      q: 'Why do my 54-hole leader bets keep losing?',
      a: 'Because markets overprice Sunday leaders. Clear 54-hole leaders at the Masters convert at just 54.5%—not the 65-70% implied by typical odds. Augusta produces famous collapses (Norman 1996, McIlroy 2011, Spieth 2016). Consider laying leaders priced above 60% implied or backing elite chasers within 2-3 shots.',
    },
    {
      q: 'Is the pre-tournament favourite worth backing?',
      a: 'Rarely. Since Tiger Woods in 2005, only two pre-tournament favourites have won. Recent winners typically close between +1,000 and +3,000. Heavy favourites at short prices represent poor risk-adjusted value in a 90-player invitational field with inherent volatility.',
    },
    {
      q: 'When is the best time to bet on the Masters?',
      a: 'For outright value, Tuesday-Wednesday offers stable odds before sharp money moves lines Thursday morning. The best live betting window is after Round 1—elite players within 4 shots of the lead often drift to inflated prices while markets overreward the single low round. Restrict positions to OWGR top-25 players inside top-20 by score.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'Augusta National Historical Records',
      'PGA Tour Strokes Gained Analysis',
      'Official World Golf Ranking',
      'Masters Tournament Statistics (2010-2025)',
      'DataGolf Course Fit Modelling',
    ],
  },
};