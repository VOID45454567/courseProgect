class authMiddleware {
  isAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === "admin") {
      next();
    } else {
      res.status(403).json({ error: "Доступ запрещенн" });
    }
  }
}
export default new authMiddleware();
