<template>
  <div class="confirmation-component">
    <div class="confirmation-header">
      <div class="success-icon">
        <svg width="48" height="48" fill="#10B981" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <h3 class="confirmation-title">Potwierdzenie Twojej wizyty</h3>
      <p class="confirmation-subtitle">Proszę sprawdzić poniższe informacje przed potwierdzeniem</p>
    </div>

    <div class="confirmation-content">
      <!-- Récapitulatif du rendez-vous -->
      <div class="summary-section">
        <h4 class="summary-title">Szczegóły wizyty</h4>

        <div class="summary-card appointment-card">
          <div class="card-icon">
            <svg width="24" height="24" fill="#BC9667" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
          </div>
          <div class="card-content">
            <div class="appointment-info">
              <div class="info-row">
                <span class="info-label">Data:</span>
                <span class="info-value">{{ formatDate(reservationData.date) }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Godzina:</span>
                <span class="info-value">{{ reservationData.timeSlot?.time }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Czas trwania:</span>
                <span class="info-value">{{ reservationData.timeSlot?.duration || '30 minut' }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Lekarz:</span>
                <span class="info-value">{{ reservationData.timeSlot?.doctor || 'Dr. Pietruszczak' }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Rodzaj:</span>
                <span class="info-value">{{ getReasonLabel(reservationData.patient?.reason) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations patient -->
      <div class="summary-section">
        <h4 class="summary-title">Twoje informacje</h4>

        <div class="summary-card patient-card">
          <div class="card-icon">
            <svg width="24" height="24" fill="#BC9667" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div class="card-content">
            <div class="patient-info">
              <div class="info-row">
                <span class="info-label">Imię i nazwisko:</span>
                <span class="info-value">{{ reservationData.patient?.firstName }} {{ reservationData.patient?.lastName }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">E-mail:</span>
                <span class="info-value">{{ reservationData.patient?.email }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Telefon:</span>
                <span class="info-value">{{ reservationData.patient?.phone }}</span>
              </div>
              <div v-if="reservationData.patient?.dateOfBirth" class="info-row">
                <span class="info-label">Data urodzenia:</span>
                <span class="info-value">{{ formatDate(reservationData.patient.dateOfBirth) }}</span>
              </div>
              <div class="info-row">
                <span class="info-label">Pierwsza wizyta:</span>
                <span class="info-value">{{ reservationData.patient?.isFirstVisit ? 'Tak' : 'Nie' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Notes supplémentaires -->
      <div v-if="reservationData.patient?.notes || reservationData.patient?.allergies" class="summary-section">
        <h4 class="summary-title">Informacje dodatkowe</h4>

        <div class="summary-card notes-card">
          <div class="card-icon">
            <svg width="24" height="24" fill="#BC9667" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>
          <div class="card-content">
            <div v-if="reservationData.patient?.notes" class="notes-section">
              <span class="notes-label">Uwagi:</span>
              <p class="notes-text">{{ reservationData.patient.notes }}</p>
            </div>
            <div v-if="reservationData.patient?.allergies" class="notes-section">
              <span class="notes-label">Alergie/Schorzenia medyczne:</span>
              <p class="notes-text">{{ reservationData.patient.allergies }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations importantes -->
      <div class="important-info">
        <div class="info-card">
          <div class="info-icon">
            <svg width="20" height="20" fill="#3B82F6" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17M12,14A1,1 0 0,1 11,13V8A1,1 0 0,1 12,7A1,1 0 0,1 13,8V13A1,1 0 0,1 12,14Z"/>
            </svg>
          </div>
          <div class="info-text">
            <h5 class="info-title">Ważne informacje</h5>
            <ul class="info-list">
              <li>Prosimy o przybycie 15 minut przed umówioną wizytą</li>
              <li>Zabierz ze sobą dokument tożsamości i kartę ubezpieczenia</li>
              <li>W przypadku niemożności stawienia się, powiadom nas co najmniej 24 godziny wcześniej</li>
              <li>E-mail z potwierdzeniem zostanie wysłany na Twój adres</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="confirmation-actions">
      <button
        class="btn-back"
        @click="$emit('back')"
        :disabled="isSubmitting"
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Modyfikuj
      </button>

      <button
        class="btn-confirm"
        @click="$emit('confirm')"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting" class="loading-spinner"></span>
        <svg v-else width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        {{ isSubmitting ? 'Potwierdzanie...' : 'Potwierdź wizytę' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  reservationData: {
    type: Object,
    required: true
  },
  isSubmitting: {
    type: Boolean,
    default: false
  }
})

defineEmits(['confirm', 'back'])

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getReasonLabel = (reason) => {
  const reasons = {
    consultation: 'Konsultacja ogólna',
    cleaning: 'Czyszczenie zębów',
    pain: 'Ból zęba',
    'check-up': 'Kontrola rutynowa',
    emergency: 'Nagły przypadek',
    other: 'Inne'
  }
  return reasons[reason] || reason
}
</script>

<style scoped>
.confirmation-component {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.confirmation-header {
  text-align: center;
  margin-bottom: 40px;
}

.success-icon {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.confirmation-title {
  font-family: 'Aboreto', serif;
  font-size: 24px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 8px;
}

.confirmation-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  color: #6B7280;
  margin: 0;
}

.confirmation-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.summary-section {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.summary-title {
  font-family: 'Aboreto', serif;
  font-size: 18px;
  font-weight: 400;
  color: white;
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  margin: 0;
  padding: 16px 20px;
}

.summary-card {
  display: flex;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid #F3F4F6;
}

.summary-card:last-child {
  border-bottom: none;
}

.card-icon {
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(188, 150, 103, 0.1);
  border-radius: 50%;
  flex-shrink: 0;
}

.card-content {
  flex: 1;
}

.appointment-info, .patient-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #F9FAFB;
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  color: #6B7280;
  font-weight: 500;
}

.info-value {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  color: #0B162B;
  font-weight: 600;
  text-align: right;
  text-transform: capitalize;
}

.notes-section {
  margin-bottom: 16px;
}

.notes-section:last-child {
  margin-bottom: 0;
}

.notes-label {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  color: #6B7280;
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
}

.notes-text {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  color: #0B162B;
  line-height: 1.5;
  margin: 0;
  background: #F9FAFB;
  padding: 12px;
  border-radius: 8px;
  border-left: 3px solid #BC9667;
}

.important-info {
  background: #F0F9FF;
  border: 1px solid #E0F2FE;
  border-radius: 12px;
  padding: 20px;
}

.info-card {
  display: flex;
  align-items: flex-start;
}

.info-icon {
  margin-right: 12px;
  margin-top: 2px;
  flex-shrink: 0;
}

.info-text {
  flex: 1;
}

.info-title {
  font-family: 'Aboreto', serif;
  font-size: 16px;
  color: #0B162B;
  margin-bottom: 8px;
}

.info-list {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  color: #374151;
  line-height: 1.6;
  margin: 0;
  padding-left: 20px;
}

.info-list li {
  margin-bottom: 4px;
}

.confirmation-actions {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid #E5E7EB;
}

.btn-back, .btn-confirm {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
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

.btn-back:hover:not(:disabled) {
  background: #E5E7EB;
  color: #374151;
}

.btn-confirm {
  background: linear-gradient(135deg, #10B981 0%, #059669 100%);
  color: white;
  flex: 1;
  justify-content: center;
}

.btn-confirm:hover:not(:disabled) {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}

.btn-confirm:disabled {
  background: #D1D5DB;
  color: #9CA3AF;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .summary-card {
    flex-direction: column;
    text-align: center;
  }

  .card-icon {
    margin-right: 0;
    margin-bottom: 12px;
    align-self: center;
  }

  .info-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .info-value {
    text-align: left;
  }

  .confirmation-actions {
    flex-direction: column;
  }

  .btn-back, .btn-confirm {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .confirmation-title {
    font-size: 20px;
  }

  .confirmation-subtitle {
    font-size: 14px;
  }

  .summary-title {
    font-size: 16px;
    padding: 12px 16px;
  }

  .summary-card {
    padding: 16px;
  }

  .important-info {
    padding: 16px;
  }
}
</style>
