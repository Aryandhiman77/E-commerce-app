const Order = require('../Models/orders.Model');

const getAllOrders = async(req,res)=>{ 
    try {
        const user_id = req.user;
        const orders = await Order.find({user_id});
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

const generateOrder = async(req,res)=>{ 
  try {
    const status = "placed";
    const {total_amount,discount_amount,gross_amount,shipping_amount,net_amount,payment_status,payment_type,payment_transaction_id} = req.body;
      const order = await Order.create({

      });
      order
        ? res.status(200).json({
            success: true,
            message:"Order placed successfully.",
            order,
          })
        : res
            .status(400)
            .json({ success: false, error: "Something went wrong, cannot place order." });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
}




module.exports = {getAllOrders,getSingleOrder,generateOrder}