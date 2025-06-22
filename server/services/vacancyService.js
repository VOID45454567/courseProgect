import userRepository from "../repositories/userRepository.js";
import vacancyRepository from "../repositories/vacancyRepository.js";

class vacancyService {
  async create(data) {
    try {
      const vacancy = await vacancyRepository.createVacancy(data);
      return vacancy;
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const vacancy = await vacancyRepository.getOne(id);
      const user = await userRepository.getUserByVacancyId(id);

      return {
        vacancy: vacancy,
        user: user,
      };
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const vacances = await vacancyRepository.getAll();
      return vacances;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(id) {
    try {
      const deleted = await vacancyRepository.deleteVacancy(id);
      return deleted;
    } catch (error) {
      console.log(error);
    }
  }
  async update(id, data) {
    try {
      const updated = await vacancyRepository.updateVacancy(id, data);
      return updated;
    } catch (error) {
      console.log(error);
    }
  }
  async getByUserId(id) {
    try {
      // console.log(id);

      const vacances = await vacancyRepository.getAllUserVacances(id);
      return vacances;
    } catch (error) {
      console.log(error);
    }
  }
  async addResponce(userId, vacancyId) {
    try {
      const request = await vacancyRepository.addResponse(
        userId,
        parseInt(vacancyId)
      );
      return request;
    } catch (error) {
      console.log(error);
    }
  }
  async getMyResponses(userId) {
    try {
      const responses = await vacancyRepository.getMyResponses(userId);
      return responses;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new vacancyService();
