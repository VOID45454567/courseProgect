<template>
    <div>
        <h1 class="text-center">Home</h1>
        <div class="flex flex-row justify-between mx-auto w-5/12 border-2 border-rose-600 p-2 rounded-xl">
            <RouterLink to="/registration"
                class="bg-gray-200 text-center w-5/12 py-2 rounded-4xl translition duration-300 hover:bg-rose-600 hover:text-amber-50">
                registration
            </RouterLink>
            <RouterLink to="/authorization"
                class="bg-gray-200 text-center w-5/12 py-2 rounded-4xl translition duration-300 hover:bg-rose-600 hover:text-amber-50">
                authorization</RouterLink>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>