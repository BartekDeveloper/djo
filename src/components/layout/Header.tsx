import { useState } from 'react'
import { Menu, QrCode, X } from 'lucide-react'
import FlagEs from '../decor/FlagEs'
import FlagMx from '../decor/FlagMx'
import QrModal from './QrModal'

export type NavKey = 'home' | 'hiszpania' | 'meksyk' | 'gry'

const links: { key: NavKey; href: string; label: string }[] = [
  { key: 'home', href: './index.html', label: 'Strona główna' },
  { key: 'hiszpania', href: './hiszpania.html', label: 'Hiszpania' },
  { key: 'meksyk', href: './meksyk.html', label: 'Meksyk' },
  { key: 'gry', href: './gry.html', label: 'Gry' },
]

export default function Header({ active }: { active: NavKey }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [qrOpen, setQrOpen] = useState(false)

  return (
    <>
      <header className="sticky top-4 z-40 mx-auto w-full max-w-[1320px] px-5 md:px-10">
        <div className="glass flex items-center justify-between gap-3 rounded-[14px] border border-line px-4 py-2 shadow-[0_2px_8px_-2px_rgba(26,22,21,0.08)]">
          <a
            href="./index.html"
            className="flex items-center gap-1.5 min-[900px]:gap-3"
            aria-label="Hiszpania × Meksyk — strona główna"
          >
            <FlagEs className="h-5 w-8 shrink-0 rounded-[4px] border border-line min-[900px]:h-7 min-[900px]:w-11" />
            <span className="flex flex-col leading-none">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted min-[900px]:text-[11px]">
                Dzień Języków Obcych
              </span>
              <span className="font-display mt-1 text-sm font-bold tracking-tight min-[900px]:text-lg">
                HISZPANIA × MEKSYK
              </span>
            </span>
            <FlagMx className="h-5 w-8 shrink-0 rounded-[4px] border border-line min-[900px]:h-7 min-[900px]:w-11" />
          </a>
          <nav aria-label="Nawigacja główna" className="hidden items-center gap-1 min-[900px]:flex">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                aria-current={active === l.key ? 'page' : undefined}
                className={`flex min-h-[44px] items-center rounded-[10px] px-4 text-sm font-semibold ${
                  active === l.key ? 'bg-ink text-[#f9f6f0]' : 'hover:bg-sunken'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              aria-label="Pokaż kod QR do tej strony"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border-[1.5px] border-ink"
            >
              <QrCode size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobilne"
              aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border-[1.5px] border-ink min-[900px]:hidden"
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="menu-mobilne"
            aria-label="Nawigacja mobilna"
            className="glass mt-2 rounded-[14px] border border-line p-2 shadow-[0_2px_8px_-2px_rgba(26,22,21,0.08)] min-[900px]:hidden"
          >
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                aria-current={active === l.key ? 'page' : undefined}
                className={`flex min-h-[44px] items-center rounded-[10px] px-4 text-sm font-semibold ${
                  active === l.key ? 'bg-ink text-[#f9f6f0]' : ''
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <QrModal open={qrOpen} onClose={() => setQrOpen(false)} />
    </>
  )
}
