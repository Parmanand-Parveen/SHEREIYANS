const express = require("express")

let app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello world")
})


app.get("/greet/:name",(req,res)=>{
    res.send(`Good morning ${req.params.name}`)
    console.log(req.body)
})

app.post("/echo",(req,res)=>{
    console.log(req.body)
    res.send(`Your name : ${req.body?.name} and phone number is: ${req.body?.number}`)
})

app.listen(3000,()=>(
    console.log("App running on port number 3000")
))