const Product = require("../models/Product");

const create = async (data) => {
  const product = new Product(data);
  return await product.save();
};

const getAllProducts = async () => {
  return await Product.find();
};

const getPopularProducts = async (limit = 5) => {
  return await Product.find().sort({ ssold: -1 }).limit(limit);
};

const getById = async (id) => {
  return await Product.findById(id);
};

const update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true });
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  create,
  getAllProducts,
  getPopularProducts,
  update,
  deleteProduct,
  getById,
};
