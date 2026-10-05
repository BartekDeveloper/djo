import type { IMAGES } from './images'

export interface CountrySection {
  id: string
  title: string
  description: string
  accent: 'spain' | 'mexico'
  featured?: boolean
  imageKey?: keyof typeof IMAGES
}

export interface VocabularyItem {
  word: string
  pronunciation: string
  translation: string
  speechLang: 'es-ES' | 'es-MX'
  category: string
  country: 'spain' | 'mexico'
}

export interface Dish {
  name: string
  description: string
  imageKey?: 'dishPaella' | 'dishJamon' | 'dishChurros' | 'dishTacos' | 'dishMole' | 'dishGuac' | 'dishTortilla' | 'dishGazpacho' | 'dishPozole' | 'dishElote'
}

export interface TimelinePoint {
  year: string
  title: string
  description: string
}

export interface ComparisonRow {
  es: string
  esPron: string
  mx: string
  mxPron: string
  pl: string
}

export interface QuizQuestion {
  id: string
  question: string
  answers: string[]
  correctAnswer: number
  explanation: string
  country: 'spain' | 'mexico' | 'both'
}
