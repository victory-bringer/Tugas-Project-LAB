require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectDB, seedProductData, seedUserData } = require("./config/db");

const productRoute = require("./routers/product.route");
const authRoute = require("./routers/auth.route");
const authMiddleware = require("./middlewares/auth.middleware");

const app = express();

const start = async () => {
  await connectDB();
  await seedProductData();
  await seedUserData();

  app.use(express.json());
  app.use(cors({ origin: process.env.ALLOWED_DOMAIN, credentials: true }));
  app.use("/products", authMiddleware, productRoute);
  app.use("/auth", authRoute);

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
};

start();
