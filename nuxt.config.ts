// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxt/image'
  ],

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
