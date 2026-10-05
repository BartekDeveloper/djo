import { useMemo, useState } from 'react'
import FlagEs from '../decor/FlagEs'
import FlagMx from '../decor/FlagMx'
import { CountryButton, ResultPanel, ScorePill, Verdict, type CountryState } from './GameBits'
import { landmarkGuess } from '../../data/quiz'
import { shuffle } from '../../utils/shuffle'

const options = [
  { key: 'spain', label: 'Hiszpania', flag: <FlagEs className="h-5 w-8 rounded-[4px] border border-line" /> },
  { key: 'mexico', label: 'Meksyk', flag: <FlagMx className="h-5 w-8 rounded-[4px] border border-line" /> },
] as const

export default function LandmarkGuesser() {
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<'spain' | 'mexico' | null>(null)
  const [score, setScore] = useState(0)
  const items = useMemo(() => shuffle(landmarkGuess), [])
  const item = items[index]
  if (!item) return null
  const last = index === items.length - 1
  const good = chosen !== null && chosen === item.country

  const guess = (c: 'spain' | 'mexico') => {
    if (chosen) return
    setChosen(c)
    if (c === item.country) setScore((s) => s + 1)
  }

  const next = () => {
    setIndex((i) => i + 1)
    setChosen(null)
  }

  const reset = () => {
    setIndex(0)
    setChosen(null)
    setScore(0)
  }

  const stateOf = (key: 'spain' | 'mexico'): CountryState => {
    if (chosen === null) return 'idle'
    if (key === item.country) return 'good'
    if (key === chosen) return 'bad'
    return 'dim'
  }

  return (
    <div>
      <ScorePill label="Symbol" current={index + 1} total={items.length} score={score} />
      <h3 className="font-display mt-3 text-xl font-semibold">{item.label}</h3>
      <p className="mt-1 text-sm text-muted">Podpowiedź: {item.hint}</p>
      <div className="mt-4 grid grid-cols-2 gap-2" role="group" aria-label="Wybierz kraj">
        {options.map((o) => (
          <CountryButton
            key={o.key}
            flag={o.flag}
            label={o.label}
            state={stateOf(o.key)}
            disabled={chosen !== null}
            onClick={() => guess(o.key)}
          />
        ))}
      </div>
      <div className="mt-4">
        {!last && (
          <button
            type="button"
            onClick={next}
            disabled={!chosen}
            className="inline-flex min-h-[44px] items-center rounded-[10px] bg-ink px-6 py-2 text-sm font-semibold text-[#f9f6f0] disabled:opacity-40"
          >
            Następny symbol
          </button>
        )}
      </div>
      <div className="mt-3 min-h-[96px]">
        {chosen && (
          <Verdict good={good}>
            {good ? 'To ten kraj.' : `Nie — to ${item.country === 'spain' ? 'Hiszpania' : 'Meksyk'}. ${item.hint}`}
          </Verdict>
        )}
      </div>
      {last && chosen && (
        <div className="mt-4">
          <ResultPanel score={score} total={items.length} onRetry={reset} />
        </div>
      )}
    </div>
  )
}
