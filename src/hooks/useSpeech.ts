export const speechSupported = () => 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window

const pickVoice = (lang: 'es-ES' | 'es-MX'): SpeechSynthesisVoice | null => {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang === lang) ??
    voices.find((v) => v.lang.startsWith(lang.slice(0, 2))) ??
    null
  )
}

export const speakWord = (text: string, lang: 'es-ES' | 'es-MX') => {
  if (!speechSupported()) {
    alert('Twoja przeglądarka nie obsługuje syntezy mowy.')
    return
  }
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = lang
  utterance.rate = 0.9
  const voice = pickVoice(lang)
  if (voice) utterance.voice = voice
  window.speechSynthesis.speak(utterance)
}
