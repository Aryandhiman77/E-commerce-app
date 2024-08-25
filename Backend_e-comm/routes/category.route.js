const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const {addCategory,updateCategory,deleteCategory,getCategory,getSingleCategory} = require('../controller/category.controller');
const {validateCategory} = require("../validations/category.validation");


//? Adding category 
router.post('/category',checkLoginMiddleware,validateCategory,addCategory)

//? get all categories
router.get('/category',checkLoginMiddleware,getCategory)

//? get single category
router.get('/category/:id',checkLoginMiddleware,getSingleCategory)

//? update category
router.put('/category/:id',checkLoginMiddleware,validateCategory,updateCategory)

//! delete category
router.delete('/category/:id',checkLoginMiddleware,deleteCategory)

module.exports = router