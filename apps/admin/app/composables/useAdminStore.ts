import { computed, reactive } from 'vue'

// Every change stays on screen until "Zapisz zmiany": edits, new rows, reordering and deletions
// (which can be undone until then). Saving writes only what changed.

export type Section = 'categories' | 'items' | 'services' | 'faq' | 'team' | 'tech'
export type Row = { _key: string, _cat?: string, id?: string, [field: string]: any }

const TABLES: Record<Section, string> = {
  categories: 'price_categories',
  items: 'price_items',
  services: 'site_services',
  faq: 'faq_items',
  team: 'team_members',
  tech: 'technologies'
}

// Columns written back to Supabase (same as the previous admin).
const FIELDS: Record<Section, string[]> = {
  categories: ['title', 'description', 'sort_order', 'is_active'],
  items: ['name', 'price', 'sort_order', 'is_active'],
  services: ['title', 'caption', 'category', 'description', 'sort_order', 'is_active'],
  faq: ['question', 'answer', 'sort_order', 'is_active'],
  team: ['name', 'title', 'bio', 'personal', 'tags', 'sort_order', 'is_active'],
  tech: ['title', 'caption', 'intro', 'points', 'sort_order', 'is_active']
}

// Required text field and the human label used in messages, per section.
const REQUIRED: Record<Section, [string, string]> = {
  categories: ['title', 'Kategoria cennika bez nazwy'],
  items: ['name', 'Pozycja cennika bez nazwy'],
  services: ['title', 'Usługa bez nazwy'],
  faq: ['question', 'Pytanie FAQ bez treści'],
  team: ['name', 'Osoba bez imienia i nazwiska'],
  tech: ['title', 'Technologia bez nazwy']
}

const SECTIONS = Object.keys(TABLES) as Section[]
const emptyLists = () => ({ categories: [], items: [], services: [], faq: [], team: [], tech: [] }) as Record<Section, Row[]>

let counter = 0
const newKey = () => `new-${Date.now()}-${++counter}`

const state = reactive({
  demo: false,
  loaded: false,
  loading: false,
  saving: false,
  error: '',
  lastSaved: null as Date | null,
  rows: emptyLists(),
  deleted: emptyLists(),
  original: {} as Record<string, string>,
  toast: { id: 0, text: '', undo: null as null | (() => void) },
  confirm: null as null | { title: string, text: string, okLabel: string, danger: boolean, resolve: (ok: boolean) => void }
})

const snapshot = (section: Section, row: Row) =>
  JSON.stringify([section === 'items' ? row._cat : null, ...FIELDS[section].map((field) => row[field] ?? null)])

const isChanged = (section: Section, row: Row) =>
  !row.id || state.original[`${section}:${row._key}`] !== snapshot(section, row)

const changeCount = computed(() =>
  SECTIONS.reduce((total, section) =>
    total + state.rows[section].filter((row) => isChanged(section, row)).length + state.deleted[section].length, 0)
)

const friendlyError = (error: { code?: string, message?: string } | null | undefined) => {
  const message = error?.message || ''
  if (error?.code === '23505') return 'Taka nazwa już istnieje. Zmień ją, aby była unikalna.'
  if (error?.code === 'PGRST205' || message.includes('schema cache')) return 'Tabela nie jest widoczna w Supabase. Skontaktuj się z administratorem strony.'
  if (error?.code === '42501' || message.includes('row-level security')) return 'Brak uprawnień. Zaloguj się ponownie.'
  if (message.includes('Failed to fetch') || message.includes('NetworkError')) return 'Brak połączenia z internetem. Twoje zmiany są nadal na ekranie: spróbuj ponownie.'
  return 'Nie udało się zapisać zmian. Twoje zmiany są nadal na ekranie: spróbuj ponownie.'
}

const showToast = (text: string, undo: null | (() => void) = null) => {
  state.toast = { id: state.toast.id + 1, text, undo }
}

const askConfirm = (title: string, text: string, okLabel: string, danger = true) =>
  new Promise<boolean>((resolve) => { state.confirm = { title, text, okLabel, danger, resolve } })

