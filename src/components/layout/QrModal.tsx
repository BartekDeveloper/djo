import { useEffect, useState } from 'react'
import { Check, Copy, X } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'

interface QrModalProps {
  open: boolean
  onClose: () => void
}

export default function QrModal({ open, onClose }: QrModalProps) {
  const [url, setUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (open) {
      setUrl(window.location.href)
      setCopied(false)
    }
  }, [open ])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ backgroundColor: 'rgba(26,22,21,0.45)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="qr-tytul"
        className="w-full max-w-sm rounded-[14px] border border-line bg-panel p-6 text-center shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <p id="qr-tytul" className="font-display text-sm font-bold uppercase tracking-widest">
            Dołącz telefonem
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Zamknij okno z kodem QR"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border border-line"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          {url && <QRCodeSVG value={url} size={200} level="M" title="Kod QR do tej strony" />}
        </div>
        <p className="mt-4 text-sm">Zeskanuj telefonem, żeby grać na własnym ekranie.</p>
        <p className="mt-2 break-all text-sm font-semibold">{url}</p>
        <button
          type="button"
          onClick={copy}
          className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-[10px] border-[1.5px] border-ink px-6 py-3 text-sm font-semibold"
        >
          {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
          {copied ? 'Skopiowano' : 'Kopiuj link'}
        </button>
        <p role="status" aria-live="polite" className="mt-2 min-h-5 text-sm">
          {copied ? 'Link skopiowany do schowka.' : ''}
        </p>
      </section>
    </div>
  )
}
