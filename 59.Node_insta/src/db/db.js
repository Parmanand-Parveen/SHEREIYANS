import mongoose from "mongoose";

const connection = async()=>{
    await mongoose.connect(process.env.DATABASE_URI)
    console.log("Database connected successfully")
}

export default connection