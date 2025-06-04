<template>
  <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Мои вакансии</h2>

    <div class="space-y-4">
      <!-- <VacancyItem></VacancyItem> -->
      <button
        class="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors"
        @click="this.$router.push('/create')"
      >
        <div class="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Добавить вакансию</span>
        </div>
      </button>
    </div>
  </div>
</template>
<script>
import VacancyItem from "./vacancyItem.vue";

export default {
  props: {
    userID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      vacances: [],
    };
  },
  components: {
    VacancyItem,
  },
  async created() {
    this.vacances = await this.getMyVacances;
  },
  computed: {
    async getMyVacances() {
      console.log(this.userID);
      await this.$store.dispatch("vacancy/fetchUserVacances", this.userID);
    },
  },
};
</script>
<style></style>
