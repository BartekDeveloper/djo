export default function FlagMx({ className = 'h-6 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" className={className} role="img" aria-label="Flaga Meksyku">
      <title>Flaga Meksyku</title>
      <rect width="90" height="60" rx="6" fill="#ffffff" />
      <rect width="30" height="60" fill="#006847" />
      <rect x="60" width="30" height="60" fill="#ce1126" />
      <rect width="90" height="60" rx="6" fill="none" stroke="#ddd5c7" strokeWidth="2" />
      <g transform="translate(45,30)" stroke="#0c5e37" strokeWidth="2" fill="none">
        <circle r="8" fill="#ffffff" />
        <path d="M-8 0 L-3 -5 L0 -1 L3 -5 L8 0" />
        <path d="M-4 4 L0 8 L4 4" />
      </g>
    </svg>
  )
}
