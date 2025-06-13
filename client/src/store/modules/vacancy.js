import api from "@/api"

export default {
    namespaced: true,
    actions: {
        async createVacancy({commit, dispatch}, data) {
            try {
                const newVacancy = await api.vacancy.createVacancy(data)
                return newVacancy
            } catch (error) {
                console.log(error);
            }
        },
        async fetchUserVacancies({commit, dispatch}, id){
            try {
                const vacances = await api.vacancy.getAllUserVacances(id)                
                return vacances
            } catch (error) {
                console.log(error);
                
            }
        }
    },
}