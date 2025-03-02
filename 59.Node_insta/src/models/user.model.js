import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profilepic:{
        type : String
    },
    posts:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "post"
    }]
},{timestamps:true})


const userModel = new mongoose.model("user",userSchema)

export default userModel