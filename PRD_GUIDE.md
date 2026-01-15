# PRD_GUIDE.md

## Who This Guide Is For

**You** — an AI assistant in a chat interface (Claude, GPT, Gemini, etc.).
**Your task** — based on user's project description, create `prd.json` file.
**Output** — ready-to-use JSON file that user will save to project.

## Workflow

```
[User] → describes project in chat
    ↓
[You (AI in chat)] → generate prd.json using this guide
    ↓
[User] → saves prd.json to project + updates Project Description in CLAUDE.md
    ↓
[Claude Code] → reads CLAUDE.md for context, prd.json for tasks, implements story by story
```

**Important:** You do NOT write code. You create implementation plan that Claude Code will execute autonomously.

## Why PRD Quality Is Critical

Claude Code works autonomously — reads prd.json and implements without asking questions. If PRD is low quality:
- Claude Code will guess → errors
- Stories too large → loops and failures
- Criteria abstract → wrong implementation

Quality PRD = Claude Code executes fast, accurate, without correction iterations.

---

## Why This Matters (Statistics)

AI agents achieve only **59.9% success rate** on 10-step tasks with 5% error per step. At 20 steps — only **35.8%**. Therefore critical to:
- Break work into **small** stories (one logical element each)
- Provide **explicit context** — every assumption multiplies errors
- Write **verifiable** criteria — specific paths, components, behavior

---

## Why AI Asks Clarifying Questions

AI asks for clarification due to **context deficit**. Every ambiguity = assumption = potential error.

| Problem | Example | Solution |
|---------|---------|----------|
| Undefined structure | "Where to create component?" | Specify exact path: `src/components/Header.tsx` |
| Missing types | "What fields does Product have?" | Describe fields: `name, price, image, description` |
| Unknown conventions | "Which component to use?" | Specify: `shadcn/ui Card`, `Button variant="default"` |
| No success criteria | "When is it done?" | Add: `npm run lint passes`, `npm run build passes` |

---

## Anti-patterns — What to AVOID

❌ **Mixing multiple tasks in one story**
> "Create header with navigation, auth, and search"

✅ Split into separate stories: Header layout → Navigation → Auth buttons → Search

❌ **Abstract criteria**
> "Nice design", "Fast performance", "User-friendly"

✅ Concrete: "Uses shadcn/ui Card", "Loading spinner during request"

❌ **Large stories (multiple elements in one)**
> "Create complete authentication system"

✅ Atomic: Login form → Login API → Session management → Protected routes

❌ **Assumptions about implementation**
> "Contact form" (which fields? what validation? where to submit?)

✅ Explicit: "Fields: name, email, message. Zod validation. POST to /api/contact"

---

## Decomposition Principles

### 1. Atomicity
One story = **one logical element**: component, page, API endpoint, data file.

**Bad example:**
```
"Create e-commerce catalog with filtering, sorting, pagination and cart"
```

**Good example:**
```
Story 1: ProductCard component
Story 2: ProductGrid layout
Story 3: Category filter
Story 4: Sorting
Story 5: Pagination
Story 6: "Add to cart" button
```

Each story = 1-3 files maximum.

### 2. Sequence (from foundation to details)
```
1. Layout / page structure
2. Base UI components
3. Data / API
4. Component integration with data
5. Interactivity (forms, buttons)
6. Polish (animations, edge cases)
```

### 3. Independence
After each story the project must **build and work**. Don't leave "half-done work".

### 4. Verifiability
Each story ends with verification:
- `npm run lint passes`
- `npm run build passes`
- Visual: "component renders on page"

---

## How to Write Acceptance Criteria

### Formula for good criteria:
**[What] + [Where] + [How exactly] + [Verification]**

### Examples by type:

**Component:**
```
- Component HeroSection in src/components/HeroSection.tsx
- Props: title (string), subtitle (string), ctaText (string)
- Uses shadcn/ui Button with variant="default"
- Responsive: on mobile button width="full"
```

**Page:**
```
- Page in src/app/about/page.tsx
- Metadata: title="About Us", description="..."
- Imports and renders: Header, AboutContent, Footer
```

**Data:**
```
- Array products in src/data/products.ts
- Type Product: { id, name, price, image, category }
- Minimum 6 items for demo
```

**Form:**
```
- React Hook Form + Zod schema
- Fields: email (required, format), message (required, min 10 chars)
- Submit shows loading state
- Success: toast "Message sent"
- Error: inline validation under fields
```

**API:**
```
- POST endpoint in src/app/api/contact/route.ts
- Body: { email, message }
- Validation via Zod
- Success: 200 + { success: true }
- Error: 400 + { error: "message" }
```

---

## Prioritization

**Priority 1** — site doesn't work without this (layout, critical components)
**Priority 2** — main functionality (content, forms)
**Priority 3** — improvements (animations, additional sections)

Stories with same priority execute in `id` order.

---

## prd.json Format

Use **exact format** from `CLAUDE.md`:

