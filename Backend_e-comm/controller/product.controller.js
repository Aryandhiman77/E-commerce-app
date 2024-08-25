const Product = require("../Models/products.Model");
const Category = require("../Models/categories.Model");
const { validationResult } = require("express-validator");
//! Adding product
const addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});  // 400 means bad request
  } else {
    try {
      const { category_name, category_url_slug, cat_status } = req.body; // ! for checking and adding category
      const checkCategory = await Category.findOne({ category_name });
      if (!checkCategory) {
        await Category.create({
          category_name,
          category_url_slug,
          cat_status,
        });
      }
      let product_images = [];
      req.files.map((file) => {
        product_images.push("/" + file.path.split("/")[1] + "/" + file.path.split("/")[2]);
      });
      let category_id = await Category.findOne({ category_name },{_id:1});
      category_id=category_id._id;
      const { product_name, product_url_slug, description,price,product_status,stock_quantity } =req.body; //! for saving product
      const Product_info = {
        product_name,
        product_images,
        product_url_slug,
        category_id,
        description,
        price,
        stock_quantity,
        product_status,
      };
      const savedProduct = await Product.create(Product_info)  // ! saving product
      savedProduct
      ?res.status(200).json({success:true,message:"product saved successfully.",savedProduct})
      :res.status(400).json({success:false, error:"cannot save product due to some technical issues."})
    } catch (error) {
        error.message===""&& res.status(500).json({success:false,error: "Internal server error."})
        res.status(500).json({success:false, error: error.message });
    }
  }
};
const updateProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()});  // 400 means bad request
  } else {
    try {
      const product_id =req.params.id;
      const { category_name,product_name, product_url_slug, description,price,product_status,stock_quantity} = req.body;
      let category_id = await Category.findOne({ category_name },{_id:1});
      if (!category_id) {
        return res.status(404).json({message:"No such category."})
      }
      category_id = category_id._id;
      let product_images = [];
      req.files.map((file) => {
        product_images.push("/" + file.path.split("/")[1] + "/" + file.path.split("/")[2]);
      });
      const updateProduct_info = {
        product_name,
        product_images,
        product_url_slug,
        category_id,
        description,
        price,
        stock_quantity,
        product_status,
      }
      const updateproduct = await Product.findByIdAndUpdate(product_id,{$set:updateProduct_info})
      updateproduct
      ?res.status(200).json({success:true,message:"product updated successfully.",updateproduct})
      :res.status(400).json({success:false, error:"product does not exist."})
    } catch (error) {
        error.message===""&& res.status(500).json({success:false,error: "Internal server error."})
        res.status(500).json({success:false, error: error.message });
    }
  }
};
module.exports = { addProduct ,updateProduct};
