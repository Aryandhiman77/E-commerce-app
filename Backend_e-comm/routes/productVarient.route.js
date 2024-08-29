const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient} = require('../controller/productVarient.controller')
const {validateProductVarient} = require("../validations/product.validation");
const {handleMultipleImagesUpload} = require('../middleware/imageUpload.middleware')
router.use(checkLoginMiddleware) // ! router level middleware

//! product varients CRUD

// ? Read -> get single and multiple varients
router.get('/allVarients/:id',getAllVarients)
router.get('/:id',getSingleVarient) //? take product id

//? Create product Varient --> take product id
router.post ( '/:id' ,handleMultipleImagesUpload,validateProductVarient,createVarient);  

//? update product varient -->take varient id
router.put('/:id',validateProductVarient,updateVarient);  // ? take varient id

//? delete product varient-->take product 
router.delete('/:id',deleteVarient)// ? take varient id


module.exports = router;