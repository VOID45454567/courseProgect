import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async updateUser({ commit }, userId, dataToUpdate) {
      try {
        const updatedUser = api.updateUser(userId, dataToUpdate)
        console.log(updatedUser);
      } catch (error) {
        return error
      }
    },
  },
}
