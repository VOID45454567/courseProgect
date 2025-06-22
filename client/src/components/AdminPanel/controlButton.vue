<template>
    <button @click="$emit('active-tab', data.activeTab)"
        :class="['p-6 rounded-xl shadow-md border transition-all duration-200 flex items-center justify-center',
            data.activeTab === activeTab ? 'bg-primary-50 border-primary-300' : 'bg-white border-gray-200 hover:bg-gray-50']">
        <div class="text-center">
            <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-3">
                <div v-html="getIcon(data.activeTab)"></div>
            </div>
            <h3 class="text-lg font-medium text-gray-900">{{ data.title }}</h3>
            <p class="mt-1 text-sm text-gray-500">{{ data.subtitle }}</p>
        </div>
    </button>
</template>
<script>
import resumesIcon from '@/assets/icons/resumes-icon.svg?raw'
import vacancesIcon from '@/assets/icons/vacances-icon.svg?raw'
import usersIcon from '@/assets/icons/vacances-icon.svg?raw'
export default {
    created() {
        console.log(this.data);
    },

    props: {
        data: Object,
        activeTab: String
    },
    emits: ['active-tab'],
    data() {
        return {
            resumesIcon,
            vacancesIcon,
            usersIcon
        }
    },
    computed: {
        getIcon(tab) {
            return `${tab}Icon`
        }
    }
}
</script>