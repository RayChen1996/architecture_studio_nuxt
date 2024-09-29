<!-- layouts/default.vue -->
<template>
  <div class="flex flex-col min-h-dvh bg-transparent">
    <AppNavbar />
    <div class="flex-1">
      <NuxtPage />
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

import { onMounted } from "vue";

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>
