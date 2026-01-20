# Content Guide

Документація для створення статей на FreeBetGeek.

---

## Типи статей

Всі статті використовують тип `IndustryReport` з `@/types`. Тип визначає мету та тон, а не конкретні поля — поля обираються під контент.

| Тип | Мета | Тон |
|-----|------|-----|
| **Industry Report** | Аналіз ринку, статистика, тренди | Аналітичний, data-driven |
| **Partner Roundup** | Порівняння сервісів, інструментів | Експертний, чесний |
| **Educational** | Навчання, пояснення концепцій | Дружній, supportive |
| **Regional** | Локальна інформація | Інформаційний, практичний |

---

## Обов'язкові поля

| Поле | Вимоги | Для чого |
|------|--------|----------|
| `slug` | kebab-case, унікальний | URL статті |
| `h1` | Чіткий заголовок | Головний заголовок сторінки |
| `metaTitle` | ≤60 символів | SEO title tag |
| `metaDescription` | ≤160 символів | SEO meta description |
| `intro.title` | Короткий hook | Підзаголовок |
| `intro.content` | 2-4 абзаци | Вступ, встановлює контекст |
| `footer.lastUpdated` | YYYY-MM-DD | Дата оновлення |

---

## Collections

Статті можуть належати до кількох collections:

| Collection | Призначення |
|------------|-------------|
| `guides` | Меню Guides |
| `bettor-resources` | Меню Bettor Resources |
| `featured` | Виділені на головній |
| `responsible-gambling` | RG контент |

---

## SEO

- `metaTitle`: primary keyword + рік якщо актуально
- `metaDescription`: ключові теми, call-to-action
- `footer.lastUpdated`: обов'язково для schema.org datePublished/dateModified

---

## Linked Resources

Уніфікована система посилань на ресурси в статтях. Замість окремих `relatedBookmakers` та `externalLinks`, використовуємо єдиний масив `linkedResources`:

```typescript
linkedResources: [
  { id: 'bet365', type: 'bookmaker', active: true },
  { id: 'flashscore', type: 'external', active: true },
  { id: 'paypal', type: 'payment', active: false }
]
```

### Структура LinkedResource

| Поле | Тип | Опис |
|------|-----|------|
| `id` | string | Унікальний ідентифікатор ресурсу (slug) |
| `type` | 'bookmaker' \| 'external' \| 'payment' | Тип ресурсу |
| `active` | boolean | Чи показувати в UI статті |

### Типи ресурсів

| Type | Опис | Registry |
|------|------|----------|
| `bookmaker` | Букмекери (bet365, paddy-power...) | `src/data/bookmakers.ts` |
| `external` | Зовнішні сервіси (Flashscore, SofaScore...) | `src/data/resources/externalApps.ts` |
| `payment` | Платіжні методи (PayPal, Skrill...) | `src/data/constants.ts` |

### Active toggle

- `active: true` — ресурс відображається в UI статті (таблиці, картки, лого)
- `active: false` — ресурс прихований з UI, але посилання зберігається в даних

Це дозволяє тимчасово приховати ресурс без видалення з коду.

---

## Resource Registry

Дані про ресурси зберігаються централізовано:

### External Apps Registry

Файл: `src/data/resources/externalApps.ts`

```typescript
{
  id: 'flashscore',
  name: 'Flashscore',
  url: 'https://www.flashscore.com',
  bgColor: '#000000',  // optional
  logo: '/images/partners/flashscore.svg',  // optional
  tableData: {
    bestFor: 'Live betting speed',
    price: 'Free',
    sports: '38 sports',
    keyFeature: 'Fastest updates (5-20s)'
  }
}
```

### Bookmakers

Використовується існуючий `getBookmakerBySlug(id, region)` з `@/data`.

---

## Table-First Content Philosophy

Завжди шукай можливості представити контент у вигляді таблиць:

- **Порівняння** → таблиця (не bullet list)
- **Список опцій з характеристиками** → таблиця
- **Дані, цифри, статистика** → таблиця
- **Features різних продуктів** → таблиця

