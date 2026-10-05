import type { TimelinePoint } from '../../data/types'

export default function Timeline({ points, accent }: { points: TimelinePoint[]; accent: 'spain' | 'mexico' }) {
  return (
    <ol className="relative ml-2 border-l-2 border-line pl-6">
      {points.map((p) => (
        <li key={p.year} className="relative pb-8 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[33px] top-1 h-3 w-3 rounded-full ${accent === 'spain' ? 'bg-spain' : 'bg-mexico'}`}
          />
          <p className="font-display text-sm font-bold uppercase tracking-widest">{p.year}</p>
          <h3 className="font-display mt-1 text-lg font-semibold">{p.title}</h3>
          <p className="mt-1 max-w-2xl text-base">{p.description}</p>
        </li>
      ))}
    </ol>
  )
}
