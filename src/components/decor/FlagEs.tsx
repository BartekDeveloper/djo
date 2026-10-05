export default function FlagEs({ className = 'h-6 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" className={className} role="img" aria-label="Flaga Hiszpanii">
      <title>Flaga Hiszpanii</title>
      <rect width="90" height="60" rx="6" fill="#c60b1e" />
      <rect y="15" width="90" height="30" fill="#ffc400" />
      <g transform="translate(24,30)" stroke="#7a0009" strokeWidth="2" fill="#ffc400">
        <rect x="-7" y="-9" width="14" height="18" rx="2" />
        <circle cx="0" cy="0" r="3" fill="#7a0009" stroke="none" />
      </g>
    </svg>
  )
}
