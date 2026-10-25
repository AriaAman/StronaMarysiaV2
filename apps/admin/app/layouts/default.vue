<template>
  <div class="ad-app">
    <aside class="ad-side">
      <div class="ad-logo">PIETRUSZCZAK<small>Panel strony</small></div>
      <nav class="ad-nav" aria-label="Menu panelu">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="ad-nav-link" :class="{ active: isActive(link.to) }">
          <AdIcon :name="link.icon" />
          <span>{{ link.label }}</span>
        </NuxtLink>
      </nav>
      <div class="ad-user">
        <span class="ad-avatar" aria-hidden="true">{{ initials }}</span>
        <div>
          <b>{{ email || 'Podgląd' }}</b>
          <button type="button" class="ad-link" @click="logout">Wyloguj</button>
        </div>
      </div>
    </aside>

    <div class="ad-main">
      <header class="ad-top">
        <div>
          <p class="ad-crumb">Panel strony</p>
          <h1>{{ current.label }}</h1>
        </div>
        <div class="ad-row">
          <button type="button" class="ad-btn ad-secondary" :disabled="state.loading" @click="load(true)">
            <AdIcon name="refresh" /> Odśwież
          </button>
          <a class="ad-btn ad-secondary" :href="`https://pietruszczak.pl/${current.site}`" target="_blank" rel="noopener">
            Zobacz na stronie <AdIcon name="external" />
          </a>
        </div>
      </header>

      <p v-if="state.demo" class="ad-banner ad-banner-info">Tryb podglądu: prawdziwe treści ze strony, ale nic nie jest zapisywane w bazie.</p>
      <p v-if="state.error" class="ad-banner" role="alert">{{ state.error }}</p>

      <main class="ad-content">
        <div v-if="state.loading && !state.loaded" class="ad-skeleton" aria-label="Wczytywanie">
          <div class="ad-skel" style="width: 40%" /><div class="ad-skel" /><div class="ad-skel" style="width: 80%" /><div class="ad-skel" style="width: 60%" />
        </div>
        <slot v-else-if="state.loaded" />
      </main>

      <div class="ad-savebar" :data-state="changeCount ? 'dirty' : 'clean'">
        <span>{{ saveText }}</span>
        <div class="ad-row">
          <button type="button" class="ad-btn ad-ghost" :disabled="!changeCount || state.saving" @click="discard">Anuluj zmiany</button>
          <button type="button" class="ad-btn ad-primary" :disabled="!changeCount || state.saving" @click="save">
            {{ state.saving ? 'Zapisywanie…' : 'Zapisz zmiany' }}
          </button>
        </div>
      </div>
    </div>

    <div v-if="state.toast.text" :key="state.toast.id" class="ad-toast" role="status">
      <span>{{ state.toast.text }}</span>
      <button v-if="state.toast.undo" type="button" @click="undo">Cofnij</button>
    </div>

    <div v-if="state.confirm" class="ad-modal-wrap" @keydown.esc="answer(false)">
      <div class="ad-modal" role="alertdialog" aria-modal="true" aria-labelledby="ad-confirm-title">
        <h2 id="ad-confirm-title">{{ state.confirm.title }}</h2>
        <p>{{ state.confirm.text }}</p>
        <div class="ad-row ad-end">
          <button ref="cancelButton" type="button" class="ad-btn ad-secondary" @click="answer(false)">Wróć</button>
          <button type="button" class="ad-btn" :class="state.confirm.danger ? 'ad-danger' : 'ad-primary'" @click="answer(true)">{{ state.confirm.okLabel }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'

const { state, changeCount, load, save, discard, askConfirm } = useAdminStore()
const route = useRoute()
const supabase = useSupabase()

const links = [
  { to: '/', label: 'Pulpit', icon: 'home', site: '' },
  { to: '/cennik', label: 'Cennik', icon: 'price', site: 'cennik' },
  { to: '/uslugi', label: 'Usługi', icon: 'tooth', site: 'uslugi' },
  { to: '/zespol', label: 'Zespół', icon: 'team', site: 'oNas' },
  { to: '/faq', label: 'FAQ', icon: 'faq', site: 'kontakt' },
  { to: '/technologie', label: 'Technologie', icon: 'tech', site: 'technologie' }
]
const isActive = (to: string) => (to === '/' ? route.path === '/' : route.path.startsWith(to))
const current = computed(() => links.find((link) => isActive(link.to)) || links[0])

const email = ref('')
const initials = computed(() => (email.value ? email.value.slice(0, 2).toUpperCase() : 'PP'))

const plural = (n: number) => (n === 1 ? 'niezapisana zmiana'
  : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'niezapisane zmiany' : 'niezapisanych zmian')
const saveText = computed(() => {
  if (changeCount.value) return `${changeCount.value} ${plural(changeCount.value)}`
  if (state.lastSaved) return `Wszystko zapisane · ${state.lastSaved.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}`
  return 'Wszystkie zmiany są zapisane'
})

let toastTimer: ReturnType<typeof setTimeout> | undefined
watch(() => state.toast.id, () => {
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { state.toast.text = ''; state.toast.undo = null }, 8000)
})
const undo = () => { state.toast.undo?.(); state.toast.text = ''; state.toast.undo = null }

const cancelButton = ref<HTMLButtonElement>()
watch(() => state.confirm, async (open) => { if (open) { await nextTick(); cancelButton.value?.focus() } })
const answer = (ok: boolean) => { state.confirm?.resolve(ok); state.confirm = null }

const logout = async () => {
  if (changeCount.value && !(await askConfirm('Wylogować się?', 'Masz niezapisane zmiany. Zostaną utracone.', 'Wyloguj mimo to'))) return
  await supabase.auth.signOut()
  state.demo = false
  if (import.meta.dev) sessionStorage.removeItem('admin-demo')
  await navigateTo('/login')
}

// Warn before closing the tab with unsaved changes.
const beforeUnload = (event: BeforeUnloadEvent) => {
  if (!changeCount.value) return
  event.preventDefault()
  event.returnValue = ''
}

onMounted(async () => {
  window.addEventListener('beforeunload', beforeUnload)
  const { data } = await supabase.auth.getSession()
  email.value = data.session?.user.email || ''
  await load()
})
onBeforeUnmount(() => window.removeEventListener('beforeunload', beforeUnload))
</script>
