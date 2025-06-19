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
      return resume
    } catch (error) {
      return {
        error: error,
      }
    }
  }
}
export default new resume()