const remember = (section: Section, row: Row) => { state.original[`${section}:${row._key}`] = snapshot(section, row) }

const load = async (force = false) => {
  if ((state.loaded && !force) || state.loading) return
  if (force && changeCount.value && !(await askConfirm('Odświeżyć dane?', 'Niezapisane zmiany zostaną utracone.', 'Odśwież'))) return
  state.loading = true
  state.error = ''
  const supabase = useSupabase()
  const results = await Promise.all(SECTIONS.map((section) =>
    supabase.from(TABLES[section]).select('*').order('sort_order', { ascending: true })))
  state.loading = false
  const failed = results.find((result) => result.error)
  if (failed) {
    state.error = friendlyError(failed.error).replace('zapisać zmian', 'wczytać danych')
    return
  }
  state.rows = emptyLists()
  state.deleted = emptyLists()
  state.original = {}
  SECTIONS.forEach((section, index) => {
    state.rows[section] = (results[index].data || []).map((row: any) => {
      const copy: Row = { ...row, _key: row.id }
      if (section === 'items') copy._cat = row.category_id
      if (section === 'team') copy.tags = Array.isArray(row.tags) ? row.tags : []
      if (section === 'tech') copy.points = Array.isArray(row.points) ? row.points : []
      return copy
    })
    state.rows[section].forEach((row) => remember(section, row))
  })
  state.loaded = true
}

const sorted = (rows: Row[]) => [...rows].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
const list = (section: Section) => sorted(state.rows[section])
const itemsOf = (categoryKey: string) => sorted(state.rows.items.filter((item) => item._cat === categoryKey))

const nextOrder = (rows: Row[]) => rows.reduce((max, row) => Math.max(max, row.sort_order ?? 0), 0) + 1

const DEFAULTS: Record<Section, Record<string, any>> = {
  categories: { title: '', description: '', is_active: true },
  items: { name: '', price: '', is_active: true },
  services: { title: '', caption: '', category: '', description: '', is_active: true },
  faq: { question: '', answer: '', is_active: true },
  team: { name: '', title: '', bio: '', personal: '', tags: [], is_active: true },
  tech: { title: '', caption: '', intro: '', points: [], is_active: true }
}

const add = (section: Section, categoryKey?: string) => {
  const group = section === 'items' ? state.rows.items.filter((item) => item._cat === categoryKey) : state.rows[section]
  const row: Row = { ...structuredClone(DEFAULTS[section]), _key: newKey(), sort_order: nextOrder(group) }
  if (section === 'items') row._cat = categoryKey
  state.rows[section].push(row)
  return row
}

// Moves a row inside its ordered group and renumbers that group.
const move = (section: Section, group: Row[], from: number, to: number) => {
  if (to < 0 || to >= group.length || from === to) return
  const ordered = [...group]
  const [row] = ordered.splice(from, 1)
  ordered.splice(to, 0, row)
  ordered.forEach((item, index) => { item.sort_order = index + 1 })
}

const label = (section: Section, row: Row) =>
  row[REQUIRED[section][0]] || (section === 'items' ? 'nowa pozycja' : 'nowy element')

const remove = (section: Section, row: Row) => {
  const removed: Array<[Section, Row]> = [[section, row]]
  if (section === 'categories') state.rows.items.filter((item) => item._cat === row._key).forEach((item) => removed.push(['items', item]))
  removed.forEach(([s, r]) => {
    state.rows[s] = state.rows[s].filter((candidate) => candidate !== r)
    if (r.id) state.deleted[s].push(r)
  })
  const undo = () => {
    removed.forEach(([s, r]) => {
      state.deleted[s] = state.deleted[s].filter((candidate) => candidate !== r)
      state.rows[s].push(r)
    })
  }
  const extra = removed.length > 1 ? ` (z ${removed.length - 1} pozycjami)` : ''
  showToast(`Usunięto „${label(section, row)}”${extra}. Zniknie ze strony po zapisaniu.`, undo)
}

