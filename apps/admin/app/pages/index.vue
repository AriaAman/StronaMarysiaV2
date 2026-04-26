<template>
  <main class="admin-shell">
    <header class="topbar">
      <div>
        <p class="eyebrow">Panel administracyjny</p>
        <h1>{{ activeLabel }}</h1>
      </div>
      <button class="secondary" type="button" @click="signOut">Wyloguj</button>
    </header>

    <nav class="tabs" aria-label="Sekcje panelu">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        :class="{ secondary: activeTab !== tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </nav>

    <p v-if="status" class="notice success">{{ status }}</p>
    <p v-if="error" class="notice error">{{ error }}</p>

    <section v-if="activeTab === 'prices'">
      <div class="toolbar">
        <button type="button" @click="loadPrices" :disabled="isLoading">Odśwież</button>
        <button class="secondary" type="button" @click="addCategory">Dodaj kategorię</button>
      </div>

      <div class="category-list">
        <article v-for="category in categories" :key="category.id || category.sort_order" class="category-card">
          <div class="category-grid">
            <label>Tytuł <input v-model.trim="category.title" required /></label>
            <label>Kolejność <input v-model.number="category.sort_order" type="number" min="1" required /></label>
            <label class="toggle"><input v-model="category.is_active" type="checkbox" /> Widoczne</label>
          </div>
          <label>Opis <textarea v-model.trim="category.description" rows="2" /></label>
          <div class="actions">
            <button type="button" @click="saveCategory(category)">Zapisz</button>
            <button class="secondary" type="button" @click="addItem(category)">Dodaj cenę</button>
            <button class="danger" type="button" @click="deleteCategory(category)">Usuń</button>
          </div>

          <div class="items">
            <div v-for="item in category.price_items" :key="item.id || item.sort_order" class="item-row">
              <label>Usługa <input v-model.trim="item.name" required /></label>
              <label>Cena <input v-model.trim="item.price" /></label>
              <label>Kolejność <input v-model.number="item.sort_order" type="number" min="1" /></label>
              <label class="toggle"><input v-model="item.is_active" type="checkbox" /> Widoczne</label>
              <div class="item-actions">
                <button type="button" @click="saveItem(category, item)">OK</button>
                <button class="danger" type="button" @click="deleteItem(category, item)">X</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section v-else class="category-list">
      <div class="toolbar">
        <button type="button" @click="loadCollection(activeTab)" :disabled="isLoading">Odśwież</button>
        <button class="secondary" type="button" @click="addContentItem">Dodaj</button>
      </div>

      <article v-for="item in contentItems" :key="item.id || item.local_id" class="category-card">
        <div class="content-grid">
          <label v-for="field in activeFields" :key="field.key" :class="{ wide: field.type === 'textarea' || field.type === 'json' }">
            {{ field.label }}
            <textarea v-if="field.type === 'textarea'" v-model="item[field.key]" rows="5" />
            <textarea v-else-if="field.type === 'json'" v-model="item[field.key]" rows="5" />
            <input v-else-if="field.type === 'number'" v-model.number="item[field.key]" type="number" min="1" />
            <label v-else-if="field.type === 'boolean'" class="toggle inline-toggle">
              <input v-model="item[field.key]" type="checkbox" />
              Widoczne
            </label>
            <input v-else v-model.trim="item[field.key]" />
          </label>
        </div>
        <div class="actions">
          <button type="button" @click="saveContentItem(item)">Zapisz</button>
          <button class="danger" type="button" @click="deleteContentItem(item)">Usuń</button>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { PriceCategory, PriceItem } from '@pietruszczak/shared/types'

definePageMeta({ middleware: 'auth' })

type AdminTab = 'prices' | 'services' | 'faq' | 'team' | 'technologies'
type FieldType = 'text' | 'textarea' | 'number' | 'boolean' | 'json'

const supabase = useSupabase()
const activeTab = ref<AdminTab>('prices')
const isLoading = ref(false)
const status = ref('')
const error = ref('')
const categories = ref<PriceCategory[]>([])
const contentItems = ref<any[]>([])

const tabs: { key: AdminTab, label: string }[] = [
  { key: 'prices', label: 'Cennik' },
  { key: 'services', label: 'Usługi' },
  { key: 'faq', label: 'FAQ' },
  { key: 'team', label: 'Zespół' },
  { key: 'technologies', label: 'Technologies' }
]

