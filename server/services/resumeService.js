import resumeRepository from "../repositories/resumeRepository.js";
import userRepository from "../repositories/userRepository.js";

class ResumeService {
  async create(data, user_id) {
    try {
      const newResume = await resumeRepository.createResume(data, user_id);
      return newResume;
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id) {
    try {
      const resume = await resumeRepository.getById(id);
      return resume;
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(user_id) {
    try {
      const resume = await resumeRepository.getByUserId(user_id);
      const user = await userRepository.getUserByID(user_id);
      return {
        resume: resume,
        user: user,
      };
    } catch (error) {
      console.log("error" + error);
    }
  }
  async getAll() {
    try {
      const resumes = await resumeRepository.getAll();

      return resumes;
    } catch (error) {
      return error;
    }
  }
  async update(data, resume_id) {
    try {
      const updatedResume = await resumeRepository.udapteResume(
        resume_id,
        data
      );
      return updatedResume;
    } catch (error) {
      console.log(error);
    }
  }
  async delete(user_id) {
    try {
      const deletedResume = await resumeRepository.deleteResume(user_id);
      return deletedResume;
    } catch (error) {
      console.log(error);
    }
  }
  async addResponse(resumeId, employerId) {
    try {
      const request = await resumeRepository.addResponse(employerId, resumeId);
      return request;
    } catch (error) {
      return error;
    }
  }
  async getResponces(userId) {
    try {
      const responses = await resumeRepository.getResponces(userId);
      return responses;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new ResumeService();
