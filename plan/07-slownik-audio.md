# Etap 07 — Słownik + audio (w landingach, bez podstrony)

## Dane src/data/vocab.ts (~35 rekordów)

Hiszpania `es-ES`: Hola/Cześć, Buenos días/Dzień dobry, Gracias/Dziękuję, Por favor/Proszę, Sí/Tak, No/Nie, amigo/przyjaciel, familia/rodzina, mesa/stół, libro/książka, pan/chleb + 4–9 z różnic.
Meksyk `es-MX`: te same podstawy + Qué onda/Co słychać, Chido/Fajne, Nos vemos/Do zobaczenia + carro/samochód, jugo/sok itd.

## Audio src/hooks/useSpeech.ts

```ts
export const speakWord = (text: string, lang: 'es-ES' | 'es-MX') => {
  if (!('speechSynthesis' in window)) { alert('Brak syntezy mowy.'); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang; u.rate = 0.9;
  window.speechSynthesis.speak(u);
};
```

Karta: słowo + `[wymowa]` + PL + przycisk `Volume2`.