const configs = {
  services: {
    table: 'site_services',
    order: 'sort_order',
    defaults: { title: '', caption: '', category: '', description: '', sort_order: 1, is_active: true },
    fields: [
      { key: 'title', label: 'Tytuł', type: 'text' },
      { key: 'caption', label: 'Krótka etykieta', type: 'text' },
      { key: 'category', label: 'Klucz kategorii', type: 'text' },
      { key: 'description', label: 'Opis HTML', type: 'textarea' },
      { key: 'sort_order', label: 'Kolejność', type: 'number' },
      { key: 'is_active', label: 'Widoczne', type: 'boolean' }
    ]
  },
  faq: {
    table: 'faq_items',
    order: 'sort_order',
    defaults: { question: '', answer: '', sort_order: 1, is_active: true },
    fields: [
      { key: 'question', label: 'Pytanie', type: 'text' },
      { key: 'answer', label: 'Odpowiedź HTML', type: 'textarea' },
      { key: 'sort_order', label: 'Kolejność', type: 'number' },
      { key: 'is_active', label: 'Widoczne', type: 'boolean' }
    ]
  },
  team: {
    table: 'team_members',
    order: 'sort_order',
    defaults: { name: '', title: '', bio: '', personal: '', tags_text: '', sort_order: 1, is_active: true },
    fields: [
      { key: 'name', label: 'Imię i nazwisko', type: 'text' },
      { key: 'title', label: 'Tytuł', type: 'text' },
      { key: 'bio', label: 'Bio HTML', type: 'textarea' },
      { key: 'personal', label: 'Tekst prywatny', type: 'textarea' },
      { key: 'tags_text', label: 'Tagi oddzielone przecinkami', type: 'text' },
      { key: 'sort_order', label: 'Kolejność', type: 'number' },
      { key: 'is_active', label: 'Widoczne', type: 'boolean' }
    ]
  },
  technologies: {
    table: 'technologies',
    order: 'sort_order',
    defaults: { title: '', caption: '', intro: '', points_text: '[]', sort_order: 1, is_active: true },
    fields: [
      { key: 'title', label: 'Tytuł', type: 'text' },
      { key: 'caption', label: 'Podpis', type: 'text' },
      { key: 'intro', label: 'Wstęp', type: 'textarea' },
      { key: 'points_text', label: 'Punkty JSON', type: 'json' },
      { key: 'sort_order', label: 'Kolejność', type: 'number' },
      { key: 'is_active', label: 'Widoczne', type: 'boolean' }
    ]
  }
} satisfies Record<Exclude<AdminTab, 'prices'>, any>

const activeLabel = computed(() => tabs.find((tab) => tab.key === activeTab.value)?.label || 'Panel')
const activeConfig = computed(() => activeTab.value === 'prices' ? null : configs[activeTab.value])
const activeFields = computed(() => activeConfig.value?.fields || [])

const showStatus = (message: string) => {
  status.value = message
  window.setTimeout(() => {
    status.value = ''
  }, 3500)
}

const friendlyError = (sourceError: { code?: string, message?: string }) => {
  const message = sourceError.message || ''
  if (sourceError.code === 'PGRST205' || message.includes('schema cache') || message.includes('Could not find the table')) {
    return "Tabela nie jest jeszcze widoczna w Supabase API. Uruchom migrację 202604260002_content_v1.sql w SQL Editor, potem wykonaj: notify pgrst, 'reload schema';"
  }
  return message
}

const normalizeForForm = (row: any) => ({
  ...row,
  tags_text: Array.isArray(row.tags) ? row.tags.join(', ') : row.tags_text,
  points_text: row.points ? JSON.stringify(row.points, null, 2) : row.points_text
})

