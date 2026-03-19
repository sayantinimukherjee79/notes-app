const express  = require("express");
const router = express.Router();


//this file will call these functions to handel the logic 
const {registerUser, loginUser} = require("../controllers/authController")

//register route

router.post("/register", registerUser);

//login route

router.post("/login", loginUser);

module.exports = router