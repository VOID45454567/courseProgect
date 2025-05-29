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
    this.$store.dispatch("auth/fetchUser");
    this.restoreAuth();
  },
  methods: {
    async restoreAuth() {
      if (this.hasAutorization && !this.$store.state.auth.currentUser) {
        try {
          await this.$store.dispatch("auth/fetchUser");
        } catch (error) {
          console.error("Ошибка восстановления сессии:", error);
          this.$store.commit("auth/cleanAuth");
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
