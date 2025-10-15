<template>
  <div class="patient-form-component">
    <div class="form-header">
      <h3 class="form-title">Twoje informacje</h3>
      <p class="form-subtitle">Proszę wypełnić poniższy formularz, aby sfinalizować rezerwację</p>
    </div>

    <form @submit.prevent="handleSubmit" class="patient-form">
      <div class="form-grid">
        <!-- Informations personnelles -->
        <div class="form-section">
          <h4 class="section-title">Dane osobowe</h4>

          <div class="form-row">
            <div class="form-group">
              <label for="firstName" class="form-label">Imię *</label>
              <input
                id="firstName"
                v-model="formData.firstName"
                type="text"
                class="form-input"
                :class="{ 'error': errors.firstName }"
                placeholder="Twoje imię"
                required
              />
              <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
            </div>

            <div class="form-group">
              <label for="lastName" class="form-label">Nazwisko *</label>
              <input
                id="lastName"
                v-model="formData.lastName"
                type="text"
                class="form-input"
                :class="{ 'error': errors.lastName }"
                placeholder="Twoje nazwisko"
                required
              />
              <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email" class="form-label">E-mail *</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                class="form-input"
                :class="{ 'error': errors.email }"
                placeholder="twoj@email.com"
                required
              />
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Telefon *</label>
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="form-input"
                :class="{ 'error': errors.phone }"
                placeholder="+48 123 456 789"
                required
              />
              <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="dateOfBirth" class="form-label">Data urodzenia</label>
              <input
                id="dateOfBirth"
                v-model="formData.dateOfBirth"
                type="date"
                class="form-input"
                :max="maxBirthDate"
              />
            </div>

            <div class="form-group">
              <label for="gender" class="form-label">Płeć *</label>
              <select
                id="gender"
                v-model="formData.gender"
                class="form-select"
                :class="{ 'error': errors.gender }"
                required
              >
                <option value="">Wybierz</option>
                <option value="male">Mężczyzna</option>
                <option value="female">Kobieta</option>
              </select>
              <span v-if="errors.gender" class="error-message">{{ errors.gender }}</span>
            </div>
          </div>
        </div>

        <!-- Informations médicales -->
        <div class="form-section">
          <h4 class="section-title">Informacje medyczne</h4>

          <div class="form-group">
            <label for="reason" class="form-label">Powód wizyty *</label>
            <select
              id="reason"
              v-model="formData.reason"
              class="form-select"
              :class="{ 'error': errors.reason }"
              required
            >
              <option value="">Wybierz powód</option>
              <option value="consultation">Konsultacja ogólna</option>
              <option value="cleaning">Czyszczenie zębów</option>
              <option value="pain">Ból zęba</option>
              <option value="check-up">Kontrola rutynowa</option>
              <option value="emergency">Nagły przypadek</option>
              <option value="other">Inne</option>
            </select>
            <span v-if="errors.reason" class="error-message">{{ errors.reason }}</span>
          </div>

          <div class="form-group">
            <label for="notes" class="form-label">Dodatkowe uwagi</label>
            <textarea
              id="notes"
              v-model="formData.notes"
              class="form-textarea"
              rows="4"
              placeholder="Opisz krótko swoją sytuację lub wszelkie ważne informacje..."
            ></textarea>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                v-model="formData.isFirstVisit"
                type="checkbox"
                class="form-checkbox"
              />
              <span class="checkbox-text">To jest moja pierwsza wizyta w tym gabinecie</span>
            </label>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                v-model="formData.hasAllergies"
                type="checkbox"
                class="form-checkbox"
              />
              <span class="checkbox-text">Mam alergie lub szczególne schorzenia medyczne</span>
            </label>
          </div>

          <div v-if="formData.hasAllergies" class="form-group">
            <label for="allergies" class="form-label">Proszę podać szczegóły</label>
            <textarea
              id="allergies"
              v-model="formData.allergies"
              class="form-textarea"
              rows="3"
              placeholder="Opisz swoje alergie lub schorzenia medyczne..."
            ></textarea>
          </div>
        </div>

        <!-- Consentement -->
        <div class="form-section">
          <h4 class="section-title">Zgody</h4>

          <div class="consent-group">
            <label class="checkbox-label required">
              <input
                v-model="formData.dataConsent"
                type="checkbox"
                class="form-checkbox"
                :class="{ 'error': errors.dataConsent }"
                required
              />
              <span class="checkbox-text">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w ramach mojej prośby o umówienie wizyty,
                zgodnie z polityką prywatności gabinetu. *
              </span>
            </label>
            <span v-if="errors.dataConsent" class="error-message">{{ errors.dataConsent }}</span>
          </div>

          <div class="consent-group">
            <label class="checkbox-label">
              <input
                v-model="formData.marketingConsent"
                type="checkbox"
                class="form-checkbox"
              />
              <span class="checkbox-text">
                Wyrażam zgodę na otrzymywanie informacji o usługach gabinetu drogą e-mailową.
              </span>
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['form-data'])

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  gender: '',
  dateOfBirth: '',
  reason: '',
  notes: '',
  isFirstVisit: false,
  hasAllergies: false,
  allergies: '',
  dataConsent: false,
  marketingConsent: false
})

