import vacancyService from "../services/vacancyService.js";

class vacancyController {
  async create(req, res) {
    try {
      const newVacancy = await vacancyService.create(req.body);
      res.json(newVacancy);
    } catch (error) {
      console.log(error);
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      const deleted = await vacancyService.delete(id);
      res.json(deleted);
    } catch (error) {
      console.log(error);
    }
  }
  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const updated = await vacancyService.update(id, data);
      res.json(updated);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(req, res) {
    try {
      const id = req.params.id;
      const vacancy = await vacancyService.getOne(id);
      res.json(vacancy);
    } catch (error) {
      console.log(error);
    }
  }
  async getAll(req, res) {
    try {
      const all = await vacancyService.getAll();
      console.log(all);

      res.json(all);
    } catch (error) {
      console.log(error);
    }
  }
  async getAllByid(req, res) {
    try {
      // console.log("req " + req.params.id);
      const id = req.params.id;
      const vacances = await vacancyService.getByUserId(id);
      // console.log(vacances);
      res.json(vacances);
    } catch (error) {
      console.log(error);
    }
  }
  async addResponce(req, res) {
    const userId = req.body.searcherId;
    const vacancyId = req.params.id;
    try {
      const request = await vacancyService.addResponce(userId, vacancyId);
      res.status(200).json({ message: request.message });
    } catch (error) {
      res.json(error);
    }
  }
  async addToFavorite(req, res) {
    const userId = req.body.searcherId;
    const vacancyId = req.params.id;
    try {
      const request = await vacancyService.addToFavorite(userId, vacancyId);
      res.json(request);
    } catch (error) {
      return error;
    }
  }
}
export default new vacancyController();