```json
{
  "featureName": "Project Name",
  "branchName": "feat/project-name",
  "userStories": [
    {
      "id": 1,
      "title": "Story name",
      "acceptanceCriteria": [
        "Criterion 1",
        "Criterion 2",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 1,
      "passes": false
    }
  ]
}
```

**Fields:**
- `featureName` — human-readable project name
- `branchName` — feature identifier (for reference, work happens in main)
- `passes` — always `false`, agent sets `true` after implementation

**Always add to criteria:**
- `npm run lint passes`
- `npm run build passes`

---

## Context from CLAUDE.md

When generating, consider project tech stack:
- **Framework:** Next.js 15, App Router
- **UI:** shadcn/ui (New York style), Tailwind CSS v4
- **Structure:** `src/app/`, `src/components/`, `src/lib/`
- **Imports:** use `@/` alias
- **Components:** Server Components by default, `'use client'` only when needed

---

## Generation Example

**Request:** "Landing page for photographer: hero, portfolio gallery, contacts"

**Decomposition for prd.json:**
1. Layout + Header (priority 1) — base structure
2. Hero section (priority 1) — first impression
3. Portfolio data (priority 2) — data preparation
4. Gallery component (priority 2) — display works
5. Contact section (priority 2) — information
6. Footer (priority 3) — completion

**Result:** see full example at end of file.

---

## Generation Process (think step by step)

**Important:** Before outputting result, go through these steps. This improves quality by 30%+.

### Step 1: Analysis
- What kind of project? (landing, app, dashboard, e-commerce...)
- What are the main sections/pages?
- What components are needed?
- Are there forms, API, data?

### Step 2: Decomposition
- Break into atomic stories (one logical element each)
- Determine dependencies: what must be ready first?
- Group by logic: layout → components → data → integration

### Step 3: Prioritization
- Priority 1: site doesn't work without this
- Priority 2: main content and functionality
- Priority 3: improvements, additional features

### Step 4: Self-review
Before outputting JSON, verify:
- [ ] Each story = one logical element (1-3 files)?
- [ ] Criteria are concrete (exact paths, components, behavior)?
- [ ] No abstract criteria ("nice", "fast")?
- [ ] Each story has `npm run lint passes` + `npm run build passes` lines?
- [ ] Sequence is logical (layout before content)?
- [ ] After each story project can build?

If found a problem — fix before outputting.

---

## Output

Generate **only** ready JSON — no explanations, no markdown wrapper.
File must be ready to save as `prd.json`.

---

## Full Example

**Request:** "Landing for photographer"

```json
{
  "featureName": "Photographer Portfolio Landing",
  "branchName": "feat/photographer-landing",
  "userStories": [
    {
      "id": 1,
      "title": "Layout and Header",
      "acceptanceCriteria": [
        "Layout in src/app/layout.tsx with Header and Footer slots",
        "Header in src/components/Header.tsx",
        "Logo as text + navigation: Portfolio, Contact",
        "Mobile: burger menu with shadcn/ui Sheet",
        "Sticky header on scroll",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 1,
      "passes": false
    },
    {
      "id": 2,
      "title": "Hero section",
      "acceptanceCriteria": [
        "Component HeroSection in src/components/HeroSection.tsx",
        "Fullscreen height (min-h-screen)",
        "Background image with dark overlay",
        "Centered: H1 heading + short description + CTA button",
        "CTA: shadcn/ui Button → scroll to Portfolio",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 1,
      "passes": false
    },
    {
      "id": 3,
      "title": "Portfolio data",
      "acceptanceCriteria": [
        "File src/data/portfolio.ts",
        "Type Photo: { id: string, src: string, alt: string, category: string }",
        "Array photos with minimum 9 elements",
        "Categories: Wedding, Portrait, Nature",
        "Placeholder images via picsum.photos",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 2,
      "passes": false
    },
    {
      "id": 4,
      "title": "Portfolio Gallery",
      "acceptanceCriteria": [
        "Component PortfolioSection in src/components/PortfolioSection.tsx",
        "Component PhotoCard in src/components/PhotoCard.tsx",
        "Grid: 1 col mobile, 2 col tablet, 3 col desktop",
        "PhotoCard: image with hover overlay effect",
        "Imports data from src/data/portfolio.ts",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 2,
      "passes": false
    },
    {
      "id": 5,
      "title": "Contact section",
      "acceptanceCriteria": [
        "Component ContactSection in src/components/ContactSection.tsx",
        "Email, phone, location with Lucide icons",
        "Social links: Instagram, Facebook",
        "Simple layout without form",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 2,
      "passes": false
    },
    {
      "id": 6,
      "title": "Footer",
      "acceptanceCriteria": [
        "Component Footer in src/components/Footer.tsx",
        "Copyright with current year",
        "Minimalist design",
        "npm run lint passes",
        "npm run build passes"
      ],
      "priority": 3,
      "passes": false
    }
  ]
}
```