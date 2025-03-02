import postModel from "../models/post.model.js"
import userModel from "../models/user.model.js"




export const showProfilePage = async (req,res)=>{
       const user = await userModel.findById(req.user.id) 
       const posts = await postModel.find({author: req.user.id})
     
         res.render("profile",{user,posts})
}