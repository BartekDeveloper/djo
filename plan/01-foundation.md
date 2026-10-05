# Etap 01 — Fundament techniczny (MPA SSG)

## Stack

`vite ^6 + react + typescript`, `tailwindcss ^4`, `motion ^12`, `lucide-react`, `qrcode.react ^4`, `storybook ^8`, `@playwright/test ^1.49`.

## vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { rollupOptions: { input: {
    main: 'index.html',
    hiszpania: 'hiszpania.html',
    meksyk: 'meksyk.html',
    gry: 'gry.html',
  } } },
})
```

## Skrypty package.json

`dev`, `build` (= `tsc && vite build`), `preview`, `storybook`, `build-storybook`, `test:e2e` (= `playwright test`).

## Typy (jedyne źródło treści)

```ts
export interface CountrySection { id: string; title: string; description: string; accent: 'spain' | 'mexico'; featured?: boolean; source?: string; sourceUrl?: string; }
export interface VocabularyItem { word: string; pronunciation: string; translation: string; speechLang: 'es-ES' | 'es-MX'; category: string; country: 'spain' | 'mexico'; }
export interface QuizQuestion { id: string; question: string; answers: string[]; correctAnswer: number; explanation: string; country: 'spain' | 'mexico' | 'both'; }
```

Pliki danych: `src/data/spain.ts (5 faktów + 3 dania + timeline 4), mexico.ts (jw.), vocab.ts (~35), comparison.ts (6), quiz.ts (gry)`.

## theme.css

Tokeny z DESIGN.md: `#F9F6F0 / #1A1615 / #9E1B1B / #0C5E37 / #184E77 / #DDD5C7`, radius 10/14/6, cienie L1-L3. Fonty Google: Comfortaa 600/700 + Plus Jakarta Sans 400/600/700 (polskie + ñ¿¡).

## Deploy .github/workflows/deploy.yml

Trigger `push main`, `setup-node node-version: 20`, `npm ci`, `npm run build`, upload `./dist`, `deploy-pages@v4`.
