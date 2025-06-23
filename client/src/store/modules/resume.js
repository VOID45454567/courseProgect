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
    async fetchResumeById({ commit, dispatch }, id) {
      const resume = await api.resume.getById(id)
      return resume
    },
    async addResponce({ commit, dispatch }, data) {
      try {
        const request = await api.resume.addResponce(data.resumeId, data.userId)
        return request
      } catch (error) {
        console.log(error)
      }
    },
    async updateResume({ commit, dispatch }, data) {
      try {
        const updatedResume = await api.resume.updateResume(data)
        console.log(updatedResume)
        return updatedResume
      } catch (error) {
        console.log(error)
      }
    },
    async deleteResume({ commit, dispatch }, id) {
      console.log(id)
      try {
        await api.resume.delete(id)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
