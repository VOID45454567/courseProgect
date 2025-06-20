<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Создание резюме</h1>
      </div>
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Желаемая профессия</label>
            <input type="text" v-model="formData.preferedVacancy"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Желаемая зарплата</label>
              <input type="number" v-model="formData.preferedSalary"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Валюта*</label>
              <select v-model="formData.preferedCurrency" @blur="validateField('preferedCurrency')" :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.preferedCurrency ? 'border-red-500' : 'border-gray-300',
              ]">
                <option value="" disabled>Выберите валюту</option>
                <option value="RUB">Рубли (RUB)</option>
                <option value="USD">Доллары (USD)</option>
                <option value="EUR">Евро (EUR)</option>
                <option value="KZT">Тенге (KZT)</option>
              </select>
              <p v-if="errors.currency" class="mt-1 text-sm text-red-600">
                {{ errors.preferedCurrency }}
              </p>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">О себе*</label>
            <textarea v-model="formData.about" @blur="validateField('about')" :class="[
              'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
              errors.about ? 'border-red-500' : 'border-gray-300',
            ]" rows="4" placeholder="Расскажите о себе, своих достижениях и целях"></textarea>
            <p v-if="errors.about" class="mt-1 text-sm text-red-600">
              {{ errors.about }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <button @click="cancel"
          class="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
          Отменить
        </button>
        <AppButton :text="'Сохранить резюме'" :class="'w-4/12 active'" @click="submitForm"></AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
export default {
  components: {
    AppButton
  },
  data() {
    return {
      formData: {
        preferedVacancy: '',
        preferedSalary: '',
        preferedCurrency: '',
        about: '',
        user_id: null
      },
      errors: {
        about: "",
      },
    };
  },
  computed: {
    userId() {
      return this.$store.getters['auth/currentUser'].id
    }
  },
  methods: {
    validateField(fieldName) {
      if (!this.formData[fieldName]) {
        this.errors[fieldName] = "Это поле обязательно для заполнения";
        return false;
      }

      this.errors[fieldName] = "";
      return true;
    },

    validateForm() {
      const requiredFields = [
        "preferedVacancy",
        'preferedSalary',
        "preferedCurrency",
        "about"
      ];

      let isValid = true;
      requiredFields.forEach((field) => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      return isValid;
    },

    async submitForm() {
      if (this.validateForm()) {
        this.formData.user_id = this.userId
        console.log("Форма резюме отправлена:", this.formData);
        await this.$store.dispatch('resume/createResume', this.formData);
        this.$router.push('/profile')
      }
    },

    cancel() {
      this.$router.back();
    },
  },
};
</script>
