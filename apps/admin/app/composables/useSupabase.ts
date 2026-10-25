import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null = null

// One client for the whole app (several clients fight over the same auth session).
export const useSupabase = () => {
  if (client) return client
  const config = useRuntimeConfig()
  client = createClient(
    config.public.supabaseUrl,
    config.public.supabasePublishableKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  )
  return client
}
