import { QrCode } from 'lucide-react'
import FlagEs from '../decor/FlagEs'
import FlagMx from '../decor/FlagMx'

const pawilony = [
  { href: './index.html', label: 'Strona główna' },
  { href: './hiszpania.html', label: 'Pawilon Hiszpanii' },
  { href: './meksyk.html', label: 'Pawilon Meksyku' },
]

const gry = [
  { href: './gry.html#match', label: 'Połącz słowo z symbolem' },
  { href: './gry.html#quiz', label: 'Quiz kulturowy' },
  { href: './gry.html#guess', label: 'Czyje to? Flagi i zabytki' },
  { href: './gry.html#dialect', label: 'Pojedynek dialektów' },
]

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1320px] px-5 pb-10 md:px-10">
      <div className="mt-16 overflow-hidden rounded-[14px] border border-line bg-panel">
        <div className="h-1.5 w-full bg-gradient-to-r from-spain via-saffron to-mexico" aria-hidden="true" />
        <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_1fr_1fr] md:p-8">
          <div>
            <p className="flex items-center gap-2">
              <FlagEs className="h-5 w-8 rounded-[4px] border border-line" />
              <FlagMx className="h-5 w-8 rounded-[4px] border border-line" />
              <span className="font-display text-base font-bold">Hiszpania × Meksyk</span>
            </p>
            <p className="font-display mt-1 text-sm italic text-muted">Diálogo Transatlántico</p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Interaktywna wystawa na szkolny Dzień Języków Obcych: kultura, kuchnia, muzyka,
              język i gry. Działa z projektora i z telefonu — bez backendu, w 100% statycznie.
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <QrCode size={16} aria-hidden="true" />
              Kliknij kod QR w nagłówku, żeby przenieść stronę na telefony.
            </p>
          </div>
          <nav aria-label="Pawilony">
            <p className="text-xs font-bold uppercase tracking-widest">Pawilony</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {pawilony.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="underline underline-offset-2">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Arena gier">
            <p className="text-xs font-bold uppercase tracking-widest">Arena gier</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {gry.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="underline underline-offset-2">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-1 border-t border-line px-6 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>Dzień Języków Obcych — strona statyczna, hosting GitHub Pages.</p>
          <p>Zdjęcia: Wikimedia Commons (autorzy przy podpisach).</p>
        </div>
      </div>
    </footer>
  )
}
