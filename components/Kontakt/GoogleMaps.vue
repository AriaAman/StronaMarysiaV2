<template>
    <div id="map" style="height: 400px;"></div>
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
/* Ajoutez ici votre style CSS si nécessaire */
</style>