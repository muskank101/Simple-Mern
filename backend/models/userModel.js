const mongoose = require("mongoose");

////////// create SCHEMA
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },

});

/////////// create MODEL
const User = mongoose.model('User',userSchema);
module.exports=User;
