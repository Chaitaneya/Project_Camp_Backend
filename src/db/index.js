import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅mongoDB CONNECTED");
        
    }catch (error) {
        console.error("mongoDB connection error", error)
        process.exit(1)
    }
};

export default connectDB;
//mongodb chaitanyapareek07 account!