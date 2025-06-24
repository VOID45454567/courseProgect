<template>
    <section
        class="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
        <div class="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl">
        </div>
        <div
            class="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 blur-xl">
        </div>

        <div
            class=" bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 border border-white/20 transform transition-all duration-300 hover:shadow-indigo-500/30 hover:scale-[1.02] relative z-10">
            <div class="flex items-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" class="text-white">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <h2 class="text-2xl font-bold text-white">Обратная связь</h2>
            </div>

            <p class="text-white/80 mb-8 max-w-sm">
                Помогите сделать нашу платформу лучше.
            </p>

            <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3">
                <div class="relative flex-grow">
                    <input v-model="message" type="email" placeholder="Сообщение" required
                        class="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 4L12 14.5 2 4" />
                    </svg>
                </div>


            </form>
            <AppButton :text="text" :class="'w-full active mt-4 hover:border-0'" @click="sendFeedBack">
            </AppButton>
            <div class="mt-8 flex items-center gap-2 text-white/70 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" class="flex-shrink-0">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                <span class="max-w-70">Рассмотрим ваши жалобы и преложения в кратчайшие сроки</span>
            </div>
        </div>
    </section>
</template>
<script>
import store from '@/store';
import AppButton from '../AppButton.vue';
export default {
    data() {
        return {
            message: '',
            text: 'Оставить сообшение',
        }
    },
    components: {
        AppButton
    },
    methods: {
        sendFeedBack() {
            store.dispatch('feedback/addFeedback', this.message)
            this.text = 'Спасибо!'
        }

    }
}
</script>