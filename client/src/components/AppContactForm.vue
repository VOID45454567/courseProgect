<template>
  <section class="py-16 bg-primary-50">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h2 class="text-2xl font-bold text-center mb-6 text-primary-600">Свяжитесь с нами</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-gray-700 font-medium mb-1">Ваше имя</label>
            <input 
              type="text" 
              class="w-full h-12 px-4 border-2 border-primary-200 rounded-full focus:outline-none focus:ring-4 focus:ring-primary-300 transition-all"
            >
            <AppButton :text="'Оставить заявку'" class="w-full active mt-5"></AppButton>
          </div>
          
          
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AppButton from "./AppButton.vue";
export default{
    components: {
        AppButton
    }
}
</script>