let checkedUserId: string | null = null

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/login') {
    return
  }

  // Local preview with real (public) content and no writes: `npm run admin:dev`, then open /?demo.
  // import.meta.dev is false in production builds, so this branch does not exist there.
  const { state } = useAdminStore()
  if (import.meta.dev) {
    if (to.query.demo !== undefined) sessionStorage.setItem('admin-demo', '1')
    if (sessionStorage.getItem('admin-demo')) {
      state.demo = true
      return
    }
  }

  const supabase = useSupabase()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    checkedUserId = null
    return navigateTo('/login')
  }

  if (checkedUserId === data.session.user.id) {
    return
  }

  // The database decides who is an admin (public.site_admins), the same check RLS uses.
  const { data: isAdmin, error } = await supabase.rpc('is_site_admin')

  if (error || !isAdmin) {
    await supabase.auth.signOut()
    return navigateTo('/login?error=unauthorized')
  }

  checkedUserId = data.session.user.id
})
