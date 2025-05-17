<template>
  <div class="specialists-page">
    <NasiSpecjalisci />
    <div class="specialists-container" id="specjalisci">
      <ZespolSpecjalistow />
    </div>
  </div>
</template>

<script setup>
import NasiSpecjalisci from './BigBaroNas.vue';
import ZespolSpecjalistow from './ZespolSpecjalistow.vue';
</script>

<style scoped>
.specialists-page {
  display: flex;
  flex-direction: column;
}

.specialists-container {
  padding: 2rem 1rem;
  background-color: #EEEBEA;
}
</style> 