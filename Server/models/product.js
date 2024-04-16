const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name : {
        type : String,
    },
    image: {
        url:  String,
        filename : String,
    }, 
    description : {
        type: String,
    },
    price : {
        type: Number,
    },
    stock_quantity : {
        type: Number,
    },
    // isActive: {
    //     type: Boolean,
    //     default: true
    // },

}, {timestamps:true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;