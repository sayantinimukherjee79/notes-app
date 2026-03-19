const mongoose = require("mongoose");

const noteDB = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },
    
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
        
},{timestamps: true})

module.exports = mongoose.model("Note", noteDB)