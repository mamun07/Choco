import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

import userRouters from "./routes/userRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import uploadRouter from "./routes/uploadRouter.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Server port.....
const PORT = process.env.ACCESS_PORT;
app.listen(PORT, () => console.log(`Server Running at ${PORT}`));

// Page Routing.....
app.use("/user", userRouters);
app.use("/api", categoryRouter);
app.use("/api", uploadRouter);

// Conecting Mongoose.....
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connection successful!");
} catch (err) {
  console.log("MongoDB connection error !");
}
