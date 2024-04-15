const express = require("express");
const Product = require("../models/product");

const router = express.Router();

//Get Product
router.get("/", async (req,res) => {
    try{
        const showAll = await Product.find();
        res.status(200).json(showAll);
        console.log("Found All user");
    } catch (error) {
        console.log(error);
        res.status(500).json({error : error.message});
    }
})

//Post Product
router.post("/", async (req,res) => {
    res.send(req.body);
    // try {
    //     const {name, price, imageUrl, description, stock_quantity} = req.body;
    //     const addProduct = await Product.create({
    //         name : name,
    //         price : price,
    //         imageUrl : imageUrl,
    //         description : description,
    //         stock_quantity : stock_quantity
    //     })
    //     res.status(201).json(addProduct);
    //     console.log("Product was added");
    // } catch (error) {
    //     console.log(error);
    //     res.status(400).json({error : error.message});
    // }
})


module.exports = router;
