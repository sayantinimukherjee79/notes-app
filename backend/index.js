const express = require("express"); // to create server
const cors = require("cors"); // allows frontend to communicate with backend
const dotenv = require("dotenv"); // helps to pick env variables fron env file
const connectDB = require("./config/db");
const authRoutes = require("./router/authRoutes");
const noteRoutes = require("./router/noteRoutes");

dotenv.config(); // helps to pick env variables fron env file
connectDB(); // attaching connecDB with server

//creating server application
const app = express();

//creating middleware
app.use(express.json()) //it converts json data to js
app.use(cors())

//this line will tell the server that if any request is starting with api/auth please go to authRoutes
app.use("/api/auth", authRoutes);

app.use("/api/note", noteRoutes);

const PORT  = process.env.PORT || 7000

// TO TEST IN BROWSER that server is running or not

app.get("/",(req,res) => {
    res.send("server is running");
})


//print in console that server is running in 3000 port

app.listen(PORT,() => {
    console.log(`server is runing on port ${PORT}`)
})




