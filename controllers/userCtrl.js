import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// User Register section.....
export const register = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const user = await Users.findOne({ email });

    if (user) return res.status(400).json({ msg: "The email already exists" });

    // Phone umber check.....
    if (phone.length < 11)
      return res
        .status(400)
        .json({ msg: "Phone number is at least 11 characters long" });

    // Password number check.....
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password is at least 6 characters long" });

    // Password Encryption........
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new Users({ name, phone, email, password: passwordHash });

    // Save new user in db....
    await newUser.save();

    // The jsonwebtoken to authentication
    const accesstoken = createAccessToken({ id: newUser._id });
    const refreshtoken = createRefreshAccessToken({ id: newUser._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });

    res.json({ msg: accesstoken });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// User login section.....
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.json({ msg: "User dose not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ msg: "Incorrect Password." });

    // if login success, create access token & refresh token
    const accesstoken = createAccessToken({ id: user._id });
    const refreshtoken = createRefreshAccessToken({ id: user._id });

    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
      path: "/user/refresh_token",
    });

    res.json({ msg: accesstoken });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// User logout section.....
export const logout = async (req, res) => {
  try {
    res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
    return res.json({ msg: "logged Out" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user.id).select("password");
    if (!user) return res.status(400).json({ msg: "User dose not exist." });
    res.json(user);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// User refresh token section.....
export const refreshToken = (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token)
      return res.status(400).json({ msg: "Please Login or Register" });
    jwt.verify(rf_token, process.env.REFRSH_ACCESS_TOKEN_SECRT, (err, user) => {
      if (err) return res.status(400).json({ msg: "Please Login or Register" });
      const accesstoken = createAccessToken({ id: user.id });
      res.json({ user, accesstoken });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// Create access token.....
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRT, { expiresIn: "1d" });
};
// Create refresh access token.....
const createRefreshAccessToken = (user) => {
  return jwt.sign(user, process.env.REFRSH_ACCESS_TOKEN_SECRT, {
    expiresIn: "7d",
  });
};
