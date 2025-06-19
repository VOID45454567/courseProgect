<template>
  <div class="mt-5 w-9/12 mx-auto">
    <div class="container mx-auto p-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-primary-500 mb-6">
        {{
          currentUser.role === "employer" || currentUser.role === "admin"
            ? textForEmployer.title
            : textForApplicant.title
        }}
      </h1>
      <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Профессиональный подбор персонала для бизнеса любого масштаба
      </p>
      <AppButton :text="currentUser.role === 'employer' || currentUser.role === 'admin'
        ? textForEmployer.buttonText
        : textForApplicant.buttonText
        " class="active w-3/12" @click="goToSearch" />
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton.vue";
export default {
  data() {
    return {
      textForEmployer: {
        title: "Найдите подходящего сотрудника для вашего бизнеса",
        buttonText: "К просмотру резюме",
      },
      textForApplicant: {
        title: "Найдите работу, которая соответствует вашим навыкам",
        buttonText: "Начать поиск вакансий",
      },
    };
  },
  components: {
    AppButton,
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"]
    }
  },
  created() {
    this.currentUser
  },
  methods: {
    goToSearch() {
      if (this.currentUser.role === 'searcher') {
        this.$router.push({
          path: '/search',
          query: {
            type: 'vacances'
          }
        })
      } else {
        this.$router.push({
          path: '/search',
          query: {
            type: 'resumes'
          }
        })
      }
    }
  }
};
</script>
