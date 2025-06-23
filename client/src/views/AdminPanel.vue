<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div class="p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500">Пользователи</p>
                <p class="text-2xl font-semibold text-gray-900">{{ users.length }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div class="p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500">Вакансии</p>
                <p class="text-2xl font-semibold text-gray-900">{{ vacances.length }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div class="p-6">
            <div class="flex items-center">
              <div class="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-500">Резюме</p>
                <p class="text-2xl font-semibold text-gray-900">{{ resumes.length }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <ControlButton :active-tab="activeTab" @active-tab="setActiveTab" v-for="(item, index) in controlButtons"
          :key="index" :data="item">
        </ControlButton>

      </div>
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div v-if="activeTab === 'users'" class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">Список пользователей</h2>
            <div class="relative">
              <input type="text" placeholder="Поиск пользователей..."
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 w-64">
              <div class="absolute left-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 table-fixed">
              <thead class="bg-gray-50">
                <tr>
                  <th class="w-24 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID
                  </th>
                  <th class="w-64 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Имя
                  </th>
                  <th class="w-96 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email</th>
                  <th class="w-48 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Роль
                  </th>
                  <th class="w-48 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия</th>
                </tr>
              </thead>
              <UserItem v-for="user in paginatedUsers" :key="user.id" :user="user" />
            </table>
          </div>

          <div class="flex items-center justify-between mt-6">
            <div class="text-sm text-gray-500">
              Показано с {{ rangeStart }} по {{ rangeEnd }} из {{ users.length }} записей
            </div>
            <nav class="flex space-x-2">
              <button @click="prevPage" :disabled="currentPage === 1" :class="['px-3 py-1 rounded-md',
                currentPage === 1 ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'hover:bg-gray-100']">
                Назад
              </button>

              <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="['px-3 py-1 rounded-md',
                currentPage === page ? 'bg-primary-600 text-white' : 'hover:bg-gray-100']">
                {{ page }}
              </button>

              <button @click="nextPage" :disabled="currentPage === totalPages" :class="['px-3 py-1 rounded-md',
                currentPage === totalPages ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'hover:bg-gray-100']">
                Вперед
              </button>
            </nav>
          </div>
        </div>

        <div v-if="activeTab === 'vacances'" class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">Список вакансий</h2>
            <div class="flex space-x-4">
              <div class="relative">
                <input type="text" placeholder="Поиск вакансий..."
                  class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 w-64">
                <div class="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <VacancyItem v-for="(vacancy, index) in paginatedVacances" :key="index" :vacancy="vacancy"></VacancyItem>
          </div>

          <div class="flex items-center justify-between mt-6">
            <div class="text-sm text-gray-500">
              Показано с {{ rangeStart }} по {{ vacances.length }} из {{ vacances.length }} записей
            </div>
            <nav class="flex space-x-2">
              <button class="px-3 py-1 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed">
                Назад
              </button>
              <button class="px-3 py-1 rounded-md bg-primary-600 text-white">
                1
              </button>
              <button class="px-3 py-1 rounded-md hover:bg-gray-100">
                2
              </button>
              <button class="px-3 py-1 rounded-md hover:bg-gray-100">
                3
              </button>
              <button class="px-3 py-1 rounded-md hover:bg-gray-100">
                Вперед
              </button>
            </nav>
          </div>
        </div>
        <div v-if="activeTab === 'resumes'" class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">Список резюме</h2>
            <div class="flex space-x-4">
              <div class="relative">
                <input type="text" placeholder="Поиск резюме..."
                  class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 w-64">
                <div class="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <VacancyItem v-for="(resume, index) in paginatedResumes" :key="index" :vacancy="resume"></VacancyItem>
          </div>

          <div class="flex items-center justify-between mt-6">
            <div class="text-sm text-gray-500">
              Показано с {{ rangeStart }} по {{ vacances.length }} из {{ vacances.length }} записей
            </div>
            <nav class="flex space-x-2">
              <button class="px-3 py-1 rounded-md bg-gray-100 text-gray-500 cursor-not-allowed">
                Назад
              </button>
              <button class="px-3 py-1 rounded-md bg-primary-600 text-white">
                1
              </button>
              <button class="px-3 py-1 rounded-md hover:bg-gray-100">
                2
              </button>
              <button class="px-3 py-1 rounded-md hover:bg-gray-100">
                3
              </button>
              <button class="px-3 py-1 rounded-md hover:bg-gray-100">
                Вперед
              </button>
            </nav>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import ControlButton from '@/components/AdminPanel/controlButton.vue';
import ResumeItem from '@/components/AdminPanel/resumeItem.vue';
import UserItem from '@/components/AdminPanel/userItem.vue';
import VacancyItem from '@/components/AdminPanel/vacancyItem.vue';
import store from '@/store';

export default {
  components: {
    UserItem,
    VacancyItem,
    ResumeItem,
    ControlButton
  },
  data() {
    return {
      activeTab: 'users',
      users: [],
      currentPage: 1,
      perPage: 10,
      maxVisiblePages: 5,
      resumes: [],
      vacances: [],
      controlButtons: [
        {
          activeTab: "users",
          title: 'Управление пользователями',
          subtitle: 'Просмотр, редактирование и удаление пользователей'
        },
        {
          activeTab: "vacances",
          title: 'Управление вакансиями',
          subtitle: 'Модерация и управление вакансиями'
        },
        {
          activeTab: "resumes",
          title: 'Управление резюме',
          subtitle: 'Модерация и управление резюме'
        }
      ]
    }
  },
  async created() {
    this.getUsers()
    this.getResumes()
    this.getVacances()
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.perPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.users.slice(start, end);
    },
    paginatedVacances() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.vacances.slice(start, end);
    },
    rangeStart() {
      return (this.currentPage - 1) * this.perPage + 1;
    },
    rangeEnd() {
      const end = this.currentPage * this.perPage;
      return end > this.users.length ? this.users.length : end;
    },
    visiblePages() {
      const half = Math.floor(this.maxVisiblePages / 2);
      let start = this.currentPage - half;
      let end = this.currentPage + half;

      if (start < 1) {
        start = 1;
        end = Math.min(this.maxVisiblePages, this.totalPages);
      }

      if (end > this.totalPages) {
        end = this.totalPages;
        start = Math.max(1, end - this.maxVisiblePages + 1);
      }
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    }
  },
  methods: {
    async getUsers() {
      const users = await store.dispatch('user/getAllUsers')
      console.log(users);
      this.users = users
    },
    async getResumes() {
      const resumes = await store.dispatch('resume/fetchAllResumes')
      console.log(resumes);

      this.resumes = resumes
    },
    setActiveTab(value) {
      console.log(value);
      return this.activeTab = value
    },
    async getVacances() {
      const vacances = await store.dispatch('vacancy/fetchAllVacances')
      console.log(vacances);
      this.vacances = vacances
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }

}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>