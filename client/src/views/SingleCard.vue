<template>
  <Vacancy v-if="getCartType === 'vacancy'" :from="previousRoute" :data="card"></Vacancy>
  <Resume v-else></Resume>
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.previousRoute = from
    })
  },
  mounted() {
    console.log('Предыдущий маршрут:', this.previousRoute.name)
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
    }
  },
  async created() {
    this.getCartId;
    this.getCartType
    await this.getCartData(this.getCartType)
  },
  methods: {
    async getCartData(type) {
      if (type === 'vacancy') {
        const card = await this.$store.dispatch('vacancy/fetchOneVacancy', this.getCartId)
        return this.card = card
      } else {
        const card = await this.$store.dispatch('resume/fetchUserResume', this.getCartId)
        return this.card = card


      }
    }
  }

};
</script>
<style></style>
