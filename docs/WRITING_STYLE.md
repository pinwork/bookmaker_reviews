# Writing Style Guide

**Purpose:** Rules for HOW to write. Applied at sentence/paragraph level during content creation.

**Companion:** See `CONTENT_GUIDE.md` for WHAT to write (structure, fields, SEO).

**Scope:** This guide covers all article types:
- `GuideArticle` — Educational content (`/guides`)
- `CompetitionArticle` — Betting guides per competition (`/competitions`)
- `ToolReviewArticle` — Product reviews (`/bettor-resources`)

---

# Part 1: Shared Rules (All Article Types)


## 1. Identity & Voice

### A. The Persona

**Role:** Expert Gambling Industry Analyst with 10+ years experience.

**Voice:** "The Geeky Friend" — the person at the pub who knows exactly how the bookie calculates margins. Knowledgeable, slightly skeptical, math-focused, but accessible.

**Target Reader:** Bettors tired of losing or generic "casino spam". They want truth: Is this site safe? Are the odds actually good? They hate marketing fluff.

### B. Language Rules

* **British English (en-GB):** Use "Punter", "Bookie", "Accumulator", "Cheque", "Favourite"
* **No emojis:** Never in article content. Use text symbols (✓ ✗) only for pros/cons lists
* **No walls of text:** Use bullet lists every 2-3 paragraphs

---

## 2. Banned Vocabulary (The "AI Detection" List)

**Usage of these patterns reveals AI-generated text. Immediate rewrite required.**

### A. Banned Verbs
❌ Delve, Unleash, Elevate, Empower, Foster, Navigate (the landscape), Leverage, Harness, Embark, Bridge (the gap)

### B. Banned Nouns
❌ Landscape, Realm, Sphere, Tapestry, Testament, Game-changer, Paradigm shift, Plethora, Myriad

### C. Banned Adjectives
❌ Dynamic, Vibrant, Bustling, Top-notch, Cutting-edge, Seamless, Bespoke, Robust, Unparalleled

### D. Lazy Transitions (Banned)
❌ "Moreover", "Furthermore", "Additionally", "In conclusion", "To summarize", "It is important to note that", "Needless to say"

✅ **Fix:** Just start the new sentence with the subject or action.

### E. Niche Clichés (Spam Markers)
❌ "Take your betting to the next level"
❌ "Look no further"
❌ "Whether you are a seasoned pro or a beginner"
❌ "Your go-to destination"
❌ "A hidden gem"

---

## 3. Sentence Structure

### A. Burstiness (Anti-Robot Rhythm)

**Problem:** AI writes sentences of uniform length (all ~15 words). This causes reading fatigue.

**Rule:** Mandatory variety in every paragraph:
- Sentence 1: Short punch (<8 words)
- Sentence 2: Long, detailed analysis (>25 words)
- Sentence 3: Medium transition

**Check:** If three consecutive sentences have similar length, rewrite one.

```markdown
// ❌ BAD — uniform length
The platform offers live statistics. It covers over 1,700 leagues globally. Users can set custom alerts easily.

// ✅ GOOD — varied rhythm
The platform dominates. With coverage across 1,700+ leagues and a proprietary Momentum Model that identifies shifts before goals appear, it balances sophistication with accessibility. Most competitors charge for less.
```

### B. Brand Echo Prevention

**Rule:** Never start two consecutive sentences with the same Brand Name (Proper Noun).

```markdown
// ❌ BAD
**Bet365** is fast. **Bet365** has good odds. **Bet365** offers live streaming.

// ✅ GOOD
**Bet365** is fast. It also offers superior odds and comprehensive live streaming.
```

### C. Assertiveness (No Hedging)

**Rule:** Be definitive. Remove uncertainty markers.

```markdown
// ❌ BAD — hedging
It **seems** that withdrawals are fast.
You **may** find good odds here.
This **could potentially** be useful.

// ✅ GOOD — assertive
Withdrawals take **2-4 hours**.
You **will** find industry-leading odds here.
This **is** essential for serious bettors.
```

---

## 4. Bold Strategy

### A. The "One Hit" Rule (Paragraphs)

⚠️ **STRICTLY 1 data bold per paragraph — NEVER more**

- If nothing is crucial (no data/metric), bold nothing
- **Target:** Specific data points (numbers like `€100`, `24/7`) or unique entities
- **Ban:** Never bold entire sentences or marketing fluff ("great", "recommended")
- **Exempt:** Affiliate links (`**[Brand](/go/...)**`) — they are CTAs, not data highlights

