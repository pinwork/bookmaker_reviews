# Guides Workflow

## Overview

Процес створення освітніх статей для `/guides/`.

**Мета:** Освітній контент про бетінг — статистика, бонуси, стратегії, регуляції.

**Data Pack призначення:** Передати Claude Code структуровану інформацію для написання статті, яка:
- Навчає і пояснює (не продає)
- Містить конкретні факти, цифри, приклади
- Базується на достовірних джерелах
- Актуальна (дати, закони, ціни перевірені)

**Результат:** Data Pack → Claude Code → готова стаття `.ts`

**Етапи:**
1. **Discovery** — зрозуміти тему через спілкування з юзером
2. **Research Prompt** — підготувати промпт для глибокого ресерчу
3. **Consolidation** — об'єднати 2-3 ресерчі в єдиний data pack
4. **Handoff** — передати data pack Claude Code

---

## Guide Types

Різні типи guides потребують різного підходу до research:

| Тип | Фокус | Джерела | Приклад |
|-----|-------|---------|---------|
| **Industry Report** | Статистика, тренди, регуляції | UKGC, GRAI, ESRI, news | "Ireland Betting Market 2026" |
| **Bonus Guide** | Типи бонусів, T&C, стратегії | Bookmaker sites, terms | "Ultimate Bonus Guide UK" |
| **How-To Guide** | Пояснення механік, стратегії | Educational, examples | "How Asian Handicaps Work" |
| **Responsible Gambling** | Ресурси, статистика, підтримка | NHS, HSE, charities | "RG Guide Ireland" |

---

## Phase 1: Discovery

**Формат:** Вільне спілкування з юзером.

**Мета:** Повністю зрозуміти тему перед генерацією Research Prompt.

### Що з'ясувати:

1. **Яка тема?**
   - Конкретна назва статті
   - Який тип guide? (Industry Report / Bonus / How-To / RG)

2. **Scope та аудиторія:**
   - Для новачків чи досвідчених?
   - Який регіон? (GB / IE / universal)
   - Які підтеми включити / виключити?

3. **Первинний пошук** (агент робить сам):
   - Що вже відомо по темі?
   - Які ключові питання readers матимуть?
   - Які конкуренти вже писали про це?

4. **Валідація з юзером:**
   - Показати запространений scope
   - Узгодити структуру (groups)
   - Отримати специфічні вимоги

**Результат:** Агент готовий генерувати Research Prompt.

---

## Phase 2: Research Prompt

**Мета:** Створити промпт який дасть максимум корисного контенту від інших AI агентів.

**Принципи:**
- ✅ Чітко пояснити тему і scope
- ✅ Вказати що шукати (статистика, приклади, закони)
- ✅ Дати структуру для відповіді
- ✅ Вказати пріоритетні джерела
- ❌ Не просити "написати статтю" — тільки зібрати факти

---

### Research Prompt Template

```markdown
# Research Task: [TOPIC NAME]

## Context: What This Article Is About

**Topic:** [Назва теми]

**Type:** [Industry Report / Bonus Guide / How-To / Responsible Gambling]

**Definition:** [2-3 речення — що це, для кого, яку проблему вирішує]

**Region Focus:** [GB / IE / Both]

**Target Audience:** [Новачки / Досвідчені / Всі]

---

## Scope

**INCLUDE in research:**
- ✅ [Підтема 1]
- ✅ [Підтема 2]
- ✅ [Підтема 3]

**EXCLUDE from research:**
- ❌ [Що НЕ входить]
- ❌ [Що НЕ входить]

---

## Information To Find

### Statistics & Numbers
[Які конкретні цифри потрібні]
- Market size / spend
- User demographics
- Growth trends
- Regulatory data

### Key Concepts To Explain
[Які концепти потребують пояснення]
- Term 1: definition + example
- Term 2: definition + example

### Real Examples
[Конкретні приклади для ілюстрації]
- Bookmaker examples (named, not generic)
- Case studies
- Before/after scenarios

### Regulations & Legal
[Якщо релевантно]
- Current laws
- Recent changes
- Upcoming changes

### Timeline / History
[Якщо релевантно]
- Key dates
- Milestones
- Evolution of topic

---

## Data Template

### Section: [Topic Area 1]

**Key Statistics:**
| Metric | Value | Source | Year |
|--------|-------|--------|------|

**Key Facts:**
- Fact 1 (with source)
- Fact 2 (with source)

**Examples:**
- [Bookmaker]: [Specific example with numbers]

---

### Section: [Topic Area 2]

[Same structure...]

---

## Comparison Table Data

If comparing items (bookmakers, bonus types, tools), collect:

| Item | [Criterion 1] | [Criterion 2] | [Criterion 3] |
|------|---------------|---------------|---------------|

---

## FAQ Candidates

What questions would a reader have AFTER reading about this topic?

1. [Question about edge case or exception]
2. [Question comparing options]
3. [Question about "what if" scenarios]
4. [Skeptical question]

---

## Source Requirements

**Priority sources for this topic:**

✅ HIGH VALUE:
- [Specific source type for this topic]
- [Specific source type]

⚠️ USE WITH CAUTION:
- [Source type to verify]

❌ AVOID:
- [Unreliable source type]
```

