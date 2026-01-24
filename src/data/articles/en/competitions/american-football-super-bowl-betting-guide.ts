import { CompetitionArticle } from '@/types';

export const americanFootballSuperBowlBettingGuide: CompetitionArticle = {
  slug: 'american-football-super-bowl-betting-guide',
  competitionId: 'superbowl',
  h1: 'Super Bowl Betting Guide 2026',
  metaTitle: 'Super Bowl Betting Guide 2026 | Data-Backed Edge Patterns',
  metaDescription:
    'Super Bowl betting guide with edge patterns from 59 games. Underdogs cover 56% ATS, halftime leads convert at 93%, and why the coin toss is a losing bet.',

  intro: {
    title: 'Where Underdogs Cover and Favourites Win',
    content: `The Super Bowl generates more betting handle than any other single sporting event globally—**$1.39 billion** in legal US bets for Super Bowl LIX alone. Yet most bettors approach it with less research than a regular season game, treating prop menus as entertainment rather than markets with exploitable edges.

The data reveals a fundamental tension. Favourites win 63% of Super Bowls straight up (37-22), but underdogs have covered the spread in **56% of games** (30-27-2 ATS). The market prices favourites correctly to win, but overvalues their margin of victory. Super Bowl LIX exemplified this perfectly: the Eagles won 40-22 as 1.5-point underdogs, destroying a Chiefs team attempting a three-peat.

This guide synthesises 59 Super Bowls of betting data, halftime conversion rates that differ dramatically from regular season patterns, and the prop markets where bookmaker margins are widest—and narrowest.`,
  },

  quickFacts: [
    { label: 'First Played', value: 'January 15, 1967' },
    { label: 'Games Played', value: '59 (through 2025)' },
    { label: 'Timing', value: 'Early February (Super Sunday)' },
    { label: 'Format', value: 'Single championship game' },
    { label: '2025 Legal Handle', value: '$1.39 billion (US)' },
    { label: 'Prop Markets', value: '400+ per game' },
  ],

  popularMarkets: [
    'Point Spread (ATS)',
    'Moneyline',
    'Game Total (Over/Under)',
    'Team Totals',
    'First TD Scorer',
    'MVP Award',
    'Player Props (Yards/TDs)',
  ],

  microMarkets: [
    'Coin Toss Result',
    'Longest Reception/Rush',
    'First Accepted Penalty Type',
    'National Anthem Length',
    'Gatorade Colour',
    'Scorigami (Unique Score)',
  ],

  edgePatterns: [
    {
      pattern:
        'Underdogs cover the spread in 56% of Super Bowls (30-27-2 ATS) despite losing 63% of games straight up',
      source: 'Vegas Insider Super Bowl History',
      period: '1967-2025',
      sampleSize: 59,
    },
    {
      pattern:
        'Teams leading by 10+ points at halftime convert at 93% (26-2) vs 75-80% NFL regular season baseline',
      source: 'ESPN Stats and Info',
      period: '1967-2024',
      sampleSize: 28,
    },
    {
      pattern:
        'Coin toss winners lose the game 56% of the time (26-33) contradicting the perceived deferral advantage',
      source: 'Sports Betting Dime / Yahoo Sports',
      period: '1967-2025',
      sampleSize: 59,
    },
    {
      pattern:
        'Game totals split exactly 50/50 historically (29-29 O/U) with no exploitable over/under bias',
      source: 'Vegas Insider Historical Totals',
      period: '1968-2025',
      sampleSize: 58,
    },
  ],

  comparisonTables: [
    {
      id: 'superbowl-ats-history',
      title: 'Super Bowl ATS Performance (1967-2025)',
      headers: ['Category', 'Record', 'Win Rate'],
      rows: [
        ['Favourites SU', '37-22', '63%'],
        ['Favourites ATS', '27-30-2', '47%'],
        ['Underdogs ATS', '30-27-2', '53%'],
        ['Over/Under', '29-29', '50%'],
      ],
    },
    {
      id: 'superbowl-recent',
      title: 'Recent Super Bowl Results (2021-2025)',
      headers: ['Game', 'Score', 'Total', 'ATS Winner'],
      rows: [
        ['LIX Eagles vs Chiefs', '40-22', '62 (Over)', 'Underdog'],
        ['LVIII Chiefs vs 49ers', '25-22', '47 (Under)', 'Underdog'],
        ['LVII Chiefs vs Eagles', '38-35', '73 (Over)', 'Underdog'],
        ['LVI Rams vs Bengals', '23-20', '43 (Under)', 'Underdog'],
      ],
    },
    {
      id: 'superbowl-halftime',
      title: 'Halftime Lead Conversion Rates',
      headers: ['Lead Size', 'Super Bowl', 'NFL Regular Season'],
      rows: [
        ['10+ points', '93% (26-2)', '75-80%'],
        ['7-9 points', '~85%', '~70%'],
        ['1-6 points', '~65%', '~60%'],
      ],
    },
  ],

  body: `## Understanding Super Bowl Betting Markets

### Point Spread (ATS)

The spread market is where value exists. Favourites win Super Bowls at a 63% clip—but they cover the spread only **47% of the time** (27-30-2 ATS). Underdogs have won ATS in 4 of the last 5 Super Bowls.

The mechanism is clear. Two weeks of media coverage pushes casual money toward the perceived "better team." Sharp books adjust, but recreational handle on favourites creates systematic underdog value.

**When to use:** Back underdogs at +2.5 or higher. The extra points provide insurance in close games.

**When to avoid:** Underdogs at pick'em or -1. Without the point buffer, you need straight-up victory.

### Game Totals (Over/Under)

The Over/Under has split exactly **29-29** across 58 Super Bowls with posted totals. No exploitable bias exists in totals at the aggregate level.

The recent trend shows variance rather than edge. Super Bowl LVII hit 73 points (over). Super Bowl LVIII hit 47 (under). Super Bowl LIX hit 62 (over). Market efficiency holds—totals are correctly priced over large samples.

**Timing consideration:** Totals posted two weeks out reflect expected scoring. Injury news during Super Bowl week moves lines 1-3 points in either direction.

### First TD Scorer

High-margin market with bettor appeal. Bookmakers price first TD scorer with 15-20% overround—far above the 4.5% on spreads. The favourite to score first (typically a skill position player) rarely offers value at listed odds.

**Value angle:** Target red zone usage data. Check goal-line snap counts from playoff games, not season averages. The Eagles used Jalen Hurts on the "tush push" repeatedly—anyone backing Hurts for first/anytime TD had edge over pure receiving threats.

## The Halftime Conversion Anomaly

Super Bowl halftime leads convert at rates that deviate significantly from regular season patterns.

Teams leading by **10+ points at halftime** have won 26 of 28 Super Bowls (93%). The NFL regular season baseline for double-digit halftime leads sits at 75-80%. That 13-18 percentage point gap represents genuine mispricing in live markets.

The mechanism combines two factors. Elite defences tighten in championship settings. Trailing teams face mounting pressure that compounds mistakes rather than enabling comebacks. The "one-game final" psychology suppresses the risk-taking that drives regular season comebacks.

**Live betting application:** When any team leads by 10+ at halftime, live lines still price the trailer at 20-25% win probability (implied by +300 to +400 odds). Historical data suggests fair value is 7% (implied by +1300). Lay the trailing team aggressively.

## The Coin Toss Trap

The coin toss market illustrates how narratives create bad bets.

Coin toss winners have **lost the Super Bowl 56% of the time** (26-33). The common assumption—that winning the toss and deferring provides meaningful second-half advantage—finds no support in 59 games of data.

Tails has hit 31 times versus heads 28 times (52.5%). This is pure variance on a 50/50 event. Any "system" claiming edge on coin toss outcomes is statistically illiterate.

**Recommendation:** Avoid coin toss bets entirely. The -110 juice on a true 50/50 proposition guarantees negative expected value. The "coin toss winner wins game" prop is even worse—you're paying juice on a bet that loses 56% of the time.

## Referee Crew Considerations

NFL playoff games see fewer penalties than regular season—contradicting the assumption that officials "tighten up" in big games. Super Bowl crews are selected for prestige, but their regular season tendencies still inform prop markets.

Crew variance is substantial. During the 2024-25 season, Alex Moore's crew averaged **19.44 flags per game** while Brad Allen's averaged **12.63 flags per game**. That 6.8-flag gap shifts total penalty props by 30-40%.

**Application:** When Super Bowl referee assignment is announced (typically 10-14 days before the game), cross-reference against regular season crew averages. Back Under on total penalties for lenient crews; Over for strict crews. Markets anchor to league averages rather than crew-specific data.

## Prop Market Hierarchy

Not all prop markets carry equal edge potential.

**Low-margin props (4-6% overround):**
- Point spread
- Game total
- Team totals
- Halftime spread/total

**Medium-margin props (8-12% overround):**
- Player passing/rushing/receiving yards
- Touchdown scorers (anytime)
- First half results

**High-margin props (15-25% overround):**
- First TD scorer
- MVP
- Novelty props (anthem, Gatorade, coin toss)

The highest-margin markets attract the most casual handle. Bookmakers exploit this by widening spreads on "entertainment" bets.

**Strategic approach:** Concentrate research on medium-margin player props where data analysis provides edge. Avoid high-margin novelty props where entertainment value, not expected value, drives participation.

## Live Betting Windows

Super Bowl live markets lag in specific scenarios:

**Failed 4th-down conversions:** When a team fails on 4th down in plus territory, field position equity shifts dramatically. Live lines take 60-120 seconds to fully adjust. The "next score" market and live team totals offer windows before models recalibrate.

**Two-minute drill activation:** End-of-half situations with timeout asymmetry create underweighted scoring probability. If the leading team has timeouts and receives the second-half kickoff, back live Overs during the two-minute drill.

**Early penalty clusters:** If officials throw multiple flags on the first two drives, markets anchored to "Super Bowl refs swallow whistles" narrative underadjust. Back Over on total penalties after early flag activity.

## Fourth-Down Aggression

Modern NFL coaching has shifted fourth-down decision-making dramatically. Teams now attempt conversion on 26% of non-desperation fourth downs—the highest rate in league history.

Aggressive coaches (like the Eagles' Nick Sirianni) increase fourth-down attempt props, reduce punt counts, and skew scoring toward TDs over field goals. Conservative coaches produce inverse effects.

**Prop implications:** When an aggressive coach faces a conservative coach, back the aggressive team's "total TDs" and fade their "total FG attempts." The stylistic mismatch creates systematic bias in derivative markets.

## Sharp vs Square Money

Super Bowl betting follows predictable patterns:

**Sharp money (early):** Professional bettors position immediately when lines open, targeting spreads and totals before casual money arrives. Early line movement toward the underdog suggests sharp action.

**Square money (late):** Recreational bettors flood in during Super Bowl week, typically backing favourites and overs. Late line movement toward the favourite suggests public money, not information.

**Application:** If the line opens at favourite -2.5 and moves to -1.5 by Wednesday, sharps have taken the underdog. If it moves to -3.5, squares are piling on the favourite. Align with early movement, not late movement.`,

  faq: [
    {
      q: 'Which bookmaker offers the best Super Bowl odds?',
      a: 'Bet365 and DraftKings offer the widest prop selection (400+ markets). Pinnacle provides the tightest spreads on main markets. Betfair Exchange offers commission-based pricing for sharp bettors. For UK punters, Paddy Power runs aggressive Super Bowl promotions and money-back specials.',
    },
    {
      q: 'Should I bet the favourite or underdog in the Super Bowl?',
      a: 'Underdogs cover 56% of Super Bowls (30-27-2 ATS) despite losing 63% of games straight up. The market overprices favourite margins. Underdogs have covered in 4 of the last 5 Super Bowls, including the Eagles (+1.5) crushing the Chiefs 40-22 in Super Bowl LIX.',
    },
    {
      q: 'Is the coin toss a profitable Super Bowl bet?',
      a: 'No. Coin toss winners have lost the Super Bowl 56% of the time (26-33). The result is random (tails 31, heads 28) with no exploitable pattern. Paying -110 juice on a 50/50 proposition guarantees negative expected value. Avoid coin toss markets entirely.',
    },
    {
      q: 'Why do halftime leads hold more often in the Super Bowl?',
      a: 'Teams leading by 10+ at halftime win 93% of Super Bowls (26-2) versus 75-80% in regular season. Elite defences tighten in championship settings, and trailing teams face pressure that compounds errors. Live markets price trailing teams at 20-25% when fair value is closer to 7%.',
    },
    {
      q: 'When is the best time to bet on the Super Bowl?',
      a: 'Opening lines (when matchup is set) offer sharpest value before casual money arrives. Early movement toward underdogs indicates sharp action. Avoid betting late in Super Bowl week when recreational money inflates favourite prices. Referee crew announcement (10-14 days out) is critical for penalty props.',
    },
    {
      q: 'Are Super Bowl novelty props worth betting?',
      a: 'No. Novelty props (anthem length, Gatorade colour, coin toss) carry 15-25% overround versus 4-6% on main markets. They exist for entertainment, not profit. Concentrate research on medium-margin player props where data provides genuine edge over casual bettors.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'Vegas Insider Super Bowl History (1967-2025)',
      'ESPN Stats and Info',
      'Sports Betting Dime Historical Data',
      'NFL Penalties Referee Tracker',
      'Pro Football Reference',
    ],
  },
};