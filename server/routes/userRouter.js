import express from "express";

const userRouter = new express.Router()
import userController from "../controllers/userController.js";
import upload from "../config/multer.js";

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.getOne)
userRouter.delete('/:id', userController.deleteUser)
userRouter.put('/:id', userController.updateUser)
export default userRouter