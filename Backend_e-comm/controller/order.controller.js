const Order = require('../Models/orders.Model');
const RazorPay = require('razorpay');
const crypto = require('crypto');
const User = require('../Models/user.Model');
const Product = require('../Models/products.Model');
const Order_item = require('../Models/order_items.Model');
const ProductVarient = require('../Models/productVarients.Model');
const OrderShippingAddress = require('../Models/order_shipping_address.Model');
const Cart = require('../Models/carts.Model.Model');
const mongoose = require('mongoose');
const getAllOrders = async(req,res)=>{ 
    try {
        const user_id = req.user;
        const orders = await Order.aggregate([
          {
            $match: {user_id:new mongoose.Types.ObjectId(user_id)} // Match the order by order_no
          },
          {
            $lookup: {
              from: "orderitems",                // Lookup in the 'orderitems' collection
              localField: "_id",                 // Match _id from orders
              foreignField: "order_id",          // with order_id in orderitems
              as: "orderDetails"                  // Store matching items in 'orderDetails'
            }
          },
          {
            $project: {                          // Optional: project specific fields to include in the output
              _id: 1,                            // Include order _id
              order_no: 1,
              status:1,                       // Include order_no
              orderDetails: {                    // Include the orderDetails array
                $filter: {
                  input: "$orderDetails",        // Filter orderDetails
                  as: "item",                    // Alias for each item
                  cond: { $gt: ["$$item.quantity", 0] } // Include items with quantity greater than 0
                }
              }
            }
          }
        ])
        orders
          ? res.status(200).json({
              success: true,
              message:'Orders found successfully.',
              orders,
            })
          : res
              .status(400)
              .json({ success: false,message:'Orders not found.'});
      } catch (error) {
        res.status(500).json({ success: false, message:"Internal server error "+error });
      }
}   
const getAllOrdersUsingOrn = async(req,res)=>{ 
    try {
        const order_no = req.params.orderno?req.params.orderno:null;
        const orders = await Orderdb.aggregate([
          {
            $match: { order_no } // Match the order by order_no
          },
          {
            $lookup: {
              from: "orderitems",                // Lookup in the 'orderitems' collection
              localField: "_id",                 // Match _id from orders
              foreignField: "order_id",          // with order_id in orderitems
              as: "orderDetails"                  // Store matching items in 'orderDetails'
            }
          },
          {
            $project: {                          // Optional: project specific fields to include in the output
              _id: 1,                            // Include order _id
              order_no: 1,                       // Include order_no
              orderDetails: {                    // Include the orderDetails array
                $filter: {
                  input: "$orderDetails",        // Filter orderDetails
                  as: "item",                    // Alias for each item
                  cond: { $gt: ["$$item.quantity", 0] } // Include items with quantity greater than 0
                }
              }
            }
          }
        ])
        orders
          ? res.status(200).json({
              success: true,
              message:'Orders found successfully.',
              orders,
            })
          : res
              .status(400)
              .json({ success: false,message:'Orders not found.'});
      } catch (error) {
        res.status(500).json({ success: false, message:"Internal server error "+error });
      }
}   
const getSingleOrder = async(req,res)=>{ 
    try {
        const order_id = req.params.order_id;
        const order = await Order.findById({order_id});
        order
          ? res.status(200).json({
              success: true,
              order,
            })
          : res
              .status(400)
              .json({ success: false, error: "No product found." });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
}   

const createOrder = async(req,res)=>{ // /api/v1/order
  
  try {

    const razorpay = new RazorPay({
      key_id:process.env.RAZORPAY_KEY_ID,
      key_secret:process.env.RAZORPAY_KEY_SECRET
    })
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if(!order){
      return res.status(400).json({ success: false, message: "Something went wrong. Please try again." });
    }else{
      console.log(order)
      res.status(200).json({success:true,order});
    }
      
  } catch (error) {
    res.status(500).json({message:"Internal server error.",error})
  }
  
  
}

const getKeycontroller = (req,res)=>{
  try {
    res.status(200).json({
      key:process.env.RAZORPAY_KEY_ID
  })
  } catch (error) {
    res.send(error)
  }
 
}


const verifyPayment = async(req,res)=>{
  const {razorpay_payment_id ,razorpay_order_id,razorpay_signature} = req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto.createHmac("SHA256",process.env.RAZORPAY_KEY_SECRET)
  .update(body.toString()).digest('hex');
  // console.log("signatureReceived: ",razorpay_signature);
  // console.log("signatureGenerated: ",expectedSignature);
  if(expectedSignature === razorpay_signature){
    // const status = "placed";
    const razorpay = new RazorPay({
      key_id:process.env.RAZORPAY_KEY_ID,
      key_secret:process.env.RAZORPAY_KEY_SECRET
    })
    const paymentDetails = await razorpay.orders.fetchPayments(razorpay_order_id);
    // const paymentDetails = await razorpay.orders.fetchPayments("order_P5nSLUlNSkz8jC");

      if(!paymentDetails){
        return res.status(400).json({success:false,message:"Something went wrong. If payment has been done please contact customer care."})
      }
      // return res.send(paymentDetails)
      
      const {order_id,method,email,contact,description,notes,acquirer_data,created_at,vpa,card_id,bank,wallet} = paymentDetails.items[0];
      let orderDetails = (JSON.parse(description));
      const newContact = contact.slice(3)
      console.log(contact,newContact)
      const getUserid = await User.findOne({email,phone_number:newContact});
      console.log(getUserid)
      const user_id = getUserid._id;

      const orders_details = { // order table data
        user_id,
        order_no:order_id,
        total_amount:orderDetails.amount,
        discount_amount:orderDetails.discountAmount,
        gross_amount:orderDetails.grossAmount,
        shipping_amount:orderDetails.shippingAmount,
        net_amount:orderDetails.netAmount,
        status:'placed',
        paymentby:vpa,
        payment_status:orderDetails.paymentMethod!=="cod" ? "paid":"notpaid",
        payment_type:orderDetails.paymentMethod.toLowerCase(),
        payment_transaction_id:acquirer_data?.upi_transaction_id || acquirer_data?.bank_transaction_id,
        auth_code:acquirer_data?.auth_code,
      }
      console.log(orders_details);
      // return res.send(paymentDetails.items[0])


      // save data into order_items
      const createOrder = await Order.create(orders_details); // save an order into db;
      
      const orderedItems = notes?.map(note=>{
        let product_type = note.split('-')[0];
        let id = note.split('-')[1];
        let quantity = note.split('-')[2];
          if(product_type==="p_id"){
            return {
              product_id:id,quantity
            }
          }else if(product_type==="p_v_id"){
            return {
              product_varient_id:id,quantity
            }
          }else{
            return{
              product_id:null,product_varient_id:null,quantity:null
            }
          }
        
      });

      const order_items = {
        order_id:createOrder._id,
        total_amount:createOrder.total_amount
      }

      orderedItems.forEach(async(item)=>{
        if(item.product_id){
          let product = await Product.findById(item.product_id)
          let saveObj = {...order_items,
            product_id:item.product_id,
            product_name:product.product_name,
            product_image:product.image,
            price:product.price,
            quantity:item.quantity
          }
          let saveIntoOrderItems = await Order_item.create(saveObj)
          console.log(saveIntoOrderItems)
        }
        if(item.product_varient_id){
          let product = await ProductVarient.findById(item.product_varient_id)
          let saveObj = {...order_items,
            product_variant_id:item.product_varient_id,
            product_name:product.varient_name,
            product_image:product.varient_images[0],
            price:product.price,
            color:product.color?product.color:null,
            size:product.size?product.size:null,
            quantity:item.quantity
          }
          let saveIntoOrderItems = await Order_item.create(saveObj)
          console.log(saveIntoOrderItems)
        }
      })

    let obj = {
      order_id:createOrder._id,
      shipping_address_id:orderDetails.shippingAddress
    }
    const orderShippingAddresss = await OrderShippingAddress.create(obj);
    if(orderShippingAddresss){
      await Cart.deleteMany({user_id});
    }

    orderShippingAddresss
    ? res.redirect(`http://localhost:5173/checkout?reference=${razorpay_payment_id}&oid=${createOrder.order_no}&tid=${createOrder.payment_transaction_id?createOrder.payment_transaction_id:createOrder.auth_code}`)
    :res.redirect(`http://localhost:5173/checkout?reference=${null}&oid=${null}&tid=${null}`);

      
  }else{
      res.status(400).json({
          success:false,
          message:"Payment not done."
      })
  }
  
}
module.exports = {getAllOrders,getSingleOrder,createOrder,getKeycontroller,verifyPayment,getAllOrdersUsingOrn}