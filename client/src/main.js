import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
async function initApp() {
  try {
    await store.dispatch('auth/fetchUser')
  } catch (error) {
    store.commit('clearAuth')
    console.error('Ошибка при проверке аутентификации', error)
  }
}
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
initApp()
