<template>
  <div class="ad-stack">
    <p class="ad-muted">Pytania widoczne na stronie Kontakt, od góry do dołu.</p>

    <section v-for="(item, index) in faq" :key="item._key" class="ad-panel" :class="{ 'ad-off': !item.is_active, 'ad-dirty': isChanged('faq', item) }">
      <header class="ad-panel-head">
        <b>Pytanie {{ index + 1 }}</b>
        <div class="ad-row">
          <AdSwitch v-model="item.is_active" />
          <button type="button" class="ad-icon-btn" title="Wyżej" aria-label="Przesuń wyżej" :disabled="index === 0" @click="move('faq', faq, index, index - 1)"><AdIcon name="up" /></button>
          <button type="button" class="ad-icon-btn" title="Niżej" aria-label="Przesuń niżej" :disabled="index === faq.length - 1" @click="move('faq', faq, index, index + 1)"><AdIcon name="down" /></button>
          <button type="button" class="ad-icon-btn" title="Usuń pytanie" aria-label="Usuń pytanie" @click="remove('faq', item)"><AdIcon name="trash" /></button>
        </div>
      </header>
      <div class="ad-panel-body">
        <label class="ad-field"><span>Pytanie</span><input v-model="item.question" class="ad-input ad-faq-q" type="text" placeholder="np. Czy leczenie jest bolesne?"></label>
        <div class="ad-field"><span>Odpowiedź</span><AdRichText v-model="item.answer" label="Odpowiedź" /></div>
      </div>
    </section>

    <button type="button" class="ad-add ad-add-big" @click="addQuestion"><AdIcon name="plus" /> Dodaj pytanie</button>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue'

const { list, add, move, remove, isChanged } = useAdminStore()
const faq = computed(() => list('faq'))

const addQuestion = async () => {
  add('faq')
  await nextTick()
  const fields = document.querySelectorAll<HTMLInputElement>('.ad-faq-q')
  fields[fields.length - 1]?.focus()
}
</script>
