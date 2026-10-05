import { motion } from 'motion/react'
import Shell from '../components/layout/Shell'
import AudioWordCard from '../components/modules/AudioWordCard'
import CultureCard from '../components/modules/CultureCard'
import JumpList from '../components/modules/JumpList'
import PageHero from '../components/modules/PageHero'
import Timeline from '../components/modules/Timeline'
import SmartImage from '../components/decor/SmartImage'
import { PapelDivider } from '../components/decor/Ornament'
import { IMAGES } from '../data/images'
import { spainDishes, spainFacts, spainFestivals, spainMusic, spainSport, spainTimeline } from '../data/spain'
import { vocab } from '../data/vocab'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
}

const jumps = [
  { href: '#kultura', label: 'Kultura i miejsca' },
  { href: '#kuchnia', label: 'Kuchnia' },
  { href: '#muzyka', label: 'Muzyka' },
  { href: '#sport', label: 'Sport' },
  { href: '#jezyk', label: 'Język' },
  { href: '#historia', label: 'Historia' },
  { href: '#swieta', label: 'Święta' },
]

export default function Hiszpania() {
  return (
    <Shell accent="spain" active="hiszpania">
      <PageHero
        kicker="Pawilon Hiszpanii"
        title="España: ogień południa"
        lead="Od mauretańskich pałaców Andaluzji po modernizm Barcelony — kraj, w którym dzień kończy się po północy, a rozmowa nigdy."
        accent="spain"
        image={IMAGES.heroSpain}
      />
      <JumpList items={jumps} accent="spain" />

      <motion.section {...fade} id="kultura" aria-labelledby="kultura-tytul" className="mt-12 scroll-mt-32 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">01 — Kultura</p>
        <h2 id="kultura-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Kultura i miejsca
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {spainFacts.map((f) => (
            <CultureCard
              key={f.id}
              title={f.title}
              description={f.description}
              accent="spain"
              image={f.imageKey ? IMAGES[f.imageKey] : undefined}
            />
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} id="kuchnia" aria-labelledby="kuchnia-tytul" className="mt-16 scroll-mt-32 rounded-[14px] border border-spain/25 bg-spain-sand/70 p-6 motion-reduce:animate-none md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">02 — Kuchnia</p>
        <h2 id="kuchnia-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Kuchnia i smaki
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {spainDishes.map((d) => (
            <article key={d.name} className="overflow-hidden rounded-[14px] border border-line bg-panel">
              {d.imageKey && <SmartImage {...IMAGES[d.imageKey]} className="h-36 w-full [&_img]:rounded-none [&_img]:border-0" />}
              <div className="p-4">
                <h3 className="font-display text-base font-semibold">{d.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{d.description}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} id="muzyka" aria-labelledby="muzyka-tytul" className="mt-16 scroll-mt-32 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">03 — Muzyka</p>
        <h2 id="muzyka-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Muzyka: od gitary po Rosalíę
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {spainMusic.map((m) => (
            <CultureCard
              key={m.id}
              title={m.title}
              description={m.description}
              accent="spain"
              image={m.imageKey ? IMAGES[m.imageKey] : undefined}
            />
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} id="sport" aria-labelledby="sport-tytul" className="mt-16 scroll-mt-32 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">04 — Sport</p>
        <h2 id="sport-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Sport: futbol to religia
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {spainSport.map((m) => (
            <CultureCard
              key={m.id}
              title={m.title}
              description={m.description}
              accent="spain"
              image={m.imageKey ? IMAGES[m.imageKey] : undefined}
            />
          ))}
        </div>
      </motion.section>

      <motion.section {...fade} id="jezyk" aria-labelledby="jezyk-tytul" className="mt-16 scroll-mt-32 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">05 — Język</p>
        <h2 id="jezyk-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Język i słówka
        </h2>
        <p className="mt-2 max-w-2xl text-base">
          Akcent z Hiszpanii (es-ES) — kliknij głośnik, żeby usłyszeć wymowę.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {vocab
            .filter((v) => v.country === 'spain')
            .map((v) => (
              <AudioWordCard key={v.word} item={v} />
            ))}
        </div>
      </motion.section>

      <motion.section {...fade} id="historia" aria-labelledby="historia-tytul" className="mt-16 scroll-mt-32 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">06 — Historia</p>
        <h2 id="historia-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Historia w 6 datach
        </h2>
        <div className="mt-6">
          <Timeline points={spainTimeline} accent="spain" />
        </div>
      </motion.section>

      <PapelDivider className="mt-16 text-spain" />

      <motion.section {...fade} id="swieta" aria-labelledby="swieta-tytul" className="mt-16 scroll-mt-32 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest text-spain">07 — Święta</p>
        <h2 id="swieta-tytul" className="font-display mt-2 text-2xl font-semibold md:text-3xl">
          Święta i zwyczaje
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {spainFestivals.map((f) => (
            <CultureCard
              key={f.id}
              title={f.title}
              description={f.description}
              accent="spain"
              image={f.imageKey ? IMAGES[f.imageKey] : undefined}
            />
          ))}
        </div>
      </motion.section>
    </Shell>
  )
}
