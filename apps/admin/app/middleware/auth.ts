export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/login') {
    return
  }

  const supabase = useSupabase()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    return navigateTo('/login')
  }

  // The database decides who is an admin (public.site_admins), the same check RLS uses.
  const { data: isAdmin, error } = await supabase.rpc('is_site_admin')

  if (error || !isAdmin) {
    await supabase.auth.signOut()
    return navigateTo('/login?error=unauthorized')
  }
})
