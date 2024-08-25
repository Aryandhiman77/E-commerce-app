const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { addProduct,updateProduct } = require("../controller/product.controller");
const {validateProductImageAndUpload,validateProduct} = require("../validations/product.validation");
const renameImages = require("../middleware/renameImages.middleware");

// const multer = require("multer");
// const { productValidation } = require("../validations/product.validation");


//? Add product route -> Upload Images and validate add product form 
router.post("/product",checkLoginMiddleware,validateProduct,validateProductImageAndUpload,renameImages,addProduct);

//? Update product -> update and validate product form
router.put("/product/:id",checkLoginMiddleware,validateProductImageAndUpload,validateProduct,updateProduct);

module.exports = router;
