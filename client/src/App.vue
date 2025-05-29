<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <AppHeader></AppHeader>
  <RouterView />
  <AppFooter></AppFooter>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  async created() {
    this.$store.dispatch("fetchUser");
    this.restoreAuth();
  },
  methods: {
    async restoreAuth() {
      if (this.hasAutorization && !this.$store.state.auth.user) {
        try {
          await this.$store.dispatch("fetchUser");
        } catch (error) {
          console.error("Ошибка восстановления сессии:", error);
          this.$store.commit("auth/CLEAR_AUTH");
        }
      }
    },
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
