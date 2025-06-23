<template>
  <div class="w-full border-b-2 border-gray-300 py-4">
    <div class="w-5/6 mx-auto flex items-center justify-between">
      <div class="flex items-center shrink-0">
        <h1 class="text-3xl font-bold text-primary-500 cursor-pointer" @click="logoLink(currentUser)">
          HRRecruit
        </h1>
      </div>
      <div class="flex flex-row justify-between gap-5 shrink-0 items-center w-6/12">
        <router-link v-for="(item, index) in filteredCategories" :key="index" :to="getModifiedLink(item)">
          <button class="hover: cursor-pointer">
            {{ getModifiedName(item) }}
          </button>
        </router-link>

        <p v-if="currentUser" @click="this.$router.push('/profile')"
          class="text-primary-500 font-bold hover:cursor-pointer">
          {{ currentUser.name }}
        </p>
        <AppButton v-else :text="'авторизоваться'" class="w-4/12 active" @click="$router.push('/login')" />
      </div>
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
      categories: [
        {
          name: "Резюме",
          link: "/search",
          alternativeName: "Вакансии",
          queryParam: "type",
          employerValue: "resumes",
          candidateValue: "vacances"
        },
        {
          name: "Отклики",
          link: "/responses",
        },
        {
          name: "О нас",
          link: "/about",
        },
        {
          name: 'Панель администратора',
          link: '/adminPanel',
          adminOnly: true
        }
      ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    isEmployer() {
      return this.currentUser?.role === "employer";
    },
    isCandidate() {
      return this.currentUser?.role === "searcher";
    },
    isAdmin() {
      return this.currentUser?.role === "admin";
    },
    filteredCategories() {
      return this.categories.filter(item => {
        // Если пункт требует прав администратора, проверяем что пользователь авторизован и является админом
        if (item.adminOnly) {
          return this.currentUser && this.isAdmin;
        }
        return true;
      });
    }
  },
  methods: {
    logoLink(currentUser) {
      if (currentUser) {
        this.$router.push('/');
      }
    },
    getModifiedName(item) {
      if (item.alternativeName) {
        return this.isEmployer ? item.name : item.alternativeName;
      }
      return item.name;
    },
    getModifiedLink(item) {
      if (!item.queryParam) return item.link;

      const query = {};
      if (item.queryParam) {
        query[item.queryParam] = this.isEmployer
          ? item.employerValue
          : item.candidateValue;
      }

      return {
        path: item.link,
        query
      };
    }
  }
};
</script>