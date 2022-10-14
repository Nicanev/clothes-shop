<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped></style>
