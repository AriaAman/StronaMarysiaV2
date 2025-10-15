// Endpoint de vérification de la configuration API FELG
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiKey = config.felgApiKey
  const apiSecret = config.felgApiSecret
  
  // Vérifier que les clés API sont disponibles
  if (!apiKey || !apiSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuration API FELG manquante'
    })
  }

  // Si on arrive ici, la configuration est correcte
  return {
    status: 'ok',
    configured: true,
    message: 'Configuration API FELG valide'
  }
})
