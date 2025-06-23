import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async updateUser({ commit }, userData) {
      try {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        const response = await api.auth.updateUser(userData.id, userData.dataToUpdate)
        commit('auth/setUser', response.data.user, { root: true })
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
    async getAllUsers(commit, dispatch) {
      const token = localStorage.getItem('token')
      try {
        const users = await api.user.getAllUsers(token)
        return users.data
      } catch (error) {
        console.log(error)
      }
    },
    async deleteUser({ commit, dispatch }, id) {
      const token = localStorage.getItem('token')
      try {
        await api.user.deleteUser(id, token)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
