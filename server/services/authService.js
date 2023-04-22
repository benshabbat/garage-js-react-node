import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

const register = async (req) => {
  const { username, phone, email, password } = req.body;

  //Check if User Exist
  const userExists = await User.findOne({ username });
  if (userExists) return next(createError(400, "User already Exists"));

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    // Create user
    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });
    return {
      _id: newUser._id,
      username: newUser.username,
      phone: newUser.phone,
      email: newUser.email,
    };
  } catch (error) {
    throw Error(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // Check for user username
    const user = await User.findOne({ username });

    if (!user) return next(createError(404, "User not found!"));

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { isAdmin } = user._doc;

    if (user && isPassword) {
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json({
          _id: user.id,
        });
    } else {
      return next(createError(400, "Invalid credentials!"));
    }
} catch (error) {
    throw Error(error);
  }
};

//logout
const logout = async (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
