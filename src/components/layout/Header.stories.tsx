import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta

export const Home: StoryObj<typeof Header> = {
  args: { active: 'home' },
}

export const Hiszpania: StoryObj<typeof Header> = {
  args: { active: 'hiszpania' },
}
