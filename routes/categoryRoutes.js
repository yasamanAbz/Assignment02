const express = require("express");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.addNewCategory);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.removeCategory);

module.exports = router;
