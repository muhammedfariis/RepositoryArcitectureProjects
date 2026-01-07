import mongoose from "mongoose";

const database = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("mongodb connected");
  } catch (err) {
    console.log("mongodb not connected");
  }
};
export default database;
