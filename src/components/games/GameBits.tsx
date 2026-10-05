import { Check, X } from 'lucide-react'
import type { ReactNode } from 'react'

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100)
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={`Postęp: ${value} z ${max}`}
      className="h-2 w-full overflow-hidden rounded-full bg-line"
    >
      <div className="h-full rounded-full bg-talavera transition-all duration-300" style={{ width: `${pct}%` }} />
    </div>
  )
}

export function ScorePill({ label, current, total, score }: { label: string; current: number; total: number; score: number }) {
  return (
    <div>
      <p className="text-sm">
        {label} <strong>{current} / {total}</strong> · punkty: <strong>{score}</strong>
      </p>
      <div className="mt-2">
        <ProgressBar value={current} max={total} />
      </div>
    </div>
  )
}

export function Verdict({ good, children }: { good: boolean; children: ReactNode }) {
  return (
    <p
      role="status"
      className={`flex items-start gap-2 rounded-[10px] border-[1.5px] p-4 text-sm ${
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
        <strong>{good ? 'Brawo!' : 'Nie tym razem.'}</strong> {children}
      </span>
    </p>
  )
}

export function ResultPanel({ score, total, extra, onRetry }: { score: number; total: number; extra?: string; onRetry: () => void }) {
  const pct = total === 0 ? 0 : score / total
  const cheer =
    pct >= 1 ? '¡Increíble! Perfekcyjnie!' : pct >= 0.75 ? '¡Muy bien! Świetny wynik!' : pct >= 0.5 ? '¡Bien! Nieźle — jeszcze raz?' : 'Buen intento! Spróbuj ponownie.'
  return (
    <section aria-label="Wynik końcowy" className="rounded-[14px] border-[1.5px] border-ink bg-sunken p-6 text-center md:p-8">
      <p className="text-xs font-bold uppercase tracking-widest">Twój wynik</p>
      <p className="font-display mt-2 text-5xl font-bold md:text-6xl">
        {score} <span className="text-2xl text-muted">/ {total}</span>
      </p>
      <p className="font-display mt-2 text-lg font-semibold italic">{cheer}</p>
      {extra && <p className="mt-1 text-sm text-muted">{extra}</p>}
      <button
        type="button"
        onClick={onRetry}
        className="mt-5 inline-flex min-h-[44px] items-center rounded-[10px] bg-ink px-8 py-3 text-sm font-semibold text-[#f9f6f0]"
      >
        Zagraj ponownie
      </button>
    </section>
  )
}

export type CountryState = 'idle' | 'good' | 'bad' | 'dim'

export function CountryButton({
  flag,
  label,
  state,
  disabled,
  onClick,
  ariaLabel,
}: {
  flag: ReactNode
  label: string
  state: CountryState
  disabled: boolean
  onClick: () => void
  ariaLabel?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] border-[1.5px] px-4 py-3 text-sm font-bold transition-all duration-200 ${
        state === 'good'
          ? 'border-talavera bg-talavera/10'
          : state === 'bad'
            ? 'border-ink bg-ink text-[#f9f6f0]'
            : state === 'dim'
              ? 'border-line bg-panel opacity-50'
              : 'border-line-strong bg-panel hover:border-ink hover:shadow-[0_2px_8px_-2px_rgba(26,22,21,0.15)]'
      }`}
    >
      {flag}
      {label}
      {state === 'good' && <Check size={16} aria-hidden="true" />}
      {state === 'bad' && <X size={16} aria-hidden="true" />}
    </button>
  )
}
