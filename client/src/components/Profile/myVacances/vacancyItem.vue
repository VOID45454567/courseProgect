<template>
  <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-lg font-semibold text-gray-900">Frontend разработчик</h3>
        <p class="text-sm text-gray-600">Москва • Опыт от 3 лет</p>
      </div>
    </div>
    <p class="mt-2 text-gray-700">Разработка пользовательских интерфейсов на Vue.js</p>
    <div class="mt-3 flex gap-2">
      <button
        class="px-3 py-1 bg-red-100 text-red-600 text-sm rounded hover:bg-red-200 transition-colors"
      >
        Удалить
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vacancyData: {},
    };
  },
};
</script>
