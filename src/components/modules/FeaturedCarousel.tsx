import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { CountrySection } from '../../data/types'

export default function FeaturedCarousel({ items }: { items: CountrySection[] }) {
  const [index, setIndex] = useState(0)
  const item = items[index]
  if (!item) return null
  const total = items.length
  const prev = () => setIndex((i) => (i - 1 + total) % total)
  const next = () => setIndex((i) => (i + 1) % total)

  return (
    <section aria-labelledby="ciekawostki-tytul" className="rounded-[14px] border border-line bg-panel p-6 md:p-8">
      <p className="text-xs font-bold uppercase tracking-widest">Czy wiesz, że…</p>
      <div aria-live="polite" className="mt-4 min-h-[140px]">
        <h3 id="ciekawostki-tytul" className="font-display text-2xl font-semibold md:text-3xl">
          {item.title}
        </h3>
        <p className="mt-2 max-w-2xl text-lg leading-8">{item.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p aria-label={`Ciekawostka ${index + 1} z ${total}`} className="font-display text-sm font-bold">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Poprzednia ciekawostka"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border-[1.5px] border-ink"
          >
            <ArrowLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Następna ciekawostka"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border-[1.5px] border-ink"
          >
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
