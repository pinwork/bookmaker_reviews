// src/data/competitions.ts
// Global competitions registry - MAJOR events only (grouped by sport)
import { Competition } from '@/types';

type CompetitionEntry = Omit<Competition, 'sportSlug'>;

// Major competitions grouped by sport (sportSlug is the key)
// Slugs follow international conventions: lowercase, hyphenated, API/hashtag friendly
const competitionsBySport: Record<string, CompetitionEntry[]> = {
  football: [
    { id: 'pl', slug: 'premier-league', name: 'Premier League', isMajor: true, order: 1 },
    { id: 'ucl', slug: 'champions-league', name: 'UEFA Champions League', isMajor: true, order: 2 },
    { id: 'laliga', slug: 'la-liga', name: 'La Liga', isMajor: true, order: 3 },
    { id: 'bundesliga', slug: 'bundesliga', name: 'Bundesliga', isMajor: true, order: 4 },
    { id: 'seriea', slug: 'serie-a', name: 'Serie A', isMajor: true, order: 5 },
    { id: 'ligue1', slug: 'ligue-1', name: 'Ligue 1', isMajor: true, order: 6 },
    { id: 'facup', slug: 'fa-cup', name: 'FA Cup', isMajor: true, order: 7 },
    { id: 'fifawc', slug: 'world-cup', name: 'FIFA World Cup', isMajor: true, order: 8 },
    { id: 'euro', slug: 'euros', name: 'UEFA European Championship', isMajor: true, order: 9 },
  ],

  'horse-racing': [
    { id: 'cheltenham', slug: 'cheltenham-festival', name: 'Cheltenham Festival', isMajor: true, order: 1 },
    { id: 'grandnational', slug: 'grand-national', name: 'Grand National', isMajor: true, order: 2 },
    { id: 'royalascot', slug: 'royal-ascot', name: 'Royal Ascot', isMajor: true, order: 3 },
    { id: 'derby', slug: 'epsom-derby', name: 'Epsom Derby', isMajor: true, order: 4 },
    { id: 'kentucky', slug: 'kentucky-derby', name: 'Kentucky Derby', isMajor: true, order: 5 },
  ],

  tennis: [
    { id: 'wimbledon', slug: 'wimbledon', name: 'Wimbledon', isMajor: true, order: 1 },
    { id: 'ausopen', slug: 'australian-open', name: 'Australian Open', isMajor: true, order: 2 },
    { id: 'rolandgarros', slug: 'french-open', name: 'French Open (Roland Garros)', isMajor: true, order: 3 },
    { id: 'usopen', slug: 'us-open-tennis', name: 'US Open', isMajor: true, order: 4 },
  ],

  cricket: [
    { id: 'ashes', slug: 'the-ashes', name: 'The Ashes', isMajor: true, order: 1 },
    { id: 'cwc', slug: 'cricket-world-cup', name: 'ICC Cricket World Cup', isMajor: true, order: 2 },
    { id: 't20wc', slug: 't20-world-cup', name: 'ICC T20 World Cup', isMajor: true, order: 3 },
    { id: 'ipl', slug: 'ipl', name: 'Indian Premier League', isMajor: true, order: 4 },
  ],

  golf: [
    { id: 'masters', slug: 'the-masters', name: 'The Masters', isMajor: true, order: 1 },
    { id: 'theopen', slug: 'the-open', name: 'The Open Championship', isMajor: true, order: 2 },
    { id: 'uspga', slug: 'pga-championship', name: 'PGA Championship', isMajor: true, order: 3 },
    { id: 'usgopen', slug: 'us-open-golf', name: 'US Open Golf', isMajor: true, order: 4 },
    { id: 'rydercup', slug: 'ryder-cup', name: 'Ryder Cup', isMajor: true, order: 5 },
  ],

  boxing: [
    { id: 'heavyweight', slug: 'heavyweight-boxing', name: 'Heavyweight Boxing', isMajor: true, order: 1 },
  ],

  darts: [
    { id: 'pdcwc', slug: 'pdc-world-championship', name: 'PDC World Championship', isMajor: true, order: 1 },
    { id: 'pldarts', slug: 'premier-league-darts', name: 'Premier League Darts', isMajor: true, order: 2 },
  ],

  snooker: [
    { id: 'wsc', slug: 'world-snooker-championship', name: 'World Snooker Championship', isMajor: true, order: 1 },
    { id: 'masterssn', slug: 'masters-snooker', name: 'The Masters', isMajor: true, order: 2 },
    { id: 'ukchamp', slug: 'uk-championship-snooker', name: 'UK Championship', isMajor: true, order: 3 },
  ],

  rugby: [
    { id: 'sixnations', slug: 'six-nations', name: 'Six Nations', isMajor: true, order: 1 },
    { id: 'rwc', slug: 'rugby-world-cup', name: 'Rugby World Cup', isMajor: true, order: 2 },
  ],

  'american-football': [
    { id: 'nfl', slug: 'nfl', name: 'NFL', isMajor: true, order: 1 },
    { id: 'superbowl', slug: 'super-bowl', name: 'Super Bowl', isMajor: true, order: 2 },
  ],

  basketball: [
    { id: 'nba', slug: 'nba', name: 'NBA', isMajor: true, order: 1 },
    { id: 'nbafinals', slug: 'nba-finals', name: 'NBA Finals', isMajor: true, order: 2 },
    { id: 'ncaa', slug: 'march-madness', name: 'NCAA March Madness', isMajor: true, order: 3 },
    { id: 'euroleague', slug: 'euroleague', name: 'EuroLeague', isMajor: true, order: 4 },
  ],

  baseball: [
    { id: 'mlb', slug: 'mlb', name: 'MLB', isMajor: true, order: 1 },
    { id: 'worldseries', slug: 'world-series', name: 'World Series', isMajor: true, order: 2 },
  ],

  'ice-hockey': [
    { id: 'nhl', slug: 'nhl', name: 'NHL', isMajor: true, order: 1 },
    { id: 'stanleycup', slug: 'stanley-cup', name: 'Stanley Cup', isMajor: true, order: 2 },
  ],

  'formula-1': [
    { id: 'f1wc', slug: 'f1-world-championship', name: 'F1 World Championship', isMajor: true, order: 1 },
  ],

  mma: [
    { id: 'ufc', slug: 'ufc', name: 'UFC', isMajor: true, order: 1 },
  ],

  esports: [
    { id: 'lolworlds', slug: 'league-of-legends-worlds', name: 'League of Legends World Championship', isMajor: true, order: 1 },
    { id: 'csmajor', slug: 'cs2-major', name: 'CS2 Major Championships', isMajor: true, order: 2 },
    { id: 'ti', slug: 'the-international', name: 'The International (Dota 2)', isMajor: true, order: 3 },
    { id: 'valorantchamps', slug: 'valorant-champions', name: 'Valorant Champions', isMajor: true, order: 4 },
  ],
};

// Flatten all competitions with sportSlug added
const getAllCompetitionsFlat = (): Competition[] => {
  return Object.entries(competitionsBySport).flatMap(([sportSlug, comps]) =>
    comps.map(c => ({ ...c, sportSlug }))
  );
};

// Cached flat list
let cachedCompetitions: Competition[] | null = null;

// API Functions
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

// Get sports that have competitions
export const getSportsWithCompetitions = (): string[] => {
  return Object.keys(competitionsBySport);
};
