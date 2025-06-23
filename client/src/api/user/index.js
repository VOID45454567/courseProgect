import { apiUrl } from '..'
import axios from 'axios'

class user {
  async getMyResponces(userId, userRole) {
    if (userRole === 'searcher') {
      const responses = await axios.get(`${apiUrl}/resumes/responses/${userId}`)
      return responses
    } else {
      const responses = await axios.get(`${apiUrl}/vacances/responses/${userId}`)
      console.log(responses)
      return responses
    }
  }
  async getAllUsers(token) {
    try {
      const users = await axios.get(`${apiUrl}/users/`, {
        headers: {
          Authorization: 'Bearer: ' + token,
        },
      })
      return users
    } catch (error) {
      console.log(error)
    }
  }
  async deleteUser(id, token) {
    try {
      await axios.delete(`${apiUrl}/users/${id}`, {
        headers: {
          Authorization: 'Bearer: ' + token,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export default new user()
