import { Schema, model, models } from "mongoose";

const GroupSchema = new Schema(
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

export const Group = models.Group || model("groups", GroupSchema);
