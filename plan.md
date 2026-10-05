# ANEKS FINALNY (MPA SSG) — czytaj najpierw. Szczegóły w plan/00-10.
# MPA: index.html, hiszpania.html, meksyk.html, gry.html. Base './'. Node 20.
# Zakres: fakty 5/kraj, kuchnia 3/kraj, słówka 15-20/kraj, różnice 6, timeline 4/kraj, gry 4.
# Stack: Tailwind v4, motion (fade 0.25), Storybook 8, Playwright. Bez routera, bez backendu.

DESIGN(1).md
File
Ocen plan gemini:  Potrzebuje dobrego planu na strone internetowa na specjalny dzien - dzien jezykow obcych - dla krajow meksyk i hiszpania, wiecej informacji:

-Grach i quizach językowych( zagadki językowe)

-Dopasowanie słów do obrazków

-Pytania o tradycje, historię i geografię krajów

- Rozpoznawanie flag, zabytków i symboli

- Prezentacje ciekawostek kulturowych

- Zadania dotyczące zwyczajów i świąt


W tym roku Dni Języków Obcych będziemy przygotowywać wspólnie, łącząc po dwie lub trzy klasy. przygotowanie własnego  poświęconego wybranemu krajowi lub regionowi.


Potrzebuje dobrego planu by dac ai do budowania strony.


Podoba mi sie ten design md: [Plik]


oraz +/- taki header: Potrzebuje podzielona na 2 czesci: meksyk oraz hiszpanie, oraz moze 3cia - roznice i podobienstwa.


Chcialbym aby ta strona miala opis kultury, jedzenia, proste slowa w tych jezykach wraz z wymowa oraz tlumaczeniem polskim - podstawowe slowa / zwroty / przywitanie / cos takiego bardzo podstawego oraz jakies przedmioty, oraz sekcje gier z roznymi. Chcialbym aby dziala i na komputerze na duzym ekranie z projektorem

oraz na telefonie, w jak pewnie zauwazyles, w headerze powinien byc przycis qr ktory generuje kod QR oraz pod nim link do strony, wszystko w modalu zeby osoby mogly osobiscie na telefonach wejsc. WAZNE: WYMAGANY BRAK BACKENDU

- CALOSC BEDZIE HOSTOWANA NA GITHUB PAGES / GITHUB ACTIONS WIEC POTRZEBUJE STATYCZNYCH PLIKOW. UWIELBIAM TAILIWND I REACTA WIEC NAJLEPIEJ JAKIS VITE Z BUNDLE BUILDEM JAKO SSG.


MIEJSCA, KULTURA, KUCHNIA, JEDZENIE, WPLYW NA EUROPE I SWIAT, ...., JEZYKI, MUZYKA, ..... CHCE ZEBY TO BYLO DOSYC INTERESUJACE ORAZ PRZYCIAGAJACE.

Oto gotowy, kompletny i precyzyjny Plan Architektury i Promp do AI (np. dla Cursor, Claude, v0 lub ChatGPT), który pozwoli Ci wygenerować w pełni gotową aplikację webową na Dzień Języków Obcych.

Aplikacja jest zaprojektowana bez backendu (100% statyczna pod GitHub Pages), oparta na Vite + React + Tailwind CSS, z wykorzystaniem natywnych funkcji przeglądarki (np. Web Speech API do wymowy słów) oraz zoptymalizowana zarówno pod duży ekran/projektor klasowy, jak i telefony uczniów.
🚀 Gotowy Prompt / Specyfikacja Techniczna dla AI

    Wskazówka: Skopiuj poniższy blok kodu i wklej go do wybranego modelu AI / środowiska programistycznego.

Markdown

# SPECYFIKACJA PROJEKTU: "Iberia & México: Diálogo Transatlántico" (Dzień Języków Obcych)

Stwórz statyczną aplikację webową (React + Vite + Tailwind CSS) dedykowaną na szkolny Dzień Języków Obcych. Aplikacja nie może wymagać ŻADNEGO backendu (musi działać w 100% kliencko i być gotowa do wdrożenia na GitHub Pages via GitHub Actions).

