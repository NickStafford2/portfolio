import RotateBetween from '@/components/edil-ozi/rotate-between'

export function QuoteBox() {
  const quotes = [
    "If a programming language does not make you think. It isn't worth using.",
    'An eye for an eye makes the whole world blind.',
    'Talk softly and carry a big stick',
  ]
  return (
    <div className="h-screen">
      <RotateBetween words={quotes} className="text-2xl"></RotateBetween>
    </div>
  )
}
