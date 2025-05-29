<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <!-- Заголовок -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">Создание вакансии</h1>
            </div>

            <!-- Основная форма -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div class="space-y-6">
                    <!-- Название вакансии -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Название вакансии*</label>
                        <input type="text" v-model="vacancy.title" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Например: Frontend разработчик (Vue.js)" />
                    </div>

                    <!-- Зарплата -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-3">Зарплата</label>
                        <div class="flex flex-col space-y-4">
                            <!-- Переключатель типа зарплаты -->
                            <div class="flex items-center space-x-4">
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="salaryType" value="from"
                                        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300" />
                                    <span class="ml-2 text-gray-700">От</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="salaryType" value="fixed"
                                        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300" />
                                    <span class="ml-2 text-gray-700">Фиксированная</span>
                                </label>
                                <label class="inline-flex items-center">
                                    <input type="radio" v-model="salaryType" value="range"
                                        class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300" />
                                    <span class="ml-2 text-gray-700">От и до</span>
                                </label>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <!-- От -->
                                <div v-if="salaryType === 'from' || salaryType === 'range'" class="relative">
                                    <label class="block text-xs text-gray-500 mb-1">От</label>
                                    <div class="relative">
                                        <input type="number" v-model="vacancy.salaryMin"
                                            class="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                                        <span
                                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₽</span>
                                    </div>
                                </div>

                                <!-- Фиксированная -->
                                <div v-if="salaryType === 'fixed'" class="relative">
                                    <label class="block text-xs text-gray-500 mb-1">Сумма</label>
                                    <div class="relative">
                                        <input type="number" v-model="vacancy.salaryFixed"
                                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                                        <span
                                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₽</span>
                                    </div>
                                </div>

                                <!-- До -->
                                <div v-if="salaryType === 'range'" class="relative">
                                    <label class="block text-xs text-gray-500 mb-1">До</label>
                                    <div class="relative">
                                        <input type="number" v-model="vacancy.salaryMax"
                                            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                                        <span
                                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">₽</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Опыт работы -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Требуемый опыт</label>
                        <select v-model="vacancy.experience"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                            <option value="no-exp">Без опыта</option>
                            <option value="1-3">1-3 года</option>
                            <option value="3-6">3-6 лет</option>
                            <option value="6+">Более 6 лет</option>
                        </select>
                    </div>

                    <!-- Формат работы -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Формат работы</label>
                        <div class="flex flex-wrap gap-3">
                            <label v-for="format in workFormats" :key="format.value" class="inline-flex items-center">
                                <input type="checkbox" v-model="vacancy.workFormat" :value="format.value"
                                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                                <span class="ml-2 text-gray-700">{{ format.label }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Локация -->
                    <div v-if="vacancy.workFormat.includes('office')">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Город</label>
                        <input type="text" v-model="vacancy.location"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Например: Москва" />
                    </div>

                    <!-- Описание вакансии -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Описание вакансии*</label>
                        <textarea v-model="vacancy.description" rows="6" required
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Опишите обязанности, требования и условия работы"></textarea>
                    </div>

                    <!-- Навыки -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Требуемые навыки</label>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="(skill, index) in vacancy.skills" :key="index"
                                class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                {{ skill }}
                                <button @click="removeSkill(index)"
                                    class="ml-1 text-primary-600 hover:text-primary-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                        <div class="flex">
                            <input type="text" v-model="newSkill" @keyup.enter="addSkill" placeholder="Добавить навык"
                                class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary-500 focus:border-primary-500" />
                            <button @click="addSkill"
                                class="px-4 py-2 bg-primary-500 text-white font-medium rounded-r-lg hover:bg-primary-600 transition-colors">
                                Добавить
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Кнопки действий -->
            <div class="flex justify-between">
                <button @click="cancel"
                    class="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
                    Отменить
                </button>
                <div class="space-x-4">
                    <button @click="saveDraft"
                        class="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-colors">
                        Сохранить черновик
                    </button>
                    <button @click="publish"
                        class="px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg">
                        Опубликовать
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newSkill: "",
            workFormats: [
                { value: "office", label: "Офис" },
                { value: "remote", label: "Удалённо" },
                { value: "hybrid", label: "Гибрид" },
            ],
            salaryType: "from",
            vacancy: {
                title: "",
                salaryMin: null,
                salaryMax: null,
                salaryFixed: null,
                experience: "1-3",
                workFormat: ["office"],
                location: "",
                description: "",
                skills: ["Vue.js", "JavaScript", "HTML/CSS"],
            },
        };
    },
    watch: {
        salaryType(newVal) {
            if (newVal === "from") {
                this.vacancy.salaryFixed = null;
                this.vacancy.salaryMax = null;
            } else if (newVal === "fixed") {
                this.vacancy.salaryMin = null;
                this.vacancy.salaryMax = null;
            } else if (newVal === "range") {
                this.vacancy.salaryFixed = null;
            }
        },
    },
    methods: {
        addSkill() {
            if (this.newSkill.trim() && !this.vacancy.skills.includes(this.newSkill.trim())) {
                this.vacancy.skills.push(this.newSkill.trim());
                this.newSkill = "";
            }
        },
        removeSkill(index) {
            this.vacancy.skills.splice(index, 1);
        },
        publish() {
            console.log("Vacancy published:", this.vacancy);
            // Здесь отправка данных на сервер
            alert("Вакансия опубликована!");
            // this.$router.push("/vacancies");
        },
        saveDraft() {
            console.log("Vacancy saved as draft:", this.vacancy);
            // Здесь сохранение черновика
            alert("Черновик сохранен!");
        },
        cancel() {
            if (confirm("Вы уверены, что хотите отменить создание вакансии?")) {
                this.$router.push("/vacancies");
            }
        },
    },
};
</script>

<style>
/* Дополнительные стили при необходимости */
</style>
