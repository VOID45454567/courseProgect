class authMiddleware {
  isAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role === "admin") {
      next();
    } else {
      res.status(403).json({ error: "Forbidden" });
    }
  }
}
export default new authMiddleware()
