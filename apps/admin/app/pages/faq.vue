<template>
  <div class="pp-stack">
    <p class="pp-muted">Pytania widoczne na stronie Kontakt, od góry do dołu.</p>

    <section v-for="(item, index) in faq" :key="item._key" class="pp-panel" :class="{ 'pp-off': !item.is_active, 'pp-dirty': isChanged('faq', item) }">
      <header class="pp-panel-head">
        <b>Pytanie {{ index + 1 }}</b>
        <div class="pp-row">
          <AdSwitch v-model="item.is_active" />
          <button type="button" class="pp-icon-btn" title="Wyżej" aria-label="Przesuń wyżej" :disabled="index === 0" @click="move('faq', faq, index, index - 1)"><AdIcon name="up" /></button>
          <button type="button" class="pp-icon-btn" title="Niżej" aria-label="Przesuń niżej" :disabled="index === faq.length - 1" @click="move('faq', faq, index, index + 1)"><AdIcon name="down" /></button>
          <button type="button" class="pp-icon-btn" title="Usuń pytanie" aria-label="Usuń pytanie" @click="remove('faq', item)"><AdIcon name="trash" /></button>
        </div>
      </header>
      <div class="pp-panel-body">
        <label class="pp-field"><span>Pytanie</span><input v-model="item.question" class="pp-input pp-faq-q" type="text" placeholder="np. Czy leczenie jest bolesne?"></label>
        <div class="pp-field"><span>Odpowiedź</span><AdRichText v-model="item.answer" label="Odpowiedź" /></div>
      </div>
    </section>

    <button type="button" class="pp-add pp-add-big" @click="addQuestion"><AdIcon name="plus" /> Dodaj pytanie</button>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue'

const { list, add, move, remove, isChanged } = useAdminStore()
const faq = computed(() => list('faq'))

const addQuestion = async () => {
  add('faq')
  await nextTick()
  const fields = document.querySelectorAll<HTMLInputElement>('.pp-faq-q')
  fields[fields.length - 1]?.focus()
}
</script>
