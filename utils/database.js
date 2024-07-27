import mongoose from "mongoose";

export const connectDb = async () => {
  // const mongobdString = String(process.env.MONGODB_URI)

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "EchoMedDb",
    });
    console.log("Database connected");
  } catch (error) {
    console.log("error: ", error);
  }
};
