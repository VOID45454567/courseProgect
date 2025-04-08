<template>
    <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
            <h1 class="text-center font-bold text-3xl mb-8 text-primary-500">Регистрация</h1>

            <div class="space-y-6">
                <div v-for="(fieldName, index) in colums" :key="index">
                    <label class="block text-gray-700 font-medium">{{ getFieldLabel(fieldName) }}</label>
                    <div class="relative">
                        <input :type="getInputType(fieldName)" v-model="formData[fieldName]"
                            @blur="validateField(fieldName)" :class="[
                                'w-full h-12 pl-12 border-2 rounded-full focus:outline-none focus:ring-4 transition-all',
                                errors[fieldName] ? 'border-red-500 focus:ring-red-200' : 'border-primary-500 focus:ring-primary-300'
                            ]">
                        <img :src="getImageUrl(fieldName)"
                            class="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6">
                    </div>
                    <p v-if="errors[fieldName]" class="mt-1 text-sm text-red-600">{{ errors[fieldName] }}</p>
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-2">Выберите роль</label>
                    <div class="flex gap-3">
                        <button @click="selectRole('employer')" :class="[
                            'w-1/2 py-3 rounded-xl border-2 font-bold transition-all duration-300 cursor-pointer',
                            formData.role === 'employer'
                                ? 'bg-primary-500 text-white border-primary-500 shadow-md'
                                : 'border-primary-500 text-primary-500 hover:bg-primary-50'
                        ]">
                            Работодатель
                        </button>
                        <button @click="selectRole('candidate')" :class="[
                            'w-1/2 py-3 rounded-xl border-2 font-bold transition-all duration-300 cursor-pointer',
                            formData.role === 'candidate'
                                ? 'bg-primary-500 text-white border-primary-500 shadow-md'
                                : 'border-primary-500 text-primary-500 hover:bg-primary-50'
                        ]">
                            Соискатель
                        </button>
                    </div>
                    <p v-if="errors.role" class="mt-1 text-sm text-red-600">{{ errors.role }}</p>
                </div>

                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input type="checkbox" v-model="formData.agreeToPolicy" @change="validatePolicy()"
                            class="focus:ring-primary-500 cursor-pointer h-4 w-4 text-primary-600 border-gray-300 rounded"
                            :class="{ 'border-red-500': errors.agreeToPolicy }">
                    </div>
                    <div class="ml-3 text-sm">
                        <label class="font-medium text-gray-700">
                            Я принимаю <span class="text-primary-500 cursor-pointer hover:underline">Политику
                                конфиденциальности</span>
                        </label>
                        <p v-if="errors.agreeToPolicy" class="mt-1 text-sm text-red-600">{{ errors.agreeToPolicy }}</p>
                    </div>
                </div>

                <AppButton :text="'Зарегистрироваться'" class="active w-full" @click="submitForm" />
                <div class="text-gray-600 my-0">
                    Уже есть аккаунт?
                </div>
                <AppButton :text="'Войти'" class="w-full unactive" @click="$router.push('/authorization')" />
            </div>
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';

export default {
    data() {
        return {
            colums: ['username', 'email', 'password', 'passwordRepeat'],
            formData: {
                username: '',
                email: '',
                password: '',
                passwordRepeat: '',
                role: null,
                agreeToPolicy: false
            },
            errors: {
                username: '',
                email: '',
                password: '',
                passwordRepeat: '',
                role: '',
                agreeToPolicy: ''
            },
            submitted: false
        }
    },
    components: {
        AppButton
    },
    methods: {
        selectRole(role) {
            this.formData.role = role;
            if (this.submitted) {
                this.validateRole();
            }
        },
        validateRole() {
            if (!this.formData.role) {
                this.errors.role = 'Пожалуйста, выберите роль';
                return false;
            }
            this.errors.role = '';
            return true;
        },
        getImageUrl(name) {
            return new URL(`../assets/icons/${name}.png`, import.meta.url).href
        },
        getInputType(fieldName) {
            return fieldName.toLowerCase().includes('password') ? 'password' : 'text'
        },
        getFieldLabel(fieldName) {
            const labels = {
                username: 'Имя пользователя',
                email: 'Email',
                password: 'Пароль',
                passwordRepeat: 'Повторите пароль'
            }
            return labels[fieldName] || fieldName
        },
        validateField(fieldName) {
            if (!this.submitted) return

            if (!this.formData[fieldName]) {
                this.errors[fieldName] = 'Это поле обязательно для заполнения'
                return false
            }

            if (fieldName === 'email' && !this.validateEmail(this.formData.email)) {
                this.errors.email = 'Пожалуйста, введите корректный email'
                return false
            }

            if (fieldName === 'passwordRepeat' && this.formData.password !== this.formData.passwordRepeat) {
                this.errors.passwordRepeat = 'Пароли не совпадают'
                return false
            }

            this.errors[fieldName] = ''
            return true
        },
        validatePolicy() {
            if (!this.submitted) return

            if (!this.formData.agreeToPolicy) {
                this.errors.agreeToPolicy = 'Вы должны принять Политику конфиденциальности'
                return false
            }

            this.errors.agreeToPolicy = ''
            return true
        },
        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return re.test(email)
        },
        validateForm() {
            this.submitted = true
            let isValid = true

            this.colums.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false
                }
            })

            if (!this.validateRole()) {
                isValid = false
            }

            if (!this.validatePolicy()) {
                isValid = false
            }

            return isValid
        },
        submitForm() {
            if (!this.validateForm()) {
                return
            }

            console.log('Form submitted:', this.formData)
            alert('Регистрация успешна!')
        }
    }
}
</script>