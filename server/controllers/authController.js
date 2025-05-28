import authService from "../services/authService.js";

class authController {
  async register(req, res) {
    try {
      const userData = req.body;
      const newUser = await authService.register(userData);
      if (newUser.error) {
        res.status(409).json({ message: newUser.error });
      }
      res.json(newUser);
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
      return error
    }
  }
  async getMe(req, res) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      
      if (!token) {
        return res.status(401).json({ message: "Not authorized" });
      }
      const userData = await authService.getCurrentUser(token);
      console.log( "userData: " + userData);
      res.json(userData);
    } catch (error) {
      console.error("Get me error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
export default new authController();
