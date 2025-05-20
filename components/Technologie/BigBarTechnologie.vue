<template>
  <div class="bigbar-techno">
    <div class="bigbar-container">
      <div class="bigbar-titles">
        <span class="bigbar-title">Nowoczesny</span>
        <span class="bigbar-subtitle">sprzęt i technologia</span>
      </div>
      <div class="bigbar-desc-row">
        <img src="/static/technologie/agnieszka.svg" alt="avatar" class="bigbar-avatar" />
        <p class="bigbar-desc">
          Zaawansowana diagnostyka i leczenie — sprawdź, jak dbamy o Twój uśmiech dzięki technologii. Zobacz, co oferujemy w naszym gabinecie:
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.bigbar-techno {
  background-color: #122548;
  padding: 3rem 0 2rem 0;
  color: #fff;
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
  align-items: flex-start;
  width: 860px;
}

.bigbar-title {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-weight: 300;
  font-size: 96px;
  line-height: 100%;
  color: #FFFFFF;
}

.bigbar-subtitle {
  font-family: 'Merriweather', 'Merriweather';
  font-style: italic;
  font-weight: 300;
  font-size: 96px;
  line-height: 100%;
  color: #fff;
}

.bigbar-desc-row {
  display: flex;
  align-items: flex-start;
  margin-top: 1.5rem;
  width: 1060px;
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
  color: #B08249;
  margin: 0;
}

@media (max-width: 900px) {
  .bigbar-title, .bigbar-subtitle {
    font-size: 60px;
  }
  .bigbar-desc {
    font-size: 18px;
  }
  .bigbar-avatar {
    width: 50px;
    height: 50px;
  }
  .bigbar-container {
    padding: 0 1rem;
  }
}
</style> 