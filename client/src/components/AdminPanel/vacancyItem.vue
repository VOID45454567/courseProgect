<template>
    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div class="flex justify-between items-start" @click="goToSingle">
            <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ vacancy.name }}</h3>
                <div class="flex items-center mt-1 text-sm text-gray-500">
                    <span class="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd" />
                        </svg>
                        {{ vacancy.city }}
                    </span>
                    <span class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                clip-rule="evenodd" />
                            <path
                                d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        {{ vacancy.experience }} года/лет
                    </span>
                </div>
            </div>
        </div>

        <div class="mt-3 text-sm text-gray-600 line-clamp-2" @click="goToSingle">
            {{ vacancy.description || 'Описания нет' }}
        </div>
        <div class="flex flex-wrap gap-2" @click="goToSingle">
            <span v-for="(skill, index) in vacancy.required_skills" :key="index"
                class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {{ skill }}
            </span>
        </div>
        <div class="mt-4 flex justify-between items-center">
            <p class="text-gray-500" @click="goToSingle">От <span>{{ vacancy.created_at }}</span></p>

            <div class="flex space-x-2">
                <button class="px-3 py-1 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700"
                    @click.stop="goToEdit">
                    {{ 'Редактировать' }}
                </button>
                <button class="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
                    @click.stop="deleteVacancy">
                    {{ 'Удалить' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import store from '@/store';

export default {
    props: {
        vacancy: Object,
        onVacancyDeleted: Function
    },
    methods: {
        goToEdit(e) {
            e.preventDefault();
            e.stopPropagation();
            router.push({
                path: '/update/card/' + this.vacancy.id,
                query: {
                    type: 'vacancy'
                }
            })
        },
        goToSingle(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            router.push({
                path: '/single/' + this.vacancy.id,
                query: {
                    type: 'vacancy',
                    userId: this.vacancy.id_user
                }
            })
        },
        async deleteVacancy(e) {
            if (confirm('Вы точно хотите удалить вакансию?')) {
                e.preventDefault();
                e.stopPropagation();
                await store.dispatch('vacancy/deleteVacancy', this.vacancy.id)
                this.onVacancyDeleted()
            }

        }
    }
}
</script>