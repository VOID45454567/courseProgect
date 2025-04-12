<template>
    <div class="mt-5 w-9/12 mx-auto">
        <div class="container mx-auto p-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-primary-500 mb-6">
                {{ role === 'employer' ? textForEmployer.title : textForApplicant.title }}
            </h1>
            <p class="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Профессиональный подбор персонала для бизнеса любого масштаба
            </p>
            <AppButton :text="'В зависимости от роли'" class="active w-3/12" />
        </div>
    </div>
</template>
<script>
import AppButton from './AppButton.vue';

export default {
    data() {
        return {
            role: 'employer',
            textForEmployer: {
                title: 'Найдите подходящего сотрудника для вашего бизнеса',
                buttonText: 'Разместить вакансию'
            },
            textForApplicant: {
                title: 'Найдите работу, которая соответствует вашим навыкам',
                buttonText: 'Начать поиск'
            },
        }
    },
    components: {
        AppButton
    }
}
</script>