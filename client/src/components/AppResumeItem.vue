<template>
  <div
    class="w-full border-2 border-gray-200 mx-auto p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
    <div class="mb-4">
      <h1 class="text-2xl font-bold text-gray-800 hover:text-primary-500 transition-colors cursor-pointer">
        {{ resume.preferedvacancy }}
      </h1>
      <p class="my-2 text-2xl font-semibold text-primary-600">
        {{ resume.preferedsalary }} {{ resume.preferedcurrency }}
      </p>
    </div>

    <div class="mb-5">
      <p class="text-gray-600">
        {{ resume.about ? resume.about : 'Нет описания' }}
      </p>
    </div>

    <div class="flex items-center gap-3 mb-6">
      <div>
        <p class="font-medium text-gray-800">
          <!-- {{ resume.user.name }} {{ resume.surname }} -->
        </p>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <AppButton :text="'Просмотр резюме'" :class="'w-3/12 active'" @click="goToSingle"></AppButton>
      <span class="text-red-400 text-sm">Время укажи</span>
    </div>
  </div>
</template>
<script>
import AppButton from './AppButton.vue';
export default {
  props: {
    resume: {
      type: Object,
      required: true
    }
  },
  components: {
    AppButton
  },
  methods: {
    goToSingle(id) {
      this.$router.push({
        path: '/single/' + id,
        query: {
          type: 'resume'
        }
      })
    }
  }
};
</script>
<style></style>
