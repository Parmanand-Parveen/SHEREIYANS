const express = require("express")
const userModel = require("./models/user.model")
const productModel = require("./models/product.model")


const app = express()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello")
})

app.post("/create/user",async (req,res)=>{
   const {userName, password,email}=req.body
     const user = await userModel.create({
        userName,
        password,
        email
     })

     res.send(user)
})
app.post("/create/product",async (req,res)=>{
   const {productName , productPrice}=req.body
     const product = await productModel.create({
        productName,
        productPrice
     })

     res.send(product)
})




module.exports = app
