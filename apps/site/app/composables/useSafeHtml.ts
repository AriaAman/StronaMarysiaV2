import { FilterXSS } from 'xss'

// Texts edited in the admin (FAQ, bios, services, technologies) are HTML.
// Only simple formatting is kept: no scripts, no event handlers, no inline styles.
// `xss` is plain JavaScript (no jsdom), so it runs the same on the server and in the browser.
const filter = new FilterXSS({
  whiteList: {
    p: [], br: [], strong: [], b: [], em: [], i: [],
    a: ['href'], ul: [], ol: [], li: [], span: []
  },
  stripIgnoreTag: true,
  stripIgnoreTagBody: ['script', 'style']
})

export const useSafeHtml = () => (html?: string | null) => filter.process(html || '')
