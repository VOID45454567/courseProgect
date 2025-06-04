import vacancyRepository from "../repositories/vacancyRepository.js";

class vacancyService {
  async create(data) {
    try {
      const vacancy = await vacancyRepository.createVacancy(data);
      return vacancy
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
        const vacancy = await vacancyRepository.getOne(id)
        return vacancy
    } catch (error) {
        console.log(error);
        
    }
  }
  async getAll(){
    try {
        const vacances = await vacancyRepository.getAll()
        return vacances
    } catch (error) {
        console.log(error);
        
    }
  }
  async delete(id){
    try {
        const deleted = await vacancyRepository.deleteVacancy(id)
        return deleted
    } catch (error) {
        console.log(error);
        
    }
  }
  async update(id, data){
    try {
        const updated = await vacancyRepository.updateVacancy(id, data)
        return updated
    } catch (error) {
        console.log(error);
        
    }
  }
  async getByUserId(id){
    try {
      console.log(id);
      
      const vacances = await vacancyRepository.getAllUserVacances(id)
      return vacances      
    } catch (error) {
      console.log(error);
    }
  }
}
export default new vacancyService()