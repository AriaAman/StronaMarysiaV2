<template>
  <div>
    <Header />
    <NuxtPage />
    <ServicesBanner />
    <FirstVisitSection/>
    <Footer />
  </div>
</template>


<script setup>
import ServicesBanner from './components/Uslugi/ServicesBanner.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Yesteryear&display=swap');
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.googleapis.com/css2?family=Aboreto&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Yesteryear&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