Таблиці сканабельні, SEO-friendly (schema.org ItemList), та краще конвертують користувачів.

---

## Table Structure Standards

**Максимум 4 колонки** (1 основна + 3 додаткових). Без винятків.

| Колонка | Призначення |
|---------|-------------|
| 1 (Name) | Назва елемента, клікабельна якщо є linkedResourceType |
| 2-4 | Ключові характеристики для порівняння |

Якщо потрібно більше даних — розбий на кілька таблиць або винеси в окремі секції.

---

## Table Cell Limits

UI truncate як safety net, але контент має бути в межах:

| Поле | Ліміт символів |
|------|----------------|
| Name | 20 |
| Best For | 25 |
| Price | 15 |
| Key Feature | 35 |

Validation в `getExternalAppById()` попереджає в development mode якщо tableData перевищує ліміти.

---

## Content Sorting

- **Таблиці**: сортуй за якістю/популярністю (найкращий перший)
- **FAQ**: сортуй за важливістю питання
- **Groups/Items**: сортуй за relevance до теми статті

---

## Resource Linking

Якщо таблиця має `linkedResourceType`, перша колонка автоматично стає клікабельною:

```typescript
comparisonTables: [
  {
    id: 'apps-comparison',
    title: 'Live Score Apps',
    headers: ['App', 'Best For', 'Price'],
    linkedResourceType: 'external'  // ← перша колонка клікабельна
    // rows генеруються автоматично з registry
  }
]
```

Типи resource linking:
- `external` → посилання на зовнішні сервіси (Flashscore, SofaScore)
- `bookmaker` → посилання на букмекерів (bet365, Paddy Power)
- `payment` → посилання на платіжні системи

---

## Стиль написання

| Робити | Не робити |
|--------|-----------|
| Конкретні цифри та факти | Вода, загальні фрази |
| Чесні мінуси | Тільки позитив |
| Короткі абзаци (3-4 речення) | Стіни тексту |
| Active voice | Passive voice |

**Форматування:**
- `**bold**` для ключових цифр та назв
- Bullet lists для переліків
- Markdown headers (`###`) для структури

---

## Comparison Tables

Використовуй масив `comparisonTables[]` для всіх таблиць порівняння:

### Manual rows (статичні дані)

```typescript
comparisonTables: [
  {
    id: 'betting-chains-2026',
    title: 'Major Betting Chains',
    headers: ['Chain', 'Shops', 'HQ', 'Notes'],
    rows: [
      ['BoyleSports', '277', 'Dundalk', 'Largest independent'],
      ['Paddy Power', '202', 'Dublin', 'Flutter owned'],
    ]
  }
]
```

### Auto-generated rows (з registry)

```typescript
comparisonTables: [
  {
    id: 'live-score-apps',
    title: 'Best Live Score Apps',
    headers: ['App', 'Best For', 'Price'],
    linkedResourceType: 'external'
    // rows генеруються автоматично з linkedResources
  }
]
```

### Правила

- **Максимум 4 колонки** (див. Table Structure Standards)
- **id**: унікальний kebab-case ідентифікатор
- **title**: заголовок таблиці (H3)
- **linkedResourceType**: 'external' | 'bookmaker' | 'payment' (опціонально)

---

## FAQ

Додавати коли питання логічно випливають з контенту. Не вигадувати штучно.

- 5-10 питань
- Починати з "Which", "What", "How", "Is", "Can"
- Відповіді 2-4 речення

---

## Обмеження Claude Code

Claude Code **НЕ робить**:
- Не перевіряє зовнішні URL
- Не завантажує медіа файли
- Не створює файли в `public/images/`

---

## Checklist

- [ ] `metaTitle` ≤60 символів
- [ ] `metaDescription` ≤160 символів
- [ ] `footer.lastUpdated` заповнено
- [ ] `collections` вказано
- [ ] Експорт в `src/data/regions/[region]/en/index.ts`
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
