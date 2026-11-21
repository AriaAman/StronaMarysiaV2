// Une seule adresse par page pour Google.
// Redirections permanentes (301), uniquement pour les visites de pages (GET/HEAD) :
//  1. anciennes adresses de l'ancien site → accueil ;
//  2. « / » final retiré : /kontakt/ → /kontakt ;
//  3. majuscules/minuscules corrigées : /onas, /ONAS → /oNas.
// Les fichiers (images, scripts), l'API du formulaire et le plan du site ne sont pas concernés.

const OLD_ADDRESSES = new Set([
  '/index.html',
  '/index.php',
  '/de',
  '/de/index.html',
  '/en',
  '/en/index.html',
  '/feed',
])

// Adresses officielles des pages (celles du plan du site et des balises canonical)
const PAGES = ['/cennik', '/kontakt', '/oNas', '/technologie', '/uslugi', '/reservation', '/reservation/success']
const PAGE_BY_LOWERCASE = new Map(PAGES.map((path) => [path.toLowerCase(), path]))

export default defineEventHandler((event) => {
  const method = event.method
  if (method !== 'GET' && method !== 'HEAD') return

  const url = getRequestURL(event)
  const path = url.pathname

  // Jamais pour l'API, les fichiers de Nuxt ou le plan du site
  if (path.startsWith('/api/') || path.startsWith('/_') || path.startsWith('/__')) return

  const withoutSlash = path.length > 1 ? path.replace(/\/+$/, '') : path
  const lower = withoutSlash.toLowerCase()

  let target: string | null = null
  if (OLD_ADDRESSES.has(lower)) {
    target = '/'
  } else if (PAGE_BY_LOWERCASE.has(lower)) {
    const official = PAGE_BY_LOWERCASE.get(lower)!
    if (official !== path) target = official
  } else if (withoutSlash !== path && withoutSlash !== '') {
    target = withoutSlash
  }

  if (target && target !== path) {
    return sendRedirect(event, target + url.search, 301)
  }
})
