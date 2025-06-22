import { apiUrl } from '..'
import axios from 'axios'

class user {
  async getMyResponces(userId, userRole) {
    if (userRole === 'searcher') {
      const responses = await axios.get(`${apiUrl}/resumes/${userId}`)
      return responses
    } else {
      const responses = await axios.get(`${apiUrl}/vacances/responses/${userId}`)
      console.log(responses)
      return responses
    }
  }
}
export default new user()
