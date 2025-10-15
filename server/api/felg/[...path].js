// Proxy API pour FELG - gère les requêtes côté serveur pour éviter CORS
import jwt from 'jsonwebtoken'

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

  console.log(`🔐 Utilisation de l'authentification JWT FELG`)

  // Récupérer la méthode HTTP et l'URL
  const method = getMethod(event)
  const query = getQuery(event)
  const body = method !== 'GET' ? await readBody(event) : undefined
  
  // Extraire le path depuis l'URL
  const url = event.node.req.url || ''
  const felgPath = url.replace('/api/felg', '') || '/externalscalendars'
  
  // Construire l'URL complète de l'API FELG
  const felgUrl = `https://api.felg.app/v1${felgPath}`
  
  console.log(`🔗 Proxy FELG: ${method} ${felgUrl}`)
  
  try {
    // Créer le token JWT selon l'exemple du mail FELG
    const token = jwt.sign({
      key: apiKey
    }, apiSecret)

    console.log(`🔑 Token JWT généré`)

    // Préparer les headers selon l'exemple du mail FELG
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
      'User-Agent': 'StronaMarysiaV2/1.0'
    }

    // Faire l'appel à l'API FELG
    const response = await $fetch(felgUrl, {
      method,
      headers,
      query,
      body,
      // Ignorer les erreurs HTTP pour les gérer manuellement
      ignoreResponseError: true
    })

    console.log(`✅ Proxy FELG réussi:`, response)
    return response

  } catch (error) {
    console.error(`❌ Erreur Proxy FELG:`, error)
    
    // Retourner une erreur structurée
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Erreur de communication avec l\'API FELG'
    })
  }
})
