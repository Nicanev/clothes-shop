<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__text-block">
        <div class="hero__small-heading">{{ $t("hero.small-head") }}</div>
        <div class="hero__main-heading">{{ $t("hero.main-head") }}</div>
        <div class="hero__sub">
          {{ $t("hero.sub-text") }}
        </div>
        <button class="hero__catalog-btn">{{ $t("hero.catalog-btn") }}</button>
      </div>
      <div class="hero__img">
        <img src="@/assets/img/slider-image/hero-image-1.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  &__container {
    display: flex;
    justify-content: space-around;
  }
  &__small-heading {
    font-weight: bold;
    color: var(--gray-dark-medium);
    font-size: var(--small-heading-font-size);
    margin-bottom: 1rem;
  }
  &__main-heading {
    max-width: 40rem;
    font-weight: bold;
    color: var(--gray-white);
    font-size: var(--main-heading-font-size);
    margin-bottom: 3.7rem;
  }
  &__sub {
    max-width: 49.2rem;
    font-weight: bold;
    color: var(--gray-dark-medium);
    font-size: var(--sub-text-font-size);
  }
  &__text-block {
    margin-top: 13rem;
  }
  &__catalog-btn {
    margin-top: 6rem;
    background-color: white;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem 1.4rem;
    border-radius: 2rem;
    box-shadow: 0px 1.7rem 3.3rem rgba(255, 255, 255, 0.2);
  }
  &__img {
  }
}
</style>
