<template>
    <div class="mt-5 w-9/12 mx-auto bg-gray-50 shadow-md rounded-2xl">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl text-primary-500 font-bold text-center mb-12">Почему выбирают нас?</h2>

            <div class="flex flex-row gap-8">
                <div v-for="(benefit, index) in benefits" :key="index" class="text-center p-6 rounded-lg bg-gray-50">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path v-if="index === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            <path v-if="index === 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            <path v-if="index === 3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                    </div>
                    <h3 class="text-xl text-primary-500 font-semibold mb-2">{{ benefit.title }}</h3>
                    <p class="text-gray-600">{{ benefit.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            benefits: [
                {
                    title: "Быстрый подбор",
                    description: "Закрываем вакансии в среднем за 7 дней"
                },
                {
                    title: "Гарантия",
                    description: "Испытательный срок с гарантией замены"
                },
                {
                    title: "Экспертиза",
                    description: "Специализация в 15+ отраслях"
                },
                {
                    title: "Технологии",
                    description: "ИИ-анализ резюме и smart-поиск"
                }
            ]
        }
    }
}

</script>