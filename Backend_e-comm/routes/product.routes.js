const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { addProduct,updateProduct,deleteProduct,getSingleProduct, getAllProducts } = require("../controller/product.controller");
const {validateAddProduct,validateProductVarient} = require("../validations/product.validation");
const {handleSingleImageUpload,handleMultipleImagesUpload} = require('../middleware/imageUpload.middleware')

router.use(checkLoginMiddleware) // ! router level middleware

//? Add product route -> Upload Images and validate add product form 
// router.post("/product",checkLoginMiddleware,validateFormData,addProduct);
router.post("/",handleSingleImageUpload,validateAddProduct,addProduct); //✅

//? Update product -> Update and validate product form
router.put("/:id",handleMultipleImagesUpload,validateAddProduct,updateProduct);  //! may be issue..

//? Delete product
router.delete("/:id",deleteProduct) //✅

//? Get all product
router.get("/",getAllProducts)//✅

//? Get all product
router.get("/:id",getSingleProduct)//✅


module.exports = router;
