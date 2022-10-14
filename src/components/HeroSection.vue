<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__text-block">
        <div class="hero__small-heading">Будь в тренде</div>
        <div class="hero__main-heading">Современная одежда</div>
        <div class="hero__sub">
          В нашем магазине вы найдете современную модную одежду и обувь под
          любой сезон.
        </div>
        <button class="hero__catalog-btn">КАТАЛОГ</button>
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
    max-width: 37.3rem;
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
