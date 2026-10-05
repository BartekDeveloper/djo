import { useState } from 'react'
import { AzulejoRosette } from './Ornament'

interface SmartImageProps {
  src: string
  alt: string
  credit?: string
  creditUrl?: string
  className?: string
}

export default function SmartImage({ src, alt, credit, creditUrl, className = '' }: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center rounded-[14px] border border-line bg-sunken ${className}`}
      >
        <AzulejoRosette className="h-16 w-16 text-line-strong" />
      </div>
    )
  }
  return (
    <figure className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full rounded-[14px] border border-line object-cover transition-transform duration-300 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100"
      />
      {credit && (
        <figcaption className="mt-1 text-xs text-muted">
          Fot.{' '}
          {creditUrl ? (
            <a href={creditUrl} className="underline" rel="noreferrer">
              {credit}
            </a>
          ) : (
            credit
          )}
        </figcaption>
      )}
    </figure>
  )
}
