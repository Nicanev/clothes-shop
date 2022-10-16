<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="catalog__products products">
    <ul class="products__list">
      <li v-for="product in products" class="products__product card">
        <div class="card__img">
          <img src="@/assets/img/products/product-1.png" alt="Product-img" />
        </div>
        <div class="card__body">
          <div class="card__title">{{ product.lang[currentLang].title }}</div>
          <div class="card__categories">
            {{ $t("catalog.card.category") }}:
            <span>{{ product.lang[currentLang].categories }}</span>
          </div>
          <div class="card__price">{{ product.lang[currentLang].price }}</div>
          <div class="card__buttons">
            <button>{{ $t("catalog.card.addToCart") }}</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.products {
  &__list {
    display: flex;
    gap: 8rem;
  }
}
.card {
  width: 36rem;
  height: 52.5rem;
  &__img {
    margin: 0 auto;
    width: 21.8rem;
  }
  &__body {
    margin-top: 1.9rem;
    color: var(--gray-white);
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }
  &__title {
    font-size: var(--product-title-font-size);
    font-weight: bold;
  }
  &__categories {
    font-size: 1.6rem;
    font-weight: bold;
    span {
      font-size: 1.4rem;
      color: var(--gray-dark-medium);
    }
  }
  &__price {
    font-weight: bold;
    font-size: var(--product-title-font-size);
  }
  &__buttons {
    button {
      padding: 1rem 1.4rem;
      color: var(--gray-dark);
      background-color: var(--gray-white);
      border-radius: 0.5rem;
      font-weight: bold;
      font-size: var(--btn-font-size);
      box-shadow: 0px 1.7rem 3.3rem rgba(255, 255, 255, 0.2);
    }
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      products: [
        {
          lang: [
            {
              title: "Куртка J1A-GTKR-BKS",
              categories: "Мужская",
              price: "124 900 ₽",
            },
            {
              title: "Jacket J1A-GTKR-BKS",
              categories: "Man",
              price: "1 954 $",
            },
          ],
        },
        {
          lang: [
            {
              title: "Куртка J1A-GTKR-BKS",
              categories: "Мужская",
              price: "124 900 ₽",
            },
            {
              title: "Jacket J1A-GTKR-BKS",
              categories: "Man",
              price: "1 954 $",
            },
          ],
        },
      ],
      currentLocale: localStorage.getItem("lang"),
      currentLang: 1,
    };
  },
  watch: {
    locale() {
      this.changeLocale();
    },
  },
  methods: {
    changeLocale() {
      this.currentLocale === "en"
        ? (this.currentLocale = "ru")
        : (this.currentLocale = "en");
      this.currentLocale === "en"
        ? (this.currentLang = 0)
        : (this.currentLang = 1);
    },
  },
  mounted() {
    this.changeLocale();
  },
};
</script>
