import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ Successfully Database Connected`);
  } catch (error) {
    console.error(`❌ Database Connection have some issue: ${error}`);
  }
};

export default connectDB;
