import jwt from "jsonwebtoken"

const isLoggedIn = (req, res, next) => {
    try {
       
        let token = req.cookies.token || req.headers.authorization?.split(" ")[1]
        
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        const user = jwt.verify(token,process.env.JWT_SECRET_KEY)
         
        req.user = user
        next()

    } catch (error) {
        console.log("Error in isLogged in middleware :=>",error)
        res.status(400).json({success:false,message:"Invalid token"})
    }
}


export default isLoggedIn