---

## 1. TECH STACK & ARCHITEKTURA
- **Framework:** React + TypeScript (Vite)
- **Stylizowanie:** Tailwind CSS v4 (lub v3) + CSS Variables
- **Ikony:** Lucide React (brak tanich emoji – czysta, edytorska wektorowa typografia)
- **Wymowa audio:** Natywne Browser Web Speech API (window.speechSynthesis) z obsługą akcentów es-ES (Hiszpania) oraz es-MX (Meksyk)
- **QR Code:** qrcode.react (do generowania kodu QR w modalu)
- **Wdrożenie:** Statyczny build SSG/SPA gotowy do GitHub Pages.

---

## 2. DESIGN SYSTEM (Ściśle wg załącznika DESIGN.md)
Wdroż system „Modern Editorial Craftsmanship” z podziałem kulturowym:
- **Tło bazowe:** #F9F6F0 (papierowy pergamin, kość słoniowa)
- **Tekst:** #1A1615 (atrament drukarski, wysoki kontrast WCAG AAA)
- **Akcent Hiszpania:** Szkarłat kordobański #9E1B1B oraz szafran #C28704
- **Akcent Meksyk:** Zieleń kaktusowa #0C5E37 oraz indygo Talavera #184E77
- **Ramki/Linie:** 1px #DDD5C7 (introligatorskie wykończenie)
- **Zaokrąglenia:** 10px dla przycisków/inputów, 14px dla kart i modali
- **Typografia:** 
  - Nagłówki: Comfortaa (obły, nowoczesny, z polskimi/hiszpańskimi znakami ñ, ¿, ¡)
  - Tekst bieżący: Plus Jakarta Sans

---

