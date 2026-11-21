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

const SITE_URL = 'https://pietruszczak.pl';
const route = useRoute();

// Fiche du cabinet pour Google : nom du site, logo, adresse, téléphone, horaires
// (mêmes horaires que la fiche Google Business Profile).
const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pietruszczak Stomatologia',
    alternateName: ['Stomatologia Implantologia Pietruszczak', 'Pietruszczak'],
    url: `${SITE_URL}/`,
    inLanguage: 'pl-PL'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    '@id': `${SITE_URL}/#gabinet`,
    name: 'Pietruszczak Stomatologia',
    alternateName: 'Stomatologia Implantologia Pietruszczak',
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon-512.png`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: '+48 503 529 023',
    email: 'kontakt@pietruszczak.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Stawigudzka 8c/e',
      postalCode: '10-687',
      addressLocality: 'Olsztyn',
      addressCountry: 'PL'
    },
    geo: { '@type': 'GeoCoordinates', latitude: 53.72497, longitude: 20.47331 },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '16:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '11:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '14:00' }
    ],
    sameAs: [
      'https://www.instagram.com/pietruszczak.stomatologia',
      'https://www.facebook.com/pietruszczakstomatologia'
    ]
  }
];

useHead(() => ({
  // Adresse officielle de chaque page (sans « www », sans paramètres)
  link: [{ rel: 'canonical', href: `${SITE_URL}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}` }],
  meta: [{ property: 'og:url', content: `${SITE_URL}${route.path}` }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(structuredData) }]
}));
</script>
<style>
/* Polices centralisées dans nuxt.config.ts */

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
