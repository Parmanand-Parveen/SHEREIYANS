import mongoose from "mongoose";



const postSchema = new mongoose.Schema({
    author :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    content:{
        type: String,
    },
    caption:{
        type: String
    }
})

const postModel = new mongoose.model("post",postSchema)

export default postModel