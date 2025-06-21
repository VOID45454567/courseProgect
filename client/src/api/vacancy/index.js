import { apiUrl } from '..'
import axios from 'axios'

class vacancy {
  async createVacancy(data) {
    try {
      const request = await axios.post(`${apiUrl}/vacances`, data)
      return request.data
    } catch (error) {
      console.log(error)
    }
  }
  async getOne(id) {
    try {
      const request = await axios.get(`${apiUrl}/vacances/${id}`)
      return request.data
    } catch (error) {
      console.log(error)
    }
  }
  async getAll() {
    try {
      const request = await axios.get(`${apiUrl}/vacances`)
      console.log(request)

      return request.data
    } catch (error) {
      console.log(error)
    }
  }
  async update(data) {
    try {
      const request = await axios.put(`${apiUrl}/vacances/${data.id}`, data)
      return request.data
    } catch (error) {
      console.log(error)
    }
  }
  async delete(id) {
    try {
      const request = await axios.delete(`${apiUrl}/vacances/${id}`)
      return request.data
    } catch (error) {
      console.log(error)
    }
  }
  async getAllUserVacances(idUser) {
    try {
      const request = await axios.get(`${apiUrl}/vacances/user/${idUser}`)

      return request.data
    } catch (error) {
      console.log(error)
    }
  }
  async addResponce(searcherId, vacancyId) {
    try {
      const request = await axios.get(`${apiUrl}/vacances/${vacancyId}`, {
        searcherId: searcherId,
      })
      return request
    } catch (error) {
      console.log(error)
    }
  }
}
export default new vacancy()
