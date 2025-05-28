import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      currentUser: null,
    }
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
    },
  },
  actions: {
    async login() {},
    async logout() {},
    async register() {},
  },
  modules: {},
})
export default store
