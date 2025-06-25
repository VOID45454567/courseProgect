import { Router } from "express";
import feedbackController from "../controllers/feedbackController.js";

const feedbackRouter = new Router();

feedbackRouter.post("/", feedbackController.create);
feedbackRouter.get("/", feedbackController.getAll);
feedbackRouter.get("/:id", feedbackController.getOne);
feedbackRouter.delete("/:id", feedbackController.deleteOne);

export default feedbackRouter;
