import express, { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import userRouter from "./routes/users.js";

dotenv.config({ path: ".env" });

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

//routes middlewares
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).send("Working");
});

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "dnsTestDB",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
