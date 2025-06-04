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
        async fetchUserVacances({commit, dispatch}, id){
            try {
                const vacances = await api.vacancy.getAllUserVacances(id)                
                console.log(vacances);
            } catch (error) {
                console.log(error);
                
            }
        }
    },
}