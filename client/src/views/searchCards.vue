<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Резюме</h1>
      </div>

      <!-- Фильтры -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label for="location" class="block text-sm font-medium text-gray-700 mb-1"
              >Локация</label
            >
            <select
              id="location"
              v-model="selectedLocation"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Все</option>
              <option value="remote">Удалённо</option>
              <option value="moscow">Москва</option>
              <option value="spb">Санкт-Петербург</option>
            </select>
          </div>
          <div>
            <label for="experience" class="block text-sm font-medium text-gray-700 mb-1"
              >Опыт</label
            >
            <select
              id="experience"
              v-model="selectedExperience"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Любой</option>
              <option value="no-exp">Без опыта</option>
              <option value="1-3">1-3 года</option>
              <option value="3+">3+ года</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Список карточек в колонку -->
      <div class="flex flex-col gap-6">
        <!-- Карточка резюме 1 -->
        <div
          class="w-full border-2 border-gray-200 mx-auto p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <div class="mb-4">
            <h1
              class="text-2xl font-bold text-gray-800 hover:text-primary-500 transition-colors cursor-pointer"
            >
              Vue.js Developer
            </h1>
            <p class="my-2 text-2xl font-semibold text-primary-600">100 000 ₽/мес</p>
          </div>

          <div class="flex flex-wrap gap-2 mb-5">
            <span
              class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
              >Опыт 3 года</span
            >
            <span
              class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
              >Vue 3</span
            >
            <span
              class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
              >TypeScript</span
            >
          </div>

          <div class="mb-5">
            <p class="text-gray-600">
              Frontend разработчик с опытом работы с Vue 3, Composition API, Pinia.
              Участвовал в разработке 5+ коммерческих проектов.
            </p>
          </div>

          <div class="flex items-center gap-3 mb-6">
            <div>
              <p class="font-medium text-gray-800">Иван Иванов</p>
              <div class="flex items-center text-gray-500 text-sm">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Москва, готов к переезду</span>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="flex items-center justify-center px-6 h-12 rounded-full border-2 border-primary-500 bg-primary-500 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-primary-500 shadow-md hover:shadow-lg active:scale-95"
            >
              Пригласить
            </button>
            <span class="text-gray-400 text-sm">5 дней назад</span>
          </div>
        </div>

        <!-- Карточка резюме 2 -->
        <div
          class="w-full border-2 border-gray-200 mx-auto p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <div class="mb-4">
            <h1
              class="text-2xl font-bold text-gray-800 hover:text-primary-500 transition-colors cursor-pointer"
            >
              React Developer
            </h1>
            <p class="my-2 text-2xl font-semibold text-primary-600">120 000 ₽/мес</p>
          </div>

          <div class="flex flex-wrap gap-2 mb-5">
            <span
              class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
              >Опыт 4 года</span
            >
            <span
              class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
              >React</span
            >
            <span
              class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
              >Redux</span
            >
          </div>

          <div class="mb-5">
            <p class="text-gray-600">
              Senior React разработчик с опытом создания сложных SPA-приложений. Знание
              TypeScript, GraphQL, Next.js.
            </p>
          </div>

          <div class="flex items-center gap-3 mb-6">
            <div>
              <p class="font-medium text-gray-800">Петр Петров</p>
              <div class="flex items-center text-gray-500 text-sm">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Санкт-Петербург, удалённо</span>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button
              class="flex items-center justify-center px-6 h-12 rounded-full border-2 border-primary-500 bg-primary-500 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-primary-500 shadow-md hover:shadow-lg active:scale-95"
            >
              Пригласить
            </button>
            <span class="text-gray-400 text-sm">2 дня назад</span>
          </div>
        </div>
        <AppResumeItem></AppResumeItem>
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
export default {
  data() {
    return {
      searchQuery: "",
      selectedLocation: "",
      selectedExperience: "",
      currentPage: 1,
    };
  },
  components: {
    AppResumeItem,
  },
};
</script>

<style>
/* Дополнительные стили при необходимости */
</style>
