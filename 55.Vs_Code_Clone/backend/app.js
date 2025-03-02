const express = require("express")
const fs  = require("fs")
const cores = require("cors")

const app =  express()
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Hello from vs code clone")
})

app.use(cores())

app.post("/file/create", (req,res)=>{
    const {fileName , fileData} = req.body 
     fs.writeFile(`./Uploads/${fileName}` , fileData ,(err,data)=>{
        if(err){
            res.send("Unable to create a file right now")
        }else{
            res.send("File created successfully")
        }
     })

})


app.get("/file/read/:fileName" ,(req,res)=>{
    
    console.log(req.params.fileName)
  
    fs.readFile(`./Uploads/${req.params.fileName}`,"utf-8", (err,data)=>{
        if(err){
            res.send("Unable to read the file to read thefile data right now")
        }else{
            res.send(data)
        }
    })

})


app.patch("/file/update",(req,res)=>{
      const {fileName , fileData}  =  req.body
     fs.writeFile(`./Uploads/${fileName}` , fileData , (err,data)=>{

        if(err){
            res.send("Unable to update the file right now")
        }else{
            res.send(data)
        }
     })
})


app.delete("/file/delete/:fileName" , (req,res)=>{
    fs.unlink(`./Uploads/${req.params.fileName}`,(err)=>{
        if(err){
            res.send("Unable to delete the file")
        }else{
            res.send("File delated successfully")
        }
    })
})

app.get("/file/get-allfile",(req,res)=>{

    fs.readdir("./Uploads",(err,files)=>{
       if(err){
        res.send("Unable to get the file")
       }else{
        res.send(Somethimg = {data:files,
            msg : "All files are sent"
        })
       }
    })
})

app.listen(3000, ()=>{
  console.log("App is running on port number 3000")
})