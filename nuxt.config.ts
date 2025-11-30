// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  // Configuration du site (utilisé par sitemap et robots)
  site: {
    url: 'https://pietruszczak.pl',
    name: 'Pietruszczak Stomatologia',
  },

  // Configuration du sitemap
  sitemap: {
    // Exclure les pages non pertinentes
    exclude: [
      '/reservation/success'
    ],
  },

  // Configuration de robots.txt
  robots: {
    // Bloquer les dossiers techniques
    disallow: ['/api/', '/_nuxt/', '/server/'],
    // Le sitemap est automatiquement ajouté
  },

  // Configuration de l'optimisation d'images
  image: {
    // Provider Vercel pour optimisation automatique en production
    provider: 'vercel',

    // Optimisation pour site médical/dentaire
    quality: 80,
    format: ['webp', 'jpg'],

    // Screens définis pour Vercel (requis pour les widths personnalisés)
    screens: {
      icon: 142,
      iconSmall: 150,
      iconMedium: 200,
      icon2x: 284,
      iconLarge: 300,
      xs: 320,
      small: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      full: 1920,
      '2k': 2048,
      '2k-wide': 2560,
      '3k': 3072,
      '4k': 3840
    },

    densities: [1, 2],

    // Lazy loading par défaut
    loading: 'lazy',

    // Les images internes n'ont pas besoin de domaines autorisés
    // mais si vous utilisez des images externes, ajoutez-les ici
    domains: [],

    // Configuration Vercel
    // ⚠️ Leçon du post LinkedIn: AVIF + WebP = DOUBLE des transformations!
    // WebP seul offre 95% de la compatibilité avec 50% moins de transformations
    vercel: {
      formats: ['image/webp']
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
  },

  // Configuration des composants
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // Configuration pour Vercel
  nitro: {
    preset: 'vercel',
  },

  // Configuration SSR
  ssr: true,

  // Configuration de l'application
  app: {
    head: {
      title: 'Pietruszczak',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nowoczesna praktyka stomatologiczna w Olsztynie. Specjaliści stomatologii i implantologii. Piotr Pietruszczak.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },

  // Configuration des variables d'environnement
  runtimeConfig: {
    // Variables privées (côté serveur seulement)
    // Conservées à la demande: clés FELG disponibles même si non utilisées côté app
    felgApiKey: process.env.FELG_API_KEY,
    felgApiSecret: process.env.FELG_API_SECRET,
    
    // Variables publiques (exposées côté client)
    public: {
      // Mode production pour l'interface utilisateur
      apiMode: 'production'
    }
  }
})
