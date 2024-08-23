import mongoose from "mongoose";

export const connect = async() => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((e) => {
      console.log("Failed to connect"+e);
    });
};
