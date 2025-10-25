<template>
  <div class="bigbar-techno">
    <div class="bigbar-container">
      <div class="bigbar-titles">
        <span class="bigbar-title">Nowoczesny</span>
        <span class="bigbar-subtitle">sprzęt i technologia</span>
      </div>
      <div class="bigbar-desc-row">
        <p class="bigbar-desc">
          Zaawansowana diagnostyka i leczenie - sprawdź, jak dbamy o Twój uśmiech dzięki technologii. <br>Zobacz, co oferujemy w naszym gabinecie.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.bigbar-techno {
  background-color: #E4D5C2;
  padding: 3rem 0 2rem 0;
  width: 100%;
}

.bigbar-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 240px;
    display: flex;
    flex-direction: column;
}

.bigbar-titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.bigbar-title {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-weight: 300;
  font-size: 96px;
  line-height: 100%;
  color: #0E1E3A;
}

.bigbar-subtitle {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-style: italic;
  font-weight: 500;
  font-size: 96px;
  line-height: 100%;
  color: #0E1E3A;
}

.bigbar-desc-row {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;
}

.bigbar-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.bigbar-desc {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 150%;
  color: #122548;
  margin: 0;
}

/* Tablette (768px - 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .bigbar-container {
    padding: 0 40px;
  }

  .bigbar-title, .bigbar-subtitle {
    font-size: 72px;
  }

  .bigbar-desc {
    font-size: 20px;
  }

  .bigbar-avatar {
    width: 60px;
    height: 60px;
  }
}

/* Mobile (jusqu'à 768px) */
@media (max-width: 768px) {
  .bigbar-techno {
    padding: 2rem 0 1.5rem 0;
  }

  .bigbar-container {
    padding: 0 16px;
  }

  .bigbar-title, .bigbar-subtitle {
    font-size: 48px;
    line-height: 110%;
  }

  .bigbar-desc-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin-top: 1rem;
  }

  .bigbar-avatar {
    width: 50px;
    height: 50px;
    margin-right: 0;
  }

  .bigbar-desc {
    font-size: 16px;
    line-height: 160%;
  }
}

/* Très petit mobile (jusqu'à 480px) */
@media (max-width: 480px) {
  .bigbar-techno {
    padding: 1.5rem 0 1rem 0;
  }

  .bigbar-container {
    padding: 0 12px;
  }

  .bigbar-title, .bigbar-subtitle {
    font-size: 36px;
  }

  .bigbar-desc-row {
    gap: 12px;
  }

  .bigbar-avatar {
    width: 44px;
    height: 44px;
  }

  .bigbar-desc {
    font-size: 14px;
    line-height: 150%;
  }
}
</style>