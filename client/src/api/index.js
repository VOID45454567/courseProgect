import axios from 'axios'

const apiUrl = 'http://localhost:8080/api'
class api {
  async login(userData) {
    const user = await axios.post(`${apiUrl}/auth/login/`, userData)
    return user
  }
  async register(userData) {
    const user = await axios.post(`${apiUrl}/auth/register`, userData)
    return user
  }
  async getCurrentUser(token) {
    const user = await axios.get(`${apiUrl}/auth/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return user
  }
}
export default new api()
