import mongoose from "mongoose";

const uri: string | undefined =
  process.env.DATABASE_URL || "mongodb://localhost:27017/todo";

export const mongoConnect: Function = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }

  return await mongoose.connect(uri);
};
