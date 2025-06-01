import api from "@/api"

export default {
    namespaced: true,
    state(){
        return {
            vacances: null
        }
    },
    actions: {
        async createVacancy({commit, dispatch}, data) {
            try {
                const newVacancy = await api.vacancy.createVacancy(data)
                return newVacancy
            } catch (error) {
                console.log(error);
            }
        },
        async fetchUserVacances({commit, dispatch}){
            try {
                // const vacances = await api.vacancy
            } catch (error) {
                
            }
        }
    },
}