<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <!-- Заголовок -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">Личный кабинет</h1>
            </div>

            <!-- Основной блок -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div class="flex flex-col md:flex-row gap-8">
                    <!-- Блок с аватаром -->
                    <div class="w-full md:w-1/3 flex flex-col items-center">
                        <div class="relative mb-4">
                            <img :src="avatarUrl || 'https://via.placeholder.com/150'"
                                class="w-40 h-40 rounded-full object-cover border-4 border-primary-100" />
                            <label for="avatar-upload"
                                class="absolute bottom-0 right-0 bg-primary-500 text-white rounded-full p-2 cursor-pointer hover:bg-primary-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </label>
                            <input id="avatar-upload" type="file" accept="image/*" class="hidden"
                                @change="handleAvatarUpload" />
                        </div>
                        <button @click="removeAvatar"
                            class="text-red-500 text-sm font-medium hover:text-red-700 transition-colors">
                            Удалить фото
                        </button>
                    </div>

                    <!-- Основная информация -->
                    <div class="w-full md:w-2/3">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Имя -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                                <input type="text" v-model="userData.firstName"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>

                            <!-- Фамилия -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Фамилия</label>
                                <input type="text" v-model="userData.lastName"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>

                            <!-- Email -->
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" v-model="userData.email"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>

                            <!-- Телефон -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                                <input type="tel" v-model="userData.phone"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>

                            <!-- Город -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Город</label>
                                <select v-model="userData.city"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500">
                                    <option value="moscow">Москва</option>
                                    <option value="spb">Санкт-Петербург</option>
                                    <option value="remote">Удалённо</option>
                                    <option value="other">Другой</option>
                                </select>
                            </div>

                            <!-- Опыт работы (упрощенный) -->
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Опыт работы (лет)</label>
                                <input type="number" v-model="userData.experienceYears" min="0" max="50"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                            </div>

                            <!-- О себе -->
                            <div class="md:col-span-2">
                                <label class="block text-sm font-medium text-gray-700 mb-1">О себе</label>
                                <textarea v-model="userData.about" rows="4"
                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Блок с компаниями -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Компании, в которых работал</h2>
                <div v-for="(company, index) in userData.companies" :key="index" class="mb-4 last:mb-0">
                    <div class="flex items-center gap-3">
                        <input type="text" v-model="userData.companies[index]"
                            class="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        <button @click="removeCompany(index)"
                            class="text-red-500 hover:text-red-700 transition-colors p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button @click="addCompany"
                    class="mt-3 px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
                    Добавить компанию
                </button>
            </div>

            <!-- Блок с навыками -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <h2 class="text-xl font-bold text-gray-800 mb-4">Навыки</h2>
                <div class="flex flex-wrap gap-2 mb-4">
                    <span v-for="(skill, index) in userData.skills" :key="index"
                        class="bg-primary-500/10 text-primary-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        {{ skill }}
                        <button @click="removeSkill(index)" class="ml-1 text-primary-600 hover:text-primary-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </span>
                </div>
                <div class="flex">
                    <input type="text" v-model="newSkill" placeholder="Добавить навык"
                        class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary-500 focus:border-primary-500" />
                    <button @click="addSkill"
                        class="px-4 py-2 bg-primary-500 text-white font-medium rounded-r-lg hover:bg-primary-600 transition-colors">
                        Добавить
                    </button>
                </div>
            </div>

            <!-- Кнопка сохранения -->
            <div class="flex justify-end">
                <button @click="saveProfile"
                    class="px-6 py-3 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg">
                    Сохранить изменения
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatarUrl: null,
            newSkill: "",
            userData: {
                firstName: "Иван",
                lastName: "Иванов",
                email: "ivan@example.com",
                phone: "+7 (999) 123-45-67",
                city: "moscow",
                about: "Frontend разработчик с 3-летним опытом работы с Vue.js и React.",
                experienceYears: 3,
                companies: ["Tech Innovations Inc.", "Web Solutions"],
                skills: ["Vue.js", "JavaScript", "HTML/CSS", "TypeScript"],
            },
        };
    },
    methods: {
        handleAvatarUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.avatarUrl = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        removeAvatar() {
            this.avatarUrl = null;
        },
        addCompany() {
            this.userData.companies.push("");
        },
        removeCompany(index) {
            this.userData.companies.splice(index, 1);
        },
        addSkill() {
            if (this.newSkill.trim() && !this.userData.skills.includes(this.newSkill.trim())) {
                this.userData.skills.push(this.newSkill.trim());
                this.newSkill = "";
            }
        },
        removeSkill(index) {
            this.userData.skills.splice(index, 1);
        },
        saveProfile() {
            console.log("Profile saved:", this.userData);
            // Здесь обычно отправка данных на сервер
            alert("Изменения сохранены!");
        },
    },
};
</script>

<style>
/* Дополнительные стили при необходимости */
</style>
