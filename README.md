# Next.js Claude Template

Next.js стартер для швидкої розробки сайтів з Claude Code.

## Швидкий старт

```bash
# Клонувати
git clone твій-репо
cd nextjs-claude-template

# Встановити
npm install

# Запустити
npm run dev
```

Відкрий http://localhost:3000

---

## Tech Stack

- Next.js 15.5.4 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui (New York style)
- Lucide React

---

## Команди

```bash
npm run dev      # Розробка (localhost:3000)
npm run build    # Збірка
npm run lint     # Перевірка коду
```

---

## Структура

```
project/
├── src/
│   ├── app/            # Сторінки
│   ├── components/     # Компоненти
│   │   └── ui/         # shadcn/ui
│   ├── data/           # Дані
│   └── lib/            # Утиліти
├── scripts/ralph/      # Автономний агент
├── CLAUDE.md           # Інструкції для Claude Code
├── prd.json            # План реалізації (user stories)
└── progress.txt        # Прогрес та патерни
```

---

## Workflow

### Ручна розробка

Працюй з Claude Code напряму — він читає `CLAUDE.md`.

### Автономна розробка (Ralph)

1. Згенеруй `prd.json` через чат з AI (використай `PRD_GUIDE.md`)
2. Заповни Project Description в `CLAUDE.md`
3. Запусти:

```bash
./scripts/ralph/ralph.sh
```

Claude Code автоматично реалізує stories одна за одною.

---

## Додавання компонентів

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

Всі компоненти: https://ui.shadcn.com/docs/components

---

## Deploy (Vercel)

1. Push проект на GitHub
2. Vercel → Import Project → вибери репо
3. Deploy

Далі автоматично: push → deploy.

---

## Файли

**В git:**
- `CLAUDE.md` — інструкції
- `prd.json` — план
- `progress.txt` — прогрес

**Не в git:**
- `.env.local` — паролі
- `node_modules/`
- `.next/`

---

## MongoDB (опціонально)

Готово до використання. Налаштування:

```bash
# В .env.local додай свій URI:
MONGODB_URI=mongodb://username:password@host:port/database?authSource=admin
```

Використання описано в `CLAUDE.md`.

---

## MCP (Model Context Protocol)

`.mcp.json` дає Claude Code доступ до інструментів:

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}
```

**Context7** — Claude Code автоматично отримує актуальну документацію бібліотек коли потрібно.