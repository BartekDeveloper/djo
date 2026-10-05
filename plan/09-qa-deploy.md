# Etap 09 — QA / Storybook / Playwright / Deploy

## Storybook (muszą przejść)

Stories: `Header, CultureCard, AudioWordCard, ComparisonTable, QuizQuestion, QrModal`. `npm run build-storybook` zielony.

## Playwright e2e

- `e2e/nav.spec.ts`: linki `index→hiszpania/meksyk/gry` działają (MPA, pełny reload).
- `e2e/quiz.spec.ts`: 8 odpowiedzi → wynik.
- `e2e/qr.spec.ts`: modal otwiera się, zawiera URL strony.
- `e2e/projector.spec.ts`: toggle ustawia `data-projector="true"`.

## Kontrast / a11y

Tekst 14.8:1, akcenty 6.2–6.8:1, focus `#184E77` 2px offset, input 48px, klawiatura pełna, zero emoji.

## Weryfikacja

`npm run build && npx vite preview` → otworzyć `dist/index.html, hiszpania.html, meksyk.html, gry.html` bezpośrednio. Lighthouse bez krytycznych.
