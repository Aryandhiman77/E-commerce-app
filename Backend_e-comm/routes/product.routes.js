const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { addProduct,updateProduct } = require("../controller/product.controller");
const validateAddProduct = require("../validations/product.validation");
const {handleSingleImageUpload,handleMultipleImagesUpload} = require('../middleware/imageUpload.middleware')
const {validationResult} = require('express-validator')
const fs = require('fs')

//? Add product route -> Upload Images and validate add product form 
// router.post("/product",checkLoginMiddleware,validateFormData,addProduct);
router.post("/product",checkLoginMiddleware,handleSingleImageUpload,validateAddProduct,addProduct); //✅

//? Update product -> update and validate product form
router.put("/product/:id",checkLoginMiddleware,handleMultipleImagesUpload,validateAddProduct,updateProduct);

module.exports = router;
