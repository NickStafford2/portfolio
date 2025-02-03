// import RotateBetween from '@/components/edil-ozi/rotate-between'

export type Quote = {
  text: string
  source?: string
}

export function QuoteBox() {
  const quotes: Quote[] = [
    {
      text: "If a programming language does not make you think. It isn't worth using.",
      source: '',
    },
    { text: 'An eye for an eye makes the whole world blind.', source: '' },
    { text: 'Talk softly and carry a big stick', source: '' },
    {
      text: 'I saw the angel in the marbel, and I carved until I set him free.',
      source: 'Michelangelo',
    },
    {
      text: 'Do one thing every day that scares you.',
      source: 'Eleanor Roosevelt',
    },
  ]
  return (
    <div className="h-screen">
      {/* <RotateBetween quotes={quotes} className="text-2xl"></RotateBetween> */}
      {quotes.map((q: Quote) => (
        <div>
          {q.text}
          {q.source}
        </div>
      ))}
    </div>
  )
}
