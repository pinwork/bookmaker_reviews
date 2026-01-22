# Bettor Resources Workflow

## Overview

Процес створення review-статей (Wirecutter-style) для `/bettor-resources/`.

**Мета:** Порівняльні статті різних tools/apps для бетторів.

**Data Pack призначення:** Передати Claude Code максимум якісної інформації для написання статті, яка:
- Реально допомагає обрати продукт (не просто описує)
- Містить чесні плюси/мінуси (не маркетинговий перепис)
- Базується на досвіді реальних користувачів
- Верифікована через першоджерела (офіційні сайти)

**Результат:** Data Pack → Claude Code → готова стаття `.ts`

**Етапи:**
1. **Discovery** — зрозуміти нішу через спілкування з юзером
2. **Research Prompt** — підготувати промпт для глибокого ресерчу
3. **Consolidation** — об'єднати 2-3 ресерчі в єдиний data pack
4. **Handoff** — передати data pack Claude Code

---

## Phase 1: Discovery

**Формат:** Вільне спілкування з юзером.

**Мета:** Повністю зрозуміти нішу перед генерацією промпту.

### Що з'ясувати:

1. **Яка ніша?**
   - Назва категорії
   - Приклад запиту користувача ("best X for Y")

2. **Первинний пошук** (агент робить сам):
   - Які продукти/сайти популярні в цій ніші?
   - Хто цільова аудиторія?
   - Які ключові критерії вибору?
   - Що схоже, але НЕ входить? (anti-patterns)

3. **Валідація з юзером:**
   - Показати що знайшов
   - Отримати підтвердження що ніша зрозуміла правильно

**Результат:** Агент готовий генерувати Research Prompt.

---

## Phase 2: Research Prompt

**Мета:** Створити промпт який дасть максимум корисного контенту від інших агентів.

**Принципи:**
- ❌ Не вказувати конкретні назви продуктів — агенти шукають самі
- ✅ Чітко пояснити що входить / не входить в нішу
- ✅ Дати структуру для відповіді (Data Template)
- ✅ Залишити простір для неочікуваних знахідок

---

### Research Prompt Template

```markdown
# Research Task: [NICHE NAME]

## Context: What This Article Is About

**Niche:** [Назва ніші]

**Definition:** [2-3 речення — що це таке, для кого, яку проблему вирішує]

**CRITICAL — This is NOT about:**
- ❌ [Схожа категорія яка НЕ входить]
- ❌ [Ще одна]
- ❌ [Ще одна]

**What QUALIFIES as [NICHE]:**
- ✅ [Критерій 1]
- ✅ [Критерій 2]
- ✅ [Критерій 3]

**Target audience:** [Хто буде читати статтю]

---

## Your Task

Find the most notable and popular [NICHE] tools/services currently on the market.

**Research criteria:**
- Must be actively operating (2024-2025)
- [Niche-specific criterion]
- [Niche-specific criterion]
- Include mix: premium and budget-friendly options

---

## Key Features To Research

For this niche, these factors matter most to users:

| Feature | Why It Matters |
|---------|----------------|
| [Feature 1] | [Чому важливо для користувача] |
| [Feature 2] | [Чому важливо] |
| [Feature 3] | [Чому важливо] |
| [Feature 4] | [Чому важливо] |

---

## Data Template For Each Tool

## [Tool Name]

### Basic Info
- Official website URL:
- Brand primary color (hex):
- Company/owner (if known):
- Country of origin:
- Year founded:

### What It Is
[3-5 sentences. What it does, reputation, what makes it unique.]

### Target User
[2-3 sentences. Who benefits most? Experience level? Use case?]

### Pricing
[All tiers, monthly/yearly prices, free trial, what's included]

### Strengths (Pros)
[3-5 genuine advantages. Be specific.]

### Weaknesses (Cons)
[1-3 honest drawbacks. Every tool has them.]

### Key Features
[4-6 features with BENEFITS, not just names]

### [Niche-Specific Section 1]
[e.g., Backtesting Capabilities for scanners]

### [Niche-Specific Section 2]
[e.g., Alert System for scanners]

### Overall Impression
[What stands out? Dealbreakers? Who should use this?]

---

## After Research

### Comparison Table

| Tool | [Criterion 1] | [Criterion 2] | [Criterion 3] | [Criterion 4] |
|------|---------------|---------------|---------------|---------------|

### Who Should Use What

| If You Need... | Best Choice | Why |
|----------------|-------------|-----|

### Open Questions

What else did you discover that doesn't fit the template but seems important?

---

## Research Guidelines

### Sources Priority

**✅ HIGH VALUE — шукати тут:**
- Reddit (r/sportsbetting, r/SoccerBetting, niche subreddits)
- Спортивні форуми (Pair Betting Forum, BettingExpert community)
- YouTube reviews від реальних користувачів
- Trustpilot/відгуки з конкретикою (не просто "great app!")

**⚠️ LOW VALUE — обережно:**
- Маркетингові сайти самих продуктів (завжди прикрашено)
- Affiliate review сайти (часто перепис маркетингу)
- "Top 10 Best X" статті без глибини

**Чому це важливо:**
Плюси/мінуси з маркетингових джерел = перепис рекламних обіцянок.
Плюси/мінуси з форумів = реальний досвід користувачів.

### Verification Step

Після збору інформації — обов'язково:
1. Відвідати офіційний сайт кожного продукту
2. Перевірити актуальні ціни (pricing pages часто змінюються)
3. Подивитись реальний інтерфейс (screenshots, demo якщо є)
4. Порівняти маркетингові обіцянки vs відгуки користувачів

### What Makes Good Pros/Cons

**❌ Погано (з маркетингу):**
- "Best-in-class technology"
- "User-friendly interface"
- "Trusted by thousands"

**✅ Добре (з форумів/реального досвіду):**
- "Telegram alerts arrive 5-10 seconds faster than competitors"
- "Server crashes every Saturday during peak Premier League hours"
- "Backtesting limited to 1 year — not enough for statistical significance"

### General Guidelines

1. **Visit actual websites** — verify current pricing, features, trials
2. **Explain benefits, not features** — "X helps you do Y" not just "has X"
3. **Be honest about cons** — builds credibility
4. **Note market position** — who's the leader? who's the budget option?
5. **If fewer than 4-5 tools exist** — that's fine, note it's a specialized niche
```

