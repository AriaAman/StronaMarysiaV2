<template>
  <div class="simple-calendar-component">
    <div class="calendar-header">
      <h3 class="calendar-title">Wybierz swoją datę</h3>
      <p class="calendar-subtitle">Wybierz dostępną datę na swoją konsultację</p>
    </div>

    <div class="calendar-container">
      <div class="calendar-navigation">
        <button @click="previousMonth" class="nav-button">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <h4 class="current-month">{{ currentMonthLabel }}</h4>

        <button @click="nextMonth" class="nav-button">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      <div class="calendar-grid">
        <div class="weekdays">
          <div v-for="day in weekdays" :key="day" class="weekday">{{ day }}</div>
        </div>

        <div class="calendar-days">
          <!-- Jours du mois précédent -->
          <div
            v-for="day in previousMonthDays"
            :key="`prev-${day}`"
            class="calendar-day other-month"
          >
            {{ day }}
          </div>

          <!-- Jours du mois actuel -->
          <div
            v-for="day in currentMonthDays"
            :key="`current-${day}`"
            class="calendar-day current-month"
            :class="{
              'today': isToday(day),
              'available': isAvailable(day),
              'selected': isSelected(day),
              'past': isPast(day)
            }"
            @click="selectDate(day)"
          >
            {{ day }}
          </div>

          <!-- Jours du mois suivant -->
          <div
            v-for="day in nextMonthDays"
            :key="`next-${day}`"
            class="calendar-day other-month"
          >
            {{ day }}
          </div>
        </div>
      </div>
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
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  availableDates: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['date-selected'])

const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const selectedDate = ref(null)

const weekdays = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd']

const currentMonthLabel = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value)
  return date.toLocaleDateString('pl-PL', { month: 'long', year: 'numeric' })
})

const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return ''
  return new Date(selectedDate.value).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Calculer les jours à afficher dans le calendrier
const currentMonthDays = computed(() => {
  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, i) => i + 1)
})

const previousMonthDays = computed(() => {
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1).getDay()
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 // Lundi = 0

  if (adjustedFirstDay === 0) return []

  const prevMonth = currentMonth.value === 0 ? 11 : currentMonth.value - 1
  const prevYear = currentMonth.value === 0 ? currentYear.value - 1 : currentYear.value
  const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate()

  return Array.from({ length: adjustedFirstDay }, (_, i) => daysInPrevMonth - adjustedFirstDay + i + 1)
})

const nextMonthDays = computed(() => {
  const totalDays = previousMonthDays.value.length + currentMonthDays.value.length
  const remainingDays = 42 - totalDays // 6 semaines * 7 jours

  if (remainingDays <= 0) return []

  return Array.from({ length: Math.min(remainingDays, 14) }, (_, i) => i + 1)
})

// Fonctions utilitaires
const isToday = (day) => {
  const today = new Date()
  return day === today.getDate() &&
         currentMonth.value === today.getMonth() &&
         currentYear.value === today.getFullYear()
}

const isPast = (day) => {
  const today = new Date()
  const dateToCheck = new Date(currentYear.value, currentMonth.value, day)
  return dateToCheck < today.setHours(0, 0, 0, 0)
}

const isAvailable = (day) => {
  const dateStr = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  return props.availableDates.some(date => date.date === dateStr && date.available) && !isPast(day)
}

const isSelected = (day) => {
  if (!selectedDate.value) return false
  const dateStr = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  return selectedDate.value === dateStr
}

// Navigation
const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

// Sélection de date
const selectDate = (day) => {
  if (!isAvailable(day) || isPast(day)) return

  const dateStr = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  selectedDate.value = dateStr
  emit('date-selected', dateStr)
}
</script>

<style scoped>
.simple-calendar-component {
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

.calendar-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nav-button {
  background: #BC9667;
  border: none;
  border-radius: 8px;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: #A68553;
  transform: translateY(-1px);
}

.current-month {
  font-family: 'Aboreto', serif;
  font-size: 18px;
  color: #0B162B;
  height: 100px;
  width: 150px;
  margin: 0;
  text-transform: capitalize;
}

.calendar-grid {
  width: 100%;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  margin-bottom: 8px;
}

.weekday {
  padding: 8px;
  text-align: center;
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #6B7280;
  text-transform: uppercase;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  width: 150px;
  height: 100px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 2px;
}

.calendar-day.other-month {
  color: #D1D5DB;
  cursor: default;
}

.calendar-day.current-month {
  color: #374151;
}

.calendar-day.today {
  background: #fef3e2;
  color: #BC9667;
  font-weight: 600;
}

.calendar-day.available {
  background: white;
  border: 1px solid #E5E7EB;
}

.calendar-day.available:hover {
  background: #f0f9ff;
  border-color: #BC9667;
  transform: scale(1.05);
}

.calendar-day.selected {
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
  font-weight: 600;
}

.calendar-day.past {
  color: #D1D5DB;
  cursor: not-allowed;
  opacity: 0.5;
}

.calendar-day:not(.available):not(.other-month):not(.past) {
  background: #f9fafb;
  color: #d1d5db;
  cursor: not-allowed;
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

  .current-month {
    font-size: 16px;
  }

  .calendar-day {
    font-size: 12px;
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
}

@media (max-width: 480px) {
  .calendar-container {
    padding: 12px;
  }

  .weekday {
    font-size: 10px;
    padding: 6px;
  }

  .calendar-day {
    font-size: 11px;
    margin: 1px;
  }

  .nav-button {
    padding: 8px;
  }
}
</style>
