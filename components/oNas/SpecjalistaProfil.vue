<template>
  <div class="specialist-profile">
    <div class="specialist-content">
      <div :class="['specialist-body', { 'specialist-body-reversed': isReversed }]">
        <div class="specialist-photo">
          <img :src="photoSrc" :alt="name" />
        </div>
        <div class="specialist-details">
          <div class="specialist-header">
            <h3 class="specialist-title">{{ title }}</h3>
            <h2 class="specialist-name">{{ name }}</h2>
          </div>
          <div class="specialist-text">
            <p v-html="bio"></p>
            <p v-if="personal">{{ personal }}</p>
          </div>
          <div class="specialist-tags">
            <div v-for="(tag, index) in tags" :key="index" class="specialist-tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  photoSrc: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  personal: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  isReversed: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.specialist-profile {
  background-color: #FFFFFF;
  border: 1px solid #E4D5C2;
  margin: 2rem auto;
  max-width: 1440px;
  border-radius: 1px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.specialist-content {
  display: flex;
  flex-direction: column;
}

.specialist-header {
  text-align: left;
  margin-bottom: 1.5rem;
}

.specialist-title {
  font-family: 'Aboreto', 'Aboreto';
  font-weight: 400;
  font-size: 20px;
  color: #A9722D;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 0px;
  margin-top: 0px;
  letter-spacing: 1px;
}

.specialist-name {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-weight: 400;
  font-size: 48px;
  color: #0B162B;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 110%;
}

.specialist-body {
  display: flex;
  align-items: flex-start;
}

.specialist-body-reversed {
  flex-direction: row-reverse;
}

.specialist-photo img {
  width: 430px;
  height: 430px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 40px;
}

.specialist-body-reversed .specialist-photo img {
  margin-left: 0;
  margin-right: 48px;
}

.specialist-photo img:hover {
  transition: transform 0.3s ease;
}

.specialist-details {
  padding: 3rem;
}

.specialist-text {
  font-family: 'Satoshi Variable', 'Satoshi';
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  color: #122548;
  letter-spacing: 0px;
}

.specialist-text p {
  margin-top: 0;
  margin-bottom: 32px;
}

.specialist-text p:last-child {
  margin-bottom: 32px;
}

.specialist-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.specialist-tag {
  padding: 8px 10px;
  background-color: #F8F4F0;
  border: 1px solid #E4D5C2;
  color: #A9722D;
  font-family: 'Aboreto', 'Aboreto';
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .specialist-body, .specialist-body-reversed {
    flex-direction: column;
  }
  
  .specialist-photo img {
    width: 100%;
    height: auto;
    margin: 0 0 1.5rem 0;
  }
  
  .specialist-name {
    font-size: 36px;
  }
}
</style> 