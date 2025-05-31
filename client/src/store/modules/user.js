// user.js
import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async updateUser({ commit }, userData) {
      try {
        const response = await api.auth.updateUser(userData.id, userData.dataToUpdate)
        
        commit('setUser', response.data.user)
        localStorage.removeItem('token')
        localStorage.setItem('token', response.data.newToken)
        
        return response.data
      } catch (error) {
        console.error('Update user error:', error)
        throw error
      }
    },
  },
}