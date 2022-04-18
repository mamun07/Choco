import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Users.findOne({ email });

    if (user) return res.status(400).json({ msg: "The email already exists" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password is at least 6 characters long" });

    // Password Encryption........
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new Users({
      name,
      email,
      password: passwordHash,
    });

    // Save user information in mongodb
    await newUser.save();

    // Creating JSON Webtocken to authentication
    const accesstoken = createAccessToken({ id: newUser._id });

    res.json({ accesstoken });
    res.json({ msg: "Register Success!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRT, { expiresIn: "1d" });
};
