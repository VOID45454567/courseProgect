import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async addFeedback({ commit, dispatch }, data) {
      return (await api.feedback.create(data)).data
    },
    async getOne(id) {
      return (await api.feedback.getOne(id)).data
    },
    async getAll() {
      return (await api.feedback.getAll()).data
    },
  },
}
