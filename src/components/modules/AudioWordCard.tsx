import { Volume2 } from 'lucide-react'
import type { VocabularyItem } from '../../data/types'
import { speakWord, speechSupported } from '../../hooks/useSpeech'

export default function AudioWordCard({ item }: { item: VocabularyItem }) {
  const canSpeak = speechSupported()
  return (
    <article className="flex items-center justify-between gap-3 rounded-[14px] border border-line bg-panel p-4">
      <div>
        <h3 className="text-base font-bold">{item.word}</h3>
        <p className="text-sm text-muted">{item.pronunciation}</p>
        <p className="mt-1 text-sm">{item.translation}</p>
      </div>
      {canSpeak && (
        <button
          type="button"
          onClick={() => speakWord(item.word, item.speechLang)}
          aria-label={`Odsłuchaj wymowę: ${item.word}`}
          className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-[10px] border-[1.5px] border-ink"
        >
          <Volume2 size={20} aria-hidden="true" />
        </button>
      )}
    </article>
  )
}
