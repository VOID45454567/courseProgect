<template>
    <div class="w-9/12 mx-auto mt-5 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-primary-500">Популярные вакансии</h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="(job, index) in jobs" :key="index"
                    class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                            <span class="text-primary-500 font-bold">{{ job.company.charAt(0) }}</span>
                        </div>
                        <div>
                            <h3 class="font-semibold">{{ job.position }}</h3>
                            <p class="text-gray-500 text-sm">{{ job.company }}</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-3 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">{{ job.salary
                        }}</span>
                        <span class="px-3 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">{{ job.location
                            }}</span>
                        <span class="px-3 py-1 bg-primary-100 text-primary-600 text-xs rounded-full">{{ job.type
                        }}</span>
                    </div>
                    <p class="text-gray-600 mb-4 line-clamp-2">{{ job.description }}</p>
                    <AppButton :text="'Подробнее'" class="active w-full" />
                </div>
            </div>

            <div class="mt-10">
                <AppButton :text="'Посмотреть все вакансии'" class="active w-4/12" />
            </div>
        </div>
    </div>
</template>
<script>
import AppButton from './AppButton.vue'
export default {
    data() {
        return {
            jobs: [
                {
                    position: "Frontend Developer (Vue.js)",
                    company: "TechCorp",
                    salary: "от 150 000 ₽",
                    location: "Москва",
                    type: "Удаленно",
                    description: "Разработка клиентской части веб-приложений с использованием Vue 3, Vuex, Vue Router."
                },
                {
                    position: "HR Manager",
                    company: "HR Solutions",
                    salary: "от 120 000 ₽",
                    location: "Санкт-Петербург",
                    type: "Офис",
                    description: "Подбор и адаптация персонала, проведение собеседований, работа с кадровым резервом."
                },
                {
                    position: "Backend Developer (Node.js)",
                    company: "DevTeam",
                    salary: "от 180 000 ₽",
                    location: "Москва",
                    type: "Гибрид",
                    description: "Разработка серверной логики и API для высоконагруженных приложений."
                }
            ]
        }
    },
    components: {
        AppButton
    }
}

</script>