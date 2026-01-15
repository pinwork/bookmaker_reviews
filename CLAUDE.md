# CLAUDE.md

This file provides guidance to Claude (claude.ai and Claude Code) when working with code in this repository.

## Project Overview

This is a Next.js application template designed for rapid website development with AI assistance.

### Project Description

<!--
Add your project description here in free form:
- What is this project
- Target audience
- Key features and pages
- Data entities and structure
- Business logic and rules
- Any other relevant context

Example:
"Affiliate review site for bookmakers. Target: gamblers looking for best bookmaker.
Pages: Home, Reviews, Comparison, Bonuses.
Bookmaker entity: name, rating, bonus, affiliate link, pros, cons.
Monetization via affiliate links."
-->

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Runtime**: React 19
- **Database**: MongoDB (optional)

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linter
```

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Utility functions and helpers

## Import Aliases

```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

---

# 🎨 UI Development

## Design Principles

- **Minimalism**: Every element serves a function
- **Hierarchy**: Visual hierarchy through typography, spacing, contrast
- **Consistency**: Unified design language
- **Accessibility**: WCAG 2.1 AA, semantic HTML, ARIA labels
- **Responsive**: Mobile-first approach

## Tailwind CSS

- Use CSS variables from `globals.css`: `background`, `foreground`, `border`, `primary`, `muted`, `accent`, `destructive`
- Prefer rem-based spacing
- Dark mode via CSS variables

## shadcn/ui Pattern

```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ComponentProps {
  className?: string
}

export function Component({ className }: ComponentProps) {
  return (
    <Card className={cn("border-border", className)}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default" size="lg">Action</Button>
      </CardContent>
    </Card>
  )
}
```

Add components: `npx shadcn@latest add [component-name]`

---

# 🗄️ MongoDB

## Usage

```typescript
import { getDb } from '@/lib/mongodb'

const db = await getDb('yourDatabaseName')

interface User {
  _id: ObjectId
  name: string
  email: string
}

const users = await db
  .collection<User>('users')
  .find({ active: true })
  .project({ name: 1, email: 1 })
  .toArray()
```

## Best Practices

- Use projection to limit fields
- Define TypeScript interfaces
- Create indexes for queried fields
- Place `$match` early in aggregations

---

# ⚛️ React & Next.js

## Server vs Client Components

**Default to Server Components unless you need:**
- Event handlers (`onClick`, `onChange`)
- State (`useState`, `useReducer`)
- Effects (`useEffect`)
- Browser APIs (`localStorage`, `window`)

```typescript
// Server Component (default)
export default async function Page() {
  const data = await fetchData()
  return <ClientComponent data={data} />
}

// Client Component
'use client'
export function ClientComponent({ data }) {
  const [state, setState] = useState()
  // ...
}
```

---

# 🔄 Ralph Agent Mode

When running autonomously via `./scripts/ralph/ralph.sh`:

## Each Iteration

1. Read `prd.json` → find highest priority story where `passes: false`
2. Read `progress.txt` → check Codebase Patterns section first
3. Implement ONE user story
4. Run quality checks (`npm run lint`, `npm run build`)
5. If checks pass → commit (do NOT push)
6. Update `prd.json` → set `passes: true`
7. Append to `progress.txt`

## Git Rules

- **Branch:** Always work in `main`
- **Commit only:** Do NOT run `git push` — user will push manually via GitHub Desktop
- **Commit format:** `feat: Story [ID] - [Title]`

Example:
```bash
git add .
git commit -m "feat: Story 1 - Layout and Header"
```

## Progress Report Format

APPEND to `progress.txt` (never replace):

```
## [Date/Time] - [Story ID]
- What was implemented
- Files changed
- **Learnings:**
  - Patterns discovered
  - Gotchas encountered
---
```

## Codebase Patterns

Reusable patterns go to `## Codebase Patterns` at TOP of `progress.txt`:

```
## Codebase Patterns
- Use `cn()` for conditional classNames
- Always use `@/` import aliases
- shadcn/ui Button: variant="default" for primary actions
```

## Stop Condition

- If ALL stories `passes: true` → output `<promise>COMPLETE</promise>`
- If stories remain → end normally (next iteration continues)

## PRD Format

```json
{
  "featureName": "Feature Name",
  "branchName": "feat/feature-name",
  "userStories": [
    {
      "id": 1,
      "title": "Story title",
      "acceptanceCriteria": [
        "Component in src/components/Name.tsx",
        "Uses shadcn/ui Button",
        "npm run lint passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

Note: `branchName` is for reference only — all work happens in `main` branch.

## Rules

- ONE story per iteration
- ALL commits must pass quality checks
- Do NOT commit broken code
- Keep changes focused and minimal

---

# 💡 Code Quality

**ALWAYS verify before completing any task:**

```bash
npm run lint     # Fix ALL errors
npm run build    # Must succeed
```

- Proper TypeScript typing (no `any`)
- Correct React hooks usage
- Use `@/` import aliases
- Follow patterns from this file