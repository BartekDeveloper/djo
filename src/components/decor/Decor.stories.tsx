import type { Meta, StoryObj } from '@storybook/react'
import FlagEs from './FlagEs'
import FlagMx from './FlagMx'
import { AzulejoRosette, PapelDivider } from './Ornament'
import SmartImage from './SmartImage'
import { IMAGES } from '../../data/images'

export const Flags: StoryObj = {
  render: () => (
    <div className="flex gap-4">
      <FlagEs className="h-12 w-20" />
      <FlagMx className="h-12 w-20" />
    </div>
  ),
}

export const Ornaments: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AzulejoRosette className="h-16 w-16 text-spain" />
      <PapelDivider className="text-mexico" />
    </div>
  ),
}

export const ImageOk: StoryObj = {
  render: () => <SmartImage {...IMAGES.heroSpain} className="h-64 w-full max-w-md" />,
}

export const ImageBroken: StoryObj = {
  render: () => (
    <SmartImage src="https://example.invalid/nie-istnieje.jpg" alt="Test fallbacku" className="h-64 w-full max-w-md" />
  ),
}

const meta: Meta = {
  title: 'Decor',
}

export default meta
