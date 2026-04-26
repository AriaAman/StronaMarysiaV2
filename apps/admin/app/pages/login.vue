<template>
  <main class="auth-page">
    <section class="auth-panel">
      <p class="eyebrow">Pietruszczak Stomatologia</p>
      <h1>Logowanie do panelu</h1>
      <p class="muted">Wpisz autoryzowany adres e-mail, aby otrzymać bezpieczny link logowania.</p>

      <form class="form" @submit.prevent="sendLink">
        <label>
          Email
          <input v-model.trim="email" type="email" required autocomplete="email" />
        </label>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Wysyłanie...' : 'Wyślij link' }}
        </button>
      </form>

      <p v-if="message" class="notice success">{{ message }}</p>
      <p v-if="error" class="notice error">{{ error }}</p>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const supabase = useSupabase()
const config = useRuntimeConfig()
const route = useRoute()

const email = ref(config.public.adminEmail)
const isLoading = ref(false)
const message = ref('')
const error = ref(route.query.error === 'unauthorized'
  ? 'To konto nie ma uprawnień do zarządzania stroną.'
  : '')

const sendLink = async () => {
  message.value = ''
  error.value = ''

  if (email.value.toLowerCase() !== config.public.adminEmail.toLowerCase()) {
    error.value = 'Użyj autoryzowanego adresu e-mail administratora.'
    return
  }

  isLoading.value = true
  const { error: authError } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: window.location.origin
    }
  })
  isLoading.value = false

  if (authError) {
    error.value = authError.message
    return
  }

  message.value = 'Link został wysłany. Otwórz skrzynkę e-mail, aby się zalogować.'
}
</script>
