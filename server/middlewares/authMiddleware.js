import jwt from "jsonwebtoken";
class authMiddleware {
  isAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      res.status(401).json({ message: "Авторизуйся" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decoded.role === "admin") {
      next();
    } else {
      res.status(403).json({ error: "Доступ запрещенн" });
    }
  }
}
export default new authMiddleware();