const payloadForTable = (item: any) => {
  const payload = { ...item }
  delete payload.local_id
  delete payload.image
  delete payload.photo_src
  delete payload.tags_text
  delete payload.points_text

  if (activeTab.value === 'team') {
    payload.tags = String(item.tags_text || '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)
  }

  if (activeTab.value === 'technologies') {
    try {
      payload.points = JSON.parse(item.points_text || '[]')
    } catch {
      throw new Error('JSON w polu punktów jest nieprawidłowy.')
    }
  }

  return payload
}

const loadCollection = async (tab: AdminTab) => {
  if (tab === 'prices') return loadPrices()
  const config = configs[tab]
  isLoading.value = true
  error.value = ''

  const { data, error: loadError } = await supabase
    .from(config.table)
    .select('*')
    .order(config.order, { ascending: true })

  isLoading.value = false

  if (loadError) {
    error.value = friendlyError(loadError)
    return
  }

  contentItems.value = (data || []).map(normalizeForForm)
}

const addContentItem = () => {
  if (!activeConfig.value) return
  contentItems.value.push({
    ...activeConfig.value.defaults,
    sort_order: contentItems.value.length + 1,
    local_id: crypto.randomUUID()
  })
}

const saveContentItem = async (item: any) => {
  if (!activeConfig.value) return

  let payload
  try {
    payload = payloadForTable(item)
  } catch (saveError: any) {
    error.value = saveError.message
    return
  }

  const query = item.id
    ? supabase.from(activeConfig.value.table).update(payload).eq('id', item.id).select().single()
    : supabase.from(activeConfig.value.table).insert(payload).select().single()

  const { data, error: saveError } = await query

  if (saveError) {
    error.value = friendlyError(saveError)
    return
  }

  Object.assign(item, normalizeForForm(data))
  error.value = ''
  showStatus('Treść została zapisana.')
}

const deleteContentItem = async (item: any) => {
  if (!activeConfig.value || !confirm('Usunąć tę treść?')) return

  if (item.id) {
    const { error: deleteError } = await supabase.from(activeConfig.value.table).delete().eq('id', item.id)
    if (deleteError) {
      error.value = friendlyError(deleteError)
      return
    }
  }

  contentItems.value = contentItems.value.filter((candidate) => candidate !== item)
  showStatus('Treść została usunięta.')
}

const loadPrices = async () => {
  isLoading.value = true
  error.value = ''

  const { data, error: loadError } = await supabase
    .from('price_categories')
    .select('id,title,description,sort_order,is_active,price_items(id,category_id,name,price,sort_order,is_active)')
    .order('sort_order', { ascending: true })
    .order('sort_order', { foreignTable: 'price_items', ascending: true })

  isLoading.value = false

  if (loadError) {
    error.value = friendlyError(loadError)
    return
  }

  categories.value = (data || []).map((category) => ({ ...category, price_items: category.price_items || [] }))
}

const addCategory = () => {
  categories.value.push({ title: '', description: '', sort_order: categories.value.length + 1, is_active: true, price_items: [] })
}

const saveCategory = async (category: PriceCategory) => {
  const payload = { title: category.title, description: category.description || null, sort_order: category.sort_order, is_active: category.is_active }
  const query = category.id
    ? supabase.from('price_categories').update(payload).eq('id', category.id).select().single()
    : supabase.from('price_categories').insert(payload).select().single()
  const { data, error: saveError } = await query
  if (saveError) return error.value = friendlyError(saveError)
  Object.assign(category, data)
  showStatus('Kategoria została zapisana.')
}

const addItem = (category: PriceCategory) => {
  category.price_items ||= []
  category.price_items.push({ category_id: category.id, name: '', price: '', sort_order: category.price_items.length + 1, is_active: true })
}

const saveItem = async (category: PriceCategory, item: PriceItem) => {
  if (!category.id) return error.value = 'Najpierw zapisz kategorię.'
  const payload = { category_id: category.id, name: item.name, price: item.price || '', sort_order: item.sort_order, is_active: item.is_active }
  const query = item.id
    ? supabase.from('price_items').update(payload).eq('id', item.id).select().single()
    : supabase.from('price_items').insert(payload).select().single()
  const { data, error: saveError } = await query
  if (saveError) return error.value = friendlyError(saveError)
  Object.assign(item, data)
  showStatus('Pozycja cennika została zapisana.')
}

const deleteItem = async (category: PriceCategory, item: PriceItem) => {
  if (!confirm('Usunąć tę usługę?')) return
  if (item.id) {
    const { error: deleteError } = await supabase.from('price_items').delete().eq('id', item.id)
    if (deleteError) return error.value = friendlyError(deleteError)
  }
  category.price_items = category.price_items?.filter((candidate) => candidate !== item)
}

const deleteCategory = async (category: PriceCategory) => {
  if (!confirm('Usunąć tę kategorię i wszystkie jej ceny?')) return
  if (category.id) {
    const { error: deleteError } = await supabase.from('price_categories').delete().eq('id', category.id)
    if (deleteError) return error.value = friendlyError(deleteError)
  }
  categories.value = categories.value.filter((candidate) => candidate !== category)
}

const signOut = async () => {
  await supabase.auth.signOut()
  await navigateTo('/login')
}

watch(activeTab, (tab) => {
  if (tab === 'prices') loadPrices()
  else loadCollection(tab)
})

onMounted(loadPrices)
</script>
