<template>
    <div>
        <AppHeader />
        <AppHeroSection></AppHeroSection>
        <AppBenefitSection />
        <!-- <AppVacancyItem></AppVacancyItem> -->
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import AppHeroSection from '@/components/AppHeroSection.vue';
import AppHeader from '../components/AppHeader.vue';
import AppVacancyItem from '../components/AppVacancyItem.vue';
import { RouterLink, RouterView } from 'vue-router'
import AppBenefitSection from '@/components/AppBenefitSection.vue';
export default {
    components: {
        AppHeader,
        AppVacancyItem,
        AppHeroSection,
        AppBenefitSection
    }
}
</script>