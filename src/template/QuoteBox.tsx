export function QuoteBox() {
  const quotes = [
    "If a programming language does not make you think. It isn't worth using.",
    'An eye for an eye makes the whole world blind.',
    'talk softly and carry a big stick',
  ]
  return (
    <div className="h-screen">
      <h1>Keep in mind</h1>
      {quotes.map((quote) => (
        <p>{quote}</p>
      ))}
    </div>
  )
}
