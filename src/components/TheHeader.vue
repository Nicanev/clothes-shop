<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <RouterLink to="/"
          ><a href="#"><img src="@/assets/img/Logo.svg" alt="Logo" /></a
        ></RouterLink>
      </div>
      <div class="header__menu">
        <ul>
          <li>
            <a href="#" class="dropdown">{{ $t("header.mans") }}</a>
          </li>
          <li>
            <a href="#" class="dropdown">{{ $t("header.womans") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("header.kids") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("header.clothes") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("header.shoes") }}</a>
          </li>
        </ul>
      </div>
      <div class="header__left-side">
        <div class="header__basket">
          <a href="#">{{ $t("header.basket") }}</a>
        </div>
        <div class="header__profile profile">
          <div class="profile__img">
            <img src="@/assets/img/avatar.jpg" alt="avatar" />
          </div>
          <div class="profile__text">
            <div class="profile__name">Никита Лебедев</div>
            <div class="profile__link">{{ $t("header.openProfile") }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  color: var(--gray-white);
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 9.5rem;
  }
  &__logo {
    img {
      width: 8.4rem;
      height: 5.2rem;
    }
  }
  &__menu {
    ul {
      display: flex;
      gap: 3.5rem;
    }
    li a {
      font-weight: bold;
      font-size: var(--header-menu-font-size);
    }
  }
  &__basket {
    font-size: var(--header-menu-font-size);
    font-weight: bold;
  }
  &__profile {
  }
  &__left-side {
    display: flex;
    gap: 3.2rem;
    align-items: center;
  }
}
.dropdown {
  position: relative;
  padding-right: 0.9rem;
}
.dropdown::after {
  content: "";
  position: absolute;
  margin-left: 0.9rem;
  margin-top: 0.5rem;
  border: solid var(--gray-white);
  border-width: 0 0.2rem 0.2rem 0;
  display: inline-block;
  padding: 0.3rem;
  transform: rotate(45deg);
}
.profile {
  display: flex;
  gap: 1rem;
  &__img {
    img {
      width: 3.3rem;
      height: 3.3rem;
      border-radius: 0.7rem;
      border: 0.1rem solid var(--gray-dark-medium);
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    font-size: 1rem;
  }
  &__name {
    font-weight: bold;
  }
  &__link {
    font-weight: bold;
    color: var(--gray-dark-medium);
  }
}
</style>
