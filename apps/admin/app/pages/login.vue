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
