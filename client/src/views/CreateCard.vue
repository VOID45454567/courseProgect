<template>
  <CreateVacancy v-if="currentUser.role === 'employer'"></CreateVacancy>
  <CreateResume v-else></CreateResume>
</template>

<script>
import CreateVacancy from "@/components/Create/CreateVacancy.vue";
import CreateResume from "@/components/Create/CreateResume.vue";

export default {
  components: {
    CreateVacancy,
    CreateResume,
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
};
</script>
