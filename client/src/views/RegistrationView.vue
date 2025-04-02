<template>
    <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">

            <h1 class="text-center font-bold text-3xl mb-8 text-rose-600">Registration now</h1>


            <div class="space-y-6">
                <div v-for="(item, index) in colums" :key="index">
                    <label class="block mb-2 text-gray-700 font-medium">{{ item }}</label>
                    <div class="relative">
                        <input type="text"
                            class="w-full h-12 pl-12 border-2 border-rose-600 rounded-full focus:outline-none focus:ring-4 focus:ring-rose-200 focus:border-rose-500 transition-all">
                        <img :src="getImageUrl(item)"
                            class="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6">
                    </div>
                </div>

                <button
                    class="w-full h-12 rounded-full border-2 border-rose-600 bg-rose-600 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-white hover:text-rose-600 mt-6 shadow-md hover:shadow-lg">
                    Log in
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colums: ['username', 'email', 'password', 'password-repeat'],
            username: '',
            email: '',
            password: '',
            passwordRepeat: ''
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/icons/${name}.png`, import.meta.url).href
        }
    }
}
</script>
<style></style>