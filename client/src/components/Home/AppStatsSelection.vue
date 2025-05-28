<template>
  <section class="w-9/12 mx-auto mt-5 bg-primary-500 text-white rounded-xl">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index" class="p-4">
          <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
          <div class="text-blue-100">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "10K+", label: "Соискателей" },
  { value: "500+", label: "Компаний" },
  { value: "95%", label: "Успешных наймов" },
  { value: "7", label: "Дней средний срок подбора" }
]
</script>