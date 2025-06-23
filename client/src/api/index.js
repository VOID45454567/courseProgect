import auth from './auth'
import feedback from './feedback'
import resume from './resume'
import user from './user'
import vacancy from './vacancy'

export const apiUrl = 'http://localhost:3000/api'

export default {
  auth: auth,
  resume: resume,
  vacancy: vacancy,
  user: user,
  feedback: feedback,
}
