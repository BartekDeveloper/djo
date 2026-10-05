import { Check } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ScorePill } from './GameBits'
import { wordMatch } from '../../data/quiz'
import { shuffle } from '../../utils/shuffle'

const KEY = 'hm-score-match'

export default function ImageWordMatch() {
  const left = useMemo(() => shuffle(wordMatch), [])
  const right = useMemo(() => shuffle(wordMatch), [])
  const [picked, setPicked] = useState<string | null>(null)
  const [done, setDone] = useState<string[]>([])
  const [miss, setMiss] = useState(false)
  const best = Number(localStorage.getItem(KEY) ?? 0)

  const choose = (side: 'es' | 'pl', id: string) => {
    if (done.includes(id)) return
    if (!picked) {
      setPicked(`${side}:${id}`)
      return
    }
    const [pickedSide, pickedId] = picked.split(':')
    if (pickedSide === side) {
      setPicked(`${side}:${id}`)
      return
    }
    if (pickedId === id) {
      const next = [...done, id]
      setDone(next)
      setPicked(null)
      if (next.length === wordMatch.length) {
        if (next.length > best) localStorage.setItem(KEY, String(next.length))
      }
    } else {
      setMiss(true)
      setPicked(null)
      window.setTimeout(() => setMiss(false), 1200)
    }
  }

  const reset = () => {
    setDone([])
    setPicked(null)
  }

  const isPicked = (side: 'es' | 'pl', id: string) => picked === `${side}:${id}`
  const isDone = (id: string) => done.includes(id)

  const btn = (side: 'es' | 'pl', id: string) =>
    `flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] border-[1.5px] px-3 py-2 text-sm transition-all duration-200 ${
      isDone(id)
        ? 'border-talavera bg-talavera/10 font-semibold'
        : isPicked(side, id)
          ? 'border-ink bg-sunken font-semibold'
          : 'border-line-strong bg-panel hover:border-ink'
    }`

  return (
    <div>
      <ScorePill label="Dopasowano" current={done.length} total={wordMatch.length} score={done.length} />
      {best > 0 && (
        <p className="mt-1 text-sm text-muted">
          Rekord: <strong>{best} / {wordMatch.length}</strong>
        </p>
      )}
      <p role="status" aria-live="polite" className="mt-1 min-h-6 text-sm font-semibold">
        {done.length === wordMatch.length ? 'Brawo! Wszystkie pary dopasowane.' : miss ? 'Nie ta para — spróbuj ponownie.' : ''}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2" role="group" aria-label="Słowa hiszpańskie">
          {left.map((p) => (
            <button key={p.id} type="button" disabled={isDone(p.id)} onClick={() => choose('es', p.id)} className={btn('es', p.id)}>
              {isDone(p.id) && <Check size={14} aria-hidden="true" />}
              {p.es}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2" role="group" aria-label="Tłumaczenia polskie">
          {right.map((p) => (
            <button key={p.id} type="button" disabled={isDone(p.id)} onClick={() => choose('pl', p.id)} className={btn('pl', p.id)}>
              {isDone(p.id) && <Check size={14} aria-hidden="true" />}
              {p.pl}
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={reset}
        className="mt-4 inline-flex min-h-[44px] items-center rounded-[10px] border-[1.5px] border-ink px-6 py-2 text-sm font-semibold"
      >
        Zagraj ponownie
      </button>
    </div>
  )
}
