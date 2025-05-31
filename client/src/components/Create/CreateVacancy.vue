<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Заголовок -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Создание вакансии</h1>
      </div>

      <!-- Основная форма -->
      <div class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div class="space-y-6">
          <!-- Название вакансии -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Название вакансии*</label
            >
            <input
              type="text"
              v-model="formData.name"
              @blur="validateField('name')"
              required
              :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.name ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="Например: Frontend разработчик (Vue.js)"
            />
            <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
          </div>

          <!-- Зарплата и валюта -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Зарплата</label>
              <input
                type="number"
                v-model="formData.salary"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Валюта*</label>
              <select
                v-model="formData.currency"
                @blur="validateField('currency')"
                :class="[
                  'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                  errors.currency ? 'border-red-500' : 'border-gray-300',
                ]"
              >
                <option value="" disabled>Выберите валюту</option>
                <option value="RUB">Рубли (RUB)</option>
                <option value="USD">Доллары (USD)</option>
                <option value="EUR">Евро (EUR)</option>
                <option value="KZT">Тенге (KZT)</option>
              </select>
              <p v-if="errors.currency" class="mt-1 text-sm text-red-600">
                {{ errors.currency }}
              </p>
            </div>
          </div>

          <!-- Опыт работы -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Требуемый опыт*</label
            >
            <select
              v-model="formData.experience"
              @blur="validateField('experience')"
              :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.experience ? 'border-red-500' : 'border-gray-300',
              ]"
            >
              <option value="" disabled>Выберите опыт</option>
              <option value="no-exp">Без опыта</option>
              <option value="1-3">1-3 года</option>
              <option value="3-6">3-6 лет</option>
              <option value="6+">Более 6 лет</option>
            </select>
            <p v-if="errors.experience" class="mt-1 text-sm text-red-600">
              {{ errors.experience }}
            </p>
          </div>

          <!-- Формат работы -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Формат работы*</label
            >
            <select
              v-model="formData.work_format"
              @blur="validateField('work_format')"
              :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.work_format ? 'border-red-500' : 'border-gray-300',
              ]"
            >
              <option value="" disabled>Выберите формат работы</option>
              <option value="office">Офис</option>
              <option value="remote">Удалённо</option>
              <option value="hybrid">Гибридный</option>
            </select>
            <p v-if="errors.work_format" class="mt-1 text-sm text-red-600">
              {{ errors.work_format }}
            </p>
          </div>

          <!-- Город -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Город*</label>
            <input
              type="text"
              v-model="formData.city"
              @blur="validateField('city')"
              :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.city ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="Например: Москва"
            />
            <p v-if="errors.city" class="mt-1 text-sm text-red-600">{{ errors.city }}</p>
          </div>

          <!-- Описание вакансии -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Описание вакансии*</label
            >
            <textarea
              v-model="formData.description"
              @blur="validateField('description')"
              rows="6"
              :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.description ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="Опишите обязанности, требования и условия работы"
            ></textarea>
            <p v-if="errors.description" class="mt-1 text-sm text-red-600">
              {{ errors.description }}
            </p>
          </div>

          <!-- Навыки -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Требуемые навыки*</label
            >
            <input
              type="text"
              v-model="formData.required_skills"
              @blur="validateField('required_skills')"
              :class="[
                'w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500',
                errors.required_skills ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="Перечислите навыки через запятую"
            />
            <p v-if="errors.required_skills" class="mt-1 text-sm text-red-600">
              {{ errors.required_skills }}
            </p>
          </div>
        </div>
      </div>

      <!-- Кнопки действий -->
      <div class="flex justify-between">
        <button
          @click="cancel"
          class="px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors"
        >
          Отменить
        </button>

        <AppButton text="'авторизоваться'" class="w-4/12 active" @click="submitForm" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../AppButton.vue";

export default {
  data() {
    return {
      formData: {
        name: "",
        salary: "",
        currency: "",
        experience: "",
        work_format: "",
        city: "",
        description: "",
        required_skills: "",
        created_at: new Date().toISOString().split("T")[0],
      },
      errors: {
        name: "",
        currency: "",
        experience: "",
        work_format: "",
        city: "",
        description: "",
        required_skills: "",
      },
    };
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
      let isValid = true;
      const requiredFields = [
        "name",
        "currency",
        "experience",
        "work_format",
        "city",
        "description",
        "required_skills",
      ];

      requiredFields.forEach((field) => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      return isValid;
    },
    components: [AppButton],
    submitForm() {
      if (this.validateForm()) {
        console.log("Форма вакансии отправлена:", this.formData);
        // Здесь будет логика отправки формы
        // this.$router.push("/vacancies");
      }
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>
