import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/BLOG");
        console.log(`server running on ${mongoose.connection.host}`);
        console.log("Connected to mongo")
    }
    catch(error){
        console.log(`${error}`.bgRed);
    }
};

export default connectDB;