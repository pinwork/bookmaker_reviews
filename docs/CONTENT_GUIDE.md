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

## Auto-generated Tables

Для статей з `type='external'` ресурсами, таблиця порівняння генерується автоматично з `tableData` в registry.

### Як це працює

1. Стаття містить `linkedResources` з `type: 'external'`
2. `resolveExternalResources()` отримує повні дані з registry
3. `AutoComparisonTable` генерує рядки з `resource.tableData`

### Конфігурація таблиці

```typescript
comparisonTable: {
  title: 'Quick Comparison: Live Score Apps',
  headers: ['App', 'Best For', 'Price', 'Sports', 'Key Feature']
  // rows НЕ потрібні — генеруються автоматично
}
```

### Приклади

**Bookmaker article:**
```typescript
linkedResources: [
  { id: 'bet365', type: 'bookmaker', active: true },
  { id: 'paddy-power', type: 'bookmaker', active: true },
  { id: 'sky-bet', type: 'bookmaker', active: false }  // hidden
]
```

**External apps article:**
```typescript
linkedResources: [
  { id: 'flashscore', type: 'external', active: true },
  { id: 'sofascore', type: 'external', active: true },
  { id: 'fotmob', type: 'external', active: true }
]
```

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

Для швидкого порівняння опцій:

```typescript
comparisonTable: {
  title: 'Quick Comparison: [Topic]',
  headers: ['Name', 'Best For', 'Price', 'Key Feature'],
  rows: [
    ['Item A', 'Use case', 'Free/£X', 'Differentiator'],
  ]
}
```

- Максимум 5-7 колонок
- Best For: 2-4 слова

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