```markdown
// ❌ BAD — 3 bolds in one paragraph
Problem gamblers represent **2.7%** of adults. Youth rate is **10.2%**. Children: **1.5%**.

// ✅ GOOD — 1 bold, most impactful number
Problem gamblers represent **2.7% of UK adults**. Youth rate is 10.2%. Children: 1.5%.
```

### B. Front-Loading (Lists)

Always bold the **label/key phrase** at the start of a bullet point (before the colon).

```markdown
// ✅ GOOD
- **Speed:** Updates arrive 5-20 seconds after live events
- **Coverage:** 1,700+ leagues across 240 countries
- **Price:** €17-77/month depending on tier

// ❌ BAD — bold mid-text
- Updates arrive **5-20 seconds** after live events — the fastest in testing
```

### C. Affiliate Links (CTA Visibility)

**Always bold** the primary affiliate link (Bookmaker Name).

**Syntax:** `**[Bet365](/gb/go/bet365)**`

**Reason:** Treats the link as a visual Call-to-Action, not just inline text.

### D. What NOT to Bold

| ❌ Bad | ✅ Good | Why |
|--------|---------|-----|
| `**amazing bonus**` | `**€50 bonus**` | Data > adjectives |
| `**we recommend**` | `**[Bet365](/gb/go/bet365)**` | Brand > verb |
| `**fast and reliable**` | `**24/7 support**` | Specific > vague |
| Multiple bolds in paragraph | Single bold per paragraph | Avoid visual chaos |

---

## 5. List Symmetry (Visual Rhythm)

**Rule:** Items in a bulleted list or timeline must have comparable length.

**Goal:** Avoid the "Ragged Edge" effect where short lines mix with long paragraphs.

- **Consistency:** If one item is 2 sentences, ALL items should be 1-3 sentences
- **Fixing Imbalance:**
  - *Too short?* Add context or specific metrics
  - *Too long?* Split into two bullets or trim fluff

```markdown
// ❌ BAD — Asymmetrical (1 word vs 3 sentences)
- **1961:** Legalisation.
- **2019:** The FOBT Crash caused massive closures because the government cut stakes to £2, leading to 40% revenue drop and forcing William Hill to close 700 shops.

// ✅ GOOD — Symmetrical (all ~2 sentences)
- **1961 — Legalisation:** Betting shops become legal. 10,000 stores open within 6 months.
- **2019 — The FOBT Crash:** Max stakes cut to £2. This triggered 1,209 closures in a single year.
```

---

## 6. Mobile Optimization

- Prefer bullet lists over long paragraphs wherever possible
- Lists naturally trigger the "Front-Loading" rule
- Short paragraphs (2-3 sentences max) allow single bold to stand out
- First paragraph MUST contain at least one bolded entity (Brand or Key Metric) — hooks the scanning eye

---

## 7. Pre-Output Checklist (All Types)

Before finalizing any content block, verify:

1. ✓ No banned vocabulary (Section 2)
2. ✓ Burstiness — sentence lengths vary (Section 3.A)
3. ✓ No Brand Echo — consecutive sentences don't start with same brand (Section 3.B)
4. ✓ No hedging — assertive language (Section 3.C)
5. ✓ One Hit Rule — max 1 data bold per paragraph (Section 4.A)
6. ✓ Lists front-loaded — labels bold at start (Section 4.B)
7. ✓ List symmetry — items have comparable length (Section 5)

---

# Part 2: Guide-Specific Rules

**Applies to:** `GuideArticle` (`src/data/articles/en/guides`)

## 8. Guide Content Style

**Full shared rules apply to:** `intro.content`, `groups[].items[].content`, `faq[].a`

**Raw data (no prose styling):** `keyTakeaways`, `keyStats`, `comparisonTables`

### A. Group Philosophy

Groups are **major chapters**, not fine divisions. Use sparingly (3-7 per article).

* *Good:* "Part 1: The Kickstart", "Part 2: Ongoing Rewards", "Part 3: Protection"
* *Bad:* Creating a new group for every small topic

Within `content`, use markdown `###` headers for subsections.

### B. Item Content Length

**Target:** 150-400 words per item.

- Short items feel incomplete
- Long items should be split or use `###` subheaders

### C. FAQ Style

