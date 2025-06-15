import express from 'express';
import resumeController from '../controllers/resumeController.js';

const resumeRouter = new express.Router();

resumeRouter.post('/resumes', resumeController.create)
resumeRouter.get('/resumes', resumeController.getByUserId)
resumeRouter.delete('/resumes', resumeController.delete)
resumeRouter.put('/resumes', resumeController.update)

export default resumeRouter


