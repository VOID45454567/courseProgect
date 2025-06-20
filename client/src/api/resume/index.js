import axios from 'axios'
import { apiUrl } from '..'

class resume {
  async create(data) {
    const newResume = await axios.post(`${apiUrl}/resumes`, data)
    return newResume
  }
  async fetchUserResume(user_id) {
    try {
      const resume = await axios.get(`${apiUrl}/resumes/users/${user_id}`)
      return resume.data
    } catch (error) {
      return {
        error: error,
      }
    }
  }
  async fetchAllResumes() {
    try {
      const resumes = await axios.get(`${apiUrl}/resumes`)
      // console.log(resumes)

      return resumes.data
    } catch (error) {
      return error
    }
  }
}
export default new resume()
