// Configuration pour @nuxt/image
export default {
  image: {
    // Provider Vercel pour optimisation automatique en production
    provider: 'vercel',

    // Optimisation pour site médical/dentaire
    quality: 80,
    format: ['webp', 'jpg'],

    // Screens définis pour Vercel (requis pour les widths personnalisés)
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      full: 1920
    },

    densities: [1, 2],

    // Lazy loading par défaut
    loading: 'lazy',

    // Configuration Vercel
    vercel: {
      formats: ['image/avif', 'image/webp']
    },

    // Presets pour différents types d'images du cabinet dentaire
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 150,
          height: 150,
          quality: 85,
          fit: 'cover'
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 1920,
          height: 1080,
          fit: 'cover'
        }
      },
      heroMobile: {
        modifiers: {
          format: 'webp',
          quality: 75,
          width: 768,
          height: 1024,
          fit: 'cover'
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 200,
          quality: 75,
          fit: 'cover'
        }
      },
      equipment: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300,
          quality: 80,
          fit: 'cover'
        }
      },
      teamMember: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 400,
          quality: 80,
          fit: 'cover'
        }
      },
      background: {
        modifiers: {
          format: 'webp',
          width: 1920,
          height: 1080,
          quality: 75,
          fit: 'cover'
        }
      }
    }
  }
}
