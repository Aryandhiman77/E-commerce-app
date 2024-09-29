const Product = require('../Models/products.Model');
const ProductVarient = require('../Models/productVarients.Model');
const Wishlist = require('../Models/wishlist.Model')

const getWishlist = async(req,res)=>{
    const user_id = req.user;
    try {
        const wishlist = await Wishlist.find({user_id}).populate("product_id").populate("product_varient_id");;
        wishlist
      ? res.status(200).json({
          success: true,
          message:'wishlist found.',
          wishlist,
        })
      : res
          .status(400)
          .json({ success: false, message: "WishList items not found." });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
const addItemToWishlist = async(req,res)=>{ // create operation
    try {
        const user_id = req.user;
        const {product_id,product_varient_id} = req.body;
        if(!product_id && !product_varient_id){
            return res.status(400).json({ success: false, message: "product id / varient id not found." });
        }
        if(product_id){
            const isProductExists = await Product.findById(product_id);
            if(!isProductExists){
                return res.status(400).json({ success: false, message: "product does not exists." });
            }
        }
        if(product_varient_id){
            const isVarientExists = await ProductVarient.findById(product_varient_id);
            if(!isVarientExists){
                return res.status(400).json({ success: false, message: "product varient does not exists." });
            }
        }
        const details = {...req.body,user_id}
        const checkProductInWishlist = await Wishlist.find(details);
        if(checkProductInWishlist.length>0){
            return res.status(200).json({success:false,message:'product already exists in wishlist.',checkProductInWishlist});
        }
        const addItem = await Wishlist.create({
            user_id,
            product_id,
            product_varient_id
        })
        addItem
      ? res.status(200).json({
          success: true,
          message: "Item added to wishlist.",
          addItem,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cannot add to wishlist." });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
const removeWishListItems =async (req,res)=>{
    try {
        const wishId = req.params.wishId;
        const deleteItem = await Wishlist.findByIdAndDelete(wishId);
        deleteItem
      ? res.status(200).json({
          success: true,
          message: "Item removed from wishlist.",
          deleteItem,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cannot delete item from wishlist." });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = {getWishlist,addItemToWishlist,removeWishListItems}