<template>
    <div class="w-full border-b-2 border-gray-300 py-4">
        <div class="w-5/6 mx-auto flex items-center justify-between">
            <div class="flex items-center shrink-0">
                <img src="" alt="" width="60px" height="60px">
                <h1 class="text-4xl font-bold ml-2">Logo</h1>
            </div>


            <div class="relative  w-7/12 mx-4">
                <input type="text" placeholder="Поиск вакансий, компаний"
                    class="w-full pl-5 pr-16 py-3 border-2 border-gray-300 rounded-full focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">

                </div>
                <button
                    class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-500 hover:text-primary-600 transition-colors">
                    <img src="@/assets/icons/search.png" alt="Поиск" class="h-5 w-5  cursor-pointer">
                </button>
            </div>
            <div class="flex flex-row justify-between gap-5 shrink-0 items-center w-5/12">
                <button class="py-2 hover:underline cursor-pointer" v-for="(item, index) in categories" :key="index">{{
                    item.name }}</button>

                <AppButton :text="'авторизоваться'" class="w-4/12 active" @click="$router.push('/authorization')" />
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import AppButton from './AppButton.vue';
export default {
    components: {
        AppButton
    },
    data() {
        return {
            categories: [
                {
                    name: 'Вакансии',
                    link: '/vacancies'
                },
                {
                    name: 'Избранное',
                    link: '/favorite'
                },
                {
                    name: 'Отклики',
                    link: '/responses'
                },
                {
                    name: 'О нас',
                    link: '/about'
                },

            ]
        }
    },
}
</script>
