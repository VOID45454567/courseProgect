import api from '@/api/index.js'

export default {
  namespaced: true,
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
      try {
        const user = await api.auth.login(userData)

        localStorage.setItem('token', user.data.token)
        commit('setUser', user.data.user)
        commit('setToken', user.data.token)
      } catch (error) {
        console.log(error)
        return {
          message : 'error'
        }
      }
    },
    logout({ commit }) {
      commit('cleanAuth')
    },
    async register({ commit }, userData) {
      const user = await api.auth.register(userData)
      localStorage.setItem('token', user.data.token)
      commit('setToken', user.data.token)
      commit('setUser', user.data.user)
    },
    async fetchUser({ commit, state }) {
      if (!state.token) {
        return null
      } else {
        try {
          const response = await api.auth.getCurrentUser(state.token)
          commit('setUser', response.data)
          return response.data
        } catch (error) {
          commit('cleanAuth')
          console.log(error)
          return null
        }
      }
    },
  },
}
