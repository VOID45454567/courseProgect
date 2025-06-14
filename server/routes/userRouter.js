import express from "express";

const userRouter = new express.Router();
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

userRouter.get("/", authMiddleware.isAdmin, userController.getAll);
userRouter.get("/:id", userController.getOne);
userRouter.delete("/:id", authMiddleware.isAdmin, userController.deleteUser);
userRouter.put("/:id", userController.updateUser);
export default userRouter;
