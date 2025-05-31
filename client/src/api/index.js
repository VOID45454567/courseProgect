import auth from "./auth"
import resume from "./resume"
import vacancy from "./vacancy"

export const apiUrl = 'http://localhost:8080/api'

export default {
    auth: auth,
    resume: resume,
    vacancy: vacancy
}