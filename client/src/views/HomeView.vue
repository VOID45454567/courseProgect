<template>
    <div>
        <AppHeader />
        <AppHeroSection></AppHeroSection>
        <AppBenefitSection />
        <AppStatsSelection />
        <AppHowItWorks />
        <AppContactForm />
        <AppCallToAction />
        <AppFooter />
    </div>
</template>

<script>
import AppHeroSection from '@/components/Home/AppHeroSection.vue';
import AppHeader from '../components/Home/AppHeader.vue';
import AppVacancyItem from '../components/Home/AppVacancyItem.vue';
import { RouterLink, RouterView } from 'vue-router'
import AppBenefitSection from '@/components/Home/AppBenefitSection.vue';
import AppStatsSelection from '@/components/Home/AppStatsSelection.vue'
import AppHowItWorks from '@/components/Home/AppHowItWorks.vue'
import AppContactForm from '@/components/Home/AppContactForm.vue'
import AppCallToAction from '@/components/Home/AppCallToAction.vue'
import AppFooter from '@/components/Home/AppFooter.vue'
export default {
    components: {
        AppHeader,
        AppVacancyItem,
        AppHeroSection,
        AppBenefitSection,
        AppStatsSelection,
        AppHowItWorks,
        AppContactForm,
        AppCallToAction,
        AppFooter

    }
}
</script>