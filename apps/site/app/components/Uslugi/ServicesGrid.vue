<template>
  <section class="services-grid-section">
    <div class="container">
      <div class="services-nav">
        <button v-for="category in categories" :key="category" class="nav-item"
          :class="{ active: category === 'Wszystko' }">
          {{ category }}
        </button>
      </div>

      <div class="services-grid">
        <ServiceCard v-for="service in services" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '~/components/Services/ServiceCard.vue';

const categories = ['Wszystko', 'Wybielanie', 'Leczenie', 'Protetyka'];

const services = [
  {
    id: 1,
    title: 'Implants',
    image: '/static/uslugi/implanty.avif'
  },
  {
    id: 2,
    title: 'ENDODONCJA - LECZENIE KANAŁOWE',
    image: '/static/uslugi/endodoncja.avif'
  },
  {
    id: 3,
    title: 'Protetyka',
    image: '/static/uslugi/protetyka.avif'
  },
  {
    id: 4,
    title: 'STOMATOLOGIA ESTETYCZNA',
    image: '/static/uslugi/stomatologia-estetyczna.avif'
  },
  {
    id: 5,
    title: 'Stomatologia zachowawcza',
    image: '/static/uslugi/stomatologia-zachowawcza.avif'
  },
  {
    id: 6,
    title: 'DIAGNOSTYKA',
    image: '/static/uslugi/diagnostyka.avif'
  },
  {
    id: 7,
    title: 'Profilaktyka',
    image: '/static/uslugi/profilaktyka.avif'
  },
  {
    id: 8,
    title: 'CHIRURGIA STOMATOLOGICZNA',
    image: '/static/uslugi/chirurgia-stomatologiczna.avif'
  }
];
</script>

<style scoped>
/* Polices centralisées dans nuxt.config.ts */

.services-grid-section {
  padding: 80px 0;
  background-color: #F7F7F7;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

.services-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
}

.nav-item {
  font-family: 'Aboreto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 1px;
  color: #525961;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  transition: color 0.3s;
}

.nav-item.active {
  color: #0B162B;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #BC9667;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
}

@media (max-width: 992px) {
  .services-nav {
    flex-wrap: wrap;
    gap: 20px;
  }

  .services-grid {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
