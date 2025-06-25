import express from "express";
import resumeController from "../controllers/resumeController.js";

const resumeRouter = new express.Router();

resumeRouter.post("/", resumeController.create);
resumeRouter.post("/:id", resumeController.addResponce);
resumeRouter.get("/:id", resumeController.getById);
resumeRouter.get("/responses/:id", resumeController.getResponces);
resumeRouter.get("/users/:userId", resumeController.getByUserId);
resumeRouter.get("/", resumeController.getAll);
resumeRouter.delete("/user/:id", resumeController.delete);
resumeRouter.delete("/:id", resumeController.deleteById);
resumeRouter.put("/:id", resumeController.update);

export default resumeRouter;
