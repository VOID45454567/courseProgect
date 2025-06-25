<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ type === 'vacances' ? 'Вакансии' : 'Резюме' }}</h1>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="mb-4">
          <label for="search" class="block text-sm font-medium text-gray-700 mb-1">Поиск</label>
          <input id="search" v-model="searchQuery" type="text"
            :placeholder="type === 'vacances' ? 'Название вакансии' : 'Желаемая должность'"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
        </div>

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
        <AppVacancyItem v-if="type === 'vacances'" v-for="(item, index) in filteredVacancies" :key="index"
          :vacancy="item" @click="goToVacancy(item.id)" />
        <AppResumeItem v-else v-for="(item, index) in filteredResumes" :resume="item" />
      </div>

    </div>
  </div>
</template>

<script>
import AppResumeItem from "@/components/AppResumeItem.vue";
import AppVacancyItem from '@/components/AppVacancyItem.vue';

export default {
  data() {
    return {
      allVacancies: [],
      allResumes: [],
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
    this.getCards(this.type);
  },
  computed: {
    type() {
      return this.$route.query.type;
    },
    filteredVacancies() {
      return this.allVacancies.filter(item => {
        // Поиск по названию вакансии
        const searchMatch = !this.searchQuery ||
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase());

        // Фильтр по локации
        const locationMatch = !this.selectedLocation ||
          (this.selectedLocation === 'remote' && item.is_remote) ||
          item.location === this.selectedLocation;

        // Фильтр по опыту
        const experienceMatch = !this.selectedExperience ||
          (this.selectedExperience === 'no-exp' && !item.experience) ||
          (this.selectedExperience === '1-3' && item.experience >= 1 && item.experience <= 3) ||
          (this.selectedExperience === '3+' && item.experience >= 3);

        return searchMatch && locationMatch && experienceMatch;
      });
    },
    filteredResumes() {
      return this.allResumes.filter(item => {
        const searchMatch = !this.searchQuery ||
          item.preferedvacancy.toLowerCase().includes(this.searchQuery.toLowerCase());

        const locationMatch = !this.selectedLocation ||
          (this.selectedLocation === 'remote' && item.is_remote) ||
          item.city === this.selectedLocation;

        const experienceMatch = !this.selectedExperience ||
          (this.selectedExperience === 'no-exp' && !item.experience) ||
          (this.selectedExperience === '1-3' && parseInt(item.experience) >= 1 && parseInt(item.experience) <= 3) ||
          (this.selectedExperience === '3+' && parseInt(item.experience) >= 3);

        return searchMatch && locationMatch && experienceMatch;
      });
    }
  },
  watch: {
    type(newVal) {
      this.getCards(newVal);
    }
  },
  methods: {
    async getCards(type) {
      if (type === 'vacances') {
        this.allVacancies = await this.$store.dispatch('vacancy/fetchAllVacances');
      } else {
        this.allResumes = await this.$store.dispatch('resume/fetchAllResumes');
      }
    },
    goToVacancy(id) {
      this.$router.push({
        path: `/single/${id}`,
        query: {
          type: 'vacancy'
        }
      });
    }
  }
};
</script>