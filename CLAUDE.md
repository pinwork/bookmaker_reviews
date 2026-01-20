# CLAUDE.md

This file provides guidance to Claude when working with code in this repository.

## Project Overview

FreeBetGeek — Multi-regional betting affiliate platform. Currently serving GB (United Kingdom) and IE (Ireland) markets, with architecture designed for expansion to additional European markets. Content-focused affiliate site for sports bettors seeking bookmaker reviews, welcome bonuses, and betting guides.

**What:** Affiliate review site for UKGC and Irish Revenue licensed bookmakers. Monetization via affiliate commissions when users sign up through our links.

**Target Audience:** Sports bettors (18+) in GB and IE regions.

**Business Goal:** Get approved by bookmaker affiliate programs by presenting a professional, active-looking site with quality content and proper regional compliance messaging.

**Design Philosophy:**
- Mobile-first, clean, minimal design
- Content-heavy, feature-light
- Trust signals throughout (18+, BeGambleAware, licenses)

---

## Tech Stack

- **Framework**: Next.js 15.5 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Runtime**: React 19

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run lint     # Run linter
```

---

## Project Structure

### Routing
- `src/app/[region]/` - All user-facing pages with dynamic region routing (gb, ie)
- `src/app/api/` - API routes (if needed)

### Data Layer (Inherit & Transform Architecture)
- `src/data/index.ts` - **Public API** (components must import from here only)
- `src/data/regions/gb/en/` - **Master Data** (Single Source of Truth)
- `src/data/regions/ie/en/` - Ireland overrides (inherits GB via `adaptObjectToRegion()`)
- `src/data/bookmakers.ts` - Bookmaker assembly logic
- `src/data/welcomeOffers.ts` - Offer validation and filtering
- `src/data/cache.ts` - In-memory caching system

### Types
- `src/types/` - TypeScript types and Zod schemas (read types from here, not from CLAUDE.md)

### Components
- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components

### Utilities
- `src/utils/localization.ts` - Regional text adaptation (£→€, UK→Ireland)
- `src/utils/seo.ts` - Schema.org JSON-LD generators
- `src/lib/utils.ts` - cn() helper for classNames

---

## Data Access Rules

**CRITICAL:** Components must **only** import data through the public API:

```typescript
// ✅ Correct - Public API
import { getActiveBookmakers, getBestValueOffers } from '@/data'

// ❌ Wrong - Direct imports forbidden
import { bookmakers } from '@/data/bookmakers'
import { welcomeOffers } from '@/data/regions/gb/en/welcomeOffers'
```

**Regional Data Flow:**
1. GB (`src/data/regions/gb/en/`) is Master Data
2. Other regions (IE) inherit via `adaptObjectToRegion()` utility
3. All data functions accept `region` parameter (defaults to 'gb')

---

## UI Development

### shadcn/ui Pattern

```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Component({ className }: { className?: string }) {
  return (
    <Card className={cn("border-border", className)}>
      <CardContent>
        <Button variant="default" size="lg">Action</Button>
      </CardContent>
    </Card>
  )
}
```

Add shadcn components: `npx shadcn@latest add [component-name]`

### Server vs Client Components

Default to Server Components unless you need:
- Event handlers (`onClick`, `onChange`)
- State (`useState`, `useReducer`)
- Browser APIs (`localStorage`, `window`)

---

## Codebase Patterns

- Use `cn()` for conditional classNames
- Always use `@/` import aliases
- Articles stored in `src/data/regions/[region]/en/articles/`
- Use `git mv` to rename folders to preserve git history

**Articles:** See `docs/CONTENT_GUIDE.md` for article structure, collections, SEO requirements.

---

## PRD-Driven Development

Коли в кореневій папці є `prd.json`, працюю в режимі PRD:

### Workflow

1. Читаю `prd.json` → знаходжу story з найвищим пріоритетом де `passes: false`
2. Реалізую **ОДНУ** story
3. Запускаю `npm run lint` і `npm run build`
4. Якщо passed → commit: `feat: Story [ID] - [Title]`
5. Оновлюю `prd.json`: `passes: true`, `completedAt`, `filesChanged`
6. Повторюю кроки 1-5 поки всі stories не `passes: true`
7. **Завершення PRD (ОБОВ'ЯЗКОВО):**
   - Додаю `postFeatureReview` в prd.json
   - Переміщую: `mv prd.json docs/prd-archive/YYYY-MM-DD-[feature-name].json`
   - Commit: `chore: archive PRD - [featureName]`

### PRD формат

```json
{
  "featureName": "Feature Name",
  "userStories": [
    {
      "id": 1,
      "title": "Story title",
      "acceptanceCriteria": ["...", "npm run lint passes"],
      "priority": 1,
      "passes": false,
      "completedAt": null,
      "filesChanged": []
    }
  ],
  "postFeatureReview": null
}
```

### postFeatureReview

```json
"postFeatureReview": {
  "summary": "Що реалізовано в цілому",
  "impact": "Які частини проекту зачепило",
  "issues": "Можливі проблеми",
  "recommendations": "Пропозиції по покращенню"
}
```

---

## Code Quality

**ALWAYS verify before completing any task:**

```bash
npm run lint     # Fix ALL errors
npm run build    # Must succeed
```

- Proper TypeScript typing (no `any`)
- Use `@/` import aliases
- Read existing types from `src/types/`, not from documentation
