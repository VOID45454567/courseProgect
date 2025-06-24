<template>
  <div
    class="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 blur-xl">
    </div>
    <div class="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 blur-xl">
    </div>

    <!-- Subscription card -->
    <div
      class="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-10 border border-white/20 transform transition-all duration-300 hover:shadow-indigo-500/30 hover:scale-[1.02] relative z-10">
      <!-- Header -->
      <div class="flex items-center gap-3 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" class="text-white">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <h2 class="text-2xl font-bold text-white">Оставайтесь на связи</h2>
      </div>

      <!-- Description -->
      <p class="text-white/80 mb-8 max-w-sm">
        Подпишитесь на наши обновления и получайте последние новости прямо на вашу почту.
      </p>

      <!-- Subscription form -->
      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3">
        <!-- Email input -->
        <div class="relative flex-grow">
          <input v-model="email" type="email" placeholder="Введите ваш email" required
            class="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all" />
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 14.5 2 4" />
          </svg>
        </div>

        <!-- Submit button -->
        <button type="submit" :disabled="!email"
          class="px-6 py-3 font-semibold rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
          :class="{
            'bg-white text-indigo-700': email,
            'bg-gray-400 cursor-not-allowed': !email
          }" style="background-color: #4a3aff; color: white">
          Подписаться
        </button>
      </form>

      <!-- Confirmation message -->
      <div class="mt-8 flex items-center gap-2 text-white/70 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" class="flex-shrink-0">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        <span>Без спама. Только важные обновления.</span>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref } from 'vue';

const email = ref('');
const handleSubmit = () => {
  if (email.value) {
    alert(`Спасибо за подписку! ${email.value}`);
    email.value = '';
  }
};
</script>