import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("users", UserSchema);
