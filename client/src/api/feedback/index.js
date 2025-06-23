import axios from 'axios'
import { apiUrl } from '..'

class feedback {
  async create(data) {
    const newFeedback = await axios.post(`${apiUrl}/feedback/`, data)
    return newFeedback
  }
  async getOne(id) {
    const one = await axios.get(`${apiUrl}/feedback/${id}`)
    return one
  }
  async getAll() {
    const all = await axios.get(`${apiUrl}/feedback/`)
    return all
  }
}
export default new feedback()
