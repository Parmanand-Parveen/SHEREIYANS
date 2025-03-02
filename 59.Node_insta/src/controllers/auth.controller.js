import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const getRegisterPage = async (req, res) => {
   res.render("register")
}

export const getLoginPage = async (req, res) => {
   res.render("login")
}


export const registerUser = async (req, res) => {
   const { username, email, password, profilepic } = req.body
   const existingUser = await userModel.findOne({ email })
   if (existingUser) {
      return res.status(409).json({
         success: false,
         message: "Email already in use"
      })
   }

   const hashedPassword = await bcrypt.hash(password, 10)

   const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      profilepic
   })

   const token = jwt.sign({
      id: user._id,
      email: user.email
   },process.env.JWT_SECRET_KEY)

   res.cookie("token", token)


   res.render("profile", { user })
}


export const loginUser = async (req,res)=>{
    
   try {
      const {email,password}= req.body
    
      const existingUser = await userModel.findOne({email})
     
   
      if(!existingUser){
         return res.status(404).json({success:false,message:"Email not found"})
      }
      const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
       
      if(!isPasswordCorrect){
         return res.status(401).json({success:false , message : "Incorrect Password"})
      }
         
      const token = jwt.sign({id:existingUser._id,email:existingUser.email},process.env.JWT_SECRET_KEY)
         
     res.cookie("token",token)

   //   res.status(200).json({success : true , message: "Logged In successfully",existingUser})
     res.redirect("/user/profile",)
      
   } catch (error) {  
       console.log("Error in login controller :=>",error)
       res.status(500).status({success:false,message:"Internal server error"})
   }

}



export const logout = (req,res)=>{
   res.clearCookie("token")
   res.redirect("/")
}