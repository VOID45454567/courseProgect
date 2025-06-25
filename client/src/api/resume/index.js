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
  async getById(id) {
    try {
      const resume = await axios.get(`${apiUrl}/resumes/${id}`)
      return resume.data
    } catch (error) {
      return error
    }
  }
  async fetchAllResumes() {
    try {
      const resumes = await axios.get(`${apiUrl}/resumes`)
      return resumes.data
    } catch (error) {
      return error
    }
  }
  async addResponce(resume_id, userId) {
    try {
      const request = await axios.post(`${apiUrl}/resumes/${resume_id}`, {
        userId: userId,
      })
      return request
    } catch (error) {
      return error
    }
  }
  async removeResponce(resume_id, userId) {
    try {
      const request = await axios.post(`${apiUrl}/resumes/${resume_id}`, {
        userId: userId,
      })
      return request
    } catch (error) {
      return error
    }
  }
  async updateResume(data) {
    try {
      const updatedResume = await axios.put(`${apiUrl}/resumes/${data.id}`, {
        dataToUpdate: data,
      })
      return updatedResume.data
    } catch (error) {
      console.log(error)
    }
  }
  async delete(id) {
    try {
      const responce = await axios.delete(`${apiUrl}/resumes/user/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  async deleteById(id) {
    try {
      await axios.delete(`${apiUrl}/resumes/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
}
export default new resume()
