<template>
  <section class="w-9/12 mx-auto mt-5 bg-white">
    <div class="container mx-auto px-4" v-if="
      currentUser.role === 'admin' || currentUser.role === 'employer'
    ">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary-500 mb-4">Как это работает?</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Простой и прозрачный процесс подбора персонала
        </p>
      </div>
      <div class="mb-20">
        <div class="flex items-center justify-center mb-12">
          <div class="bg-primary-100 rounded-full p-3 mr-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-primary-600">Для работодателей</h3>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div v-for="(step, index) in employerSteps" :key="'emp' + index" class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div
              class="flex flex-col items-center justify-between bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-primary-100 h-full">
              <div class="flex flex-col w-full mb-4">
                <div
                  class="bg-primary-500 text-white rounded-md w-full h-10 flex items-center justify-center font-bold">
                  {{ index + 1 }}
                </div>
                <h4 class="font-bold text-lg text-gray-800">{{ step.title }}</h4>
              </div>
              <p class="text-gray-600 mb-4">{{ step.description }}</p>
              <div class="bg-primary-50 rounded-lg p-3 w-full">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span class="text-sm font-medium text-primary-600">{{
                    step.time
                    }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="currentUser.role === 'searcher'">
        <div class="flex items-center justify-center mb-12">
          <div class="bg-primary-100 rounded-full p-3 mr-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-semibold text-primary-600">Для соискателей</h3>
        </div>

        <div class="flex flex-wrap -mx-4">
          <div v-for="(step, index) in candidateSteps" :key="'can' + index" class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div
              class="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-primary-100 h-full">
              <div class="bg-primary-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  <path v-if="index === 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 class="font-bold text-lg text-gray-800 mb-2">{{ step.title }}</h4>
              <p class="text-gray-600 mb-4">{{ step.description }}</p>
              <div class="flex items-center text-primary-600 font-medium">
                <span>Подробнее</span>
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      employerSteps: [
        {
          title: "Оставьте заявку",
          description: "Расскажите о вакансии, требованиях и условиях работы",
          time: "5-10 минут",
        },
        {
          title: "Анализ потребностей",
          description: "Наши HR-эксперты детально проанализируют ваши требования",
          time: "1-2 часа",
        },
        {
          title: "Подбор кандидатов",
          description: "Предоставим 3-5 лучших специалистов по вашим критериям",
          time: "3-7 дней",
        },
        {
          title: "Собеседование",
          description: "Вы проводите интервью с отобранными кандидатами",
          time: "1-3 дня",
        },
      ],
      candidateSteps: [
        {
          title: "Создайте профиль",
          description: "Заполните анкету и загрузите резюме — это займет 10 минут",
        },
        {
          title: "Найдите вакансии",
          description: "Используйте умный поиск с фильтрами по зарплате и специализации",
        },
        {
          title: "Отправьте заявку",
          description: "Откликайтесь на интересные позиции прямо в системе",
        },
        {
          title: "Получите работу",
          description: "Проходите собеседования и получайте предложения от работодателей",
        },
      ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
};
</script>
