import express from "express";
import resumeController from "../controllers/resumeController.js";

const resumeRouter = new express.Router();

resumeRouter.post("/", resumeController.create);
resumeRouter.post("/:id", resumeController.addResponce);
resumeRouter.get("/:id", resumeController.getById);
resumeRouter.get("/responses/:id", resumeController.getResponces);
resumeRouter.get("/users/:userId", resumeController.getByUserId);
resumeRouter.get("/", resumeController.getAll);
resumeRouter.delete("/:id", resumeController.delete);
resumeRouter.put("/:id", resumeController.update);

export default resumeRouter;
