<template>
  <div class="pp-stack">
    <p class="pp-muted">Osoby widoczne na stronie O nas, w tej kolejności.</p>

    <div class="pp-cards">
      <article v-for="(person, index) in team" :key="person._key" class="pp-card" :class="{ 'pp-off': !person.is_active, 'pp-dirty': isChanged('team', person) }">
        <div class="pp-thumb pp-square"><span class="pp-initials">{{ initials(person.name) }}</span></div>
        <div class="pp-card-body">
          <b>{{ person.name || 'Nowa osoba' }}</b>
          <span class="pp-muted">{{ person.title || '—' }}</span>
          <AdSwitch v-model="person.is_active" :labels="['Widoczna na stronie', 'Ukryta']" />
          <div class="pp-row pp-between">
            <button type="button" class="pp-btn pp-secondary" @click="editing = person"><AdIcon name="edit" /> Edytuj</button>
            <div class="pp-row">
              <button type="button" class="pp-icon-btn" title="Wcześniej" aria-label="Przesuń wcześniej" :disabled="index === 0" @click="move('team', team, index, index - 1)"><AdIcon name="up" /></button>
              <button type="button" class="pp-icon-btn" title="Później" aria-label="Przesuń później" :disabled="index === team.length - 1" @click="move('team', team, index, index + 1)"><AdIcon name="down" /></button>
            </div>
          </div>
        </div>
      </article>
    </div>

    <button type="button" class="pp-add pp-add-big" @click="editing = add('team')"><AdIcon name="plus" /> Dodaj osobę</button>

    <AdDrawer :open="!!editing" :title="editing?.name || 'Nowa osoba'" @close="editing = null">
      <template v-if="editing">
        <label class="pp-field"><span>Imię i nazwisko</span><input v-model="editing.name" class="pp-input" type="text" placeholder="np. Agnieszka Rutkowska"></label>
        <p v-if="editing.id" class="pp-note pp-warn">Zdjęcie na stronie jest dobierane po imieniu i nazwisku: po zmianie zniknie, dopóki nie dodamy zdjęć w panelu.</p>
        <label class="pp-field"><span>Stanowisko</span><input v-model="editing.title" class="pp-input" type="text" placeholder="np. LEKARZ STOMATOLOG"></label>
        <div class="pp-field"><span>O mnie</span><AdRichText v-model="editing.bio" label="Opis osoby" /></div>
        <label class="pp-field"><span>Prywatnie <small>(krótki tekst pod opisem, opcjonalnie)</small></span><textarea v-model="editing.personal" class="pp-input" rows="3" placeholder="np. Miłośniczka wypraw rowerowych" /></label>
        <div class="pp-field"><span>Specjalizacje <small>(Enter, aby dodać)</small></span><AdTagInput v-model="editing.tags" label="Dodaj specjalizację" /></div>
        <p class="pp-note">Zdjęcia: wkrótce.</p>
        <button type="button" class="pp-btn pp-danger-ghost" @click="removePerson(editing)"><AdIcon name="trash" /> Usuń osobę</button>
      </template>
    </AdDrawer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Row } from '~/composables/useAdminStore'

const { list, add, move, remove, isChanged } = useAdminStore()
const team = computed(() => list('team'))
const editing = ref<Row | null>(null)

const initials = (name: string) => (name || '?').split(/\s+/).map((word) => word[0]).join('').slice(0, 2).toUpperCase()

const removePerson = (person: Row) => {
  editing.value = null
  remove('team', person)
}
</script>
