<script setup lang="ts">
import ProductCards from "../components/ProductCards.vue";
</script>

<template>
  <section class="catalog">
    <div class="catalog__container">
      <div class="catalog__breadcrumbs">
        <span>{{ $t("catalog.breadcrumbs.home") }}</span>
        <span class="arrow-right"></span>
        <span>{{ $t("catalog.breadcrumbs.mans") }}</span>
      </div>
      <ProductCards />
    </div>
  </section>
</template>

<style lang="scss">
.catalog {
  &__breadcrumbs {
    margin-top: 7rem;
    margin-bottom: 7rem;
    display: flex;
    gap: 1.7rem;
    span {
      font-size: var(--catalog-breadcrumbs-font-size);
      color: var(--gray-white);
      font-weight: bold;
      cursor: pointer;
    }
    span:hover {
      text-decoration: underline;
    }
  }
}
.arrow-right {
  width: 1rem;
  height: 1rem;
  margin-top: 0.3rem;
  border-top: 0.2rem solid var(--gray-white);
  border-right: 0.2rem solid var(--gray-white);
  transform: rotate(45deg);
  cursor: auto !important;
}
</style>
