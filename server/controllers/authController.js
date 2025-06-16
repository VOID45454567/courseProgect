import authService from "../services/authService.js";

class authController {
  async register(req, res) {
    try {
      const userData = req.body;
      const newUser = await authService.register(userData);
      if (!newUser.error) {
        res.json(newUser);
      } else {
        res.status(409).json("Email уже существует");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async login(req, res) {
    try {
      const userData = req.body;
      const user = await authService.login(userData);
      if (user.error) {
        res.status(401).json({ message: user.error });
      }
      res.json(user);
    } catch (error) {
      return error;
    }
  }
  async getMe(req, res) {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "Not authorized" });
      }
      const userData = await authService.getCurrentUser(token);
      if (userData.error) {
        return error;
      }
      res.json(userData);
    } catch (error) {
      console.error("Get me error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
export default new authController();
