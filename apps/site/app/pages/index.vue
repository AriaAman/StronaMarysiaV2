<template>
  <div class="home-page">
    <HeroSection />
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
import ServicesOverview from '~/components/HomePage/ServicesOverview.vue';
import WelcomeSection from '~/components/HomePage/WelcomeSection'
import NaszeAtuty from '~/components/HomePage/NaszeAtuty'
import ServisDentaires from '~/components/HomePage/ServisDentaires.vue';
import TeamSection from '~/components/HomePage/TeamSection.vue';
import TheWholeTeam from '~/components/HomePage/TheWholeTeam.vue';

useSeoMeta({
  title: 'Piotr Pietruszczak – Stomatolog Olsztyn | Gabinet Dentystyczny',
  ogTitle: 'Piotr Pietruszczak – Stomatolog Olsztyn | Gabinet Dentystyczny',
  description: 'Gabinet stomatologiczny w Olsztynie: implanty, leczenie kanałowe pod mikroskopem, protetyka i estetyka. Umów wizytę telefonicznie: +48 503 529 023.',
  ogDescription: 'Gabinet stomatologiczny w Olsztynie: implanty, leczenie kanałowe pod mikroskopem, protetyka i estetyka. Umów wizytę telefonicznie: +48 503 529 023.',
})
</script>

<style scoped>
.home-page {
  width: 100%;
}
</style>