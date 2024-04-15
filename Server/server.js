const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const User = require("./models/user.js");

const productRoutes = require("./routes/productRoutes.js");


app.use(express.json()); //we can use body parser also
app.use(cors());

main()
.then(()=> {
    console.log("Connection Successfull");
    app.listen(process.env.PORT, (err) => {
        if(err) console.log("Something went worong!");

        console.log("Running Successfully on", process.env.PORT);
    })
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.URL);
}

app.use("/products", productRoutes);

app.get("/", (req, res) => {
    res.send("WORKING APP!!");
})

