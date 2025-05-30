<template>
  <div class="min-h-screen flex items-center justify-center p-4 bg-gray-50">
    <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
      <h1 class="text-center font-bold text-3xl mb-8 text-primary-500">Авторизация</h1>

      <div class="space-y-6">
        <div v-for="(fieldName, index) in colums" :key="index">
          <label class="block text-gray-700 font-medium">{{
            getFieldLabel(fieldName)
          }}</label>
          <div class="relative">
            <input
              :type="getInputType(fieldName)"
              v-model="formData[fieldName]"
              @blur="validateField(fieldName)"
              :class="[
                'w-full h-12 pl-12 border-2 rounded-full focus:outline-none focus:ring-4 transition-all',
                errors[fieldName]
                  ? 'border-red-500 focus:ring-red-200'
                  : 'border-primary-500 focus:ring-primary-300',
              ]"
            />
            <img
              :src="getImageUrl(fieldName)"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6"
            />
          </div>
          <p v-if="errors[fieldName]" class="mt-1 text-sm text-red-600">
            {{ errors[fieldName] }}
          </p>
        </div>
        <p v-if="login" class="mt-1 text-sm text-red-600">
          {{ loginError }}
        </p>
        <AppButton :text="'Авторизоваться'" class="active w-full" @click="submitForm" />

        <div class="text-gray-600 my-0">нет аккаунта?</div>
        <AppButton
          :text="'Зарегистрироваться'"
          class="unactive w-full"
          @click="$router.push('/registration')"
        />
        <button
          class="w-full cursor-pointer text-gray-700 hover:text-primary-500 transition-colors"
        >
          Забыли пароль?
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  data() {
    return {
      colums: ["email", "password"],
      formData: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      loginError: "Неправильный email или пароль",
      login: false,
      submitted: false,
    };
  },
  components: {
    AppButton,
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../assets/icons/${name}.png`, import.meta.url).href;
    },
    getInputType(fieldName) {
      return fieldName.toLowerCase().includes("password") ? "password" : "text";
    },
    getFieldLabel(fieldName) {
      const labels = {
        email: "Email",
        password: "Пароль",
      };
      return labels[fieldName] || fieldName;
    },
    validateField(fieldName) {
      if (!this.submitted) return;

      if (!this.formData[fieldName]) {
        this.errors[fieldName] = "Это поле обязательно для заполнения";
        return false;
      }

      if (fieldName === "email" && !this.validateEmail(this.formData.email)) {
        this.errors.email = "Введите корректный email";
        return false;
      }

      this.errors[fieldName] = "";
      return true;
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validateForm() {
      this.submitted = true;
      let isValid = true;

      this.colums.forEach((field) => {
        if (!this.validateField(field)) {
          isValid = false;
        }
      });

      return isValid;
    },
    async submitForm() {
      if (!this.validateForm()) {
        return;
      }
      try {
        const response = await this.$store.dispatch("auth/login", this.formData);
        console.log(response);
        if (response.error) {
          this.login = true;
        }
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
