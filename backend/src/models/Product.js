const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  description: { type: String },
  price: { type: Number },
  sold: { type: Number },
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model("Product", productSchema);
