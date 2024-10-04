const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { getCart,addItemToCart,updateCart,removeCartItems } = require("../controller/cart.controller");
const validateCart = require('../validations/cart.validator.js')
// const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient, updateVarientImages} = require('../controller/productVarient.controller')
router.use(checkLoginMiddleware) // ! router level middleware

//! cart

//?get cart
router.get( '/',checkLoginMiddleware,getCart);

//?add to cart
router.post( '/',checkLoginMiddleware,validateCart,addItemToCart);

//? update Cart
router.put( '/:cartid',checkLoginMiddleware,validateCart,updateCart);

//? remove Items from cart
router.delete( '/:cartid',checkLoginMiddleware,removeCartItems);

//?get all cart items
// router.put( '/',checkLoginMiddleware,removeCartItems);


module.exports = router;