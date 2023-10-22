const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.addNewProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.removeProduct);
router.delete("/", productController.removeAllProducts);
router.get("/?name=[kw]", productController.findProductsByName);

module.exports = router;
