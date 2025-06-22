import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async updateUser({ commit }, userData) {
      try {
        const response = await api.auth.updateUser(userData.id, userData.dataToUpdate)
        commit('auth/setUser', response.data.user, { root: true })
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.setItem('token', response.data.newToken)
        localStorage.setItem('token', response.data.user)

        return response.data
      } catch (error) {
        console.error('Update user error:', error)
        throw error
      }
    },
    async getMyResponses({ commit, dispatch }) {
      const user = JSON.parse(localStorage.getItem('user'))
      const role = user.role
      const id = user.id
      try {
        const responses = await api.user.getMyResponces(id, role)
        // console.log(responses)
        return responses.data
      } catch (error) {
        console.log(error)
      }
    },
  },
}
