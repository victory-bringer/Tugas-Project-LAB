const mongoose = require("mongoose");
const Product = require("../models/Product");
const User = require("../models/User");
const productSeeds = require("../config/seeds/products.json");
const userSeeds = require("../config/seeds/user.json");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to Mongodb Atlas");
  } catch (error) {
    console.error(error);
  }
};

const seedProductData = async () => {
  const count = await Product.countDocuments();
  if (count > 0) return;

  await Product.insertMany(productSeeds);
  console.log("Product Data seeded");
};

const seedUserData = async () => {
  const userCount = await User.countDocuments();
  if (userCount > 0) return;

  await User.insertMany(userSeeds);
  console.log("User Data seeded");
};

module.exports = { connectDB, seedProductData, seedUserData };
