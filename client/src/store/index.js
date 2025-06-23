import { createStore } from 'vuex'
import auth from './modules/auth.js'
import user from './modules/user.js'
import vacancy from './modules/vacancy.js'
import resume from './modules/resume.js'
import feedback from './modules/feedback.js'

const store = createStore({
  modules: {
    auth,
    user,
    vacancy,
    resume,
    feedback,
  },
})
export default store
