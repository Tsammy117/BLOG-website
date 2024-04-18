import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        await mongoose.connect("mongodb+srv://BLOG:Sammed123@cluster0.nad48jt.mongodb.net/");
        console.log(`server running on ${mongoose.connection.host}`);
        console.log("Connected to mongo")
    }
    catch(error){
        console.log(`${error}`);
    }
};

export default connectDB;