const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");

const {getWishlist,addItemToWishlist,removeWishListItems,clearWishList} = require('../controller/wishlist.controller')

router.use(checkLoginMiddleware) // ! router level middleware

// //?get wishlist
router.get( '/',getWishlist);

// //?add to wishlist
router.post( '/',addItemToWishlist);

//? remove Items from wishlist
router.delete( '/:wishId',removeWishListItems);

// //? clear all wishlist
// router.delete( '/clearWishList',clearWishList);



module.exports = router;