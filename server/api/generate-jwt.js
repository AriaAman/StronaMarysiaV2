// Endpoint pour générer un token JWT pour FELG - Version Vercel compatible
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiKey = config.felgApiKey
  const apiSecret = config.felgApiSecret
  
  if (!apiKey || !apiSecret) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuration API FELG manquante'
    })
  }

  try {
    // Version simplifiée pour Vercel - utiliser Web Crypto API si disponible
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      // Créer un token simple encodé
      const payload = JSON.stringify({ key: apiKey })
      const header = JSON.stringify({ alg: 'HS256', typ: 'JWT' })
      
      const encoder = new TextEncoder()
      const secretKey = await crypto.subtle.importKey(
        'raw',
        encoder.encode(apiSecret),
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      )
      
      const headerB64 = btoa(header)
      const payloadB64 = btoa(payload)
      const toSign = `${headerB64}.${payloadB64}`
      
      const signature = await crypto.subtle.sign(
        'HMAC',
        secretKey,
        encoder.encode(toSign)
      )
      
      const signatureB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
      const token = `${toSign}.${signatureB64}`
      
      console.log('🔑 JWT généré via Web Crypto API')
      return token
    } else {
      // Fallback pour développement local
      const jwt = await import('jsonwebtoken')
      const token = jwt.default.sign({ key: apiKey }, apiSecret)
      console.log('🔑 JWT généré via jsonwebtoken')
      return token
    }
    
  } catch (error) {
    console.error('❌ Erreur génération JWT:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur génération JWT: ' + error.message
    })
  }
})
