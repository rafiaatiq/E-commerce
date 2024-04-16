const express = require("express");
const Product = require("../models/product");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });
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
router.post("/", upload.single('image'), async (req,res) => {
    console.log("req.body : ",req.body);
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        let url = req.file.path;
        let fileName = req.file.filename;

        const newProduct = new Product(req.body);

        newProduct.image = {url, fileName};

        let savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
        console.log("Product was added");
    } catch (error) {
        console.log(error);
        res.status(400).json({error : error.message});
    }
})


module.exports = router;
