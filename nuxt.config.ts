// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Configuration des composants
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // Configuration pour l'API externes
  nitro: {
    // Configuration pour les appels API externes
  },

  // Configuration SSR
  ssr: true,

  // Configuration de l'application
  app: {
    head: {
      title: 'Cabinet Dentaire Dr. Pietruszczak',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cabinet dentaire moderne à Olsztyn. Spécialistes en stomatologie et implantologie.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
