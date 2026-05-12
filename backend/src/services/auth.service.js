const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const EMAIL_VALIDATION_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const register = async ({ name, email, password }) => {
  if (!email || !EMAIL_VALIDATION_REGEX.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const existing = await User.findOne({ email });
  if (existing) throw { status: 400, message: "email already registered!" };

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.PASSWORD_HASH_SALT) || 12,
  );
  const user = await User.create({ name, email, password: hashedPassword });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

const login = async ({ email, password }) => {
  console.log("email", email);
  console.log("password", password);
  const user = await User.findOne({ email });
  if (!user) throw { status: 401, message: "Unauthorized" };

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw { status: 401, message: "Unauthorized" };

  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: Number(process.env.JWT_EXPIRED_TIME) || 900 },
  );

  return {
    accessToken,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  };
};

module.exports = { register, login };
