import { createStore } from 'vuex'
import auth from './modules/auth.js'
import user from './modules/user.js'
import vacancy from './modules/vacancy.js'

const store = createStore({
  modules: {
    auth,
    user,
    vacancy
  },
})
export default store
