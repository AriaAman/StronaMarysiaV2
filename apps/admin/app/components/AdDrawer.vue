<template>
  <Teleport to="body">
    <div v-if="open" class="pp-drawer-wrap" @click.self="emit('close')" @keydown.esc="emit('close')">
      <div class="pp-drawer" role="dialog" aria-modal="true" :aria-label="title">
        <div class="pp-drawer-head">
          <h2>{{ title }}</h2>
          <button ref="closeButton" type="button" class="pp-btn pp-primary" @click="emit('close')">Gotowe</button>
        </div>
        <div class="pp-drawer-body">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{ open: boolean, title: string }>()
const emit = defineEmits<{ close: [] }>()
const closeButton = ref<HTMLButtonElement>()

watch(() => props.open, async (open) => {
  if (open) { await nextTick(); closeButton.value?.focus() }
})
</script>
