const mongoose = require("mongoose");

////////// create SCHEMA
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    age:{
        type:Number,
    },

},{ timestamps:true});

/////////// create MODEL
const User = mongoose.model('User',userSchema);
module.exports=User;
