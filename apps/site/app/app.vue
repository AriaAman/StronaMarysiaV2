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
/* Polices centralisées dans nuxt.config.ts */

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
