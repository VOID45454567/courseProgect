<template>
  <div>
    <AppHeroSection :user="currentUser"></AppHeroSection>
    <AppBenefitSection />
    <AppStatsSelection />
    <AppHowItWorks />
    <AppContactForm />
    <AppCallToAction />
  </div>
</template>

<script>
import AppHeroSection from "@/components/Home/AppHeroSection.vue";
import AppBenefitSection from "@/components/Home/AppBenefitSection.vue";
import AppStatsSelection from "@/components/Home/AppStatsSelection.vue";
import AppHowItWorks from "@/components/Home/AppHowItWorks.vue";
import AppContactForm from "@/components/Home/AppContactForm.vue";
import AppCallToAction from "@/components/Home/AppCallToAction.vue";
export default {
  components: {
    AppHeroSection,
    AppBenefitSection,
    AppStatsSelection,
    AppHowItWorks,
    AppContactForm,
    AppCallToAction,
  },
  async created() {
    await this.$store.dispatch("auth/fetchUser");
    if (!this.currentUser && !this.hasAutorization) {
      this.$router.push("/login");
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    hasAutorization() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
};
</script>
