<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Личный кабинет</h1>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-1/3 flex flex-col items-center">
            <div class="relative mb-4">
              <div
                class="w-40 h-40 rounded-full border-4 border-primary-200 flex items-center justify-center hover:bg-primary-200 transition-colors duration-300"
                :class="avatarColor">
                <span class="text-5xl font-bold text-primary-600">
                  {{ avatarInitials }}
                </span>
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/3">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                <input type="text" v-model="currentUser.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                <input type="text" v-model="currentUser.surname"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Отчество</label>
                <input type="text" v-model="currentUser.midname"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
              </div>

              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" v-model="currentUser.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input type="tel" v-model="currentUser.phone_number"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Город</label>
                <select v-model="currentUser.city"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                  <option value="moscow">Москва</option>
                  <option value="spb">Санкт-Петербург</option>
                  <option value="remote" v-if="currentUser.role === 'searcher'">
                    Удалённо
                  </option>
                  <option value="other">Другой</option>
                </select>
              </div>

              <div v-if="currentUser.role === 'searcher'">
                <label class="block text-sm font-medium text-gray-700 mb-1">Опыт работы (лет)</label>
                <input type="number" v-model="currentUser.experience" min="0" max="50"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 mb-8" v-if="currentUser.role === 'searcher'">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Компании, в которых работал</h2>
        <div v-for="(company, index) in currentUser.companies" :key="index" class="mb-4 last:mb-0">
          <div class="flex items-center gap-3">
            <input type="text" v-model="currentUser.companies[index]"
              class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            <button @click="removeCompany(index)" class="text-red-500 hover:text-red-700 transition-colors p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <button @click="addCompany"
          class="mt-3 px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
          Добавить компанию
        </button>
      </div>

      <div class="bg-white rounded-xl shadow-sm p-6 mb-8" v-if="currentUser.role === 'searcher'">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Навыки</h2>
        <div class="flex flex-wrap gap-2 mb-4">
          <span v-for="(skill, index) in currentUser.skills" :key="index"
            class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
            {{ skill }}
            <button @click="removeSkill(index)" class="ml-1 text-primary-600 hover:text-primary-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
        <div class="flex">
          <input type="text" v-model="newSkill" placeholder="Добавить навык" @keyup.enter="addSkill"
            class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary-500 focus:border-primary-500" />
          <button @click="addSkill"
            class="px-4 py-2 bg-primary-500 text-white font-medium rounded-r-lg hover:bg-primary-600 transition-colors">
            Добавить
          </button>
        </div>
      </div>
      <MyVacances v-if="currentUser.role === 'employer'"></MyVacances>
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8" v-if="currentUser.role === 'searcher'">
        <h2 class="text-xl font-bold text-gray-800 mb-4">Мое резюме</h2>

        <div class="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg"
          :class="userResume !== null ? 'border-primary-100 bg-primary-50' : 'border-gray-200 bg-gray-50'">

          <div v-if="userResume !== null" class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-primary-500 mb-3" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-800 mb-2">Ваше резюме готово!</h3>
            <p class="text-gray-600 mb-4">Вы можете просмотреть или обновить его в любое время</p>
            <AppButton :text="'Просмотреть резюме'" :class="'w-full active'" @click="goToMyResume(currentUser.id)" />
          </div>

          <div v-else class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-800 mb-2">Резюме еще не создано</h3>
            <p class="text-gray-600 mb-4">{{ message || 'Создайте резюме, чтобы начать поиск работы' }}</p>
            <AppButton :text="'Создать резюме + '" :class="'w-full active'" @click="$router.push('/create')"
              icon="plus" />
          </div>
        </div>
      </div>
      <div class="flex  justify-between gap-10">
        <AppButton @click="saveProfile" :text="isLoading ? 'Изменение' : 'Сохранить изменения'" class="w-4/12 active">
        </AppButton>
        <AppButton @click="handleLogout" class="w-3/12 active-red" text="Выйти с аккаунта"></AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import MyVacances from "@/components/Profile/myVacances/MyVacances.vue";
import Resume from "@/components/SingleCardPage/Resume.vue";
import router from "@/router";

