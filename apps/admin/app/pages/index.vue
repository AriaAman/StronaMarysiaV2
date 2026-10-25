<template>
  <div class="ad-stack">
    <p class="ad-hello">Dzień dobry! Co chcesz dziś zmienić?</p>

    <div class="ad-shortcuts">
      <NuxtLink v-for="card in cards" :key="card.to" :to="card.to" class="ad-shortcut">
        <AdIcon :name="card.icon" />
        <b>{{ card.title }}</b>
        <span>{{ card.text }}</span>
      </NuxtLink>
    </div>

    <section class="ad-panel">
      <header class="ad-panel-head"><b>Jak to działa</b></header>
      <ol class="ad-howto">
        <li>Zmieniasz teksty i ceny bezpośrednio w polach. Zmienione miejsca są podświetlone.</li>
        <li>Na dole licznik pokazuje, ile zmian czeka. Kliknij <b>„Zapisz zmiany”</b>, aby opublikować je na stronie.</li>
        <li>Usunięcie można cofnąć przyciskiem <b>„Cofnij”</b>, dopóki nie zapiszesz. <b>„Anuluj zmiany”</b> przywraca ostatnią zapisaną wersję.</li>
        <li>„Ukryte” chowa element na stronie bez usuwania go.</li>
      </ol>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { state } = useAdminStore()

// Polish plural: 1 kategoria, 2–4 kategorie, 5+ kategorii.
const pl = (section: keyof typeof state.rows, one: string, few: string, many: string) => {
  const n = state.rows[section].length
  const word = n === 1 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? few : many
  return `${n} ${word}`
}

const cards = computed(() => [
  { to: '/cennik', icon: 'price', title: 'Zmienić cenę', text: `${pl('categories', 'kategoria', 'kategorie', 'kategorii')}, ${pl('items', 'pozycja', 'pozycje', 'pozycji')}` },
  { to: '/faq', icon: 'faq', title: 'Odpowiedzieć w FAQ', text: `${pl('faq', 'pytanie', 'pytania', 'pytań')} na stronie Kontakt` },
  { to: '/zespol', icon: 'team', title: 'Edytować zespół', text: pl('team', 'osoba', 'osoby', 'osób') },
  { to: '/uslugi', icon: 'tooth', title: 'Opisać usługę', text: pl('services', 'usługa', 'usługi', 'usług') },
  { to: '/technologie', icon: 'tech', title: 'Opisać urządzenie', text: pl('tech', 'urządzenie', 'urządzenia', 'urządzeń') }
])
</script>
