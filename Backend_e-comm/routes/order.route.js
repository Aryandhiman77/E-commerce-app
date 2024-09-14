const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { getAllOrders } = require("../controller/order.controller");
// const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient, updateVarientImages} = require('../controller/productVarient.controller')
router.use(checkLoginMiddleware) // ! router level middleware

//! product varients CRUD



//? Create product Varient --> take product id
router.get ( '/',checkLoginMiddleware,getAllOrders);



module.exports = router;