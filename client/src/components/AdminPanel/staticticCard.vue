<template>
    <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div class="p-6">
            <div class="flex items-center">
                <div class="p-3 rounded-full mr-4" :class="iconContainerClass">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path :d="iconPath" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                    </svg>
                </div>
                <div>
                    <p class="text-sm font-medium text-gray-500">{{ statisticItem.title }}</p>
                    <!-- <p class="text-2xl font-semibold text-gray-900">{{ count }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        statisticItem: Object,
        // count: Number
    },
    computed: {
        iconContainerClass() {
            return {
                'bg-blue-100 text-blue-600': this.statisticItem.activeTab === 'users',
                'bg-green-100 text-green-600': this.statisticItem.activeTab === 'vacances',
                'bg-purple-100 text-purple-600': this.statisticItem.activeTab === 'resumes'
            };
        },
        iconPath() {
            switch (this.statisticItem.activeTab) {
                case 'users':
                    return 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z';
                case 'vacances':
                    return 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z';
                case 'resumes':
                    return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
                default:
                    return '';
            }
        }
    }
}
</script>