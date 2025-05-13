<template>
  <article class="card" :class="{ reverse: isReverse }">
    <figure class="visual">
      <img :src="service.image" :alt="service.caption" />
      <figcaption class="caption">
        <span class="cap-label">{{ service.caption }}</span>
        <span class="cap-idx">{{ idxStr }}</span>
      </figcaption>
    </figure>

    <div class="content">
      <span class="idx-square">{{ idxStr }}</span>
      <h3 class="heading">{{ service.title }}</h3>
      <div class="description" v-html="service.description" />
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  service: {
    title: string
    caption: string
    image: string
    description: string
  }
  index: number
}>()

const isReverse = computed(() => props.index % 2 === 1)
const idxStr = computed(() =>
  String(props.index + 1).padStart(2, '0')
)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500&family=Merriweather:ital,wght@1,300&family=Aboreto&display=swap');

.description ul,
.description ul li,
ul {
  padding-left: 5px !important;
  margin-left: 0 !important;
 
  
}

.card {
  display: grid;
  grid-template-columns: 704px 704px;
  gap: 32px;
  margin-bottom: 64px;
  justify-content: center;
}

.card.reverse {
  direction: rtl;
}

.card.reverse>* {
  direction: ltr;
}

.visual {
  position: relative;
  overflow: hidden;
  border: 1px solid #e4d5c2;
  height: 500px;
  margin: 0;
}

.visual img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 25px;
  left: 30px;
  right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  padding: 0 36px;
  background: #fff;
  border: 1px solid #E4D5C2;
}

.cap-label {
  font: 400 18px/100% 'Satoshi', serif;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: #0B162B;
}

.cap-idx {
  font: 400 14px/100% 'Aboreto', serif;
  color: #0B162B;
}

@media(max-width:767px) {
  .caption {
    height: 56px;
    padding: 0 24px;
  }

  .cap-label {
    font-size: 16px;
  }
}

.caption .idx {
  font: 400 14px 'Aboreto', serif;
  color: #0b162b;
}

.content {
  position: relative;
  border: 1px solid #e4d5c2;
  padding: 48px;
  height: 407px;
  background: #ffffff;
  overflow: hidden;
}

.idx-square {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 32px;
  height: 32px;
  border: 1px solid #e4d5c2;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 400 14px 'Aboreto', serif;
  color: #a9722d;
  background-color: rgba(228, 213, 194, 0.5);
}

.heading {
  margin: 0 0 24px;
  font: 300 24px/140% 'Aboreto', serif;
  color: #0b162b;
}

.description {
  font: 400 16px/185% 'Satoshi', sans-serif;
  color: #122548;
}

.description strong {
  color: #a9722d;
  font-weight: 600;
}

.description ul {
  margin: 16px 0 0;
  list-style: disc;
}

.description li {
  margin-bottom: 12px;
}

.description p {
  margin: 0 0 16px;
  color: #A9722D;
}

.description p:last-child {
  margin-bottom: 0;
}

.description ul li::marker {
  color: #BC9667;
}

@media (max-width: 1023px) {
  .card {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .card.reverse {
    direction: ltr;
  }

  .visual,
  .content {
    height: auto;
  }

  .visual {
    height: 400px;
  }

  .content {
    padding: 40px 32px;
  }
}

@media (max-width: 767px) {
  .visual {
    height: 300px;
  }

  .content {
    padding: 32px 24px;
  }

  .heading {
    font-size: 20px;
  }
}

:deep(.description ul) {
  padding-left: 0px !important;
  margin-left: 0 !important;
  list-style-position: outside !important;
}
</style>