<template>
    <BigBar />
    <CennikBloc />
</template>

<script setup>
import BigBar from '~/components/Cennik/BigBarCennik.vue';
import CennikBloc from '~/components/Cennik/CennikBloc.vue';

useSeoMeta({
  title: 'Cennik | Pietruszczak Stomatologia',
  ogTitle: 'Cennik | Pietruszczak Stomatologia',
  description: 'Sprawdź ceny konsultacji, higienizacji, implantów, leczenia kanałowego i protetyki w naszym gabinecie w Olsztynie. Wszystkie zabiegi w jednym miejscu.',
  ogDescription: 'Sprawdź ceny konsultacji, higienizacji, implantów, leczenia kanałowego i protetyki w naszym gabinecie w Olsztynie. Wszystkie zabiegi w jednym miejscu.',
})
</script>
