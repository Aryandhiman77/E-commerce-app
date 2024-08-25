const express = require('express')
const router = express.Router();
const {register, login} = require('../controller/user.controller');
const { validateRegistration,validateLogin } = require('../validations/users.validator');
// const loginMiddleware = require('../middleware/login.middleware')    
// ! Registeration form validation ,Register and provide JWT
router.post('/register',validateRegistration,register)  

// ! login form validation and providing JWT
router.post('/login',validateLogin,login)  

module.exports = router