# Etap 02 — Layout / Shell (współdzielony przez 4 strony MPA)

## Plik: src/components/layout/Shell.tsx

Jeden shell importowany przez `index/hiszpania/meksyk/gry.html`. Props: `{ accent: 'neutral' | 'spain' | 'mexico'; projector: boolean }`.

## Header

- 4 linki statyczne: `./index.html`, `./hiszpania.html`, `./meksyk.html`, `./gry.html`. Cele 44px.
- Po prawej: przycisk QR (ikona `QrCode`) + toggle Projektor.
- Tło `#fbf1ef`, ramka 1px `#DDD5C7`, radius 14px.

## QrModal (src/components/layout/QrModal.tsx)

- Wartość: `window.location.href`. QR 200px + link + przycisk Kopiuj (`navigator.clipboard.writeText`).
- Scrim `rgba(26,22,21,0.45)` + `blur(4px)`.

## Projektor

- Toggle: `document.documentElement.dataset.projector = 'true' | 'false'`.
- CSS: `[data-projector="true"] { font-size: 112.5%; }`, ukryj dekoracyjne SVG, większe przyciski.

## Footer

Nazwa projektu + link do repo + lista źródeł (`sourceUrl` z danych).
