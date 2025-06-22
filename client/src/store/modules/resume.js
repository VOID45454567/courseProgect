import api from '@/api'

export default {
  namespaced: true,
  actions: {
    async createResume({ commit, dispatch }, data) {
      const resume = await api.resume.create(data)
      return resume
    },
    async fetchUserResume({ commit, dispatch }, user_id) {
      const resume = await api.resume.fetchUserResume(user_id)

      return resume
    },
    async fetchAllResumes({ commit, dispatch }) {
      const resumes = await api.resume.fetchAllResumes()
      return resumes
    },
    async addResponce({ commit, dispatch }, data) {
      try {
        const request = await api.resume.addResponce(data.resumeId, data.userId)
        return request
      } catch (error) {
        console.log(error)
      }
    },
  },
}
