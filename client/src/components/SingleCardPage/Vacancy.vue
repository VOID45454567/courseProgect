<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8">
        <button @click="$router.back()"
          class="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd" />
          </svg>
          Назад
        </button>
        <h1 class="text-3xl font-bold text-gray-900">Детали вакансии</h1>
        <div class="w-20"></div>
      </div>
      <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 border border-gray-200">
        <div class="space-y-8">
          <div class="border-b pb-6">
            <h2 class="text-2xl font-bold mb-3 text-primary-500">{{ vacancy.name }}</h2>
            <div class="flex flex-wrap items-center gap-4">
              <div class="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                <span class="text-lg font-semibold text-blue-700">
                  {{ vacancy.salary }} {{ vacancy.currency }} /мес
                </span>
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                {{ vacancy.city }}
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="bg-gray-100 p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                  Основная информация
                </h3>
                <div class="space-y-4">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Опыт работы</p>
                    <p class="font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd" />
                        <path
                          d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {{ vacancy.experience }}
                    </p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Формат работы</p>
                    <p class="font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                          clip-rule="evenodd" />
                      </svg>
                      <span v-for="(format, index) in vacancy.work_format" :key="index">
                        {{ getWorkFormatLabel(format) }}<span v-if="index < vacancy.work_format.length - 1">, </span>
                      </span>
                    </p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Дата публикации</p>
                    <p class="font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd" />
                      </svg>
                      {{ vacancy.created_at }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                  Требуемые навыки
                </h3>
                <div class="flex flex-wrap gap-3">
                  <span v-for="(skill, index) in vacancy.required_skills" :key="index"
                    class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
              Описание вакансии
            </h3>
            <div class="prose max-w-none text-gray-700 space-y-4">
              <p class="whitespace-pre-line">{{ vacancy.description }}</p>
            </div>
          </div>

          <div class="bg-gray-100 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
              Создатель вакансии
            </h3>
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                  {{ user.name ? user.name.charAt(0).toUpperCase() : 'U' }}
                </div>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ user.name || 'Неизвестный пользователь' }}</h4>
                <p class="text-sm text-gray-500 mt-1">
                  <span v-if="user.email" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {{ user.email }}
                  </span>
                  <span v-if="user.phone" class="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ user.phone || 'Телефон не указан' }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppButton v-if="showActionButton" :text="actionButton.text" :class="'w-full md:w-4/12 active'"
        @click="actionButton.action" />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        vacancy: {
          id: null,
          name: "",
          salary: 0,
          currency: "RUB",
          experience: "",
          work_format: [],
          city: "",
          description: "",
          required_skills: [],
          created_at: "",
          responses: []
        },
        user: {
          id: null,
          name: "",
          email: "",
          phone: ""
        }
      })
    }
  },
  data() {
    return {
      localVacancy: { ...this.data.vacancy },
      localUser: { ...this.data.user },
      isLoading: false
    };
  },
  computed: {
    vacancy() {
      return this.localVacancy;
    },
    user() {
      return this.localUser;
    },
    currentUser() {
      return this.$store.getters['auth/currentUser'] || {};
    },
    isOwner() {
      return this.currentUser?.id === this.user?.id;
    },
    hasResponded() {
      return this.vacancy.responses?.includes(this.currentUser?.id) || false;
    },
    showActionButton() {
      return this.currentUser?.id && (this.isOwner || this.currentUser?.role === 'searcher');
    },
    actionButton() {
      if (this.isOwner) {
        return {
          text: 'Редактировать вакансию',
          action: this.editVacancy
        };
      }
      else if (this.hasResponded) {
        return {
          text: 'Отменить отклик',
          action: this.removeResponse,
          loading: this.isLoading
        };
      } else {
        return {
          text: 'Откликнуться на вакансию',
          action: this.addResponse,
          loading: this.isLoading
        };
      }
    }
  },
  watch: {
    data: {
      handler(newData) {
        this.localVacancy = { ...newData.vacancy };
        this.localUser = { ...newData.user };
      },
      deep: true
    }
  },
  methods: {
    async addResponse() {

      this.isLoading = true;
      const vacancyId = this.vacancy.id;
      const searcherId = this.currentUser.id;

      try {
        await this.$store.dispatch('vacancy/addResponse', { searcherId, vacancyId });
        this.localVacancy.responses = [...(this.localVacancy.responses || []), searcherId];

      } catch (error) {
        console.error('Ошибка при добавлении отклика:', error);
        this.$notify({
          type: 'error',
          title: 'Ошибка',
          text: 'Не удалось отправить отклик'
        });
      } finally {
        this.isLoading = false;
      }
    },

    async removeResponse() {
      this.isLoading = true;
      const vacancyId = this.vacancy.id;
      const searcherId = this.currentUser.id;

      try {
        await this.$store.dispatch('vacancy/removeResponse', { searcherId, vacancyId });
        this.localVacancy.responses = this.localVacancy.responses.filter(id => id !== searcherId);

        this.$notify({
          type: 'success',
          title: 'Успешно',
          text: 'Отклик отменен'
        });
      } catch (error) {
        console.error('Ошибка при удалении отклика:', error);
      } finally {
        this.isLoading = false;
      }
    },

    editVacancy() {
      this.$router.push({
        path: '/update/card/' + this.vacancy.id,
        query: {
          type: 'vacancy'
        }
      });
    },
    getWorkFormatLabel(format) {
      const labels = {
        office: "Офис",
        remote: "Удалённо",
        hybrid: "Гибридный",
      };
      return labels[format] || format;
    }
  }
};
</script>

<style scoped>
.prose p {
  margin-bottom: 1em;
  line-height: 1.8;
}

.border-b {
  border-bottom: 1px solid #e5e7eb;
}

.whitespace-pre-line {
  white-space: pre-line;
}
</style>