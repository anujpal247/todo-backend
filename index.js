import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// middlewaes
app.use(express.json());
app.use(cors());

// connect mongodb

mongoose.connect("mongodb://localhost:27017/todo-app");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "DB connection error: "));
db.once("open", () => console.log("connected to mongoDB"));

// import routes
import { router as taskRouter } from "./routes/task.routes.js";

app.use("/tasks", taskRouter);

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
