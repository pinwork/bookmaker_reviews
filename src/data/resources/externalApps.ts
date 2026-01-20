// src/data/resources/externalApps.ts

export const TABLE_CELL_LIMITS = {
  name: 20,
  bestFor: 25,
  price: 15,
  keyFeature: 35,
} as const;

export interface ExternalAppTableData {
  bestFor: string;
  price: string;
  sports: string;
  keyFeature: string;
}

export interface ExternalAppResource {
  id: string;
  name: string;
  url: string;
  bgColor?: string;
  logo?: string;
  tableData: ExternalAppTableData;
}

function validateTableData(app: ExternalAppResource): void {
  if (process.env.NODE_ENV !== 'development') return;

  const warnings: string[] = [];

  if (app.name.length > TABLE_CELL_LIMITS.name) {
    warnings.push(`name: ${app.name.length}/${TABLE_CELL_LIMITS.name}`);
  }
  if (app.tableData.bestFor.length > TABLE_CELL_LIMITS.bestFor) {
    warnings.push(`bestFor: ${app.tableData.bestFor.length}/${TABLE_CELL_LIMITS.bestFor}`);
  }
  if (app.tableData.price.length > TABLE_CELL_LIMITS.price) {
    warnings.push(`price: ${app.tableData.price.length}/${TABLE_CELL_LIMITS.price}`);
  }
  if (app.tableData.keyFeature.length > TABLE_CELL_LIMITS.keyFeature) {
    warnings.push(`keyFeature: ${app.tableData.keyFeature.length}/${TABLE_CELL_LIMITS.keyFeature}`);
  }

  if (warnings.length > 0) {
    console.warn(`[ExternalApps] "${app.id}" exceeds cell limits: ${warnings.join(', ')}`);
  }
}

const externalAppsRegistry: ExternalAppResource[] = [
  {
    id: 'flashscore',
    name: 'Flashscore',
    url: 'https://www.flashscore.com',
    bgColor: '#000000',
    tableData: {
      bestFor: 'Live betting speed',
      price: 'Free',
      sports: '38 sports',
      keyFeature: 'Fastest updates (5-20s)',
    },
  },
  {
    id: 'sofascore',
    name: 'SofaScore',
    url: 'https://www.sofascore.com',
    bgColor: '#374DF5',
    tableData: {
      bestFor: 'Statistical research',
      price: 'Free',
      sports: '20+ sports',
      keyFeature: 'Live xG, dropping odds',
    },
  },
  {
    id: 'fotmob',
    name: 'FotMob',
    url: 'https://www.fotmob.com',
    tableData: {
      bestFor: 'Football experience',
      price: 'Free/£9.99yr',
      sports: 'Football only',
      keyFeature: 'Best UX, Apple Watch',
    },
  },
  {
    id: 'fbref',
    name: 'FBref',
    url: 'https://fbref.com',
    tableData: {
      bestFor: 'Deep statistical research',
      price: 'Free',
      sports: 'Football',
      keyFeature: 'StatsBomb data, 152 leagues',
    },
  },
  {
    id: 'footystats',
    name: 'FootyStats',
    url: 'https://footystats.org',
    bgColor: '#000000',
    tableData: {
      bestFor: 'Niche leagues',
      price: 'Free/£19.99mo',
      sports: 'Football',
      keyFeature: '1,500+ leagues, backtesting',
    },
  },
  {
    id: 'racing-post',
    name: 'Racing Post',
    url: 'https://www.racingpost.com',
    tableData: {
      bestFor: 'Horse racing',
      price: '£19.95/mo',
      sports: 'Racing',
      keyFeature: 'Industry standard',
    },
  },
  {
    id: 'timeform',
    name: 'Timeform',
    url: 'https://www.timeform.com',
    bgColor: '#000000',
    tableData: {
      bestFor: 'Professional racing',
      price: '£30/mo',
      sports: 'Racing',
      keyFeature: 'Gold-standard ratings since 1948',
    },
  },
  {
    id: 'tennis-explorer',
    name: 'Tennis Explorer',
    url: 'https://www.tennisexplorer.com',
    tableData: {
      bestFor: 'Tennis betting',
      price: 'Free',
      sports: 'Tennis',
      keyFeature: 'Betting ranking, H2H records',
    },
  },
  {
    id: 'basketball-reference',
    name: 'Basketball Reference',
    url: 'https://www.basketball-reference.com',
    tableData: {
      bestFor: 'NBA research',
      price: 'Free',
      sports: 'Basketball',
      keyFeature: 'Complete NBA stats since 1946',
    },
  },
];

export function getExternalAppById(id: string): ExternalAppResource | undefined {
  const app = externalAppsRegistry.find((app) => app.id === id);
  if (app) {
    validateTableData(app);
  }
  return app;
}

export function getAllExternalApps(): ExternalAppResource[] {
  return externalAppsRegistry;
}
