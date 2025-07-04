import axios from 'axios'
import { apiUrl } from '..'

class feedback {
  async create(data) {
    const newFeedback = await axios.post(`${apiUrl}/feedback/`, {
      data: data,
    })
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
  async deleteOne(id) {
    await axios.delete(`${apiUrl}/feedback/${id}`)
  }
}
export default new feedback()
