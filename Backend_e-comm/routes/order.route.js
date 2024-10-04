const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { getAllOrders,getSingleOrder } = require("../controller/order.controller");
// const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient, updateVarientImages} = require('../controller/productVarient.controller')
router.use(checkLoginMiddleware) // ! router level middleware


//? get all orders by user id using login token.
router.get ( '/',checkLoginMiddleware,getAllOrders);

router.get ( '/:orderid',checkLoginMiddleware,getSingleOrder);



module.exports = router;