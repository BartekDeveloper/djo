import type { ReactNode } from 'react'
import Footer from './Footer'
import Header, { type NavKey } from './Header'

interface ShellProps {
  accent: 'neutral' | 'spain' | 'mexico'
  active: NavKey
  children: ReactNode
}

const bar: Record<ShellProps['accent'], string> = {
  neutral: 'bg-talavera',
  spain: 'bg-spain',
  mexico: 'bg-mexico',
}

export default function Shell({ accent, active, children }: ShellProps) {
  return (
    <div className="min-h-screen">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[10px] focus:bg-panel focus:px-4 focus:py-3"
      >
        Przejdź do treści
      </a>
      <div className={`h-1.5 w-full ${bar[accent]}`} aria-hidden="true" />
      <Header active={active} />
      <main id="tresc" className="mx-auto w-full max-w-[1320px] px-5 md:px-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}
