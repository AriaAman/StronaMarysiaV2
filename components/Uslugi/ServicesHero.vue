<template>
  <section class="hero">
    <h1 class="title">
      <br />
      Profesjonalne <br />
      <span class="title-italic">leczenie&nbsp;stomatologiczne</span>
    </h1>

    <div class="tagline-box">
      <img class="avatar" src="/static/HomePage/PiotrWrapper.svg" alt="Piotr Pietruszczak" />
      <p class="tagline">
        „Nowoczesna stomatologia w trosce o Twój uśmiech
        <br /> — bezbolesne leczenie, implanty, wybielanie zębów, ortodoncja i pełna diagnostyka."
      </p>
    </div>

    <ul class="filters">
      <li v-for="(cat, i) in categories" :key="cat.value">
        <button class="filter-btn" @click="$emit('select', cat.value)">
          <img :src="cat.icon" alt="" class="cat-icon" />

          <span class="label">{{ cat.label }}</span>

          <img src="/static/uslugi/arrow-down-right.png" alt="" class="arrow" />
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
    icon: '/static/icons/implantology.png'
  },
  {
    label: 'Leczenie kanałowe',
    value: 'endodoncja',
    icon: '/static/icons/root-canal.png'
  },
  {
    label: 'Protetyka',
    value: 'protetyka',
    icon: '/static/icons/teeth-icon.png'
  },
  {
    label: 'Stom. estetyczna',
    value: 'estetyczna',
    icon: '/static/icons/tooth-2.png'
  },
  {
    label: 'Stom. zachowawcza',
    value: 'zachowawcza',
    icon: '/static/icons/tooth.png'
  },
  {
    label: 'Diagnostyka',
    value: 'diagnostyka',
    icon: '/static/icons/hands.png'
  },
  {
    label: 'Profilaktyka',
    value: 'profilaktyka',
    icon: '/static/icons/gum.png'
  },
  {
    label: 'Chirurgia stom.',
    value: 'chirurgia',
    icon: '/static/icons/chair.png'
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
  font: 300 80px/100% 'Satoshi', sans-serif;
  color: #0b162b;
  margin: 0 0 24px;
}

.title-italic {
  font: italic 300 80px/100% 'Merriweather', serif;
}

.tagline-box {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 56px;
}

.avatar {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  object-fit: cover;
}

.tagline {
  max-width: 760px;
  margin: 0;
  font: 400 20px/160% 'Satoshi', sans-serif;
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
}

.arrow {
  width: 10px;
  height: 10px;
  flex-shrink: 0;
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

  .filters {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .hero {
    margin: 60px auto 32px;
  }

  .title,
  .title-italic {
    font-size: 40px;
  }

  .tagline-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .tagline {
    font-size: 18px;
  }

  .filters {
    grid-template-columns: 1fr;
  }
}
</style>