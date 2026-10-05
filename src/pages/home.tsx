import { motion } from 'motion/react'
import FlagEs from '../components/decor/FlagEs'
import FlagMx from '../components/decor/FlagMx'
import { PapelDivider } from '../components/decor/Ornament'
import SmartImage from '../components/decor/SmartImage'
import Shell from '../components/layout/Shell'
import ComparisonTable from '../components/modules/ComparisonTable'
import CultureCard from '../components/modules/CultureCard'
import FeaturedCarousel from '../components/modules/FeaturedCarousel'
import { comparison } from '../data/comparison'
import { IMAGES } from '../data/images'
import { mexicoDishes, mexicoFacts } from '../data/mexico'
import { spainDishes, spainFacts } from '../data/spain'
import { vocab } from '../data/vocab'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
}

const marqueeWords = ['HOLA', 'GRACIAS', 'FIESTA', 'TAPAS', 'TACOS', 'FLAMENCO', 'MARIACHI', 'SIESTA', 'AMIGO', 'FAMILIA']

const games = [
  { anchor: 'match', title: 'Połącz słowo z symbolem', desc: 'Dopasuj hiszpańskie słowa do symboli: sol, guitarra, taco.' },
  { anchor: 'quiz', title: 'Quiz kulturowy', desc: '8 pytań o tradycje, historię i geografię obu krajów.' },
  { anchor: 'guess', title: 'Czyje to? Flagi i zabytki', desc: 'Zgadnij, czy symbol należy do Hiszpanii, czy Meksyku.' },
  { anchor: 'dialect', title: 'Pojedynek dialektów', desc: 'Przypisz słowo do kraju: gdzie powiesz ¡chido!, a gdzie ¡mola!?' },
]

