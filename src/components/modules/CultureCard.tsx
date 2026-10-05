import SmartImage from '../decor/SmartImage'
import type { ImageSlot } from '../../data/images'

interface CultureCardProps {
  title: string
  description: string
  accent: 'spain' | 'mexico'
  image?: ImageSlot
}

export default function CultureCard({ title, description, accent, image }: CultureCardProps) {
  return (
    <article className="overflow-hidden rounded-[14px] border border-line bg-panel shadow-[0_2px_8px_-2px_rgba(26,22,21,0.05)] transition-all duration-200 hover:shadow-[0_12px_24px_-6px_rgba(26,22,21,0.08)]">
      <div className={`h-1 w-full ${accent === 'spain' ? 'bg-spain' : 'bg-mexico'}`} aria-hidden="true" />
      {image && <SmartImage {...image} className="h-44 w-full [&_img]:rounded-none [&_img]:border-0 [&_figcaption]:px-6" />}
      <div className="p-6 md:p-8">
        <h3 className="font-display text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-base leading-7">{description}</p>
      </div>
    </article>
  )
}
