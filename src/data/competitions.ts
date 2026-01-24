// src/data/competitions.ts
// Global competitions registry - structured by betting volume within each sport
import { Competition } from '@/types';

type CompetitionEntry = Omit<Competition, 'sportSlug'>;

/**
 * isMajor criteria — RELATIVE TO EACH SPORT:
 * - TRUE: Top-tier within this sport (e.g., Grand Slams in tennis, Big 5 leagues in football)
 * - FALSE: Secondary tier within this sport (still significant, but not flagship)
 *
 * Example: Eredivisie is a major league globally, but within football it's Tier 2
 * Example: UK Championship is a Triple Crown event, so it's isMajor: true within snooker
 *
 * Order: by betting volume / prestige within that sport (1 = highest)
 */

const competitionsBySport: Record<string, CompetitionEntry[]> = {
  /**
   * FOOTBALL — 40-50% of global betting
   *
   * isMajor: true = Big 5 leagues + UCL/UEL + Major international tournaments
   * isMajor: false = Tier 2 leagues (still significant but not Big 5)
   */
  football: [
    // === TIER 1: Big 5 Leagues (isMajor: true) ===
    { id: 'pl', slug: 'premier-league', name: 'Premier League', isMajor: true, order: 1 },           // 15-16% of football betting
    { id: 'laliga', slug: 'la-liga', name: 'La Liga', isMajor: true, order: 2 },                     // 12-13%
    { id: 'seriea', slug: 'serie-a', name: 'Serie A', isMajor: true, order: 3 },                     // 5-8%
    { id: 'bundesliga', slug: 'bundesliga', name: 'Bundesliga', isMajor: true, order: 4 },           // 4-6%
    { id: 'ligue1', slug: 'ligue-1', name: 'Ligue 1', isMajor: true, order: 5 },                     // 3-5%

    // === TIER 1: European Club Competitions (isMajor: true) ===
    { id: 'ucl', slug: 'champions-league', name: 'UEFA Champions League', isMajor: true, order: 6 }, // 10-11%
    { id: 'uel', slug: 'europa-league', name: 'UEFA Europa League', isMajor: true, order: 7 },       // 4-5%

    // === TIER 1: Major International Tournaments (isMajor: true) ===
    { id: 'fifawc', slug: 'world-cup', name: 'FIFA World Cup', isMajor: true, order: 8 },
    { id: 'euro', slug: 'euros', name: 'UEFA European Championship', isMajor: true, order: 9 },
    { id: 'copaamerica', slug: 'copa-america', name: 'Copa America', isMajor: true, order: 10 },

    // === TIER 2: Secondary European Leagues (isMajor: false) ===
    { id: 'eredivisie', slug: 'eredivisie', name: 'Eredivisie', isMajor: false, order: 11 },         // Netherlands — Ajax, PSV, Feyenoord
    { id: 'primeiraliga', slug: 'primeira-liga', name: 'Primeira Liga', isMajor: false, order: 12 }, // Portugal — Porto, Benfica, Sporting
    { id: 'superlig', slug: 'super-lig', name: 'Turkish Super Lig', isMajor: false, order: 13 },     // Turkey — Galatasaray, Fenerbahce

    // === TIER 2: Americas Top Leagues (isMajor: false) ===
    { id: 'brasileirao', slug: 'brasileirao', name: 'Campeonato Brasileiro Serie A', isMajor: false, order: 14 }, // Brazil — largest outside Europe
    { id: 'argentina', slug: 'liga-profesional', name: 'Liga Profesional Argentina', isMajor: false, order: 15 }, // Argentina — 3.6% even in Europe!

    // === TIER 2: Other Competitions (isMajor: false) ===
    { id: 'uecl', slug: 'conference-league', name: 'UEFA Conference League', isMajor: false, order: 16 },
    { id: 'afcon', slug: 'africa-cup-of-nations', name: 'Africa Cup of Nations', isMajor: false, order: 17 },
    { id: 'facup', slug: 'fa-cup', name: 'FA Cup', isMajor: false, order: 18 },
  ],

  /**
   * HORSE RACING
   *
   * isMajor: true = Flagship festivals/races with massive betting volume
   * isMajor: false = Prestigious but smaller events
   */
  'horse-racing': [
    { id: 'cheltenham', slug: 'cheltenham-festival', name: 'Cheltenham Festival', isMajor: true, order: 1 },
    { id: 'grandnational', slug: 'grand-national', name: 'Grand National', isMajor: true, order: 2 },
    { id: 'royalascot', slug: 'royal-ascot', name: 'Royal Ascot', isMajor: true, order: 3 },
    { id: 'derby', slug: 'epsom-derby', name: 'Epsom Derby', isMajor: true, order: 4 },
    { id: 'kentucky', slug: 'kentucky-derby', name: 'Kentucky Derby', isMajor: true, order: 5 },
    { id: 'melbournecup', slug: 'melbourne-cup', name: 'Melbourne Cup', isMajor: true, order: 6 },
    { id: 'breederscup', slug: 'breeders-cup', name: 'Breeders\' Cup', isMajor: true, order: 7 },
  ],

  /**
   * TENNIS
   *
   * isMajor: true = Grand Slams + ATP/WTA Finals (season-ending championships)
   * isMajor: false = Masters 1000 events (significant but tier below Slams)
   */
  tennis: [
    // Grand Slams (isMajor: true)
    { id: 'wimbledon', slug: 'wimbledon', name: 'Wimbledon', isMajor: true, order: 1 },
    { id: 'ausopen', slug: 'australian-open', name: 'Australian Open', isMajor: true, order: 2 },
    { id: 'usopen', slug: 'us-open-tennis', name: 'US Open', isMajor: true, order: 3 },
    { id: 'rolandgarros', slug: 'french-open', name: 'French Open (Roland Garros)', isMajor: true, order: 4 },

    // Season Finals (isMajor: true — year-end championships)
    { id: 'atpfinals', slug: 'atp-finals', name: 'ATP Finals', isMajor: true, order: 5 },
    { id: 'wtafinals', slug: 'wta-finals', name: 'WTA Finals', isMajor: true, order: 6 },

    // Masters 1000 (isMajor: false — prestigious but below Slams)
    { id: 'indianwells', slug: 'indian-wells', name: 'Indian Wells Masters', isMajor: false, order: 7 },
    { id: 'miamimasters', slug: 'miami-open', name: 'Miami Open', isMajor: false, order: 8 },
  ],

  /**
   * CRICKET
   *
   * isMajor: true = ICC tournaments + IPL + The Ashes (iconic series)
   * isMajor: false = Other T20 franchise leagues
   */
  cricket: [
    { id: 'ipl', slug: 'ipl', name: 'Indian Premier League', isMajor: true, order: 1 },
    { id: 'cwc', slug: 'cricket-world-cup', name: 'ICC Cricket World Cup', isMajor: true, order: 2 },
    { id: 't20wc', slug: 't20-world-cup', name: 'ICC T20 World Cup', isMajor: true, order: 3 },
    { id: 'ashes', slug: 'the-ashes', name: 'The Ashes', isMajor: true, order: 4 },

    // Other T20 Leagues (isMajor: false)
    { id: 'bbl', slug: 'big-bash-league', name: 'Big Bash League', isMajor: false, order: 5 },
    { id: 'thehundred', slug: 'the-hundred', name: 'The Hundred', isMajor: false, order: 6 },
  ],

  /**
   * GOLF
   *
   * isMajor: true = The 4 Majors + Ryder Cup
   * isMajor: false = Other significant events
   */
  golf: [
    { id: 'masters', slug: 'the-masters', name: 'The Masters', isMajor: true, order: 1 },
    { id: 'theopen', slug: 'the-open', name: 'The Open Championship', isMajor: true, order: 2 },
    { id: 'uspga', slug: 'pga-championship', name: 'PGA Championship', isMajor: true, order: 3 },
    { id: 'usgopen', slug: 'us-open-golf', name: 'US Open Golf', isMajor: true, order: 4 },
    { id: 'rydercup', slug: 'ryder-cup', name: 'Ryder Cup', isMajor: true, order: 5 },

    { id: 'players', slug: 'players-championship', name: 'The Players Championship', isMajor: false, order: 6 },
  ],

  /**
   * BOXING
   *
   * isMajor: true = Heavyweight (flagship division)
   * Note: Single entry as boxing is event-driven, not league-based
   */
  boxing: [
    { id: 'heavyweight', slug: 'heavyweight-boxing', name: 'Heavyweight Boxing', isMajor: true, order: 1 },
  ],

  /**
   * DARTS
   *
   * isMajor: true = PDC World Championship + Premier League (season-long high-profile)
   * isMajor: false = Other major PDC events
   */
  darts: [
    { id: 'pdcwc', slug: 'pdc-world-championship', name: 'PDC World Championship', isMajor: true, order: 1 },
    { id: 'pldarts', slug: 'premier-league-darts', name: 'Premier League Darts', isMajor: true, order: 2 },
    { id: 'worldmatchplay', slug: 'world-matchplay', name: 'World Matchplay', isMajor: false, order: 3 },
  ],

  /**
   * SNOOKER
   *
   * isMajor: true = Triple Crown (all three are flagship events within snooker)
   */
  snooker: [
    { id: 'wsc', slug: 'world-snooker-championship', name: 'World Snooker Championship', isMajor: true, order: 1 },
    { id: 'masterssn', slug: 'masters-snooker', name: 'The Masters', isMajor: true, order: 2 },
    { id: 'ukchamp', slug: 'uk-championship-snooker', name: 'UK Championship', isMajor: true, order: 3 },
  ],

  /**
   * RUGBY
   *
   * isMajor: true = World Cup + Six Nations (the pinnacle events)
   * isMajor: false = Club competitions
   */
  rugby: [
    { id: 'rwc', slug: 'rugby-world-cup', name: 'Rugby World Cup', isMajor: true, order: 1 },
    { id: 'sixnations', slug: 'six-nations', name: 'Six Nations', isMajor: true, order: 2 },
    { id: 'championscup', slug: 'champions-cup', name: 'Champions Cup', isMajor: false, order: 3 },
  ],

  /**
   * AMERICAN FOOTBALL
   *
   * isMajor: true = NFL + Super Bowl + College Football (massive US markets)
   */
  'american-football': [
    { id: 'nfl', slug: 'nfl', name: 'NFL', isMajor: true, order: 1 },
    { id: 'superbowl', slug: 'super-bowl', name: 'Super Bowl', isMajor: true, order: 2 },
    { id: 'ncaaf', slug: 'college-football', name: 'College Football (NCAAF)', isMajor: true, order: 3 },
    { id: 'cfp', slug: 'college-football-playoff', name: 'College Football Playoff', isMajor: true, order: 4 },
  ],

  /**
   * BASKETBALL
   *
   * isMajor: true = NBA + March Madness (dominant markets)
   * isMajor: false = Secondary leagues/events
   */
  basketball: [
    { id: 'nba', slug: 'nba', name: 'NBA', isMajor: true, order: 1 },
    { id: 'nbafinals', slug: 'nba-finals', name: 'NBA Finals', isMajor: true, order: 2 },
    { id: 'ncaa', slug: 'march-madness', name: 'NCAA March Madness', isMajor: true, order: 3 },
    { id: 'euroleague', slug: 'euroleague', name: 'EuroLeague', isMajor: false, order: 4 },
    { id: 'wnba', slug: 'wnba', name: 'WNBA', isMajor: false, order: 5 },
  ],

  /**
   * BASEBALL
   *
   * isMajor: true = MLB + World Series (the only major baseball competitions globally)
   */
  baseball: [
    { id: 'mlb', slug: 'mlb', name: 'MLB', isMajor: true, order: 1 },
    { id: 'worldseries', slug: 'world-series', name: 'World Series', isMajor: true, order: 2 },
  ],

  /**
   * ICE HOCKEY
   *
   * isMajor: true = NHL + Stanley Cup (dominant globally)
   */
  'ice-hockey': [
    { id: 'nhl', slug: 'nhl', name: 'NHL', isMajor: true, order: 1 },
    { id: 'stanleycup', slug: 'stanley-cup', name: 'Stanley Cup', isMajor: true, order: 2 },
  ],

  /**
   * FORMULA 1
   *
   * isMajor: true = World Championship (the only F1 competition)
   */
  'formula-1': [
    { id: 'f1wc', slug: 'f1-world-championship', name: 'F1 World Championship', isMajor: true, order: 1 },
  ],

  /**
   * MMA
   *
   * isMajor: true = UFC (dominant organization, 90%+ of MMA betting)
   */
  mma: [
    { id: 'ufc', slug: 'ufc', name: 'UFC', isMajor: true, order: 1 },
  ],

  /**
   * ESPORTS
   *
   * isMajor: true = Flagship world championships for top games
   * isMajor: false = Secondary events
   *
   * Note: CS2 = 57-64% of esports betting, so it's order: 1
   */
  esports: [
    { id: 'csmajor', slug: 'cs2-major', name: 'CS2 Major Championships', isMajor: true, order: 1 },
    { id: 'lolworlds', slug: 'league-of-legends-worlds', name: 'League of Legends World Championship', isMajor: true, order: 2 },
    { id: 'ti', slug: 'the-international', name: 'The International (Dota 2)', isMajor: true, order: 3 },
    { id: 'valorantchamps', slug: 'valorant-champions', name: 'Valorant Champions', isMajor: false, order: 4 },
  ],
};

