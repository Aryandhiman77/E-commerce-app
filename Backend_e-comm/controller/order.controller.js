const Order = require('../Models/orders.Model');

const getAllOrders = async(req,res)=>{
    try {
        const orders = await Order.find({});
        orders
          ? res.status(200).json({
              success: true,
              orders,
            })
          : res
              .status(400)
              .json({ success: false, error: "No product found." });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
}   

module.exports = {getAllOrders}