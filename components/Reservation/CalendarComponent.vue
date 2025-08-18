<template>
  <div class="calendar-component">
    <div class="calendar-header">
      <h3 class="calendar-title">Wybierz swoją datę</h3>
      <p class="calendar-subtitle">Wybierz dostępną datę na swoją konsultację</p>
    </div>

    <div class="calendar-container">
      <FullCalendar
        ref="calendar"
        :options="calendarOptions"
        class="custom-calendar"
      />
    </div>

    <div v-if="selectedDate" class="selected-date-info">
      <div class="selected-date-card">
        <div class="date-icon">
          <svg width="24" height="24" fill="#BC9667" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        </div>
        <div class="date-details">
          <span class="date-label">Wybrana data:</span>
          <span class="date-value">{{ formatSelectedDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

// Import CSS côté client uniquement
if (process.client) {
  import('@fullcalendar/core/main.css')
  import('@fullcalendar/daygrid/main.css')
}

const props = defineProps({
  availableDates: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['date-selected'])

const calendar = ref(null)
const selectedDate = ref(null)

const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return ''
  return new Date(selectedDate.value).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  locale: 'pl',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: ''
  },
  height: 'auto',
  dayMaxEvents: false,
  moreLinkClick: 'popover',
  selectable: true,
  selectMirror: true,
  dateClick: handleDateClick,
  validRange: {
    start: new Date().toISOString().split('T')[0] // Empêcher la sélection de dates passées
  },
  dayCellClassNames: (arg) => {
    const dateStr = arg.date.toISOString().split('T')[0]
    const isAvailable = props.availableDates.some(availableDate =>
      availableDate.date === dateStr && availableDate.available
    )

    if (!isAvailable) {
      return ['unavailable-date']
    }

    if (dateStr === selectedDate.value) {
      return ['selected-date']
    }

    return ['available-date']
  },
  selectAllow: (selectInfo) => {
    const dateStr = selectInfo.start.toISOString().split('T')[0]
    return props.availableDates.some(availableDate =>
      availableDate.date === dateStr && availableDate.available
    )
  }
})

function handleDateClick(info) {
  const dateStr = info.dateStr
  const isAvailable = props.availableDates.some(availableDate =>
    availableDate.date === dateStr && availableDate.available
  )

  if (isAvailable && new Date(dateStr) >= new Date()) {
    selectedDate.value = dateStr
    emit('date-selected', dateStr)

    // Mise à jour visuelle du calendrier
    if (calendar.value) {
      calendar.value.getApi().render()
    }
  }
}

// Watcher pour mettre à jour le calendrier quand les dates disponibles changent
watch(() => props.availableDates, () => {
  if (calendar.value) {
    calendar.value.getApi().render()
  }
}, { deep: true })

onMounted(() => {
  // Configuration locale française
  if (calendar.value) {
    const calendarApi = calendar.value.getApi()
    calendarApi.setOption('locale', 'fr')
  }
})
</script>

<style scoped>
.calendar-component {
  width: 100%;
}

.calendar-header {
  text-align: center;
  margin-bottom: 30px;
}

.calendar-title {
  font-family: 'Aboreto', serif;
  font-size: 24px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 8px;
}

.calendar-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  color: #6B7280;
  margin: 0;
}

.calendar-container {
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
}

.selected-date-info {
  margin-top: 20px;
}

.selected-date-card {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(188, 150, 103, 0.3);
}

.date-icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.date-details {
  display: flex;
  flex-direction: column;
}

.date-label {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 4px;
}

.date-value {
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}

/* Styles FullCalendar personnalisés */
:deep(.fc) {
  font-family: 'Satoshi Variable', sans-serif;
}

:deep(.fc-toolbar) {
  margin-bottom: 20px;
}

:deep(.fc-toolbar-title) {
  font-family: 'Aboreto', serif;
  font-size: 20px;
  color: #0B162B;
  text-transform: capitalize;
}

:deep(.fc-button) {
  background: #BC9667;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

:deep(.fc-button:hover:not(:disabled)) {
  background: #A68553;
  transform: translateY(-1px);
}

:deep(.fc-button:disabled) {
  background: #D1D5DB;
  color: #9CA3AF;
}

:deep(.fc-today-button) {
  background: #374151;
}

:deep(.fc-today-button:hover) {
  background: #1F2937;
}

:deep(.fc-daygrid-day) {
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

:deep(.fc-daygrid-day:hover) {
  background: #f8f6f3;
}

:deep(.fc-daygrid-day.available-date) {
  background: white;
  border-color: #E5E7EB;
}

:deep(.fc-daygrid-day.available-date:hover) {
  background: #f0f9ff;
  border-color: #BC9667;
}

:deep(.fc-daygrid-day.selected-date) {
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
}

:deep(.fc-daygrid-day.selected-date .fc-daygrid-day-number) {
  color: white;
  font-weight: 600;
}

:deep(.fc-daygrid-day.unavailable-date) {
  background: #f9fafb;
  color: #d1d5db;
  cursor: not-allowed;
}

:deep(.fc-daygrid-day.unavailable-date:hover) {
  background: #f9fafb;
}

:deep(.fc-daygrid-day.unavailable-date .fc-daygrid-day-number) {
  color: #d1d5db;
}

:deep(.fc-daygrid-day-number) {
  font-weight: 500;
  padding: 8px;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px auto;
  transition: all 0.2s ease;
}

:deep(.fc-day-today) {
  background: #fef3e2 !important;
}

:deep(.fc-day-today .fc-daygrid-day-number) {
  background: #BC9667;
  color: white;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .calendar-title {
    font-size: 20px;
  }

  .calendar-subtitle {
    font-size: 14px;
  }

  .calendar-container {
    padding: 16px;
  }

  .selected-date-card {
    padding: 12px 16px;
  }

  .date-icon {
    width: 36px;
    height: 36px;
    margin-right: 12px;
  }

  .date-value {
    font-size: 14px;
  }

  :deep(.fc-toolbar) {
    flex-direction: column;
    gap: 16px;
  }

  :deep(.fc-toolbar-title) {
    font-size: 18px;
  }

  :deep(.fc-button) {
    padding: 6px 12px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .calendar-container {
    padding: 12px;
  }

  :deep(.fc-daygrid-day-number) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }
}
</style>
