import express from "express";
import resumeController from "../controllers/resumeController.js";

const resumeRouter = new express.Router();

resumeRouter.post("/", resumeController.create);
resumeRouter.get("/users/:id", resumeController.getByUserId);
resumeRouter.delete("/:id", resumeController.delete);
resumeRouter.put("/:id", resumeController.update);

export default resumeRouter;
