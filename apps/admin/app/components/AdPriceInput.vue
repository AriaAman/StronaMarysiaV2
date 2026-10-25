<template>
  <div class="pp-price">
    <select v-model="price.kind" class="pp-input" aria-label="Rodzaj ceny" @change="onKind">
      <option value="kwota">Kwota</option>
      <option value="od">Od</option>
      <option value="zakres">Od–do</option>
      <option value="tekst">Tekst</option>
    </select>
    <div class="pp-price-vals">
      <template v-if="price.kind === 'tekst'">
        <input
          v-model="price.t"
          class="pp-input"
          type="text"
          aria-label="Cena jako tekst"
          placeholder="np. Wycena indywidualna"
          @input="emitText"
        >
      </template>
      <template v-else>
        <span class="pp-money">
          <input
            :value="price.a ?? ''"
            class="pp-input"
            type="text"
            inputmode="numeric"
            :aria-label="price.kind === 'zakres' ? 'Cena od' : 'Cena w złotych'"
            :aria-invalid="!!error"
            @input="onNumber('a', $event)"
          >
        </span>
        <template v-if="price.kind === 'zakres'">
          <span aria-hidden="true">–</span>
          <span class="pp-money">
            <input
              :value="price.b ?? ''"
              class="pp-input"
              type="text"
              inputmode="numeric"
              aria-label="Cena do"
              :aria-invalid="!!error"
              @input="onNumber('b', $event)"
            >
          </span>
        </template>
      </template>
    </div>
    <p class="pp-price-prev">
      <span v-if="error" class="pp-err">{{ error }}</span>
      <template v-else>Na stronie: <b>{{ modelValue || '—' }}</b></template>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch } from 'vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const price = reactive(parsePrice(props.modelValue))
const error = computed(() => priceError(price))

// Reset when the value changes from outside (e.g. "Anuluj zmiany").
watch(() => props.modelValue, (value) => {
  if (value !== formatPrice(price)) Object.assign(price, parsePrice(value))
})

const emitText = () => emit('update:modelValue', formatPrice(price))

const onNumber = (key: 'a' | 'b', event: Event) => {
  const input = event.target as HTMLInputElement
  const digits = input.value.replace(/\D/g, '').slice(0, 7)
  input.value = digits
  price[key] = digits === '' ? null : Number(digits)
  emitText()
}

const onKind = () => {
  if (price.kind === 'tekst') {
    if (!price.t) price.t = props.modelValue || ''
  } else if (price.a == null && price.t) {
    const parsed = parsePrice(price.t)
    if (parsed.kind !== 'tekst') Object.assign(price, parsed, { kind: price.kind })
  }
  emitText()
}
</script>
