import { motion } from 'motion/react'
import CulturalQuiz from '../components/games/CulturalQuiz'
import DialectSorter from '../components/games/DialectSorter'
import ImageWordMatch from '../components/games/ImageWordMatch'
import LandmarkGuesser from '../components/games/LandmarkGuesser'
import Shell from '../components/layout/Shell'
import PageHero from '../components/modules/PageHero'
import { IMAGES } from '../data/images'

const fade = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.25 },
}

const sections = [
  { id: 'match', title: 'Połącz słowo z symbolem', desc: 'Kliknij słowo po hiszpańsku, potem jego polskie znaczenie.' },
  { id: 'quiz', title: 'Quiz kulturowy', desc: 'Tradycje, historia i geografia obu krajów.' },
  { id: 'guess', title: 'Czyje to? Flagi i zabytki', desc: 'Zgadnij, czy symbol należy do Hiszpanii, czy Meksyku.' },
  { id: 'dialect', title: 'Pojedynek dialektów', desc: 'Przypisz słowo do kraju: es-ES czy es-MX?' },
]

export default function Gry() {
  return (
    <Shell accent="neutral" active="gry">
      <PageHero
        kicker="Arena gier"
        title="Zagraj i sprawdź się"
        accent="spain"
        image={IMAGES.heroSpain}
      />
      <div className="flex flex-col gap-10 pb-4">
        {sections.map((s) => (
          <motion.section
            key={s.id}
            {...fade}
            id={s.id}
            aria-labelledby={`${s.id}-tytul`}
            className="scroll-mt-24 rounded-[14px] border border-line bg-panel p-6 motion-reduce:animate-none md:p-8"
          >
            <h2 id={`${s.id}-tytul`} className="font-display text-2xl font-semibold">
              {s.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{s.desc}</p>
            <div className="mt-5">
              {s.id === 'match' && <ImageWordMatch />}
              {s.id === 'quiz' && <CulturalQuiz />}
              {s.id === 'guess' && <LandmarkGuesser />}
              {s.id === 'dialect' && <DialectSorter />}
            </div>
          </motion.section>
        ))}
      </div>
    </Shell>
  )
}
