import api from "../index.js";
import { apiUrl } from "..";

class vacancy {
    async createVacancy(data){
        try {
            const request = await api.post(`${apiUrl}/vacances`, data);
            return request.data;
        } catch (error) {
            console.log(error);
            
        }
    }
    async getOne(id){
        try {
            const request = await api.get(`${apiUrl}/vacances/${id}`);
            return request.data;
        } catch (error) {
            console.log(error);
            
        }
    }
    async getAll(){
        try {
            const request = await api.get(`${apiUrl}/vacances`);
            return request.data;
        } catch (error) {
            console.log(error);
            
        }
    }
    async update(data){
        try {
            const request = await api.put(`${apiUrl}/vacances/${data.id}`, data);
            return request.data;
        } catch (error) {
            console.log(error);
            
        }
    }
    async delete(id){
        try {
            const request = await api.delete(`${apiUrl}/vacances/${id}`);
            return request.data;
        } catch (error) {
            console.log(error);
        }
    }
}
export default new vacancy()