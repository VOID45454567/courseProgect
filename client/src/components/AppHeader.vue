<template>
  <div class="w-full border-b-2 border-gray-300 py-4">
    <div class="w-5/6 mx-auto flex items-center justify-between">
      <div class="flex items-center shrink-0">
        <h1
          class="text-3xl font-bold text-primary-500 cursor-pointer"
          @click="this.$router.push('/')"
        >
          HRRecruit
        </h1>
      </div>
      <div class="flex flex-row justify-between gap-5 shrink-0 items-center w-6/12">
        <!-- <router-link v-for="(item, index) in categories" :key="index" :to="item.link"
          ><button
            class="hover: cursor-pointer"
            :key="index"
            @click="this.$router.push(item.link)"
          >
            {{ item.name }}
          </button></router-link
        > -->

        <p
          v-if="currentUser"
          @click="this.$router.push('/profile')"
          class="text-primary-500 font-bold hover:cursor-pointer"
        >
          {{ currentUser.name }}
        </p>
        <AppButton
          v-else
          :text="'авторизоваться'"
          class="w-4/12 active"
          @click="$router.push('/login')"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      categories: [
        {
          name: "Резюме",
          link: "/search",
        },
        {
          name: "Избранное",
          link: "/favorite",
        },
        {
          name: "Отклики",
          link: "/responses",
        },
        {
          name: "О нас",
          link: "/about",
        },
      ],
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
  },
};
</script>
