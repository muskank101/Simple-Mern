const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const User=require("./models/userModel");
const userRoute=require("./routes/userRoute");

app.use(express.json());
mongoose
.connect(process.env.URI)
.then(() =>{
    console.log("connected successfully");
    app.listen(process.env.PORT || 5000, (err)=>{
        if(err) console.log(err);
        
        console.log("running successfully at",process.env.PORT);
    });
})
.catch((error) =>{
    console.log("error",error);
});

app.use(userRoute);