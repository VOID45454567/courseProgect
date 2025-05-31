<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Заголовок и кнопка назад -->
      <div class="flex justify-between items-center mb-8">
        <button
          @click="$router.back()"
          class="flex items-center text-primary-500 hover:text-primary-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Назад
        </button>
        <h1 class="text-3xl font-bold text-gray-900">Детали вакансии</h1>
        <div class="w-20"></div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="space-y-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ vacancy.name }}</h2>
            <div class="flex items-center">
              <span class="text-lg font-semibold text-gray-800">
                {{ vacancy.salary }} {{ vacancy.currency }}
              </span>
              <span class="mx-2 text-gray-400">•</span>
              <span class="text-gray-600">{{ vacancy.city }}</span>
            </div>
          </div>

          <div class="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <div class="flex-shrink-0">
              <div
                class="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center"
              >
                <span class="text-gray-500 text-xl font-bold">{{
                  vacancy.company_name.charAt(0)
                }}</span>
              </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">{{ vacancy.company_name }}</h3>
              <p class="text-sm text-gray-500">{{ vacancy.company_description }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-3 text-gray-800">
                Основная информация
              </h3>
              <div class="space-y-3">
                <div>
                  <p class="text-sm text-gray-500">Опыт работы</p>
                  <p class="font-medium">{{ getExperienceLabel(vacancy.experience) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Формат работы</p>
                  <p class="font-medium">{{ getWorkFormatLabel(vacancy.work_format) }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-500">Дата публикации</p>
                  <p class="font-medium">{{ formatDate(vacancy.created_at) }}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-3 text-gray-800">Требуемые навыки</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="(skill, index) in vacancy.required_skills.split(',')"
                  :key="index"
                  class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ skill.trim() }}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Описание вакансии</h3>
            <div class="prose max-w-none text-gray-700">
              <p>{{ vacancy.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <AppButton :text="'Откликнуться'" :class="'w-4/12 active'"></AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
  components: {
    AppButton,
  },
  data() {
    return {
      vacancy: {
        name: "Frontend разработчик (Vue.js)",
        salary: "150000",
        currency: "RUB",
        experience: "3-6",
        work_format: "hybrid",
        city: "Москва",
        company_name: "Tech Solutions Inc.",
        company_description: "Разработка инновационных IT-решений для бизнеса",
        required_skills: "Vue.js, JavaScript, HTML, CSS, Git",
        description:
          "Мы ищем опытного Frontend разработчика для работы над современными веб-приложениями. В ваши обязанности будет входить разработка пользовательских интерфейсов, оптимизация производительности и участие в проектировании архитектуры приложений.",
        created_at: "2023-05-15",
      },
    };
  },
  methods: {
    getExperienceLabel(experience) {
      const labels = {
        "no-exp": "Без опыта",
        "1-3": "1-3 года",
        "3-6": "3-6 лет",
        "6+": "Более 6 лет",
      };
      return labels[experience] || experience;
    },
    getWorkFormatLabel(format) {
      const labels = {
        office: "Офис",
        remote: "Удалённо",
        hybrid: "Гибридный",
      };
      return labels[format] || format;
    },
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("ru-RU", options);
    },
  },
};
</script>

<style scoped>
.prose p {
  margin-bottom: 1em;
  line-height: 1.6;
}
</style>
