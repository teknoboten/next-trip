export async function getQuote() {
  const res = await fetch('https://officeapi.dev/api/quotes/random')
  const json = await res.json()
  const quote = await { ...json.data }
  return quote.content
  }