<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-8 no-print">
        <button @click="$router.back()"
          class="flex items-center text-primary-600 hover:text-primary-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd" />
          </svg>
          Назад
        </button>

        <h1 class="text-3xl font-bold text-gray-900">Просмотр резюме</h1>
        <button @click="exportToPDF"
          class="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          Экспорт в PDF
        </button>
      </div>

      <div class="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8 border border-gray-200">
        <div class="space-y-8">
          <div class="border-b pb-6">
            <h2 class="text-2xl font-bold mb-3 text-primary-500">{{ data.resume.preferedvacancy || 'Не указана' }}</h2>
            <div class="flex flex-wrap items-center gap-4">
              <h2 class="text-2xl font-bold">Требуемая зарплата:
                {{ data.resume.preferedsalary || '0' }} {{ data.resume.preferedcurrency || 'USD' }}</h2>
              <div v-if="data.user.city" class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                {{ data.user.city }}
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="bg-gray-100 p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Основная информация</h3>
                <div class="space-y-4">
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Опыт работы (лет)</p>
                    <p class="font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clip-rule="evenodd" />
                        <path
                          d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      {{ data.user.experience || 'Не указан' }}
                    </p>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500 mb-1">Контактная информация</p>
                    <p class="font-medium text-gray-900 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {{ data.user.email || 'Не указан' }}
                    </p>
                    <p v-if="data.user.phone_number" class="font-medium text-gray-900 flex items-center mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                          d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                          clip-rule="evenodd" />
                      </svg>
                      {{ data.user.phone_number }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Ключевые навыки</h3>
                <div v-if="data.user.skills?.length > 0" class="flex flex-wrap gap-3">
                  <span v-for="(skill, index) in data.user.skills" :key="index"
                    class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ skill.trim() }}
                  </span>
                </div>
                <p v-else class="text-gray-500">Навыки не указаны</p>
              </div>
            </div>

            <div class="space-y-6">
              <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Компании в которых работал</h3>
                <div v-if="data.user.companies?.length > 0" class="flex flex-wrap gap-3">
                  <span v-for="(company, index) in data.user.companies" :key="index"
                    class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ company.trim() }}
                  </span>
                </div>
                <p v-else class="text-gray-500">Компании не указанны</p>
              </div>
            </div>
          </div>

          <div v-if="data.resume.about" class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">О себе</h3>
            <div class="prose max-w-none text-gray-700 space-y-4">
              <p class="whitespace-pre-line">{{ data.resume.about }}</p>
            </div>
          </div>

          <div class="bg-gray-100 p-6 rounded-lg no-print">
            <h3 class="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">Создатель резюме</h3>
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <div
                  class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                  {{ getUserInitials(data.user) }}
                </div>
              </div>
              <div>
                <h4 class="font-medium text-gray-900">{{ getUserFullName(data.user) }}</h4>
                <p class="text-sm text-gray-500 mt-1">
                  <span v-if="data.user.email" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {{ data.user.email }}
                  </span>
                  <span v-if="data.user.phone_number" class="flex items-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd" />
                    </svg>
                    {{ data.user.phone_number }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AppButton v-if="showActionButton" :text="actionButton.text" :class="'w-full md:w-4/12 active no-print'"
        @click="actionButton.action" :loading="actionButton.loading" />
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton.vue';
export default {
  components: {
    AppButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        resume: {},
        user: {}
      })
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters['auth/currentUser'];
    },
    hasResponded() {
      return this.data.resume.responces?.includes(this.currentUser?.id) || false;
    },
    isOwner() {
      return this.currentUser?.id === this.data.user?.id;
    },
    showActionButton() {
      return true;
    },
    actionButton() {
      if (this.isOwner) {
        return {
          text: 'Редактировать',
          action: this.editResume
        };
      } else if (this.hasResponded) {
        return {
          text: 'Отменить отклик',
          action: this.removeResponse
        };
      } else {
        return {
          text: 'Откликнуться',
          action: this.addResponse
        };
      }
    }
  },
  methods: {
    async exportToPDF() {
      window.print()
    },
    getUserInitials(user) {
      if (!user.name && !user.surname) return 'U';
      return `${user.name ? user.name.charAt(0).toUpperCase() : ''}${user.surname ? user.surname.charAt(0).toUpperCase() : ''}`;
    },
    getUserFullName(user) {
      const parts = [];
      if (user.surname) parts.push(user.surname);
      if (user.name) parts.push(user.name);
      return parts.join(' ') || 'Неизвестный пользователь';
    },
    async addResponse() {
      const resumeId = this.data.resume.id;
      const userId = this.currentUser.id;
      try {
        await this.$store.dispatch('resume/addResponce', resumeId);
        if (!this.data.resume.responces) {
          this.data.resume.responces = [];
        }
        this.data.resume.responces.push(userId);
      } catch (error) {
        console.error('Ошибка при добавлении отклика:', error);
      }
    },
    async removeResponse() {
      const resumeId = this.data.resume.id;
      const userId = this.currentUser.id;
      try {
        await this.$store.dispatch('resume/removeResponce', { resumeId, userId });
        this.data.resume.responces = this.data.resume.responces?.filter(id => id !== userId) || [];
      } catch (error) {
        console.error('Ошибка при удалении отклика:', error);
      }
    },
    editResume() {
      this.$router.push({
        path: '/update/card/' + this.data.resume.id,
        query: {
          type: 'resume'
        }
      });
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

@media print {
  body * {
    visibility: hidden;
  }

  .bg-white.rounded-xl,
  .bg-white.rounded-xl * {
    visibility: visible;
  }

  .bg-white.rounded-xl {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    box-shadow: none;
    border: none;
  }
}
</style>