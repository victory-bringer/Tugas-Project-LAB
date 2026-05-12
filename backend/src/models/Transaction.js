const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  price: { type: Number },
  created_date: { type: Date, default: Date.now },
  quantity: { type: Number },
});

module.exports = mongoose.model("Cart", cartSchema);
