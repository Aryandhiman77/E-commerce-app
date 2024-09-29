const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient, updateVarientImages,getAllVarientsViaSlug} = require('../controller/productVarient.controller')
const {validateProductVarient} = require("../validations/product.validation");
const {handleMultipleImagesUpload} = require('../middleware/imageUpload.middleware')


//! product varients CRUD



//? Create product Varient --> take product id
router.post ( '/' ,handleMultipleImagesUpload,validateProductVarient,createVarient);//✅


router.get('/allVarients/:id',getAllVarients) //? get multiple varients✅ 
router.get('/:id',getSingleVarient) //? take product id -> get single varient ✅

router.get('/',getAllVarientsViaSlug) //? take product id -> get single varient ✅

router.use(checkLoginMiddleware) // ! router level middleware

//? update product varient -->take varient id
router.put('/:id',handleMultipleImagesUpload,validateProductVarient,updateVarient);// ✅
router.put("/updateImages/:id",handleMultipleImagesUpload,updateVarientImages);

//? delete product varient-->take product 
router.delete('/:id',deleteVarient)// ✅


module.exports = router;