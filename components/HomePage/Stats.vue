
<template>
  <section class="stats-section">
    <div class="container">
      <div class="stat-item">
        <div class="stat-label">Z NAMI OD 2016</div>
        <div class="stat-value">12 lat</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-label">ZADOWOLONYCH PACJENTÓW</div>
        <div class="stat-value">99,9%</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-label">WYKONANYCH ZABIEGÓW</div>
        <div class="stat-value">+60 tys.</div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pas de logique spécifique nécessaire pour ce composant statique
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/satoshi?styles=135009');

.stats-section {
  width: 100%;
  background-color: #fff;
  padding: 60px 0;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 64px;
  justify-content: space-between;
  padding: 0 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 437px;
  height: 113px;
  gap: 4px;
}

.stat-label {
  font-family: 'Aboreto', system-ui;
  font-size: 13px;
  font-weight: 400;
  color: #BC9667;
  line-height: 160%;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
}

.stat-value {
  font-family: "Merriweather", system-ui;
  font-size: 80px;
  font-style: italic;   
  font-weight: 300;
  color: #0B162B;
  letter-spacing: 0px;
  line-height: 110%;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 40px;
  }
  
  .stat-item {
    width: 100%;
  }
  
  .stat-value {
    font-size: 48px;
  }
}
</style> 