function ShortWords({ country }: { country: 'spain' | 'mexico' }) {
  const words = vocab.filter((v) => v.country === country).slice(0, 3)
  return (
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Przykładowe słówka">
      {words.map((w) => (
        <li
          key={w.word}
          className={`rounded-[6px] border px-3 py-2 text-sm font-semibold uppercase tracking-wide ${
            country === 'spain' ? 'border-spain/40 bg-spain/10' : 'border-mexico/40 bg-mexico/10'
          }`}
        >
          {w.word} <span className="font-normal normal-case">— {w.translation}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  const featured = [...spainFacts, ...mexicoFacts].filter((f) => f.featured)

  return (
    <Shell accent="neutral" active="home">
      <section className="relative overflow-hidden py-16 text-center md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="grid h-full grid-cols-2">
            <img src={IMAGES.widokES.src} alt="" className="h-full w-full object-cover opacity-25" />
            <img src={IMAGES.widokMX.src} alt="" className="h-full w-full object-cover opacity-25" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/60 to-paper" />
          <div className="animate-decor-drift absolute -left-20 top-10 h-72 w-72 rounded-full bg-spain/10 blur-3xl" />
          <div className="animate-decor-drift absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-mexico/10 blur-3xl" />
        </div>
        <div className="relative">
          <div className="flex items-center justify-center gap-4">
            <FlagEs className="h-10 w-16 rounded-[6px] border border-line-strong shadow md:h-12 md:w-20" />
            <p className="text-xs font-bold uppercase tracking-widest">Dzień Języków Obcych</p>
            <FlagMx className="h-10 w-16 rounded-[6px] border border-line-strong shadow md:h-12 md:w-20" />
          </div>
          <h1 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            HISZPANIA × MEKSYK
          </h1>
          <p className="font-display mx-auto mt-4 max-w-2xl text-xl italic md:text-2xl">
            Jeden język. Dwa światy. Niezliczone historie.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Poznaj Hiszpanię i Meksyk poprzez język, kulturę, jedzenie, muzykę i ludzi.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="./hiszpania.html"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-spain px-6 py-3 font-semibold text-white ring-1 ring-inset ring-black/25 hover:bg-spain-hover"
            >
              Odkryj Hiszpanię
            </a>
            <a
              href="./meksyk.html"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-mexico px-6 py-3 font-semibold text-white ring-1 ring-inset ring-black/25 hover:bg-mexico-hover"
            >
              Odkryj Meksyk
            </a>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
            <SmartImage {...IMAGES.heroSpain} className="h-56 w-full md:h-72" />
            <SmartImage {...IMAGES.heroMexico} className="h-56 w-full md:h-72" />
          </div>
        </div>
      </section>

      <div className="overflow-hidden rounded-[14px] border border-ink bg-ink py-3" aria-hidden="true">
        <div className="animate-decor-marquee flex w-max gap-8 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#f9f6f0]">
              {w} <span className="ml-8 text-saffron">•</span>
            </span>
          ))}
        </div>
      </div>

      <motion.section {...fade} aria-label="Oba kraje w skrócie" className="mt-16 grid gap-6 motion-reduce:animate-none md:grid-cols-2">
        {[
          { name: 'Hiszpania', href: './hiszpania.html', facts: spainFacts.slice(0, 2), dishes: spainDishes.slice(0, 2), country: 'spain' as const, btn: 'bg-spain hover:bg-spain-hover', img: IMAGES.flamenco },
          { name: 'Meksyk', href: './meksyk.html', facts: mexicoFacts.slice(0, 2), dishes: mexicoDishes.slice(0, 2), country: 'mexico' as const, btn: 'bg-mexico hover:bg-mexico-hover', img: IMAGES.mariachi },
        ].map((c) => (
          <div key={c.name}>
            <SmartImage {...c.img} className="mb-4 h-44 w-full" />
            <div className="flex flex-col gap-4">
              {c.facts.map((f) => (
                <CultureCard key={f.id} title={f.title} description={f.description} accent={c.country} image={f.imageKey ? IMAGES[f.imageKey] : undefined} />
              ))}
            </div>
            <ul className="mt-4 rounded-[14px] border border-line bg-panel p-6" aria-label={`Kuchnia: ${c.name}`}>
              {c.dishes.map((d) => (
                <li key={d.name} className="border-b border-line py-2 last:border-b-0">
                  <span className="font-semibold">{d.name}</span>
                  <span className="text-sm text-muted"> — {d.description}</span>
                </li>
              ))}
            </ul>
            <ShortWords country={c.country} />
            <a
              href={c.href}
              className={`mt-4 inline-flex min-h-[44px] items-center justify-center rounded-[10px] px-6 py-3 font-semibold text-white ring-1 ring-inset ring-black/25 ${c.btn}`}
            >
              Więcej o {c.name === 'Hiszpania' ? 'Hiszpanii' : 'Meksyku'}
            </a>
          </div>
        ))}
      </motion.section>

      <PapelDivider className="mt-16 text-spain" />

      <motion.section {...fade} aria-labelledby="dialog-tytul" className="mt-16 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest">Dialog transatlantycki</p>
        <h2 id="dialog-tytul" className="font-display mt-2 text-3xl font-semibold md:text-4xl">
          Ten sam język, inne słowa
        </h2>
        <div className="mt-6">
          <ComparisonTable rows={comparison} />
        </div>
        <p className="mt-4 max-w-3xl text-base">
          Ponad 500 milionów ludzi mówi po hiszpańsku — od Madrytu po Meksyk. Wspólny język łączy
          Europę i Amerykę, a kuchnia, muzyka i film obu krajów kształtują współczesną popkulturę
          całego świata.
        </p>
      </motion.section>

      <motion.div {...fade} className="mt-16 motion-reduce:animate-none">
        <FeaturedCarousel items={featured} />
      </motion.div>

      <PapelDivider className="mt-16 text-mexico" />

      <motion.section {...fade} aria-labelledby="gry-tytul" className="mt-16 motion-reduce:animate-none">
        <p className="text-xs font-bold uppercase tracking-widest">Arena gier</p>
        <h2 id="gry-tytul" className="font-display mt-2 text-3xl font-semibold md:text-4xl">
          Sprawdź się w grze
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {games.map((g) => (
            <a
              key={g.anchor}
              href={`./gry.html#${g.anchor}`}
              className="block rounded-[14px] border border-line bg-panel p-6 shadow-[0_2px_8px_-2px_rgba(26,22,21,0.05)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_24px_-6px_rgba(26,22,21,0.08)]"
            >
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <p className="mt-1 text-sm text-muted">{g.desc}</p>
            </a>
          ))}
        </div>
      </motion.section>
    </Shell>
  )
}
