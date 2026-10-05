import type { Meta, StoryObj } from '@storybook/react'
import AudioWordCard from './AudioWordCard'

const meta: Meta<typeof AudioWordCard> = {
  component: AudioWordCard,
}

export default meta

export const Spain: StoryObj<typeof AudioWordCard> = {
  args: {
    item: {
      word: 'Gracias',
      pronunciation: '[grasjas]',
      translation: 'Dziękuję',
      speechLang: 'es-ES',
      category: 'podstawy',
      country: 'spain',
    },
  },
}

export const Mexico: StoryObj<typeof AudioWordCard> = {
  args: {
    item: {
      word: '¡Qué onda!',
      pronunciation: '[ke onda]',
      translation: 'Co słychać! / Siema!',
      speechLang: 'es-MX',
      category: 'podstawy',
      country: 'mexico',
    },
  },
}
