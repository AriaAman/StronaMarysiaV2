<template>
  <div class="ad-stack">
    <p class="ad-muted">Urządzenia widoczne na stronie Technologie, w tej kolejności.</p>

    <section v-for="(tech, index) in technologies" :key="tech._key" class="ad-panel" :class="{ 'ad-off': !tech.is_active, 'ad-dirty': isChanged('tech', tech) }">
      <header class="ad-panel-head">
        <b>{{ tech.title || 'Nowe urządzenie' }}</b>
        <div class="ad-row">
          <AdSwitch v-model="tech.is_active" :labels="['Widoczne', 'Ukryte']" />
          <button type="button" class="ad-icon-btn" title="Wyżej" aria-label="Przesuń wyżej" :disabled="index === 0" @click="move('tech', technologies, index, index - 1)"><AdIcon name="up" /></button>
          <button type="button" class="ad-icon-btn" title="Niżej" aria-label="Przesuń niżej" :disabled="index === technologies.length - 1" @click="move('tech', technologies, index, index + 1)"><AdIcon name="down" /></button>
          <button type="button" class="ad-icon-btn" title="Usuń urządzenie" aria-label="Usuń urządzenie" @click="remove('tech', tech)"><AdIcon name="trash" /></button>
        </div>
      </header>
      <div class="ad-panel-body">
        <div class="ad-grid2">
          <label class="ad-field"><span>Nazwa urządzenia</span><input v-model="tech.title" class="ad-input ad-tech-title" type="text" placeholder="np. MIKROSKOP ZUMAX"></label>
          <label class="ad-field"><span>Podpis</span><input v-model="tech.caption" class="ad-input" type="text" placeholder="np. Precyzja w leczeniu kanałowym"></label>
        </div>
        <div class="ad-field"><span>Wstęp</span><AdRichText v-model="tech.intro" label="Wstęp" /></div>
        <div class="ad-field">
          <span>Najważniejsze zalety</span>
          <div v-for="(point, pointIndex) in tech.points" :key="pointIndex" class="ad-point">
            <input v-model="point.title" class="ad-input" type="text" aria-label="Zaleta" placeholder="Zaleta, np. Obraz w jakości HD">
            <input v-model="point.desc" class="ad-input" type="text" aria-label="Krótki opis" placeholder="Krótki opis">
            <div class="ad-row ad-nowrap">
              <button type="button" class="ad-icon-btn" title="Wyżej" aria-label="Przesuń zaletę wyżej" :disabled="pointIndex === 0" @click="movePoint(tech, pointIndex, -1)"><AdIcon name="up" /></button>
              <button type="button" class="ad-icon-btn" title="Usuń zaletę" aria-label="Usuń zaletę" @click="removePoint(tech, pointIndex)"><AdIcon name="trash" /></button>
            </div>
          </div>
          <button type="button" class="ad-add" @click="tech.points = [...tech.points, { title: '', desc: '' }]"><AdIcon name="plus" /> Dodaj zaletę</button>
        </div>
      </div>
    </section>

    <button type="button" class="ad-add ad-add-big" @click="addTech"><AdIcon name="plus" /> Dodaj urządzenie</button>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue'
import type { Row } from '~/composables/useAdminStore'

const { list, add, move, remove, isChanged, showToast } = useAdminStore()
const technologies = computed(() => list('tech'))

const movePoint = (tech: Row, index: number, delta: number) => {
  const points = [...tech.points]
  const [point] = points.splice(index, 1)
  points.splice(index + delta, 0, point)
  tech.points = points
}

const removePoint = (tech: Row, index: number) => {
  const removed = tech.points[index]
  tech.points = tech.points.filter((_: unknown, i: number) => i !== index)
  showToast(`Usunięto zaletę „${removed.title || 'bez nazwy'}”.`, () => {
    const points = [...tech.points]
    points.splice(index, 0, removed)
    tech.points = points
  })
}

const addTech = async () => {
  add('tech')
  await nextTick()
  const fields = document.querySelectorAll<HTMLInputElement>('.ad-tech-title')
  fields[fields.length - 1]?.focus()
}
</script>
