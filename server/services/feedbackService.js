import feedbackRepository from "../repositories/feedbackRepository.js";

class FeedbackServise {
  async create(data) {
    try {
      const newFeedback = await feedbackRepository.addFeedback(data);
      return newFeedback;
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const one = await feedbackRepository.getOne(id);
      return one;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const all = await feedbackRepository.getFeedback();
      return all;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new FeedbackServise();
