<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
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
