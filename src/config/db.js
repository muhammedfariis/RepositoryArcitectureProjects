import mongoose from "mongoose";

const MONGO_DB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MONGODB-CONNECTED🍃");
  } catch (err) {
    console.log("DATABASE-CONNECTION-FAILED");
  }
};

export default MONGO_DB;
