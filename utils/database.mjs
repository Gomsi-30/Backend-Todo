import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to mongodb");
    })
    .catch((e) => {
      console.log("Failed to connect"+e);
    });
};
