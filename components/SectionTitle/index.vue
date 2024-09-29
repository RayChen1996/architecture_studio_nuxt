<template>
  <div class="flex items-center gap-3">
    <img src="/assets//titleLine.svg" alt="" :class="color" />
    <h3 class="text-3xl">{{ title }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  props: {
    title: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: false,
    },
  },
});
</script>
