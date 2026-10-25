// Prices are stored as text (the site shows them as-is). The editor works on a structured form
// and only writes text back when someone changes the price, so untouched rows keep their format.
export type PriceKind = 'kwota' | 'od' | 'zakres' | 'tekst'
export type Price = { kind: PriceKind, a: number | null, b: number | null, t: string }

const num = (value: string) => Number(value.replace(/[\s.]/g, ''))

export const parsePrice = (text: string | null | undefined): Price => {
  const value = (text || '').trim()
  if (!value) return { kind: 'kwota', a: null, b: null, t: '' }
  let match = value.match(/^(\d[\d\s.]*)\s*z[lł]\.?$/i)
  if (match) return { kind: 'kwota', a: num(match[1]), b: null, t: '' }
  match = value.match(/^od\s+(\d[\d\s.]*)\s*z[lł]\.?$/i)
  if (match) return { kind: 'od', a: num(match[1]), b: null, t: '' }
  match = value.match(/^(\d[\d\s.]*?)\s*[-–]\s*(\d[\d\s.]*)\s*z[lł]\.?$/i)
  if (match) return { kind: 'zakres', a: num(match[1]), b: num(match[2]), t: '' }
  return { kind: 'tekst', a: null, b: null, t: value }
}

export const formatPrice = (price: Price): string => {
  if (price.kind === 'kwota') return price.a == null ? '' : `${price.a} ZŁ`
  if (price.kind === 'od') return price.a == null ? '' : `OD ${price.a} ZŁ`
  if (price.kind === 'zakres') return price.a == null || price.b == null ? '' : `${price.a}–${price.b} ZŁ`
  return price.t.trim()
}

export const priceError = (price: Price): string => {
  if (price.kind === 'zakres' && price.a != null && price.b != null && price.a > price.b) {
    return 'Cena „od” jest wyższa niż „do”.'
  }
  return ''
}
