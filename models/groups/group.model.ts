import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Group =
  mongoose.models.Group || mongoose.model("groups", GroupSchema);
