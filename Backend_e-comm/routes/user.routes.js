const express = require('express')
const router = express.Router();
const {register, login,updateUser} = require('../controller/user.controller');
const { validateRegistration,validateLogin,validateUpdation } = require('../validations/users.validator');
const checkLoginMiddleware = require('../middleware/checklogin.middleware');
// ! Registeration form validation ,Register and provide JWT
router.post('/register',validateRegistration,register)  

// ! login form validation and providing JWT
router.post('/login',validateLogin,login)  

// ! update user details
router.put('/update',checkLoginMiddleware,validateUpdation,updateUser);


module.exports = router