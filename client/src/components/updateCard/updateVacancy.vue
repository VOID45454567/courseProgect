<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <!-- Заголовок -->
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">Редактирование вакансии</h1>
            </div>

            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Название вакансии*</label>
                        <input type="text" v-model="formData.name" @blur="validateField('name')" required :class="[
                            'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                            errors.name ? 'border-red-500' : 'border-gray-300',
                        ]" placeholder="Например: Frontend разработчик (Vue.js)" />
                        <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Зарплата</label>
                            <input type="number" v-model="formData.salary"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Валюта*</label>
                            <select v-model="formData.currency" @blur="validateField('currency')" :class="[
                                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                                errors.currency ? 'border-red-500' : 'border-gray-300',
                            ]">
                                <option value="" disabled>Выберите валюту</option>
                                <option value="RUB">Рубли (RUB)</option>
                                <option value="USD">Доллары (USD)</option>
                                <option value="EUR">Евро (EUR)</option>
                                <option value="KZT">Тенге (KZT)</option>
                            </select>
                            <p v-if="errors.currency" class="mt-1 text-sm text-red-600">
                                {{ errors.currency }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Требуемый опыт* ()лет</label>
                        <input :class="[
                            'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                            errors.name ? 'border-red-500' : 'border-gray-300',
                        ]" type="number" v-model="formData.experience" />
                        <p v-if="errors.experience" class="mt-1 text-sm text-red-600">
                            {{ errors.experience }}
                        </p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Формат работы*</label>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span v-for="(format, index) in formData.work_format" :key="index"
                                class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                                {{ format }}
                                <button @click="removeWorkFormat(index)"
                                    class="ml-1 text-primary-600 hover:text-primary-800">
                                    &times;
                                </button>
                            </span>
                        </div>
                        <div class="flex">
                            <select v-model="selectedWorkFormat" @change="addWorkFormat"
                                class="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary-500 focus:border-primary-500">
                                <option value="" disabled selected>Выберите формат работы</option>
                                <option value="Офис">Офис</option>
                                <option value="Удаленно">Удалённо</option>
                                <option value="Гибрид">Гибридный</option>
                            </select>
                            <button @click="addWorkFormat"
                                class="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors">
                                Добавить
                            </button>
                        </div>
                        <p v-if="errors.work_format" class="mt-1 text-sm text-red-600">
                            {{ errors.work_format }}
                        </p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Город*</label>
                        <input type="text" v-model="formData.city" @blur="validateField('city')" :class="[
                            'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                            errors.city ? 'border-red-500' : 'border-gray-300',
                        ]" placeholder="Например: Москва" />
                        <p v-if="errors.city" class="mt-1 text-sm text-red-600">{{ errors.city }}</p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Описание вакансии*</label>
                        <textarea v-model="formData.description" @blur="validateField('description')" rows="6" :class="[
                            'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                            errors.description ? 'border-red-500' : 'border-gray-300',
                        ]" placeholder="Опишите обязанности, требования и условия работы"></textarea>
                        <p v-if="errors.description" class="mt-1 text-sm text-red-600">
                            {{ errors.description }}
                        </p>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Требуемые навыки*</label>
                        <div class="flex flex-wrap gap-2 mb-2">
                            <span v-for="(skill, index) in formData.required_skills" :key="index"
                                class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                                {{ skill }}
                                <button @click="removeSkill(index)"
                                    class="ml-1 text-primary-600 hover:text-primary-800">
                                    &times;
                                </button>
                            </span>
                        </div>
                        <div class="flex">
                            <input type="text" v-model="newSkill" @keyup.enter="addSkill"
                                placeholder="Введите навык и нажмите Enter"
                                class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary-500 focus:border-primary-500" />
                            <button @click="addSkill"
                                class="px-4 py-2 bg-primary-500 text-white rounded-r-lg hover:bg-primary-600 transition-colors">
                                Добавить
                            </button>
                        </div>
                        <p v-if="errors.required_skills" class="mt-1 text-sm text-red-600">
                            {{ errors.required_skills }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-between">
                <AppButton :text="'Удалить вакансию'" :class="'w-4/12 active-red'" @click="deleteVacancy" />
                <AppButton :text="'Сохранить изменения'" :class="'w-4/12 active'" @click="submitForm" />
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
export default {
    components: {
        AppButton,
    },
    props: {
        id: Number
    },
    data() {
        return {
            selectedWorkFormat: "",
            newSkill: "",
            formData: {
                id: null,
                name: "",
                salary: "",
                currency: "",
                experience: "",
                work_format: [],
                city: "",
                description: "",
                required_skills: [],
                id_user: null,
            },
            errors: {
                name: "",
                currency: "",
                experience: "",
                work_format: "",
                city: "",
                description: "",
                required_skills: "",
            },
        };
    },
    methods: {
        addWorkFormat() {
            if (
                this.selectedWorkFormat &&
                !this.formData.work_format.includes(this.selectedWorkFormat)
            ) {
                this.formData.work_format.push(this.selectedWorkFormat);
                this.selectedWorkFormat = "";
                this.errors.work_format = "";
            }
        },

        removeWorkFormat(index) {
            this.formData.work_format.splice(index, 1);
        },

        addSkill() {
            if (
                this.newSkill.trim() &&
                !this.formData.required_skills.includes(this.newSkill.trim())
            ) {
                this.formData.required_skills.push(this.newSkill.trim());
                this.newSkill = "";
                this.errors.required_skills = "";
            }
        },

        removeSkill(index) {
            this.formData.required_skills.splice(index, 1);
        },

        validateField(fieldName) {
            if (fieldName === "work_format" && this.formData.work_format.length === 0) {
                this.errors.work_format = "Выберите хотя бы один формат работы";
                return false;
            }
            if (fieldName === "required_skills" && this.formData.required_skills.length === 0) {
                this.errors.required_skills = "Добавьте хотя бы один навык";
                return false;
            }
            if (
                !this.formData[fieldName] &&
                fieldName !== "work_format" &&
                fieldName !== "required_skills"
            ) {
                this.errors[fieldName] = "Это поле обязательно для заполнения";
                return false;
            }
            this.errors[fieldName] = "";
            return true;
        },

        validateForm() {
            let isValid = true;
            const requiredFields = [
                "name",
                "currency",
                "experience",
                "work_format",
                "city",
                "description",
                "required_skills",
            ];

            requiredFields.forEach((field) => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });
            return isValid;
        },

        async loadVacancyData() {
            const vacancyId = this.$route.params.id;
            const vacancy = await this.$store.dispatch('vacancy/fetchOneVacancy', vacancyId);
            console.log(vacancy);

            this.formData = { ...vacancy.vacancy };
        },

        async submitForm() {
            if (this.validateForm()) {
                await this.$store.dispatch("vacancy/updateVacancy", this.formData);
                this.$router.back();
            }
        },

        async deleteVacancy() {
            if (confirm("Вы уверены, что хотите удалить эту вакансию?")) {
                await this.$store.dispatch("vacancy/deleteVacancy", this.formData.id);
                this.$router.push("/profile");
            }
        },
    },
    computed: {
        currentUser() {
            return this.$store.getters["auth/currentUser"];
        },
    },
    async created() {
        await this.loadVacancyData();
        this.formData.id_user = this.currentUser.id;
    },
};
</script>