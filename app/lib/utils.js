import mongoose from "mongoose";
export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
    console.log("connected ok")
  } catch (error) {
    console.log("eror", error)
    throw new Error(error);
  }
};
