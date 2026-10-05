import type { ImageSlot } from '../../data/images'

interface PageHeroProps {
  kicker: string
  title: string
  lead?: string
  accent: 'spain' | 'mexico'
  image: ImageSlot
}

export default function PageHero({ kicker, title, lead, accent, image }: PageHeroProps) {
  return (
    <section className="relative mt-6 overflow-hidden rounded-[14px] border border-line">
      <img src={image.src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
      <div className="relative p-8 md:p-12">
        <p className="text-xs font-bold uppercase tracking-widest text-white/80">{kicker}</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <div className={`mt-4 h-1 w-24 ${accent === 'spain' ? 'bg-[#ff8a7a]' : 'bg-[#7ddba3]'}`} aria-hidden="true" />
        {lead && <p className="mt-4 max-w-2xl text-lg text-white/90">{lead}</p>}
      </div>
    </section>
  )
}
