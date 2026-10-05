import { Check, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ScorePill } from './GameBits'
import { culturalQuiz } from '../../data/quiz'
import { shuffle } from '../../utils/shuffle'

export default function CulturalQuiz() {
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const qs = useMemo(() => shuffle(culturalQuiz), [])
  const q = qs[index]
  const opts = useMemo(
    () => (q ? shuffle(q.answers.map((a, i) => ({ a, ok: i === q.correctAnswer }))) : []),
    [q],
  )
  if (!q) return null
  const finished = index >= qs.length - 1 && chosen !== null
  const last = index === qs.length - 1
  const good = chosen !== null && opts[chosen]?.ok === true

  const answer = (i: number) => {
    if (chosen !== null) return
    setChosen(i)
    if (opts[i]?.ok) setScore((s) => s + 1)
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

  return (
    <div>
      <ScorePill label="Pytanie" current={index + 1} total={qs.length} score={score} />
      <h3 className="font-display mt-3 text-xl font-semibold">{q.question}</h3>
      <div className="mt-4 grid gap-2" role="group" aria-label="Odpowiedzi">
        {opts.map((o, i) => {
          const isRight = chosen !== null && o.ok
          const isWrong = chosen === i && !o.ok
          const dim = chosen !== null && !o.ok && chosen !== i
          return (
            <button
              key={o.a}
              type="button"
              onClick={() => answer(i)}
              disabled={chosen !== null}
              aria-label={`Odpowiedź ${'ABCD'[i]}: ${o.a}`}
              className={`flex min-h-[44px] items-center gap-3 rounded-[10px] border-[1.5px] px-4 py-3 text-left text-sm transition-all duration-200 ${
                isRight
                  ? 'border-talavera bg-talavera/10'
                  : isWrong
                    ? 'border-ink bg-ink text-[#f9f6f0]'
                    : dim
                      ? 'border-line bg-panel opacity-50'
                      : 'border-line-strong bg-panel hover:border-ink hover:shadow-[0_2px_8px_-2px_rgba(26,22,21,0.15)]'
              }`}
            >
              <span aria-hidden="true" className="font-display font-bold">{'ABCD'[i]}</span>
              <span className="flex-1">{o.a}</span>
              {isRight && <Check size={16} aria-hidden="true" />}
              {isWrong && <X size={16} aria-hidden="true" />}
            </button>
          )
        })}
      </div>
      {chosen !== null && (
        <p
          role="status"
          className={`mt-3 flex items-start gap-2 rounded-[10px] border-[1.5px] p-4 text-sm ${
            good ? 'border-talavera bg-talavera/10' : 'border-ink bg-sunken'
          }`}
        >
          <span
            aria-hidden="true"
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              good ? 'bg-talavera text-white' : 'bg-ink text-[#f9f6f0]'
            }`}
          >
            {good ? <Check size={14} /> : <X size={14} />}
          </span>
          <span>
            <strong>{good ? 'Dobrze!' : 'Nie tym razem.'}</strong> {q.explanation}
          </span>
        </p>
      )}
      <div className="mt-4 flex gap-2">
        {!last ? (
          <button
            type="button"
            onClick={next}
            disabled={chosen === null}
            className="inline-flex min-h-[44px] items-center rounded-[10px] bg-ink px-6 py-2 text-sm font-semibold text-[#f9f6f0] disabled:opacity-40"
          >
            Następne pytanie
          </button>
        ) : (
          chosen !== null && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-[44px] items-center rounded-[10px] bg-ink px-6 py-2 text-sm font-semibold text-[#f9f6f0]"
            >
              {finished ? `Wynik: ${score} / ${qs.length} — zagraj ponownie` : 'Zagraj ponownie'}
            </button>
          )
        )}
      </div>
    </div>
  )
}
