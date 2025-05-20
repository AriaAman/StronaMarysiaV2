<template>
    <div class="home-page">
      <HeroSection />
      <Stats />
      <WelcomeSection/>
      <NaszeAtuty />
      <ServisDentaires />
      <ServicesOverview />
      <TeamSection />
      <TheWholeTeam />
    </div>
  </template>
  
  <script setup>
  import HeroSection from '~/components/HomePage/HeroSection.vue';
  import Stats from '~/components/HomePage/Stats.vue';
  import ServicesOverview from '~/components/HomePage/ServicesOverview.vue';
  import WelcomeSection from '~/components/HomePage/WelcomeSection'
  import NaszeAtuty from '~/components/HomePage/NaszeAtuty'
  import ServisDentaires from '~/components/HomePage/ServisDentaires.vue';
  import TeamSection from '~/components/HomePage/TeamSection.vue';
  import TheWholeTeam from '~/components/HomePage/TheWholeTeam.vue';
  </script>
  
  <style scoped>
  .home-page {
    width: 100%;
  }
  </style> 