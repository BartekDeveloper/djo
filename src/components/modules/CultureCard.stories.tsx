import type { Meta, StoryObj } from '@storybook/react'
import CultureCard from './CultureCard'
import { IMAGES } from '../../data/images'

const meta: Meta<typeof CultureCard> = {
  component: CultureCard,
}

export default meta

export const Spain: StoryObj<typeof CultureCard> = {
  args: {
    title: 'Alhambra w Grenadzie',
    description: 'Pałac-twierdza z XIII wieku — arcydzieło architektury islamu w Europie.',
    accent: 'spain',
    image: IMAGES.heroSpain,
  },
}

export const Mexico: StoryObj<typeof CultureCard> = {
  args: {
    title: 'Chichén Itzá',
    description: 'Majowska piramida Kukulkana — jeden z siedmiu nowych cudów świata.',
    accent: 'mexico',
    image: IMAGES.heroMexico,
  },
}
