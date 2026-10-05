import type { Meta, StoryObj } from '@storybook/react'
import { CountryButton, ProgressBar, ScorePill, Verdict } from './GameBits'
import FlagEs from '../decor/FlagEs'

const meta: Meta = {
  title: 'Games/Bits',
}

export default meta

export const Bits: StoryObj = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4">
      <ScorePill label="Pytanie" current={3} total={8} score={2} />
      <Verdict good>To ten kraj.</Verdict>
      <Verdict good={false}>Nie — to Hiszpania.</Verdict>
      <CountryButton
        flag={<FlagEs className="h-5 w-8 rounded-[4px] border border-line" />}
        label="Hiszpania"
        state="idle"
        disabled={false}
        onClick={() => {}}
      />
      <CountryButton
        flag={<FlagEs className="h-5 w-8 rounded-[4px] border border-line" />}
        label="Hiszpania"
        state="good"
        disabled
        onClick={() => {}}
      />
      <ProgressBar value={5} max={8} />
    </div>
  ),
}
