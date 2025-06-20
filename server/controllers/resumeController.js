import resumeService from "../services/resumeService.js";

class ResumeController {
  async create(req, res) {
    try {
      const data = req.body;
      const { user_id } = data;
      const newResume = await resumeService.create(data, user_id);
      return res.status(201).json(newResume);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async getByUserId(req, res) {
    try {
      const user_id = req.params.userId;

      const resume = await resumeService.getOne(user_id);
      if (!resume) {
        res.status(404).json({ message: "Резюме не найденно" });
      }
      return res.status(200).json(resume);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  async getAll(req, res) {
    try {
      const resumes = await resumeService.getAll();
      return res.status(200).json(resumes);
    } catch (e) {
      return e;
    }
  }
  async update(req, res) {
    try {
      const data = req.body;
      const { user_id } = data;
      const newResume = await resumeService.update(data, user_id);
      return res.status(200).json(newResume);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { user_id } = req.body;
      await resumeService.delete(user_id);
      return res.status(204).json({ message: "Resume deleted successfully" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
export default new ResumeController();
