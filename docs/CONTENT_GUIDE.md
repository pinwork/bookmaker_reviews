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

## Партнерські посилання

Для статей з оглядом зовнішніх сервісів використовувати `externalLinks`:

```typescript
externalLinks: [
  {
    id: 'service-name',
    name: 'Service Name',
    url: 'https://example.com',
    logoSlug: 'service-name'  // → /images/partners/service-name.png
  }
]
```

**Логотипи:**
- Шлях: `public/images/partners/{logoSlug}.png`
- Формат: PNG або SVG
- Розмір: будь-який — CSS адаптує

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
