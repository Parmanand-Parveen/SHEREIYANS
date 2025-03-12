const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName :{
        type : String
    },
    productPrice : {
        type : String
    }
})


const productModel = new mongoose.model("product",productSchema)


module.exports = productModel