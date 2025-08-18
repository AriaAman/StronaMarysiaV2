<template>
  <div class="timeslot-component">
    <div class="timeslot-header">
      <h3 class="timeslot-title">Dostępne terminy</h3>
      <p class="timeslot-subtitle">
        Wybierz godzinę, która Ci odpowiada na {{ formatDate(selectedDate) }}
      </p>
    </div>

    <div v-if="props.loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p class="loading-text">Ładowanie dostępnych terminów...</p>
    </div>

    <div v-else-if="availableSlots.length === 0" class="empty-state">
      <div class="empty-icon">
        <svg width="48" height="48" fill="#BC9667" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <h4 class="empty-title">Brak dostępnych terminów</h4>
      <p class="empty-description">
        Niestety, na tę datę nie ma dostępnych terminów.
        Proszę wybrać inną datę.
      </p>
    </div>

    <div v-else class="timeslots-grid">
      <div
        v-for="slot in availableSlots"
        :key="slot.id"
        class="timeslot-card"
        :class="{
          'selected': selectedSlot?.id === slot.id,
          'disabled': !slot.available
        }"
        @click="selectSlot(slot)"
      >
        <div class="timeslot-time">
          <span class="time-value">{{ slot.time }}</span>
          <span class="time-duration">{{ slot.duration || '30 min' }}</span>
        </div>

        <div class="timeslot-info">
          <span class="doctor-name">{{ slot.doctor || 'Dr. Pietruszczak' }}</span>
          <span class="appointment-type">{{ slot.type || 'Konsultacja' }}</span>
        </div>

        <div class="timeslot-status">
          <div v-if="slot.available" class="status-available">
            <svg width="16" height="16" fill="#10B981" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            <span>Dostępny</span>
          </div>
          <div v-else class="status-unavailable">
            <svg width="16" height="16" fill="#EF4444" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
            <span>Niedostępny</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedSlot" class="selected-slot-info">
      <div class="selected-slot-card">
        <div class="slot-icon">
          <svg width="24" height="24" fill="#BC9667" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div class="slot-details">
          <div class="slot-main-info">
            <span class="slot-date">{{ formatDate(selectedDate) }}</span>
            <span class="slot-time">{{ selectedSlot.time }}</span>
          </div>
          <div class="slot-secondary-info">
            <span class="slot-doctor">{{ selectedSlot.doctor || 'Dr. Pietruszczak' }}</span>
            <span class="slot-duration">{{ selectedSlot.duration || '30 minut' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  selectedDate: {
    type: String,
    required: true
  },
  availableSlots: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['slot-selected'])

const selectedSlot = ref(null)

const selectSlot = (slot) => {
  if (slot.available) {
    selectedSlot.value = slot
    emit('slot-selected', slot)
  }
}

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Reset de la sélection quand la date change
watch(() => props.selectedDate, () => {
  selectedSlot.value = null // Reset selection
})

onMounted(() => {
  selectedSlot.value = null
})
</script>

<style scoped>
.timeslot-component {
  width: 100%;
}

.timeslot-header {
  text-align: center;
  margin-bottom: 30px;
}

.timeslot-title {
  font-family: 'Aboreto', serif;
  font-size: 24px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 8px;
}

.timeslot-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  color: #6B7280;
  margin: 0;
  text-transform: capitalize;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #BC9667;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-family: 'Satoshi Variable', sans-serif;
  color: #6B7280;
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  margin-bottom: 20px;
}

.empty-title {
  font-family: 'Aboreto', serif;
  font-size: 20px;
  color: #0B162B;
  margin-bottom: 12px;
}

.empty-description {
  font-family: 'Satoshi Variable', sans-serif;
  color: #6B7280;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
}

.timeslots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-bottom: 30px;
}

.timeslot-card {
  background: white;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.timeslot-card:hover:not(.disabled) {
  border-color: #BC9667;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(188, 150, 103, 0.15);
}

.timeslot-card.selected {
  border-color: #BC9667;
  background: linear-gradient(135deg, rgba(188, 150, 103, 0.1) 0%, rgba(166, 133, 83, 0.1) 100%);
  box-shadow: 0 8px 25px rgba(188, 150, 103, 0.2);
}

.timeslot-card.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f9fafb;
}

.timeslot-time {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.time-value {
  font-family: 'Aboreto', serif;
  font-size: 18px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 2px;
}

.time-duration {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 12px;
  color: #6B7280;
}

.timeslot-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.doctor-name {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #0B162B;
}

.appointment-type {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 12px;
  color: #6B7280;
}

.timeslot-status {
  margin-top: auto;
}

.status-available, .status-unavailable {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.status-available {
  color: #10B981;
}

.status-unavailable {
  color: #EF4444;
}

.selected-slot-info {
  margin-top: 24px;
}

.selected-slot-card {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(188, 150, 103, 0.3);
}

.slot-icon {
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.slot-details {
  flex: 1;
}

.slot-main-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
}

.slot-date {
  font-size: 14px;
  opacity: 0.9;
  text-transform: capitalize;
  margin-bottom: 4px;
}

.slot-time {
  font-family: 'Aboreto', serif;
  font-size: 20px;
  font-weight: 400;
}

.slot-secondary-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.slot-doctor, .slot-duration {
  font-size: 14px;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .timeslots-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .timeslot-card {
    padding: 14px;
  }

  .time-value {
    font-size: 16px;
  }

  .selected-slot-card {
    padding: 16px;
    flex-direction: column;
    text-align: center;
  }

  .slot-icon {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .slot-main-info, .slot-secondary-info {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .timeslots-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .timeslot-card {
    padding: 12px;
  }

  .time-value {
    font-size: 14px;
  }

  .doctor-name {
    font-size: 12px;
  }

  .appointment-type {
    font-size: 11px;
  }

  .selected-slot-card {
    padding: 12px;
  }

  .slot-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 12px;
  }
}
</style>
