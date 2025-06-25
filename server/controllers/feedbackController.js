import feedbackService from "../services/feedbackService.js";

class FeedbackController {
  async create(req, res) {
    try {
      const data = req.body.data;
      console.log(data);

      const newFeedback = await feedbackService.create(data);
      res.status(200).json(newFeedback);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const all = await feedbackService.getAll();
      res.status(200).json(all);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(req, res) {
    const id = req.params.id;
    try {
      const one = await feedbackService.getOne(id);
      res.status(200).json(one);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteOne(req, res) {
    console.log(req.params);

    const id = req.params.id;
    try {
      await feedbackService.deleteOne(id);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new FeedbackController();
