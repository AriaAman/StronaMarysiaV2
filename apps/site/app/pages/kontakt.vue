<template>
    <kontactFormInfo />
    <ParkingSection />
    <GoogleMaps />
    <FaqKontakt />
</template>

<script setup>
import kontactFormInfo from '../components/Kontakt/kontactFormInfo.vue'
import ParkingSection from '~/components/Kontakt/ParkingSection.vue'
import GoogleMaps from '../components/Kontakt/GoogleMaps.vue'
import FaqKontakt from '~/components/Kontakt/FaqKontakt.vue';

useSeoMeta({
  title: 'Kontakt - Gabinet Dentystyczny Piotr Pietruszczak Olsztyn',
  ogTitle: 'Kontakt - Gabinet Dentystyczny Piotr Pietruszczak Olsztyn',
  description: 'Skontaktuj się z nami. Gabinet Dentystyczny Piotra Pietruszczaka w Olsztynie. Adres, telefon, godziny otwarcia, formularz kontaktowy i mapa dojazdu.',
  ogDescription: 'Skontaktuj się z nami. Gabinet Dentystyczny Piotra Pietruszczaka w Olsztynie. Adres, telefon, godziny otwarcia, formularz kontaktowy i mapa dojazdu.',
})
</script>