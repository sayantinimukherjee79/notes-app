//this file contains connection logic

//this library acts like the bridge between database and backend
const mongoose = require("mongoose")

const connectDB = async() => {
    try{

        await mongoose.connect(process.env.MONGO_URI);
        console.log("database is connected");

    }catch(error){
        console.log("database connection failed", error.message);
    }
}

//exporting connectDB so that i can use it in different file
module.exports = connectDB

