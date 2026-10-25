import { FilterXSS } from 'xss'

// Same allowlist as the site's useSafeHtml: simple formatting only.
const filter = new FilterXSS({
  whiteList: {
    p: [], br: [], strong: [], b: [], em: [], i: [],
    a: ['href'], ul: [], ol: [], li: [], span: [], div: []
  },
  stripIgnoreTag: true,
  stripIgnoreTagBody: ['script', 'style']
})

export const cleanRichText = (html: string | null | undefined) =>
  filter.process(html || '')
    .replace(/<div>/g, '<p>').replace(/<\/div>/g, '</p>')
    .replace(/(<br\s*\/?>\s*)+$/i, '')
    .trim()
