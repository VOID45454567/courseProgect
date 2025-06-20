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
      console.log(resume)

      return resume
    },
    async fetchAllResumes({ commit, dispatch }) {
      const resumes = await api.resume.fetchAllResumes()
      console.log(resumes)

      return resumes
    },
  },
}
