const User = require("../Models/user.Model");
const { validationResult } = require("express-validator");
const UserRole = require("../Models/userRoles.Model");
var bcrypt = require("bcryptjs");
require('dotenv').config();
const jwt = require('jsonwebtoken') 
const jwtSecret = process.env.JWT_PRIVATE_KEY

// ! Registering user...
const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return must be written to take control out the function otherwise the code outside this function will execute
    return res.json({ errors: errors.array() });
  }
  try {
    const { role_name, password } = req.body;
    const role = await UserRole.findOne({ role_name }, { _id: 1 });
    const role_id = role._id;
    const salt = await bcrypt.genSalt(10);
    const enc_pass = await bcrypt.hash(password, salt); // * encrypting password and adding salt
    const saveObj = { ...req.body, role_id, password: enc_pass };

    //! checking if email and mobile number already exists in database
    const checkuseremail = await User.findOne(
      { email: saveObj.email },
      { email: 1, _id: 0 }
    );
    const checkphone = await User.findOne(
      { phone_number: saveObj.phone_number },
      { phone_number: 1, _id: 0 }
    );
    if (checkuseremail) {
      return (
        checkuseremail.email &&
        res.status(401).json({success:false, message: "user already exists with this email." })
      );
    }
    if (checkphone) {
      return (
        checkphone.phone_number &&
        res.status(401).json({success:false, message: "user already exists with this phone number." })
      );
    }
    // ! --------x----------------x---------------
    const user = await User.create(saveObj);
    if(user){
        const payload = {
            _id:user._id
        }
        // ! Generating JWT
        jwt.sign(payload,jwtSecret,{expiresIn:'2h'},((err,token)=>{
            res.status(200).json({success:true, message: "Registration successfull.",token})
        }))
    }else{
        res.status(403).json({success:false, message: "Cannot save user." });
    }
  } catch (error) {
    res.status(500).json({success:false, error: "Internal server error.", message: error.message });
  }
};
// ! Login user...
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email },{status:0});
    if (!user) {
      return res.status(401).json({success:false,message: "User does not exists." });
    } else {
        //* Verifying encrypted password
      const checkpass = await bcrypt.compare(password, user.password);  
      await User.findByIdAndUpdate(user._id,{$set:{status:'active'}})
       if(checkpass){
        res.status(200).json({success:true, message: "Login successfull.",user})
       }else{
        res.status(401).json({success:false, message: "Invalid password."});
       } 
       //* ---------------x---------------
    }
  } catch (error) {
    res.status(500).json({success:false,error: "Internal server error.", message: error.message });
  }
};
module.exports = { register, login };
