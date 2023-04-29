import mongoose from "mongoose";

const uri: string | undefined =
  process.env.DATABASE_URL || "mongodb://localhost:27017/todo";

export const mongoConnect = async () => {
  try {
    const { connection }: any = await mongoose.connect(uri);
    if (connection.readyState === 1) {
      return connection.asPromise();
    }
  } catch (error: any) {
    return Promise.reject(error);
  }
};
