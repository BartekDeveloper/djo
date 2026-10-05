interface JumpItem {
  href: string
  label: string
}

export default function JumpList({ items, accent }: { items: JumpItem[]; accent: 'spain' | 'mexico' }) {
  return (
    <nav aria-label="Spis treści" className="mt-6">
      <ul className="flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              className={`flex min-h-[44px] items-center rounded-[10px] border-[1.5px] bg-panel px-4 text-sm font-semibold ${
                accent === 'spain' ? 'border-spain/50 hover:bg-spain hover:text-white' : 'border-mexico/50 hover:bg-mexico hover:text-white'
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