export default {
  components: {
    MyVacances,
    AppButton,
    Resume,
  },
  data() {
    return {
      newSkill: "",
      avatarFile: null,
      isLoading: false,
      userResume: null,
      message: '',
      avatarColors: [
        'bg-blue-100',
        'bg-green-100',
        'bg-purple-100',
        'bg-yellow-100',
        'bg-pink-100',
        'bg-indigo-100',
        'bg-teal-100'
      ]
    };
  },
  computed: {
    currentUser() {
      const user = this.$store.getters["auth/currentUser"];
      if (user && !user.companies) {
        user.companies = [];
      }
      if (user && !user.skills) {
        user.skills = [];
      }
      return user;
    },
    avatarInitials() {
      if (!this.currentUser) return '';

      const firstNameLetter = this.currentUser.name ? this.currentUser.name.charAt(0).toUpperCase() : '';
      const lastNameLetter = this.currentUser.surname ? this.currentUser.surname.charAt(0).toUpperCase() : '';

      return `${firstNameLetter}${lastNameLetter}`;
    },
    avatarColor() {
      if (!this.currentUser?.name) return this.avatarColors[0];

      const nameHash = this.currentUser.name.split('').reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);

      return this.avatarColors[nameHash % this.avatarColors.length];
    }
  },
  async created() {
    await this.getUserResume(this.currentUser.id);
    if (this.currentUser && !this.currentUser.companies) {
      this.$set(this.currentUser, 'companies', []);
    }
    if (this.currentUser && !this.currentUser.skills) {
      this.$set(this.currentUser, 'skills', []);
    }
  },
  methods: {
    async handleLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    goToMyResume(resumeId) {
      this.$router.push({
        path: `/single/${resumeId}`,
        query: {
          type: "resume",
          userId: this.currentUser.id
        }
      })
    },
    async getUserResume(id) {
      if (this.currentUser.role === "searcher") {
        try {
          const resume = await this.$store.dispatch("resume/fetchUserResume", id);

          if (!resume.error) {
            if (resume.resume) {
              this.userResume = resume.resume;
            }
            return this.message = 'Вы еще не создали свое резюме'
          } else {
            this.message = resume.error.response?.data?.message || 'Ошибка загрузки резюме';
          }
        } catch (error) {
          console.error("Ошибка при получении резюме:", error);
          this.message = 'Ошибка загрузки резюме';
        }
      }
    },
    addCompany() {
      if (!this.currentUser.companies) {
        this.$set(this.currentUser, 'companies', []);
      }
      this.currentUser.companies.push("");
    },
    removeCompany(index) {
      if (this.currentUser.companies && this.currentUser.companies.length > index) {
        this.currentUser.companies.splice(index, 1);
      }
    },
    addSkill() {
      if (!this.newSkill.trim()) return;

      if (!this.currentUser.skills) {
        this.$set(this.currentUser, 'skills', []);
      }

      if (!this.currentUser.skills.includes(this.newSkill.trim())) {
        this.currentUser.skills.push(this.newSkill.trim());
        this.newSkill = "";
      }
    },
    removeSkill(index) {
      if (this.currentUser.skills && this.currentUser.skills.length > index) {
        this.currentUser.skills.splice(index, 1);
      }
    },
    async saveProfile() {
      try {
        this.isLoading = true;
        const formData = new FormData();

        Object.keys(this.currentUser).forEach((key) => {
          if (key !== "avatar" && key !== "companies" && key !== "skills") {
            formData.append(key, this.currentUser[key]);
          }
        });

        if (this.avatarFile) {
          formData.append("avatar", this.avatarFile);
        }
        formData.append("companies", JSON.stringify(this.currentUser.companies || []));
        formData.append("skills", JSON.stringify(this.currentUser.skills || []));

        const data = {
          id: this.currentUser.id,
          dataToUpdate: this.currentUser,
        };

        await this.$store.dispatch("user/updateUser", data);
        this.isLoading = false;
        router.push('/')
      } catch (error) {
        console.error("Ошибка при сохранении профиля:", error);
        this.isLoading = false;
      }
    },
  },
};
</script>