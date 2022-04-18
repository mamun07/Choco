import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

import Routers from "./routes/userRouter.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express());
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

// Conecting Mongoose db.....
const DB_URL = process.env.MONGO_URL;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database information......
const db = mongoose.connection;
db.on("error", () => console.log("Database Connection error"));
db.once("open", () => console.log("Database Connect successfully !"));
