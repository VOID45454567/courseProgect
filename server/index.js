import "dotenv/config";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import vacancyRouter from "./routes/vacancyRouter.js";
import resumeRouter from "./routes/resumeRouter.js";
import feedbackRouter from "./routes/feedbackRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/vacances", vacancyRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/feedback", feedbackRouter);
try {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
