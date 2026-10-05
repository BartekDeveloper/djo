# Etap 03 — index.html (główna obok siebie)

## Sekcje index.html

1. Hero: `IBERIA × MÉXICO`, podtytuł, 2 CTA `<a href="./hiszpania.html">ODKRYJ HISZPANIĘ</a>` (`#9E1B1B`) + `<a href="./meksyk.html">ODKRYJ MEKSYK</a>` (`#0C5E37`).
2. Obok siebie: 2x `CultureCard` skrót (2 fakty + 2 dania + 3 słówka z każdego kraju).
3. Tabela różnic 6 wierszy (`src/data/comparison.ts`): `coche/carro/samochód, ordenador/computadora/komputer, zumo/jugo/sok, mola/chido/fajne, vale/órale/okej, piso/departamento/mieszkanie`.
4. Karuzela Czy-wiesz-że: 6 wpisów `featured`, licznik `01/06`, strzałki.
5. Zajawka gier: 4 karty `<a href="./gry.html#match|quiz|guess|dialect">`.

## Komponenty

`src/pages/home.tsx`, `ComparisonTable.tsx` (2 kolumny, linia `#DDD5C7`), `FeaturedCarousel.tsx`.

## Motion

Tylko `whileInView { opacity 0→1, y 8→0, duration 0.25 }`, `motion-reduce:animate-none`.
