import "dotenv/config";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
try {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
