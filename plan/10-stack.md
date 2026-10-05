# Etap 10 — Stack: Tailwind / Motion / Storybook / Playwright / AI-agentic

## Tailwind v4

`@import "tailwindcss";` + CSS vars z DESIGN.md. Klasy użyte w komponentach, brak inline-styli poza tokenami.

## Motion (subtelny + akcenty rich)

Pakiet `motion` + keyframes CSS w `theme.css` (`decor-float 7s, decor-drift 12s, decor-marquee 30s`).
Dozwolone: `whileInView fade + y 8→0, duration 0.25`; float/drift ornamentów i blobów; marquee paska słówek;
hover kart `scale 1.02 + cień L2`. Zakaz: springy, layout-animacje, parallax. Zawsze `motion-reduce:animate-none`
oraz `@media (prefers-reduced-motion: reduce)` wyłączający keyframes.

## Storybook 8

`.storybook/main.ts` (react-vite), `preview.ts` z `theme.css`. 1 story na komponent z etapu 09.

## Playwright

`playwright.config.ts`: `webServer: vite preview`, `projects: chromium + mobile (Pixel 5)`. 4 spece z etapu 09.

## AI-agentic

- Treść tylko w `src/data/*.ts`. Komponent bez treści.
- `AGENTS.md` obowiązuje. Skrypty: `dev/build/preview/storybook/build-storybook/test:e2e`.
- Każdy task: kod + story + e2e + `npm run build`.
