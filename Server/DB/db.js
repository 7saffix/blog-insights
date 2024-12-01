import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connection successful');
    } catch (error) {
        console.log('MongoDB connection failed',error.message.toString());
        process.exit(1)
    }
}

export default connectDB