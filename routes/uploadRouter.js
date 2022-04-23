import cloudinary from "cloudinary";
import { auth } from "../middleware/auth.js";
import { authAdmin } from "../middleware/authAdmin.js";
import express from "express";

const router = express.Router();

// Upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Upload image
router.post("/upload", (req, res) => {
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0)
      return res.status(400).send({ msg: "No files were uploaded." });

    const file = req.files;
    if (file.size > 1024 * 1024)
      return res.status(400).json({ msg: "size too large." });

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg"
    )
      return res.status(400).json({ msg: "File format is incorrect." });

    cloudinary.v2.uploader.upload(
      file.tempFilePath,
      { folder: "test" },
      async (err, result) => {
        if (err) throw err;
        res.json({ result });
      }
    );

    res.json("test upload");
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

export default router;
