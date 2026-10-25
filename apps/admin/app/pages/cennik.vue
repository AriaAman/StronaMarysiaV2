<template>
  <div class="pp-stack">
    <div class="pp-row pp-between">
      <input v-model="query" class="pp-input pp-search" type="search" placeholder="Szukaj usługi…" aria-label="Szukaj usługi">
      <span class="pp-muted">Przeciągnij ⠿, aby zmienić kolejność. Strzałki ↑↓ działają z klawiatury.</span>
    </div>

    <section
      v-for="(category, catIndex) in categories"
      v-show="visibleCategory(category)"
      :key="category._key"
      class="pp-panel"
      :class="{ 'pp-off': !category.is_active }"
    >
      <header class="pp-panel-head pp-cat-head">
        <div class="pp-cat-fields">
          <input v-model="category.title" class="pp-input pp-strong" type="text" aria-label="Nazwa kategorii" placeholder="Nazwa kategorii, np. PROTETYKA" :class="{ 'pp-dirty': isChanged('categories', category) }">
          <input v-model="category.description" class="pp-input" type="text" aria-label="Opis kategorii" placeholder="Krótki opis pod nazwą kategorii" :class="{ 'pp-dirty': isChanged('categories', category) }">
        </div>
        <div class="pp-row">
          <AdSwitch v-model="category.is_active" :labels="['Widoczna', 'Ukryta']" />
          <button type="button" class="pp-icon-btn" title="Wyżej" aria-label="Przesuń kategorię wyżej" :disabled="catIndex === 0" @click="move('categories', categories, catIndex, catIndex - 1)"><AdIcon name="up" /></button>
          <button type="button" class="pp-icon-btn" title="Niżej" aria-label="Przesuń kategorię niżej" :disabled="catIndex === categories.length - 1" @click="move('categories', categories, catIndex, catIndex + 1)"><AdIcon name="down" /></button>
          <button type="button" class="pp-icon-btn" title="Usuń kategorię" :aria-label="`Usuń kategorię ${category.title}`" @click="removeCategory(category)"><AdIcon name="trash" /></button>
        </div>
      </header>

      <div
        v-for="(item, index) in itemsOf(category._key)"
        v-show="matches(item)"
        :key="item._key"
        class="pp-prow"
        :class="{ 'pp-dirty': isChanged('items', item), 'pp-off': !item.is_active, dragging: dragging === item }"
        @dragover="onDragOver($event, category)"
        @drop="onDrop($event, category, index)"
      >
        <button
          type="button"
          class="pp-handle"
          draggable="true"
          :aria-label="`Przeciągnij lub użyj strzałek, aby zmienić kolejność: ${item.name}`"
          @dragstart="onDragStart($event, item)"
          @dragend="dragging = null"
          @keydown.up.prevent="moveItem(category, index, index - 1, $event)"
          @keydown.down.prevent="moveItem(category, index, index + 1, $event)"
        />
        <input v-model="item.name" class="pp-input pp-pname" type="text" aria-label="Nazwa usługi" placeholder="Nazwa usługi">
        <AdPriceInput v-model="item.price" />
        <AdSwitch v-model="item.is_active" :labels="['Widoczna', 'Ukryta']" />
        <button type="button" class="pp-icon-btn pp-prow-del" title="Usuń" :aria-label="`Usuń ${item.name}`" @click="remove('items', item)"><AdIcon name="trash" /></button>
      </div>

      <button v-show="!query" type="button" class="pp-add" @click="addItem(category)">
        <AdIcon name="plus" /> Dodaj usługę do „{{ category.title || 'nowej kategorii' }}”
      </button>
    </section>

    <p v-if="query && !anyMatch" class="pp-empty">Brak usług pasujących do „{{ query }}”.</p>

    <button v-show="!query" type="button" class="pp-add pp-add-big" @click="addCategory">
      <AdIcon name="plus" /> Dodaj kategorię
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue'
import type { Row } from '~/composables/useAdminStore'

const { list, itemsOf, add, move, remove, isChanged, askConfirm } = useAdminStore()

const categories = computed(() => list('categories'))
const query = ref('')
const q = computed(() => query.value.trim().toLowerCase())
const matches = (item: Row) => !q.value || String(item.name).toLowerCase().includes(q.value)
const visibleCategory = (category: Row) => !q.value || itemsOf(category._key).some(matches)
const anyMatch = computed(() => categories.value.some(visibleCategory))

const focusLast = async (selector: string) => {
  await nextTick()
  const fields = document.querySelectorAll<HTMLInputElement>(selector)
  fields[fields.length - 1]?.focus()
}

const addItem = (category: Row) => { add('items', category._key); focusLast(`.pp-pname`) }
const addCategory = () => { add('categories'); focusLast('.pp-cat-fields .pp-strong') }

const removeCategory = async (category: Row) => {
  const count = itemsOf(category._key).length
  if (count && !(await askConfirm(`Usunąć kategorię „${category.title}”?`, `Razem z nią znikną ${count} pozycje cennika. Do zapisania możesz to cofnąć.`, 'Usuń kategorię'))) return
  remove('categories', category)
}

const moveItem = async (category: Row, from: number, to: number, event: KeyboardEvent) => {
  const group = itemsOf(category._key)
  if (to < 0 || to >= group.length) return
  move('items', group, from, to)
  const panel = (event.target as HTMLElement).closest('.pp-panel')
  await nextTick()
  panel?.querySelectorAll<HTMLButtonElement>('.pp-prow .pp-handle')[to]?.focus()
}

const dragging = ref<Row | null>(null)
const onDragStart = (event: DragEvent, item: Row) => {
  dragging.value = item
  event.dataTransfer?.setData('text/plain', item.name || '')
  if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move'
}
const onDragOver = (event: DragEvent, category: Row) => {
  if (dragging.value && dragging.value._cat === category._key) event.preventDefault()
}
const onDrop = (event: DragEvent, category: Row, to: number) => {
  event.preventDefault()
  if (!dragging.value || dragging.value._cat !== category._key) return
  const group = itemsOf(category._key)
  move('items', group, group.indexOf(dragging.value), to)
  dragging.value = null
}
</script>
