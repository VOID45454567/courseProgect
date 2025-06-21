<template>
  <Vacancy v-if="getCartType === 'vacancy'" :data="card"></Vacancy>
  <Resume v-else :data="card"></Resume>
</template>
<script>
import Resume from "@/components/SingleCardPage/Resume.vue";
import Vacancy from "@/components/SingleCardPage/Vacancy.vue";
export default {
  data() {
    return {
      prevousRoute: null,
      card: {}
    }
  },
  components: {
    Vacancy,
    Resume,
  },
  computed: {
    getCartId() {
      return this.$route.params.id
    },
    getCartType() {
      return this.$route.query.type
    },
    getCurrentUserId() {
      return this.$store.getters['auth/currentUser'].id
    },
    getCreatorId() {
      return this.$route.query.userId
    }
  },
  async created() {
    this.getCartId;
    this.getCartType
    this.getUserId
    await this.getCartData(this.getCartType)
  },
  methods: {
    async getCartData(type) {
      if (type === 'vacancy') {
        const card = await this.$store.dispatch('vacancy/fetchOneVacancy', this.getCartId)
        console.log(card);

        return this.card = card
      } else {
        const card = await this.$store.dispatch('resume/fetchUserResume', this.getCreatorId)
        return this.card = card
      }
    }
  }

};
</script>
<style></style>
