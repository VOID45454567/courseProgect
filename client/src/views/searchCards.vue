<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ type === 'vacances' ? 'Вакансии' : 'Резюме' }}</h1>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label for="location" class="block text-sm font-medium text-gray-700 mb-1">Локация</label>
            <select id="location" v-model="selectedLocation"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
              <option value="">Все</option>
              <option value="remote">Удалённо</option>
              <option value="moscow">Москва</option>
              <option value="spb">Санкт-Петербург</option>
            </select>
          </div>
          <div>
            <label for="experience" class="block text-sm font-medium text-gray-700 mb-1">Опыт</label>
            <select id="experience" v-model="selectedExperience"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
              <option value="">Любой</option>
              <option value="no-exp">Без опыта</option>
              <option value="1-3">1-3 года</option>
              <option value="3+">3+ года</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <AppVacancyItem v-if="type === 'vacances'" v-for="(item, index) in vacances" :key="index" :vacancy="item"
          @click="goToVacancy(item.id)">
        </AppVacancyItem>
        <AppResumeItem v-else v-for="(item, index) in resumes" :resume="item"></AppResumeItem>
      </div>
      <!-- <div class="mt-10 flex justify-center">
                <nav class="inline-flex rounded-md shadow-sm -space-x-px">
                    <button
                        class="px-3 py-2 rounded-l-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Назад
                    </button>
                    <button v-for="page in 5" :key="page" :class="{
                        'z-10 bg-primary-50 border-primary-500 text-primary-600':
                            currentPage === page,
                        'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                            currentPage !== page,
                    }" class="px-4 py-2 border text-sm font-medium">
                        {{ page }}
                    </button>
                    <button
                        class="px-3 py-2 rounded-r-lg border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Вперед
                    </button>
                </nav>
            </div> -->
    </div>
  </div>
</template>

<script>
import AppResumeItem from "@/components/AppResumeItem.vue";
import AppVacancyItem from '@/components/AppVacancyItem.vue';
export default {
  data() {
    return {
      vacances: {},
      resumes: {},
      searchQuery: "",
      selectedLocation: "",
      selectedExperience: "",
      currentPage: 1,
    };
  },
  components: {
    AppResumeItem,
    AppVacancyItem
  },
  created() {
    this.getCards(this.type)
    console.log(this.cards);

  },
  computed: {
    type() {
      return this.$route.query.type
    }
  },
  methods: {
    async getCards(type) {
      if (type === 'vacances') {
        const vacances = await this.$store.dispatch('vacancy/fetchAllVacances')
        return this.vacances = vacances
      } else {
        const resumes = await this.$store.dispatch('resume/fetchAllResumes')
        console.log(resumes);

        return this.resumes = resumes
      }
    },
    goToVacancy(id) {
      this.$router.push({
        path: `/single/${id}`,
        query: {
          type: 'vacancy'
        }
      })
    }
  }
};
</script>
