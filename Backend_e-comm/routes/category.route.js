const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const {addCategory,updateCategory,deleteCategory,getCategory,getSingleCategory} = require('../controller/category.controller');
const {validateCategory} = require("../validations/category.validation");
const {handleSingleImageUpload} = require('../middleware/imageUpload.middleware');


//? Adding category 
router.post('/',checkLoginMiddleware,handleSingleImageUpload,validateCategory,addCategory)//✅

//? get all categories
router.get('/',getCategory)

//? get single category
router.get('/:id',getSingleCategory)

//? update category
router.put('/:id',checkLoginMiddleware,handleSingleImageUpload,validateCategory,updateCategory)//✅

//! delete category
router.delete('/:id',checkLoginMiddleware,deleteCategory)

module.exports = router


//todo get all product of specific category 