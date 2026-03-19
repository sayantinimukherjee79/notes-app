const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
},{timestamps: true})

//craete the model withnthe help of mongoose give the name User and its schema will be like userSchema and export that User model so that you can use it in other files
module.exports = mongoose.model("User", userSchema)