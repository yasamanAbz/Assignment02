const Product = require("../model/product.model");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addNewProduct = async (req, res) => {
  let product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).send("Product not found");
    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send("Product not found");
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.removeAllProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.status(200).json({ message: "All products deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findProductsByName = async (req, res) => {
  try {
    const products = await Product.find({
      name: new RegExp(req.query.name, "i"),
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error);
  }
};
