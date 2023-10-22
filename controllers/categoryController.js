const Category = require("../model/category.model");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.addNewCategory = async (req, res) => {
  let category = new Category(req.body);
  try {
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) return res.status(404).send("Category not found");
    res.status(200).json(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.removeCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    if (!category) return res.status(404).send("Category not found");
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
