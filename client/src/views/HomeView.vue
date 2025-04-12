<template>
    <div>
        <AppHeader />
        <AppHeroSection></AppHeroSection>
        <AppBenefitSection />
        <AppStatsSelection />
        <AppHowItWorks />
        <AppContactForm />
        <AppCallToAction />
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
import AppStatsSelection from '@/components/AppStatsSelection.vue'
import AppHowItWorks from '@/components/AppHowItWorks.vue'
import AppContactForm from '@/components/AppContactForm.vue'
import AppCallToAction from '@/components/AppCallToAction.vue'
export default {
    components: {
        AppHeader,
        AppVacancyItem,
        AppHeroSection,
        AppBenefitSection,
        AppStatsSelection,
        AppHowItWorks,
        AppContactForm,
        AppCallToAction

    }
}
</script>