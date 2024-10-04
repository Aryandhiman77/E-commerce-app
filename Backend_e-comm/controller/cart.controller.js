const { validationResult } = require('express-validator');
const Cart = require('../Models/carts.Model.Model');
const Product = require('../Models/products.Model');
const ProductVarient = require('../Models/productVarients.Model');

const getCart = async(req,res) =>{
    try {
        const user_id = req.user;
        const getAllCarts = await Cart.find({user_id}).populate("product_id").populate("product_varient_id");
        getAllCarts
      ? res.status(200).json({
          success: true,
          message:'cart found.',
          getAllCarts,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cart items not found." });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
const addItemToCart = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message: errors.array()[0].msg }); // ! bad request
    }
    try {
        const user_id = req.user;
        const {product_id,product_varient_id,quantity} = req.body;
        if(!product_id && !product_varient_id){
            return res.status(400).json({ success: false, message: "Product id / varient id not found." });
        }
        if(product_id){
            const isProductExists = await Product.findById(product_id);
            if(!isProductExists){
                return res.status(400).json({ success: false, message: "Product does not exists." });
            }
            if(isProductExists.stock_quantity<=0){
                return res.status(400).json({ success: false, message: "Out of Stock." });
            }
            if(quantity > isProductExists.stock_quantity){
                return res.status(400).json({ success: false, message: "Quantity cannot exceed available stock." });
            }
            
        }
        if(product_varient_id){
            const isVarientExists = await ProductVarient.findById(product_varient_id);
            if(!isVarientExists){
                return res.status(400).json({ success: false, message: "product varient does not exists." });
            }
            if(isVarientExists.stock_quantity<=0){
                return res.status(400).json({ success: false, message: "Out of Stock." });
            }
            if(quantity > isVarientExists.stock_quantity){
                return res.status(400).json({ success: false, message: "Quantity cannot exceed available stock." });
            }
        }
        const details = {product_id,product_varient_id,user_id}
        const checkProductInCart = await Cart.find(details);
        if(checkProductInCart.length>0){
            return res.status(200).json({success:false,message:'Product already exists in cart.',checkProductInCart});
        }
        const addItem = await Cart.create({
            user_id,
            product_id,
            product_varient_id,
            quantity
        })
        addItem
      ? res.status(200).json({
          success: true,
          message: "Item added to cart.",
          addItem,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cannot add to cart." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
const updateCart = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message: errors.array()[0].msg }); // ! bad request
    }
    try {
        const cart_id = req.params.cartid;
        const {product_id,product_varient_id,quantity} = req.body;
        if(!product_id && !product_varient_id){
            return res.status(400).json({ success: false, message: "Product id / varient id not found." });
        }
        if(product_id){
            const isProductExists = await Product.findById(product_id);
            if(!isProductExists){
                return res.status(400).json({ success: false, message: "product does not exists." });
            }
            if(isProductExists.stock_quantity<=0){
                return res.status(400).json({ success: false, message: "Out of Stock." });
            }
            if(quantity > isProductExists.stock_quantity){
                return res.status(400).json({ success: false, message: "Quantity cannot exceed available stock." });
            }
        }
        if(product_varient_id){
            const isVarientExists = await ProductVarient.findById(product_varient_id);
            if(!isVarientExists){
                return res.status(400).json({ success: false, message: "Product varient does not exists." });
            }
            if(isVarientExists.stock_quantity<=0){
                return res.status(400).json({ success: false, message: "Out of Stock." });
            }
            if(quantity > isVarientExists.stock_quantity){
                return res.status(400).json({ success: false, message: "Quantity cannot exceed available stock." });
            }
        }
        if(quantity<1){
            return res.status(400).json({ success: false, message: "Quantity cannot be less than 1." });
        }

        const updateObj = {
            product_id:product_id?product_id:null,
            product_varient_id:product_varient_id?product_varient_id:null,
            quantity
        }
        const updateItem = await Cart.findByIdAndUpdate(cart_id,updateObj);
        updateItem
      ? res.status(200).json({
          success: true,
          message: `Quantity changed to ${quantity} `,
          updateItem,
        })
      : res
          .status(400)
          .json({ success: false, error: "Cannot update cart." });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
const removeCartItems = async(req,res) =>{
    try {
        const cart_id = req.params.cartid;
        const deleteItem = await Cart.findByIdAndDelete(cart_id);
        deleteItem
      ? res.status(200).json({
          success: true,
          message: "Item removed from cart.",
          deleteItem,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cannot delete cart item." });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {getCart,addItemToCart,updateCart,removeCartItems}