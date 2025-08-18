<template>
  <div class="reservation-page">
    <main class="reservation-main">
      <div class="reservation-container">
        <div class="reservation-header">
          <h1 class="reservation-title">Rezerwacja online</h1>
          <p class="reservation-subtitle">Wybierz preferowany termin na swoją wizytę dentystyczną</p>
        </div>
        
        <div class="reservation-content">
          <!-- Étapes de réservation -->
          <div class="reservation-steps">
            <div class="step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
              <div class="step-number">1</div>
              <span class="step-text">Wybierz datę</span>
            </div>
            <div class="step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
              <div class="step-number">2</div>
              <span class="step-text">Wybierz godzinę</span>
            </div>
            <div class="step" :class="{ active: currentStep >= 3, completed: currentStep > 3 }">
              <div class="step-number">3</div>
              <span class="step-text">Dane osobowe</span>
            </div>
            <div class="step" :class="{ active: currentStep >= 4 }">
              <div class="step-number">4</div>
              <span class="step-text">Potwierdzenie</span>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="reservation-body">
            <!-- Étape 1: Calendrier -->
            <div v-if="currentStep === 1" class="step-content">
              <CalendarComponent 
                @date-selected="handleDateSelection"
                :available-dates="availableDates"
              />
              <div class="step-actions">
                <button 
                  class="btn-next" 
                  :disabled="!selectedDate"
                  @click="nextStep"
                >
                  Kontynuuj
                </button>
              </div>
            </div>

            <!-- Étape 2: Créneaux horaires -->
            <div v-if="currentStep === 2" class="step-content">
              <TimeSlotComponent 
                :selected-date="selectedDate"
                :available-slots="availableTimeSlots"
                :loading="isLoadingSlots"
                @slot-selected="handleTimeSlotSelection"
              />
              <div class="step-actions">
                <button class="btn-back" @click="previousStep">Wstecz</button>
                <button 
                  class="btn-next" 
                  :disabled="!selectedTimeSlot"
                  @click="nextStep"
                >
                  Kontynuuj
                </button>
              </div>
            </div>

            <!-- Étape 3: Informations personnelles -->
            <div v-if="currentStep === 3" class="step-content">
              <PatientFormComponent 
                @form-data="handlePatientData"
                :is-loading="isSubmitting"
              />
              <div class="step-actions">
                <button class="btn-back" @click="previousStep">Wstecz</button>
                <button 
                  class="btn-next" 
                  :disabled="!isFormValid"
                  @click="nextStep"
                >
                  Kontynuuj
                </button>
              </div>
            </div>

            <!-- Étape 4: Confirmation -->
            <div v-if="currentStep === 4" class="step-content">
              <ConfirmationComponent 
                :reservation-data="reservationData"
                @confirm="confirmReservation"
                @back="previousStep"
                :is-submitting="isSubmitting"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CalendarComponent from '~/components/Reservation/SimpleCalendarComponent.vue'
import TimeSlotComponent from '~/components/Reservation/TimeSlotComponent.vue'
import PatientFormComponent from '~/components/Reservation/PatientFormComponent.vue'
import ConfirmationComponent from '~/components/Reservation/ConfirmationComponent.vue'
import { useReservationApi } from '~/composables/useReservationApi'

// Reactive data
const currentStep = ref(1)
const selectedDate = ref(null)
const selectedTimeSlot = ref(null)
const patientData = ref({})
const availableDates = ref([])
const availableTimeSlots = ref([])
const isLoadingSlots = ref(false)
const isSubmitting = ref(false)

// API composable
const { getAvailableDates, getAvailableTimeSlots, createAppointment } = useReservationApi()

// Computed properties
const isFormValid = computed(() => {
  return patientData.value.firstName &&
         patientData.value.lastName &&
         patientData.value.email &&
         patientData.value.phone
})

const reservationData = computed(() => ({
  date: selectedDate.value,
  timeSlot: selectedTimeSlot.value,
  patient: patientData.value
}))

