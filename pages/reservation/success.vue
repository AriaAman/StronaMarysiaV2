<template>
  <div class="redirect-page">
    <p>Ta strona została przeniesiona. Trwa przekierowanie do <NuxtLink to="/reservation">/reservation</NuxtLink>...</p>
  </div>
</template>

<script setup>
onMounted(() => {
  navigateTo('/reservation', { replace: true })
})

useHead({
  title: 'Przenoszenie...',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.redirect-page {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Satoshi Variable', sans-serif;
  color: #6B7280;
}
</style>
