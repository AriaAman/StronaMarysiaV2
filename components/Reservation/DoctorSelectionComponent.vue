<template>
  <div class="doctor-selection">
    <div class="section-header">
      <h2 class="section-title">Wybierz lekarza</h2>
      <p class="section-subtitle">Wybierz preferowanego specjalistę</p>
    </div>

    <div v-if="loading" class="loading-state">
      <div class="loading-spinner"></div>
      <p>Ładowanie lekarzy...</p>
    </div>

    <div v-else-if="availableDoctors.length === 0" class="empty-state">
      <p>Brak dostępnych lekarzy</p>
    </div>

    <div v-else class="doctors-grid">
      <div
        v-for="doctor in availableDoctors"
        :key="doctor.workerId || doctor.id || doctor.name"
        class="doctor-card"
        :class="{ selected: selectedDoctor && (selectedDoctor.workerId || selectedDoctor.id) === (doctor.workerId || doctor.id) }"
        @click="selectDoctor(doctor)"
      >
        <div class="doctor-avatar">
          <div class="avatar-placeholder">
            {{ getInitials(doctor) }}
          </div>
        </div>
        
        <div class="doctor-info">
          <h3 class="doctor-name">{{ getDoctorName(doctor) }}</h3>
          <p class="doctor-specialty">{{ getDoctorSubtitle(doctor) }}</p>
          <div class="doctor-experience">
            <span class="experience-text">{{ doctor.experience || '10+' }} lat doświadczenia</span>
          </div>
        </div>

        <div class="selection-indicator">
          <div class="checkmark" v-if="selectedDoctor && (selectedDoctor.workerId || selectedDoctor.id) === (doctor.workerId || doctor.id)">
            ✓
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  availableDoctors: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  selectedDoctor: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['doctor-selected'])

const selectDoctor = (doctor) => {
  console.log('🔍 Doctor sélectionné:', {
    doctor: doctor,
    doctorId: doctor.workerId || doctor.id,
    selectedDoctor: props.selectedDoctor,
    selectedDoctorId: props.selectedDoctor ? (props.selectedDoctor.workerId || props.selectedDoctor.id) : null
  })
  emit('doctor-selected', doctor)
}

const getDoctorName = (doctor) => {
  // Prefer explicit first/last fields
  if (doctor.firstName && doctor.lastName) {
    return `Dr. ${doctor.firstName} ${doctor.lastName}`
  }
  // Many FELG responses use name (first) and sname (surname)
  const first = doctor.firstName || doctor.name || ''
  const last = doctor.lastName || doctor.sname || ''
  if (first && last) {
    return `Dr. ${first} ${last}`
  }
  if (first) {
    return first.startsWith('Dr.') ? first : `Dr. ${first}`
  }
  return `Dr. ${last || 'Docteur'}`
}

const getInitials = (doctor) => {
  const first = doctor.firstName || doctor.name || ''
  const last = doctor.lastName || doctor.sname || ''
  if (first && last) {
    return `${first[0]}${last[0]}`.toUpperCase()
  }
  if (first) return first.substring(0, 2).toUpperCase()
  if (last) return last.substring(0, 2).toUpperCase()
  return 'DR'
}

// Show a friendly subtitle: prefer title (e.g., "Higienistka"), then detectedType/specialty
const getDoctorSubtitle = (doctor) => {
  return doctor.title || doctor.detectedType || doctor.specialty || 'Dentista'
}
</script>

<style scoped>
.doctor-selection {
  max-width: 800px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-family: 'Aboreto', serif;
  font-size: 32px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.section-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  color: #6B7280;
  line-height: 1.5;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
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

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #6B7280;
  font-size: 16px;
}

.doctors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.doctor-card {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  text-align: left;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.doctor-card:hover {
  border-color: #BC9667;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.doctor-card.selected {
  border-color: #BC9667;
  background: white;
  color: #0B162B;
  box-shadow: 0 0 0 2px rgba(188, 150, 103, 0.2);
}

.doctor-avatar {
  margin-right: 16px;
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #F3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #6B7280;
}

.doctor-card.selected .avatar-placeholder {
  background: #BC9667;
  color: white;
}

.doctor-info {
  flex: 1;
}

.doctor-name {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #0B162B;
  margin-bottom: 4px;
}

.doctor-card.selected .doctor-name {
  color: #0B162B;
}

.doctor-specialty {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 8px;
}

.doctor-card.selected .doctor-specialty {
  color: #6B7280;
}

.doctor-experience {
  display: flex;
  justify-content: flex-start;
}

.experience-text {
  font-size: 12px;
  color: #9CA3AF;
  background: #F9FAFB;
  padding: 2px 8px;
  border-radius: 12px;
}

.doctor-card.selected .experience-text {
  color: #6B7280;
  background: #F3F4F6;
}

.selection-indicator {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 20px;
  height: 20px;
}

.checkmark {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #BC9667;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 24px;
  }
  
  .doctors-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .doctor-card {
    padding: 16px;
  }
  
  .avatar-placeholder {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  
  .doctor-name {
    font-size: 15px;
  }
  
  .doctor-specialty {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 20px;
  }
  
  .doctor-card {
    padding: 16px;
  }
}
</style>