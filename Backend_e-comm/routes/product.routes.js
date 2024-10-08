const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { addProduct,updateProduct,deleteProduct,getSingleProduct, getAllProducts,updateProductSingleImage,deleteGalleryImages,getSingleProductUsingSlug,getAllProductsViaCategory} = require("../controller/product.controller");
const {validateAddProduct} = require("../validations/product.validation");
const {handleSingleImageUpload,handleMultipleImagesUpload} = require('../middleware/imageUpload.middleware')

//?Get using slug
router.get("/detail/:slug",getSingleProductUsingSlug)//✅ use without login
//? Get all product
router.get("/",getAllProducts)//✅

//? Get all products using category slug
router.get("/catProducts/:cat_slug",getAllProductsViaCategory)//✅


router.use(checkLoginMiddleware) // ! router level middleware

//? Add product route -> Upload Images and validate add product form 
// router.post("/product",checkLoginMiddleware,validateFormData,addProduct);
router.post("/",handleSingleImageUpload,validateAddProduct,addProduct); //✅

router.put("/updateImage/:id",handleSingleImageUpload,updateProductSingleImage); //✅

//? Update product -> Update and validate product form
router.put("/:id",handleMultipleImagesUpload,validateAddProduct,updateProduct);  //! may be issue..

//? Delete product
router.delete("/images/:id",deleteGalleryImages) //✅

router.delete("/:id",deleteProduct) //✅



//? Get single product -- for admin

router.get("/:id",getSingleProduct)//✅




module.exports = router;
