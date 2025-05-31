import userService from "../services/userService.js";

class UserController {
  async getAll(req, res) {
    try {
      const users = await userService.getAllUers();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(req, res) {
    try {
      const id = req.params.id;
      const user = await userService.getUserByID(id);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  }
   async updateUser(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      
      const updatedUser = await userService.updateUser(id, data);
      res.json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const deletedUser = await userService.deleteUser(id);
      res.json(deletedUser);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new UserController();
