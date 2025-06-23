<template>
    <div>
        <UpdateResume v-if="type === 'resume'" :id="id"></UpdateResume>
        <UpdateVacancy v-else :id="id"></UpdateVacancy>

    </div>
</template>
<script>
import UpdateResume from '@/components/updateCard/updateResume.vue';
import UpdateVacancy from '@/components/updateCard/updateVacancy.vue';

export default {
    components: {
        UpdateResume,
        UpdateVacancy
    },
    computed: {
        type() {
            return this.$route.query.type
        },
        id() {
            return parseInt(this.$route.params.id)
        }
    },
    methods: {
        async getCartData() {

        }
    }

}
</script>