<template>
  <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Мои вакансии</h2>

    <div v-if="loading" class="flex justify-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>

    <div v-else class="space-y-4">
      <template v-if="vacancies.length > 0">
        <AppVacancyItem @click="goToSingle(vacancy.id)" :type='vacancy' v-for="(vacancy, index) in vacancies"
          :key="vacancy.id || index" :vacancy="vacancy" />
      </template>
      <div v-else class="text-center py-8 text-gray-500">
        У вас пока нет созданных вакансий
      </div>

      <button
        class="w-full mt-4 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary-500 hover:text-primary-500 transition-colors"
        @click="$router.push('/create')">
        <div class="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Добавить вакансию</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import AppVacancyItem from "@/components/AppVacancyItem.vue";

export default {
  data() {
    return {
      loading: true,
      vacancies: [],
    };
  },
  components: {
    AppVacancyItem,
  },
  async created() {
    await this.loadCurrentUser();
    await this.fetchVacancies();
  },
  methods: {
    async loadCurrentUser() {
      try {
        this.currentUser = this.$store.getters["auth/currentUser"];

        if (!this.currentUser) {
          await this.$store.dispatch("auth/fetchCurrentUser");
          this.currentUser = this.$store.getters["auth/currentUser"];
        }
      } catch (error) {
        console.error("Ошибка при загрузке пользователя:", error);
      }
    },
    async fetchVacancies() {
      this.loading = true;
      try {
        if (!this.currentUser || !this.currentUser.id) {
          throw new Error("User ID is not available");
        }

        const response = await this.$store.dispatch(
          "vacancy/fetchUserVacancies",
          this.currentUser.id
        );
        this.vacancies = response;
      } catch (error) {
        console.error("Ошибка при загрузке вакансий:", error);
        this.error = "Не удалось загрузить вакансии";
      } finally {
        this.loading = false;
      }
    },
    goToSingle(id) {
      this.$router.push({
        path: '/single/' + id,
        query: {
          type: 'vacancy'
        }
      })
    }
  },
};
</script>
