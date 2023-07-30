import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlparser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;

    console.log("Mongo is connected!");
  } catch (error) {
    console.log(error);
  }
};
