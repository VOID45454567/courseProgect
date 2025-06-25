<template>
    <section class="w-9/12 mx-auto mb-20 mt-20">
        <h2 class="text-3xl font-bold text-center text-primary-500 mb-4">Популярные категории</h2>
        <p class="text-center text-gray-600 mb-10 max-w-xl mx-auto">
            Найдите работу или сотрудников в самых востребованных сферах.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="(category, index) in categories" :key="index"
                class="group bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <div class="flex items-center space-x-4">
                    <div class="text-2xl group-hover:scale-110 transition-transform duration-300">
                        <component :is="category.iconComponent" />
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">{{ category.name }}</h3>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: "IT и программирование",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            `
                    }
                },
                {
                    name: "Финансы и бухгалтерия",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            `
                    }
                },
                {
                    name: "Маркетинг и продажи",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            `
                    }
                },
                {
                    name: "HR и рекрутинг",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-4-4"></path>
              </svg>
            `
                    }
                },
                {
                    name: "Дизайн и продукт",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            `
                    }
                },
                {
                    name: "Логистика и склад",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            `
                    }
                },
                {
                    name: "Административная работа",
                    iconComponent: {
                        template: `
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            `
                    }
                }
            ],
        }
    }
}
</script>