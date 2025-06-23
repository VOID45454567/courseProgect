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
  async getById(req, res) {
    try {
      const id = req.params.id;
      const resume = await resumeService.getById(id);
      res.status(200).json(resume);
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
      const data = req.body.dataToUpdate;
      const resume_id = req.params.id;
      const newResume = await resumeService.update(data, resume_id);
      return res.status(200).json(newResume);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async delete(req, res) {
    try {
      const user_id = req.params.id;
      await resumeService.delete(user_id);
      return res.status(204).json({ message: "Успешно удаленно" });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async addResponce(req, res) {
    try {
      const employerId = req.body.userId;
      const resumeId = req.params.id;
      const request = await resumeService.addResponse(resumeId, employerId);
      if (!request.success) {
        res.status(409).json({ message: request.message });
      } else {
        res.status(200).json({ message: request.message });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async getResponces(req, res) {
    try {
      const userId = req.params.id;
      const responses = await resumeService.getResponces(userId);
      res.json(responses);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new ResumeController();
