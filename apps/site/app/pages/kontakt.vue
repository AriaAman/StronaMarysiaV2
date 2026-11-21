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
  title: 'Kontakt i dojazd | Pietruszczak Stomatologia',
  ogTitle: 'Kontakt i dojazd | Pietruszczak Stomatologia',
  description: 'Stawigudzka 8c/e, 10-687 Olsztyn. Zadzwoń: +48 503 529 023 lub napisz przez formularz kontaktowy. Mapa dojazdu i informacje o parkingu.',
  ogDescription: 'Stawigudzka 8c/e, 10-687 Olsztyn. Zadzwoń: +48 503 529 023 lub napisz przez formularz kontaktowy. Mapa dojazdu i informacje o parkingu.',
})
</script>