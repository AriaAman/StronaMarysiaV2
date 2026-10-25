import DOMPurify from 'isomorphic-dompurify'

// Texts edited in the admin (FAQ, bios, services, technologies) are HTML.
// Only simple formatting is kept: no scripts, no event handlers, no inline styles.
const ALLOWED_TAGS = ['p', 'br', 'strong', 'b', 'em', 'i', 'a', 'ul', 'ol', 'li', 'span']
const ALLOWED_ATTR = ['href']

export const useSafeHtml = () => (html?: string | null) =>
  DOMPurify.sanitize(html || '', { ALLOWED_TAGS, ALLOWED_ATTR })
