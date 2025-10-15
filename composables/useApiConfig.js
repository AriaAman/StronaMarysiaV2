// Composable pour vérifier la configuration API
export const useApiConfig = () => {
  const config = useRuntimeConfig()
  
  const getApiKeys = () => {
    // Les clés ne sont plus accessibles côté client pour des raisons de sécurité
    return {
      apiKey: null, // Accessible uniquement côté serveur
      apiSecret: null // Accessible uniquement côté serveur
    }
  }
  
  const isConfigured = async () => {
    // Vérifier la configuration via un endpoint serveur
    try {
      const response = await $fetch('/api/felg/health-check', { 
        method: 'GET',
        ignoreResponseError: true 
      })
      return true
    } catch (error) {
      return false
    }
  }
  
  const getConfigStatus = async () => {
    const configured = await isConfigured()
    
    return {
      hasApiKey: configured,
      hasApiSecret: configured,
      isFullyConfigured: configured,
      apiKeyPreview: configured ? 'Configurée (serveur)' : 'Non configurée',
      apiSecretPreview: configured ? 'Configurée (serveur)' : 'Non configurée'
    }
  }
  
  return {
    getApiKeys,
    isConfigured,
    getConfigStatus
  }
}
