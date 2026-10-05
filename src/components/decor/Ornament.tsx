export function AzulejoRosette({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="26" />
        <circle cx="32" cy="32" r="18" />
        {[0, 45, 90, 135].map((a) => (
          <g key={a} transform={`rotate(${a} 32 32)`}>
            <path d="M32 6 C38 20 38 44 32 58" />
            <path d="M6 32 C20 26 44 26 58 32" />
          </g>
        ))}
        <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

export function PapelDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <svg viewBox="0 0 120 16" className="h-4 w-28 text-line-strong" fill="currentColor">
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d={`M${i * 10} 0 L${i * 10 + 10} 0 L${i * 10 + 5} 12 Z`} />
        ))}
      </svg>
      <AzulejoRosette className="h-8 w-8 text-line-strong" />
      <svg viewBox="0 0 120 16" className="h-4 w-28 -scale-x-100 text-line-strong" fill="currentColor">
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d={`M${i * 10} 0 L${i * 10 + 10} 0 L${i * 10 + 5} 12 Z`} />
        ))}
      </svg>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}
