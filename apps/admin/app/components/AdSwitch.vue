<template>
  <button
    type="button"
    class="pp-switch"
    role="switch"
    :aria-checked="modelValue"
    @click="emit('update:modelValue', !modelValue)"
  >
    <i />
    <span>{{ modelValue ? labels[0] : labels[1] }}</span>
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ modelValue: boolean, labels?: [string, string] }>(), {
  labels: () => ['Widoczne na stronie', 'Ukryte']
})
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>
