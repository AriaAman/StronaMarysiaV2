<template>
  <div class="ad-rte">
    <div class="ad-rte-bar" role="toolbar" aria-label="Formatowanie tekstu">
      <button type="button" title="Pogrubienie" aria-label="Pogrubienie" style="font-weight: 800" @mousedown.prevent @click="run('bold')">B</button>
      <button type="button" title="Kursywa" aria-label="Kursywa" style="font-style: italic" @mousedown.prevent @click="run('italic')">I</button>
      <button type="button" title="Lista" aria-label="Lista" @mousedown.prevent @click="run('insertUnorderedList')">• Lista</button>
      <button type="button" title="Link" aria-label="Link" @mousedown.prevent @click="openLink">Link</button>
      <button type="button" title="Usuń formatowanie" aria-label="Usuń formatowanie" @mousedown.prevent @click="run('removeFormat')">Wyczyść</button>
    </div>
    <div v-if="linkOpen" class="ad-rte-link">
      <input
        ref="linkInput"
        v-model="linkUrl"
        class="ad-input"
        type="text"
        placeholder="https://… lub /kontakt"
        aria-label="Adres linku"
        @keydown.enter.prevent="addLink"
        @keydown.esc="linkOpen = false"
      >
      <button type="button" class="ad-btn ad-primary" @click="addLink">Dodaj link</button>
      <button type="button" class="ad-btn ad-secondary" @click="linkOpen = false">Anuluj</button>
    </div>
    <p v-if="linkError" class="ad-err ad-rte-msg">{{ linkError }}</p>
    <div
      ref="area"
      class="ad-rte-area"
      contenteditable="true"
      role="textbox"
      aria-multiline="true"
      :aria-label="label"
      @input="emitValue"
      @paste="onPaste"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'

const props = defineProps<{ modelValue: string, label: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const area = ref<HTMLDivElement>()
const linkInput = ref<HTMLInputElement>()
const linkOpen = ref(false)
const linkUrl = ref('')
const linkError = ref('')
let savedRange: Range | null = null
let lastEmitted = ''

onMounted(() => { if (area.value) area.value.innerHTML = cleanRichText(props.modelValue) })

watch(() => props.modelValue, (value) => {
  if (value !== lastEmitted && area.value) area.value.innerHTML = cleanRichText(value)
})

const emitValue = () => {
  lastEmitted = cleanRichText(area.value?.innerHTML)
  emit('update:modelValue', lastEmitted)
}

const run = (command: string) => {
  area.value?.focus()
  document.execCommand(command)
  emitValue()
}

// Text pasted from Word or a website arrives without its fonts and colours.
const onPaste = (event: ClipboardEvent) => {
  event.preventDefault()
  document.execCommand('insertText', false, event.clipboardData?.getData('text/plain') || '')
}

const openLink = async () => {
  const selection = window.getSelection()
  savedRange = selection && selection.rangeCount ? selection.getRangeAt(0).cloneRange() : null
  linkError.value = ''
  linkOpen.value = true
  await nextTick()
  linkInput.value?.focus()
}

const addLink = () => {
  const url = linkUrl.value.trim()
  if (!/^(https?:\/\/|\/|mailto:|tel:)/i.test(url)) {
    linkError.value = 'Adres musi zaczynać się od https://, / (strona serwisu), mailto: lub tel:.'
    return
  }
  if (!savedRange || savedRange.collapsed) {
    linkError.value = 'Najpierw zaznacz w tekście słowa, które mają być linkiem.'
    return
  }
  area.value?.focus()
  const selection = window.getSelection()
  selection?.removeAllRanges()
  selection?.addRange(savedRange)
  document.execCommand('createLink', false, url)
  linkOpen.value = false
  linkUrl.value = ''
  linkError.value = ''
  emitValue()
}
</script>
