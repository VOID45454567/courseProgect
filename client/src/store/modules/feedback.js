import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async addFeedback({ commit, dispatch }, message) {
      const user = JSON.parse(localStorage.getItem('user'))
      if (!user) {
        return 'не авторизованн'
      }
      const data = {
        message: message,
        userId: user.id,
      }
      return (await api.feedback.create(data)).data
    },
    async getOne(id) {
      return (await api.feedback.getOne(id)).data
    },
    async getAll() {
      return (await api.feedback.getAll()).data
    },
    async deleteOne({ commit, dispatch }, id) {
      console.log(id)

      return (await api.feedback.deleteOne(id)).data
    },
  },
}
