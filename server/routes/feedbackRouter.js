import { Router } from "express";
import feedbackController from "../controllers/feedbackController";

const feedbackRouter = new Router();

feedbackRouter.post("/", feedbackController.create);
feedbackRouter.get("/", feedbackController.getAll);
feedbackRouter.get("/:id", feedbackController.getOne);
