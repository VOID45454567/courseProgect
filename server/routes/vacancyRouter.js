import express from "express";
import vacancyConttoller from "../controllers/vacancyConttoller.js";

const vacancyRouter = new express.Router();

vacancyRouter.post("/", vacancyConttoller.create);
vacancyRouter.post("/:id", vacancyConttoller.addResponce);
vacancyRouter.post("/favorite/:id", vacancyConttoller.addToFavorite);
vacancyRouter.get("/", vacancyConttoller.getAll);
vacancyRouter.get("/user/:id", vacancyConttoller.getAllByid);
vacancyRouter.get("/:id", vacancyConttoller.getOne);
vacancyRouter.delete("/:id", vacancyConttoller.delete);
vacancyRouter.put("/:id", vacancyConttoller.update);

export default vacancyRouter;