---

### Example: In-Play Betting Scanners

<details>
<summary>Повний приклад заповненого промпту</summary>

```markdown
# Research Task: In-Play Football Betting Scanners

## Context: What This Article Is About

**Niche:** In-Play Football Betting Scanners (Live Betting Tools)

**Definition:** Specialized tools for serious bettors who place bets DURING live matches. They automatically scan hundreds of matches simultaneously and send instant alerts when statistical criteria are met.

**Example use case:** You set an alert: "Notify me when a home team is losing 0-1 but has 70%+ pressure index after 60 minutes" — the system scans 500 live matches and alerts you instantly.

**CRITICAL — This is NOT about:**
- ❌ General score apps (SofaScore, FlashScore, FotMob) — for casual fans checking results
- ❌ Pre-match analytics (FBref, Understat) — research before games
- ❌ Tipster services — we want tools that help find bets, not predictions
- ❌ Odds comparison sites (Oddschecker) — different category

**What QUALIFIES as In-Play Scanner:**
- ✅ Real-time scanning of hundreds of live matches
- ✅ Custom alert builder with betting-specific criteria
- ✅ Live statistics: Pressure Index, Momentum, Dangerous Attacks
- ✅ Telegram/Push alerts for instant notifications
- ✅ Paid subscription model (€10-80/month typically)

**Target audience:** Serious bettors, football traders, in-play specialists.

---

## Your Task

Find the most notable and popular In-Play Football Betting Scanners currently on the market.

**Research criteria:**
- Must be actively operating (2024-2025)
- Must focus on LIVE/in-play betting (not pre-match only)
- Must have custom alert functionality
- Include mix: premium and budget-friendly options

---

## Key Features To Research

| Feature | Why It Matters |
|---------|----------------|
| Backtesting | Test strategies on historical data before risking money |
| Custom Alerts | Flexibility to build specific betting triggers |
| Alert Speed | Seconds matter in live betting |
| Live Stats (xG, Pressure) | Data quality determines edge |
| Leagues Coverage | More leagues = more opportunities |
| Telegram Integration | Industry standard for instant delivery |

---

## Data Template For Each Tool

[Standard template plus niche-specific sections:]

### Backtesting Capabilities
[Does it have backtesting? How many matches? How far back?]

### Alert System
[Telegram/Email/Push? How fast? Unlimited alerts?]

### Live Statistics Available
[List: xG, pressure, momentum, shots, corners, cards, etc.]

### Leagues/Coverage
[How many leagues? Which regions?]

---

## After Research

### Comparison Table

| Tool | Price | Free Trial | Backtesting | Telegram | Live xG |
|------|-------|------------|-------------|----------|---------|

### Who Should Use What

| If You Need... | Best Choice | Why |
|----------------|-------------|-----|
| Deep backtesting | ? | ? |
| Budget option | ? | ? |
| Best overall | ? | ? |

### Open Questions

What else did you discover that doesn't fit the template but seems important?
```

</details>

---

## Phase 3: Consolidation

**Вхід:** 2-3 ресерчі від різних агентів.

### 3.1 Перехресне порівняння
- Які продукти знайшли всі агенти? (консенсус)
- Які знайшов тільки один? (перевірити чи валідні)
- Чи є конфлікти в даних? (ціни, features)

### 3.2 Об'єднання
- Взяти найповніші описи кожного продукту
- Доповнити унікальними інсайтами з інших ресерчів
- Стандартизувати формат (hex colors, pricing format)

### 3.3 Ранжування

На базі зібраних даних визначити:
- **#1 Best Overall** — найкращий баланс
- **#2, #3...** — порядок в статті (найкращі першими)
- **Best Value** — найкраще співвідношення ціна/якість
- **Best for Beginners** — найлегший старт
- **[Niche-specific pick]** — e.g., "Best for Backtesting"