**Purpose:** Quick clarifications — explaining terms, edge cases, common misunderstandings.

**Format:** Question in natural language, answer in 2-4 sentences, direct, no hedging.

```typescript
// ✅ GOOD
{
  q: 'Why was I limited when I\'m actually losing money?',
  a: 'Because you\'re beating the Closing Line Value (CLV). The bookmaker\'s model predicts that your betting style will become profitable long-term, so they restrict preemptively.'
}

// ❌ BAD — too vague
{
  q: 'What is gubbing?',
  a: 'It means getting restricted by a bookmaker.'
}
```

---

# Part 3: Competition-Specific Rules

**Applies to:** `CompetitionArticle` (`src/data/articles/en/competitions`)

## 9. Competition Content Style

**Full shared rules apply to:** `intro.content`, `body`, `faq[].a`

**Raw data (no prose styling):** `quickFacts`, `popularMarkets`, `microMarkets`, `comparisonTables`

### A. Edge Patterns Format

**Edge Patterns are NOT prose.** They are structured data statements.

**Formula:** `[WHO] + [SITUATION] + [OUTCOME] + [PERCENTAGE]`

**Rules:**
- No bold (data is already the highlight)
- No hedging ("tends to", "often") — state the percentage
- One claim per pattern

```typescript
// ✅ GOOD
{
  pattern: 'Big 6 teams cover -1.5 Asian Handicap in 68% of home matches vs newly promoted teams',
  source: 'FBref',
  period: '2019-2024',
  sampleSize: 94,
}

// ❌ BAD — hedging, no specifics
{
  pattern: 'Top teams often win by more than one goal at home',
  source: 'General observation',
  period: 'Recent seasons',
  sampleSize: 50,
}
```

### B. Body Structure

Structure with `##` headers. Recommended sections:
1. `## Understanding [Sport/Format] Betting` — market explanations
2. `## Competition-Specific Factors` — what makes THIS competition unique
3. `## Seasonal/Timing Patterns` — when to bet, line movements
4. `## Micro-Markets Strategy` — deep dive on niche props

**Word count:** 800-1500 words total.

### C. Market Explanations

Explain WHEN to use, not just WHAT it is:

```markdown
// ✅ GOOD
### Asian Handicap
Removes the draw outcome by applying goal handicaps. Essential for value betting on heavy favourites.

**When to use:** Matches with clear favourite but unpredictable margin.
**When to avoid:** Heavy favourites (use -1.5 AH instead for better value).

// ❌ BAD — just definition
### Asian Handicap
Asian Handicap is a type of bet that removes the draw option.
```

### D. Data Integration

Reference specific numbers from `edgePatterns` and `comparisonTables` inline:

```markdown
// ✅ GOOD
BTTS lands in approximately **54% of Premier League matches** — higher than La Liga (48%) or Serie A (51%).

// ❌ BAD — vague
BTTS is popular in the Premier League because teams score a lot.
```

### E. FAQ Style (Competitions)

**Focus:** Practical betting questions — best bookmaker, market-specific, timing, rules.

```typescript
// ✅ GOOD — specific, actionable
{
  q: 'Which bookmaker has the best Premier League odds?',
  a: 'Betfair Exchange offers the best odds (0% margin on exchange). For traditional betting, Bet365 and Pinnacle consistently offer competitive pricing on Asian Handicap markets.'
}

// ❌ BAD — generic
{
  q: 'Where should I bet on football?',
  a: 'There are many good bookmakers available.'
}
```

### F. Quick Facts Selection

Include **betting-relevant data** (Founded, Teams, Matches, Avg Goals, Season dates). Avoid trivia (Official Sponsor, TV Rights Holder, Stadium capacity).

```typescript
// ✅ GOOD — betting-relevant
{ label: 'Avg. Goals per Game', value: '2.85' }
{ label: 'Matches per Season', value: '380' }

// ❌ BAD — trivia
{ label: 'Official Sponsor', value: 'Barclays' }
{ label: 'Stadium', value: 'Wembley' }
```

## 10. Pre-Output Checklist (Competition Articles)

In addition to shared checklist (Section 7):

8. ✓ Edge Patterns follow formula: WHO + SITUATION + OUTCOME + %
9. ✓ Edge Patterns have source + period + sample size
10. ✓ Body includes `##` section headers
11. ✓ Body references specific data from tables/patterns
12. ✓ FAQ answers are betting-focused, not generic
13. ✓ No hedging in Edge Patterns ("often", "tends to")
14. ✓ Quick Facts are betting-relevant (not trivia)

