const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userName : {
        type:String
    },
    password :{
        type : String
    },
    email:{
        type : String
    }
})

const userModel = new mongoose.model("user",userSchema)

module.exports = userModel
