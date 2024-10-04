const ShippingAddress = require('../Models/shippingAddress.Model')
const { validationResult } = require('express-validator')
const getAllShippingAddress = async(req,res)=>{
   try {
    const user_id = req.user;
    if(!user_id){
        return res.status(400).json({ success: false, message: "Something went wrong." });
    }
    const shippingAddresses = await ShippingAddress.find({user_id});

    shippingAddresses
  ? res.status(200).json({
      success: true,
      message: "Shipping Addresses found successfully.",
      shippingAddresses,
    })
  : res
      .status(400)
      .json({ success: false, message: "Cannot get shipping addresses." });

   } catch (error) {
        res.status(500).json({ success: false, message: "Internal server Erorr."+error });
   }
}
const getSingleShippingAddress = async(req,res)=>{
   try {
    const addressId = req.params.addressId;
    const shippingAddress = await ShippingAddress.findById(addressId).populate("user_id",{password:0});
    shippingAddress
  ? res.status(200).json({
      success: true,
      message: "Shipping Address found successfully.",
      shippingAddress,
    })
  : res
      .status(400)
      .json({ success: false, message: "Cannot get shipping address." });

   } catch (error) {
        res.status(500).json({ success: false, message: "Internal server Erorr."+error });
   }
}
const addShippingAddress = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message: errors.array()[0].msg }); // ! bad request
    }const {username, mobile_no,locality,full_address,address_type,state,city,zip_code } = req.body;
    
    try{
        const user_id = req.user;
        if(!user_id){
            return res.status(400).json({ success: false, message: "Something went wrong." });
        }
        if(!mobile_no){
            return res.status(400).json({ success: false, message: "Mobile number must be required." });
        }
        if(!locality){
            return res.status(400).json({ success: false, message: "Locality must be required." });
        }
        if(!full_address){
            return res.status(400).json({ success: false, message: "Address must be required." });
        }
        if(!state){
            return res.status(400).json({ success: false, message: "State must be required." });
        }
        if(!city){
            return res.status(400).json({ success: false, message: "City must be required." });
        }
        if(!zip_code){
            return res.status(400).json({ success: false, message: "zip code must be required." });
        }
        if(!username){
            return res.status(400).json({ success: false, message: "user name must be required." });
        }
        
        const address = await ShippingAddress.create({
            user_id,mobile_no,username,locality,full_address,address_type,state,city,zip_code
        })

        address? res.status(200).json({
          success: true,
          message: "Address added successfully.",
          address,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cannot add address." });
    
    }catch(error){
        res.status(500).json({ success: false, message: "Internal server Erorr."+error });
    }
    
}
const updateShippingAddress = async(req,res)=>{
    const addresId = req.params.addressId;
        if(!addresId){
            return res.status(400).json({ success: false, message: "Something went wrong." });
        }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message: errors.array()[0].msg }); // ! bad request
    }
    const { username,mobile_no,locality,full_address,address_type,state,city,zip_code } = req.body;
    
    try{
        const user_id = req.user;
        
        if(!user_id){
            return res.status(400).json({ success: false, message: "Something went wrong." });
        }
        if(!mobile_no){
            return res.status(400).json({ success: false, message: "Mobile number must be required." });
        }
        if(!locality){
            return res.status(400).json({ success: false, message: "Locality must be required." });
        }
        if(!full_address){
            return res.status(400).json({ success: false, message: "Address must be required." });
        }
        if(!state){
            return res.status(400).json({ success: false, message: "State must be required." });
        }
        if(!city){
            return res.status(400).json({ success: false, message: "City must be required." });
        }
        if(!zip_code){
            return res.status(400).json({ success: false, message: "zip code must be required." });
        }
        if(!username){
            return res.status(400).json({ success: false, message: "user name must be required." });
        }
        
        const updateAddress = await ShippingAddress.findByIdAndUpdate(addresId,{
            username,mobile_no,locality,full_address,address_type,state,city,zip_code
        })

        updateAddress? res.status(200).json({
          success: true,
          message: "Address updated successfully.",
          updateAddress,
        })
      : res
          .status(400)
          .json({ success: false, message: "Cannot update address." });
    
    }catch(error){
        res.status(500).json({ success: false, message: "Internal server Erorr."+error });
    }
    
}
const removeSingleShippingAddress = async(req,res)=>{
    const addressId = req.params.addressId;
        if(!addressId){
            return res.status(400).json({ success: false, message: "Something went wrong." });
        }
    try{
        const user_id = req.user;
        
        if(!user_id){
            return res.status(400).json({ success: false, message: "Something went wrong." });
        }
        
        const checkUser = await ShippingAddress.findOne({user_id,_id:addressId});
        if(checkUser){
            const deleteAaddress = await ShippingAddress.findByIdAndDelete(addressId);
            deleteAaddress? res.status(200).json({
                success: true,
                message: "Shipping Address deleted successfully.",
                deleteAaddress,
              })
            : res
                .status(400)
                .json({ success: false, message: "Cannot delete Shipping Address." });
        }else{
            res.status(400).json({ success: false, message: "No shipping address found." });
        }
        
    }catch(error){
        res.status(500).json({ success: false, message: "Internal server Erorr."+error });
    }
    
}

module.exports = {getAllShippingAddress,addShippingAddress,getSingleShippingAddress,removeSingleShippingAddress,updateShippingAddress}