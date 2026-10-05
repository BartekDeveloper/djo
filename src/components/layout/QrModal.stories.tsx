import type { Meta, StoryObj } from '@storybook/react'
import QrModal from './QrModal'

const meta: Meta<typeof QrModal> = {
  component: QrModal,
}

export default meta

export const Open: StoryObj<typeof QrModal> = {
  args: { open: true, onClose: () => {} },
}
