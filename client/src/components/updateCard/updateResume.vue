<template>
    <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <div class="mb-8">
                <h1 class="text-3xl font-bold text-gray-900">Редактирование резюме</h1>
            </div>
            <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Желаемая профессия*</label>
                        <input type="text" v-model="formData.preferedvacancy" @blur="validateField('preferedvacancy')"
                            :class="[
                                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                                errors.preferedvacancy ? 'border-red-500' : 'border-gray-300',
                            ]" />
                        <p v-if="errors.preferedvacancy" class="mt-1 text-sm text-red-600">
                            {{ errors.preferedvacancy }}
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Желаемая зарплата*</label>
                            <input type="number" v-model="formData.preferedsalary"
                                @blur="validateField('preferedsalary')" :class="[
                                    'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                                    errors.preferedsalary ? 'border-red-500' : 'border-gray-300',
                                ]" />
                            <p v-if="errors.preferedsalary" class="mt-1 text-sm text-red-600">
                                {{ errors.preferedsalary }}
                            </p>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Валюта*</label>
                            <select v-model="formData.preferedcurrency" @blur="validateField('preferedcurrency')"
                                :class="[
                                    'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                                    errors.preferedcurrency ? 'border-red-500' : 'border-gray-300',
                                ]">
                                <option value="" disabled>Выберите валюту</option>
                                <option value="RUB">Рубли (RUB)</option>
                                <option value="USD">Доллары (USD)</option>
                                <option value="EUR">Евро (EUR)</option>
                                <option value="KZT">Тенге (KZT)</option>
                            </select>
                            <p v-if="errors.preferedcurrency" class="mt-1 text-sm text-red-600">
                                {{ errors.preferedcurrency }}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">О себе</label>
                        <textarea v-model="formData.about" rows="4"
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Расскажите о себе, своих достижениях и целях"></textarea>
                    </div>
                </div>
            </div>

            <div class="flex justify-between">
                <AppButton :text="'Удалить резюме'" :class="'w-4/12 active-red'" @click="deleteResume" />
                <AppButton :text="'Сохранить изменения'" :class="'w-4/12 active'" @click="submitForm" />
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'

export default {
    components: {
        AppButton
    },
    data() {
        return {
            formData: {
                id: null,
                preferedvacancy: '',
                preferedsalary: '',
                preferedcurrency: '',
                about: null,
                user_id: null
            },
            errors: {
                preferedvacancy: '',
                preferedsalary: '',
                preferedcurrency: ''
            }
        }
    },
    methods: {
        validateField(fieldName) {
            if (!this.formData[fieldName]) {
                this.errors[fieldName] = "Это поле обязательно для заполнения"
                return false
            }
            this.errors[fieldName] = ""
            return true
        },
        validateForm() {
            const requiredFields = [
                "preferedvacancy",
                "preferedsalary",
                "preferedcurrency"
            ]
            let isValid = true
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false
                }
            })
            return isValid
        },
        async loadResumeData() {
            try {
                const resumeId = this.$route.params.id
                const response = await this.$store.dispatch('resume/fetchResumeById', resumeId)

                this.formData = {
                    id: response.id,
                    preferedvacancy: response.preferedvacancy,
                    preferedsalary: response.preferedsalary,
                    preferedcurrency: response.preferedcurrency,
                    about: response.about,
                    user_id: response.user_id
                }

            } catch (error) {
                console.error('Ошибка загрузки резюме:', error)
            }
        },
        async submitForm() {
            if (this.validateForm()) {
                try {
                    await this.$store.dispatch('resume/updateResume', this.formData)
                    this.$router.back()
                } catch (error) {
                    console.error('Ошибка обновления резюме:', error)
                }
            }
        },
        async deleteResume() {
            if (confirm("Вы уверены, что хотите удалить это резюме?")) {
                try {
                    await this.$store.dispatch('resume/deleteResume', this.formData.user_id)
                    this.$router.push('/profile')
                } catch (error) {
                    console.error('Ошибка удаления резюме:', error)
                }
            }
        },
    },
    async created() {
        await this.loadResumeData()
    },
}
</script>