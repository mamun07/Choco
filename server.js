import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

import Routers from "./routes/userRouter.js";

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
app.use("/user", Routers);

// Conecting Mongoose.....
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connection successful!");
} catch (err) {
  console.log("MongoDB connection error !");
}
