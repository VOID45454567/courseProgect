<template>
  <Vacancy v-if="cardType === 'vacancy'" :data="card"></Vacancy>
  <Resume v-else :data="card"></Resume>
</template>

<script>
import Resume from "@/components/SingleCardPage/Resume.vue";
import Vacancy from "@/components/SingleCardPage/Vacancy.vue";

export default {
  data() {
    return {
      prevousRoute: null,
      card: null,
      cardId: null,
      cardType: null,
      currentUserId: null,
      creatorId: null
    }
  },
  components: {
    Vacancy,
    Resume,
  },
  async created() {
    await this.initData();
    await this.getCartData();
  },
  methods: {
    async initData() {
      this.cardId = this.$route.params.id;
      console.log(this.cardId);

      this.cardType = this.$route.query.type;
      console.log(this.cardType);

      this.currentUserId = this.$store.getters['auth/currentUser']?.id;
      this.creatorId = this.$route.query.userId;
      console.log(this.creatorId);

    },
    async getCartData() {
      if (this.cardType === 'vacancy') {
        this.card = await this.$store.dispatch('vacancy/fetchOneVacancy', this.cardId);
      } else {
        this.card = await this.$store.dispatch('resume/fetchUserResume', this.creatorId);
      }
      console.log(this.card);
    }
  }
};
</script>

<style></style>