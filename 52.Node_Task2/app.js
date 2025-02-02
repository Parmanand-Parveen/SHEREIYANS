const express = require("express")

let app = express()

app.get("/",(req,res)=>{
    res.send("welcome to Node task 2")
})

app.get("/product",(req,res)=>{
    const {category, price} =   req.query
    if(category && price){
        res.send(`Product in ${category} with price less than ${price}`)
    }else if(category){
        res.send(`Product in ${category}`)
    }else if(price){
        res.send(`Product with price less than ${price}`)
    }else{
        res.send("All product")
    }

})

app.get("*",(req,res)=>{
    res.send("Error 404: Page not found")
})

app.listen(3000)