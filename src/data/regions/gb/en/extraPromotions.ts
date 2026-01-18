// src/data/regions/gb/en/extraPromotions.ts
import { ExtraPromotion } from '../../../../types';

export const extraPromotions: ExtraPromotion[] = [
    {
    id: 'b365-football-early-payout',
    bookmakerSlug: 'bet365',
    title: 'Soccer Early Payout Offer',
    shortDescription: 'Get single bets paid out if the team you back goes 2 goals ahead. For multiples, the selection is marked as a winner.',
    type: 'early_payout',
    sports: ['football'],
    isActive: true,
    validUntil: '2026-12-31',
    lastVerified: '2026-01-18',
    tags: ['80+ Leagues', 'Full Payout', 'Instant Settlement'],
    details: { keyCondition: '2 Goals Ahead' }
  },
  {
    id: 'b365-sub-on-play-on',
    bookmakerSlug: 'bet365',
    title: 'Sub On Play On',
    shortDescription: 'If your player is substituted, your bet rolls over to their replacement.',
    type: 'player_protection',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Goalscorer', 'Player Stats', '90 Mins Only'],
    details: { keyCondition: 'Player Substitution' }
  },
  {
    id: 'b365-winnings-boost',
    bookmakerSlug: 'bet365',
    title: 'Winnings Boost',
    shortDescription: 'Enhance your winnings for Bet Builders and selected single bets.',
    type: 'bet_boost',
    sports: ['football', 'tennis', 'multi-sport'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['3+ Selections', 'Min Odds 1/1', 'Cash Profit'],
    details: { keyCondition: 'Bet Builder' }
  },
  {
    id: 'b365-nba-early-payout',
    bookmakerSlug: 'bet365',
    title: 'NBA Early Payout Offer',
    shortDescription: 'Paid out if the team you back goes 20 points ahead.',
    type: 'early_payout',
    sports: ['basketball'],
    isActive: true,
    validUntil: '2026-06-21',
    lastVerified: '2026-01-18',
    tags: ['NBA only', 'Money Line', 'Pre-game only'],
    details: { keyCondition: '20 Points Ahead' }
  },
  {
    id: 'b365-multi-sport-acca-boost',
    bookmakerSlug: 'bet365',
    title: 'Acca Boost: Up to 100%',
    shortDescription: 'Double your winnings on accumulators across a range of sports.',
    type: 'acca_boost',
    sports: ['football', 'tennis', 'basketball', 'us-sports'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['2.5% - 100% Boost', 'Paid in Cash', 'Multiple Sports'],
    details: { maxBoost: '100%' }
  },
  {
    id: 'b365-tennis-retirement-guarantee',
    bookmakerSlug: 'bet365',
    title: 'Tennis Retirement Guarantee',
    shortDescription: 'Paid as winner if your player’s opponent retires hurt.',
    type: 'insurance',
    sports: ['tennis'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['ATP/WTA/Slams', 'Singles only', 'Bet Credits'],
    details: { keyCondition: 'Opponent Retire' }
  },
  {
    id: 'b365-best-odds-guaranteed',
    bookmakerSlug: 'bet365',
    title: 'Best Odds Guaranteed',
    shortDescription: 'Take a price and if the SP is bigger, we pay you at the bigger odds.',
    type: 'odds_guarantee',
    sports: ['horse-racing'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['UK & Irish Racing', 'From 08:00 AM', 'Fixed Price'],
    details: { keyCondition: 'Higher SP' }
  },

    {
    id: 'betfair-refer-friend',
    bookmakerSlug: 'betfair',
    title: 'Refer and Earn: £10 Cash per Friend',
    shortDescription: 'Earn £10 in cash for every friend you successfully refer.',
    type: 'refer_a_friend',
    sports: ['multi-sport'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Paid in CASH', 'Max 5 Friends', 'Debit Card Only'],
    details: { keyCondition: 'Friend stakes £10+' },
    promoPageUrl: 'https://promos.betfair.com/refer-and-earn'
  },
  {
    id: 'betfair-exchange-best-odds',
    bookmakerSlug: 'betfair',
    title: 'Exchange Best Price on Major Football',
    shortDescription: 'Betfair Exchange was best odds on major football leagues for 23/24 season.',
    type: 'odds_guarantee',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['2% Commission Included', 'PL/CL/EL/Major Leagues'],
    details: { keyCondition: 'Exchange vs Sportsbooks' }
  },

    {
    id: 'skybet-accafreeze',
    bookmakerSlug: 'sky-bet',
    title: 'Sky Bet AccaFreeze',
    shortDescription: 'Exclusive: Freeze a winning score in your 5+ leg acca mid-match. It stays won even if the team eventually loses.',
    type: 'player_protection',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Exclusive Feature', '5+ Legs', 'In-Play Control'],
    details: { keyCondition: 'Freeze 1 Winning Leg' },
    promoPageUrl: 'https://promos.skybet.com/sport/accafreeze'
  },

    {
    id: 'wh-impact-sub',
    bookmakerSlug: 'william-hill',
    title: 'Impact Sub',
    shortDescription: 'Your player-based bet remains live on the substitute who replaces them at the original price.',
    type: 'player_protection',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Premier League', 'Championship', 'Live on Subs'],
    details: { keyCondition: 'Substitution Protection' }
  },
  {
    id: 'wh-2-up',
    bookmakerSlug: 'william-hill',
    title: '2 Up',
    shortDescription: 'Get paid as a winner if your team takes a two-goal lead.',
    type: 'early_payout',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Selected Leagues', '90 Mins Market', 'Pre-match'],
    details: { keyCondition: '2 Goals Ahead' }
  },
  {
    id: 'wh-bonus-drop',
    bookmakerSlug: 'william-hill',
    title: 'The Bonus Drop',
    shortDescription: 'A free daily game where you drop a disc to win cash, free spins, or bonuses.',
    type: 'loyalty_program',
    sports: ['multi-sport'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Daily Entry', 'No Deposit Required', 'Cash Prizes'],
    details: { keyCondition: 'Free to Play' }
  },

    {
    id: 'boyle-sub-swap',
    bookmakerSlug: 'boylesports',
    title: 'Sub Swap',
    shortDescription: 'If your player is subbed off, your bet auto-switches to the sub at the same odds!',
    type: 'player_protection',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Auto-switch', 'Pre-match & In-play', 'Singles & Multis'],
    details: { keyCondition: 'Player Substitution' }
  },
  {
    id: 'boyle-early-payout-football',
    bookmakerSlug: 'boylesports',
    title: '2 Goals Ahead Early Payout',
    shortDescription: 'Get paid out as a winner if your team goes 2 goals ahead at any time.',
    type: 'early_payout',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['90 Mins Only', 'Singles & Multiples'],
    details: { keyCondition: '2 Goals Ahead' }
  },

    {
    id: 'betfred-dd-hh',
    bookmakerSlug: 'betfred',
    title: 'Double Delight & Hat-Trick Heaven',
    shortDescription: 'Boost your First Goalscorer winnings: double odds for a brace, treble odds for a hat-trick. Paid in CASH.',
    type: 'bet_boost',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Cash Payout', 'Industry Best', 'Soccer Specials'],
    details: { keyCondition: 'Multiple Goals' }
  },
  {
    id: 'betfred-acca-flex',
    bookmakerSlug: 'betfred',
    title: 'Acca Flex',
    shortDescription: 'Get up to 100% cash bonus on winners OR money back if one leg loses.',
    type: 'acca_boost',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['5+ Legs', 'Cash Bonus', 'Insurance Included'],
    details: { maxBoost: '100%' }
  },

    {
    id: 'unibet-uniboost-daily',
    bookmakerSlug: 'unibet',
    title: 'Daily Uniboost',
    shortDescription: 'Get bigger odds on any horse you choose with 3 Uniboosts every single day.',
    type: 'bet_boost',
    sports: ['horse-racing'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['3 Boosts Daily', 'Max Stake £20', 'UK & Irish Racing'],
    details: { keyCondition: 'Single Bets Only' }
  },

    {
    id: 'pp-super-sub',
    bookmakerSlug: 'paddy-power',
    title: 'Super Sub: Player Protection',
    shortDescription: "If your player is substituted, your bet doesn't die. It rolls over to the substitute at the same price.",
    type: 'player_protection',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Innovation', 'EPL/CL Markets', 'Player Stats'],
    details: { keyCondition: 'Substitute Replacement' }
  },

    {
    id: 'vb-var-payout',
    bookmakerSlug: 'virgin-bet',
    title: 'VAR Goalscorer Payout',
    shortDescription: 'The ultimate protection: if your player scores but VAR disallows the goal, Virgin Bet still pays you as a winner.',
    type: 'player_protection',
    sports: ['football'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['VAR Protection', 'Premier League', 'Goalscorer Markets'],
    details: { keyCondition: 'Disallowed Goal' }
  },

    {
    id: 'coral-pipped-post',
    bookmakerSlug: 'coral',
    title: 'Pipped at the post',
    shortDescription: 'Get paid out as a winner if your horse finishes 2nd and is beaten in a close finish!',
    type: 'player_protection',
    sports: ['horse-racing'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Selected Races', 'Close Finish Protection', 'Paid as Winner'],
    details: { keyCondition: 'Finish 2nd in Close Finish' }
  },

    {
    id: 'bv-run-for-money',
    bookmakerSlug: 'betvictor',
    title: 'Run For Your Money',
    shortDescription: 'Get a real CASH refund if your horse loses all chance at the start of a race (e.g. stays in stalls).',
    type: 'player_protection',
    sports: ['horse-racing'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['CASH Refund', 'UK & Irish Racing', 'Automatic'],
    details: { keyCondition: 'Failure to start' }
  },

    {
    id: 'betway-free-bet-club',
    bookmakerSlug: 'betway',
    title: 'Free Bet Club',
    shortDescription: 'Get £10 in Free Bets every week (2 x £5) when you stake £25 or more on multiples.',
    type: 'loyalty_program',
    sports: ['multi-sport'],
    isActive: true,
    lastVerified: '2026-01-18',
    tags: ['Weekly Reward', '3+ Selections', 'Min Odds 2/1', '£5 Sat / £5 Mon'],
    details: { keyCondition: 'Stake £25 on trebles+' }
  }
];
