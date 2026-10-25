<template>
  <main class="ad-login-page">
    <section class="ad-login-card">
      <p class="ad-brand">PIETRUSZCZAK<small>Stomatologia · Panel strony</small></p>
      <h1>Logowanie do panelu</h1>
      <p class="ad-muted">Wpisz swój adres e-mail. Wyślemy na niego link: kliknij go, aby się zalogować. Bez hasła.</p>

      <form class="ad-stack" @submit.prevent="sendLink">
        <label class="ad-field">
          <span>Adres e-mail</span>
          <input v-model.trim="email" class="ad-input" type="email" required autocomplete="email" placeholder="twoj@adres.pl">
        </label>
        <button type="submit" class="ad-btn ad-primary ad-wide" :disabled="isLoading">
          {{ isLoading ? 'Wysyłanie…' : 'Wyślij link do logowania' }}
        </button>
      </form>

      <p v-if="message" class="ad-ok-note" role="status">{{ message }}</p>
      <p v-if="error" class="ad-banner" role="alert">{{ error }}</p>
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const supabase = useSupabase()
const route = useRoute()

const email = ref('')
const isLoading = ref(false)
const message = ref('')
const error = ref(route.query.error === 'unauthorized'
  ? 'To konto nie ma uprawnień do zarządzania stroną.'
  : '')

const sendLink = async () => {
  message.value = ''
  error.value = ''

  isLoading.value = true
  // shouldCreateUser: false — an unknown e-mail never creates an account.
  const { error: authError } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: window.location.origin,
      shouldCreateUser: false
    }
  })
  isLoading.value = false

  if (authError?.status === 429) {
    error.value = 'Zbyt wiele prób. Spróbuj ponownie za kilka minut.'
    return
  }

  if (authError?.name === 'AuthRetryableFetchError') {
    error.value = 'Brak połączenia z serwerem. Sprawdź internet i spróbuj ponownie.'
    return
  }

  // Same answer whether the address exists or not, so the page does not reveal admin e-mails.
  message.value = 'Jeśli ten adres ma dostęp do panelu, wysłaliśmy na niego link. Otwórz skrzynkę e-mail, aby się zalogować.'
}
</script>
