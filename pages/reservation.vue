<template>
  <div class="reservation-page">
    <main class="reservation-main">
      <div class="reservation-container">
        <div class="reservation-header">
          <h1 class="reservation-title">Rezerwacja online</h1>
          <p class="reservation-subtitle">Skorzystaj z naszego zewnętrznego kalendarza, aby zarezerwować wizytę.</p>
        </div>

        <div class="reservation-content">
          <div class="reservation-body">
            <div class="embed-wrapper">
              <iframe
                class="felg-iframe"
                title="Kalendarz rezerwacji FELG"
                src="https://felg.app/extcal/6531821429455923"
                frameborder="0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Rezerwacja online - Gabinet Dentystyczny Piotr Pietruszczak',
  ogTitle: 'Rezerwacja online - Gabinet Dentystyczny Piotr Pietruszczak',
  description: 'Zarezerwuj wizytę online w gabinecie dentystycznym Piotra Pietruszczaka w Olsztynie. Szybka i wygodna rezerwacja przez kalendarz online.',
  ogDescription: 'Zarezerwuj wizytę online w gabinecie dentystycznym Piotra Pietruszczaka w Olsztynie. Szybka i wygodna rezerwacja przez kalendarz online.',
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

.api-status-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 15px;
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

.reservation-body {
  padding: 40px;
}

/* Embed */
.embed-wrapper {
  width: 100%;
  min-height: 70vh;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #E5E7EB;
  background: #fff;
}

.felg-iframe {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  border: 0;
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
  
  .felg-iframe { min-height: 700px; }
}

@media (max-width: 480px) {
  .reservation-body {
    padding: 16px;
  }
  .felg-iframe { min-height: 650px; }
}
</style>
