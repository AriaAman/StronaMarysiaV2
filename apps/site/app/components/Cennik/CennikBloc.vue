<template>
  <section class="price-section">
    <div class="test">
      <div v-for="(category, index) in categories" :key="category.id || category.title" class="price-category">
        <div class="category-header">
          <div class="category-number">{{ String(index + 1).padStart(2, '0') }}</div>
          <h2 class="category-title">{{ category.title }}</h2>
          <p class="category-description">{{ category.description }}</p>
        </div>
        <div class="price-items">
          <div
            v-for="service in category.services"
            :key="service.id || `${category.title}-${service.name}`"
            class="price-item"
          >
            <div class="service-name">{{ service.name }}</div>
            <div class="service-price">{{ service.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { fallbackPriceCategories } from '@pietruszczak/shared/prices'
import type { PriceCategory } from '@pietruszczak/shared/types'

const supabase = useSupabase()

const { data } = await useAsyncData('price-categories', async () => {
  const { data: rows, error } = await supabase
    .from('price_categories')
    .select('id,title,description,sort_order,is_active,price_items(id,name,price,sort_order,is_active)')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })
    .order('sort_order', { foreignTable: 'price_items', ascending: true })

  if (error || !rows?.length) {
    return fallbackPriceCategories
  }

  return rows.map((category) => ({
    id: category.id,
    title: category.title,
    description: category.description,
    sort_order: category.sort_order,
    is_active: category.is_active,
    services: (category.price_items || []).filter((item) => item.is_active)
  })) as PriceCategory[]
})

const categories = computed(() => data.value || fallbackPriceCategories)
</script>

<style scoped>
.price-section {
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #EEEBEA;
}

.test {
  margin: 2rem auto;
  max-width: 1400px;
  border-radius: 1px;
}

.price-category {
  background-color: #ffffff;
  border: 1px solid #E4D5C2;
  margin-bottom: 40px;
  padding: 48px;
  border-radius: 2px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
}

.category-header {
  position: relative;
}

.category-number {
  font-family: 'Aboreto', 'Aboreto';
  font-size: 13px;
  color: #0B162B;
  margin-bottom: 8px;
  letter-spacing: 1.5px;
  line-height: 160%;
  text-transform: uppercase;
}

.category-title {
  font-family: 'Satoshi', 'Satoshi';
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 1px;
  color: #0B162B;
  margin: 0;
  margin-bottom: 8px;
}

.category-description {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  font-weight: 400;
  line-height: 180%;
  color: #A9722D;
  margin: 0;
}

.price-items {
  width: 628px;
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid #D7C0A4;
  border-top: none;
}

.service-name {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1.5px;
  color: #0E1E3A;
  text-transform: uppercase;
}

.service-price {
  font-family: 'Satoshi', 'Satoshi';
  font-size: 16px;
  color: #B08249;
  text-align: right;
  line-height: 180%;
  font-weight: 400;
}

@media (max-width: 1024px) and (min-width: 769px) {
  .price-section {
    padding: 32px 16px;
  }

  .test {
    margin: 1.5rem auto;
  }

  .price-category {
    padding: 40px;
    margin-bottom: 32px;
    flex-direction: column;
    gap: 24px;
  }

  .category-title {
    font-size: 28px;
  }

  .category-description {
    font-size: 15px;
    margin-bottom: 16px;
  }

  .price-items {
    width: 100%;
  }

  .price-item {
    padding: 16px 0;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
  }

  .service-name {
    font-size: 13px;
    flex: 1;
    text-align: left;
  }

  .service-price {
    font-size: 15px;
    text-align: right;
    white-space: nowrap;
  }
}

@media (max-width: 768px) {
  .price-section {
    padding: 24px 12px;
  }

  .test {
    margin: 1rem auto;
  }

  .price-category {
    padding: 24px;
    margin-bottom: 24px;
    flex-direction: column;
    gap: 20px;
  }

  .category-number {
    font-size: 12px;
    margin-bottom: 6px;
  }

  .category-title {
    font-size: 24px;
    margin-bottom: 6px;
  }

  .category-description {
    font-size: 14px;
    line-height: 160%;
    margin-bottom: 12px;
  }

  .price-items {
    width: 100%;
  }

  .price-item {
    padding: 14px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .service-name {
    font-size: 12px;
    line-height: 130%;
    letter-spacing: 1px;
    width: 100%;
  }

  .service-price {
    font-size: 14px;
    text-align: left;
    width: 100%;
    font-weight: 400;
  }
}

@media (max-width: 480px) {
  .price-section {
    padding: 20px 8px;
  }

  .price-category {
    padding: 20px;
    margin-bottom: 20px;
    gap: 16px;
  }

  .category-number {
    font-size: 11px;
  }

  .category-title {
    font-size: 20px;
  }

  .category-description {
    font-size: 13px;
    line-height: 150%;
  }

  .price-item {
    padding: 12px 0;
    gap: 6px;
  }

  .service-name {
    font-size: 11px;
    letter-spacing: 0.8px;
  }

  .service-price {
    font-size: 13px;
  }
}
</style>
