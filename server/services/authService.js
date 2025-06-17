import userRepository from "../repositories/userRepository.js";
import bcrypt from "bcrypt";
import jwtConfig from "../config/jwt.js";
import jwt from "jsonwebtoken";
class authService {
  async register(userData) {
    try {
      const user = await userRepository.createUser(userData);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return user;
    } catch (error) {
      return error;
    }
  }
  async login(userData) {
    try {
      const user = await userRepository.getUserByEmail(userData.email);
      if (!user) {
        return { error: "Invalid email" };
      }
      const isMatch = await bcrypt.compare(userData.password, user.password);
      if (!isMatch) {
        return { error: "Invalid password" };
      }
      const token = jwtConfig.createToken(user);
      console.log("token", token);
      return { user, token };
    } catch (error) {
      console.log(error);
      return { error: "Login failed" };
    }
  }
  async getCurrentUser(token) {
    try {
      // console.log(token);

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY || "defaul-secret"
      );
      const user = await userRepository.getUserByID(decoded.id);
      return user;
    } catch (error) {
      console.error("Token verification failed:", error);
      return { error: "Invalid token" };
    }
  }
}
export default new authService();
