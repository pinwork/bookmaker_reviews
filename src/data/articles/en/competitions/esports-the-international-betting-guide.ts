import { CompetitionArticle } from '@/types';

export const esportsTheInternationalBettingGuide: CompetitionArticle = {
  slug: 'esports-the-international-betting-guide',
  competitionId: 'ti',
  h1: 'The International Betting Guide 2026',
  metaTitle: 'The International Dota 2 Betting Guide 2026 | TI15',
  metaDescription:
    'TI betting guide with verified edge patterns from 2,129 matches. Radiant advantage, gold lead conversion rates, and live betting windows for Dota 2.',

  intro: {
    title: 'Where Small Edges Compound Into Real Money',
    content: `The International operates on razor-thin margins that casual bettors miss entirely. Radiant side wins **51.34% of all TI matches**—a 2.68 percentage point edge that compounds across hundreds of games. First-pick Radiant teams push that to 52.31%, creating a 4.6pp swing against second-pick Dire opponents.

These numbers come from 2,129 TI LAN matches spanning 2011-2024. The sample size dwarfs typical esports datasets. More importantly, these structural advantages persist across patches, metas, and roster changes—unlike hero-specific win rates that fluctuate with balance updates.

Team Falcons claimed TI14 (2025) in Hamburg after beating Xtreme Gaming 3-2, adding another chapter to a tournament where underdogs consistently outperform their seeding. OG won back-to-back titles (2018-2019) from non-favourite positions. Team Spirit captured two championships (2021, 2023) after entering as mid-tier seeds. The market systematically underprices teams with strong drafting discipline and LAN composure.

This guide synthesises objective data from Spectral Stats, academic research on resource-based win probability, and live betting analysis. The edges are modest individually—1-4 percentage points—but they represent genuine structural advantages in a market where recreational money dominates.`,
  },

  quickFacts: [
    { label: 'Founded', value: '2011' },
    { label: 'Teams (Current Format)', value: '16' },
    { label: 'Format', value: 'Swiss + Double Elim' },
    { label: 'Prize Pool (TI14)', value: '$2.88m' },
    { label: 'Defending Champion', value: 'Team Falcons (2025)' },
    { label: 'All-Time Matches', value: '2,129' },
  ],

  popularMarkets: [
    'Tournament Winner',
    'Match Winner',
    'Map Winner',
    'Map Handicap (-1.5/+1.5)',
    'Total Maps (Over/Under 2.5)',
    'First Blood',
  ],

  microMarkets: [
    'First Roshan',
    'First Tower Destroyed',
    'First Barracks',
    'Total Roshans Over/Under',
    'Match Duration Over/Under',
    'Total Kills Over/Under',
  ],

  edgePatterns: [
    {
      pattern:
        'First-pick Radiant teams win 52.31% vs second-pick Dire at 47.69% at TI (4.62pp structural advantage)',
      source: 'Spectral Stats - TI All-Time LAN Database',
      period: '2011-2024',
      sampleSize: 2129,
    },
    {
      pattern:
        'Teams with 20%+ gold lead at 12 minutes convert 82.4% of pro matches (only 17.6% comeback rate)',
      source: 'The Defense Tournament Analysis',
      period: '2012-2014',
      sampleSize: 51,
    },
    {
      pattern:
        'PSG.LGD holds 65.79% win rate across 266 TI matches - highest of any team with 100+ games played',
      source: 'Spectral Stats - TI All-Time',
      period: '2011-2024',
      sampleSize: 266,
    },
    {
      pattern:
        'Dire side averages 1.13 Roshan kills per game vs Radiant 1.03 but still loses 51.34% of TI matches',
      source: 'Spectral Stats - TI Objective Data',
      period: '2011-2024',
      sampleSize: 2129,
    },
  ],

  comparisonTables: [
    {
      id: 'ti-side-pick-advantage',
      title: 'Side and Pick Advantage at TI (2011-2024)',
      headers: ['Combination', 'Win Rate', 'Sample'],
      rows: [
        ['First Pick Radiant', '52.31%', 'n=2,129'],
        ['Radiant (any pick)', '51.34%', 'n=2,129'],
        ['First Pick (any side)', '51.06%', 'n=2,129'],
        ['Second Pick Dire', '47.69%', 'n=2,129'],
      ],
    },
    {
      id: 'ti-gold-lead-conversion',
      title: 'Gold Lead Conversion Rates (Pro Tournaments)',
      headers: ['Lead at 12 min', 'Win Rate', 'Comeback Rate'],
      rows: [
        ['10%+ gold lead', '74.0%', '26.0%'],
        ['20%+ gold lead', '82.4%', '17.6%'],
        ['30%+ gold lead', '86.8%', '13.2%'],
        ['40%+ gold lead', '92.9%', '7.1%'],
      ],
    },
    {
      id: 'ti-regional-dominance',
      title: 'TI Championships by Region (2011-2025)',
      headers: ['Region', 'Titles', 'Recent Winner'],
      rows: [
        ['Western Europe', '4', 'OG (2018, 2019)'],
        ['China', '4', 'Wings Gaming (2016)'],
        ['Eastern Europe/CIS', '3', 'Team Spirit (2021, 2023)'],
        ['Middle East', '1', 'Team Falcons (2025)'],
      ],
    },
  ],

  body: `## Understanding TI Betting Markets

### Match Winner (Moneyline)

The standard market anchors all other pricing. TI matches are Bo3 through playoffs, with the Grand Final as Bo5. The double-elimination format means teams get second chances—lower bracket runs are common, and momentum from "must-win" situations can flip expected outcomes.

**When to use:** Coin-flip matchups where you can identify a structural edge (Radiant side, first pick, superior late-game draft).

**When to avoid:** Heavy favourites priced below 1.40. The variance in Dota 2 makes short odds poor value—upsets happen at approximately 25-30% in TI playoff matches.

### Map Handicap (-1.5/+1.5)

Favourites must win 2-0 in a Bo3 to cover -1.5 maps. Underdogs can lose 1-2 and still cash +1.5. This market offers better value than moneyline when:
- The favourite has a specific draft advantage that may not translate across multiple games
- The underdog has shown the ability to take maps off top teams
- Series involves teams with volatile playstyles

**Value angle:** Back +1.5 maps on underdogs with proven "cheese" strategies—teams that can steal a map with unconventional drafts but struggle in extended series.

### Total Maps (Over/Under 2.5)

Whether a Bo3 ends 2-0 (Under) or goes to three maps (Over). TI playoff matches historically go the distance approximately 55% of the time due to high skill parity at the tournament level.

**Pattern:** Matches between teams from the same region (China vs China, WEU vs WEU) tend to produce more 2-1 results due to familiarity. Cross-regional matchups show more variance.

## Structural Edges at TI

### The Radiant Advantage

Radiant side wins **51.34%** of TI LAN matches across 2,129 games. This is not random noise—the advantage is structural and stems from map geometry. Radiant has better access to the jungle, easier pull camps, and more favourable ward positions in the early game.

The edge compounds with draft order. First-pick Radiant teams win **52.31%**, while second-pick Dire teams win only **47.69%**. That 4.62 percentage point gap is enormous in a market where recreational bettors ignore side selection entirely.

**Application:** When odds are essentially even (1.90-1.95 on both sides), lean Radiant. When a team has both Radiant and first pick, their true win probability is 2-3% higher than moneyline implies.

### Why Dire Takes More Roshans But Loses More Often

Counter-intuitive finding: Dire averages **1.13 Roshan kills per game** versus Radiant's 1.03—yet Dire still loses 51.34% of matches. The Roshan pit favours Dire positioning in late-game, but this advantage arrives too late to offset Radiant's early-game edge.

**Betting implication:** Do not overweight "First Roshan" props for Dire teams. The Roshan advantage exists but is insufficient to overcome Radiant's structural laning and jungle benefits. Markets that combine "First Roshan + Win Map" for Dire offer poor expected value.

### Gold Lead Conversion: When Games Are Decided

Academic and pro-level analysis shows gold leads at 12 minutes predict outcomes with high accuracy:

- **10% gold lead:** 74% win rate
- **20% gold lead:** 82.4% win rate
- **30% gold lead:** 86.8% win rate
- **40%+ gold lead:** 92.9% win rate

Dota 2 allows more comebacks than League of Legends (where 10% leads convert at approximately 90%), but games are still largely decided by mid-game resource states. The "Dota is chaotic" narrative is overstated—leads matter significantly.

**Live betting application:** When a team reaches 20%+ gold lead at 12 minutes and odds still imply only 70-75% win probability, there is value on the leading team.

## Team Anomalies Worth Tracking

### PSG.LGD: The TI Overperformer

PSG.LGD holds a **65.79% win rate** across 266 TI matches—the highest of any team with 100+ games played. This is approximately 15 percentage points above the neutral 50% baseline. The Chinese organisation consistently reaches deep rounds, making them reliable for "to reach Top 4" and handicap markets.

**Caution:** Despite consistent performance, PSG.LGD has won only one TI (2012, as LGD.Int). They convert group stage dominance into finals appearances but have lost multiple Grand Finals. Back them for deep runs; fade them in outright markets at short prices.

### The Underdog Pattern

TI consistently produces underdog champions. OG won 2018 and 2019 from non-favourite seeding. Team Spirit won 2021 and 2023 as mid-tier seeds. Team Falcons won 2025 after being overlooked behind Team Spirit and Team Liquid.

**Market inefficiency:** Recreational bettors pile onto "big name" organisations (Team Secret, Team Liquid, former champions). Outright markets often undervalue teams with:
- Strong drafting coaches
- LAN experience under pressure
- Flexible hero pools across all five positions

## Live Betting Windows

### Post-Draft Window (0-3 Minutes)

After drafts lock but before meaningful in-game events, markets often fail to adjust for draft implications. A team with a superior late-game composition may trade evenly in early kills but hold 55-60% true win probability based on scaling.

**Trigger:** Draft completes with clear win-condition asymmetry
**Duration:** 2-4 minutes
**Edge:** Back the better-scaling draft at prices that haven't adjusted from pre-match lines

### First Roshan Window

When a team secures Aegis (Roshan buff), their win probability increases significantly for the next 5 minutes. Markets adjust slowly—especially when the Aegis team has equal or lower gold at the time of the kill.

**Trigger:** First Roshan secured
**Duration:** Until Aegis expires or decisive fight occurs
**Edge:** Back Aegis team on "next tower" or "next barracks" props

### Buyback Crisis Window

Teams that burn multiple buybacks in a single fight without securing objectives face catastrophic win probability collapse. TI averages approximately 2.28 buybacks per side per game—using two or more without structural gains signals desperation.

**Trigger:** Multiple core buybacks used, no objective taken
**Duration:** 60-180 seconds
**Edge:** Back the team that forced the buybacks at adjusted odds

## Micro-Markets Strategy

### First Blood

First blood correlates with map wins but less strongly than most bettors assume. The team getting first blood wins approximately 55-58% of maps—meaningful but not decisive. Markets often overprice first blood correlation.

**Value angle:** When first blood odds imply 60%+ map win probability, fade the correlation by backing "First Blood Team Loses Map" or simply taking the opponent on map winner.

### Total Kills Over/Under

TI matches average approximately **45-50 total kills** based on ~1.18 kills per minute and 38-40 minute average duration. High-discipline teams (Chinese organisations historically) often produce "clean" wins with fewer kills than expected.

**Pattern:** Elite teams converting leads produce Under-friendly games. Chaotic matchups between aggressive CIS/SEA teams produce Over-friendly games. Check team playstyle before betting kill totals.

### Total Roshans Over/Under

TI averages approximately **2.16 Roshans per game** (Radiant 1.03, Dire 1.13). Lines typically sit at 2.5.

**Value angle:** Late-game drafts that require multiple Roshan buffs to breach high ground push games toward 3+ Roshans. Early-game drafts that aim to end before 35 minutes often produce 1-2 Roshans. Adjust based on draft composition.

## Tournament Structure Notes

### Swiss Format (New from TI14)

TI now uses a Swiss-system group stage instead of traditional round-robin. Teams face opponents with matching records (2-0 vs 2-0, etc.). Four wins advance to playoffs; four losses eliminate.

**Betting implication:** Early Swiss rounds feature more variance as teams find their footing. Later rounds (4th-5th) see teams playing at maximum intensity. Back form in late Swiss; fade "expected" results in early rounds.

### Double Elimination Playoffs

Eight teams enter the playoff bracket. All matches are Bo3 except the Bo5 Grand Final. Teams eliminated from upper bracket drop to lower bracket with second-life opportunity.

**Pattern:** Lower bracket teams often gain momentum from "elimination mode" focus. However, fatigue accumulates—teams playing 4-5 series in lower bracket show measurable performance decline in Grand Finals. Back upper bracket finalists in Bo5 Grand Finals at prices above 1.60.`,

  faq: [
    {
      q: 'Which bookmaker offers the best odds for The International?',
      a: 'Pinnacle provides the sharpest Dota 2 odds with margins under 3%. Betfair Exchange offers zero-margin trading for liquid TI markets. Bet365 has the widest prop coverage including First Roshan, kill totals, and duration bets. GG.bet specialises in esports with deep micro-markets but higher margins.',
    },
    {
      q: 'Does the Radiant side advantage really matter for betting?',
      a: 'Yes—verified across 2,129 TI matches. Radiant wins 51.34% overall, and first-pick Radiant wins 52.31% vs second-pick Dire at 47.69%. That 4.6pp swing is significant in coin-flip matchups. When odds are even, lean Radiant. Most recreational bettors ignore side selection entirely, creating consistent value.',
    },
    {
      q: 'Why do Dota 2 favourites keep losing at TI?',
      a: 'TI produces underdog champions consistently. OG won 2018-2019 as non-favourites. Team Spirit won 2021 and 2023 as mid-seeds. Team Falcons won 2025 after being overlooked. The market overweights "big name" organisations while undervaluing drafting discipline, LAN composure, and coach quality. Fade short-priced favourites; back mid-tier teams with strong fundamentals.',
    },
    {
      q: 'How predictable are gold leads in professional Dota 2?',
      a: 'More predictable than the "Dota is chaotic" narrative suggests. A 20% gold lead at 12 minutes converts to victory 82.4% of the time. Even a 10% lead wins 74%. Live betting offers value when markets imply lower conversion rates than historical data supports. The comeback narrative is overstated—leads matter significantly.',
    },
    {
      q: 'Are kill total markets profitable at TI?',
      a: 'Situationally. TI averages 45-50 kills per game. Elite teams converting leads produce Under-friendly games with clean finishes. Aggressive CIS/SEA matchups produce Over-friendly chaos. Check team playstyle before betting—Chinese discipline vs Eastern European aggression creates 10+ kill variance in expected totals.',
    },
    {
      q: 'What changed with the Swiss format at TI14?',
      a: 'TI now uses Swiss-system groups instead of round-robin. Teams face opponents with matching records, creating intensity escalation through rounds. Early Swiss rounds show more variance; late rounds (4th-5th matches) see maximum effort. Fade "expected" results in early rounds; back verified form in elimination scenarios.',
    },
  ],

  footer: {
    lastUpdated: '2026-01-24',
    sources: [
      'Spectral Stats - TI All-Time LAN Database (2011-2024)',
      'Liquipedia Dota 2 Tournament Records',
      'The Defense Pro Tournament Analysis',
      'UCSD Machine Learning Win Probability Research',
      'Dota 2 Pro Tracker - Patch Win Rates',
    ],
  },
};