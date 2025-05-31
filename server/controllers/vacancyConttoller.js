import vacancyService from "../services/vacancyService.js";

class vacancyController {
  async create(req, res) {
    try {
        const newVacancy = await vacancyService.create(req.body)
        res.json(newVacancy) 
    } catch (error) {
        console.log(error);
        
    }
  }
  async delete(req, res) {
    try {
        const id = req.params.id
        const deleted = await vacancyService.delete(id)
        res.json(deleted)
    } catch (error) {
        console.log(error);
        
    }
  }
  async update(req, res) {
    try {
        const id = req.params.id
        const data = req.body
        const updated = await vacancyService.update(id, data)
        res.json(updated)
    } catch (error) {
        console.log(error);
        
    }
  }
  async getOne(req, res) {
    try {
        const id = req.params.id 
        const deleted = await vacancyService.getOne(id)
        res.json(deleted)
    } catch (error) {
        console.log(error);
        
    }
  }
  async getAll(req, res) {
    try {
        const all = await vacancyService.getAll()
        res.json(all)
    } catch (error) {
        console.log(error);
        
    }
  }
}
export default new vacancyController()