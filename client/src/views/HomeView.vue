<template>
    <div>
        <AppHeader />

        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        AppHeader
    }
}
</script>