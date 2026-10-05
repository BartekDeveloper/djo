import type { Meta, StoryObj } from '@storybook/react'
import ComparisonTable from './ComparisonTable'
import { comparison } from '../../data/comparison'

const meta: Meta<typeof ComparisonTable> = {
  component: ComparisonTable,
}

export default meta

export const Default: StoryObj<typeof ComparisonTable> = {
  args: { rows: comparison },
}
