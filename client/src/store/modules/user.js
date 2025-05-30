import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async updateUser({ commit }, userData) {
      try {
        console.log(userData);
        const updatedUser = await api.updateUser(userData.id, userData.dataToUpdate)
        console.log(updatedUser);
      } catch (error) {
        return error
      }
    },
  },
}