---

### Research Prompt by Guide Type

#### Industry Report — додаткові секції:

```markdown
## Regulatory Bodies
- Regulator name, role, recent actions
- Fines issued (amounts, reasons)
- Upcoming regulatory changes

## Market Players
- Major operators and market share
- Recent M&A activity
- New entrants

## Problem Gambling Data
- Prevalence rates
- Demographics affected
- Support services available
```

#### Bonus Guide — додаткові секції:

```markdown
## Bonus Types To Cover
For each bonus type:
- How it works (mechanics)
- Typical terms (wagering, min odds, expiry)
- Real example from named bookmaker
- Pros/cons for punter

## Terms & Conditions Patterns
- Common restrictions
- Red flags to watch
- Fair vs unfair terms

## Current Offers
- Best current examples (verify dates)
- How offers compare
```

#### How-To Guide — додаткові секції:

```markdown
## Concept Explanation
- Simple definition
- Why it matters for betting
- Common misconceptions

## Step-by-Step
- Numbered steps
- Screenshots/examples if available
- Common mistakes

## Practical Examples
- Worked example with real odds
- Different scenarios
- When to use / not use
```

#### Responsible Gambling — додаткові секції:

```markdown
## Support Services
- Organization name, contact, services
- Eligibility (region, language)
- How to access

## Warning Signs
- Behavioral indicators
- Self-assessment questions

## Protection Tools
- What's available (deposit limits, self-exclusion)
- How to activate
- Cooling-off periods
```

---

## Phase 3: Consolidation

**Вхід:** 2-3 ресерчі від різних AI агентів.

### 3.1 Fact Verification

Перехресне порівняння фактів:
- Які цифри співпадають? (надійні)
- Які відрізняються? (перевірити першоджерело)
- Які факти тільки в одному ресерчі? (підтвердити)

### 3.2 Source Attribution

Для кожного факту визначити:
- Яке першоджерело?
- Якого року дані?
- Чи потребує посилання в статті?

### 3.3 Gap Analysis

Що бракує після ресерчів:
- Які питання залишились без відповіді?
- Де потрібні конкретніші цифри?
- Чи потрібен додатковий targeted research?

### 3.4 Structure Decision

На базі зібраних даних визначити:
- **Groups (chapters):** 3-7 логічних розділів
- **Items per group:** Які підтеми в кожен розділ
- **comparisonTables:** Які порівняння візуалізувати
- **keyStats:** Де є числа для виділення

### 3.5 FAQ Selection

Обрати 3-5 найцінніших питань:
- Не дублюють основний контент
- Відповідають на "а що якщо..."
- Прояснюють edge cases

---

## Source Guidelines

### ✅ HIGH VALUE Sources

**For Industry Data:**
- UKGC (UK Gambling Commission) — statistics, reports
- GRAI (Gambling Regulatory Authority of Ireland)
- ESRI (Economic and Social Research Institute)
- Gambling Commission annual reports

**For Market Data:**
- Company annual reports (Flutter, Entain, Evoke)
- Industry publications (EGR, SBC News, iGB)
- Financial news (Reuters, Bloomberg for M&A)

**For Bookmaker Info:**
- Official bookmaker websites (terms, offers)
- Regulatory license lookups

**For Responsible Gambling:**
- NHS / HSE official resources
- GambleAware, GamCare, Extern
- Academic studies (peer-reviewed)

### ⚠️ USE WITH CAUTION

- Affiliate review sites (may be outdated or biased)
- Wikipedia (verify with primary source)
- News articles (check date, may be old)

