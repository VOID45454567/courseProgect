<template>
  <div
    class="w-full border-2 border-gray-200 mx-auto p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-gray-800 hover:text-primary-500 transition-colors cursor-pointer">
        {{ vacancy.name }}
      </h1>
      <p class="my-2 text-2xl font-semibold text-primary-600">
        {{ vacancy.salary }} {{ vacancy.currency }}/мес
      </p>
    </div>

    <div class="flex flex-wrap gap-2 mb-5">
      <span class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">Требуемый опыт: {{
        vacancy.experience }} года/лет</span>
      <span v-for="(format, index) in vacancy.workFormat" :key="index"
        class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">{{ format }}</span>
    </div>
    <div class="flex items-center gap-3 mb-6">
      <div>
        <div class="flex items-center text-gray-500 text-sm">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{{ vacancy.city }}</span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">

      <p>Опубликованно: <span class="text-primary-400 text-sm">{{ vacancy.created_at }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vacancy: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
