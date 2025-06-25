<template>
    <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow" @click="goToSingle">
        <div class="flex justify-between items-start">
            <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ resume.preferedvacancy }}</h3>
                <div class="flex items-center mt-1 text-sm text-gray-500">
                    <span class="flex items-center">
                        {{ formatDate(resume.created_at) }}
                    </span>
                </div>
            </div>
        </div>

        <div class="mt-3 text-sm text-gray-600 line-clamp-2">
            {{ resume.about || 'Описания нет' }}
        </div>

        <div class="mt-4 flex justify-between items-center">
            <div class="flex flex-wrap gap-2">
            </div>
            <div class="flex space-x-2">
                <button class="px-3 py-1 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700"
                    @click.stop="goToEdit">
                    Редактировать
                </button>
                <button class="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
                    @click.stop="deleteResume">
                    Удалить
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
        resume: Object,
        onResumeDeleted: Function
    },
    methods: {
        goToEdit(e) {
            e.stopPropagation();
            router.push({
                path: '/update/card/' + this.resume.id,
                query: {
                    type: 'resume'
                }
            });
        },
        goToSingle() {
            router.push({
                path: '/single/' + this.resume.id,
                query: {
                    type: 'resume',
                    userId: this.resume.user_id
                }
            });
        },
        async deleteResume(e) {
            e.stopPropagation();
            if (confirm('Вы уверены, что хотите удалить это резюме?')) {
                await store.dispatch('resume/deleteResumeById', this.resume.id);
                this.onResumeDeleted()
            }
        },
        formatDate(dateString) {
            if (!dateString) return '';
            const date = new Date(dateString);
            return date.toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        }
    }
}
</script>