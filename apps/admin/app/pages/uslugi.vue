<template>
  <div class="ad-stack">
    <p class="ad-muted">Kafelki na stronie Usługi, w tej kolejności. Kliknij „Edytuj”, aby zmienić nazwę lub opis.</p>

    <div class="ad-cards">
      <article v-for="(service, index) in services" :key="service._key" class="ad-card" :class="{ 'ad-off': !service.is_active, 'ad-dirty': isChanged('services', service) }">
        <div class="ad-thumb"><span class="ad-initials">{{ (service.caption || service.title || '?').slice(0, 2).toUpperCase() }}</span></div>
        <div class="ad-card-body">
          <b>{{ service.title || 'Nowa usługa' }}</b>
          <span class="ad-muted">Na kafelku: {{ service.caption || '—' }}</span>
          <AdSwitch v-model="service.is_active" />
          <div class="ad-row ad-between">
            <button type="button" class="ad-btn ad-secondary" @click="editing = service"><AdIcon name="edit" /> Edytuj</button>
            <div class="ad-row">
              <button type="button" class="ad-icon-btn" title="Wcześniej" aria-label="Przesuń wcześniej" :disabled="index === 0" @click="move('services', services, index, index - 1)"><AdIcon name="up" /></button>
              <button type="button" class="ad-icon-btn" title="Później" aria-label="Przesuń później" :disabled="index === services.length - 1" @click="move('services', services, index, index + 1)"><AdIcon name="down" /></button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <button type="button" class="ad-add ad-add-big" @click="addService"><AdIcon name="plus" /> Dodaj usługę</button>

    <AdDrawer :open="!!editing" :title="editing?.title || 'Nowa usługa'" @close="editing = null">
      <template v-if="editing">
        <label class="ad-field"><span>Nazwa usługi</span><input v-model="editing.title" class="ad-input" type="text" placeholder="np. Implantologia dentystyczna"></label>
        <label class="ad-field"><span>Krótka nazwa <small>(na kafelku)</small></span><input v-model="editing.caption" class="ad-input" type="text" placeholder="np. Implanty"></label>
        <div class="ad-field"><span>Opis</span><AdRichText v-model="editing.description" label="Opis usługi" /></div>
        <p class="ad-note">Zdjęcia usług: wkrótce. Na razie zdjęcie jest dobierane automatycznie do klucza usługi.</p>
        <details class="ad-advanced">
          <summary>Ustawienia zaawansowane</summary>
          <label class="ad-field">
            <span>Klucz usługi <small>(techniczny, bez spacji)</small></span>
            <input v-model="editing.category" class="ad-input" type="text" placeholder="np. implanty">
          </label>
          <p class="ad-note ad-warn">Zmiana klucza istniejącej usługi powoduje, że jej zdjęcie znika ze strony.</p>
        </details>
        <button type="button" class="ad-btn ad-danger-ghost" @click="removeService(editing)"><AdIcon name="trash" /> Usuń usługę</button>
      </template>
    </AdDrawer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Row } from '~/composables/useAdminStore'

const { list, add, move, remove, isChanged } = useAdminStore()
const services = computed(() => list('services'))
const editing = ref<Row | null>(null)

const slug = (text: string) => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// A new service gets its technical key from its short name, until someone sets one by hand.
const autoKey = ref(false)
watch(() => editing.value?.caption, (caption) => {
  if (editing.value && autoKey.value) editing.value.category = slug(caption || editing.value.title || '')
})

const addService = () => {
  editing.value = add('services')
  autoKey.value = true
}
watch(editing, (row) => { if (row?.id) autoKey.value = false })

const removeService = (service: Row) => {
  editing.value = null
  remove('services', service)
}
</script>