// ============================================================================
// API Functions
// ============================================================================

const getAllCompetitionsFlat = (): Competition[] => {
  return Object.entries(competitionsBySport).flatMap(([sportSlug, comps]) =>
    comps.map(c => ({ ...c, sportSlug }))
  );
};

let cachedCompetitions: Competition[] | null = null;

export const getCompetitions = (): Competition[] => {
  if (!cachedCompetitions) {
    cachedCompetitions = getAllCompetitionsFlat();
  }
  return cachedCompetitions;
};

export const getCompetitionById = (id: string): Competition | undefined => {
  return getCompetitions().find(c => c.id === id);
};

export const getCompetitionBySlug = (slug: string): Competition | undefined => {
  return getCompetitions().find(c => c.slug === slug);
};

export const getCompetitionsBySport = (sportSlug: string): Competition[] => {
  const comps = competitionsBySport[sportSlug] ?? [];
  return comps.map(c => ({ ...c, sportSlug }));
};

export const getMajorCompetitions = (): Competition[] => {
  return getCompetitions().filter(c => c.isMajor);
};

export const getMajorCompetitionsBySport = (sportSlug: string): Competition[] => {
  return getCompetitionsBySport(sportSlug).filter(c => c.isMajor);
};

export const getSportsWithCompetitions = (): string[] => {
  return Object.keys(competitionsBySport);
};
