<template>
  <div class="container mx-auto px-4 py-8 mb-30">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Мои отклики</h1>

    <div v-if="loading" class="flex justify-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
    </div>

    <div v-else>
      <!-- Для соискателей -->
      <div v-if="currentUser.role === 'searcher'" class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-700">Отклики на ваше резюме</h2>

        <div v-if="!hasResume" class="text-gray-500 text-center py-8">
          Для начала <span @click="goToCreateCards('resume')"
            class="text-primary-500 cursor-pointer hover:underline">создайте</span> резюме
        </div>

        <div v-else-if="cards.length === 0" class="text-gray-500 text-center py-8">
          Пока нет откликов на ваше резюме
        </div>

        <div v-else class="space-y-4">
          <div v-for="(response, index) in cards" :key="index"
            class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium text-primary-600">{{ response.name }} {{ response.surname }}</h3>
                <span v-if="response.email" class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  {{ response.email }}
                </span>
                <span v-if="response.phone_number" class="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd" />
                  </svg>
                  {{ response.phone_number || 'Телефон не указан' }}
                </span>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-sm text-gray-500">{{ formatDate(response.created_at) }}</span>
                <button @click="openResume(response.vacancy.id)"
                  class="mt-2 text-primary-600 hover:text-primary-800 text-sm font-medium">
                  Посмотреть вакансию
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Для работодателей -->
      <div v-else-if="currentUser.role === 'employer'">
        <h2 class="text-xl font-semibold mb-4 text-gray-700">Отклики на ваши вакансии</h2>

        <div v-if="!hasVacancies" class="text-gray-500 text-center py-8">
          Для начала <span @click="goToCreateCards('vacancy')"
            class="text-primary-500 cursor-pointer hover:underline">создайте</span> вакансию
        </div>

        <div v-else-if="cards.length === 0" class="text-gray-500 text-center py-8">
          Пока нет откликов на ваши вакансии
        </div>

        <div v-else class="space-y-4">
          <div v-for="vacancy in cards" :key="vacancy.id" class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-medium text-primary-600 mb-3">{{ vacancy.name }}</h3>

            <div v-for="responder in vacancy.responses" :key="responder.id" class="mb-4 last:mb-0">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-gray-800">
                    <span class="font-bold text-primary-500">{{ responder.name }} {{ responder.surname }}</span>
                    откликнулся на вашу вакансию
                  </p>
                  <span class="text-sm text-gray-500">{{ formatDate(responder.created_at) }}</span>
                </div>
                <button @click="openResume(vacancy.id, responder.id)"
                  class="relative bg-primary-500 hover:bg-primary-600 text-white h-10 w-10 hover:w-60 rounded-full hover:cursor-pointer transition-all duration-300 overflow-hidden group">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:left-4 group-hover:translate-x-0 transition-all duration-300"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span
                    class="absolute opacity-0 group-hover:opacity-100 left-10 top-1/2 transform -translate-y-1/2 whitespace-nowrap transition-opacity duration-200">
                    Посмотреть резюме
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
      loading: false,
      hasResume: false,
      hasVacancies: false
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser'] || {};
    }
  },
  async created() {
    await this.getMyResponses();
    this.checkUserAssets();
  },
  methods: {
    async getMyResponses() {
      this.loading = true;
      try {
        const responses = await this.$store.dispatch('user/getMyResponses');
        this.cards = responses || [];
      } catch (error) {
        console.error('Ошибка при загрузке откликов:', error);
      } finally {
        this.loading = false;
      }
    },

    async checkUserAssets() {
      if (this.currentUser.role === 'searcher') {
        const resume = await this.$store.dispatch('resume/fetchUserResume', this.currentUser.id);
        this.hasResume = !!resume && !resume.error;
      } else if (this.currentUser.role === 'employer') {
        const vacancies = await this.$store.dispatch('vacancy/fetchUserVacancies', this.currentUser.id);
        this.hasVacancies = vacancies && vacancies.length > 0;
      }
    },

    goToCreateCards(type) {
      this.$router.push('/create');
    },

    openResume(vacancyId, creatorId) {
      this.$router.push({
        path: '/single/' + vacancyId,
        query: {
          type: 'resume',
          userId: creatorId
        }
      });
    },

    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>