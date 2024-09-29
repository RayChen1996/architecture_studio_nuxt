<template>
  <div class="flex flex-col min-h-dvh bg-white">
    <div class="flex-1"></div>
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
