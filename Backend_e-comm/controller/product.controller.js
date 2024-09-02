const Product = require("../Models/products.Model");
const Category = require("../Models/categories.Model");
const { validationResult } = require("express-validator");
const fs = require("fs");

//! Adding product
const addProduct = async (req, res) => {
  console.log(req.body)
  if (!req.file) {
    return res.status(400).json({ error: "Image must be required." });
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    fs.unlink(req.file.path, (err) => {
      err && res.send(err); // :console.log("files deleted successfully.")
    });
    return res.status(400).json({ error: errors.array()[0].msg }); // ! bad request
  } else {
    try {
      const {
        category_name,
        product_name,
        description,
        price,
        product_status,
        stock_quantity,
      } = req.body;
      const checkCategory = await Category.findOne({ category_name });
      // ! if category don't exists send invalid category -> else get category id
      if (!checkCategory) {
        throw new Error("Invalid category");
      }
      let category_id = await Category.findOne({ category_name }, { _id: 1 });
      category_id = category_id._id;

      const dbfilepath = `/${req.file.path.split("/")[1]}/${
        req.file.path.split("/")[2]
      }`;
      const Product_info = {
        product_name,
        image: dbfilepath,
        product_url_slug: product_name.replaceAll(" ", "-"),
        category_id,
        description,
        price,
        stock_quantity,
        product_status,
      };
      const savedProduct = await Product.create(Product_info); // ! saving product
      savedProduct
        ? res.status(200).json({
            success: true,
            message: "product saved successfully.",
            savedProduct,
          })
        : res.status(400).json({
            success: false,
            error: "cannot save product due to some technical issues.",
          });
    } catch (error) {
      if (error.message === "") {
        res
          .status(500)
          .json({ success: false, error: "Internal server error." });
      }
      fs.unlink(req.file.path, (err) => {
        err && res.send(err);
      });

      res.status(500).json({ success: false, error: error.message });
    }
  }
};
//! updating image gallery
const updateProduct = async (req, res) => {
  console.log(req.files)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.files) {
      req.files.map((file) => {
        fs.unlink(file.path, (err) => {
          err && res.send(err); // :console.log("files deleted successfully.")
        });
      });
    }
    return res.status(400).json({ error: errors.array()[0].msg }); // ! bad request
  } else {
    try {
      const product_id = req.params.id;
      !product_id && new Error("product id not found.");
      const {
        category_name,
        product_name,
        description,
        price,
        product_status,
        stock_quantity,
      } = req.body;
      let category_id = await Category.findOne({ category_name }, { _id: 1 });
      if (!category_id) {
        return res.status(404).json({ message: "No such category." });
      }
      category_id = category_id._id;
      let product_images = [];
      req.files.forEach((file) => {
        product_images.push(
          `/${file.path.split("/")[1]}/${file.path.split("/")[2]}`
        );
      });

      const fileslength = req.files.length;
      let updateproduct = {};
      let product_imagesArray = await Product.findById(product_id, {product_images: 1});
      if (fileslength > 0) {
        //? if product images array length is 4 (reaches max image upload)-> don't update doc.
        if (product_imagesArray.product_images.length >= 4) {
          throw new Error("Maximum 4 images can be uploaded.");
          // todo-> more than 4 files are uploading when 1-2 slot left and user selects more than 2 files
        }
        updateproduct = await Product.findByIdAndUpdate(product_id, {
          $set: {
            product_name,
            product_url_slug: product_name.replaceAll(" ", "-"),
            category_id,
            description,
            price,
            stock_quantity,
            product_status,
          },
          $push: {
            product_images,
          },
        });
        let newproduct_imagesArray= await Product.findById(product_id, {product_images: 1});
        if(newproduct_imagesArray.product_images.length>4){
          throw new Error("Maximum 4 images can be uploaded.")
        }
      } else {
        updateproduct = await Product.findByIdAndUpdate(product_id, {
          $set: {
            product_name,
            product_url_slug: product_name.replaceAll(" ", "-"),
            category_id,
            description,
            price,
            stock_quantity,
            product_status,
          },
        });
      }
      updateproduct
        ? res.status(200).json({
            success: true,
            message: "product updated successfully.",
            updateproduct,
          })
        : res
            .status(400)
            .json({ success: false, error: "product does not exist." });
    } catch (error) {
      if (error.message === "") {
        res
          .status(500)
          .json({ success: false, error: "Internal server error." });
      }
      if (req.files) {
        req.files.map((file) => {
          fs.unlink(file.path, (err) => {
            err && res.send(err); // :console.log("files deleted successfully.")
          });
        });
      }
      res.status(400).json({ success: false, error: error.message });
    }
  }
};

//! delete product  
const deleteProduct = async (req, res) => {  //todo  first product varients must be deleted.
  try {
    const product_id = req.params.id;
    !product_id && new Error("product id not found.");
    // deleting product varients..

    // deleting product....
    const product = await Product.findById(product_id);
    const productMainImage = product.image;
    const imagePaths = product.product_images;
    if(imagePaths.length>0){
      imagePaths.forEach(imagePath=>{
        let unlinked = fs.unlinkSync(`uploads${imagePath}`);
        console.log(unlinked)
      })
    } 
    if(productMainImage){
      fs.unlinkSync(`uploads${productMainImage}`);
    }
    const delete_Product = await Product.findByIdAndDelete(product_id);
    delete_Product
      ? res.status(200).json({
          success: true,
          message: "product deleted successfully.",
          delete_Product,
        })
      : res
          .status(400)
          .json({ success: false, error: "product does not exist." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//! get all products
const getSingleProduct = async (req, res) => {
  try {
    const product_id = req.params.id;
    !product_id && new Error("product id not found.");
    
    const product = await Product.findById(product_id).populate("category_id");
    product
      ? res.status(200).json({
          success: true,
          message: "product found.",
          product,
        })
      : res
          .status(400)
          .json({ success: false, error: "product does not exist." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const getAllProducts = async (req, res) => {
  try {

    const products = await Product.find({});
    products
      ? res.status(200).json({
          success: true,
          products,
        })
      : res
          .status(400)
          .json({ success: false, error: "No product found." });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// todo 1 -> for single image change(unlink the previous image from server)
//todo 2 -> making changes in uploaded product_images array.
module.exports = { addProduct, updateProduct, deleteProduct, getAllProducts,getSingleProduct };
