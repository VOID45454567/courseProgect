<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <RouterView />
</template>
<script>
export default {
  async onMounted() {
    this.$store.dispatch(fetcUser);
  },
};
</script>