### 3.4 Editorial Decisions
- Які badges присвоїти? (Editor's Pick, Best Value)
- Який overall rating для статті? (для `reviewContext`)
- Які FAQ питання найважливіші?

### 3.5 Verification Pass

Перед фіналізацією data pack:

1. **Відвідати кожен сайт продукту:**
   - Ціни актуальні?
   - Features відповідають опису?
   - Є щось нове що не згадали в ресерчах?

2. **Cross-check marketing vs reality:**
   - Що обіцяють на сайті?
   - Що кажуть реальні користувачі?
   - Де розбіжності? → Це стає cons

3. **Find the uncomfortable truths:**
   - Який продукт має найбільше скарг?
   - На що скаржаться частіше всього?
   - Це має бути в cons, навіть якщо продукт загалом хороший

---

## Phase 4: Data Pack Format

Фінальний формат для Claude Code.

---

### Article Metadata

```
Topic: [e.g., "Best In-Play Betting Scanners 2026"]
Slug: [e.g., "best-in-play-betting-scanners-2026"]
Target audience: [Who reads this?]
Article rating: [Overall rating for reviewContext, e.g., 4.4]

Editorial Ranking:
#1: [Product] — Editor's Pick
#2: [Product] — Best Value  
#3: [Product]
...
```

---

### Category Intro

```
What is this category? [1-2 sentences]
What problem does it solve? [User's pain point]
What it's NOT: [Anti-patterns for clarity]
Scope: [What qualifies]
```

---

### Comparison Table

```
| Tool | [Criterion 1] | [Criterion 2] | [Criterion 3] | [Criterion 4] |
|------|---------------|---------------|---------------|---------------|
```

**Rules:**
- Max 4 columns (excluding Tool name)
- Cells: короткі значення для сканування
- Order: за editorial ranking (#1 першим)

---

### For Each Tool (in ranking order)

```markdown
## [Tool Name]

### Basic Info
- Official website URL:
- Brand primary color (hex): #XXXXXX
- Year founded:
- Company/owner:

### What It Is
[3-5 sentences]

### Target User
[2-3 sentences → becomes `bestFor`]

### Pricing
[Full details]

### Strengths (Pros)
[3-5 items → minimum 3 required]

### Weaknesses (Cons)
[1-3 items → minimum 1 required]

### Key Features
[4-6 with benefits]

### [Niche-Specific Sections]
[As needed]

### Overall Impression
[→ becomes `quickVerdict`, max 75 chars for headline version]
```

---

### Use Case Matching

```
| If You Need... | Best Choice | Why |
|----------------|-------------|-----|
```

---

### FAQ

**Мета FAQ:** Допомогти користувачу ОБРАТИ продукт, а не повторити опис.

**❌ Погані FAQ (дублюють контент):**
- "What is [product]?" — це вже в описі
- "What features does it have?" — це вже в огляді
- "Is it good?" — занадто загальне

**✅ Хороші FAQ (додають цінність):**

| Тип питання | Приклад | Чому цінне |
|-------------|---------|------------|
| Порівняння | "X vs Y — which is better for beginners?" | Допомагає обрати |
| Реальний use case | "Can I use this for corner betting specifically?" | Конкретна відповідь |
| Прихований нюанс | "Why do all scanners use Telegram?" | Розкриває нішу |
| Бюджет/value | "Is the premium tier worth 3x the price?" | Економить гроші |
| Комбінування | "Can I use multiple scanners together?" | Практична порада |
| Скептичне | "Do these tools actually give an edge?" | Чесність = довіра |

**Принцип:** Уяви що юзер прочитав всю статтю і залишились питання. FAQ відповідає на ТЕ, що не очевидно з основного контенту.

**Format:**
```
1. [Question]
   [Answer — 2-4 sentences]

2. [Question]
   [Answer]
...
```

**Minimum:** 3 questions
**Recommended:** 5-7 questions

---

### Editorial Picks Summary

```
Best Overall: [Tool] — [reason]
Best Value: [Tool] — [reason]
Best for Beginners: [Tool] — [reason]
Best for [niche persona]: [Tool] — [reason]
```

---

## Checklist Before Handoff

### Data Quality
- [ ] All tools have hex color (not "blue/green")
- [ ] All tools have official URL
- [ ] All tools have pricing (verified current)
- [ ] Each tool has 3+ pros, 1+ cons
- [ ] Pros/cons based on real user feedback, not marketing

### Structure
- [ ] Comparison table has max 4 data columns
- [ ] Tools ordered by editorial ranking (#1 first)
- [ ] FAQ has 3+ questions with answers
- [ ] FAQ questions add value (not duplicate content)

### Editorial
- [ ] Editorial ranking is clear (#1, #2, #3...)
- [ ] Badges assigned (Editor's Pick, Best Value, etc.)
- [ ] Article rating determined (for reviewContext)
- [ ] All sites visited and verified before handoff
