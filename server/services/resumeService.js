import resumeRepository from "../repositories/resumeRepository.js";

class ResumeService {
  async create(data, user_id) {
    try {
        const newResume = await resumeRepository.createResume(data, user_id)
        return newResume;
    } catch (error) {
        console.log(error);
    }
  }
  async getOne(user_id) {
    try {
        const resume = await resumeRepository.getByUserId(user_id)
        return resume;
    } catch (error) {
        console.log("error" + error);
    }
  }
//   async getAll() {
//     try {
//         const resumes = await resumeRepository.getAll()
//     } catch (error) {}
//   }
  async update(data, user_id) {
    try {
        const updatedResume = await resumeRepository.udapteResume(user_id, data)
        return updatedResume;
    } catch (error) {
        console.log(error);
    }
  }
  async delete(user_id) {
    try {
        const deletedResume = await resumeRepository.deleteResume(user_id)
        return deletedResume;
    } catch (error) {}
  }
}
export default new ResumeService();