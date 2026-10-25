<template>
  <div class="pp-tags" @click.self="input?.focus()">
    <span v-for="(tag, index) in modelValue" :key="tag" class="pp-tag">
      {{ tag }}
      <button type="button" :aria-label="`Usuń ${tag}`" @click="removeAt(index)">×</button>
    </span>
    <input
      ref="input"
      v-model="draft"
      type="text"
      :aria-label="label"
      placeholder="Dodaj i naciśnij Enter"
      @keydown="onKey"
      @blur="commit"
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ modelValue: string[], label: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string[]] }>()

const input = ref<HTMLInputElement>()
const draft = ref('')

const commit = () => {
  const value = draft.value.replace(/,/g, ' ').replace(/\s+/g, ' ').trim()
  draft.value = ''
  if (!value) return
  if (props.modelValue.some((tag) => tag.toLowerCase() === value.toLowerCase())) return
  emit('update:modelValue', [...props.modelValue, value])
}

const removeAt = (index: number) => emit('update:modelValue', props.modelValue.filter((_, i) => i !== index))

const onKey = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ',') {
    event.preventDefault()
    commit()
  } else if (event.key === 'Backspace' && !draft.value && props.modelValue.length) {
    removeAt(props.modelValue.length - 1)
  }
}
</script>
