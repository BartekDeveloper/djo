# Etap 00 — Przegląd / Zasada nadrzędna (MPA SSG FINAL)

> Źródła: `../plan.md`, `../DESIGN.md`

## Cel

Prosta statyczna strona bez backendu. Główna z porównaniem obok siebie + 2 rozbudowane landingi + gry. Ma nie wyglądać jak gówno: dobry UX/UI, kontrast AAA.

## Architektura FINAL: Vite MPA SSG

- 4 wejścia: `index.html`, `hiszpania.html`, `meksyk.html`, `gry.html`. Wspólne `assets/*.css/*.js`.
- Nawigacja zwykłymi `<a href="./hiszpania.html">`. Zero react-router, zero hash-routera, zero backendu.
- Build: `npm run build` → `dist/*.html` → GitHub Pages. Każda strona otwiera się samodzielnie z dysku.

## Zakres treści FINAL (cięcia)

- Fakty: 5 na kraj. Kuchnia: 3 na kraj. Słówka: 15–20 na kraj. Różnice: 6 wierszy. Timeline: 4 punkty na kraj. Gry: 4 (nie 6).
- Słownik bez osobnej podstrony — mieszka w landingach, te same dane.
- Czy-wiesz-że = 6 wpisów `featured: true` z tych samych Faktów, karuzela na `index.html`.

## Kolejność

`01-foundation` → `02-layout` → `03-home(index)` → `04-hiszpania` → `05-meksyk` → `06-dialog(tabela)` → `07-slownik(audio)` → `08-gry(4)` → `09-qa` → `10-stack`
