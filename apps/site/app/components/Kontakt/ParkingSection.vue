<template>
  <div class="parking-section">
    <div class="parking-container">
      <h2 class="parking-title">Parkingi</h2>
      <p class="parking-description">
        Dla wygody naszych pacjentów polecamy <strong>duży parking w odległości ok. 250 metrów</strong> od gabinetu. Bliżej gabinetu znajduje się <strong>kilka wyznaczonych miejsc parkingowych</strong> dla osób korzystających z lokali użytkowych.
      </p>
      <!-- Image temporairement masquée -->
      <div class="parking-map">
        <img 
          src="/static/kontakt/imageGabinetLocation.avif" 
          alt="Mapa parkingu - Lokalizacja gabinetu stomatologicznego Dr. Pietruszczak"
          loading="eager"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Polices centralisées dans nuxt.config.ts */

.parking-section {
  width: 100%;
  background-color: #E4D5C2;
  padding: 120px 20px;
  box-sizing: border-box;
}

.parking-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
}

.parking-title {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 64px;
  font-weight: 300;
  line-height: 110%;
  color: #122548;
  margin: 0 0 32px 0;
}

.parking-description {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 18px;
  line-height: 170%;
  font-weight: 400;
  color: #122548;
  max-width: 720px;
  margin: 0 0 48px 0;
  padding: 0 20px;
  box-sizing: border-box;
}

.parking-description strong {
  font-weight: 600;
  color: #0B162B;
}

.parking-map {
  width: 100%;
  max-width: 1060px;
  overflow: hidden;
  box-sizing: border-box;
}

.parking-map img {
  width: 100%;
  height: auto;
  display: block;
}

/* Responsive Styles */

/* Desktop large (1200px+) */
@media screen and (min-width: 1200px) {
  .parking-container {
    padding: 0 40px;
  }
}

/* Tablet large (1024px - 1199px) */
@media screen and (max-width: 1199px) and (min-width: 1024px) {
  .parking-section {
    padding: 80px 32px;
  }

  .parking-title {
    font-size: 56px;
  }

  .parking-description {
    font-size: 17px;
    line-height: 160%;
    max-width: 680px;
    margin-bottom: 40px;
  }

  .parking-map {
    max-width: 900px;
  }
}

/* Tablet (768px - 1023px) */
@media screen and (max-width: 1023px) and (min-width: 768px) {
  .parking-section {
    padding: 60px 24px;
  }

  .parking-title {
    font-size: 48px;
    margin-bottom: 28px;
  }

  .parking-description {
    font-size: 16px;
    line-height: 160%;
    max-width: 640px;
    margin-bottom: 36px;
    padding: 0 16px;
  }

  .parking-map {
    max-width: 700px;
  }
}

/* Mobile large (481px - 767px) */
@media screen and (max-width: 767px) and (min-width: 481px) {
  .parking-section {
    padding: 48px 20px;
  }

  .parking-title {
    font-size: 40px;
    margin-bottom: 24px;
  }

  .parking-description {
    font-size: 15px;
    line-height: 150%;
    max-width: 100%;
    margin-bottom: 32px;
    padding: 0 12px;
  }

  .parking-map {
    max-width: 100%;
  }
}

/* Mobile medium (376px - 480px) */
@media screen and (max-width: 480px) and (min-width: 376px) {
  .parking-section {
    padding: 40px 16px;
  }

  .parking-title {
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 120%;
  }

  .parking-description {
    font-size: 14px;
    line-height: 150%;
    max-width: 100%;
    margin-bottom: 28px;
    padding: 0 8px;
  }

  .parking-map {
    max-width: 100%;
  }
}

/* Mobile small (≤375px) */
@media screen and (max-width: 375px) {
  .parking-section {
    padding: 32px 12px;
  }

  .parking-title {
    font-size: 28px;
    margin-bottom: 16px;
    line-height: 120%;
  }

  .parking-description {
    font-size: 13px;
    line-height: 145%;
    max-width: 100%;
    margin-bottom: 24px;
    padding: 0 4px;
  }

  .parking-map {
    max-width: 100%;
  }
}
</style>