const validate = () => {
  const problems: string[] = []
  SECTIONS.forEach((section) => {
    const [field, message] = REQUIRED[section]
    const seen = new Map<string, number>()
    state.rows[section].forEach((row) => {
      const value = String(row[field] || '').trim()
      if (!value) { problems.push(message); return }
      const unique = section === 'items' ? `${row._cat}|${value.toLowerCase()}` : value.toLowerCase()
      seen.set(unique, (seen.get(unique) || 0) + 1)
      if (seen.get(unique) === 2) problems.push(`Powtórzona nazwa: „${value}”`)
    })
    if (section === 'services') {
      const keys = new Map<string, number>()
      state.rows.services.forEach((row) => {
        const key = String(row.category || '').trim()
        if (!key) problems.push(`Usługa „${row.title || 'bez nazwy'}” nie ma klucza (Ustawienia zaawansowane)`)
        keys.set(key, (keys.get(key) || 0) + 1)
        if (key && keys.get(key) === 2) problems.push(`Powtórzony klucz usługi: „${key}”`)
      })
    }
  })
  return [...new Set(problems)]
}

const payload = (section: Section, row: Row) => {
  const data: Record<string, any> = {}
  FIELDS[section].forEach((field) => { data[field] = row[field] ?? null })
  if (section === 'items') data.price = data.price || ''
  return data
}

const commitLocally = () => {
  SECTIONS.forEach((section) => {
    state.rows[section].forEach((row) => {
      if (!row.id) row.id = `demo-${row._key}`
      remember(section, row)
    })
  })
  state.deleted = emptyLists()
}

const save = async () => {
  if (state.saving || !changeCount.value) return
  const problems = validate()
  if (problems.length) {
    state.error = `Popraw przed zapisaniem: ${problems.join(' · ')}`
    return
  }
  state.error = ''
  if (state.demo) {
    commitLocally()
    state.lastSaved = new Date()
    showToast('Tryb podglądu: nic nie zostało zapisane w bazie.')
    return
  }
  state.saving = true
  const supabase = useSupabase()
  try {
    // Deletions first (prices before their category), then categories, then everything else.
    for (const section of ['items', 'services', 'faq', 'team', 'tech', 'categories'] as Section[]) {
      const ids = state.deleted[section].map((row) => row.id)
      if (ids.length) {
        const { error } = await supabase.from(TABLES[section]).delete().in('id', ids)
        if (error) throw error
        state.deleted[section] = []
      }
    }
    for (const section of ['categories', 'items', 'services', 'faq', 'team', 'tech'] as Section[]) {
      for (const row of state.rows[section]) {
        if (!isChanged(section, row)) continue
        const data = payload(section, row)
        if (section === 'items') {
          const category = state.rows.categories.find((candidate) => candidate._key === row._cat)
          data.category_id = category?.id
        }
        const query = row.id
          ? supabase.from(TABLES[section]).update(data).eq('id', row.id).select('id').single()
          : supabase.from(TABLES[section]).insert(data).select('id').single()
        const { data: saved, error } = await query
        if (error) throw error
        row.id = saved.id
        remember(section, row)
      }
    }
    state.lastSaved = new Date()
    showToast('Zapisano. Zmiany są już widoczne na stronie.')
  } catch (error: any) {
    state.error = friendlyError(error)
  } finally {
    state.saving = false
  }
}

const discard = async () => {
  if (!changeCount.value) return
  if (!(await askConfirm('Anulować zmiany?', 'Wszystkie niezapisane zmiany zostaną cofnięte.', 'Anuluj zmiany'))) return
  if (state.demo) { state.loaded = false; await load(); return }
  state.loaded = false
  await load()
  showToast('Przywrócono ostatnią zapisaną wersję.')
}

export const useAdminStore = () => ({
  state,
  changeCount,
  isChanged,
  load,
  list,
  itemsOf,
  add,
  move,
  remove,
  save,
  discard,
  showToast,
  askConfirm
})