### ❌ AVOID

- Forum posts without verification
- Marketing materials as sole source
- Undated statistics
- "According to studies" without naming study

---

## Phase 4: Data Pack Format

Фінальний формат для передачі Claude Code.

---

### Article Metadata

```
Topic: [Full article title]
Slug: [url-friendly-slug]
Type: [Industry Report / Bonus Guide / How-To / RG]
Region: [gb / ie]
Target audience: [Who reads this]

Meta Title: [SEO title]
Meta Description: [SEO description]
```

---

### Intro Section

```
Title: [Intro section title — sets the hook]

Content:
[2-4 paragraphs]
- Opening hook (surprising stat or statement)
- What this article covers
- Why it matters now
- Key takeaway upfront
```

---

### Comparison Tables

```
Table ID: [unique-id]
Title: [Table heading]
Headers: [Col1, Col2, Col3, Col4] (max 4)

Rows:
| [Item] | [Value] | [Value] | [Value] |
| [Item] | [Value] | [Value] | [Value] |

Source: [Where data comes from]
```

---

### Groups Structure

```
## Group 1: [Chapter Name]

### Item 1.1: [Title]

keyStats: (only if quantifiable data exists)
- Label: Value
- Label: Value

quickVerdict: (only if title needs context)
"[One line explaining what this section delivers]"

content:
[Markdown prose — see Content Guidelines below]

---

### Item 1.2: [Title]

content:
[Markdown prose]

---

## Group 2: [Chapter Name]

[Continue structure...]
```

---

### Content Guidelines (within items)

```markdown
### [Subheading]
[2-3 sentences introducing concept]

**Key point in bold.** Followed by explanation.

### Real Example
[Named bookmaker]: [Specific example with numbers]

### [Another subheading if needed]
- Bullet point with fact
- Another fact
- Third fact

> "Quote if relevant" — Source
```

**Rules:**
- Use `###` for subheadings within content
- Use `**bold**` for key terms on first use
- Use bullet points every 2-3 paragraphs
- Include specific examples with real bookmaker names
- No markdown tables (use comparisonTables field)

---

### FAQ Section

```
## FAQ (minimum 3)

Q1: [Question that clarifies an edge case]
A1: [2-4 sentence answer]

Q2: [Question comparing options or scenarios]
A2: [Answer with specific recommendation]

Q3: [Skeptical or "why" question]
A3: [Honest answer that builds trust]

Q4: [Practical "how do I" question]
A4: [Actionable answer]

Q5: [Question about exceptions or "what if"]
A5: [Clear answer with examples]
```

**FAQ Quality Check:**

❌ **Bad FAQ (duplicates content):**
- "What is [topic]?" — already in intro
- "What are the benefits?" — already in content

✅ **Good FAQ (adds value):**
- "What happens if [edge case]?"
- "Is X better than Y for [specific use case]?"
- "Do I need to [common misconception]?"
- "Why do bookmakers [puzzling behavior]?"

---

### Footer Data

```
Last Updated: [YYYY-MM-DD]
Data Source: [Primary sources used — e.g., "UKGC 2025 Report, ESRI Oct 2024"]
```

---

### Linked Resources (optional)

```
Bookmakers: [bet365, paddy-power, william-hill]
(For future contextual banners — list relevant bookmakers mentioned in article)
```

---

## Example: Industry Report Data Pack

<details>
<summary>Повний приклад для Ireland Betting Industry Report</summary>

