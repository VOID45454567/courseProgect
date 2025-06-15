import api from "@/api"

export default {
    namespaced: true,
    actions: {
        async createResume({commit, dispatch}, data){
            const resume = await api.resume.create(data)
            return resume
        },
        async fetchUserResume({commit, dispatch}, id){
            
            const resume = await api.resume.fetchUserResume(id)
            console.log(resume);
            
            return resume
        }
    }
}