// Methods
const nextStep = () => {
  if (currentStep.value < 4) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleDateSelection = async (date) => {
  selectedDate.value = date
  selectedTimeSlot.value = null // Reset du créneau sélectionné

  // Charger les créneaux disponibles pour cette date
  if (date) {
    try {
      isLoadingSlots.value = true
      availableTimeSlots.value = await getAvailableTimeSlots(date)
    } catch (error) {
      console.error('Błąd podczas ładowania terminów:', error)
      availableTimeSlots.value = []
    } finally {
      isLoadingSlots.value = false
    }
  }
}

const handleTimeSlotSelection = (slot) => {
  selectedTimeSlot.value = slot
}

const handlePatientData = (data) => {
  patientData.value = data
}

const confirmReservation = async () => {
  try {
    isSubmitting.value = true
    const result = await createAppointment(reservationData.value)

    if (result.success) {
      // Rediriger vers une page de succès ou afficher un message
      await navigateTo('/reservation/success')
    } else {
      // Gérer l'erreur
      console.error('Błąd podczas tworzenia terminu wizyty:', result.error)
    }
  } catch (error) {
    console.error('Błąd:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Lifecycle
onMounted(async () => {
  try {
    availableDates.value = await getAvailableDates()
  } catch (error) {
    console.error('Błąd podczas ładowania dostępnych dat:', error)
  }
})

// SEO
useHead({
  title: 'Rezerwacja online - Gabinet Dentystyczny',
  meta: [
    { name: 'description', content: 'Zarezerwuj swoją wizytę dentystyczną online. Wybierz preferowany termin szybko i łatwo.' }
  ]
})
</script>

<style scoped>
.reservation-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Satoshi Variable', sans-serif;
}

.reservation-main {
  flex: 1;
  background: linear-gradient(135deg, #f8f6f3 0%, #ffffff 100%);
  padding: 20px 0 80px 0;
}

.reservation-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.reservation-header {
  text-align: center;
  margin-bottom: 60px;
}

.reservation-title {
  font-family: 'Aboreto', serif;
  font-size: 48px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 16px;
  letter-spacing: -0.02em;
}

.reservation-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 18px;
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.reservation-content {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.reservation-steps {
  display: flex;
  background: #f8f6f3;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #E5E7EB;
}

.step {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  position: relative;
  transition: all 0.3s ease;
}

.step::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: #E5E7EB;
}

.step:last-child::after {
  display: none;
}

.step.active {
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
}

.step.completed {
  background: #10B981;
  color: white;
}

.step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 12px;
  font-size: 14px;
}

.step:not(.active):not(.completed) .step-number {
  background: #E5E7EB;
  color: #6B7280;
}

.step-text {
  font-weight: 500;
  font-size: 14px;
}

.reservation-body {
  padding: 40px;
}

.step-content {
  min-height: 500px;
}

.step-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid #E5E7EB;
}

.btn-back, .btn-next {
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-family: 'Satoshi Variable', sans-serif;
}

.btn-back {
  background: #F3F4F6;
  color: #6B7280;
}

.btn-back:hover {
  background: #E5E7EB;
  color: #374151;
}

.btn-next {
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
  min-width: 140px;
}

.btn-next:hover:not(:disabled) {
  background: linear-gradient(135deg, #A68553 0%, #8F7449 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(188, 150, 103, 0.4);
}

.btn-next:disabled {
  background: #D1D5DB;
  color: #9CA3AF;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .reservation-container {
    padding: 0 16px;
  }
  
  .reservation-title {
    font-size: 36px;
  }
  
  .reservation-body {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .reservation-main {
    padding: 20px 0 40px 0;
  }
  
  .reservation-title {
    font-size: 28px;
  }
  
  .reservation-subtitle {
    font-size: 16px;
  }
  
  .reservation-steps {
    flex-direction: column;
  }
  
  .step {
    padding: 16px;
  }
  
  .step::after {
    display: none;
  }
  
  .step-text {
    font-size: 12px;
  }
  
  .step-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .btn-back, .btn-next {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .reservation-body {
    padding: 16px;
  }
  
  .reservation-steps {
    display: none; /* Masquer les étapes sur très petits écrans */
  }
}
</style>
