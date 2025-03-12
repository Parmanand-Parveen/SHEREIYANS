const mongoose = require("mongoose")



const connect = async ()=>{

     const connected = await mongoose.connect("mongodb://127.0.0.1:27017/node")
      console.log("Database Connected")
}



module.exports = connect