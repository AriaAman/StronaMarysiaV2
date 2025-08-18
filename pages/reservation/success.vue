<template>
  <div class="success-page">
    <main class="success-main">
      <div class="success-container">
        <div class="success-content">
          <!-- Icône de succès -->
          <div class="success-icon">
            <svg width="80" height="80" fill="#10B981" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>

          <!-- Message de succès -->
          <div class="success-message">
            <h1 class="success-title">Wizyta potwierdzona!</h1>
            <p class="success-subtitle">
              Twoja wizyta została pomyślnie zarejestrowana.
              E-mail z potwierdzeniem został wysłany na Twój adres.
            </p>
          </div>

          <!-- Informations du rendez-vous -->
          <div class="appointment-summary">
            <h2 class="summary-title">Podsumowanie Twojej wizyty</h2>

            <div class="summary-card">
              <div class="summary-row">
                <span class="summary-label">Data:</span>
                <span class="summary-value">{{ appointmentDate }}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Godzina:</span>
                <span class="summary-value">{{ appointmentTime }}</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Lekarz:</span>
                <span class="summary-value">Dr. Pietruszczak</span>
              </div>
              <div class="summary-row">
                <span class="summary-label">Adres:</span>
                <span class="summary-value">Stawigudzka 8c/e, 10-687 Olsztyn</span>
              </div>
            </div>
          </div>

          <!-- Instructions -->
          <div class="instructions">
            <h3 class="instructions-title">Następne kroki</h3>
            <div class="instructions-list">
              <div class="instruction-item">
                <div class="instruction-icon">
                  <svg width="20" height="20" fill="#BC9667" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="instruction-text">
                  <strong>Sprawdź swoją pocztę e-mail</strong>
                  <span>E-mail z potwierdzeniem ze wszystkimi szczegółami został wysłany na Twój adres</span>
                </div>
              </div>

              <div class="instruction-item">
                <div class="instruction-icon">
                  <svg width="20" height="20" fill="#BC9667" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="instruction-text">
                  <strong>Przygotuj dokumenty</strong>
                  <span>Zabierz ze sobą dokument tożsamości i kartę ubezpieczenia</span>
                </div>
              </div>

              <div class="instruction-item">
                <div class="instruction-icon">
                  <svg width="20" height="20" fill="#BC9667" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zM12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <div class="instruction-text">
                  <strong>Przyjedź punktualnie</strong>
                  <span>Prosimy o przybycie 15 minut przed umówioną wizytą</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="success-actions">
            <NuxtLink to="/" class="btn-home">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Powrót do strony głównej
            </NuxtLink>

            <a href="tel:+48503529023" class="btn-contact">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Skontaktuj się z nami
            </a>
          </div>

          <!-- Informations de contact d'urgence -->
          <div class="emergency-info">
            <p class="emergency-text">
              <strong>W przypadku nagłych wypadków:</strong> Zadzwoń do nas pod numer
              <a href="tel:+48503529023" class="emergency-phone">+48 503 529 023</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

// Récupérer les données du rendez-vous depuis la query ou le localStorage
const route = useRoute()
const appointmentDate = ref('Lundi 15 janvier 2024')
const appointmentTime = ref('14h30')

// En production, vous récupéreriez ces données depuis la query ou l'API
onMounted(() => {
  // Exemple de récupération depuis localStorage ou query params
  const savedData = localStorage.getItem('lastAppointment')
  if (savedData) {
    const data = JSON.parse(savedData)
    if (data.date) {
      appointmentDate.value = new Date(data.date).toLocaleDateString('pl-PL', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    if (data.time) {
      appointmentTime.value = data.time
    }
  }
})

// SEO
useHead({
  title: 'Wizyta potwierdzona - Gabinet Dentystyczny',
  meta: [
    { name: 'description', content: 'Twoja wizyta została pomyślnie potwierdzona. Znajdź tutaj wszystkie ważne informacje.' },
    { name: 'robots', content: 'noindex, nofollow' } // Page privée
  ]
})
</script>

<style scoped>
.success-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Satoshi Variable', sans-serif;
}

.success-main {
  flex: 1;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 120px 0 80px 0;
}

.success-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.success-content {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.success-icon {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
}

.success-message {
  margin-bottom: 32px;
}

.success-title {
  font-family: 'Aboreto', serif;
  font-size: 32px;
  font-weight: 400;
  color: #0B162B;
  margin-bottom: 12px;
}

.success-subtitle {
  font-family: 'Satoshi Variable', sans-serif;
  font-size: 16px;
  color: #6B7280;
  line-height: 1.6;
  margin: 0;
}

.appointment-summary {
  margin-bottom: 32px;
  text-align: left;
}

.summary-title {
  font-family: 'Aboreto', serif;
  font-size: 20px;
  color: #0B162B;
  margin-bottom: 16px;
  text-align: center;
}

.summary-card {
  background: #F8F6F3;
  border-radius: 12px;
  padding: 20px;
  border-left: 4px solid #BC9667;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(188, 150, 103, 0.2);
}

.summary-row:last-child {
  border-bottom: none;
}

.summary-label {
  font-weight: 500;
  color: #6B7280;
}

.summary-value {
  font-weight: 600;
  color: #0B162B;
  text-align: right;
}

.instructions {
  margin-bottom: 32px;
  text-align: left;
}

.instructions-title {
  font-family: 'Aboreto', serif;
  font-size: 18px;
  color: #0B162B;
  margin-bottom: 16px;
  text-align: center;
}

.instructions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.instruction-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.instruction-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: rgba(188, 150, 103, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.instruction-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.instruction-text strong {
  font-weight: 600;
  color: #0B162B;
  font-size: 14px;
}

.instruction-text span {
  font-size: 13px;
  color: #6B7280;
  line-height: 1.4;
}

.success-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.btn-home, .btn-contact {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Satoshi Variable', sans-serif;
}

.btn-home {
  background: #F3F4F6;
  color: #6B7280;
}

.btn-home:hover {
  background: #E5E7EB;
  color: #374151;
  transform: translateY(-1px);
}

.btn-contact {
  background: linear-gradient(135deg, #BC9667 0%, #A68553 100%);
  color: white;
}

.btn-contact:hover {
  background: linear-gradient(135deg, #A68553 0%, #8F7449 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(188, 150, 103, 0.4);
}

.emergency-info {
  padding-top: 20px;
  border-top: 1px solid #E5E7EB;
}

.emergency-text {
  font-size: 13px;
  color: #6B7280;
  margin: 0;
}

.emergency-phone {
  color: #BC9667;
  text-decoration: none;
  font-weight: 600;
}

.emergency-phone:hover {
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .success-main {
    padding: 80px 0 40px 0;
  }

  .success-content {
    padding: 24px;
  }

  .success-title {
    font-size: 24px;
  }

  .success-subtitle {
    font-size: 14px;
  }

  .summary-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .summary-value {
    text-align: left;
  }

  .success-actions {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .success-container {
    padding: 0 12px;
  }

  .success-content {
    padding: 20px;
  }

  .success-title {
    font-size: 20px;
  }

  .summary-card {
    padding: 16px;
  }

  .instruction-text strong {
    font-size: 13px;
  }

  .instruction-text span {
    font-size: 12px;
  }
}
</style>
