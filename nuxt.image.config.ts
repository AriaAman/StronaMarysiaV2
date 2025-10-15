// Configuration pour @nuxt/image
export default {
  image: {
    // Optimisation pour site médical/dentaire
    quality: 85,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    densities: [1, 2],
    // Lazy loading par défaut
    loading: 'lazy',
    // Presets pour différents types d'images du cabinet dentaire
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 150,
          height: 150,
          quality: 90,
          fit: 'cover'
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 1200,
          height: 600,
          fit: 'cover'
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 300,
          height: 200,
          quality: 80,
          fit: 'cover'
        }
      },
      equipment: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300,
          quality: 85,
          fit: 'cover'
        }
      }
    }
  }
}
