import axios from 'axios'
import { apiUrl } from '..'
class auth {
  async login(userData) {
    const user = await axios.post(`${apiUrl}/auth/login/`, userData)
    return user
  }
  async register(userData) {
    try {
      const user = await axios.post(`${apiUrl}/auth/register/`, userData)
      return user
    } catch (error) {
      console.log(error)
      return error
    }
  }
  async getCurrentUser(token) {
    const user = await axios.get(`${apiUrl}/auth/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return user
  }
  async updateUser(id, data) {
    try {
      const updatedUser = await axios.put(`${apiUrl}/users/${id}`, data)
      return updatedUser
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
export default new auth()
