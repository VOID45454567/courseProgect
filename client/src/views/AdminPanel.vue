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
      <div @click="activeTab = 'feedback'" :class="['p-6 mb-10 rounded-xl shadow-md border transition-all duration-200 flex items-center justify-center',
        activeTab === 'feedback' ? 'bg-primary-50 border-primary-300' : 'bg-white border-gray-200 hover:bg-gray-50']">

        <div class="text-center">
          <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900">Обратная связь</h3>
          <p class="mt-1 text-sm text-gray-500">Просмотр и управление отзывами пользователей</p>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div v-if="activeTab === 'users'" class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">Список пользователей</h2>
            <div class="relative">
              <input type="text" placeholder="Поиск пользователей..." v-model="searchText"
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
                  <th v-for="(item, index) in userColumns" :key="index"
                    class="w-24 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ item
                    }}
                  </th>
                </tr>
              </thead>
              <UserItem v-for="user in searchUsers" :key="user.id" :user="user" @user-deleted="refreshUsers" />
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
                <input type="text" placeholder="Поиск вакансий..." v-model="searchForVacances"
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
            <VacancyItem v-for="(vacancy, index) in searchVacances" :key="index" @vacancy-deleted="refreshVacances"
              :vacancy="vacancy"></VacancyItem>
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
                <input type="text" placeholder="Поиск резюме..." v-model="searchForResumes"
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
            <ResumeItem v-for="(resume, index) in searchResumes" :key="index" :resume="resume"
              @resume-deleted="refreshResumes">
            </ResumeItem>
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
        <div v-if="activeTab === 'feedback'" class="p-10 bg-gradient-to-b from-gray-50 to-gray-100 md:p-10">
          <div class="max-w-3xl mx-auto">
            <header class="mb-10 text-center">
              <h1 class="text-4xl font-bold text-[#4a3aff] mb-2">Обратная связь пользователей</h1>
              <p class="text-gray-600">Что говорят наши клиенты о нашем продукте</p>
            </header>

            <div class="space-y-6">
              <div v-for="feedback in feedbacks" :key="feedback.id"
                class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-l-4 border-[#4a3aff] relative">
                <div class="flex justify-between items-start mb-3">
                  <div>
                    <h2 class="text-xl font-semibold text-gray-800">{{ feedback.name }} {{ feedback.surname }}</h2>
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-sm text-gray-400">{{ formatDate(feedback.created_at) }}</span>
                    <button @click.stop="deleteFeedback(feedback.id)"
                      class="text-red-500 hover:text-red-700 transition-colors" title="Удалить отзыв">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p class="text-gray-700 leading-relaxed">{{ feedback.feedback_text }}</p>
              </div>
            </div>
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
      searchText: '',
      searchForVacances: '',
      searchForResumes: '',
      feedbacks: [],
      userColumns: ['ID', 'Имя', 'EMAIL', 'роль', 'Действия'],
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
    this.getFeedback()
  },
  computed: {
    searchUsers() {
      if (!this.searchText.trim()) {
        return this.paginatedUsers;
      }

      const searchTerm = this.searchText.toLowerCase();
      return this.users.filter(user =>
        user.name.toLowerCase().includes(searchTerm)
      );
    },
    searchVacances() {
      if (!this.searchForVacances.trim()) {
        return this.paginatedVacances;
      }

      const searchTerm = this.searchForVacances.toLowerCase();
      return this.vacances.filter(vacancy =>
        vacancy.name.toLowerCase().includes(searchTerm)
      );
    },
    searchResumes() {
      if (!this.searchForResumes.trim()) {
        return this.paginatedResumes;
      }

      const searchTerm = this.searchForResumes.toLowerCase();
      return this.resumes.filter(resume =>
        resume.preferedvacancy.toLowerCase().includes(searchTerm)
      );
    },
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
    paginatedResumes() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.resumes.slice(start, end);
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
    formatDate(isoDate) {
      const date = new Date(isoDate);
      const options = {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
      };
      return date.toLocaleString('ru-RU', options);
    },
    async deleteFeedback(id) {


      if (confirm('Вы уверены, что хотите удалить этот отзыв?')) {
        await this.$store.dispatch('feedback/deleteOne', id);
        this.feedbacks = this.feedbacks.filter(f => f.id !== id);
      }

    },
    async getUsers() {
      const users = await store.dispatch('user/getAllUsers')
      this.users = users
    },
    async refreshUsers() {
      this.users = await store.dispatch('user/getAllUsers')
    },
    async refreshVacances() {
      const vacances = await store.dispatch('vacancy/fetchAllVacances')
      this.vacances = vacances
    },
    async getFeedback() {
      const feedback = await store.dispatch('feedback/getAll')
      this.feedbacks = feedback
    },
    async getResumes() {
      const resumes = await store.dispatch('resume/fetchAllResumes')

      this.resumes = resumes
    },
    async refreshResumes() {
      this.resumes = await store.dispatch('resume/fetchAllResumes')

    },
    setActiveTab(value) {
      console.log(value);
      return this.activeTab = value
    },
    async getVacances() {
      const vacances = await store.dispatch('vacancy/fetchAllVacances')
      // console.log(vacances);
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