const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email : {
        type : String,
        require : true,
    },
    firstName : {
        type : String,
        require : true,
    },
    lastName : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    phoneNumber: {
        type: Number
    }
}, {timestamps:true});

//model
const User = mongoose.model("User",userSchema);
module.exports = User;