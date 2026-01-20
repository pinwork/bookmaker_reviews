# Content Guide

Документація для створення статей на FreeBetGeek.

---

## Quick Start

Структура типової статті:

```
Article
├── intro { title, content }         ← Вступ (обов'язковий)
├── comparisonTables[]               ← Таблиці порівняння
├── groups[]                         ← Секції контенту
│   └── items[]                      ← Елементи в секції
│       ├── title, content           ← Обов'язкові
│       ├── rating, badge            ← Візуальні акценти
│       ├── keyStats[]               ← Великі цифри
│       └── pros[], cons[]           ← Плюси/мінуси
├── faq[]                            ← Питання-відповіді
├── linkedResources[]                ← Ресурси (букмекери, сервіси)
└── footer { lastUpdated }           ← Метадані
```

---

## Обов'язкові поля

| Поле | Вимоги |
|------|--------|
| `slug` | kebab-case, унікальний |
| `h1` | Головний заголовок |
| `metaTitle` | ≤60 символів |
| `metaDescription` | ≤160 символів |
| `intro.title` + `intro.content` | Вступ |
| `footer.lastUpdated` | YYYY-MM-DD |

---

## Collections

| Collection | Де відображається |
|------------|-------------------|
| `guides` | Меню Guides |
| `bettor-resources` | Меню Bettor Resources |
| `featured` | Головна сторінка |
| `responsible-gambling` | RG секція |

---

## Groups

Основна структура контенту статті. Кожна `group` — це секція з заголовком та масивом `items`.

```typescript
groups: [
  {
    groupName: 'UK Betting Shop Statistics',
    items: [
      {
        id: 'industry-overview',
        title: 'Industry Overview',
        keyStats: [
          { label: 'Total Shops', value: '6,440' },
          { label: 'Employment', value: '41,000+' }
        ],
        content: 'Markdown content here...'
      }
    ]
  }
]
```

### Item Fields

| Поле | Тип | Коли використовувати |
|------|-----|---------------------|
| `id` | string | Завжди (унікальний ідентифікатор) |
| `title` | string | Завжди (заголовок картки) |
| `content` | string | Завжди (markdown текст) |
| `quickVerdict` | string | Коротка оцінка під заголовком |
| `rating` | 1-5 | Рейтинг зірками (★★★★☆) |
| `badge` | string | Лейбл в кутку ("Best Value", "Editor's Choice") |
| `keyStats` | {label, value}[] | Великі цифри/статистика |
| `pros` | string[] | Список переваг (✓) |
| `cons` | string[] | Список недоліків (✗) |
| `recommendedBookmakers` | string[] | Slug-и букмекерів |

### Decision Tree: Який field обрати?

```
Потрібно показати числову статистику?
  └─ Так → keyStats[]

Потрібно швидко оцінити item?
  └─ Так → rating (1-5)

Є очевидні плюси/мінуси?
  └─ Так → pros[], cons[]

Потрібно виділити item серед інших?
  └─ Так → badge

Є коротка оцінка одним реченням?
  └─ Так → quickVerdict
```

---

## Linked Resources

Єдиний масив для всіх зовнішніх посилань:

```typescript
linkedResources: [
  { id: 'bet365', type: 'bookmaker', active: true },
  { id: 'flashscore', type: 'external', active: true },
  { id: 'paypal', type: 'payment', active: false }
]
```

| Поле | Опис |
|------|------|
| `id` | Slug ресурсу |
| `type` | 'bookmaker' / 'external' / 'payment' |
| `active` | true = показувати, false = приховати |

**Якщо `active: false`** — ресурс прихований з UI (таблиці, groups), але залишається в даних.

---

## Comparison Tables

```typescript
comparisonTables: [
  {
    id: 'live-score-apps',
    title: 'Best Live Score Apps',
    headers: ['App', 'Best For', 'Price'],
    linkedResourceType: 'external',  // auto-link перша колонка
    rows: [...]  // або генеруються з linkedResources
  }
]
```

### Table Standards

- **Максимум 4 колонки** (без винятків)
- **linkedResourceType** робить першу колонку клікабельною
- Сортуй за якістю (найкращий перший)

### Cell Limits

| Колонка | Max символів |
|---------|--------------|
| Name | 20 |
| Best For | 25 |
| Price | 15 |
| Key Feature | 35 |

---

## FAQ

- 5-10 питань
- Питання: "Which", "What", "How", "Is", "Can"
- Відповіді: 2-4 речення
- Сортуй за важливістю

---

## Content Sorting

| Що | Як сортувати |
|----|--------------|
| Таблиці | Найкращий перший |
| FAQ | Найважливіше перше |
| Groups/Items | За relevance до теми |

---

## Checklist

- [ ] `metaTitle` ≤60 символів
- [ ] `metaDescription` ≤160 символів
- [ ] `footer.lastUpdated` заповнено
- [ ] `collections` вказано
- [ ] Експорт в `src/data/regions/[region]/en/index.ts`
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
