import axios from "axios"
import { apiUrl } from ".."

class resume {
    async create (data) {
        const newResume = await axios.post(`${apiUrl}/resumes`, data)
        return newResume
    }
    async fetchUserResume (user_id) {
        const resume = await axios.get(`${apiUrl}/resumes`, user_id)
        return resume
    }

}
export default new resume()