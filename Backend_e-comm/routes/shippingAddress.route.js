const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { getAllShippingAddress,addShippingAddress,getSingleShippingAddress,removeSingleShippingAddress,updateShippingAddress} = require("../controller/shippingAddress.controller.js");
const validateShippingAddress = require('../validations/shippingAddress.validator.js');
// const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient, updateVarientImages} = require('../controller/productVarient.controller')
router.use(checkLoginMiddleware) // ! router level middleware

//! shipping address



//?get all shipping addresses
router.get( '/',getAllShippingAddress);

//?get single shipping address
router.get( '/:addressId',getSingleShippingAddress);

// //?add shipping address
router.post('/',validateShippingAddress,addShippingAddress);

// //? update shipping address
router.put( '/:addressId',validateShippingAddress,updateShippingAddress);

// //? remove all shipping addresses
router.delete( '/:addressId',removeSingleShippingAddress);

//?remove all shipping addresses items
// router.put( '/',checkLoginMiddleware,removeCartItems);


module.exports = router;