const errors = ref({})

const maxBirthDate = computed(() => {
  const today = new Date()
  today.setFullYear(today.getFullYear() - 16) // Minimum 16 ans
  return today.toISOString().split('T')[0]
})

const validateForm = () => {
  errors.value = {}

  // Validation prénom
  if (!formData.value.firstName.trim()) {
    errors.value.firstName = 'Le prénom est requis'
  } else if (formData.value.firstName.trim().length < 2) {
    errors.value.firstName = 'Le prénom doit contenir au moins 2 caractères'
  }

  // Validation nom
  if (!formData.value.lastName.trim()) {
    errors.value.lastName = 'Le nom est requis'
  } else if (formData.value.lastName.trim().length < 2) {
    errors.value.lastName = 'Le nom doit contenir au moins 2 caractères'
  }

  // Validation email
  if (!formData.value.email.trim()) {
    errors.value.email = 'L\'email est requis'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Format d\'email invalide'
  }

  // Validation téléphone
  if (!formData.value.phone.trim()) {
    errors.value.phone = 'Le téléphone est requis'
  } else if (!/^[\+]?[\d\s\-\(\)]{8,}$/.test(formData.value.phone.replace(/\s/g, ''))) {
    errors.value.phone = 'Format de téléphone invalide'
  }

  // Validation motif
  if (!formData.value.reason) {
    errors.value.reason = 'Le motif de consultation est requis'
  }

  // Validation genre
  if (!['male', 'female'].includes(formData.value.gender)) {
    errors.value.gender = 'Le genre est requis'
  }

  // Validation consentement
  if (!formData.value.dataConsent) {
    errors.value.dataConsent = 'Vous devez accepter le traitement de vos données personnelles'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    emit('form-data', formData.value)
  }
}

// Émettre les données à chaque changement si le formulaire est valide
watch(formData, () => {
  if (validateForm()) {
    emit('form-data', formData.value)
  }
}, { deep: true })
</script>

<style scoped>
.patient-form-component {
  width: 100%;
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
}

.form-title {
  font-family: 'Aboreto', serif;
  font-size: 24px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 8px;
}

.form-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  color: #6B7280;
  margin: 0;
}

.patient-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-section {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.section-title {
  font-family: 'Aboreto', serif;
  font-size: 18px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #BC9667;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-label {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin: 10px 0px;
}

.form-input, .form-select, .form-textarea {
  font-family: 'Satoshi Variable', sans-serif;
  padding: 12px 16px;
  border: 2px solid #E5E7EB;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: white;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: #BC9667;
  box-shadow: 0 0 0 3px rgba(188, 150, 103, 0.1);
}

.form-input.error, .form-select.error {
  border-color: #EF4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 0px;
  color: #374151;
}

.checkbox-label.required .checkbox-text {
  font-weight: 500;
}

.form-checkbox {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #BC9667;
  cursor: pointer;
}

.form-checkbox.error {
  outline: 2px solid #EF4444;
  outline-offset: 2px;
}

.checkbox-text {
  flex: 1;
}

.consent-group {
  margin-bottom: 16px;
}

.consent-group:last-child {
  margin-bottom: 0;
}

.error-message {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 12px;
  color: #EF4444;
  margin-top: 4px;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .form-section {
    padding: 20px;
  }

  .section-title {
    font-size: 16px;
  }

  .form-input, .form-select, .form-textarea {
    padding: 10px 14px;
    font-size: 16px; /* Éviter le zoom sur iOS */
  }
}

@media (max-width: 480px) {
  .form-section {
    padding: 16px;
  }

  .form-header {
    margin-bottom: 24px;
  }

  .form-title {
    font-size: 20px;
  }

  .form-subtitle {
    font-size: 14px;
  }

  .checkbox-label {
    font-size: 13px;
  }
}
</style>
