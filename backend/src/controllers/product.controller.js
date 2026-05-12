const productService = require("../services/product.service");

const create = async (req, res) => {
  const product = await productService.create(req.body);
  res.status(201).json(product);
};

const getAll = async (req, res) => {
  const propduct = await productService.getAllProducts();
  res.json(propduct);
};

const getPopular = async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const products = await productService.getPopularProducts(limit);
  res.json(products);
};

const update = async (req, res) => {
  const product = await productService.update(req.params.id, req.body);
  if (!product)
    return res.status(400).json({
      message: "Product not found",
    });

  res.json(product);
};

const remove = async (req, res) => {
  const product = await productService.deleteProduct(req.params.id);
  if (!product)
    return res.status(400).json({
      message: "Product not found",
    });

  res.json(product);
};

const getById = async (req, res) => {
  const product = await productService.getById(req.params.id);
  if (!product)
    return res.status(400).json({
      message: "Product not found",
    });

  res.json(product);
};

module.exports = { create, getAll, getPopular, update, remove, getById };
