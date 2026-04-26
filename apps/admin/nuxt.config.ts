export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: '2026-04-26',
  devtools: { enabled: true },
  modules: [],
  ssr: false,
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'vercel'
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL || 'https://tvgwuvqsbgupgceylarl.supabase.co',
      supabasePublishableKey: process.env.NUXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_Fmr6cMrPQ4DiU7mo2rl2Dw_DBbwubxC',
      adminEmail: process.env.NUXT_PUBLIC_ADMIN_EMAIL || 'ariaaman@outlook.fr'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Admin Pietruszczak',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'noindex, nofollow' }
      ]
    }
  }
})
