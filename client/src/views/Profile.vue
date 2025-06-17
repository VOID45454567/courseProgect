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
              <img class="w-40 h-40 rounded-full object-cover border-4 border-primary-100" />
              <label for="avatar-upload"
                class="absolute bottom-0 right-0 bg-primary-500 text-white rounded-full p-2 cursor-pointer hover:bg-primary-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </label>
              <input id="avatar-upload" type="file" accept="image/*" class="hidden" @change="handleAvatarUpload" />
            </div>
            <button @click="removeAvatar" class="text-red-500 text-sm font-medium hover:text-red-700 transition-colors">
              Удалить фото
            </button>
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

              <div class="md:col-span-2" v-if="currentUser.role === 'searcher'">
                <label class="block text-sm font-medium text-gray-700 mb-1">О себе</label>
                <textarea v-model="currentUser.about" rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
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
          <input type="text" v-model="newSkill" placeholder="Добавить навык"
            class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary-500 focus:border-primary-500" />
          <button @click="addSkill"
            class="px-4 py-2 bg-primary-500 text-white font-medium rounded-r-lg hover:bg-primary-600 transition-colors">
            Добавить
          </button>
        </div>
      </div>
      <MyVacances v-if="currentUser.role === 'employer'"></MyVacances>
      <div v-if="currentUser.role === 'searcher'">
        <h1 v-if="!getUserResume">Резюме нету</h1>
      </div>
      <div class="flex justify-end gap-10">
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

export default {
  components: {
    MyVacances,
    AppButton,
    Resume,
  },
  data() {
    return {
      newSkill: "",
      // currentUser: {
      // name: "",
      // surname: "",
      // midname: "",
      // email: "",
      // phone_number: "",
      // city: "",
      // about: "",
      // experience: 0,
      // companies: [],
      // skills: [],
      // avatar: null,
      // },
      avatarPreviewUrl: null,
      avatarFile: null,
      isLoading: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    // avatarUrl() {
    //   if (this.currentUser.avatar) {
    //     return `../uploads/avatars/${this.currentUser.avatar}`;
    //   }
    //   return this.currentUser.avatar || null;
    // },
  },
  async created() {
    await console.log(this.currentUser.id);

  },
  methods: {
    async handleLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    async getUserResume() {
      if (this.currentUser.role === "searcher") {
        const resume = await this.$store.dispatch(
          "resume/fetchUserResume",
          this.currentUser.id
        );
        if (resume) {
          return resume;
        } else {
          return null;
        }
      }
    },
    // async handleAvatarUpload(event) {
    // const file = event.target.files[0];
    // if (!file) return;
    // 
    // this.avatarFile = file;
    // 
    // this.currentUser.avatar = file.name;
    // 
    // const reader = new FileReader();
    // reader.onload = (e) => {
    // this.avatarPreviewUrl = e.target.result;
    // };
    // reader.readAsDataURL(file);
    // },
    // removeAvatar() {
    // this.currentUser.avatar = null;
    // this.avatarFile = null;
    // },
    addCompany() {
      this.currentUser.companies.push("");
    },
    removeCompany(index) {
      this.currentUser.companies.splice(index, 1);
    },
    addSkill() {
      if (this.newSkill.trim() && !this.currentUser.skills.includes(this.newSkill.trim())) {
        this.currentUser.skills.push(this.newSkill.trim());
        this.newSkill = "";
      }
    },
    removeSkill(index) {
      this.currentUser.skills.splice(index, 1);
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
        formData.append("companies", JSON.stringify(this.currentUser.companies));
        formData.append("skills", JSON.stringify(this.currentUser.skills));

        const data = {
          id: this.currentUser.id,
          dataToUpdate: this.currentUser,
        };
        console.log(data);
        await this.$store.dispatch("user/updateUser", data);
        this.isLoading = false;
        this.$router.push("/");
      } catch (error) {
        console.error("Ошибка при сохранении профиля:", error);
      }
    },
  },
};
</script>
