import { createStore } from 'vuex'
import api from '@/api/index.js'
const store = createStore({
  state() {
    return {
      currentUser: null,
      token: localStorage.getItem('token') || null,
    }
  },
  mutations: {
    setUser(state, user) {
      state.currentUser = user
    },
    setToken(state, token) {
      state.token = token
    },
    cleanAuth(state) {
      state.token = null
      state.currentUser = null
      localStorage.removeItem('token')
    },
  },
  getters: {
    currentUser(state) {
      return state.currentUser
    },
    isAuthenticated(state) {
      return !!state.token
    },
  },
  actions: {
    async login({ commit }, userData) {
      const user = await api.login(userData)
      commit('setUser', user.data.user)
      commit('setToken', user.data.token)
    },
    logout({ commit }) {
      commit('cleanAuth')
    },
    async register({ commit }, userData) {
      const user = await api.register(userData)
      console.log(user)
      localStorage.setItem('token', user.data.token)
      commit('setToken', user.data.token)
      commit('setUser', user.data.user)
    },
    async fetchUser({ commit, state }) {
      if (!state.token) {
        return null
      } else {
        try {
          const response = await api.getCurrentUser(state.token)
          commit('setUser', response.data.user)
          return response.data.user
        } catch (error) {
          commit('cleanAuth')
          console.log(error)
          return null
        }
      }
    },
  },
  modules: {},
})
export default store
