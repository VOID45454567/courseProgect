<template>
  <div class="relative w-7/12 mx-4">
    <input
      type="text"
      placeholder="Поиск вакансий, компаний"
      class="w-full pl-5 pr-16 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 shadow-sm"
    />
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
    ></div>
    <button
      class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-500 hover:text-primary-600 transition-colors"
    >
      <img src="@/assets/icons/search.png" alt="Поиск" class="h-5 w-5 cursor-pointer" />
    </button>
  </div>
</template>
