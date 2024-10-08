const express = require("express");
const router = express.Router();
const checkLoginMiddleware = require("../middleware/checklogin.middleware");
const { getAllOrders,getSingleOrder,createOrder,getKeycontroller,verifyPayment,getAllOrdersUsingOrn} = require("../controller/order.controller");
const Razorpay = require("razorpay");
// const {getAllVarients,getSingleVarient,createVarient,updateVarient,deleteVarient, updateVarientImages} = require('../controller/productVarient.controller')



//? get all orders by user id using login token.
router.get ( '/',checkLoginMiddleware,getAllOrders);

router.get ( '/:orderno',checkLoginMiddleware,getAllOrdersUsingOrn);

router.get ( '/single/:orderid',getSingleOrder);

router.post ( '/',checkLoginMiddleware,createOrder);

router.get('/razorPay/getkey',getKeycontroller)

router.post('/verify-payment',verifyPayment)


router.post('/fetch-transaction',async(req,res)=>{
    const razorpay = new Razorpay({
        key_id:process.env.RAZORPAY_KEY_ID,
        key_secret:process.env.RAZORPAY_KEY_SECRET 
    })
    const fetchdata = await razorpay.orders.fetchPayments(req.body.order_id);
    res.status(200).json({fetchdata});
})


module.exports = router;