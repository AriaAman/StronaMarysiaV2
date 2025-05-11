<template>
    <div class="home-page">
      <HeroSection />
      <Stats />
      <WelcomeSection/>
      <NaszeAtuty />
    </div>
  </template>
  
  <script setup>
  import HeroSection from '~/components/HomePage/HeroSection.vue';
  import Stats from '~/components/HomePage/Stats.vue';
  import WelcomeSection from '~/components/HomePage/WelcomeSection'
  import NaszeAtuty from '~/components/HomePage/NaszeAtuty'
  </script>
  
  <style scoped>
  .home-page {
    width: 100%;
  }
  </style> 