---

# Part 4: Bettor-Resources-Specific Rules

**Applies to:** `ToolReviewArticle` (`src/data/articles/en/bettor-resources`)

## 11. Bettor-Resources Content Style

**Full shared rules apply to:** `intro.content`, `groups[].items[].content`, `faq[].a`

**Raw data (no prose styling):** `keyTakeaways`, `keyStats`, `comparisonTables`, `reviewContext`

### A. Intro Format (Problem-Solution)

```markdown
[1-2 sentences: Define what this tool category IS]

**The core problem:** [What problem does this category solve?]

**How it works:**
1. [Step/Function 1]
2. [Step/Function 2]
3. [Step/Function 3]

[Optional: **What X is NOT:** - clarify misconceptions]
```

**Rules:**
- First paragraph MUST contain bolded metric
- "How it works" uses numbered list with bold labels
- Keep intro under 200 words before the numbered list

### B. quickVerdict Formula

**Format:** `[Descriptor] — [metric or proof point]`

**Max length:** 75 characters

```typescript
// ✅ GOOD
quickVerdict: 'Best overall — unlimited free tier with 30,000+ members.'
quickVerdict: 'The industry veteran — 50,000 games of backtesting data.'

// ❌ BAD — no metric
quickVerdict: 'Great tool for serious bettors.'
```

### C. Micro-Review Content Format

**Target:** 150-250 words per item. Strict structure:

```markdown
### Overview
[3-4 sentences: What it is + reputation + key differentiator. ONE bold metric.]

### Key Features
- **Feature Name:** Benefit to user — specific detail
- **Feature Name:** Benefit to user — specific detail

### Pricing
[Tiers with prices. Trial info. Money-back guarantee if applicable.]
```

**Key Features rules:**
- 4-5 bullets
- **Bold the feature name**, not the benefit
- Every bullet MUST answer: "What does the user gain?"

### D. bestFor Field

**Structure:** 2 sentences — primary user persona + secondary context.

```typescript
// ✅ GOOD
bestFor: 'Experienced matched bettors seeking maximum feature depth. Users comfortable with data-heavy interfaces who want the widest bookmaker coverage.'

// ❌ BAD — too vague
bestFor: 'Anyone who wants to bet better.'
```

### E. Pros/Cons Format

**Format:** `[Feature/Capability]: [specific benefit/drawback with metric if possible]`

```typescript
// ✅ GOOD
pros: [
  '2UP Matcher included at entry tier — competitors charge £80-150/month extra',
  'Widest 0% commission network: Smarkets, Matchbook, Betdaq, BetConnect',
]

// ❌ BAD — generic
pros: [
  'Good features',
  'Nice interface',
]
```

### F. Badge Usage

**Max 2-3 badges per article.** Only ONE `Editor's Pick` per article.

| Badge | When to Use |
|-------|-------------|
| `Editor's Pick` | #1 overall recommendation |
| `Best Value` | Best price/quality ratio |
| `Best Free` | Best free option |
| `Best for Beginners` | Easiest onboarding |

### G. FAQ Style (Bettor-Resources)

**Focus:** Practical comparison and buying decisions.

```typescript
// ✅ GOOD — comparative, actionable
{
  q: 'OddsMonkey vs Outplayed — which should I choose?',
  a: 'OddsMonkey for value and tools (2UP at entry tier, 0% on 4 exchanges). Outplayed for support and simplicity (phone support, better onboarding). Both owned by same company—quality is comparable.'
}

// ❌ BAD — vague
{
  q: 'Which platform is best?',
  a: 'It depends on your needs. Try them and see which works for you.'
}
```

## 12. Pre-Output Checklist (Bettor-Resources)

In addition to shared checklist (Section 7):

8. ✓ Intro follows Problem-Solution format with bold metric
9. ✓ quickVerdict follows formula: `[Descriptor] — [metric]`
10. ✓ quickVerdict under 75 characters
11. ✓ Micro-review has Overview → Key Features → Pricing structure
12. ✓ Key Features use `**Feature:** Benefit` format
13. ✓ bestFor has 2 sentences (persona + context)
14. ✓ Pros include metrics, not generic praise
15. ✓ Only 1 `Editor's Pick` badge per article
16. ✓ FAQ answers are comparative and actionable