```
## Article Metadata

Topic: Ireland Betting Industry Report 2026
Slug: ireland-betting-market-analysis-2026
Type: Industry Report
Region: ie
Target audience: Industry professionals, serious bettors, researchers

Meta Title: Ireland Betting Industry 2026 | GRAI, Stats & Market Analysis
Meta Description: Complete analysis of Ireland's €5.5B betting market. GRAI regulations, problem gambling rates, and why Irish punters still love the bookies.

---

## Intro Section

Title: The End of Ireland's "Wild West" Era

Content:
For decades, Ireland operated under the 1931 Betting Act — a law written when radio was cutting-edge technology. That era is over.

The Gambling Regulatory Authority of Ireland (GRAI) represents the most significant change since Ireland became the first European country to legalise betting shops in 1926. This report examines Ireland's €5.5 billion annual gambling spend, the new regulatory framework, and why homegrown brands like BoyleSports and Paddy Power still dominate.

**Key insight:** While UK betting is 50% football, Ireland remains a racing nation — Cheltenham is a national pilgrimage.

---

## Comparison Table

Table ID: uk-vs-ie-comparison
Title: UK vs Ireland: Key Differences
Headers: [Feature, United Kingdom, Ireland]

Rows:
| Tax Model | 15-40% on Operator Profit | 2% on All Turnover |
| Credit Card Ban | Enforced | Section 165 (pending) |
| Ad Watershed | No daytime ban | 5:30am-9pm ban |
| Primary Sport | Football (50%) | Horse Racing (~40%) |

Source: UKGC 2025, GRAI 2024 Act

---

## Group 1: Ireland Betting by the Numbers

### Item 1.1: Industry Statistics (2025-26)

keyStats:
- Annual Spend: €5.5B
- Problem Rate: 3.3%
- Active Shops: 721
- Racing Betting: €141m

content:
### Market Size
Ireland's gambling spend reached **€5.5 billion annually** — remarkable for a nation of 5 million people. Per capita, this makes Ireland one of the heaviest gambling nations in Europe.

### Problem Gambling
ESRI research (October 2023) found:
- **3.3%** problem gambling rate (~130,000 adults)
- **7.1%** moderate risk (~279,000 adults)
- **64%** gambled before age 18
- **22.9%** of 16-year-olds participated in gambling

### Retail Decline
Betting shops have declined **47% since 2008** — from 1,385 to just 721 active outlets.

---

## Group 2: The GRAI Revolution

### Item 2.1: What Changed in 2024

content:
### The Gambling Regulation Act 2024
Signed by President Higgins, the Act created GRAI and introduced:

- **National Exclusion Register** — single self-exclusion across all operators
- **Targeted Inducements Ban** — no more VIP bonuses based on losses
- **Advertising Restrictions** — 5:30am to 9pm watershed
- **Social Impact Fund** — 1.1% of GGY funds treatment

### Timeline
- **March 2025:** GRAI becomes statutory body
- **December 2025:** B2C licensing opens
- **Mid-2026:** Full licensing expected

[Continue with more items...]

---

## FAQ

Q1: Are my betting winnings taxed in Ireland?
A1: No. Ireland taxes operators (2% on turnover), not punters. All winnings are 100% tax-free — unlike the UK where the tax is built into odds.

Q2: Can I still get free bet offers under GRAI rules?
A2: Yes. General welcome offers available to all customers remain legal. What's banned is "targeted inducements" — personalised bonuses based on your betting history or losses.

Q3: Why did Ireland legalise betting shops before the UK?
A3: The Irish Free State passed the 1926 Betting Act to regulate existing illegal bookmaking. Britain didn't legalise until 1961 — 35 years later.

Q4: How does Irish betting tax compare to UK?
A4: Very different models. UK taxes 15-40% on operator profits. Ireland taxes 2% on all turnover regardless of profit — meaning Irish operators have tighter margins on every bet.

Q5: Is Paddy Power still Irish-owned?
A5: Technically no. Paddy Power merged with Betfair (2016), then Flutter Entertainment. Flutter is listed in London and New York. However, the brand maintains its Dublin HQ and Irish identity.

---

## Footer Data

Last Updated: 2026-01-22
Data Source: ESRI (Oct 2023), GRAI (2024 Act), HRI Annual Report 2024
```

</details>

---

## Checklist Before Handoff

### Data Quality
- [ ] All statistics have source and year
- [ ] All bookmaker examples are named (not "a major bookmaker")
- [ ] Prices/offers verified on official sites
- [ ] Dates are specific (not "recently")
- [ ] British English used (punter, bookie, cheque)

### Structure
- [ ] 3-7 groups (chapters)
- [ ] keyStats only where quantifiable numbers exist
- [ ] quickVerdict only where title needs context
- [ ] No markdown tables in content (use comparisonTables)
- [ ] comparisonTables have max 4 columns

### Required Fields
- [ ] FAQ has minimum 3 questions
- [ ] FAQ questions add value (not duplicate content)
- [ ] footer.lastUpdated is set
- [ ] collections: ['guides']

### SEO
- [ ] H1 contains primary keyword

### Handoff Instruction
```
Create guide article from this Data Pack.
Follow schema: GuideArticleSchema  
Follow style: docs/CONTENT_GUIDE.md Section 8
Output: src/data/regions/[region]/en/articles/guides/[slug].ts
```
