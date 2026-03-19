const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res) => {
    try{

        const {name, email, password} = req.body;

       if(!name || !email || !password){
            return res.status(400).json({message: "all fileds are required"});
        }

        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({message: "user alreday exist, please login"})
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password:hashedpassword
        })

        await newUser.save();

        return res.status(201).json({message: "registered successfully",
            user: newUser
        })

    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: "server error"})
    }
}

const loginUser = async(req,res) => {
    try{

        const {email, password} = req.body;

       if(!email || !password){
            return res.status(400).json({message: "all fileds are required"});
        }

        const existingUser = await User.findOne({email})

        if(!existingUser){
            return res.status(400).json({message: "please register first"})
        }

        const isMatch = await bcrypt.compare(password,existingUser.password);

        if(!isMatch){
            return res.status(400).json({message: "password is not same"})
        }

        const token = await jwt.sign(
            {id: existingUser._id},
            process.env.SECRET_KEY,
            {expiresIn: "1d"}
        )

        return res.status(200).json({message: "login successful",
            token: token,
            user: existingUser
        })

    }catch(error){
        console.log(error.message)
        return res.status(500).json({message: "server error"})
    }
}


module.exports = {registerUser, loginUser}