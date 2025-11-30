<template>
  <section class="hero">
    <h1 class="title">
      <br />
      Profesjonalne <br />
      <span class="title-italic">leczenie&nbsp;stomatologiczne</span>
    </h1>

    <div class="tagline-box">
      <p class="tagline">
        Nowoczesna stomatologia w trosce o Twój uśmiech.<br />
Bezbolesne leczenie, implanty, wybielanie zębów, ortodoncja i pełna diagnostyka.
      </p>
    </div>

    <ul class="filters">
      <li v-for="(cat, i) in categories" :key="cat.value">
        <button class="filter-btn" @click="$emit('select', cat.value)">
          <img 
            :src="cat.icon" 
            :alt="`${cat.label} - Usługi stomatologiczne Olsztyn`" 
            class="cat-icon" 
            width="18"
            height="18"
          />

          <span class="label">{{ cat.label }}</span>

          <img 
            src="/static/uslugi/arrow-down-right.png" 
            alt="Przejdź do usługi" 
            class="arrow" 
            width="10"
            height="10"
          />
        </button>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
defineProps<{ active: string }>()
defineEmits<{ select: [value: string] }>()

const categories = [
  {
    label: 'Implantologia',
    value: 'implanty',
    icon: '/static/HomePage/DentHomepage1.svg'
  },
  {
    label: 'Leczenie kanałowe',
    value: 'endodoncja',
    icon: '/static/HomePage/DentHomepage2.svg'
  },
  {
    label: 'Protetyka',
    value: 'protetyka',
    icon: '/static/HomePage/DentHomepage3.svg'
  },
  {
    label: 'Stom. estetyczna',
    value: 'estetyczna',
    icon: '/static/HomePage/DentHomepage4.svg'
  },
  {
    label: 'Stom. zachowawcza',
    value: 'zachowawcza',
    icon: '/static/HomePage/DentHomepage5.svg'
  },
  {
    label: 'Diagnostyka',
    value: 'diagnostyka',
    icon: '/static/HomePage/DentHomepage6.svg'
  },
  {
    label: 'Profilaktyka',
    value: 'profilaktyka',
    icon: '/static/HomePage/DentHomepage7.svg'
  },
  {
    label: 'Chirurgia stom.',
    value: 'chirurgia',
    icon: '/static/HomePage/DentHomepage8.svg'
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500&family=Merriweather:ital,wght@1,300&family=Aboreto&display=swap');

.hero {
  max-width: 1440px;
  margin: 0 auto 32px;
  padding: 40px 40px 0;
}

.title {
  display: flex;
  font-family: 'Satoshi Variable', 'Satoshi';
  font-weight: 300;
  font-size: 96px;
  line-height: 100%;
  color: #0E1E3A;
  margin: 0;
  flex-direction: column;
  align-items: center;
}

.title-italic {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-style: italic;
  font-weight: 500;
  font-size: 96px;
  line-height: 100%;
  color: #0E1E3A;
}

.tagline-box {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
  margin-bottom: 56px;
  text-align: center;
  justify-content: center;
}

.tagline {
  max-width: 900px;
  margin: 0;
  line-height: 130%;
  font-size: 24px;
  font-family: 'Satoshi', sans-serif;
  color: #a9722d;
}

.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 16px;
  column-gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-btn {
  --stroke: #e4d5c2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  padding: 12px 20px;
  border: 1px solid var(--stroke);
  background: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font: 400 14px/120% 'Aboreto', serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #0b162b;
}

.filter-btn.active,
.filter-btn:hover {
  --stroke: #bc9667;
  background: #bc9667;
  color: #fff;
}

.cat-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  display: inline-block;
}

.arrow {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  display: inline-block;
}

/* Make icons white on hover/active */
.filter-btn:hover .cat-icon,
.filter-btn.active .cat-icon,
.filter-btn:hover .cat-icon img,
.filter-btn.active .cat-icon img,
.filter-btn:hover .arrow,
.filter-btn.active .arrow {
  filter: brightness(0) invert(1);
}

@media (max-width: 1023px) {
  .hero {
    margin: 80px auto 48px;
    padding: 0 20px;
  }

  .title,
  .title-italic {
    font-size: 56px;
  }

  .avatar {
    width: 52px;
    height: 52px;
  }

  .tagline {
    font-size: 18px;
  }

  .filters {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
  }
}

/* Mobile - iPhone 12 et similaires (390px - 768px) */
@media (max-width: 768px) {
  .hero {
    margin: 0px auto 24px;
    padding: 0 16px;
  }

  .title {
    font-size: 32px;
    line-height: 110%;
    margin-bottom: 20px;
  }

  .title-italic {
    font-size: 32px;
    line-height: 110%;
  }

  .tagline-box {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;
  }

  .avatar {
    width: 48px;
    height: 48px;
  }

  .tagline {
    font-size: 16px;
    line-height: 150%;
    max-width: 100%;
  }

  .filters {
    grid-template-columns: 1fr;
    row-gap: 12px;
  }

  .filter-btn {
    padding: 16px 20px;
    font-size: 12px;
    gap: 16px;
  }

  .cat-icon {
    width: 20px;
    height: 20px;
  }

  .arrow {
    width: 12px;
    height: 12px;
    margin-left: auto;
  }
  
  .filter-btn:hover .cat-icon,
  .filter-btn.active .cat-icon,
  .filter-btn:hover .arrow,
  .filter-btn.active .arrow {
    filter: brightness(0) invert(1);
  }
}

/* Très petit mobile - iPhone SE et similaires (jusqu'à 480px) */
@media (max-width: 480px) {
  .hero {
    padding: 0 12px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 16px;
  }

  .title-italic {
    font-size: 28px;
  }

  .tagline-box {
    gap: 12px;
    margin-bottom: 32px;
  }

  .avatar {
    width: 44px;
    height: 44px;
  }

  .tagline {
    font-size: 14px;
    line-height: 140%;
  }

  .filters {
    row-gap: 10px;
  }

  .filter-btn {
    padding: 14px 16px;
    font-size: 11px;
    gap: 12px;
  }

  .cat-icon {
    width: 18px;
    height: 18px;
  }

  .arrow {
    width: 10px;
    height: 10px;
  }
  
  .filter-btn:hover .cat-icon,
  .filter-btn.active .cat-icon,
  .filter-btn:hover .arrow,
  .filter-btn.active .arrow {
    filter: brightness(0) invert(1);
  }
}
</style>