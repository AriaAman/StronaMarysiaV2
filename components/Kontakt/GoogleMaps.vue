<template>
    <div id="map" class="map-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';
// Remove static import
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

onMounted(async () => {
  // Dynamically import Leaflet and its CSS
  const L = await import('leaflet');
  await import('leaflet/dist/leaflet.css');

  const map = L.map('map').setView([53.72497, 20.47331], 17); // Coordinates for Stawigudzka 8c/c, Olsztyn

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([53.72497, 20.47331]).addTo(map)
    .bindPopup('Stommatologia Implantologia<br>Stawigudzka 8c/e, 10-687 Olsztyn')
    .openPopup();
});
</script>

<style scoped>
.map-container {
  height: 400px;
  width: 100%;
  box-sizing: border-box;
}

/* Desktop large (1441px+) */
@media screen and (min-width: 1441px) {
  .map-container {
    height: 450px;
  }
}

/* Desktop standard (1200px - 1440px) */
@media screen and (max-width: 1440px) and (min-width: 1201px) {
  .map-container {
    height: 400px;
  }
}

/* Tablet large (1025px - 1200px) */
@media screen and (max-width: 1200px) and (min-width: 1025px) {
  .map-container {
    height: 380px;
  }
}

/* Tablet (769px - 1024px) */
@media screen and (max-width: 1024px) and (min-width: 769px) {
  .map-container {
    height: 350px;
    margin: 0px;
  }
}

/* Mobile large (481px - 768px) */
@media screen and (max-width: 768px) and (min-width: 481px) {
  .map-container {
    height: 300px;
    margin: 0px;
    border-radius: 8px;
    overflow: hidden;
  }
}

/* Mobile standard (321px - 480px) */
@media screen and (max-width: 480px) and (min-width: 321px) {
  .map-container {
    height: 250px;
    margin: 0px;
    border-radius: 6px;
    overflow: hidden;
  }
}

/* Mobile small (320px and below) */
@media screen and (max-width: 320px) {
  .map-container {
    height: 220px;
    margin: 0px;
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>