## 3. NAWIGACJA I HEADER (Wg wzoru z obrazka)
Pływający, zaokrąglony pasek nawigacyjny (#f6ecea / #fbf1ef z ramką 1px #DDD5C7):
- **Pigułki Nawigacyjne:**
  1. Strona Główna (Wprowadzenie & Projekt)
  2. Pawilon Hiszpanii
  3. Pawilon Meksyku
  4. Dialog Transatlantycki (Różnice i podobieństwa es-ES vs es-MX)
  5. Arena Gier i Quizów
- **Narzędzia po prawej stronie:**
  - Przełącznik kontrastu / trybu projektorowego (zwiększony kontrast i powiększony font na duży ekran)
  - **Przycisk Kod QR (QrCode icon):** Otwiera Modal z wygenerowanym kodem QR bieżącego URL strony, podglądem linku oraz przyciskiem "Kopiuj Link". Umożliwia uczniom natychmiastowe zeskanowanie strony i grę na telefonach.

---

## 4. STRUKTURA PODSTRON I TREŚCI

### A. Strona Główna & Dialog Transatlantycki (Wspólna przestrzeń)
- **Hero:** Tytuł *"Iberia & México: Diálogo Transatlántico"*, krótki opis projektu łączącego klasy.
- **Moduł Porównawczy (3. Sekcja):**
  - **Język i Słownictwo:** Zestawienie pojęć (np. *Coche* vs *Carro*, *Ordenador* vs *Computadora*, *Zumo* vs *Jugo*).
  - **Geografia i Wpływ na Świat:** Jak kultura hiszpańska i meksykańska ukształtowały współczesną Europę, Amerykę i popkulturę.
  - **Zwyczaje:** Zestawienie tradycji (np. *Siesta & Tapas* vs *Día de los Muertos & Mariachi*).

### B. Pawilon Hiszpanii (Kolor przewodni: #9E1B1B)
- **Kultura i Historiografia:** Zwięzłe karty opisowe (Alhambra, Sagrada Família, Flamenco, Architektura).
- **Kuchnia i Smaki:** Paella Valenciana, Jamón Ibérico, Churros z czekoladą.
- **Słowniczek Podstawowy z Syntetyzatorem Mowy (es-ES):**
  - Zwroty: *¡Hola!, ¿Cómo estás?, Por favor, Gracias, Hasta luego*.
  - Każda karta posiada przycisk głośnika Volume2 do odsłuchania akcentu z Hiszpanii.

### C. Pawilon Meksyku (Kolor przewodni: #0C5E37)
- **Kultura i Dziedzictwo:** Cywilizacje Majów i Azteków, Chichén Itzá, Día de los Muertos, Alebrijes.
- **Kuchnia:** Tacos al Pastor, Mole Poblano, Guacamole, Elote.
- **Słowniczek Podstawowy z Syntetyzatorem Mowy (es-MX):**
  - Zwroty meksykańskie: *¡Qué onda!, Chido, Por favor, Gracias, Nos vemos*.
  - Odsłuch w akcentowanym meksykańskim hiszpańskim.

---

## 5. ARENA GIER I QUIZÓW (4 Interaktywne Mini-Gry bez backendu)

Wszystkie gry zawierają wskaźnik punktów, natychmiastowy feedback i tryb projektorowy (czytelne przyciski 44px+):

1. **Dopasowywanie Słów do Obrazków / Symboli (Drag & Drop lub Kliknij-i-Połącz):**
   - Łączenie hiszpańskich słów ze stylizowanymi symbolami SVG (np. *Sombra*, *Sol*, *Guitarra*, *Taco*, *Castillo*).
2. **Quiz Wiedzy Kulturowej (Tradycje, Historia, Geografia):**
   - Pytań: 8–10 z natychmiastową weryfikacją odpowiedzi i krótkim wyjaśnieniem edukacyjnym.
3. **Rozpoznawanie Flag, Zabytków i Symboli (Szybki Test Wizualny):**
   - Identyfikacja czy dany zabytek/symbol/flaga należy do Hiszpanii, czy do Meksyku.
4. **Pojedynek Dialektów (Pojedynek Słowny):**
   - Przyporządkuj słowo do właściwego kraju (np. gdzie powiesz *¡Chido!*, a gdzie *¡Mola!*).

---

## 6. ODPOWIEDZIALNOŚĆ NA DUŻY EKRAN I TELEFONY
- **Projektor / Duży ekran (Layout Desktop):** Szeroka siatka 12 kolumn, wysoki kontrast, duże przyciski, czytelna typografia z dużej odległości.
- **Telefony uczniów (Mobile):** Układ 1-kolumnowy, dotykowe cele min. 44px, wysuwane menu i modal QR idealny do skanowania z ekranu projektora.

🛠️ Zalecana Struktura Projektu (Dla Developera)

Jeśli chcesz to samodzielnie ułożyć w projekcie Vite + React, oto optymalny układ plików:
Plaintext

src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Pływający pasek wg DESIGN(1).md i image_150900.png[cite: 1, 2]
│   │   ├── Footer.tsx
│   │   └── QrModal.tsx          # Modal generujący kod QR do natychmiastowej gry na telefonie
│   ├── modules/
│   │   ├── CultureCard.tsx      # Karty kulturowe (z paskiem akcentującym 3mm)
│   │   ├── AudioWordCard.tsx    # Słowniczek z syntezą speech-synthesis (es-ES / es-MX)
│   │   └── ComparisonTable.tsx  # Tabela porównawcza różnic i podobieństw
│   └── games/
│       ├── ImageWordMatch.tsx   # Dopasowywanie słów do ilustracji
│       ├── CulturalQuiz.tsx     # Quiz z odpowiedziami
│       ├── LandmarkGuesser.tsx  # Rozpoznawanie zabytków/flagi
│       └── DialectSorter.tsx    # Sortowanie zwrotów (Meksyk vs Hiszpania)
├── data/
│   ├── spainData.ts             # Dane: historia, kuchnia, słówka, audio
│   ├── mexicoData.ts            # Dane: kultura, geografia, słówka
│   ├── comparisonData.ts        # Różnice językowe i obyczajowe
│   └── quizQuestions.ts         # Pytania do gier
├── hooks/
│   └── useSpeech.ts             # Natywna obsługa wymowy w przeglądarce
├── styles/
│   └── theme.css                # Zmienne kolorów i fonty z DESIGN(1).md
├── App.tsx
└── main.tsx

💡 Jak zrealizować wymowę bez backendu? (useSpeech.ts)

Możesz użyć natywnego API przeglądarki, co eliminuje potrzebę pobierania zewnętrznych plików MP3 i działa błyskawicznie:
TypeScript

export const speakWord = (text: string, lang: 'es-ES' | 'es-MX') => {
  if (!('speechSynthesis' in window)) {
    alert('Twoja przeglądarka nie obsługuje syntezy mowy.');
    return;
  }
  
  // Anuluj poprzednie odtwarzanie
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang; // 'es-ES' dla Hiszpanii, 'es-MX' dla Meksyku
  utterance.rate = 0.9;  // Lekko zwolnione dla ułatwienia nauki

  window.speechSynthesis.speak(utterance);
};

🚀 Automatyczny Build pod GitHub Pages (.github/workflows/deploy.yml)

Wystarczy dodać plik workflow, aby po każdym git push strona automatycznie budowała się i publikowała na GitHub Pages bez żmudnego ręcznego wrzucania plików:
YAML

name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-parser: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4

✅ Dlaczego ten plan idealnie pasuje do Twoich wymagań?

    0% Backendu, 100% Statyki: Pełna kompatybilność z GitHub Pages[cite: 1].

    Kompaktowe UI i styl edytorski: Idealnie odwzorowuje wytyczne z pliku DESIGN(1).md (kolory, typografia Comfortaa, brak piskliwych emoji)[cite: 1] oraz strukturę nagłówka z podesłanego screena.   
    PNG

    Funkcja QR w headerze: Pozwala na szybkie zepięcie prezentacji z projektora z prywatnymi telefonami uczniów w klasie.   
    PNG

    Gotowe gry: Wszystkie minigry bazują file:///home/zota/Downloads/DESIGN(1).mdna prostym stanie w React (useState), dzięki czemu działają płynnie i bez opóźnień sieciowych.


Tak — plan jest dobry jako punkt startowy, ale przed przekazaniem go AI do budowania strony poprawiłbym kilka rzeczy. Obecna wersja jest bardziej „specyfikacją techniczną” niż naprawdę dobrym planem produktu + UX + zawartości, a właśnie tego będzie potrzebować AI, żeby nie wygenerować kolejnego generycznego quizu.

Sam DESIGN.md jest bardzo dobrze zdefiniowany: ma konkretną paletę, typografię, siatkę i zasady komponentów. Szczególnie mocny jest kierunek „kuratorskiego pawilonu wystawienniczego”, zamiast typowo szkolnego, kolorowego UI.
Moja ocena

Obecny plan: 8/10

Po poprawkach można zrobić z tego 9.5/10.

Największe zalety:

    React + Vite + TypeScript — bardzo dobry wybór.

    Zero backendu — idealne pod GitHub Pages.

    QR w headerze — świetne rozwiązanie dla projektora.

    Osobne doświadczenie Hiszpania / Meksyk + wspólna sekcja.

    Gry działające lokalnie w React state.

    Web Speech API — sensowny sposób na wymowę bez assetów audio.

    Design ma bardzo konkretną identyfikację wizualną.

    Projektor został uwzględniony już na poziomie UX.

    44px touch targets, 12-column grid i responsywność są już sensownie określone w designie.

Ale jest kilka rzeczy, które zdecydowanie bym zmienił.
1. Najważniejsza zmiana: nie rób z tego „strony z zakładkami”

W obecnym planie:

    Strona Główna
    Pawilon Hiszpanii
    Pawilon Meksyku
    Dialog Transatlantycki
    Arena Gier

To jest poprawne technicznie, ale trochę zbyt klasyczne.

Ja zrobiłbym z tego bardziej:

┌───────────────────────────────────────────────────────┐
│  IBERIA × MÉXICO                     QR   MENU        │
│                                                       │
│  [ HISZPANIA ] [ MEKSYK ] [ DIALOG ] [ GRY ]         │
└───────────────────────────────────────────────────────┘

A strona główna powinna być czymś w rodzaju interaktywnego wejścia do wystawy.
Hero

IBERIA × MÉXICO

Jeden język.
Dwa światy.
Niezliczone historie.

Poznaj Hiszpanię i Meksyk poprzez język,
kulturę, jedzenie, muzykę i ludzi.

[ ODKRYJ HISZPANIĘ ]
[ ODKRYJ MEKSYK ]

Pod spodem:

        HISZPANIA       ↔       MEKSYK
          2 klasy                2 klasy

       język • kultura • historia • współczesność

To znacznie lepiej pasuje do idei wspólnego projektu kilku klas.
2. Dodałbym „mapę ekspozycji”

To moim zdaniem jedna z najważniejszych rzeczy, których brakuje.

Na stronie głównej:
Odkryj dwa światy

                    START
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
      HISZPANIA                MEKSYK
          │                       │
     ┌────┼────┐             ┌────┼────┐
     ↓    ↓    ↓             ↓    ↓    ↓
   Język Kultura Kuchnia    Język Kultura Kuchnia
     │    │    │             │    │    │
     └────┴────┴──────┬──────┴────┴────┘
                      ↓
               DIALOG
                      ↓
                   GRY

Wizualnie można to zrobić jako eleganckie karty/nawigację.

Dzięki temu użytkownik od razu rozumie:

„Co ja tutaj właściwie mogę robić?”
3. Każdy kraj powinien mieć identyczną strukturę

To bardzo ważne.

Nie:

Hiszpania:
- historia
- jedzenie
- słowa

Meksyk:
- Aztekowie
- tacos
- słowa

tylko:
🇪🇸 HISZPANIA

01 / GEOGRAFIA
02 / HISTORIA
03 / KULTURA
04 / ARCHITEKTURA
05 / KUCHNIA
06 / MUZYKA
07 / ŚWIĘTA I ZWYCZAJE
08 / JĘZYK
09 / CIEKAWOSTKI

🇲🇽 MEKSYK

01 / GEOGRAFIA
02 / HISTORIA
03 / KULTURA
04 / ARCHITEKTURA
05 / KUCHNIA
06 / MUZYKA
07 / ŚWIĘTA I ZWYCZAJE
08 / JĘZYK
09 / CIEKAWOSTKI

To stworzy bardzo fajne poczucie:

    „Teraz zwiedzam Hiszpanię, a teraz dokładnie ten sam aspekt Meksyku.”

4. Dodałbym bardzo dużą sekcję „Czy wiesz, że...?”

To może być jedna z najlepszych części na projektor.

Np.

CZY WIESZ, ŻE...

Meksyk jest jednym z najbardziej
zróżnicowanych biologicznie krajów świata.

01 / 12

[←]                           [→]

Albo:

CZY WIESZ, ŻE...

Hiszpański jest językiem urzędowym
w ponad 20 państwach.

Ale ważne: każda ciekawostka powinna mieć źródło.

W planie dla AI dodałbym:

Każda informacja faktograficzna powinna posiadać
opcjonalne pole source/sourceUrl w danych.
Interfejs może pokazywać źródło na końcu karty
lub w rozwijanym panelu „Źródło”.

To bardzo podnosi wiarygodność projektu szkolnego.
5. Gry: obecne 4 są dobre, ale zrobiłbym 6

Obecne:

    Dopasowanie

    Quiz

    Rozpoznawanie

    Dialekt

są OK.

Dodałbym:
5. Słuchaj i zgadnij

Na ekranie:

    🔊 Hola

Uczeń słyszy słowo i wybiera:

A. Hiszpania
B. Meksyk
C. Oba

albo:

    Co zostało powiedziane?

A. Gracias
B. Buenos días
C. Hasta luego

To wykorzystuje Web Speech API.
6. „Co byś wybrał?”

Mini-scenariusze kulturowe.

Jesteś w Meksyku podczas Día de los Muertos.

Co możesz zobaczyć?

○ Ofrendę
○ Pisanki
○ Choinkę
○ Korowód karnawałowy

Po odpowiedzi:

DOBRZE

Ofrenda to specjalnie przygotowany ołtarz
upamiętniający zmarłych.

To jest znacznie bardziej edukacyjne niż samo:

    „Jaka jest stolica Meksyku?”

6. Bardzo dobry pomysł: tryb „PROJEKTOR”

To powinno być pełnoprawną funkcją, a nie tylko zwiększeniem fontu.

W headerze:

[ PROJEKTOR ]

Po kliknięciu:

PROJECTOR MODE

i strona zmienia się na:

    większe fonty,

    większe przyciski,

    mniej informacji na ekranie,

    większe karty,

    mniej elementów nawigacyjnych,

    brak hover-dependent UI,

    mocniejszy kontrast,

    większy spacing.

Design już przewiduje dużą, rygorystyczną siatkę i odpowiednie marginesy dla desktopu.

Ja poszedłbym krok dalej i zrobił:

Normal Mode
Projector Mode

jako dwa warianty całego layoutu.
7. QR — zrobiłbym go trochę inaczej

Obecny pomysł jest bardzo dobry.

Ale modal:

┌──────────────────────────────┐
│          DOŁĄCZ              │
│                              │
│       █████████████          │
│       ██ QR CODE ██          │
│       █████████████          │
│                              │
│ Zeskanuj telefonem           │
│                              │
│ example.github.io/project    │
│                              │
│ [ KOPIUJ LINK ]              │
└──────────────────────────────┘

I nie wpisywać URL na sztywno.

const url = window.location.href

Wtedy działa:

localhost
↓
GitHub Pages
↓
custom domain

bez zmiany kodu.

Dodatkowo:

[ QR ]

powinno być dostępne zarówno w normalnym headerze, jak i w Projector Mode.
8. Ważna poprawka techniczna: „SSG”

Tutaj Gemini trochę miesza pojęcia.

    „Vite + React + ... SSG”

Sam Vite + React nie daje automatycznie klasycznego SSG.

Jeżeli aplikacja będzie jedną statyczną aplikacją React:

npm run build
        ↓
dist/
├── index.html
├── assets/
│   ├── index-xxx.js
│   └── index-xxx.css
└── ...

to w zupełności wystarczy dla tego projektu.

Nie potrzebujesz Next.js ani Astro.

Ja nawet nie komplikowałbym tego SSG.

Architektura:

React SPA
+
Vite static build
+
GitHub Pages

jest tutaj idealna.
9. W workflow jest błąd

Gemini podał:

with:
  node-parser: '20'

To jest błędne.

Powinno być:

with:
  node-version: '20'

Czyli:

- name: Setup Node
  uses: actions/setup-node@v4
  with:
    node-version: 20

To ma znaczenie, bo inaczej wygenerowany projekt może nie deployować się poprawnie.
10. Dodałbym strukturę danych, która pozwoli AI generować treść

To jest bardzo ważne.

Nie wkładałbym treści bezpośrednio do komponentów.

Np.:

export interface CountrySection {
  id: string
  title: string
  description: string
  image?: string
  accent: 'spain' | 'mexico'
}

i:

export interface VocabularyItem {
  word: string
  pronunciation: string
  translation: string
  example?: string
  speechLang: 'es-ES' | 'es-MX'
  category: string
}

Quiz:

export interface QuizQuestion {
  id: string
  question: string
  answers: string[]
  correctAnswer: number
  explanation: string
  country: 'spain' | 'mexico' | 'both'
  difficulty: 'easy' | 'medium' | 'hard'
}

Dzięki temu później możesz dodać 50 pytań bez ruszania komponentu.
11. Słownik powinien być znacznie większy

Nie ograniczałbym się do:

    Hola / Gracias / Por favor

Zrobiłbym:
PODSTAWY

Hola
Cześć
[ wymowa ]

Buenos días
Dzień dobry
[ wymowa ]

Buenas tardes
Dobry wieczór / Dzień dobry po południu
[ wymowa ]

Gracias
Dziękuję

Por favor
Proszę

Sí
Tak

No
Nie

LUDZIE

amigo
przyjaciel

familia
rodzina

niño
dziecko

PRZEDMIOTY

mesa
stół

libro
książka

casa
dom

agua
woda

JEDZENIE

pan
chleb

queso
ser

taco
taco

PODRÓŻ

hotel
hotel

aeropuerto
lotnisko

tren
pociąg

I dopiero potem:
🇪🇸 🇲🇽 RÓŻNICE

Hiszpania              Meksyk

coche                   carro
ordenador               computadora
zumo                    jugo

Design już przewiduje właśnie taki dwukolumnowy comparative glossary.
12. Jedna rzecz, którą bym zmienił w designie

Gemini napisał:

    „Typografia: Nagłówki Comfortaa”

I to rzeczywiście wynika z DESIGN.md.

Ale nie używałbym Comfortaa absolutnie wszędzie.

W praktyce:

Comfortaa
↓
hero
nagłówki
numery sekcji
ważne słowa

Plus Jakarta Sans
↓
cała reszta

To będzie wyglądało bardziej profesjonalnie.
13. Nie przesadzałbym z „meksykańskością” i „hiszpańskością”

To bardzo ważne przy tym projekcie.

W DESIGN.md jest bardzo dobry zapis:

    „Odrzuca infantylizację, tanie motywy folklorystyczne i przypadkowe dekoracje emoji.”

Tego bym pilnował bardzo mocno.

Czyli nie:

🌮 🇲🇽 💃 ☀️ 🎉

wszędzie.

Zamiast tego:

    subtelne SVG,

    geometria,

    linie,

    ornament,

    fotografia,

    typografia,

    fragmenty wzorów,

    mapy,

    ilustracje.

Sam DESIGN.md bardzo dobrze określa wykorzystanie geometrii azulejos i papel picado.

To jest dużo bardziej premium.
14. Dodałbym „timeline”

Szczególnie dla historii.

Np. Hiszpania:

711
Al-Andalus

1492
Granada
↓
1492
Podróż Kolumba
↓
XVI–XVII w.
Imperium Hiszpańskie
↓
XX w.
Hiszpania współczesna

Meksyk:

Cywilizacje prekolumbijskie
        ↓
Tenochtitlán
        ↓
Podbój
        ↓
Nowa Hiszpania
        ↓
Niepodległość
        ↓
Meksyk współczesny

Nie jako podręcznik historii — tylko kilka najważniejszych punktów.

Na projektorze wyglądałoby to świetnie.
15. Dodałbym „World Impact”

To jest jedna z rzeczy, o których wspomniałeś, a Gemini trochę ją zgubił.

Osobna sekcja:
HISZPANIA → ŚWIAT

JĘZYK
↓
literatura
↓
muzyka
↓
architektura
↓
kuchnia
↓
Ameryka Łacińska
↓
współczesna kultura globalna

i:
MEKSYK → ŚWIAT

KUCHNIA
MUZYKA
FILM
SZTUKA
LITERATURA
DESIGN
JĘZYK

oraz:
WSPÓLNY JĘZYK

Ponad 500 mln osób
         ↓
       ESPAÑOL
      ↙       ↘
   EUROPA    AMERYKA
      ↓         ↓
 HISZPANIA    MEKSYK

To świetnie uzasadnia nazwę Diálogo Transatlántico.
16. Finalna architektura, którą dałbym AI

Ja połączyłbym wszystko w taki układ:

HOME
│
├── HERO
│
├── MAPA WYSTAWY
│
├── HISZPANIA
│   ├── Geografia
│   ├── Historia
│   ├── Kultura
│   ├── Architektura
│   ├── Kuchnia
│   ├── Muzyka
│   ├── Święta
│   ├── Język
│   ├── Słownik
│   └── Ciekawostki
│
├── MEKSYK
│   ├── Geografia
│   ├── Historia
│   ├── Kultura
│   ├── Architektura
│   ├── Kuchnia
│   ├── Muzyka
│   ├── Święta
│   ├── Język
│   ├── Słownik
│   └── Ciekawostki
│
├── DIALOG
│   ├── Język
│   ├── Słownictwo
│   ├── Zwyczaje
│   ├── Kuchnia
│   ├── Muzyka
│   └── Wpływ na świat
│
├── WORLD IMPACT
│
├── CZY WIESZ, ŻE...
│
└── ARENA GIER
    ├── Match
    ├── Quiz
    ├── Flags & Landmarks
    ├── Dialect Sorter
    ├── Listen & Guess
    └── Cultural Scenarios

17. I jeszcze jedna bardzo ważna rzecz: gry powinny działać na dwóch ekranach

Tutaj widzę potencjał na najfajniejszy element całego projektu.

Projektor:

┌─────────────────────────────────────────┐
│            QUIZ: HISZPANIA              │
│                                         │
│  Które miasto jest stolicą Hiszpanii?   │
│                                         │
│     A       B       C       D            │
│                                         │
│              PYTANIE 3/10               │
└─────────────────────────────────────────┘

Telefony:

┌─────────────────────┐
│       QUIZ          │
│                     │
│  Odpowiedź:         │
│                     │
│  [ A ]              │
│  [ B ]              │
│  [ C ]              │
│  [ D ]              │
└─────────────────────┘

Ale bez backendu nie można zsynchronizować wielu telefonów z projektorem między urządzeniami.

I to trzeba jasno powiedzieć AI.

Można zrobić:
Tryb A — „wspólna gra”

Projektor pokazuje pytanie → klasa odpowiada wspólnie → prowadzący klika odpowiedź.

100% offline/static.
Tryb B — „gra na telefonie”

Każdy uczeń otwiera stronę przez QR → gra samodzielnie → wynik jest lokalny.

100% static.

To jest realne bez backendu.

Nie próbowałbym udawać multiplayera bez serwera.
18. Co bym ostatecznie przekazał AI

Nie dawałbym mu obecnego promptu 1:1.

Najpierw dodałbym nadrzędną zasadę:

    Nie twórz zwykłej strony informacyjnej. Twórz interaktywną cyfrową wystawę edukacyjną.

To jedno zdanie bardzo zmienia wynik generowany przez AI.

A następnie:

PRIMARY GOAL

Build an interactive digital exhibition for a school
Foreign Languages Day.

The website must feel like a curated museum exhibition,
not like a typical educational dashboard, school website
or children's game website.

The experience should combine:

- culture
- language
- geography
- history
- food
- music
- traditions
- architecture
- visual storytelling
- interactive games

for Spain and Mexico.

The user should be able to explore the countries independently,
compare them, learn basic Spanish vocabulary and pronunciation,
and finally test their knowledge through interactive games.

The website must work equally well:

1. on a large projector used by a teacher/class,
2. on smartphones used individually by students.

NO BACKEND.

NO DATABASE.

NO AUTHENTICATION.

NO SERVER-SIDE LOGIC.

Everything must work from static files generated by Vite.
All game state must remain in React/browser state.
Persistent personal scores may optionally use localStorage.

The application must be deployable directly to GitHub Pages.

Dopiero pod tym dałbym cały design z DESIGN.md.
I jedna rzecz, którą zdecydowanie zachowałbym

Sam design system jest naprawdę mocny. Szczególnie podoba mi się konsekwencja:

    papierowe tło,

    czerwień Hiszpanii,

    zieleń Meksyku,

    indygo,

    cienkie bordiury,

    14px cards,

    editorial grid,

    SVG zamiast emoji.

To tworzy spójną identyfikację i jest dokładnie tym, co powinno odróżnić projekt od typowej szkolnej strony.

Największa poprawka względem planu Gemini: potraktowałbym to nie jako „Reactową stronę z pięcioma zakładkami”, tylko jako interaktywną wystawę, w której Hiszpania, Meksyk, Dialog, World Impact i Arena są kolejnymi salami tej wystawy.

Technicznie natomiast zostałbym przy Vite + React + TypeScript + Tailwind + static build + GitHub Pages. Nie ma potrzeby komplikowania tego Next.js/SSR/realnym backendem.



