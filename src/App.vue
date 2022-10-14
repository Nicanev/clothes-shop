<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped></style>
