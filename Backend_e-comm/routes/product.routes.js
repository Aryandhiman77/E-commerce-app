const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { addProduct,updateProduct,deleteProduct,getSingleProduct, getAllProducts } = require("../controller/product.controller");
const validateAddProduct = require("../validations/product.validation");
const {handleSingleImageUpload,handleMultipleImagesUpload} = require('../middleware/imageUpload.middleware')

//? Add product route -> Upload Images and validate add product form 
// router.post("/product",checkLoginMiddleware,validateFormData,addProduct);
router.post("/product",checkLoginMiddleware,handleSingleImageUpload,validateAddProduct,addProduct); //✅

//? Update product -> Update and validate product form
router.put("/product/:id",checkLoginMiddleware,handleMultipleImagesUpload,validateAddProduct,updateProduct);  //! may be issue..

//? Delete product
router.delete("/product/:id",checkLoginMiddleware,deleteProduct) //✅

//! Get all product
router.get("/product",checkLoginMiddleware,getAllProducts)//✅

//! Get all product
router.get("/product/:id",checkLoginMiddleware,getSingleProduct)//✅




//? product varients CRUD




module.exports = router;
