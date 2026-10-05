import type { QuizQuestion } from './types'

export interface MatchPair {
  id: string
  es: string
  pl: string
}

export interface GuessItem {
  id: string
  label: string
  hint: string
  country: 'spain' | 'mexico'
}

export interface SortItem {
  id: string
  word: string
  country: 'spain' | 'mexico'
}

export const culturalQuiz: QuizQuestion[] = [
  {
    id: 'q-stolica-es',
    question: 'Które miasto jest stolicą Hiszpanii?',
    answers: ['Barcelona', 'Madryt', 'Sewilla', 'Walencja'],
    correctAnswer: 1,
    explanation: 'Madryt to stolica od 1561 roku — leży w samym środku Półwyspu Iberyjskiego.',
    country: 'spain',
  },
  {
    id: 'q-stolica-mx',
    question: 'Które miasto jest stolicą Meksyku?',
    answers: ['Cancún', 'Guadalajara', 'Meksyk (CDMX)', 'Puebla'],
    correctAnswer: 2,
    explanation: 'Meksyk stoi na ruinach azteckiego Tenochtitlánu — to jedna z największych metropolii świata.',
    country: 'mexico',
  },
  {
    id: 'q-muertos',
    question: 'Czym jest ofrenda podczas Día de los Muertos?',
    answers: ['Ołtarzem dla zmarłych', 'Rodzajem tańca', 'Pikantnym sosem', 'Strojem matadora'],
    correctAnswer: 0,
    explanation: 'Ofrenda to ołtarz ze zdjęciami, nagietkami i ulubionym jedzeniem zmarłych.',
    country: 'mexico',
  },
  {
    id: 'q-flamenco',
    question: 'Skąd pochodzi flamenco?',
    answers: ['Z Katalonii', 'Z Andaluzji', 'Z Galicji', 'Z Kraju Basków'],
    correctAnswer: 1,
    explanation: 'Flamenco narodziło się w Andaluzji z mieszanki kultur: andaluzyjskiej, romskiej i żydowskiej.',
    country: 'spain',
  },
  {
    id: 'q-jezyk',
    question: 'Ilu ludzi na świecie mówi po hiszpańsku?',
    answers: ['Około 100 mln', 'Około 250 mln', 'Ponad 500 mln', 'Ponad miliard'],
    correctAnswer: 2,
    explanation: 'Ponad 500 milionów — hiszpański to drugi język świata pod względem rodzimych użytkowników.',
    country: 'both',
  },
  {
    id: 'q-tomatina',
    question: 'Na czym polega La Tomatina w Buñol?',
    answers: ['Na biegu z bykami', 'Na bitwie na pomidory', 'Na paleniu kukieł', 'Na konkursie paelli'],
    correctAnswer: 1,
    explanation: 'W ostatnią środę sierpnia kilkadziesiąt ton pomidorów leci w tłum.',
    country: 'spain',
  },
  {
    id: 'q-chichen',
    question: 'Co dzieje się w Chichén Itzá w dniu równonocy?',
    answers: ['Piramida rzuca cień węża', 'Słychać echo dzwonów', 'Otwiera się grobowiec', 'Zapada się schody'],
    correctAnswer: 0,
    explanation: 'Cień na schodach Kukulkana układa się w pełzającego węża — majstersztyk astronomii Majów.',
    country: 'mexico',
  },
  {
    id: 'q-tapas',
    question: 'Czym są tapas?',
    answers: ['Małymi daniami do dzielenia', 'Rodzajem gitary', 'Kapeluszem torreadora', 'Świętem wina'],
    correctAnswer: 0,
    explanation: 'Tapas to małe porcje — od tortilli po gambas al ajillo — zamawiane do baru i dzielone.',
    country: 'spain',
  },
]

export const landmarkGuess: GuessItem[] = [
  { id: 'g-flaga-es', label: 'Flaga w czerwono-żółto-czerwone poziome pasy', hint: 'Kolory krwi i złota', country: 'spain' },
  { id: 'g-flaga-mx', label: 'Flaga w zielono-biało-czerwone pionowe pasy z orłem', hint: 'Orzeł na kaktusie z legendy Azteków', country: 'mexico' },
  { id: 'g-sagrada', label: 'Sagrada Família — bazylika Gaudiego', hint: 'Budowana od 1882 roku', country: 'spain' },
  { id: 'g-chichen', label: 'Piramida Kukulkana w Chichén Itzá', hint: 'Jeden z nowych cudów świata', country: 'mexico' },
  { id: 'g-alhambra', label: 'Alhambra — pałac z dziedzińcem Lwów', hint: 'Grenada, XIII wiek', country: 'spain' },
  { id: 'g-mariachi', label: 'Mariachi w sombrero z trąbkami', hint: 'Muzyka z Jalisco', country: 'mexico' },
  { id: 'g-toro', label: 'Byk Osborne przy autostradzie', hint: 'Symbol-silwetka z lat 50.', country: 'spain' },
  { id: 'g-alebrije', label: 'Alebrije — jaskrawy drewniany stwór', hint: 'Rzemiosło z Oaxaca', country: 'mexico' },
]

export const dialectSort: SortItem[] = [
  { id: 's-coche', word: 'coche (samochód)', country: 'spain' },
  { id: 's-carro', word: 'carro (samochód)', country: 'mexico' },
  { id: 's-ordenador', word: 'ordenador (komputer)', country: 'spain' },
  { id: 's-computadora', word: 'computadora (komputer)', country: 'mexico' },
  { id: 's-zumo', word: 'zumo (sok)', country: 'spain' },
  { id: 's-jugo', word: 'jugo (sok)', country: 'mexico' },
  { id: 's-mola', word: '¡mola! (fajne!)', country: 'spain' },
  { id: 's-chido', word: '¡chido! (fajne!)', country: 'mexico' },
  { id: 's-vale', word: '¡vale! (okej!)', country: 'spain' },
  { id: 's-orale', word: '¡órale! (no jasne!)', country: 'mexico' },
]

export const wordMatch: MatchPair[] = [
  { id: 'm-sol', es: 'el sol', pl: 'słońce' },
  { id: 'm-guitarra', es: 'la guitarra', pl: 'gitara' },
  { id: 'm-taco', es: 'el taco', pl: 'taco' },
  { id: 'm-castillo', es: 'el castillo', pl: 'zamek' },
  { id: 'm-playa', es: 'la playa', pl: 'plaża' },
  { id: 'm-fiesta', es: 'la fiesta', pl: 'święto / impreza' },
  { id: 'm-mercado', es: 'el mercado', pl: 'targ' },
  { id: 'm-luna', es: 'la luna', pl: 'księżyc' },
]
