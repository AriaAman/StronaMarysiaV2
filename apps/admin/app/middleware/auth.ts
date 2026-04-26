export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/login') {
    return
  }

  const supabase = useSupabase()
  const config = useRuntimeConfig()
  const { data } = await supabase.auth.getSession()
  const email = data.session?.user.email

  if (!email) {
    return navigateTo('/login')
  }

  if (email.toLowerCase() !== config.public.adminEmail.toLowerCase()) {
    await supabase.auth.signOut()
    return navigateTo('/login?error=unauthorized')
  }
})
